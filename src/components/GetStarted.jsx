import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GetStarted() {
  const sectionRef = useRef(null)
  const calRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gs-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Load Cal.com embed using official snippet approach
  useEffect(() => {
    // Official Cal.com inline bootstrapper
    ;(function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar) }
      let d = C.document
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement('script')).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments) }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ['initNamespace', namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', 'intro-discovery-call', { origin: 'https://app.cal.com' })

    window.Cal.ns['intro-discovery-call']('inline', {
      elementOrSelector: '#cal-embed',
      config: { layout: 'month_view', theme: 'dark' },
      calLink: 'andy-gtd/intro-discovery-call',
    })

    window.Cal.ns['intro-discovery-call']('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return (
    <section
      id="book"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-obsidian"
    >
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="gs-reveal font-mono text-xs text-champagne uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="gs-reveal font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-4">
            Book a discovery call
          </h2>
          <p className="gs-reveal text-ivory/40 max-w-xl mx-auto leading-relaxed">
            30 minutes to audit your current stack, identify quick wins, and
            map the systems that will compound your growth.
          </p>
        </div>

        <div className="gs-reveal hud-corners glow-border bg-obsidian/40 backdrop-blur-sm rounded-[2rem] p-2">
          <div
            id="cal-embed"
            ref={calRef}
            className="cal-embed-container"
            style={{ width: '100%', height: '100%', overflow: 'scroll', minHeight: '550px' }}
          />
        </div>
      </div>
    </section>
  )
}
