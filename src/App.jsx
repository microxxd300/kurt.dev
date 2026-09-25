import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'

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
      </main>
    </>
  )
}

export default App
