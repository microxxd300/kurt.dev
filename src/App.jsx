import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Resume />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App
