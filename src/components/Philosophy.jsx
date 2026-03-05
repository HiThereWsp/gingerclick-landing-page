import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words1 = line1Ref.current?.querySelectorAll('.word')
      if (words1?.length) {
        gsap.from(words1, {
          scrollTrigger: {
            trigger: line1Ref.current,
            start: 'top 80%',
          },
          y: 30,
          opacity: 0,
          stagger: 0.04,
          duration: 0.6,
          ease: 'power3.out',
        })
      }

      const words2 = line2Ref.current?.querySelectorAll('.word')
      if (words2?.length) {
        gsap.from(words2, {
          scrollTrigger: {
            trigger: line2Ref.current,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          stagger: 0.05,
          duration: 0.7,
          ease: 'power3.out',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const splitWords = (text) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em]">
        {word}
      </span>
    ))

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-32 sm:py-40 px-6 sm:px-12 lg:px-24 bg-obsidian overflow-hidden scanlines"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/[0.03] blur-[150px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 line-grid opacity-30" />

      {/* Corner accents */}
      <svg className="absolute top-8 left-8 w-16 h-16 opacity-[0.08]" viewBox="0 0 64 64">
        <path d="M0 0 L24 0 M0 0 L0 24" stroke="#C9A84C" strokeWidth="1" fill="none" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-16 h-16 opacity-[0.08]" viewBox="0 0 64 64">
        <path d="M64 64 L40 64 M64 64 L64 40" stroke="#C9A84C" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto">
        <p
          ref={line1Ref}
          className="font-heading text-lg sm:text-xl md:text-2xl text-ivory/30 font-light leading-relaxed mb-8 sm:mb-12"
        >
          {splitWords(
            'Most businesses bolt on one tool at a time. A CRM here. A scraper there. An inbox nobody checks. Then wonder why nothing scales.'
          )}
        </p>

        <p ref={line2Ref} className="leading-[1.1]">
          <span className="word inline-block mr-[0.3em] font-heading text-2xl sm:text-3xl md:text-4xl text-ivory/60 font-light">
            We build the enterprise of tomorrow:
          </span>
          <br />
          <span className="word inline-block mr-[0.3em] font-drama italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory mt-2 sm:mt-4 block">
            <span className="text-champagne drop-shadow-[0_0_30px_rgba(201,168,76,0.2)]">agentic systems</span>
          </span>
          <span className="word inline-block mr-[0.3em] font-drama italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory block">
            that <span className="text-champagne drop-shadow-[0_0_30px_rgba(201,168,76,0.2)]">drive growth</span> on autopilot.
          </span>
        </p>
      </div>
    </section>
  )
}
