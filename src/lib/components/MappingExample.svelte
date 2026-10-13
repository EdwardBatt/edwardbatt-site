<script lang="ts">
	import { exampleAfter, exampleBefore } from '$lib/content';
	import FlowList from './FlowList.svelte';

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
	<div>
		<p class="eyebrow">What a mapping shows you</p>
		<h2 class="h2">The same work, mapped then fixed.</h2>
		<p class="lead">
			An illustrative quote-to-invoice process in a 40-person distribution company. Every step is
			real work someone does today. Switch to see what the roadmap changes, and where people keep
			the decision.
		</p>
		<div class="toggle" role="group" aria-label="Show process">
			<button type="button" aria-pressed={view === 'before'} onclick={() => (view = 'before')}
				>Today</button
			>
			<button type="button" aria-pressed={view === 'after'} onclick={() => (view = 'after')}
				>After the roadmap</button
			>
		</div>
		<div class="stats" aria-live="polite">
			<div class="stat">
				<div class="v" class:bad={friction > 0} class:good={friction === 0}>{friction}</div>
				<div class="l">friction points</div>
			</div>
			<div class="stat">
				<div class="v" class:bad={current.retypes > 0} class:good={current.retypes === 0}>
					{current.retypes}
				</div>
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
	<!-- Both versions are in the page for search engines and AI assistants; one is shown at a time. -->
	{#each Object.entries(views) as [key, v]}
		<div class="map-card" hidden={view !== key}>
			<div class="map-card-head">
				<strong>Quote → invoice{key === 'before' ? ' · today' : ' · after the roadmap'}</strong>
				<span>{v.label}</span>
			</div>
			<FlowList steps={v.steps} />
		</div>
	{/each}
</div>
