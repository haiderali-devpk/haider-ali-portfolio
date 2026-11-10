import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'

// Header — site navigation. Brand "HA. Haider Ali" linking to #home,
// nav links About, Skills, Projects, Services, and a Contact button.
// Includes a dark / light mode toggle (Sun / Moon) and a responsive
// mobile menu: hamburger opens a slide-down panel, tapping any link
// closes it again.
const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
]

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  const themeButton = (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg p-2 text-ink transition hover:bg-light dark:text-white dark:hover:bg-white/10"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur dark:border-white/10 dark:bg-navy-deep/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink dark:text-white">
          <span className="rounded-lg bg-primary px-2.5 py-1 text-white">HA.</span>
          Haider Ali
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="font-medium text-muted transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-coral">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Contact
          </a>
          {themeButton}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {themeButton}
          <button
            type="button"
            className="rounded-lg p-2 text-ink hover:bg-light dark:text-white dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border bg-white dark:border-white/10 dark:bg-navy-deep md:hidden"
          >
            <div className="flex flex-col gap-3 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-muted hover:text-primary dark:text-slate-300 dark:hover:text-coral"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
