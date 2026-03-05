import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/* Floating HUD data elements */
function HudData() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top-right data block */}
      <div className="absolute top-24 right-8 sm:right-16 hidden sm:block" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <div className="font-mono text-[10px] text-champagne/30 leading-relaxed text-right">
          <p>SYS.STATUS: <span className="text-champagne/60">OPERATIONAL</span></p>
          <p>PIPELINES: <span className="text-champagne/60">12 ACTIVE</span></p>
          <p>UPTIME: <span className="text-champagne/60">99.97%</span></p>
        </div>
      </div>

      {/* Vertical hex stream — left edge */}
      <div className="absolute left-4 top-0 bottom-0 hidden lg:flex flex-col justify-center gap-1 font-mono text-[9px] text-champagne/10">
        {['0x4F', '0xA3', '0x7B', '0xE1', '0x2D', '0x9C', '0x5E', '0xF4'].map((hex, i) => (
          <span key={i}>{hex}</span>
        ))}
      </div>

      {/* Geometric accent — bottom right */}
      <svg className="absolute bottom-32 right-12 w-40 h-40 hidden md:block opacity-[0.06]" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="70" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="80" cy="80" r="50" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 6" />
        <line x1="80" y1="0" x2="80" y2="160" stroke="#C9A84C" strokeWidth="0.3" />
        <line x1="0" y1="80" x2="160" y2="80" stroke="#C9A84C" strokeWidth="0.3" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
      })
        .from(headlineRef.current?.children || [], {
          y: 50,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
        }, '-=0.3')
        .from(
          subRef.current,
          { y: 30, opacity: 0, duration: 0.8 },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.6 },
          '-=0.4'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-dvh w-full flex items-end overflow-hidden scanlines"
    >
      {/* Dark base with dot grid */}
      <div className="absolute inset-0 bg-void dot-grid" />

      {/* Radial glow from center-bottom */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-champagne/[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-champagne/[0.02] blur-[100px]" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 line-grid opacity-40" />

      {/* Top border glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      <HudData />

      {/* Content — bottom-left third */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-12 lg:px-24 pb-16 sm:pb-24">
        {/* Status badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/20 bg-champagne/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne pulse-dot" />
          <span className="font-mono text-[10px] text-champagne/70 uppercase tracking-[0.15em]">
            Agentic Systems Online — 20+ Integrations Active
          </span>
        </div>

        <div ref={headlineRef}>
          <span className="block font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-[1.05]">
            We don't automate.
          </span>
          <span className="block font-drama italic text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-champagne leading-[0.95] -mt-1 sm:-mt-2 drop-shadow-[0_0_40px_rgba(201,168,76,0.15)]">
            We build systems.
          </span>
        </div>

        <p
          ref={subRef}
          className="mt-6 sm:mt-8 max-w-lg text-ivory/50 text-base sm:text-lg font-light leading-relaxed"
        >
          Agentic workflows that source, sell, report, and optimize —
          without human intervention. We're building the enterprise
          of tomorrow, one system at a time.
        </p>

        <a
          ref={ctaRef}
          href="#book"
          className="btn-magnetic mt-8 inline-flex items-center gap-3 bg-champagne text-obsidian px-8 py-4 rounded-full text-base sm:text-lg font-semibold tracking-tight"
        >
          <span className="btn-bg bg-ivory rounded-full" />
          <span className="relative z-10">Book a Discovery Call</span>
          <svg className="relative z-10 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />
    </section>
  )
}
