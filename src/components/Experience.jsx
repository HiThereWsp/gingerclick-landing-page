import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '$3M+', label: 'Revenue generated for key accounts' },
  { value: '$320K+', label: 'Costs saved with automated ops systems' },
  { value: '952+', label: 'Hours freed with customer experience systems' },
  { value: '60+', label: 'High-ticket sales calls booked with automated pipeline' },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-obsidian">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-champagne/[0.02] blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-champagne uppercase tracking-[0.2em] mb-4">
          Impact
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-16">
          Systems that deliver<br />
          <span className="font-drama italic text-champagne drop-shadow-[0_0_20px_rgba(201,168,76,0.2)]">measurable results.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card hud-corners glow-border bg-void/60 backdrop-blur-sm rounded-[1.5rem] p-6 sm:p-8 text-center"
            >
              <p className="font-drama italic text-4xl sm:text-5xl text-champagne mb-3 drop-shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                {stat.value}
              </p>
              <p className="font-mono text-[11px] text-ivory/35 uppercase tracking-wider leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
