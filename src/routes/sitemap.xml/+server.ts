import { SITE_URL } from '$lib/site';
import { articles, casePages, regions } from '$lib/pages';

export const prerender = true;

export function GET() {
	const base = SITE_URL.replace(/\/$/, '');
	const urls: { path: string; priority: string; lastmod?: string }[] = [
		{ path: '/', priority: '1.0' },
		{ path: '/services/', priority: '0.9' },
		{ path: '/work/', priority: '0.8' },
		...casePages.map((c) => ({ path: `/work/${c.slug}/`, priority: '0.8' })),
		{ path: '/about/', priority: '0.7' },
		{ path: '/contact/', priority: '0.7' },
		...regions.map((r) => ({ path: `/regions/${r.slug}/`, priority: '0.7' })),
		{ path: '/insights/', priority: '0.7' },
		...articles.map((a) => ({ path: `/insights/${a.slug}/`, priority: '0.6', lastmod: a.date }))
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) =>
			`  <url><loc>${base}${u.path}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.priority}</priority></url>`
	)
	.join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
