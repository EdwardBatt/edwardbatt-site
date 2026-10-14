<script lang="ts">
	import { articles } from '$lib/pages';
	import Seo from '$lib/components/Seo.svelte';
	import Cta from '$lib/components/Cta.svelte';
	const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<Seo
	title="Insights on process mapping, automation and practical AI | Edward Batt"
	description="Short, practical articles on mapping business processes, where AI saves time in a mid-sized company, and how to keep people in control of the decisions that matter."
	path="/insights/"
/>

<section class="page-head">
	<div class="wrap">
		<h1>Insights.</h1>
		<p class="lead">Short, practical notes from the work: mapping processes, choosing where to automate, and using AI without losing control.</p>
	</div>
</section>

<section class="section">
	<div class="wrap">
		<div class="article-list">
			{#each articles as a}
				<a class="article-row" href={`/insights/${a.slug}/`}>
					<span class="meta">{fmt(a.date)} · {a.minutes} min read</span>
					<h2>{a.title}</h2>
					<p>{a.description}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<Cta />
