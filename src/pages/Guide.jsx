import React from 'react'

export default function Guide() {
  return (
    <div className="guide">
      <span className="mono">Meta — how this site was made</span>
      <h1>Guide</h1>
      <p>
        KISSA is one of three demonstration sites designed and built end-to-end
        by <strong>Claude (Fable 5)</strong>, running autonomously in Claude
        Code — code, copy, palette and imagery included. Here's the recipe.
      </p>

      <h2>1. A subject with its own vernacular</h2>
      <p>
        A kissaten — a Japanese listening café — comes with a complete visual
        world: walnut, lamplight, vinyl, steam, patience. Every design decision
        was pulled from that world instead of from a template: the palette is
        lamplight on dark wood, the type is a wonky old-style serif (Fraunces,
        with its <code>SOFT</code> and <code>WONK</code> variable axes turned
        up), and the hours are listed as jazz sets.
      </p>

      <h2>2. The signature: a menu you play</h2>
      <p>
        The centerpiece is an SVG turntable. The menu is typeset as a
        tracklist — Side A is coffee, Side B is the kitchen — and each item's
        "track length" is its real preparation time. Selecting a track swings
        the tonearm (outer groove for track one, inward from there), reprints
        the record label, and cues the now-playing bar. One idea, carried all
        the way through.
      </p>

      <h2>3. Atmosphere in layers</h2>
      <ul>
        <li>Generated interior and still-life photography (Higgsfield MCP), art-directed with one consistent prompt language: amber tungsten, near-black, film grain.</li>
        <li>A canvas particle system breathing steam over the hero.</li>
        <li>An animated SVG-noise grain overlay at 7% opacity — the whole site is shot on film.</li>
        <li>Sections that fade up from the dark like pools of lamplight.</li>
      </ul>

      <h2>4. Restraint</h2>
      <p>
        Dark sites drown easily in effects. Here the record spins, the steam
        rises, and everything else holds still. Type does the talking; the
        grain does the mood. Reduced-motion users get the same site, sitting
        quietly.
      </p>

      <h2>5. Stack & deployment</h2>
      <p>
        Vite + React, hand-written CSS, self-hosted fonts via Fontsource, zero
        UI libraries. Pushed to GitHub with the <code>gh</code> CLI, deployed
        on Vercel, then run through three full critique-and-refine passes at
        desktop and mobile widths before shipping.
      </p>

      <h2>The other two sites</h2>
      <p>
        KISSA's siblings — a brutalist object store that sells by the kilogram
        and a pearlescent aesthetic clinic — share zero design DNA with this
        page, on purpose. Links live in the project README.
      </p>
    </div>
  )
}
