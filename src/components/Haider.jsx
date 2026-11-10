import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import TypingHeading from './TypingHeading.jsx'

// Haider — the hero / identity section of the page.
// This is Haider Ali's introduction: badge, headline, role, short intro,
// call-to-action buttons and the stats row. Hero.jsx renders this inside
// the hero layout next to the photo; edit the words here to change the
// hero text. The headline's second line types itself (custom, no library).
export default function Haider() {
  return (
    <div>
      <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-coral">
        Building fast, modern web experiences
      </p>
      <h1 className="mt-5 font-display text-[1.7rem] font-extrabold leading-[1.15] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem]">
        Hi, I&rsquo;m Haider Ali.
        <br />
        <TypingHeading
          text="I build fast, modern websites that turn visitors into customers."
          level="span"
          className="text-coral"
        />
      </h1>
      <p className="mt-4 font-mono text-sm text-white/80">Frontend Developer &middot; React &middot; JavaScript</p>
      <TypingHeading
        text="I turn ideas into clean, responsive websites that look great on every screen and help businesses grow online."
        level="p"
        delay={1400}
        className="mt-3 max-w-xl text-white/90"
      />
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
        >
          View my work <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          Get in touch
        </a>
        <a
          href="/haider-ali-cv.pdf"
          download="Haider-Ali-CV.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-white shadow-lg shadow-coral/30 transition hover:bg-coral-dark"
        >
          <Download className="h-4 w-4" /> Download CV
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://github.com/haiderali-devpk"
          target="_blank"
          rel="noreferrer"
          aria-label="Haider Ali on GitHub"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/haider-ali-ba5492331/"
          target="_blank"
          rel="noreferrer"
          aria-label="Haider Ali on LinkedIn"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
      <div className="mt-10 flex gap-8">
        <div>
          <strong className="block font-display text-2xl font-extrabold">4</strong>
          <span className="text-sm text-white/70">Projects shipped</span>
        </div>
        <div>
          <strong className="block font-display text-2xl font-extrabold">React</strong>
          <span className="text-sm text-white/70">Main stack</span>
        </div>
        <div>
          <strong className="block font-display text-2xl font-extrabold">100%</strong>
          <span className="text-sm text-white/70">Responsive</span>
        </div>
      </div>
    </div>
  )
}
