<script lang="ts">
	import { cases, otherWork, testimonials } from '$lib/content';
	import { casePages } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import CaseDiagram from '$lib/components/CaseDiagram.svelte';
	import Cta from '$lib/components/Cta.svelte';
	const slugFor = (id: string) => casePages.find((p) => p.id === id)?.slug ?? '';
</script>

<Seo
	title="Work: operations platforms, automation and AI with controls | Edward Batt"
	description="Case studies: a creative agency operations platform piloted in six weeks, an esports platform that reached 5,000 users in three months, and an AI invoice-matching prototype with approval controls."
	path="/work/"
/>

<section class="page-head">
	<div class="wrap">
		<h1>Mapped, built and running.</h1>
		<p class="lead">I design and build the systems myself, so every roadmap is grounded in what can actually be delivered.</p>
	</div>
</section>

<section class="section">
	<div class="wrap">
		<div class="cases">
			{#each cases as c}
				<article class="case">
					<div class="case-body">
						<div class="case-kicker"><span class="chip ai">{c.kicker}</span>{#if c.status}<span class="status">{c.status}</span>{/if}</div>
						<h2><a href={`/work/${slugFor(c.id)}/`}>{c.title}</a></h2>
						<p class="client">{c.client}</p>
						<p class="problem">{c.problem}</p>
						<ul>{#each c.did as item}<li>{item}</li>{/each}</ul>
						<a class="btn ghost" href={`/work/${slugFor(c.id)}/`}>Read the case study</a>
					</div>
					<div class="case-side">
						<CaseDiagram variant={c.id} />
						<div class="figure"><div class="v">{c.outcomeFigure}</div><p class="l">{c.outcomeLabel}</p><p class="o">{c.outcome}</p></div>
					</div>
				</article>
			{/each}
		</div>
		<div class="other">
			{#each otherWork as w}<div><h3>{w.name}</h3><p>{w.body}</p></div>{/each}
		</div>
	</div>
</section>

<section class="section alt">
	<div class="wrap">
		<div class="section-head center"><h2 class="h2">What clients say.</h2></div>
		<div class="quotes">
			{#each testimonials as t}
				<figure class="quote"><blockquote><p>{t.quote}</p></blockquote><figcaption><span class="qn">{t.name}</span><span class="qr">{t.role}</span></figcaption></figure>
			{/each}
		</div>
	</div>
</section>

<Cta />
