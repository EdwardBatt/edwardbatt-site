<script lang="ts">
	import { Player } from './player.svelte';
	import VizFrame from './VizFrame.svelte';

	const steps = [
		'A request arrives by WhatsApp, email or form and becomes one record',
		'AI drafts the brief and proposes deliverables from the catalogue; a person completes and approves',
		'Capacity is checked before the work is committed',
		'A conflict raises a warning, but does not block',
		'The team proceeds; the override is logged, a person approves, and the approved items are forwarded automatically to whoever needs them',
		'Exceptions surface on the dashboard'
	];
	const player = new Player(steps.length, 2400);
	const s = $derived(player.step);

	const nodes = [
		{ x: 70, label: 'Request', sub: 'captured', tag: 'auto' },
		{ x: 215, label: 'Brief', sub: 'AI drafts + proposes deliverables', tag: 'ai' },
		{ x: 360, label: 'Capacity', sub: 'checked first', tag: 'auto' },
		{ x: 505, label: 'Schedule', sub: 'warn, never block', tag: 'friction' },
		{ x: 650, label: 'Approve', sub: 'person decides, auto-forwarded', tag: 'human' }
	];
	// Illustrative team load for the week, as a share of capacity.
	const team = [
		{ name: 'Design', base: 0.72, add: 0.38 },
		{ name: 'Copy', base: 0.55, add: 0.12 },
		{ name: 'Video', base: 0.9, add: 0 },
		{ name: 'Account', base: 0.4, add: 0.1 }
	];
	const BAR = 260;
	const log = [
		{ at: 3, tag: 'friction', text: 'Deadline falls on a weekend · warning shown' },
		{ at: 3, tag: 'friction', text: 'Design at 110% this week · warning shown' },
		{ at: 4, tag: 'human', text: 'Proceed anyway · override logged' },
		{ at: 4, tag: 'human', text: 'Approved by a person' },
		{ at: 4, tag: 'auto', text: 'Forwarded to the people who need it · versioned and filed' },
		{ at: 5, tag: 'auto', text: 'Alert raised on exceptions dashboard' }
	];
</script>

<VizFrame
	title="How a request moves through the platform"
	caption="Selected workflow with an illustrative request. Not the complete platform"
	{steps}
	{player}
	legend={['auto', 'ai', 'human', 'friction']}
	metric={{ value: '6 weeks', label: 'from mapping to a working pilot' }}
>
	<svg class="ag" viewBox="0 0 800 340" role="img" aria-label={steps[s]}>
		<defs>
			<pattern id="ag-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
				<line x1="0" y1="0" x2="0" y2="6" class="ag-hatch" />
			</pattern>
			<pattern id="ag-hatch-over" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
				<line x1="0" y1="0" x2="0" y2="6" class="ag-hatch-over" />
			</pattern>
		</defs>

		<!-- Pipeline -->
		<line class="ag-rail" x1="70" y1="44" x2="650" y2="44" />
		<line class="ag-rail-done" x1="70" y1="44" x2={nodes[Math.min(s, 4)].x} y2="44" />
		{#each nodes as n, i}
			<g class="ag-node {n.tag}" class:done={s >= i} class:now={s === i || (i === 4 && s >= 4)} transform={`translate(${n.x}, 44)`}>
				<circle r="13" />
				<text class="ag-nlabel" y="38">{n.label}</text>
				<text class="ag-nsub" y="54">{n.sub}</text>
			</g>
		{/each}
		<circle class="ag-token" r="6" style={`transform: translate(${nodes[Math.min(s, 4)].x}px, 44px)`} />

		<!-- Capacity panel -->
		<g transform="translate(0, 120)">
			<text class="ag-h" x="0" y="10">Capacity this week</text>
			<text class="ag-sub" x="0" y="26">Checked before the work is committed</text>
			{#each team as t, i}
				{@const y = 44 + i * 34}
				{@const over = t.base + t.add > 1}
				<g transform={`translate(0, ${y})`}>
					<text class="ag-tname" x="0" y="13">{t.name}</text>
					<rect class="ag-track" x="70" y="2" width={BAR} height="16" />
					<rect class="ag-fill" x="70" y="2" width={BAR * t.base} height="16" />
					<rect class="ag-add" x={70 + BAR * t.base} y="2" width={s >= 2 ? BAR * Math.min(t.add, 1 - t.base + (over ? 0.04 : 0)) : 0} height="16" fill={over && s >= 3 ? 'url(#ag-hatch-over)' : 'url(#ag-hatch)'} />
					<text class="ag-pct" class:over={over && s >= 3} x={70 + BAR + 18} y="14">{Math.round((t.base + (s >= 2 ? t.add : 0)) * 100)}%</text>
				</g>
			{/each}
			<line class="ag-limit" x1={70 + BAR} y1="40" x2={70 + BAR} y2="178" />
			<text class="ag-sub" x={70 + BAR} y="192" text-anchor="middle">100%</text>
		</g>

		<!-- Log / exceptions panel -->
		<g transform="translate(430, 120)">
			<text class="ag-h" x="0" y="10">Warnings, overrides and approvals</text>
			<text class="ag-sub" x="0" y="26">Nothing is blocked; everything is recorded</text>
			<rect class="ag-panel" x="0" y="38" width="370" height="172" />
			{#each log as l, i}
				<g class="ag-line {l.tag}" class:on={s >= l.at} transform={`translate(12, ${56 + i * 26})`}>
					<circle cx="6" cy="0" r="4" />
					<text x="18" y="4">{l.text}</text>
				</g>
			{/each}
		</g>
	</svg>
</VizFrame>
