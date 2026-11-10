import { useEffect, useState } from 'react'

// Branded 1-second loader shown at page start.
// - "HA." has exactly one dot: the text is "HA" and the coral dot is a
//   separate span. One nowrap line, never split.
// - Progress bar fills in ~0.95s, loader fades out at ~1s from first paint.
// - Esc or a click dismisses it instantly.
// - A 1.8s failsafe guarantees the page is never trapped behind it.
// - Reduced-motion visitors skip it almost immediately.
export default function Loader() {
  const [gone, setGone] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    let done = false
    const hide = () => {
      if (done) return
      done = true
      setFading(true)
      window.setTimeout(() => setGone(true), 350) // wait for the fade
      document.body.style.overflow = ''
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.style.overflow = 'hidden'
    const mainTimer = window.setTimeout(hide, reduced ? 120 : 1000)
    const failsafe = window.setTimeout(hide, 1800)
    const onKey = (e) => {
      if (e.key === 'Escape') hide()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(mainTimer)
      window.clearTimeout(failsafe)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-navy text-white transition-opacity duration-300 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={() => {
        setFading(true)
        window.setTimeout(() => setGone(true), 350)
        document.body.style.overflow = ''
      }}
      role="status"
      aria-label="Loading Haider Ali portfolio"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="font-display text-6xl font-extrabold whitespace-nowrap text-white">
          HA<span className="text-coral">.</span>
        </div>
        <p className="mt-3 font-display text-xl font-bold">Haider Ali</p>
        <p className="mt-1 font-mono text-sm text-coral">Frontend Developer</p>
        <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-white/20">
          <div className="loader-bar-fill h-full rounded-full bg-coral" />
        </div>
      </div>
    </div>
  )
}
