import { GitBranch, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Intake Patient Form for Montgomery County Medical Center',
    impact: 'Replaced a paper-based patient record system with a secure, ACID-compliant relational database.',
    description:
      'Replaced a disorganized, paper-based record system at a local healthcare clinic with a secure relational database — enabling ACID-compliant patient data management and consistent workflows across clinic staff.',
    tags: ['Typescript', 'React', 'SQL', 'Vercel', 'Relational DB Design', 'Healthcare IT'],
    github: 'https://github.com/OliverRamos2004/moco-clinic-forms-main',
    live: 'https://moco-clinic-forms-main.vercel.app/',
    image: '/project-screenshots/moco-clinic-intake.png',
    size: 'large',
  },
  {
    title: 'Professional Site for Green Valley Storage',
    impact: 'Built and deployed a full business site for a local hauling company in Austin, TX.',
    description:
      'Professional site for Green Valley Storage LLC, a local hauling company in the Austin Texas area. Built using modern web technologies and deployed to AWS S3.',
    tags: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Git'],
    github: 'https://github.com/OliverRamos2004/Green-Valley-Storage-LLC',
    live: 'https://greenvalleystoragellc.com/',
    image: '/project-screenshots/green-valley-storage.png',
    size: 'wide',
  },
  {
    title: "Professional Site for Jacky's Bouquets",
    impact: 'Delivered a professional storefront for a local florist, from Figma prototype to AWS deployment.',
    description:
      'Professional site for Jacky\'s Bouquets, a local florist in the South Texas area. Prototyped with Figma and deployed to AWS S3 for fast, reliable access.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'AWS S3', 'Git'],
    github: 'https://github.com/OliverRamos2004/Jackies-Bouquets',
    live: 'https://jackies-bouquets.vercel.app/',
    image: '/project-screenshots/jackys-bouquets.png',
    size: 'small',
  },
  {
    title: 'Developer Portfolio - Oliver Ramos',
    impact: 'Designed and built this interactive portfolio from scratch, section by section.',
    description:
      'Needed a professional, visually compelling home on the web to showcase projects, skills, and professional identity. Built entirely from scratch with a section-by-section interactive layout.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'AWS S3'],
    github: 'https://github.com/OliverRamos2004/oliver-portfolio',
    live: 'https://oliverramos.dev',
    image: '/project-screenshots/oliver-portfolio.png',
    size: 'small',
  },
  {
    title: 'Ramos Lawn Care & Services',
    impact: 'Built and deployed a residential & commercial landscaping business site.',
    description:
      'Professional site for Ramos Lawn Care & Services, a residential and commercial landscaping business. Built with React, TypeScript, and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/OliverRamos2004/ramos-lawn-website',
    live: 'https://ramoslawnservices.com',
    image: '/project-screenshots/ramos-lawn-services.png',
    size: 'wide',
  },
  {
    title: 'Tex Country Materials',
    impact: 'Built and deployed a business site for an Austin-based construction materials hauling company.',
    description:
      'Professional site for Tex Country Materials LLC, a materials hauling company in Austin, Texas delivering dirt, mulch, gravel, road base, and screened sand. Built with Next.js and Tailwind CSS, deployed on Vercel.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/OliverRamos2004/texas-country-site-app',
    live: 'https://texas-country-site-app.vercel.app/',
    image: '/project-screenshots/tex-country-materials.png',
    size: 'small',
  },
]

const CURRENT_BUILD = {
  title: 'MatchCut',
  status: 'In spec & planning phase',
  description:
    'A B2B SaaS marketplace matching independent barbers and barbershops with clients — streamlining discovery, booking, and relationship management for both sides of the transaction.',
  tags: ['B2B SaaS', 'Marketplace', 'Two-Sided Platform'],
}

const SIZE_CLASSES = {
  large: 'md:col-span-6 md:row-span-2',
  wide: 'md:col-span-6 md:row-span-1',
  small: 'md:col-span-3 md:row-span-1',
  placeholder: 'md:col-span-6 md:row-span-1',
}

function PlaceholderCard({ project }) {
  return (
    <article className="project-card relative flex flex-col overflow-hidden opacity-60 md:col-span-6 md:row-span-1">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/35 mb-3">
          in progress
        </span>
        <h3 className="font-bold text-white/70 text-sm md:text-base leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed">
          {project.impact}
        </p>
      </div>
    </article>
  )
}

function ProjectCard({ project }) {
  if (project.size === 'placeholder') {
    return <PlaceholderCard project={project} />
  }

  const isLarge = project.size === 'large'

  return (
    <article
      className={`project-card group relative flex flex-col overflow-hidden ${SIZE_CLASSES[project.size]}`}
    >
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live project: ${project.title}`}
          className="absolute inset-0 z-10"
        />
      )}

      <div className={`relative w-full overflow-hidden ${isLarge ? 'h-72 md:h-80' : 'h-32 md:h-36'}`}>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="flex-1 flex flex-col p-5 md:p-6">
        <h3 className={`font-bold text-white leading-snug mb-2 ${isLarge ? 'text-lg md:text-xl' : 'text-sm md:text-base'}`}>
          {project.title}
        </h3>

        <p className={`text-white/60 leading-relaxed mb-3 ${isLarge ? 'text-sm' : 'text-xs line-clamp-2'}`}>
          {project.impact}
        </p>

        {isLarge && (
          <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        )}

        <div className={`flex flex-wrap gap-2 mb-4 ${isLarge ? 'mt-5' : 'mt-auto'}`}>
          {project.tags.slice(0, isLarge ? project.tags.length : 3).map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] px-2 py-0.5 rounded-full text-white/55 tracking-wide"
              style={{
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.13)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative z-20 flex items-center gap-5 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="text-white/30 hover:text-white/90 transition-colors duration-200"
          >
            <GitBranch size={16} strokeWidth={1.5} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open live project"
            className="text-white/30 hover:text-white/90 transition-colors duration-200"
          >
            <ExternalLink size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
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
          My approach to projects aligns with my core aptitudes and
          values: People-driven, efficient, and simple.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[22rem] gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Currently building */}
        <div className="mt-10 md:mt-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">
              currently building
            </span>
          </div>

          <div
            className="project-card relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8"
            style={{ borderStyle: 'dashed' }}
          >
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg md:text-xl mb-2">
                {CURRENT_BUILD.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                {CURRENT_BUILD.description}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <div className="flex flex-wrap gap-2 md:justify-end">
                {CURRENT_BUILD.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6rem] px-2 py-0.5 rounded-full text-white/55 tracking-wide"
                    style={{
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid rgba(255, 255, 255, 0.13)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-white/35 italic">{CURRENT_BUILD.status}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Section footer — pinned to bottom */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="flex flex-wrap gap-8 md:gap-16 justify-center">
          <a
            href="/Ramos_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200"
          >
            download my resume
          </a>
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
          <a
            href="https://github.com/Oliverramos2004github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200"
          >
            github
          </a>
        </div>
      </div>

    </section>
  )
}
