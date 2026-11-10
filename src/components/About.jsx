import { Check, Download } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TypingHeading from './TypingHeading.jsx'

// About — professional and neutral.
const points = [
  'Clean, responsive interfaces',
  'Fast, modern web experiences',
  'Business-first thinking',
]

const facts = [
  { label: 'Name', value: 'Haider Ali' },
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Focus', value: 'React & JavaScript' },
  { label: 'Status', value: 'Crafting clean, responsive interfaces' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-primary">About me</p>
        <TypingHeading
          text="A developer who thinks like a business partner"
          className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white md:text-4xl"
        />
        <p className="mt-4 max-w-2xl text-lg text-muted dark:text-slate-300">
          My focus is business websites, landing pages and web apps — clean,
          fast and responsive interfaces that help a business look professional
          online and turn visitors into customers.
        </p>
        <p className="mt-4 max-w-2xl text-muted dark:text-slate-300">
          I&rsquo;m Haider Ali, a frontend developer. I build with React and
          JavaScript, and I care about the details that make a website feel
          trustworthy: clear structure, fast loading, and a design that works
          beautifully on every phone and desktop.
        </p>
        <a
          href="/haider-ali-cv.pdf"
          download="Haider-Ali-CV.pdf"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-white shadow-lg shadow-coral/30 transition hover:bg-coral-dark"
        >
          <Download className="h-4 w-4" /> Download CV
        </a>
        <ul className="mt-6 space-y-2">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2 font-medium text-ink dark:text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft dark:bg-primary/20">
                <Check className="h-4 w-4 text-primary dark:text-blue-300" />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-border bg-white p-4 dark:border-white/10 dark:bg-navy">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted dark:text-slate-400">{fact.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-ink dark:text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
