import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Haider from './Haider.jsx'
import heroPhoto from '../assets/haider-ali.png'

// Hero with a 3D-tilting photo frame (pointer tilt + gentle idle sway)
// and floating chips. The identity text (headline, CTAs, stats) lives in
// Haider.jsx; this component only lays it out next to the photo.
export default function Hero() {
  const frameRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Gentle idle sway when the pointer is not over the photo.
    let raf
    const start = performance.now()
    const sway = (now) => {
      const t = (now - start) / 6000
      setTilt((prev) => {
        // Only sway when the pointer is not actively tilting (small values).
        if (Math.abs(prev.x) > 1 || Math.abs(prev.y) > 1) return prev
        return { x: Math.sin(t) * 0.6, y: Math.cos(t) * 0.5 }
      })
      raf = requestAnimationFrame(sway)
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) raf = requestAnimationFrame(sway)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onMove = (e) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -7, y: px * 9 })
  }

  return (
    <header id="home" className="hero-gradient text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <Haider />
        </Reveal>

        <Reveal delay={150}>
          <motion.div
            ref={frameRef}
            onMouseMove={onMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            className="relative mx-auto w-full max-w-md rounded-3xl border-4 border-primary/40 bg-gradient-to-b from-navy-soft to-navy-deep p-3 shadow-2xl"
          >
            <img
              src={heroPhoto}
              alt="Portrait of Haider Ali"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 top-8 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink shadow-lg"
            >
              <Code2 className="h-4 w-4 text-primary" />
              React &amp; JavaScript
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink shadow-lg"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-coral" />
              Frontend Developer
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </header>
  )
}
