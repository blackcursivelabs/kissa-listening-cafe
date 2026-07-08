import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className="nav">
        <Link to="/" className="nav__logo">
          KISSA<span>.</span>
        </Link>
        <nav className="nav__links mono" aria-label="Primary">
          <a href={import.meta.env.BASE_URL + '#menu'}>Menu</a>
          <a href={import.meta.env.BASE_URL + '#sets'} className="hide-sm">Sets</a>
          <a href={import.meta.env.BASE_URL + '#visit'}>Visit</a>
          <Link to="/guide">Guide</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
