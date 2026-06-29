const WORK_EXPERIENCE = [
  {
    title: 'Database Developer Intern',
    org: 'Montgomery County Free Clinic',
    period: 'Sept. 2025 – Dec. 2025',
    bullets: [
      {
        label: 'Relational Database Design',
        desc: 'Designed and implemented a relational database schema to manage sensitive patient records, ensuring ACID compliance and data security.',
      },
      {
        label: 'System Architecture',
        desc: 'Collaborated with a team and clinic staff to translate complex healthcare workflows into a scalable, functional solution.',
      },
    ],
  },
  {
    title: 'Freelance Web Developer',
    org: '',
    period: 'Dec. 2025 – Present',
    bullets: [
      {
        label: 'Client Consultation',
        desc: 'Consulted with local business owners to translate business requirements into high-impact, professional websites.',
      },
      {
        label: 'End-to-End Development',
        desc: 'Managed full-lifecycle development pipelines from UX/UI design in Figma to deployment utilizing industry-standard tools including HTML5, CSS3, Git, and AWS S3.',
      },
    ],
  },
]

const TECH_SKILLS = [
  {
    category: 'Languages',
    items: 'Python (Pandas, SQLite, Matplotlib, NumPy), C, SQL, HTML5, CSS3, Racket, MIPS Assembly',
  },
  {
    category: 'Cloud & DevOps',
    items: 'AWS (EC2, S3, IAM, Lambda), Git, GitHub, Vercel, Supabase',
  },
  {
    category: 'Backend & Database',
    items: 'PostgreSQL, Supabase, Relational Database Design, REST APIs',
  },
  {
    category: 'Software Concepts',
    items: 'CRUD Operations, Authentication & Authorization, Routing',
  },
]

const NON_TECH_SKILLS = [
  {
    category: 'Leadership & Management',
    items: 'Project Lifecycle Management, Cross-Functional Team Leadership, Resource Allocation',
  },
  {
    category: 'Operations & Strategy',
    items: 'Digital Transformation, Stakeholder Management, Workflow Automation',
  },
  {
    category: 'Data & Business Analytics',
    items: 'Data-Driven Decision Making, Performance Metrics, Trend Analysis',
  },
  {
    category: 'Technical Literacy',
    items: 'Cloud Concepts (AWS), Relational Databases, UI/UX Prototyping (Figma), Agile Frameworks',
  },
  {
    category: 'Languages',
    items: 'Bilingual Professional (Fluent in English and Spanish)',
  },
]

const CERTIFICATIONS = [
  'AWS Certified Cloud Practitioner – Amazon Web Services (Apr. 2026)',
  'Foundations – Google Data Analytics Professional Certificate (Aug. 2025)',
  'Ask Questions to Make Data-Driven Decisions – Google Data Analytics Professional Certificate (Aug. 2025)',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden"
      style={{ background: '#08090f' }}
    >
      <img
        src="/mountain-black.jpg"
        alt="Skills Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />

      {/* Top-right corner anchor */}
      <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute top-4 right-6 md:right-12 z-20 text-xs text-white/40 hover:text-white/80 underline underline-offset-2 lowercase transition-colors duration-200"
      >
        view my projects
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">

        {/* Section heading */}
        <h2
          className="heading-inner-shadow font-black tracking-tighter leading-none mb-5"
          style={{
            fontSize: 'clamp(2.2rem, 7vw, 5.5rem)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
          >
          aptitudes and qualifications
        </h2>

        {/* Asymmetric 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">

          {/* Left — Work Experience (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35 font-semibold">
              work experience
            </p>
            <div className="space-y-9">
              {WORK_EXPERIENCE.map((job, i) => (
                <div key={i} className="space-y-3">
                  <div>
                    <p className="font-semibold text-white text-sm leading-snug">{job.title}</p>
                    {job.org && (
                      <p className="text-white/45 text-xs mt-0.5">{job.org}</p>
                    )}
                    <p className="text-white/30 text-xs mt-0.5 tracking-wide">{job.period}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-white/55 leading-relaxed">
                        <span className="text-white/80 font-medium">{b.label}: </span>
                        {b.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tech + Non-Tech + Education (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Top pair: Technical Skills + Non-Technical Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Technical Skills */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35 font-semibold">
                  technical skills
                </p>
                <div className="space-y-5">
                  {TECH_SKILLS.map((skill, i) => (
                    <div key={i}>
                      <p className="text-white/80 font-semibold text-sm mb-1">{skill.category}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Technical Experience */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35 font-semibold">
                  non-technical experience
                </p>
                <div className="space-y-5">
                  {NON_TECH_SKILLS.map((skill, i) => (
                    <div key={i}>
                      <p className="text-white/80 font-semibold text-sm mb-1">{skill.category}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Education & Certifications */}
            <div className="p-5 space-y-5"
                // style={{
                //   background: 'rgba(0, 200, 255, 0.03)',
                //   border: '1px solid rgba(0, 200, 255, 0.38)',
                //   boxShadow:
                //     '0 0 30px rgba(0, 200, 255, 0.12), 0 0 70px rgba(0, 200, 255, 0.06), inset 0 0 30px rgba(0, 200, 255, 0.04)',
                // }}
                >
              <p className="text-xs uppercase tracking-[0.3em] text-white/35 font-semibold mb-6">
                education &amp; certifications
              </p>
              <p className="font-semibold text-white text-base mb-1">B.A. Computer Science</p>
              <p className="text-white/45 text-sm mb-7">
                Wabash College &nbsp;·&nbsp; May 2026
              </p>
              <ul className="space-y-2.5">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="text-white/50 text-sm leading-relaxed">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Footer action links */}
        <div className="flex flex-wrap gap-6 md:gap-10 justify-center border-t border-white/10 pt-8">
          <button className="text-sm text-white underline hover:text-sky-400 tracking-wide lowercase transition-colors duration-200 cursor-pointer">
            download my resume
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-white underline hover:text-sky-400 tracking-wide lowercase transition-colors duration-200 cursor-pointer"
          >
            view my projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-white underline hover:text-sky-400 tracking-wide lowercase transition-colors duration-200 cursor-pointer"
          >
            get in contact
          </button>
          <a
            href="#"
            className="text-sm text-white underline hover:text-sky-400 tracking-wide lowercase transition-colors duration-200"
          >
            Linkedin
          </a>
        </div>

      </div>
    </section>
  )
}
