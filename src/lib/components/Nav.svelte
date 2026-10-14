<script lang="ts">
	import { Sun, Moon, Menu, X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { bookingHref, BOOKING_URL } from '$lib/site';

	const links = [
		{ href: '/services/', label: 'Services' },
		{ href: '/work/', label: 'Work' },
		{ href: '/insights/', label: 'Insights' },
		{ href: '/about/', label: 'About' },
		{ href: '/contact/', label: 'Contact' }
	];
	const bookingTarget = BOOKING_URL ? '_blank' : undefined;

	let dark = $state(false);
	let open = $state(false);
	function applyTheme(d: boolean) {
		dark = d;
		document.documentElement.dataset.theme = d ? 'dark' : 'light';
		try {
			localStorage.setItem('theme', d ? 'dark' : 'light');
		} catch {}
	}
	onMount(() => {
		dark = document.documentElement.dataset.theme === 'dark';
	});
	const current = (href: string) =>
		page.url.pathname === href || (href !== '/' && page.url.pathname.startsWith(href));
</script>

<header class="nav">
	<div class="wrap nav-inner">
		<a class="logo" href="/" aria-label="Edward Batt, home">EB<span>.</span></a>
		<a class="nav-name" href="/">Edward Batt</a>
		<nav class="nav-links" aria-label="Site">
			{#each links as l}
				<a href={l.href} aria-current={current(l.href) ? 'page' : undefined}>{l.label}</a>
			{/each}
		</nav>
		<div class="nav-right">
			<button class="mode" type="button" onclick={() => applyTheme(!dark)} aria-pressed={dark} aria-label="Switch colour mode">
				{#if dark}<Sun aria-hidden="true" /><span>Light</span>{:else}<Moon aria-hidden="true" /><span>Dark</span>{/if}
			</button>
			<a class="btn" href={bookingHref} target={bookingTarget} rel="noopener">Book a call</a>
			<button class="menu-btn" type="button" aria-expanded={open} aria-controls="mobile-nav" onclick={() => (open = !open)} aria-label="Menu">
				{#if open}<X aria-hidden="true" />{:else}<Menu aria-hidden="true" />{/if}
			</button>
		</div>
	</div>
	<nav class="mobile-nav" id="mobile-nav" hidden={!open} aria-label="Site">
		{#each links as l}
			<a href={l.href} onclick={() => (open = false)}>{l.label}</a>
		{/each}
	</nav>
</header>
