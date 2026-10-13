<script lang="ts">
	const stages = [
		{
			name: 'Ingestion',
			description:
				'LLM-assisted ingestion helps turn incoming requirements and creator information into usable context.',
		},
		{
			name: 'Matching',
			description:
				'Algorithmic matching connects interpreted requirements with creator information to support recommendations.',
		},
		{
			name: 'Human decision',
			description:
				'Recommendations support a person’s judgement. The final choice stays with a human.',
		},
	];
	let selected = $state(1);
</script>

<div class="sidegig-system system-exhibit" data-stage={selected}>
	<div class="exhibit-toolbar">
		<p class="exhibit-caption">Illustrative matching architecture</p>
	</div>
	<div class="matching-inputs">
		<div class="matching-source">
			<span class="source-mark" aria-hidden="true"></span>
			<h4>Brands</h4>
			<p>Requirements &amp; opportunities</p>
		</div>
		<div class="matching-source">
			<span class="source-mark source-mark-creator" aria-hidden="true"></span>
			<h4>Creators</h4>
			<p>Profiles &amp; content</p>
		</div>
	</div>
	<div class="matching-aperture" aria-hidden="true">
		<span></span><span></span><span></span><span></span><span></span>
	</div>
	<div class="matching-core" class:stage-highlight={selected === 1}>
		<span class="system-annotation">Interpretation + matching</span>
		<p>Commercial logic.<br />Technical architecture.</p>
	</div>
	<div class="matching-recommendation">
		<span aria-hidden="true"></span>
		<p>Recommended connections</p>
		<span aria-hidden="true"></span>
	</div>
	<div class="matching-human" class:stage-highlight={selected === 2}>
		<span class="gate-symbol" aria-hidden="true"></span>
		<p>Human choice</p>
	</div>
	<div class="matching-controls" role="group" aria-label="Explore the Sidegig architecture">
		{#each stages as stage, index}<button
				type="button"
				aria-pressed={selected === index}
				onclick={() => (selected = index)}>{stage.name}</button
			>{/each}
	</div>
	<p class="system-response" aria-live="polite">{stages[selected].description}</p>
</div>
