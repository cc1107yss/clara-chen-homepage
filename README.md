# Clara Chen — Editorial Homepage

This repository contains the complete Clara Chen personal homepage: an art-directed portfolio landing page built around editorial typography, negative space, and layered SVG graphics.

Live site: <https://clarachen.dev>

## Project structure

- `app/page.tsx`: homepage HTML structure, navigation, copy, and CTA
- `app/components/home/HomeArtwork.tsx`: layered SVG artwork
- `app/globals.css`: responsive visual system for desktop, tablet, and mobile
- `app/home-content.ts`: homepage content data
- `artifacts/visual-qa/`: visual regression screenshots, overlays, and pixel diffs

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the homepage.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
npm test
```

## Design reference

The homepage follows the UI specification, design tokens, layout map, and `reference-homepage.png` in `clara-homepage-handoff`.
The production site does not use the reference PNG as a full-page background. The title, navigation, body copy, and CTA are real HTML; decorative elements are layered SVGs.
