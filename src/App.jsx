import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { projects, skills } from './data'

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-16 top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-20" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
