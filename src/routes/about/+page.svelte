<script lang="ts">
	import { timeline } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<Seo
	title="About Edward Batt: I solve business problems. I build the solutions."
	description="Digital transformation specialist combining 30+ years of international executive and operational experience with hands-on software architecture and engineering. I analyse how a business operates and design and build the solution myself."
	path="/about/"
/>

<section class="page-head">
	<div class="wrap about-head">
		<img class="portrait" src="/edward-batt.jpg" alt="Edward Batt" width="144" height="144" />
		<div>
			<h1>I solve business problems. I build the solutions.</h1>
			<p class="lead">From business strategy and operational transformation to software architecture and development, I bridge the gap between understanding what needs to change and making it happen.</p>
		</div>
	</div>
</section>

<section class="section">
	<div class="wrap about">
		<div class="prose">
			<p>
				I’m Edward Batt. Digital transformation has two halves: understanding how a business really
				operates, and building the technology that changes it. Most people do one. I do both, and I
				do them myself.
			</p>
			<h2>The operational half</h2>
			<p>
				For 30+ years I ran operations, contracts and procurement across Asia-Pacific, the Middle East,
				Africa, Australia and South America: oil, gas and LNG projects, logistics and cold chain,
				mining and infrastructure. Chief Operations Officer, Director of Operations, Senior Contracts
				and Procurement Manager on major energy developments.
			</p>
			<p>
				That is not a separate advisory service. It is why the analysis is sound: I know what a
				process looks like from inside it, what people will and will not adopt, and the difference
				between a problem that needs software and one that needs a decision.
			</p>
			<h2>The technical half</h2>
			<p>
				I design and build software: multi-tenant web applications, database architecture, systems
				integration, automated workflows and AI components, deployed to the cloud with automated
				tests. As Chief Technology Officer of a regional digital company I was solution architect and
				lead developer of an esports platform that reached 5,000 users in three months. I now lead
				digital transformation for a regional creative agency, where I mapped the operating model and
				built the platform that runs intake, scheduling and approvals.
			</p>
			<p>
				Before that I designed embedded and automation systems. The
				<a href="/work/keystone-ai-development-context/">Keystone</a> case study, a tool I built to
				keep AI-assisted development disciplined, is the clearest picture of how I engineer.
			</p>
			<h2>How I work</h2>
			<ul>
				<li>Talk to the people who do the work, not only the managers.</li>
				<li>Understand the problem before choosing any technology. The technology must fit the business, not the other way around.</li>
				<li>Custom build, existing platform, integration, automation, AI, or a combination: whichever solves it.</li>
				<li>Keep people in control of consequential decisions, by design, not by policy.</li>
				<li>Fixed prices agreed before work starts. Everything built is yours, documented and handed over.</li>
			</ul>
			<h2>Languages and location</h2>
			<p>
				English, Bahasa Indonesia and Malay. Based in Indonesia (UTC+7), which puts the whole Asia-Pacific
				working day and the European morning and afternoon inside mine. Remote by default; on site in
				Indonesia and the region when it helps.
			</p>
		</div>
		<ol class="timeline" aria-label="Career">
			{#each timeline as t}
				<li><span class="y">{t.years}</span><span><span class="r">{t.role}</span><br /><span class="o">{t.org}</span></span></li>
			{/each}
		</ol>
	</div>
</section>

<Cta />
