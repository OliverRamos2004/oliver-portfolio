import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['home', 'about', 'projects', 'contact']

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    scrollTo(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`bg-white/90 backdrop-blur-md rounded-b-3xl transition-shadow duration-300 ${
          scrolled ? 'shadow-2xl' : 'shadow-md'
        }`}
      >
        {/* Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-12 py-5 px-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-sm lowercase tracking-widest font-medium text-slate-500 hover:text-slate-900 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Mobile header row */}
        <div className="md:hidden flex items-center justify-between py-4 px-6">
          <span className="text-sm font-semibold tracking-tight text-slate-800 select-none">
            oliver ramos
          </span>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col items-center gap-5 pb-6 pt-2 border-t border-slate-100">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-sm lowercase tracking-widest font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
