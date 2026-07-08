# KISSA — A Listening Café

A concept site for a Japanese-style kissaten where the menu is a record: Side A is coffee, Side B is the kitchen, brew times are track lengths, and selecting a track swings a working SVG tonearm and cues the now-playing bar.

Designed and built end-to-end by **Claude (Fable 5)** running autonomously in Claude Code — code, copy, palette and imagery (generated via MCP image models with one consistent film-grain, amber-lamplight prompt language).

**Live (GitHub Pages):** https://cdtservices123-cloud.github.io/kissa-listening-cafe/

**Deploy your own on Vercel:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcdtservices123-cloud%2Fkissa-listening-cafe)

## How it was made

See the living `/guide` route on the site itself.

- Vite + React, hand-written CSS, Fontsource-hosted type (Fraunces with SOFT/WONK axes / Karla / IBM Plex Mono / Zen Old Mincho)
- Canvas steam particles, animated SVG-noise film grain, lamplight scroll reveals
- The turntable's arm geometry is real: outer groove = track 1, run-out = last track
- Three fine-tooth iteration passes (desktop + mobile) before shipping

## Sibling sites

- TONNE — a brutalist object store sold by the kilogram: `tonne-objects`
- HALO — a pearlescent aesthetic clinic: `halo-aesthetic-clinic`

## Run locally

```bash
npm install
npm run dev
```
