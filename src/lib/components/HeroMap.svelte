<script lang="ts">
	import { onMount } from 'svelte';
	import QuoteFlow from '$lib/viz/QuoteFlow.svelte';

	let view = $state<'before' | 'after'>('before');
	let paused = $state(false);
	let root: HTMLElement;

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			view = 'after';
			return;
		}
		let inView = false;
		const io = new IntersectionObserver((e) => (inView = e[0].isIntersecting), { threshold: 0.3 });
		io.observe(root);
		const timer = window.setInterval(() => {
			if (inView && !paused && document.visibilityState === 'visible') view = view === 'before' ? 'after' : 'before';
		}, 4600);
		return () => {
			io.disconnect();
			window.clearInterval(timer);
		};
	});
</script>

<div
	class="map-card hero-map"
	bind:this={root}
	role="group"
	aria-label="A mapped process, before and after"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	onfocusin={() => (paused = true)}
	onfocusout={() => (paused = false)}
>
	<div class="map-card-head">
		<strong>Quote → invoice, mapped</strong>
		<div class="hero-status">
			{#if view === 'after'}
				<span class="chip auto">0 retypes</span><span class="chip human">2 human decisions</span>
			{:else}
				<span class="chip friction">4 retypes</span><span class="chip friction">1 bottleneck</span>
			{/if}
		</div>
		<div class="hero-switch" role="group" aria-label="Show process">
			<button type="button" aria-pressed={view === 'before'} onclick={() => (view = 'before')}>Today</button>
			<button type="button" aria-pressed={view === 'after'} onclick={() => (view = 'after')}>After</button>
		</div>
	</div>
	<div class="viz-stage"><QuoteFlow bind:view /></div>
</div>
