import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SIDE_A, SIDE_B, SETS } from '../data/menu.js'
import Steam from '../components/Steam.jsx'
import Turntable from '../components/Turntable.jsx'

const ALL = [...SIDE_A, ...SIDE_B]
const B = import.meta.env.BASE_URL

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Track({ item, num, playing, onPlay }) {
  return (
    <button className={`track ${playing ? 'is-playing' : ''}`} onClick={onPlay}>
      <span className="track__num">{num}</span>
      <span className="track__name">{item.name}</span>
      <span className="track__time">{item.time}</span>
      <span className="track__price">${item.price.toFixed(2)}</span>
      <span className="track__note">{item.note}</span>
    </button>
  )
}

export default function Home() {
  const [playingId, setPlayingId] = useState(SIDE_A[0].id)
  const [barVisible, setBarVisible] = useState(false)
  useReveal()

  const idx = ALL.findIndex((i) => i.id === playingId)
  const selected = ALL[idx]

  const play = (id) => {
    setPlayingId(id)
    setBarVisible(true)
  }

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <img src={B + 'img/interior.webp'} alt="The KISSA room at night: walnut panelling, shelves of records, one amber lamp" />
        </div>
        <Steam />
        <p className="hero__kanji" aria-hidden="true">
          喫茶店
        </p>
        <div className="hero__content">
          <h1>
            A café that
            <br />
            <span className="amber">listens.</span>
          </h1>
          <p className="hero__sub">
            Coffee brewed slowly. Records played front to back, on one very
            good system. Conversation welcome, at the volume of a ride cymbal.
          </p>
          <div className="hero__deets mono">
            <span>Open 07:00 — 23:00</span>
            <span>Basement, 4-2-9 Meridian Row</span>
            <span>No reservations</span>
          </div>
        </div>
      </section>

      <section className="rules fade-up">
        <span className="rules__label mono">House practice</span>
        <p>
          Some cafés play music. Here it's the other way around — <em>the record
          decides the pace</em>, the coffee takes as long as it takes, and
          nobody is in a hurry to flip to side B.
        </p>
        <div className="rules__list">
          <div className="rules__item">
            <span className="mono">Rule 01</span>
            <span>Records play front to back. Requests go in the notebook by the register.</span>
          </div>
          <div className="rules__item">
            <span className="mono">Rule 02</span>
            <span>The espresso machine rests during quiet passages. We time our shots.</span>
          </div>
          <div className="rules__item">
            <span className="mono">Rule 03</span>
            <span>No laptops after dark. The evening set deserves both ears.</span>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="menu__head fade-up">
          <h2>Tonight's pressing</h2>
          <span className="mono">The menu · brew times are track lengths · select a track</span>
        </div>
        <div className="menu__grid">
          <div className="fade-up">
            <Turntable selected={selected} trackIndex={idx} total={ALL.length} />
          </div>
          <div className="tracks fade-up">
            <div className="tracks__side">
              <span className="mono">Side A — Coffee</span>
              {SIDE_A.map((item, i) => (
                <Track
                  key={item.id}
                  item={item}
                  num={`A${i + 1}`}
                  playing={playingId === item.id}
                  onPlay={() => play(item.id)}
                />
              ))}
            </div>
            <div className="tracks__side">
              <span className="mono">Side B — Kitchen</span>
              {SIDE_B.map((item, i) => (
                <Track
                  key={item.id}
                  item={item}
                  num={`B${i + 1}`}
                  playing={playingId === item.id}
                  onPlay={() => play(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <figure className="gallery__a fade-up">
          <img src={B + 'img/siphon.webp'} alt="Siphon brewer mid-brew under a tungsten lamp" loading="lazy" />
          <figcaption>The siphon, mid-set</figcaption>
        </figure>
        <figure className="gallery__b fade-up">
          <img src={B + 'img/pour.webp'} alt="Barista pouring a slow spiral from a copper kettle" loading="lazy" />
          <figcaption>Pour, adagio</figcaption>
        </figure>
        <figure className="gallery__c fade-up">
          <img src={B + 'img/cup-vinyl.webp'} alt="Ceramic cup beside a spinning record" loading="lazy" />
          <figcaption>Counter seat, side B</figcaption>
        </figure>
        <figure className="gallery__d fade-up">
          <img src={B + 'img/beans.webp'} alt="Oily dark-roast beans on walnut" loading="lazy" />
          <figcaption>House roast, fortissimo</figcaption>
        </figure>
      </section>

      <section className="sets" id="sets">
        <h2 className="fade-up">Three sets a day</h2>
        <span className="mono fade-up">The room changes with the records</span>
        {SETS.map((s) => (
          <div className="set fade-up" key={s.name}>
            <div>
              <div className="set__name">{s.name}</div>
              <div className="set__hours">{s.hours}</div>
            </div>
            <p className="set__mood">{s.mood}</p>
          </div>
        ))}
      </section>

      <footer className="footer" id="visit">
        <div className="footer__col">
          <span className="mono">Find us</span>
          <span>Basement, 4-2-9 Meridian Row</span>
          <span>Down the stairs with the amber lamp</span>
        </div>
        <div className="footer__col">
          <span className="mono">Hours</span>
          <span>Every day, 07:00 — 23:00</span>
          <span>Needle drops at 07:05</span>
        </div>
        <div className="footer__col">
          <span className="mono">Meta</span>
          <Link to="/guide">How this site was made</Link>
          <span>Designed & built by Claude (Fable 5)</span>
        </div>
        <div className="footer__col">
          <span className="footer__jp">喫茶 キッサ</span>
          <span className="mono" style={{ color: 'var(--cream-dim)' }}>A listening café — a concept</span>
        </div>
      </footer>

      <div className={`nowbar ${barVisible ? 'is-visible' : ''}`} aria-live="polite">
        <div className="nowbar__disc" />
        <div className="nowbar__text">
          <span className="mono" style={{ color: 'var(--cream-dim)' }}>Now playing</span>
          <span className="nowbar__name">{selected.name}</span>
          <span className="nowbar__meta mono">
            {selected.time} · ${selected.price.toFixed(2)}
          </span>
        </div>
      </div>
    </>
  )
}
