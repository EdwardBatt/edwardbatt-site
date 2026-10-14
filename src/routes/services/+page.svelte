<script lang="ts">
	import { SITE_URL } from '$lib/site';
	import { extras, faqs, pricing } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import StageExplorer from '$lib/components/StageExplorer.svelte';
	import MappingExample from '$lib/components/MappingExample.svelte';
	import Cta from '$lib/components/Cta.svelte';

	const faqLd = {
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
	};
	const crumbs = {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
			{ '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}services/` }
		]
	};
</script>

<Seo
	title="Services: process mapping, automation roadmap and implementation | Edward Batt"
	description="One package in five stages: a free discovery call, fixed-price process and systems mapping, an automation and AI roadmap, implementation, and optional support. Plus vendor selection, AI training and systems review."
	path="/services/"
	jsonld={[faqLd, crumbs]}
/>

<section class="page-head">
	<div class="wrap">
		<h1>One package. Five stages. You decide after each one.</h1>
		<p class="lead">
			Start with a free conversation. Mapping is a fixed price agreed up front, and the roadmap is
			yours whether or not I build it.
		</p>
	</div>
</section>

<section class="section" id="stages">
	<div class="wrap">
		<StageExplorer />
	</div>
</section>

<section class="section alt" id="example">
	<div class="wrap"><MappingExample /></div>
</section>

<section class="section" id="also">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">Also part of the package, when you need it.</h2>
			<p class="lead">Added as your situation calls for them. None of these is sold on its own; each one makes the core work stick.</p>
		</div>
		<div class="extras-grid">
			{#each extras as x}
				<div class="extra"><h3>{x.title}</h3><p>{x.body}</p></div>
			{/each}
		</div>
	</div>
</section>

<section class="section alt" id="pricing">
	<div class="wrap pricing">
		<div>
			<h2 class="h2">A fixed price before anything starts.</h2>
			<div class="prices">
				{#each pricing as p}
					<div class="price"><span class="rg">{p.region}</span><span class="amt">{p.range}</span><span class="nt">{p.note}</span></div>
				{/each}
			</div>
			<p class="small">The price depends on how many processes are mapped and how many people and systems they involve. You know the full cost before you commit to anything.</p>
		</div>
		<div class="faq" id="questions">
			<h3>Common questions</h3>
			{#each faqs as f}
				<details><summary>{f.q}</summary><p>{f.a}</p></details>
			{/each}
		</div>
	</div>
</section>

<Cta />
