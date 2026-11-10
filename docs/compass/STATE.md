---
type: state
status: current
origin: ai-derived
verified: 2026-11-10
sources:
  - src/lib/site.ts
  - src/routes/sitemap.xml/+server.ts
  - wrangler.jsonc
---

# State — what is actually built

What runs today, as checked against the code. The plan says what is intended; this file says what is true.

## Working

- Static build of every route (`src/routes/+layout.ts` sets `prerender` and `trailingSlash`), deployed as Cloudflare Workers static assets from `build/` (`wrangler.jsonc`).
- Pages: home, services, work (index and case studies), insights (index and articles), regions, about, contact.
- The sitemap is generated at build time by `src/routes/sitemap.xml/+server.ts` from `src/lib/pages.ts`.

## Partially built

- Booking: `BOOKING_URL` in `src/lib/site.ts` is empty, so every "Book a call" button opens a pre-filled email instead of a booking page.

## Not built — described but absent

## Confirmed problems

- `README.md` and the comment at the top of `src/lib/site.ts` still say the domain is repeated in a static sitemap file. That file no longer exists: the sitemap is generated, so only `static/robots.txt` repeats the domain.
- `legacy/` and `_to_delete/` hold retired components from earlier versions of the site. Nothing imports them; do not build on them.

## Waiting on Edward

- A booking link (Google Calendar appointment page or Calendly) for `BOOKING_URL` in `src/lib/site.ts`.
- Case-study media: the walkthrough GIF and its poster image for the ai-document-intake case study. The build only warns while they are missing (`svelte.config.js`), and the page shows a placeholder panel instead. Paths are set in `src/lib/pages.ts`.

## In flight right now
