import React from 'react'

// The menu is a record. The tonearm tracks your selection:
// outer groove = track 1, inner groove = track 8.
export default function Turntable({ selected, trackIndex, total }) {
  // arm sweeps from the record's outer edge (track 1) toward the label:
  // -30deg puts the needle on the outer groove, -6deg near the run-out
  const angle = -30 + (trackIndex / Math.max(total - 1, 1)) * 24

  const words = selected.name.split(' ')
  const mid = Math.ceil(words.length / 2)
  const line1 = words.slice(0, mid).join(' ')
  const line2 = words.slice(mid).join(' ')

  const grooves = []
  for (let r = 74; r <= 204; r += 5) {
    grooves.push(
      <circle
        key={r}
        cx="250"
        cy="250"
        r={r}
        fill="none"
        stroke="rgba(240, 230, 210, 0.05)"
        strokeWidth="1"
      />,
    )
  }

  return (
    <div className="deck" role="img" aria-label={`Turntable, now playing ${selected.name}`}>
      <svg viewBox="0 0 500 500">
        {/* plinth shadow */}
        <circle cx="250" cy="250" r="222" fill="#0d0a07" />
        <g className="deck__platter">
          <circle cx="250" cy="250" r="212" fill="#191410" />
          {grooves}
          {/* two light sheen arcs */}
          <path
            d="M 250 52 A 198 198 0 0 1 425 155"
            fill="none"
            stroke="rgba(240, 230, 210, 0.06)"
            strokeWidth="26"
            strokeLinecap="round"
          />
          <path
            d="M 250 448 A 198 198 0 0 1 75 345"
            fill="none"
            stroke="rgba(240, 230, 210, 0.045)"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </g>

        {/* label — held still so you can read what's playing */}
        <g>
          <circle cx="250" cy="250" r="64" fill="#7a2e1d" />
          <circle cx="250" cy="250" r="64" fill="none" stroke="rgba(20,16,12,0.5)" strokeWidth="1" />
          <circle cx="250" cy="250" r="56" fill="none" stroke="rgba(240,230,210,0.14)" strokeWidth="0.75" />
          <text x="250" y="222" textAnchor="middle" fontSize="9" className="deck__label-kissa">
            KISSA RECORDS
          </text>
          <text x="250" y="252" textAnchor="middle" fontSize="15" className="deck__label-name">
            {line1}
          </text>
          <text x="250" y="272" textAnchor="middle" fontSize="15" className="deck__label-name">
            {line2}
          </text>
          <text x="250" y="296" textAnchor="middle" fontSize="9" className="deck__label-kissa">
            {selected.time} · 33 RPM
          </text>
          <circle cx="250" cy="250" r="4" fill="#14100c" />
        </g>

        {/* tonearm */}
        <g className="deck__arm" style={{ transform: `rotate(${angle}deg)` }}>
          <line x1="415" y1="85" x2="415" y2="30" stroke="#3a2c1e" strokeWidth="7" strokeLinecap="round" />
          <line x1="415" y1="85" x2="308" y2="290" stroke="#c9b18c" strokeWidth="5" strokeLinecap="round" />
          <line x1="308" y1="290" x2="290" y2="308" stroke="#c9b18c" strokeWidth="9" strokeLinecap="round" />
          <circle cx="415" cy="85" r="20" fill="#241a12" stroke="#3a2c1e" strokeWidth="3" />
          <circle cx="415" cy="85" r="6" fill="#c9b18c" />
        </g>
      </svg>
    </div>
  )
}
