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
            src="/profile.jpg"
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
      className="relative w-full py-24 md:py-32 lg:py-40 px-6"
      style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e3a8a 20%, #1e3a8a 60%, #0f172a 100%)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto space-y-24 md:space-y-32">

        {/* ── What I care about ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-5">
              what i care about
            </p>
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
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-10">
            background
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14">
            <div className="space-y-7">
              {BACKGROUND_PARAS.slice(0, 2).map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed text-base md:text-[1.05rem]">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-7">
              {BACKGROUND_PARAS.slice(2).map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed text-base md:text-[1.05rem]">
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
