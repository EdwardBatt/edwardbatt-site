---
type: state
status: current
origin: ai-derived
verified: 2026-11-12
sources:
  - src/lib/site.ts
  - src/lib/pages.ts
  - src/routes/sitemap.xml/+server.ts
  - wrangler.jsonc
  - src/app.html
  - src/lib/consent.ts
---

# State — what is actually built

What runs today, as checked against the code. The plan says what is intended; this file says what is true.

## Working

- Static build of every route (`src/routes/+layout.ts` sets `prerender` and `trailingSlash`), deployed as Cloudflare Workers static assets from `build/` (`wrangler.jsonc`).
- Pages: home, services, work (index and case studies), insights (index and articles), regions, about, contact.
- Seven case studies in `src/lib/pages.ts`. Four use the animated diagrams in `src/lib/viz/`. The other three use `src/lib/components/CaseMedia.svelte`: compass (demo GIF), qr-field-operations (three-slide screenshot slider) and ai-document-intake (see Partially built).
- Diagram and slider controls hold their position between steps: every caption, chip set or stage panel is laid in one grid cell, sized to the largest.
- Compass v0.3.1 lints the store in CI (`.github/workflows/compass.yml`) and in the local pre-commit hook.
- Google Analytics: the Google tag (container `GTM-PBM9D9F7`) loads unconditionally from `src/app.html`, after an inline Consent Mode v2 default (everything denied). `src/lib/components/CookieBanner.svelte` grants `analytics_storage` only on Accept; ad consent stays denied. The choice lives in localStorage under the key in `src/lib/consent.ts`, which the inline script in `src/app.html` also reads. The footer's Cookie settings link reopens the banner. `/privacy/` explains it.
- The sitemap is generated at build time by `src/routes/sitemap.xml/+server.ts` from `src/lib/pages.ts`.

## Partially built

- Booking: `BOOKING_URL` in `src/lib/site.ts` is empty, so every "Book a call" button opens a pre-filled email instead of a booking page.
- The ai-document-intake case study has no walkthrough yet: its media panel shows a placeholder until the GIF arrives (see Waiting on Edward).

## Not built — described but absent

## Confirmed problems

- `README.md` and the comment at the top of `src/lib/site.ts` still say the domain is repeated in a static sitemap file. That file no longer exists: the sitemap is generated, so only `static/robots.txt` repeats the domain.
- `legacy/` and `_to_delete/` hold retired components from earlier versions of the site. Nothing imports them; do not build on them.

## Waiting on Edward

- A booking link (Google Calendar appointment page or Calendly) for `BOOKING_URL` in `src/lib/site.ts`.
- Case-study media: the walkthrough GIF and its poster image for the ai-document-intake case study. The build only warns while they are missing (`svelte.config.js`), and the page shows a placeholder panel instead. Paths are set in `src/lib/pages.ts`.

- Review the draft wording of `src/routes/privacy/+page.svelte`. It is not legal sign-off.

## In flight right now
