// Analytics consent: the visitor's choice, stored in localStorage.
// The inline script in src/app.html reads the same key on every page load and re-applies
// a stored grant before the Google tag runs. Keep CONSENT_KEY in step with it.

export const CONSENT_KEY = 'cookie-consent';
export const OPEN_SETTINGS_EVENT = 'cookie-settings:open';

export type ConsentChoice = 'granted' | 'denied';

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}
}

export function readChoice(): ConsentChoice | null {
	try {
		const v = localStorage.getItem(CONSENT_KEY);
		return v === 'granted' || v === 'denied' ? v : null;
	} catch {
		return null;
	}
}

export function saveChoice(choice: ConsentChoice): void {
	try {
		localStorage.setItem(CONSENT_KEY, choice);
	} catch {
		// Storage blocked: the choice still applies for this page view.
	}
	window.gtag?.('consent', 'update', { analytics_storage: choice });
	if (choice === 'denied') clearAnalyticsCookies();
}

// Withdrawing consent: remove any Google Analytics cookies already set (_ga, _ga_<id>).
function clearAnalyticsCookies(): void {
	const host = location.hostname;
	const domains = ['', host, '.' + host.replace(/^www\./, '')];
	for (const part of document.cookie.split(';')) {
		const name = part.split('=')[0].trim();
		if (!/^_ga(_|$)/.test(name)) continue;
		for (const d of domains) {
			document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`;
		}
	}
}

export function openCookieSettings(): void {
	window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
