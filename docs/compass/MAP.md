---
type: map
status: current
origin: ai-derived
verified: 2026-11-10
sources: []
---

# Map — what to read for the task in front of you

Find the row that matches your task. Read that capsule. Then read the source files it names. Do not read the other capsules.

Each row carries its capsule's **abstract**, copied verbatim from the capsule's front matter and held identical by the lint, so the map alone says whether a capsule is the right one.

**The left column is the words somebody would actually say**, not module names. If two rows match one spoken task, the rows are wrong. If none does, that is the most useful thing this file can tell you — record it as `missed:` in the trajectory block and fix the map at close. Write every source path in full, from the project root.

| Your task touches… | Capsule | Source to open | Decisions that bind it |
|---|---|---|---|

## Not covered by a capsule

No capsule exists for these. Go to the source or the document named; write a capsule only when a session shows one is genuinely needed.

| Area | Where | Decisions |
|---|---|---|
| Changing the words on the home or services page | — | `src/lib/content.ts`, `src/routes/+page.svelte`, `src/routes/services/+page.svelte` | — |
| Adding or editing a case study, article or region page | — | `src/lib/pages.ts`, `src/lib/content.ts` (the Work index card), `src/routes/work/[slug]/+page.svelte`, `src/routes/insights/[slug]/+page.svelte`, `src/routes/regions/[slug]/+page.svelte` | — |
| Case study screenshots, GIFs or image sliders | — | `src/lib/components/CaseMedia.svelte`, the `media` field in `src/lib/pages.ts`, files in `static/work/` | — |
| The animated process diagrams, or their controls jumping between steps | — | `src/lib/viz/`, `src/lib/viz/VizFrame.svelte`, `src/lib/viz/player.svelte.ts` | — |
| Colours, fonts, light and dark mode | — | `src/lib/site.css`, `src/routes/+layout.svelte` | — |
| Navigation, footer, SEO tags, contact details | — | `src/lib/components/`, `src/lib/site.ts` | — |
| Deploying, the domain, the sitemap | — | `wrangler.jsonc`, `svelte.config.js`, `src/routes/sitemap.xml/+server.ts`, `static/robots.txt` | — |
