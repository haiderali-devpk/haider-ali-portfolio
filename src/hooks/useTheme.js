import { useCallback, useEffect, useState } from 'react'

// useTheme — dark / light mode.
// - Reads the saved choice from localStorage ('haider-portfolio-theme').
// - On first visit (nothing saved) it follows the system preference
//   (prefers-color-scheme: dark).
// - Toggling adds/removes the .dark class on <html>, which Tailwind v4
//   picks up via the @custom-variant in index.css, and saves the choice.
const STORAGE_KEY = 'haider-portfolio-theme'

function initialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    // storage unavailable — fall through to the system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // storage unavailable — theme still applies for this visit
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
