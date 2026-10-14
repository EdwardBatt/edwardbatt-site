<script lang="ts">
	import { exampleAfter, exampleBefore } from '$lib/content';
	import QuoteFlow from '$lib/viz/QuoteFlow.svelte';

	let view = $state<'before' | 'after'>('before');
	const views = {
		before: { steps: exampleBefore, label: 'Current state · 7 steps', retypes: 4 },
		after: { steps: exampleAfter, label: 'Future state · 6 steps', retypes: 0 }
	};
	const current = $derived(views[view]);
	const friction = $derived(current.steps.filter((s) => s.tag === 'friction').length);
	const checkpoints = $derived(current.steps.filter((s) => s.tag === 'human').length);
</script>

<div class="example">
	<div class="example-intro">
		<p class="eyebrow">What a mapping shows you</p>
		<h2 class="h2">The same work, mapped then fixed.</h2>
		<p class="lead">
			An illustrative quote-to-invoice process in a 40-person distribution company. Each lane is a
			person or team; time runs left to right. Switch to see the routine work move into the system,
			the handovers disappear, and the two decisions that stay with people.
		</p>
		<div class="toggle" role="group" aria-label="Show process">
			<button type="button" aria-pressed={view === 'before'} onclick={() => (view = 'before')}>Today</button>
			<button type="button" aria-pressed={view === 'after'} onclick={() => (view = 'after')}>After</button>
		</div>
		<div class="stats" aria-live="polite">
			<div class="stat">
				<div class="v" class:bad={friction > 0} class:good={friction === 0}>{friction}</div>
				<div class="l">friction points</div>
			</div>
			<div class="stat">
				<div class="v" class:bad={current.retypes > 0} class:good={current.retypes === 0}>{current.retypes}</div>
				<div class="l">times data is retyped</div>
			</div>
			<div class="stat">
				<div class="v">{checkpoints}</div>
				<div class="l">human decision points</div>
			</div>
		</div>
		<div class="legend">
			<span class="chip friction">Friction</span>
			<span class="chip auto">Automated</span>
			<span class="chip ai">AI-assisted</span>
			<span class="chip human">Human decision</span>
		</div>
		<p class="disclaimer">Illustrative example. Your map is built from interviews with your own team.</p>
	</div>
	<div class="map-card example-card">
		<div class="map-card-head">
			<strong>Quote → invoice{view === 'before' ? ' · today' : ' · after'}</strong>
			<span>{current.label}</span>
		</div>
		<div class="viz-stage"><QuoteFlow bind:view /></div>
		<!-- Both states as text, for search engines and assistive technology. -->
		<div class="visually-hidden">
			{#each Object.entries(views) as [key, v]}
				<h3>{key === 'before' ? 'Today' : 'After'}</h3>
				<ol>{#each v.steps as st}<li>{st.label}: {st.who}{st.note ? `. ${st.note}` : ''}</li>{/each}</ol>
			{/each}
		</div>
	</div>
</div>
