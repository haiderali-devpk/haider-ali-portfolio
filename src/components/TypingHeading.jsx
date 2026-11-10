import { useEffect, useRef, useState } from 'react'

// A heading that types itself letter by letter the first time it scrolls
// into view. It shows the full text until typing starts, so it never
// sits blank, and screen readers always get the full heading.
// Custom code only — no typing library is used.
// Props: text (string), level ("h1" | "h2" | "p"), className, delay (ms before typing starts)
export default function TypingHeading({ text, level = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null)
  const [typed, setTyped] = useState(null) // null = show full text, not started
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Respect reduced motion: show the full heading, no typing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return
    let timer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          timer = setTimeout(() => {
            setTyped('')
            let i = 0
            const step = Math.max(18, Math.min(34, Math.floor(900 / text.length)))
            const interval = setInterval(() => {
              i += 1
              setTyped(text.slice(0, i))
              if (i >= text.length) clearInterval(interval)
            }, step)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [text, delay])

  const Tag = level
  const display = typed === null ? text : typed
  const done = typed !== null && typed.length >= text.length

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {display}
        {typed !== null && !done && <span className="caret" aria-hidden="true">|</span>}
      </span>
    </Tag>
  )
}
