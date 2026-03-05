import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── SVG Animations ── */
function RotatingMotif() {
  return (
    <div className="flex items-center justify-center h-32 sm:h-40">
      <svg
        className="w-24 h-24 sm:w-32 sm:h-32"
        viewBox="0 0 120 120"
        style={{ animation: 'slow-rotate 20s linear infinite' }}
      >
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <ellipse
            key={angle}
            cx="60"
            cy="60"
            rx="50"
            ry="20"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.5"
            opacity="0.4"
            transform={`rotate(${angle} 60 60)`}
          />
        ))}
        <circle cx="60" cy="60" r="4" fill="#C9A84C" opacity="0.6" />
        <circle cx="60" cy="60" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 4" />
      </svg>
    </div>
  )
}

function LaserGrid() {
  const lineRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        y: 160,
        duration: 3,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="flex items-center justify-center h-32 sm:h-40 overflow-hidden">
      <svg className="w-48 h-40" viewBox="0 0 200 160">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 20 + 10}
              cy={row * 20 + 10}
              r="1.5"
              fill="#C9A84C"
              opacity="0.15"
            />
          ))
        )}
        <line
          ref={lineRef}
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          stroke="#C9A84C"
          strokeWidth="2"
          opacity="0.5"
        />
        <line
          ref={(el) => {
            if (el && lineRef.current) {
              gsap.to(el, { y: 160, duration: 3, ease: 'none', repeat: -1 })
            }
          }}
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          stroke="#C9A84C"
          strokeWidth="8"
          opacity="0.08"
        />
      </svg>
    </div>
  )
}

function EkgWaveform() {
  return (
    <div className="flex items-center justify-center h-32 sm:h-40 overflow-hidden">
      <svg className="w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
        <path
          d="M0,40 L40,40 L50,40 L60,15 L70,65 L80,20 L90,55 L100,40 L140,40 L150,40 L160,10 L170,70 L180,25 L190,50 L200,40 L240,40 L250,40 L260,15 L270,65 L280,20 L290,55 L300,40 L340,40 L350,40 L360,10 L370,70 L380,25 L390,50 L400,40"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1.5"
          opacity="0.6"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          style={{ animation: 'ekg-dash 4s linear infinite' }}
        />
        <path
          d="M0,40 L40,40 L50,40 L60,15 L70,65 L80,20 L90,55 L100,40 L140,40 L150,40 L160,10 L170,70 L180,25 L190,50 L200,40 L240,40 L250,40 L260,15 L270,65 L280,20 L290,55 L300,40 L340,40 L350,40 L360,10 L370,70 L380,25 L390,50 L400,40"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="6"
          opacity="0.08"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          style={{ animation: 'ekg-dash 4s linear infinite' }}
        />
      </svg>
    </div>
  )
}

const steps = [
  {
    num: '01',
    title: 'Diagnose',
    desc: 'We audit your current sales, marketing, and operations stack. We identify bottlenecks, broken handoffs, and the systems that should be running themselves.',
    Animation: RotatingMotif,
  },
  {
    num: '02',
    title: 'Architect',
    desc: 'We design interconnected automation systems tailored to your ICP, tools, and growth stage. Every workflow maps to revenue.',
    Animation: LaserGrid,
  },
  {
    num: '03',
    title: 'Deploy',
    desc: 'We build, test, and optimize until the system runs autonomously. From lead generation to reporting — zero manual overhead.',
    Animation: EkgWaveform,
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.protocol-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={sectionRef} className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-void">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />

      <div className="max-w-5xl mx-auto mb-16">
        <p className="font-mono text-xs text-champagne uppercase tracking-[0.2em] mb-4">
          Our Process
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
          Three phases,<br />
          <span className="font-drama italic text-champagne drop-shadow-[0_0_20px_rgba(201,168,76,0.2)]">zero guesswork.</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="protocol-card hud-corners glow-border bg-obsidian/60 backdrop-blur-sm rounded-[2rem] p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono text-sm text-champagne/60">{step.num}</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ivory tracking-tight mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-ivory/40 leading-relaxed">{step.desc}</p>
              </div>
              <step.Animation />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
