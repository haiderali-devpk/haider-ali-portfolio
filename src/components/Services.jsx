import { Check, Globe, Laptop, Rocket } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TypingHeading from './TypingHeading.jsx'

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    text: 'A complete, professional website for your business — services, about, and a clear way for customers to reach you.',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    text: 'Fast, focused landing pages that explain your offer clearly and turn visitors into enquiries and customers.',
  },
  {
    icon: Laptop,
    title: 'Web Apps',
    text: 'Interactive web apps in React — task tools, calculators and dashboards that work smoothly on any device.',
  },
]

const included = ['Responsive on every screen', 'Fast to load', 'Clean, modern design']

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-navy py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-coral">Services</p>
          <TypingHeading
            text="What I can build for you"
            className="mt-2 font-display text-3xl font-extrabold md:text-4xl"
          />
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            From a first business website to a tool your customers use every day.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-1 text-white/75">{service.text}</p>
                <ul className="mt-4 space-y-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                      <Check className="h-4 w-4 text-coral" />
                      {item}
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
