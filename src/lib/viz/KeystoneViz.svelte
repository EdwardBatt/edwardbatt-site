<script lang="ts">
	import { Player } from './player.svelte';
	import VizFrame from './VizFrame.svelte';

	const steps = [
		'Requirements, decisions, rules, learnings and traps live in the repository as structured files',
		'Every file is validated against a schema',
		'A task starts; its context is compiled deterministically, byte-identical on every run',
		'The AI agent works from that brief, not from memory',
		'A three-role review gate must pass before the task can close',
		'What was learned is written back, so the next task starts smarter'
	];
	const player = new Player(steps.length, 2300);
	const s = $derived(player.step);

	const files = ['requirements', 'decisions', 'tasks', 'rules', 'learnings', 'traps'];
	const stages = [
		{ x: 250, label: 'Validate', sub: 'JSON Schema', tag: 'rule', at: 1 },
		{ x: 390, label: 'Compile', sub: 'deterministic', tag: 'rule', at: 2 },
		{ x: 530, label: 'Agent', sub: 'from the brief', tag: 'ai', at: 3 },
		{ x: 670, label: 'Review gate', sub: '3 roles must pass', tag: 'human', at: 4 }
	];
</script>

<VizFrame
	title="How Keystone briefs an AI agent for each task"
	caption="As built; eight commands, 248 automated tests"
	{steps}
	{player}
	legend={['rule', 'ai', 'human']}
	metric={{ value: '248', label: 'automated tests, byte-identical output' }}
>
	<svg class="ks" viewBox="0 0 800 340" role="img" aria-label={steps[s]}>
		<!-- Repo -->
		<g class="ks-repo">
			<rect x="0" y="40" width="178" height="236" />
			<text class="ks-h" x="14" y="64">Repository</text>
			<text class="ks-sub" x="14" y="80">structured, versioned</text>
			{#each files as f, i}
				<g class="ks-file" class:on={s >= 0} class:valid={s >= 1} class:fresh={s >= 5 && f === 'learnings'} style={`transition-delay: ${i * 70}ms`} transform={`translate(14, ${96 + i * 28})`}>
					<rect width="150" height="20" rx="2" />
					<text x="8" y="14">{f}.yaml</text>
					<text class="ks-tick" x="143" y="14" text-anchor="end">✓</text>
				</g>
			{/each}
		</g>

		<!-- Pipeline -->
		<line class="ks-rail" x1="170" y1="150" x2="730" y2="150" />
		{#each stages as st, i}
			<g class="ks-stage {st.tag}" class:on={s >= st.at} class:now={s === st.at} transform={`translate(${st.x}, 150)`}>
				<rect x="-56" y="-26" width="112" height="52" rx="3" />
				<text class="ks-label" y="-3">{st.label}</text>
				<text class="ks-stsub" y="13">{st.sub}</text>
			</g>
		{/each}

		<!-- Brief card between compile and agent -->
		<g class="ks-brief" class:on={s >= 2} transform="translate(404, 196)">
			<rect width="112" height="60" rx="2" />
			<text class="ks-h" x="10" y="18">task brief</text>
			<text class="ks-sub" x="10" y="34">exactly the context</text>
			<text class="ks-sub" x="10" y="48">this task needs</text>
		</g>

		<!-- Review roles -->
		{#each ['role 1', 'role 2', 'role 3'] as role, i}
			<g class="ks-role" class:on={s >= 4} style={`transition-delay: ${i * 160}ms`} transform={`translate(${618 + i * 38}, 206)`}>
				<circle cx="16" cy="12" r="12" />
				<text x="16" y="16" text-anchor="middle">✓</text>
				<text class="ks-sub" x="16" y="40" text-anchor="middle">{role}</text>
			</g>
		{/each}

		<!-- Learnings loop back -->
		<path class="ks-loop" class:on={s >= 5} d="M726 150 H760 V300 H85 V276" />
		<text class="ks-loopl" class:on={s >= 5} x="420" y="316" text-anchor="middle">learnings and traps written back to the repository</text>

		<!-- Determinism note -->
		<text class="ks-sub ks-det" class:on={s >= 2} x="390" y="100" text-anchor="middle">same inputs → identical output, every run</text>
	</svg>
</VizFrame>
