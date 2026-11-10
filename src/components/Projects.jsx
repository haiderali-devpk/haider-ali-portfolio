import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TypingHeading from './TypingHeading.jsx'
import taskflowShot from '../assets/project-taskflow.webp'
import taxShot from '../assets/project-tax.webp'
import ageShot from '../assets/project-age.webp'
import calculatorShot from '../assets/project-calculator.webp'

// Project images are real screenshots of each live project, saved in
// src/assets/ — the same files shown here. Edit a title, text, tech list
// or link below to change a project; to change its picture, replace the
// matching file in src/assets/ (project-taskflow, project-tax,
// project-age, project-calculator).
const projects = [
  {
    id: 'taskflow',
    label: 'Task Manager',
    title: 'TaskFlow Hub',
    text: 'A modern and intuitive task management web application to streamline your daily workflow and boost productivity.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    live: 'https://taskflow-hub-ivory.vercel.app',
    github: 'https://github.com/haiderali-devpk/TaskFlow-Hub',
    image: taskflowShot,
    imageAlt: 'Screenshot of the TaskFlow Hub task manager app',
  },
  {
    id: 'tax',
    label: 'Client Website',
    title: 'Tax Consultant Expert',
    text: 'A professional tax consulting and advisory website for Adv. Babar — a complete business site with services, about content and clear contact paths.',
    tech: ['React', 'JavaScript', 'SCSS', 'HTML'],
    live: 'https://tax-consultant-expert.vercel.app',
    github: 'https://github.com/haiderali-devpk/tax-consultant-expert',
    image: taxShot,
    imageAlt: 'Screenshot of the Tax Consultant Expert website',
  },
  {
    id: 'age',
    label: 'Utility App',
    title: 'Age Finder Calculator',
    text: 'Calculate exact age by entering a date of birth — a simple, responsive and user-friendly age calculator.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://age-finder-calculator.vercel.app',
    github: 'https://github.com/haiderali-devpk/Age-Finder-Calculator',
    image: ageShot,
    imageAlt: 'Screenshot of the Age Finder Calculator app with a worked result',
  },
  {
    id: 'calculator',
    label: 'Utility App',
    title: 'Calculator',
    text: 'A simple and responsive calculator for basic arithmetic operations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://calculator-psi-two-34.vercel.app',
    github: 'https://github.com/haiderali-devpk/Calculator',
    image: calculatorShot,
    imageAlt: 'Screenshot of the Calculator app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Portfolio</p>
        <TypingHeading
          text="Selected work"
          className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white md:text-4xl"
        />
        <p className="mt-4 max-w-2xl text-lg text-muted dark:text-slate-300">Real projects, built and shipped — open a live demo or read the code.</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-coral/60 hover:shadow-2xl hover:shadow-primary/15 dark:border-white/10 dark:bg-navy dark:hover:border-coral/60 dark:hover:shadow-coral/10">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-110"
                />
                {/* Hover overlay — quick actions appear over the image */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-navy/75 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-coral hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" /> View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex translate-y-2 items-center gap-2 rounded-full border-2 border-white px-4 py-2 text-sm font-semibold text-white opacity-0 transition duration-300 [transition-delay:60ms] group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white hover:text-navy"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-coral-dark dark:text-coral">{project.label}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-coral">{project.title}</h3>
                <p className="mt-2 flex-1 text-muted dark:text-slate-300">{project.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary-dark dark:bg-primary/20 dark:text-blue-200">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary dark:border-white/20 dark:text-white dark:hover:border-coral dark:hover:text-coral"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
