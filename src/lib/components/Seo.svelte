<script lang="ts">
	import { SITE_URL, EMAIL, LINKEDIN_URL } from '$lib/site';

	let {
		title,
		description,
		path,
		type = 'website',
		image = 'og.png',
		jsonld = []
	}: {
		title: string;
		description: string;
		path: string;
		type?: 'website' | 'article';
		image?: string;
		jsonld?: Record<string, unknown>[];
	} = $props();

	const url = $derived(SITE_URL.replace(/\/$/, '') + path);
	const img = $derived(SITE_URL + image);
	const personId = `${SITE_URL}#edward-batt`;
	const base = [
		{
			'@type': 'Person',
			'@id': personId,
			name: 'Edward Batt',
			url: SITE_URL,
			image: `${SITE_URL}edward-batt.jpg`,
			email: `mailto:${EMAIL}`,
			jobTitle: 'Digital Transformation Specialist and Software Architect',
			description: 'End-to-end digital transformation: process and systems analysis, solution design and architecture, custom software development, systems integration, automation and AI. 30+ years of international operational and executive experience.',
			knowsAbout: ['Digital transformation', 'Business process mapping', 'Solution architecture', 'Software development', 'Systems integration', 'Workflow automation', 'AI implementation', 'Operations management', 'Contracts and procurement'],
			sameAs: [LINKEDIN_URL],
			knowsLanguage: ['English', 'Indonesian', 'Malay'],
			address: { '@type': 'PostalAddress', addressCountry: 'ID' }
		},
		{ '@type': 'WebSite', url: SITE_URL, name: 'Edward Batt', publisher: { '@id': personId } }
	];
	const graph = $derived({ '@context': 'https://schema.org', '@graph': [...base, ...jsonld] });
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="author" content="Edward Batt" />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Edward Batt" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={img} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={img} />
	<meta name="theme-color" content="#ffffff" />
	{@html `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, '\\u003c')}<\/script>`}
</svelte:head>
