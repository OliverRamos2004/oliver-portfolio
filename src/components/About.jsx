const BACKGROUND_PARAS = [
  "I'm a Computer Science graduate from Wabash College with a drive for building tools and growth. As a developer, I focus on bridging the gap between complex tech and the people who use it. I value efficiency and community-driven work, and I'm always looking for ways to create better pipelines that solve real-world operational problems.",
  "Over my educational and professional career, I have gained proficiency in various programming languages, Full-Stack development, and recently became fascinated with the power of Cloud Computing. I aspire to approach and solve complex problems by finding innovative solutions that provide real meaning to communities.",
  "Beyond coding, I have gained a background in Operations Management, Customer Relations (CRM), and running my own business ventures. These experiences helped me refine the leadership and critical thinking skills that I apply to every technical project I take on.",
  "I am someone who is passionate about continuous learning, fostering community, and pursuing growth. Outside of my professional experience and academia, I love playing the drums, vintage fashion, and connecting with people!",
]

function PolaroidImage() {
  return (
    <div className="flex justify-center md:justify-end">
      <div
        className="bg-white p-3 pb-12 shadow-2xl rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 cursor-default"
        style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.55), 0 8px 20px rgba(0,0,0,0.4)' }}
      >
        <div className="w-56 sm:w-64 md:w-72 aspect-[3/4] bg-slate-200 overflow-hidden">
          <img
            src="/profile.jpeg"
            alt="Oliver Ramos"
            className="w-full h-full object-cover"
            onError={(e) => {
              const wrapper = e.target.parentElement
              e.target.remove()
              wrapper.innerHTML =
                '<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-100"><span class="text-slate-400 text-xs text-center px-3 leading-relaxed">Add your photo to<br/><code class=\'font-mono text-slate-500\'>public/profile.jpg</code></span></div>'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-20 px-4 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <img
        src="/mountain-green.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        aria-hidden="true"
      />
      {/* <div className="absolute inset-0 z-0" style={{ background: 'rgba(9,9,9,0.6)' }} aria-hidden="true" /> */}

      <div className="relative z-10 max-w-6xl mx-auto space-y-14 md:space-y-20">

        {/* ── What I care about ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2
            //   className="font-bold text-white leading-none tracking-tight mb-3"
            //   style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2rem)', fontFamily: 'Inter, system-ui, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)' }}
            // >
            className="font-black tracking-tighter leading-none mb-5"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
            fontFamily: 'Inter, system-ui, sans-serif',
            background: 'linear-gradient(175deg, rgba(255,255,255,0.98) 0%, rgba(220,232,252,0.95) 38%, rgba(170,195,238,0.90) 72%, rgba(130,165,220,0.88) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          >
              What I Care About
            </h2>
            <p className="italic font-light text-lg md:text-xl leading-relaxed text-white/80">
              I am driven by community, growth, and innovation in everything that I do. I am someone
              who strives to make an impact. I am someone who is always looking to drive change
              through efficiency. I am someone who likes to value community and growth in everything
              I do.
            </p>
          </div>

          <PolaroidImage />
        </div>

        {/* ── Background ── */}
        <div>
          <h2
          //   className="font-bold text-white leading-none tracking-tight mb-4"
          //   style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2rem)', fontFamily: 'Inter, system-ui, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)' }}
          // >
          className="heading-inner-shadow font-black tracking-tighter leading-none mb-5"
          style={{
            fontSize: 'clamp(2.2rem, 3vw, 4rem)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
          >
            Background
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-14">
            <div className="space-y-5">
              {BACKGROUND_PARAS.slice(0, 2).map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed text-[0.95rem] md:text-[1.1rem]">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-5">
              {BACKGROUND_PARAS.slice(2).map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed text-[0.95rem] md:text-[1.1rem]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
