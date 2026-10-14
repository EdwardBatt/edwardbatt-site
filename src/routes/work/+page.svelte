<script lang="ts">
	import { cases, otherWork, testimonials } from '$lib/content';
	import { casePages } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import CaseViz from '$lib/viz/CaseViz.svelte';
	import Cta from '$lib/components/Cta.svelte';
	const slugFor = (id: string) => casePages.find((p) => p.id === id)?.slug ?? '';
	const roleFor = (id: string) => casePages.find((p) => p.id === id)?.role ?? '';
	const stackFor = (id: string) => casePages.find((p) => p.id === id)?.stack ?? '';
</script>

<Seo
	title="Work: operational requirements turned into working systems | Edward Batt"
	description="Case studies: an agency operations platform piloted in six weeks, an esports platform that reached 5,000 users in three months, Keystone (an engineering tool with 248 automated tests), and an AI invoice-matching prototype with approval controls."
	path="/work/"
/>

<section class="page-head">
	<div class="wrap">
		<h1>Operational requirements, turned into working systems.</h1>
		<p class="lead">Each case shows the business problem, the approach, what I was personally responsible for, the technology used and the verified outcome. I designed and built every one of these.</p>
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
						<p class="case-meta"><b>My role:</b> {roleFor(c.id)}</p>
						<p class="case-meta"><b>Built with:</b> {stackFor(c.id)}</p>
						<a class="btn ghost" href={`/work/${slugFor(c.id)}/`}>Read the case study</a>
					</div>
					<div class="case-viz"><CaseViz variant={c.id} /></div>
				</article>
			{/each}
		</div>
		<div class="section-head center" style="margin-top: clamp(48px, 6vw, 80px)"><h2 class="h2">Also.</h2></div>
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
