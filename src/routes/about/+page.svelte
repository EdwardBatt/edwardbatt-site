<script lang="ts">
	import { timeline } from '$lib/content';
	import Seo from '$lib/components/Seo.svelte';
	import Cta from '$lib/components/Cta.svelte';
</script>

<Seo
	title="About Edward Batt: an operator who builds"
	description="30+ years running operations, contracts and procurement across Asia-Pacific, the Middle East, Africa, Australia and South America, then CTO and digital transformation lead. I map how work is done and build the systems that change it."
	path="/about/"
/>

<section class="page-head">
	<div class="wrap about-head">
		<img class="portrait" src="/edward-batt.jpg" alt="Edward Batt" width="144" height="144" />
		<div>
			<h1>An operator who builds.</h1>
			<p class="lead">I understand how the work is really done, and I can build the system that changes it.</p>
		</div>
	</div>
</section>

<section class="section">
	<div class="wrap about">
		<div class="prose">
			<p>
				I’m Edward Batt. For 30+ years I ran operations, contracts and procurement across
				Asia-Pacific, the Middle East, Africa, Australia and South America: oil, gas and LNG,
				logistics and cold chain, mining and infrastructure. Chief Operations Officer, Director of
				Operations, Senior Contracts and Procurement Manager on major energy projects.
			</p>
			<p>
				Then I moved into technology: designing embedded and automation systems, then Chief
				Technology Officer of a regional digital company, and now leading digital transformation for a
				regional creative agency, where I mapped the operating model and built the platform that runs
				intake, scheduling and approvals.
			</p>
			<p>
				That combination is the point. Most transformation advice comes from people who have never run
				an operation, and most software comes from people who have never had to use it under
				pressure. I have done both, and I do both parts of the work myself: the mapping and the
				building.
			</p>
			<h2>How I work</h2>
			<ul>
				<li>Talk to the people who do the work, not only the managers.</li>
				<li>Map before choosing any tool. The map usually makes the tool question small.</li>
				<li>Keep people in control of consequential decisions, by design, not by policy.</li>
				<li>Fixed prices agreed before work starts. No surprises.</li>
				<li>Everything built is yours, documented and handed over.</li>
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
