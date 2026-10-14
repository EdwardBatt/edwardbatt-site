<script lang="ts">
	/**
	 * Quote-to-invoice swimlane. Lanes are the people (and the system) who do the work;
	 * time runs left to right. Switching Today → After moves each step from the people
	 * lanes into the automated lane, removes the handovers, and leaves two human decisions.
	 */
	type Tag = 'friction' | 'auto' | 'ai' | 'human';
	type Pos = { lane: number; col: number; tag: Tag; label: string; pill?: string };
	type Item = { id: string; before?: Pos; after?: Pos };

	let { view = $bindable<'before' | 'after'>('before') }: { view?: 'before' | 'after' } = $props();

	const lanes = ['Sales manager', 'Sales admin', 'Warehouse', 'Finance', 'System'];
	const laneY = [42, 98, 154, 210, 276];
	const X0 = 176;
	const PITCH = 104;
	const W = 94;
	const H = 38;

	const items: Item[] = [
		{ id: 'enq', before: { lane: 1, col: 0, tag: 'friction', label: 'Enquiry arrives', pill: '3 channels' }, after: { lane: 4, col: 0, tag: 'auto', label: 'Enquiry captured', pill: 'one record' } },
		{ id: 'ret', before: { lane: 1, col: 1, tag: 'friction', label: 'Details retyped', pill: 'retype 1' }, after: { lane: 4, col: 1, tag: 'ai', label: 'Quote drafted', pill: 'from price list' } },
		{ id: 'quo', before: { lane: 0, col: 2, tag: 'friction', label: 'Quote prepared', pill: 'one person' }, after: { lane: 0, col: 2, tag: 'human', label: 'Quote approved', pill: 'one click' } },
		{ id: 'ord', before: { lane: 1, col: 3, tag: 'friction', label: 'Order confirmed', pill: 'retype 2' }, after: { lane: 4, col: 3, tag: 'auto', label: 'Order + papers', pill: 'nothing retyped' } },
		{ id: 'del', before: { lane: 2, col: 4, tag: 'friction', label: 'Delivery papers', pill: 'retype 3' } },
		{ id: 'inv', before: { lane: 3, col: 5, tag: 'friction', label: 'Invoice raised', pill: 'retype 4' }, after: { lane: 4, col: 4, tag: 'auto', label: 'Invoice issued', pill: 'on delivery' } },
		{ id: 'pay', before: { lane: 3, col: 6, tag: 'friction', label: 'Payment chased', pill: 'by hand' }, after: { lane: 4, col: 5, tag: 'auto', label: 'Reminders sent', pill: 'automatic' } },
		{ id: 'esc', after: { lane: 3, col: 6, tag: 'human', label: 'Overdue: decide', pill: 'person' } }
	];

	const posOf = (p: Pos) => ({ x: X0 + p.col * PITCH, y: laneY[p.lane] });
	const current = $derived(
		items.map((it) => {
			const p = view === 'before' ? it.before : it.after;
			const fallback = it.before ?? it.after!;
			const shown = p ?? fallback;
			return { id: it.id, visible: !!p, lane: shown.lane, tag: shown.tag, label: shown.label, pill: shown.pill, ...posOf(shown) };
		})
	);
	const ordered = $derived(
		current.filter((c) => c.visible).sort((a, b) => a.x - b.x)
	);
	// Handover lines between consecutive steps. They fade out while nodes glide, then fade back in.
	let linesOn = $state(true);
	let last = view;
	$effect(() => {
		if (view !== last) {
			last = view;
			linesOn = false;
			const t = setTimeout(() => (linesOn = true), 720);
			return () => clearTimeout(t);
		}
	});
	const handovers = $derived(
		ordered.slice(1).map((b, i) => {
			const a = ordered[i];
			const cross = a.y !== b.y;
			const mid = a.x + PITCH / 2;
			const d = cross
				? `M${a.x + W / 2} ${a.y} H${mid} V${b.y} H${b.x - W / 2}`
				: `M${a.x + W / 2} ${a.y} H${b.x - W / 2}`;
			const people = cross && a.lane < 4 && b.lane < 4;
			return { d, cross, people, key: a.id + b.id };
		})
	);
	const crossings = $derived(handovers.filter((h) => h.people).length);
	const checkpoints = $derived(ordered.filter((c) => c.tag === 'human').length);
</script>

<svg class="qf" viewBox="0 0 860 330" role="img" aria-label={view === 'before' ? 'Quote to invoice today: seven steps across four people with six handovers' : 'Quote to invoice after: the system does the routine work; a sales manager approves the quote and finance decides on overdue accounts'}>
	<defs>
		<marker id="qf-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
			<path d="M0 0 L8 4 L0 8 Z" class="qf-arrowhead" />
		</marker>
	</defs>

	<!-- Lanes -->
	{#each lanes as name, i}
		<g class="qf-lane" class:system={i === 4} class:active={i === 4 && view === 'after'}>
			<rect x="0" y={laneY[i] - 25} width="860" height="50" rx="0" />
			<text x="14" y={laneY[i] + 4}>{name}</text>
		</g>
	{/each}
	<line class="qf-divider" x1="0" y1="245" x2="860" y2="245" />

	<!-- Handovers -->
	<g class="qf-lines" class:on={linesOn}>
		{#each handovers as h (h.key)}
			<path d={h.d} class="qf-handover" class:cross={h.people} marker-end="url(#qf-arrow)" />
		{/each}
	</g>

	<!-- Steps -->
	{#each current as c (c.id)}
		<g class="qf-node {c.tag}" class:hidden={!c.visible} style={`transform: translate(${c.x}px, ${c.y}px)`}>
			<rect x={-W / 2} y={-H / 2} width={W} height={H} rx="3" />
			<text class="qf-label" y="-1">{c.label}</text>
			{#if c.pill}<text class="qf-pill" y="12">{c.pill}</text>{/if}
		</g>
	{/each}

	<!-- Handover count -->
	<g class="qf-count" transform="translate(846, 324)">
		<text text-anchor="end">{crossings} handover{crossings === 1 ? '' : 's'} between people · {checkpoints} human decision{checkpoints === 1 ? '' : 's'}</text>
	</g>
</svg>
