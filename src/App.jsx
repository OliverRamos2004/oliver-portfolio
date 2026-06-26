import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* ── Placeholder: Projects ── */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0f172a' }}
      >
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium">
          projects — coming soon
        </p>
      </section>

      {/* ── Placeholder: Contact ── */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#080c14' }}
      >
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium">
          contact — coming soon
        </p>
      </section>
    </>
  )
}
