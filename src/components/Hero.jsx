import { ChevronDown } from 'lucide-react'

function MountainSilhouette() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 340"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Far range — misty */}
      <path
        d="M0,340 L0,230 L70,190 L140,215 L210,155 L300,180 L380,100 L460,145 L540,75 L620,125 L700,65 L780,115 L860,85 L940,135 L1020,105 L1100,155 L1180,125 L1260,165 L1360,145 L1440,175 L1440,340 Z"
        fill="#334155"
        fillOpacity="0.45"
      />
      {/* Mid range */}
      <path
        d="M0,340 L0,275 L85,220 L175,255 L265,185 L355,225 L445,160 L535,200 L625,145 L715,185 L805,155 L895,195 L985,170 L1075,210 L1165,185 L1255,220 L1360,200 L1440,230 L1440,340 Z"
        fill="#1e293b"
        fillOpacity="0.75"
      />
      {/* Foreground ridge — solid anchor */}
      <path
        d="M0,340 L0,310 L110,280 L230,305 L350,265 L470,295 L590,270 L710,300 L830,278 L950,295 L1070,272 L1190,290 L1310,276 L1440,292 L1440,340 Z"
        fill="#0f172a"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #0b0f1a 0%, #0f2040 18%, #1a3a6b 38%, #1e4d8c 52%, #c2855a 70%, #8b5e3c 82%, #2d1f14 95%, #0f172a 100%)',
      }}
    >
      {/* Subtle star-field texture at top */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20% 12%, white, transparent), radial-gradient(1px 1px at 55% 8%, white, transparent), radial-gradient(1.5px 1.5px at 75% 5%, white, transparent), radial-gradient(1px 1px at 35% 18%, white, transparent), radial-gradient(1px 1px at 88% 15%, white, transparent), radial-gradient(1px 1px at 10% 22%, white, transparent), radial-gradient(1px 1px at 92% 25%, white, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Alpenglow horizon bloom */}
      <div
        className="absolute w-full"
        style={{
          bottom: '32%',
          height: '180px',
          background:
            'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,160,90,0.28) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Hero headline */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-24 md:pb-32 lg:pb-40">
        <h1
          className="font-black tracking-tighter text-white leading-none select-none"
          style={{
            fontSize: 'clamp(2.8rem, 9.5vw, 8.5rem)',
            textShadow:
              '0 2px 0 rgba(0,0,0,0.4), 0 4px 24px rgba(0,0,0,0.5), 0 0 80px rgba(255,150,80,0.15)',
            color: '#f1f5f9',
          }}
        >
          HI, I AM OLIVER.
        </h1>
        <p
          className="mt-4 md:mt-6 font-light tracking-widest uppercase text-slate-300/70"
          style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.85rem)', letterSpacing: '0.35em' }}
        >
          developer &nbsp;·&nbsp; builder &nbsp;·&nbsp; community-driven
        </p>
      </div>

      {/* Mountain silhouette layers */}
      <MountainSilhouette />

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
        className="absolute bottom-6 z-20 flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors duration-300 animate-bounce cursor-pointer"
      >
        <ChevronDown size={26} strokeWidth={1.5} />
      </button>
    </section>
  )
}
