import { Mail } from 'lucide-react'

// Inline SVG — brand icons removed from lucide-react; hand-rolled to match Lucide stroke style
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const FOOTER_NAV = ['about', 'home', 'contact']

export default function Contact() {
  return (
    <>
      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="relative w-full min-h-[120vh] flex flex-col overflow-hidden"
        style={{ background: '#090909' }}
      >
        <img
          src="/bricks-black.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(9,9,9,0.6)' }} aria-hidden="true" />
        
        

        {/* Top-right corner anchor */}
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute top-4 right-6 md:right-12 z-20 text-xs text-white/40 hover:text-white/80 underline underline-offset-2 lowercase transition-colors duration-200"
        >
          back to top
        </button>

        {/* Main content */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 pt-20 md:pt-28 pb-16 flex flex-col">

          {/* Heading + subtitle */}
          <div className="mb-14 md:mb-16">
            <h2
              className="heading-inner-shadow font-black tracking-tighter leading-none mb-5"
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 7.5rem)',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              let's connect
            </h2>
            <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-sm">
              Whether for a project, an inquiry, or just to talk, feel free to reach out.
              I usually respond within 48 hours.
            </p>
          </div>

          {/* Contact form — UI only for now; wire up to Formspree (or similar) once ready */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 mb-16 md:mb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-white/70">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  className="bg-white border border-black/10 rounded-[12px] text-black placeholder-black/35 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-white/70">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="bg-white border border-black/10 rounded-[12px] text-black placeholder-black/35 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="reason" className="font-mono text-xs uppercase tracking-widest text-white/70">
                Reason for Message
              </label>
              <input
                id="reason"
                name="reason"
                type="text"
                placeholder="Project inquiry, collaboration, just saying hi..."
                className="bg-white border border-black/10 rounded-[12px] text-black placeholder-black/35 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-white/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about what you have in mind..."
                className="bg-white border border-black/10 rounded-[12px] text-black placeholder-black/35 px-4 py-3 text-sm resize-none focus:outline-none focus:border-black transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 rounded-[12px] hover:bg-white/85 transition-colors duration-300 cursor-pointer"
            >
              send message
            </button>
          </form>

          {/* Centered contact handles */}
          <div className="flex flex-col items-center justify-center flex-1 gap-4 py-12">
            <a
              href="mailto:oliver78660@gmail.com"
              className="hover-sky-gradient font-black tracking-tight text-white/80 text-center leading-none transition-colors duration-300"
              style={{ fontSize: 'clamp(1rem, 3vw, 3rem)', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              OLIVER78660@GMAIL.COM
            </a>
            <a
              href="https://www.linkedin.com/in/oliverramos1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-sky-gradient font-black tracking-tighter text-white/90 text-center leading-none transition-colors duration-300"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 5.5rem)', fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              @OLIVERRAMOS1
            </a>
          </div>

        </div>
      </section>

      {/* ── Footer ── seamlessly below contact */}
      <footer className="bg-white w-full border-t border-slate-100 py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-4">

          {/* Left — social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/oliverramos2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href="mailto:oliver78660@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/oliverramos1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-800 transition-colors duration-200"
            >
              <LinkedinIcon />
            </a>
          </div>

          {/* Center — stacked nav */}
          <nav className="flex flex-col items-center gap-1.5">
            {FOOTER_NAV.map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs lowercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right — copyright */}
          <div className="flex justify-end">
            <p className="font-mono text-xs text-slate-400 text-right leading-relaxed">
              © 2026 Oliver Ramos.<br />All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}
