<script lang="ts">
	import { Player } from './player.svelte';
	import VizFrame from './VizFrame.svelte';

	const steps = [
		'An invoice arrives',
		'The AI reads it and matches it to the purchase order',
		'A fixed rule checks the approval limit: within limit, so it posts',
		'A second, larger invoice arrives and is matched',
		'Over the limit: the rule halts it and waits for a named approver',
		'The approver signs with their own key; it posts, and every step is in the ledger'
	];
	const player = new Player(steps.length, 2300);
	const s = $derived(player.step);

	// Illustrative amounts. The limit is enforced by rules outside the AI.
	const LIMIT = 10000;
	const invoices = [
		{ id: 'A', no: 'INV-2291', po: 'PO-1042', amount: 4200, from: 0, matched: 1, decided: 2, posted: 2 },
		{ id: 'B', no: 'INV-2304', po: 'PO-1057', amount: 48000, from: 3, matched: 3, decided: 4, posted: 5 }
	];
	const active = $derived(s >= 3 ? invoices[1] : invoices[0]);
	const over = $derived(active.amount > LIMIT);
	const fmt = (n: number) => '$' + n.toLocaleString('en-US');
	const ledger = [
		{ at: 1, tag: 'ai', text: 'INV-2291 matched to PO-1042 · 3 of 3 fields' },
		{ at: 2, tag: 'rule', text: 'INV-2291 $4,200 within limit · posted' },
		{ at: 3, tag: 'ai', text: 'INV-2304 matched to PO-1057 · 3 of 3 fields' },
		{ at: 4, tag: 'rule', text: 'INV-2304 $48,000 over limit · halted' },
		{ at: 5, tag: 'human', text: 'INV-2304 approved · signature verified · posted' }
	];
	const fields = ['Supplier', 'Amount', 'Line items'];
</script>

<VizFrame
	title="How an invoice is matched and approved"
	caption="Selected workflow with illustrative amounts; the control model is as built"
	{steps}
	{player}
	legend={['ai', 'rule', 'human', 'friction']}
	metric={{ value: '0', label: 'payments the AI can approve beyond its limit' }}
>
	<svg class="iv" viewBox="0 0 800 340" role="img" aria-label={steps[s]}>
		<!-- Zones -->
		{#each [{ x: 0, w: 250, h: 'AI', sub: 'reads and matches', tag: 'ai' }, { x: 275, w: 250, h: 'Deterministic rule', sub: 'outside the model', tag: 'rule' }, { x: 550, w: 250, h: 'Named approver', sub: 'signs over the limit', tag: 'human' }] as z}
			<g class="iv-zone {z.tag}" transform={`translate(${z.x}, 0)`}>
				<rect width={z.w} height="236" />
				<text class="iv-h" x="14" y="24">{z.h}</text>
				<text class="iv-sub" x="14" y="40">{z.sub}</text>
			</g>
		{/each}

		<!-- AI zone: invoice and PO cards with match lines -->
		<g transform="translate(14, 58)">
			<g class="iv-doc">
				<rect width="100" height="120" rx="2" />
				<text class="iv-doc-h" x="10" y="20">{active.no}</text>
				{#each fields as f, i}<text class="iv-field" x="10" y={48 + i * 24}>{f}</text>{/each}
				<text class="iv-amt" class:over={over} x="10" y="112">{fmt(active.amount)}</text>
			</g>
			<g class="iv-doc" transform="translate(122, 0)">
				<rect width="100" height="120" rx="2" />
				<text class="iv-doc-h" x="10" y="20">{active.po}</text>
				{#each fields as f, i}<text class="iv-field" x="10" y={48 + i * 24}>{f}</text>{/each}
			</g>
			{#each fields as _, i}
				<line class="iv-match" class:on={s >= active.matched} style={`transition-delay: ${i * 140}ms`} x1="100" y1={44 + i * 24} x2="122" y2={44 + i * 24} />
			{/each}
			<text class="iv-note ai" class:on={s >= active.matched} x="111" y="150" text-anchor="middle">matched</text>
		</g>

		<!-- Rule zone: limit gate -->
		<g transform="translate(275, 58)">
			<text class="iv-rule" x="125" y="18" text-anchor="middle">limit {fmt(LIMIT)}</text>
			<rect class="iv-gate-track" x="30" y="40" width="190" height="14" />
			<rect class="iv-gate-fill" class:over={over && s >= active.decided} x="30" y="40" width={s >= active.decided ? Math.min(190, (active.amount / 50000) * 190) : 0} height="14" />
			<line class="iv-limit" x1={30 + (LIMIT / 50000) * 190} y1="32" x2={30 + (LIMIT / 50000) * 190} y2="62" />
			<text class="iv-sub" x={30 + (LIMIT / 50000) * 190} y="76" text-anchor="middle">limit</text>
			<g class="iv-verdict" class:on={s >= active.decided}>
				<rect class:over={over} x="40" y="100" width="170" height="30" rx="2" />
				<text x="125" y="120" text-anchor="middle">{over ? 'OVER LIMIT · HALTED' : 'WITHIN LIMIT · POSTED'}</text>
			</g>
			<text class="iv-sub" x="125" y="160" text-anchor="middle">no prompt can change this</text>
		</g>

		<!-- Human zone: approver -->
		<g transform="translate(550, 58)">
			<g class="iv-wait" class:on={s === 4}>
				<circle cx="125" cy="70" r="30" />
				<text x="125" y="75" text-anchor="middle">waiting</text>
			</g>
			<g class="iv-signed" class:on={s >= 5}>
				<circle cx="125" cy="70" r="30" />
				<text x="125" y="75" text-anchor="middle">signed</text>
				<text class="iv-sub" x="125" y="120" text-anchor="middle">authority verified by signature</text>
			</g>
			{#if s < 4}<text class="iv-sub" x="125" y="160" text-anchor="middle">not needed within the limit</text>{/if}
		</g>

		<!-- Flow token -->
		<circle class="iv-token" class:over={over && s >= active.decided} r="6" style={`transform: translate(${s < active.matched ? 64 : s < active.decided ? 200 : over && s < active.posted ? 675 : over ? 675 : 400}px, 262px)`} />
		<line class="iv-flowline" x1="14" y1="262" x2="786" y2="262" />

		<!-- Ledger -->
		<g transform="translate(0, 282)">
			<text class="iv-h" x="0" y="0">Audit ledger</text>
			{#each ledger as l, i}
				<g class="iv-entry {l.tag}" class:on={s >= l.at} transform={`translate(${(i % 3) * 266}, ${i < 3 ? 20 : 44})`}>
					<circle cx="5" cy="-4" r="3.5" />
					<text x="14" y="0">{l.text}</text>
				</g>
			{/each}
		</g>
	</svg>
</VizFrame>
