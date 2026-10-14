<script lang="ts">
	import type { FlowStep } from '$lib/content';

	let { steps, pulse = false }: { steps: FlowStep[]; pulse?: boolean } = $props();

	const glyph: Record<string, string> = { friction: '!', auto: '⟳', ai: 'AI', human: '✓' };
</script>

<ol class="flow">
	{#each steps as step, i}
		<li class={step.tag}>
			<span class="dot" class:pulse={pulse && step.tag === 'friction'} aria-hidden="true"
				>{step.tag ? glyph[step.tag] : i + 1}</span
			>
			<div>
				<div class="step-label">{step.label}</div>
				<div class="step-who">{step.who}</div>
			</div>
			{#if step.note}<div class="step-note">{step.note}</div>{/if}
		</li>
	{/each}
</ol>
