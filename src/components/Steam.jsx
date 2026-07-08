import React, { useEffect, useRef } from 'react'

// Canvas steam: soft particles rising through the lamplight.
export default function Steam() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let w, h, raf
    const parts = []

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const spawn = () => ({
      x: w * (0.35 + Math.random() * 0.45),
      y: h * (0.55 + Math.random() * 0.25),
      r: 8 + Math.random() * 26,
      vy: 0.25 + Math.random() * 0.5,
      drift: Math.random() * Math.PI * 2,
      driftSpeed: 0.004 + Math.random() * 0.008,
      life: 0,
      maxLife: 260 + Math.random() * 200,
    })

    for (let i = 0; i < 26; i++) {
      const p = spawn()
      p.life = Math.random() * p.maxLife
      parts.push(p)
    }

    const tick = () => {
      raf = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.life++
        if (p.life > p.maxLife) Object.assign(p, spawn(), { life: 0 })
        p.y -= p.vy
        p.drift += p.driftSpeed
        const x = p.x + Math.sin(p.drift * 6) * 18
        const t = p.life / p.maxLife
        const alpha = Math.sin(t * Math.PI) * 0.05
        const grad = ctx.createRadialGradient(x, p.y, 0, x, p.y, p.r * (1 + t))
        grad.addColorStop(0, `rgba(240, 230, 210, ${alpha})`)
        grad.addColorStop(1, 'rgba(240, 230, 210, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(x, p.y, p.r * (1 + t), 0, Math.PI * 2)
        ctx.fill()
      }
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="hero__steam" aria-hidden="true" />
}
