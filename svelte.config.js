import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			// Case-study media under static/work/ may be referenced before the file is supplied.
			// Warn instead of failing the build; the page falls back to a placeholder panel.
			// Every other broken link still fails the build.
			handleHttpError: ({ status, path, referrer, message }) => {
				if (status === 404 && /^\/work\/[^/]+\/[^/]+\.(gif|png|jpe?g|webp)$/.test(path)) {
					console.warn(`Missing case-study media: ${path} (linked from ${referrer})`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
