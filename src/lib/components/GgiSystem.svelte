<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowRight, RotateCcw } from 'lucide-svelte';
	let ready = $state(false);
	let tracedFixture = $state<number | null>(null);
	const events = [
		'Registration',
		'Tournament structure',
		'Fixtures',
		'Discord operations',
		'Results',
		'Leaderboards',
	];
	onMount(() => {
		ready = true;
	});
</script>

<div class="ggi-system system-exhibit" class:result-traced={tracedFixture !== null}>
	<div class="exhibit-toolbar">
		<p class="exhibit-caption">Illustrative competition structure</p>
		<button
			class="system-action"
			type="button"
			disabled={!ready}
			aria-pressed={tracedFixture !== null}
			onclick={() => (tracedFixture = tracedFixture === null ? 0 : null)}
		>
			{tracedFixture === null ? 'Trace a result' : 'Reset the trace'}
			{#if tracedFixture === null}<ArrowRight size={16} aria-hidden="true" />{:else}<RotateCcw
					size={16}
					aria-hidden="true"
				/>{/if}
		</button>
	</div>
	<div class="ggi-bracket" aria-label="Illustrative four-participant competition bracket">
		<div class="ggi-round-headings">
			<span>Registration</span><span>Fixtures</span><span>Progression</span>
		</div>
		<div class="ggi-bracket-field">
			<svg
				class="ggi-bracket-lines"
				viewBox="0 0 100 256"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<path d="M25.333 32 H31.333 V96 H25.333 M31.333 64 H37.333" />
				<path d="M25.333 160 H31.333 V224 H25.333 M31.333 192 H37.333" />
				<path d="M62.666 64 H68.666 V192 H62.666 M68.666 128 H74.666" />
				{#if tracedFixture !== null}<path
						class="ggi-traced-path"
						d={tracedFixture === 0
							? 'M62.666 64 H68.666 V128 H74.666'
							: 'M62.666 192 H68.666 V128 H74.666'}
					/>{/if}
			</svg>
			{#each [0, 1, 2, 3] as entry}<div
					class="ggi-entry ggi-bracket-node"
					style:grid-row={String(entry * 2 + 1) + ' / span 2'}
				>
					Participant
				</div>{/each}
			{#each [0, 1] as fixture}
				<button
					type="button"
					class="ggi-fixture ggi-bracket-node"
					style:grid-row={String(fixture * 4 + 1) + ' / span 4'}
					disabled={!ready}
					aria-pressed={tracedFixture === fixture}
					aria-label={'Trace a result from fixture ' + (fixture + 1)}
					onclick={() => (tracedFixture = fixture)}
				>
					<span>Fixture {fixture + 1}</span><span class="ggi-node-state"
						>{tracedFixture === fixture ? 'Recorded' : 'Trace result'}</span
					>
				</button>{/each}
			<div class="ggi-progress ggi-bracket-node" class:ggi-progress-active={tracedFixture !== null}>
				<span>{tracedFixture === null ? 'Competition' : 'Result'}</span><span
					>{tracedFixture === null ? 'progress' : 'recorded'}</span
				>
			</div>
		</div>
	</div>
	<div class="competition-output" aria-live="polite">
		<span class="result-indicator" aria-hidden="true"></span><span
			>{tracedFixture === null
				? 'Select a fixture or trace a result'
				: 'Fixture ' + (tracedFixture + 1) + ' → result recorded → leaderboard updated'}</span
		>
	</div>
	<ol class="event-register" aria-label="GGI operating sequence">
		{#each events as event, index}<li class:trace-active={tracedFixture !== null && index >= 4}>
				<span class="event-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span
				><span>{event}</span>{#if tracedFixture !== null && index >= 4}<span class="event-state"
						>{index === 4 ? 'Recorded' : 'Updated'}</span
					>{/if}
			</li>{/each}
	</ol>
	<p class="system-response">
		{tracedFixture === null
			? 'Tournament structure, fixtures, Discord integration and leaderboards connect the competition’s operating work.'
			: 'The highlighted path shows how a fixture result updates competition progress and the leaderboard. This is an illustrative interaction, not live tournament data.'}
	</p>
</div>
