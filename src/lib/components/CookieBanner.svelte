<script lang="ts">
	import { onMount } from 'svelte';
	import { readChoice, saveChoice, OPEN_SETTINGS_EVENT, type ConsentChoice } from '$lib/consent';

	// Rendered only in the browser, after mount, so returning visitors never see a flash.
	let open = $state(false);

	onMount(() => {
		open = readChoice() === null;
		const reopen = () => (open = true);
		window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
		return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
	});

	function choose(choice: ConsentChoice) {
		saveChoice(choice);
		open = false;
	}
</script>

{#if open}
	<div class="cookie-banner" role="region" aria-label="Cookie consent">
		<p>
			I use Google Analytics cookies to see which pages are useful, only if you allow it.
			<a href="/privacy/">Privacy</a>
		</p>
		<div class="cookie-actions">
			<button type="button" class="btn ghost" onclick={() => choose('denied')}>Reject</button>
			<button type="button" class="btn ghost" onclick={() => choose('granted')}>Accept</button>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		z-index: 50;
		right: 16px;
		bottom: 16px;
		left: 16px;
		max-width: 440px;
		margin-left: auto;
		padding: 16px 18px;
		background: var(--bg);
		color: var(--text);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		box-shadow: 0 8px 28px rgb(0 0 0 / 0.12);
		font-size: 14px;
		line-height: 1.5;
	}
	.cookie-banner a { color: var(--blue); }
	.cookie-actions { display: flex; gap: 10px; margin-top: 12px; }
	.cookie-actions .btn { flex: 1; justify-content: center; padding: 9px 16px; font-size: 14px; cursor: pointer; }
</style>
