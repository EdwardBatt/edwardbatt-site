<script lang="ts">
	import { SITE_URL } from '$lib/site';
	import { extras, capabilities, faqs, pricing } from '$lib/content';
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
	title="Services: digital transformation from discovery to deployed software | Edward Batt"
	description="The full digital transformation lifecycle: process discovery and mapping, opportunity analysis, solution design and architecture, custom software development, systems integration, automation, AI implementation, deployment and ongoing improvement. Each part can be engaged on its own."
	path="/services/"
	jsonld={[faqLd, crumbs]}
/>

<section class="page-head">
	<div class="wrap">
		<h1>From discovery to a deployed system. Every stage done by the same person.</h1>
		<p class="lead">
			I take a business problem through analysis, design, build and deployment. Start at the
			beginning, or engage me for the stage you need: a custom build, an integration, a technical
			review, or AI put to work on a specific task.
		</p>
	</div>
</section>

<section class="section" id="stages">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">The lifecycle.</h2>
			<p class="lead">Five stages, each priced before it starts. You decide after each one whether to continue.</p>
		</div>
		<StageExplorer />
	</div>
</section>

<section class="section alt" id="example">
	<div class="wrap"><MappingExample /></div>
</section>

<section class="section" id="engagements">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">Engage me for the part you need.</h2>
			<p class="lead">Each of these stands on its own. If you already know what you need, we skip straight to it.</p>
		</div>
		<div class="extras-grid">
			{#each extras as x}
				<div class="extra"><h3>{x.title}</h3><p>{x.body}</p></div>
			{/each}
		</div>
	</div>
</section>

<section class="section alt" id="capabilities">
	<div class="wrap">
		<div class="section-head center">
			<h2 class="h2">How I build.</h2>
			<p class="lead">I write the code, design the database and deploy the system myself. The technology is chosen to fit the problem, not the other way around.</p>
		</div>
		<div class="symptoms">
			{#each capabilities as c}
				<div class="symptom"><h3>{c.title}</h3><p>{c.body}</p></div>
			{/each}
		</div>
	</div>
</section>

<section class="section" id="pricing">
	<div class="wrap pricing">
		<div>
			<h2 class="h2">A fixed price before anything starts.</h2>
			<div class="prices">
				{#each pricing as p}
					<div class="price"><span class="rg">{p.region}</span><span class="amt">{p.range}</span><span class="nt">{p.note}</span></div>
				{/each}
			</div>
			<p class="small">Every engagement is scoped and priced before it starts. You know the full cost before you commit to anything.</p>
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
