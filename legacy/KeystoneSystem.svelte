<script lang="ts">
	const artifacts = [
		{
			name: 'Specifications',
			purpose: 'Define the intended system.',
			relation: 'Specifications inform features and the work needed to implement them.',
			related: ['Features', 'Tasks'],
		},
		{
			name: 'Features',
			purpose: 'Connect intent to delivery.',
			relation: 'Features connect specifications to implementation tasks.',
			related: ['Specifications', 'Tasks'],
		},
		{
			name: 'Tasks',
			purpose: 'Keep implementation grounded.',
			relation: 'Tasks relate to features and the decisions and rules that constrain the work.',
			related: ['Features', 'ADRs', 'Rules'],
		},
		{
			name: 'ADRs',
			purpose: 'Preserve architectural decisions.',
			relation: 'Recorded decisions retain the rationale that informs implementation.',
			related: ['Specifications', 'Tasks'],
		},
		{
			name: 'Rules',
			purpose: 'Make constraints explicit.',
			relation: 'Rules provide persistent constraints for tasks and skills.',
			related: ['Tasks', 'Skills'],
		},
		{
			name: 'Skills',
			purpose: 'Retain reusable ways of working.',
			relation: 'Skills describe methods used in development, alongside the applicable rules.',
			related: ['Rules', 'Tasks'],
		},
		{
			name: 'Learnings',
			purpose: 'Keep useful knowledge.',
			relation: 'Learnings retain discoveries that can inform subsequent work.',
			related: ['Tasks', 'Traps'],
		},
		{
			name: 'Traps',
			purpose: 'Remember what to avoid.',
			relation: 'Traps capture known pitfalls so future development can account for them.',
			related: ['Learnings', 'Tasks'],
		},
	];
	let selected = $state(2);
</script>

<div class="keystone-system">
	<div class="exhibit-toolbar">
		<p class="exhibit-caption">Illustrative artifact relationships</p>
		<span class="system-annotation">Repository-native context</span>
	</div>
	<div class="context-workspace">
		<div class="artifact-register" role="group" aria-label="Explore Keystone artifact types">
			{#each artifacts as artifact, index}<button
					type="button"
					aria-pressed={selected === index}
					onclick={() => (selected = index)}
					><span class="artifact-symbol" aria-hidden="true"></span>{artifact.name}<span
						class="artifact-selection"
						aria-hidden="true">{selected === index ? '↗' : ''}</span
					></button
				>{/each}
		</div>
		<div class="artifact-detail" aria-live="polite">
			<p class="system-annotation">{artifacts[selected].name}</p>
			<h4>{artifacts[selected].purpose}</h4>
			<p class="artifact-description">{artifacts[selected].relation}</p>
			<div class="related-artifacts">
				<span class="system-annotation">Related context</span
				>{#each artifacts[selected].related as relation}<span class="related-artifact"
						><span aria-hidden="true">↳</span>{relation}</span
					>{/each}
			</div>
		</div>
	</div>
	<div class="context-validation">
		<span class="gate-symbol" aria-hidden="true"></span>
		<div>
			<h4>Index relationships. Validate context.</h4>
			<p>
				Explicit artifacts and deterministic relationships make development context inspectable.
			</p>
		</div>
	</div>
</div>
