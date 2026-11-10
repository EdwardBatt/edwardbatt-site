<script lang="ts">
	import type { CaseMedia } from '$lib/pages';

	let { media }: { media: CaseMedia } = $props();

	// Single image: the GIF falls back to the poster if it fails to load, and to the placeholder panel
	// if the poster fails too, so a file that has not been supplied yet never shows as broken.
	let stage = $state<'gif' | 'poster' | 'none'>('gif');
	const onError = () => (stage = stage === 'gif' && media.poster ? 'poster' : 'none');

	// Slider: no autoplay. The arrow and dot buttons are the controls (keyboard included); swipe is a touch extra.
	const slides = $derived(media.slides ?? []);
	let current = $state(0);
	const go = (i: number) => (current = (i + slides.length) % slides.length);
	let startX: number | null = null;
	const onDown = (e: PointerEvent) => (startX = e.pointerType === 'mouse' ? null : e.clientX);
	function onUp(e: PointerEvent) {
		if (startX === null) return;
		const dx = e.clientX - startX;
		startX = null;
		if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
	}
</script>

<figure class="viz case-media">
	<div class="viz-head">
		<div class="viz-title">
			<strong>{media.title}</strong>
			{#if media.caption}<span>{media.caption}</span>{/if}
		</div>
	</div>

	{#if slides.length}
		<!-- Every slide shares one grid cell, so the stage is always as tall as the tallest slide
		     and the controls below it never move. Only the current slide is visible. -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions (swipe is a touch shortcut; the buttons below are the accessible controls) -->
		<div
			class="case-media-stage slider"
			role="region"
			aria-roledescription="carousel"
			aria-label={media.title}
			onpointerdown={onDown}
			onpointerup={onUp}
		>
			{#each slides as slide, i}
				<div
					class="slide"
					class:current={current === i}
					role="group"
					aria-roledescription="slide"
					aria-label={`${i + 1} of ${slides.length}: ${slide.caption}`}
					aria-hidden={current !== i}
				>
					<div class="slide-images" style:--n={slide.images.length}>
						{#each slide.images as img}
							<img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" draggable="false" />
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<div class="viz-foot">
			<div class="viz-steps" role="group" aria-label="Slides">
				<button type="button" class="viz-arrow" onclick={() => go(current - 1)} aria-label="Previous screen">‹</button>
				<ol class="viz-dots">
					{#each slides as s, i}
						<li><button type="button" aria-pressed={current === i} aria-label={`Screen ${i + 1}: ${s.caption}`} onclick={() => go(i)}></button></li>
					{/each}
				</ol>
				<button type="button" class="viz-arrow" onclick={() => go(current + 1)} aria-label="Next screen">›</button>
			</div>
			<div class="viz-step-label">
				{#each slides as s, i}<span aria-hidden="true" class:current={current === i}>{s.caption}</span>{/each}
				<span class="visually-hidden" aria-live="polite">{slides[current].caption}</span>
			</div>
		</div>
	{:else}
		<div class="case-media-stage">
			{#if media.src && stage !== 'none'}
				{#if stage === 'gif'}
					<picture>
						{#if media.poster}<source media="(prefers-reduced-motion: reduce)" srcset={media.poster} />{/if}
						<img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" onerror={onError} />
					</picture>
				{:else}
					<img src={media.poster} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" onerror={onError} />
				{/if}
			{:else}
				<div class="case-media-placeholder" role="img" aria-label={media.alt}>
					<span>{media.placeholder ?? 'Screenshots to follow'}</span>
				</div>
			{/if}
		</div>
	{/if}
</figure>

<style>
	.case-media-stage { padding: clamp(12px, 2vw, 22px); }
	.case-media-stage img { display: block; width: 100%; height: auto; max-width: 900px; margin-inline: auto; border: 1px solid var(--line); }
	.case-media-placeholder {
		display: grid;
		place-items: center;
		aspect-ratio: 16 / 9;
		max-width: 900px;
		margin-inline: auto;
		border: 1px dashed var(--line);
		color: var(--muted);
		font-size: 14px;
	}
	.slider { display: grid; touch-action: pan-y; user-select: none; outline-offset: -2px; }
	.slide { grid-area: 1 / 1; display: grid; align-items: center; visibility: hidden; }
	.slide.current { visibility: visible; }
	/* Several images on one slide (the phone screens) sit side by side at a size that keeps them readable. */
	.slide-images { display: grid; grid-template-columns: repeat(var(--n), minmax(0, 1fr)); gap: clamp(8px, 2vw, 24px); max-width: 900px; width: 100%; margin-inline: auto; }
	.slide-images img { max-width: 100%; margin: 0; }
	.slide-images:has(img:nth-child(2)) { max-width: 760px; }
	.slide-images:has(img:nth-child(2)) img { border: 0; }
	/* The slider's controls are the only thing in its footer, so centre them on their own. */
	.case-media .viz-foot { grid-template-columns: minmax(0, 1fr); justify-items: center; }
	.case-media .viz-foot > :global(*) { grid-column: 1; }
</style>
