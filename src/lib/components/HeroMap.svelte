<script lang="ts">
	import { onMount } from 'svelte';
	import { exampleAfter, exampleBefore } from '$lib/content';
	import FlowList from './FlowList.svelte';

	const before = exampleBefore.slice(0, 6);
	const after = exampleAfter;

	let showAfter = $state(false);
	let paused = $state(false);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const timer = window.setInterval(() => {
			if (!paused && document.visibilityState === 'visible') showAfter = !showAfter;
		}, 4200);
		return () => window.clearInterval(timer);
	});
</script>

<div
	class="map-card hero-map"
	class:is-after={showAfter}
	role="group"
	aria-label="A mapped process, before and after"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	onfocusin={() => (paused = true)}
	onfocusout={() => (paused = false)}
>
	<div class="map-card-head">
		<strong>Quote → invoice</strong>
		<div class="hero-switch" role="group" aria-label="Show process">
			<button type="button" aria-pressed={!showAfter} onclick={() => (showAfter = false)}>Today</button>
			<button type="button" aria-pressed={showAfter} onclick={() => (showAfter = true)}>After</button>
		</div>
	</div>
	<div class="hero-status">
		{#if showAfter}
			<span class="chip auto">0 retypes</span><span class="chip human">2 human checkpoints</span>
		{:else}
			<span class="chip friction">6 friction points</span><span class="chip friction">4 retypes</span>
		{/if}
	</div>
	<div class="hero-flows">
		<div class="hero-flow" aria-hidden={showAfter} inert={showAfter}>
			<FlowList steps={before} pulse />
		</div>
		<div class="hero-flow" aria-hidden={!showAfter} inert={!showAfter}>
			<FlowList steps={after} />
		</div>
	</div>
</div>
