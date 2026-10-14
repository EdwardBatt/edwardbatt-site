<script lang="ts">
	import { SITE_URL } from '$lib/site';
	import { stages } from '$lib/content';
	import { casePages } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import Cta from '$lib/components/Cta.svelte';

	let { data } = $props();
	const r = $derived(data.region);
	const relevant = $derived(r.slug === 'middle-east' ? casePages.slice(0, 2) : casePages);
	const ld = $derived({
		'@type': 'Service',
		name: `Digital transformation consulting, ${r.name}`,
		provider: { '@id': `${SITE_URL}#edward-batt` },
		areaServed: r.markets.replace(/\.$/, '').split(/,\s|\sand\s/),
		description: r.description
	});
</script>

<Seo title={`${r.title} | Edward Batt`} description={r.description} path={`/regions/${r.slug}/`} jsonld={[ld]} />

<section class="page-head">
	<div class="wrap">
		<h1>{r.title}</h1>
		<p class="lead">{r.description}</p>
	</div>
</section>

<section class="section">
	<div class="wrap region-grid">
		<div class="prose">
			{#each r.intro as p}<p>{p}</p>{/each}
			<p><strong>Markets:</strong> {r.markets}</p>
		</div>
		<div class="why-grid">
			{#each r.why as w}
				<div class="extra"><h3>{w.heading}</h3><p>{w.body}</p></div>
			{/each}
		</div>
	</div>
</section>

<section class="section alt">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">The same package, wherever you are.</h2></div>
		<ol class="stage-strip">
			{#each stages as s, i}
				<li><span class="num">{String(i + 1).padStart(2, '0')}</span><h3>{s.name}</h3><p>{s.happens}</p><span class="meta">{s.price}</span></li>
			{/each}
		</ol>
		<p class="center-link"><a class="btn ghost" href="/services/">How it works, in detail</a></p>
	</div>
</section>

<section class="section">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">Relevant work.</h2></div>
		<div class="article-grid">
			{#each relevant as c}
				<a class="article-card" href={`/work/${c.slug}/`}><h3>{c.title}</h3><p>{c.description}</p><span class="meta">Case study</span></a>
			{/each}
		</div>
	</div>
</section>

<Cta />
