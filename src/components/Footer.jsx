// Footer — two-column site footer (Option 1). Left: HA. logo, name and a
// short professional tagline. Right: quick links plus contact / social
// links, including LinkedIn exactly once. Bottom row: copyright.
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-lg bg-primary px-2.5 py-1 font-display text-lg font-extrabold">
            HA.
          </span>
          <p className="mt-3 font-display text-xl font-bold">Haider Ali</p>
          <p className="mt-1 max-w-sm text-white/70">
            Frontend Developer — I build fast, modern websites that turn
            visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-coral">Explore</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#home" className="text-white/80 transition hover:text-white">Home</a></li>
              <li><a href="#projects" className="text-white/80 transition hover:text-white">Projects</a></li>
              <li><a href="#skills" className="text-white/80 transition hover:text-white">Skills</a></li>
              <li><a href="#contact" className="text-white/80 transition hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-coral">Connect</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/haider-ali-ba5492331/" target="_blank" rel="noreferrer" className="text-white/80 transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/haiderali-devpk" target="_blank" rel="noreferrer" className="text-white/80 transition hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:haiderali646450@gmail.com" className="break-all text-white/80 transition hover:text-white">
                  haiderali646450@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923281409024" className="text-white/80 transition hover:text-white">
                  +92 328 1409024
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-white/60">
          © 2026 Haider Ali. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
