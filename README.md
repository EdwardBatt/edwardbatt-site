# Edward Batt — Portfolio

Static SvelteKit 2 + Svelte 5 site. Split out of the `reaptor-platform` monorepo (originally `apps/frontend`, commits `62f70e6c` and `5c889c1b`).

```bash
npm install
npm run dev      # local dev
npm run build    # static output in build/
```

Deploys as plain static files (`@sveltejs/adapter-static`) — works on Vercel, Netlify, Cloudflare Pages, etc. with no config.

**Domain:** the canonical URL lives in `src/lib/site.ts`; `static/robots.txt` and `static/sitemap.xml` also reference it.
