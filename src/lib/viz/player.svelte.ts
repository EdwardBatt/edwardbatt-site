/** Shared step player for the visualisations: autoplay in view, pause on hover/focus, reduced-motion aware. */
export class Player {
	step = $state(0);
	playing = $state(false);
	reduced = $state(false);
	total: number;
	interval: number;
	#timer: number | undefined;
	#hovered = false;
	#inView = false;

	constructor(total: number, interval = 2200) {
		this.total = total;
		this.interval = interval;
	}

	/** Call from onMount with the root element; returns a cleanup function. */
	attach(el: HTMLElement) {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		this.reduced = mq.matches;
		const onMq = () => {
			this.reduced = mq.matches;
			if (this.reduced) this.step = this.total - 1;
			this.#sync();
		};
		mq.addEventListener('change', onMq);
		if (this.reduced) this.step = this.total - 1;

		const io = new IntersectionObserver(
			(entries) => {
				this.#inView = entries[0].isIntersecting;
				this.#sync();
			},
			{ threshold: 0.35 }
		);
		io.observe(el);
		const enter = () => { this.#hovered = true; this.#sync(); };
		const leave = () => { this.#hovered = false; this.#sync(); };
		el.addEventListener('mouseenter', enter);
		el.addEventListener('mouseleave', leave);
		el.addEventListener('focusin', enter);
		el.addEventListener('focusout', leave);
		const vis = () => this.#sync();
		document.addEventListener('visibilitychange', vis);
		return () => {
			mq.removeEventListener('change', onMq);
			io.disconnect();
			el.removeEventListener('mouseenter', enter);
			el.removeEventListener('mouseleave', leave);
			el.removeEventListener('focusin', enter);
			el.removeEventListener('focusout', leave);
			document.removeEventListener('visibilitychange', vis);
			this.#stop();
		};
	}

	#sync() {
		const should = this.#inView && !this.#hovered && !this.reduced && document.visibilityState === 'visible';
		if (should && !this.playing) this.#start();
		if (!should && this.playing) this.#stop();
	}
	#start() {
		this.playing = true;
		this.#timer = window.setInterval(() => (this.step = (this.step + 1) % this.total), this.interval);
	}
	#stop() {
		this.playing = false;
		if (this.#timer) window.clearInterval(this.#timer);
		this.#timer = undefined;
	}
	go(i: number) { this.step = Math.max(0, Math.min(this.total - 1, i)); }
	next() { this.step = (this.step + 1) % this.total; }
	prev() { this.step = (this.step - 1 + this.total) % this.total; }
	at(i: number) { return this.step >= i; }
	is(i: number) { return this.step === i; }
}
