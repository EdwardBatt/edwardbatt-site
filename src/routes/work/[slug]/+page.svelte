<script lang="ts">
	import { SITE_URL } from '$lib/site';
	import { testimonials } from '$lib/content';
	import { casePages } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import CaseViz from '$lib/viz/CaseViz.svelte';
	import Cta from '$lib/components/Cta.svelte';

	let { data } = $props();
	const { page, summary } = $derived(data);
	const quote = $derived(page.id === 'esports' ? testimonials.find((t) => t.role.includes('ESTAZ')) : undefined);
	const others = $derived(casePages.filter((c) => c.slug !== page.slug));
	const crumbs = $derived({
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
			{ '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}work/` },
			{ '@type': 'ListItem', position: 3, name: summary.title, item: `${SITE_URL}work/${page.slug}/` }
		]
	});
</script>

<Seo title={`${summary.title} | Edward Batt`} description={page.description} path={`/work/${page.slug}/`} jsonld={[crumbs]} />

<section class="page-head">
	<div class="wrap">
		<p class="crumb"><a href="/work/">Work</a></p>
		<div class="case-kicker"><span class="chip ai">{summary.kicker}</span>{#if summary.status}<span class="status">{summary.status}</span>{/if}</div>
		<h1>{page.title}</h1>
		<p class="lead">{summary.client}</p>
	</div>
</section>

<section class="section case-hero">
	<div class="wrap"><CaseViz variant={page.id} /></div>
</section>

<section class="section case-detail">
	<div class="wrap case-layout">
		<div class="prose">
			{#each page.sections as s}
				<h2>{s.heading}</h2>
				{#each s.paragraphs as p}<p>{p}</p>{/each}
				{#if s.bullets}<ul>{#each s.bullets as b}<li>{b}</li>{/each}</ul>{/if}
			{/each}
			{#if page.stack}
				<h2>Built with</h2>
				<p>{page.stack}</p>
			{/if}
			{#if quote}
				<figure class="quote inline">
					<blockquote><p>{quote.quote}</p></blockquote>
					<figcaption><span class="qn">{quote.name}</span><span class="qr">{quote.role}</span></figcaption>
				</figure>
			{/if}
		</div>
		<aside class="case-aside">
			<div class="aside-links">
				<h3>Outcome</h3>
				<p class="aside-text">{summary.outcome}</p>
			</div>
			<div class="aside-links">
				<h3>My role</h3>
				<p class="aside-text">{page.role}</p>
			</div>
			<div class="aside-links">
				<h3>More work</h3>
				{#each others as o}<a href={`/work/${o.slug}/`}>{o.title}</a>{/each}
			</div>
		</aside>
	</div>
</section>

<Cta title="Have a challenge like this one?" lead="A free 20-minute conversation about your business, what is getting in the way, and what it would take to fix it." />
