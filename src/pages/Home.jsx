// Home page — composes all the sections of the one-page portfolio in
// order: hero (Haider), skills ticker, about, skills, projects, services
// and contact. App.jsx renders this inside <main>.
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Services from '../components/Services.jsx'
import Contact from '../components/Contact.jsx'

const ticker = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS',
  'Bootstrap', 'SCSS', 'Responsive Design', 'Git & GitHub',
]

export default function Home() {
  return (
    <>
      <Hero />

      <div className="overflow-hidden bg-primary py-3 text-white" aria-hidden="true">
        <div className="ticker-track flex w-max whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="mx-5 flex items-center gap-5 text-sm font-semibold tracking-wide">
              {item} <span className="text-coral">◆</span>
            </span>
          ))}
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}
