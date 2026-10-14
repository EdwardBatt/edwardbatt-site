<script lang="ts">
	import { Player } from './player.svelte';
	import VizFrame from './VizFrame.svelte';

	const steps = [
		'Players and teams register',
		'The system generates the tournament format from the entrants',
		'Fixtures are published and synchronised to Discord, with a channel for every match',
		'Results come in from referees and players, on the platform or in Discord; winners advance automatically',
		'Leaderboard and ratings update',
		'The next round is generated; nobody builds a bracket by hand'
	];
	const player = new Player(steps.length, 2300);
	const s = $derived(player.step);

	// Illustrative 8-team single-elimination bracket.
	const teams = ['Team 01', 'Team 02', 'Team 03', 'Team 04', 'Team 05', 'Team 06', 'Team 07', 'Team 08'];
	const Y0 = 52;
	const GAP = 34;
	const COLS = [0, 210, 360, 510];
	const SW = 110;
	const slotY = (round: number, i: number) => {
		const span = GAP * 2 ** round;
		return Y0 + span / 2 - GAP / 2 + i * span;
	};
	// Winners (illustrative): lower-index team advances.
	const rounds = [8, 4, 2, 1];
	const connectors = rounds.slice(0, 3).flatMap((n, r) =>
		Array.from({ length: n / 2 }, (_, m) => {
			const y1 = slotY(r, m * 2);
			const y2 = slotY(r, m * 2 + 1);
			const yn = slotY(r + 1, m);
			const x = COLS[r] + SW;
			const xm = x + 16;
			return { r, m, d: `M${x} ${y1} H${xm} V${y2} H${x} M${xm} ${yn} H${COLS[r + 1]}` };
		})
	);
	const linkOn = (r: number) => (r === 0 ? s >= 1 : r === 1 ? s >= 3 : s >= 5);
	const slotOn = (r: number) => (r === 1 ? s >= 3 : s >= 5);
	const board = [
		{ name: 'Team 01', pts: 1860 },
		{ name: 'Team 03', pts: 1790 },
		{ name: 'Team 02', pts: 1740 },
		{ name: 'Team 05', pts: 1700 },
		{ name: 'Team 04', pts: 1655 }
	];
	// After results (step ≥ 4), Team 03 overtakes Team 01.
	const order = $derived(s >= 4 ? [1, 0, 2, 3, 4] : [0, 1, 2, 3, 4]);
	const registered = $derived(s === 0 ? 'registering' : '8 teams');
</script>

<VizFrame
	title="How a GGI tournament runs itself"
	caption="Selected workflow, illustrative 8-team bracket. Not the complete platform: engines scale to 4,000+ competitors, with two-way Discord sync and automated promotion plans"
	{steps}
	{player}
	legend={['human', 'auto']}
	metric={{ value: '5,000+', label: 'users registered in the first three months' }}
>
	<svg class="es" viewBox="0 0 800 340" role="img" aria-label={steps[s]}>
		<!-- Registration column -->
		<g class="es-reg">
			<text class="es-h" x="0" y="20">Registration</text>
			<text class="es-sub" x="0" y="36">OTP sign-in · {registered}</text>
			{#each teams as t, i}
				<g class="es-slot human" class:on={s >= 0} style={`transition-delay: ${i * 60}ms`} transform={`translate(0, ${slotY(0, i) - 12})`}>
					<rect width={SW} height="24" rx="2" />
					<text x="10" y="16">{t}</text>
				</g>
			{/each}
		</g>

		<!-- Round headings -->
		{#each ['Round 1', 'Semi-finals', 'Final'] as h, r}
			<text class="es-h" x={COLS[r + 1]} y="20" class:dim={!linkOn(r)}>{h}</text>
		{/each}
		<text class="es-sub" x={COLS[1]} y="36" class:dim={s < 1}>format generated</text>

		<!-- Bracket connectors -->
		{#each connectors as c}
			<path class="es-link" class:on={linkOn(c.r)} d={c.d} />
		{/each}

		<!-- Advanced slots -->
		{#each [1, 2, 3] as r}
			{#each Array.from({ length: rounds[r] }) as _, i}
				<g class="es-slot auto" class:on={slotOn(r)} transform={`translate(${COLS[r]}, ${slotY(r, i) - 12})`}>
					<rect width={SW} height="24" rx="2" />
					<text x="10" y="16">{r === 3 ? 'Final: next round' : r === 2 ? `Semi ${i + 1} winner` : `Match ${i + 1} winner`}</text>
				</g>
			{/each}
		{/each}

		<!-- Discord channel chips on round-1 matches -->
		{#each Array.from({ length: 4 }) as _, m}
			<g class="es-chan" class:on={s >= 2} style={`transition-delay: ${m * 90}ms`} transform={`translate(${COLS[0] + SW + 22}, ${slotY(1, m) - 26})`}>
				<rect width="44" height="16" rx="2" />
				<text x="22" y="11.5" text-anchor="middle"># m{m + 1}</text>
			</g>
		{/each}

		<!-- Results reported marker -->
		<g class="es-results human" class:on={s >= 3} transform={`translate(${COLS[1]}, 318)`}>
			<circle cx="6" cy="-4" r="4" />
			<text x="16" y="0">Results reported by referees and players · winners advance</text>
		</g>

		<!-- Leaderboard -->
		<g transform="translate(650, 0)">
			<text class="es-h" x="0" y="20">Leaderboard</text>
			<text class="es-sub" x="0" y="36">ratings auto-updated</text>
			{#each board as b, i}
				<g class="es-row" class:up={s >= 4 && i === 1} style={`transform: translate(0px, ${52 + order.indexOf(i) * 30}px)`}>
					<text class="es-rank" x="0" y="16">{order.indexOf(i) + 1}</text>
					<text x="22" y="16">{b.name}</text>
					<text class="es-pts" x="150" y="16" text-anchor="end">{s >= 4 && i === 1 ? b.pts + 40 : b.pts}</text>
				</g>
			{/each}
		</g>
	</svg>
</VizFrame>
