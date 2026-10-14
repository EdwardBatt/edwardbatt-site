<script lang="ts">
	import { SITE_URL } from '$lib/site';
	import { articles } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import Cta from '$lib/components/Cta.svelte';

	let { data } = $props();
	const a = $derived(data.article);
	const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
	const others = $derived(articles.filter((x) => x.slug !== a.slug).slice(0, 2));
	const ld = $derived({
		'@type': 'Article',
		headline: a.title,
		description: a.description,
		datePublished: a.date,
		dateModified: a.date,
		author: { '@id': `${SITE_URL}#edward-batt` },
		publisher: { '@id': `${SITE_URL}#edward-batt` },
		mainEntityOfPage: `${SITE_URL}insights/${a.slug}/`,
		image: `${SITE_URL}og.png`
	});
</script>

<Seo title={`${a.title} | Edward Batt`} description={a.description} path={`/insights/${a.slug}/`} type="article" jsonld={[ld]} />

<article>
	<section class="page-head">
		<div class="wrap article-head">
			<p class="crumb"><a href="/insights/">Insights</a></p>
			<h1>{a.title}</h1>
			<p class="meta">{fmt(a.date)} · {a.minutes} min read · Edward Batt</p>
		</div>
	</section>
	<section class="section">
		<div class="wrap article-body">
			<div class="prose">{@html a.html}</div>
			<aside class="aside-links">
				<h3>More insights</h3>
				{#each others as o}<a href={`/insights/${o.slug}/`}>{o.title}</a>{/each}
			</aside>
		</div>
	</section>
</article>

<Cta title="Want this done for your business?" lead="Twenty minutes, no charge, to see whether mapping would pay for itself." />
