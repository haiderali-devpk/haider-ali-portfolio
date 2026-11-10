import { Code2, Palette, Settings2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TypingHeading from './TypingHeading.jsx'

const groups = [
  {
    title: 'Styling & Layout',
    icon: Palette,
    text: 'Utility frameworks and clean, responsive layouts.',
    skills: ['Tailwind CSS', 'Bootstrap', 'SCSS', 'CSS', 'Responsive Design'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    text: 'Modern JavaScript and component-based interfaces.',
    skills: ['HTML', 'JavaScript', 'React'],
  },
  {
    title: 'Workflow & Tools',
    icon: Settings2,
    text: 'Version control and a clean, repeatable workflow.',
    skills: ['Git & GitHub'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white py-20 dark:bg-navy-deep">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Skills</p>
          <TypingHeading
            text="The tools I build with"
            className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white md:text-4xl"
          />
          <p className="mt-4 max-w-2xl text-lg text-muted dark:text-slate-300">
            A focused frontend stack — picked for speed, clean code and
            websites that work everywhere.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 120}>
              <article className="h-full rounded-3xl border border-border bg-light p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-navy">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <group.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink dark:text-white">{group.title}</h3>
                <p className="mt-1 text-muted dark:text-slate-300">{group.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary-dark dark:bg-primary/20 dark:text-blue-200">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
