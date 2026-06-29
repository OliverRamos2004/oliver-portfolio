import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0b0f1a' }}
    >
      {/* TODO: Insert specific local hero image path here */}
      <img 
        src="/mountain-blue.jpg" 
        alt="Mountain Background" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top-right corner anchor
      <button
        onClick={() => document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute top-4 right-6 md:right-12 z-20 text-xs text-white/40 hover:text-white/80 underline underline-offset-2 lowercase transition-colors duration-200"
      >
        learn about me
      </button> */}

      {/* Hero headline */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className="hero-gradient-text font-black tracking-tighter leading-none select-none"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 11rem)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          hi, i am Oliver.
        </h1>
        <p
          className="mt-3 font-light tracking-widest uppercase text-slate-200/70"
          style={{ fontSize: 'clamp(0.65rem, 3.8vw, 0.85rem)', letterSpacing: '0.35em' }}
        >
          {/* developer &nbsp;·&nbsp; builder &nbsp;·&nbsp; community-driven */}
        </p>
      </div>

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
