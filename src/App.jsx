import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Contact, Footer, Journey, Projects, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
