import Intro from './components/Intro'
import Chatbot from './components/Chatbot'
import ThemeToggle from './components/ThemeToggle'
import {
  About,
  Certifications,
  Contact,
  Experience,
  Footer,
  Header,
  Projects,
  TechStack,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Intro />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
        <div className="mb-6 flex justify-end sm:mb-0">
          <ThemeToggle />
        </div>
        <Header />

        <main className="mt-10 space-y-5">
          <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
            <div className="space-y-5">
              <About />
              <TechStack />
            </div>
            <Experience />
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <Projects />
            <Certifications />
          </div>

          <Contact />
        </main>

        <Footer />
      </div>
      <Chatbot />
    </>
  )
}
