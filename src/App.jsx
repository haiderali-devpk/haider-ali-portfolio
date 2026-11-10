import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-light font-sans text-ink dark:bg-navy-deep dark:text-light">
      <Loader />

      <Header theme={theme} onToggleTheme={toggle} />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  )
}
