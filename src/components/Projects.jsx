import { useRef } from 'react'
import { GitBranch, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Patient Records Database System',
    description:
      'Replaced a disorganized, paper-based record system at a local healthcare clinic with a secure relational database — enabling ACID-compliant patient data management and consistent workflows across clinic staff.',
    tags: ['Python', 'PostgreSQL', 'SQLite', 'Relational DB Design', 'Healthcare IT'],
    github: '#',
    live: '#',
  },
  {
    title: 'Small Business Web Presence',
    description:
      'Local businesses lacked a professional digital footprint. Consulted with owners to translate brand identities into high-impact websites, deployed to cloud infrastructure for fast, reliable access.',
    tags: ['HTML5', 'CSS3', 'Figma', 'AWS S3', 'Git'],
    github: '#',
    live: '#',
  },
  {
    title: 'Developer Portfolio',
    description:
      'Needed a fast, visually compelling home on the web to showcase projects, skills, and professional identity. Built entirely from scratch with a section-by-section interactive layout.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    const el = sliderRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardWidth = card ? card.offsetWidth + 24 : 484
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#080d08' }}
    >
      {/* TODO: Insert forest graphic background path here */}
      <div className="absolute inset-0" style={{ background: '#080d08' }} aria-hidden="true" />

      {/* Top-right corner anchor */}
      <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute top-4 right-6 md:right-12 z-20 text-xs text-white/40 hover:text-white/80 underline underline-offset-2 lowercase transition-colors duration-200"
      >
        view my projects
      </button>

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 pt-20 md:pt-28 pb-10 flex flex-col">

        {/* Section heading */}
        <h2
          className="heading-inner-shadow font-black tracking-tighter leading-none mb-5"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          projects
        </h2>

        {/* Intro paragraph */}
        <p className="font-mono text-sm md:text-[0.95rem] text-white/50 leading-relaxed max-w-2xl italic mb-14 md:mb-18">
          I am someone who is passionate about continuos learning. I enjoy the process of taking a problem
          and finding a solution to it. My approach to projects aligns with my core aptitudes and
          values: People-driven, efficient, and simple.
        </p>

        {/* Card slider */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-16 z-20 pointer-events-none bg-gradient-to-r from-[#080d08] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-16 z-20 pointer-events-none bg-gradient-to-l from-[#080d08] to-transparent" />
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
        >
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              data-card
              className="project-card snap-start flex-shrink-0 flex flex-col w-[85vw] sm:w-[400px] md:w-[440px] lg:w-[460px] min-h-[300px] p-8"
            >
              {/* Card top */}
              <div className="flex-1">
                <h3 className="font-bold text-white text-base md:text-lg leading-snug mb-4">
                  {project.title}
                </h3>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] px-2.5 py-0.5 rounded-full text-white/55 tracking-wide"
                      style={{
                        background: 'rgba(255, 255, 255, 0.07)',
                        border: '1px solid rgba(255, 255, 255, 0.13)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card footer actions */}
              <div className="flex items-center gap-5 mt-7 pt-5 border-t border-white/10">
                <a
                  href={project.github}
                  aria-label="View on GitHub"
                  className="text-white/30 hover:text-white/90 transition-colors duration-200"
                >
                  <GitBranch size={16} strokeWidth={1.5} />
                </a>
                <a
                  href={project.live}
                  aria-label="Open live project"
                  className="text-white/30 hover:text-white/90 transition-colors duration-200"
                >
                  <ExternalLink size={16} strokeWidth={1.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
        </div>

        {/* Slider prev / next controls */}
        <div className="flex items-center gap-3 mt-7">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous project"
            className="flex items-center justify-center w-9 h-9 text-white/35 hover:text-white transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.14)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)')}
          >
            <ChevronLeft size={15} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next project"
            className="flex items-center justify-center w-9 h-9 text-white/35 hover:text-white transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.14)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)')}
          >
            <ChevronRight size={15} strokeWidth={1.5} />
          </button>
        </div>

      </div>

      {/* Section footer — pinned to bottom */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="flex flex-wrap gap-8 md:gap-16 justify-center">
          <button className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200 cursor-pointer">
            download my resume
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            get in contact
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            view my projects
          </button>
        </div>
      </div>

    </section>
  )
}
