<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import type { Player } from './player.svelte';

	let {
		title,
		caption = '',
		steps = [],
		player,
		legend = ['auto', 'ai', 'human', 'friction'],
		metric,
		children
	}: {
		title: string;
		caption?: string;
		steps?: string[];
		player: Player;
		legend?: string[];
		metric?: { value: string; label: string };
		children: Snippet;
	} = $props();

	const names: Record<string, string> = {
		auto: 'Automated',
		ai: 'AI-assisted',
		rule: 'Deterministic control',
		human: 'Human decision',
		friction: 'Exception / friction'
	};
	let root: HTMLElement;
	onMount(() => player.attach(root));
</script>

<figure class="viz" bind:this={root} data-step={player.step}>
	<div class="viz-head">
		<div class="viz-title">
			<strong>{title}</strong>
			{#if caption}<span>{caption}</span>{/if}
		</div>
		{#if metric}<div class="viz-metric"><b>{metric.value}</b><span>{metric.label}</span></div>{/if}
	</div>
	<div class="viz-stage">{@render children()}</div>
	<div class="viz-foot">
		<div class="viz-legend" aria-label="Legend">
			{#each legend as t}<span class="chip {t}">{names[t]}</span>{/each}
		</div>
		{#if steps.length > 1}
			<div class="viz-steps" role="group" aria-label="Steps">
				<button type="button" class="viz-arrow" onclick={() => player.prev()} aria-label="Previous step">‹</button>
				<ol class="viz-dots">
					{#each steps as s, i}
						<li>
							<button type="button" aria-pressed={player.step === i} aria-label={`Step ${i + 1}: ${s}`} onclick={() => player.go(i)}></button>
						</li>
					{/each}
				</ol>
				<button type="button" class="viz-arrow" onclick={() => player.next()} aria-label="Next step">›</button>
				<span class="viz-step-label" aria-live="polite">{steps[player.step]}</span>
			</div>
		{/if}
	</div>
</figure>
