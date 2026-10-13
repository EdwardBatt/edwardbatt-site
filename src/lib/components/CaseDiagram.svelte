<script lang="ts">
	type Tag = 'auto' | 'ai' | 'human' | 'friction';
	type Node = { id: string; x: number; y: number; w: number; label: string; tag: Tag };
	type Edge = { from: string; to: string; label?: string; path?: string };

	let { variant }: { variant: string } = $props();

	const H = 32;
	const diagrams: Record<string, { title: string; h: number; nodes: Node[]; edges: Edge[] }> = {
		agency: {
			title: 'How work moves through the agency platform',
			h: 352,
			nodes: [
				{ id: 'req', x: 95, y: 6, w: 150, label: 'Request captured', tag: 'auto' },
				{ id: 'brief', x: 95, y: 62, w: 150, label: 'AI-assisted brief', tag: 'ai' },
				{ id: 'cap', x: 95, y: 118, w: 150, label: 'Capacity check', tag: 'auto' },
				{ id: 'fit', x: 4, y: 186, w: 140, label: 'Fits: scheduled', tag: 'auto' },
				{ id: 'warn', x: 196, y: 186, w: 140, label: 'Conflict: warning', tag: 'friction' },
				{ id: 'over', x: 196, y: 242, w: 140, label: 'Proceed, logged', tag: 'human' },
				{ id: 'appr', x: 95, y: 312, w: 150, label: 'Human approval', tag: 'human' }
			],
			edges: [
				{ from: 'req', to: 'brief' },
				{ from: 'brief', to: 'cap' },
				{ from: 'cap', to: 'fit', path: 'M140 150 L74 186' },
				{ from: 'cap', to: 'warn', path: 'M200 150 L266 186' },
				{ from: 'warn', to: 'over' },
				{ from: 'fit', to: 'appr', path: 'M74 218 L74 296 L130 312' },
				{ from: 'over', to: 'appr', path: 'M266 274 L266 296 L210 312' }
			]
		},
		esports: {
			title: 'How a GGI tournament runs itself',
			h: 352,
			nodes: [
				{ id: 'reg', x: 95, y: 6, w: 150, label: 'Players register', tag: 'human' },
				{ id: 'fmt', x: 95, y: 62, w: 150, label: 'Format generated', tag: 'auto' },
				{ id: 'fix', x: 95, y: 118, w: 150, label: 'Fixtures generated', tag: 'auto' },
				{ id: 'dis', x: 95, y: 174, w: 150, label: 'Discord channels', tag: 'auto' },
				{ id: 'res', x: 95, y: 230, w: 150, label: 'Results reported', tag: 'human' },
				{ id: 'lb', x: 95, y: 286, w: 150, label: 'Leaderboard updated', tag: 'auto' }
			],
			edges: [
				{ from: 'reg', to: 'fmt' },
				{ from: 'fmt', to: 'fix' },
				{ from: 'fix', to: 'dis' },
				{ from: 'dis', to: 'res' },
				{ from: 'res', to: 'lb' },
				{ from: 'lb', to: 'fix', label: 'next round', path: 'M245 302 L300 302 L300 134 L249 134' }
			]
		},
		ap: {
			title: 'How an invoice is matched and approved',
			h: 352,
			nodes: [
				{ id: 'in', x: 95, y: 6, w: 150, label: 'Invoice arrives', tag: 'auto' },
				{ id: 'ai', x: 95, y: 62, w: 150, label: 'AI reads and matches', tag: 'ai' },
				{ id: 'rule', x: 95, y: 118, w: 150, label: 'Limit check (rules)', tag: 'auto' },
				{ id: 'ok', x: 4, y: 186, w: 140, label: 'Within limit', tag: 'auto' },
				{ id: 'stop', x: 196, y: 186, w: 140, label: 'Over limit: stops', tag: 'friction' },
				{ id: 'sign', x: 196, y: 242, w: 140, label: 'Named approver signs', tag: 'human' },
				{ id: 'post', x: 95, y: 312, w: 150, label: 'Posted, audit logged', tag: 'auto' }
			],
			edges: [
				{ from: 'in', to: 'ai' },
				{ from: 'ai', to: 'rule' },
				{ from: 'rule', to: 'ok', path: 'M140 150 L74 186' },
				{ from: 'rule', to: 'stop', path: 'M200 150 L266 186' },
				{ from: 'stop', to: 'sign' },
				{ from: 'ok', to: 'post', path: 'M74 218 L74 296 L130 312' },
				{ from: 'sign', to: 'post', path: 'M266 274 L266 296 L210 312' }
			]
		}
	};

	const d = $derived(diagrams[variant]);
	const byId = $derived(Object.fromEntries(d.nodes.map((n) => [n.id, n])));

	function straight(e: Edge) {
		const a = byId[e.from];
		const b = byId[e.to];
		const x = a.x + a.w / 2;
		return `M${x} ${a.y + H} L${x} ${b.y - 4}`;
	}
	const colour: Record<Tag, [string, string]> = {
		auto: ['var(--auto)', 'var(--auto-soft)'],
		ai: ['var(--ai)', 'var(--ai-soft)'],
		human: ['var(--human)', 'var(--human-soft)'],
		friction: ['var(--friction)', 'var(--friction-soft)']
	};
</script>

<svg class="diagram" viewBox={`0 0 340 ${d.h}`} role="img" aria-label={d.title}>
	<title>{d.title}</title>
	<defs>
		<marker id={`arrow-${variant}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
			<path d="M0 0 L8 4 L0 8 Z" fill="var(--muted)" />
		</marker>
	</defs>
	{#each d.edges as e}
		<path
			d={e.path ?? straight(e)}
			fill="none"
			stroke="var(--muted)"
			stroke-width="1.6"
			marker-end={`url(#arrow-${variant})`}
		/>
		{#if e.label}<text x="306" y="222" transform="rotate(90 306 222)" text-anchor="middle">{e.label}</text>{/if}
	{/each}
	{#each d.nodes as n}
		<rect x={n.x} y={n.y} width={n.w} height={H} rx="8" fill={colour[n.tag][1]} stroke={colour[n.tag][0]} stroke-width="1.4" />
		<text class="lbl-strong" x={n.x + n.w / 2} y={n.y + 20.5} text-anchor="middle">{n.label}</text>
	{/each}
</svg>
