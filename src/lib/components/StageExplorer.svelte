<script lang="ts">
	import { stages } from '$lib/content';

	let active = $state(0);

	function onKey(event: KeyboardEvent) {
		if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
			active = Math.min(stages.length - 1, active + 1);
			event.preventDefault();
		} else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
			active = Math.max(0, active - 1);
			event.preventDefault();
		} else return;
		document.getElementById(`stage-tab-${active}`)?.focus();
	}
</script>

<div class="stage-rail" role="tablist" aria-label="The five stages" tabindex="-1" onkeydown={onKey}>
	{#each stages as s, i}
		<button
			class="stage-btn"
			role="tab"
			id={`stage-tab-${i}`}
			aria-selected={active === i}
			aria-controls={`stage-panel-${i}`}
			tabindex={active === i ? 0 : -1}
			onclick={() => (active = i)}
		>
			<span class="num">{String(i + 1).padStart(2, '0')}</span>
			<span class="nm">{s.name}</span>
			<span class="meta">{s.price}</span>
		</button>
	{/each}
</div>

<!-- Every stage is rendered into the page so search engines and AI assistants can read all of it;
     only the selected one is shown. The panels share one grid cell, so the area is always as tall as
     the longest stage and the Previous / Next buttons, pinned to its bottom, never move. -->
<div class="stage-panels">
{#each stages as stage, i}
	<div
		class="stage-panel"
		class:current={active === i}
		id={`stage-panel-${i}`}
		role="tabpanel"
		aria-labelledby={`stage-tab-${i}`}
		aria-hidden={active !== i}
		inert={active !== i}
	>
		<div class="stage-main">
			<h3>{String(i + 1).padStart(2, '0')} · {stage.name}</h3>
			<div class="tags">
				<span class="tag">{stage.when}</span>
				<span class="tag tag-price">{stage.price}</span>
			</div>
			<p>{stage.happens}</p>
		</div>
		<div class="stage-receive">
			<p class="receive-h">What you receive</p>
			<ul class="receive">
				{#each stage.receive as item}<li>{item}</li>{/each}
			</ul>
		</div>
		<div class="stage-nav">
			<button type="button" disabled={i === 0} onclick={() => (active = i - 1)}>← Previous</button>
			<button type="button" disabled={i === stages.length - 1} onclick={() => (active = i + 1)}
				>Next stage →</button
			>
		</div>
	</div>
{/each}
</div>
