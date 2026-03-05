import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, BarChart3, Layers, Radar, FileText, Settings } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────────────────────────────
   Card 1 — Diagnostic Shuffler (Sales)
   ────────────────────────────────────────────── */
function ShufflerCard() {
  const [stack, setStack] = useState([
    { id: 0, label: 'Lead Sourcing', sub: 'Google Maps · LinkedIn · Job Boards' },
    { id: 1, label: 'Contact Enrichment', sub: 'Verified emails · Phone numbers · ICP scoring' },
    { id: 2, label: 'Outreach Automation', sub: 'Multi-channel sequences · Auto-reply handling' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-48 sm:h-56">
      {stack.map((item, i) => (
        <div
          key={item.id}
          className="absolute inset-x-0 transition-all duration-500"
          style={{
            top: `${i * 16}px`,
            zIndex: stack.length - i,
            opacity: 1 - i * 0.25,
            transform: `scale(${1 - i * 0.04})`,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="bg-obsidian/60 border border-champagne/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-heading font-semibold text-ivory text-sm">{item.label}</p>
            <p className="font-mono text-xs text-ivory/30 mt-1">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ──────────────────────────────────────────────
   Card 2 — Telemetry Typewriter (Marketing)
   ────────────────────────────────────────────── */
function TypewriterCard() {
  const messages = [
    '→ Campaign "Q1 Enterprise" reply rate: 14.2%',
    '→ 847 new leads enriched · 612 verified emails',
    '→ A/B test winner: "Quick question" +23% opens',
    '→ LinkedIn sequence: 38 connections accepted',
    '→ HubSpot sync: 124 contacts pushed to pipeline',
    '→ Daily report generated · sent to #growth-ops',
  ]
  const [lines, setLines] = useState([])
  const [current, setCurrent] = useState('')
  const msgIndex = useRef(0)
  const charIndex = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = messages[msgIndex.current % messages.length]
      if (charIndex.current <= msg.length) {
        setCurrent(msg.slice(0, charIndex.current))
        charIndex.current++
      } else {
        setLines((prev) => [...prev.slice(-4), msg])
        setCurrent('')
        charIndex.current = 0
        msgIndex.current++
      }
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-xs leading-relaxed h-48 sm:h-56 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-champagne pulse-dot" />
        <span className="text-champagne font-semibold uppercase tracking-widest text-[10px]">
          Live Feed
        </span>
      </div>
      {lines.map((line, i) => (
        <p key={i} className="text-ivory/25 mb-1">{line}</p>
      ))}
      <p className="text-ivory/60">
        {current}
        <span className="cursor-blink text-champagne">▌</span>
      </p>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Card 3 — Cursor Protocol Scheduler (Content)
   ────────────────────────────────────────────── */
function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [activeDay, setActiveDay] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: -20, y: -20 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const [pressing, setPressing] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    let timeout
    const sequence = () => {
      const targetDay = Math.floor(Math.random() * 7)

      setCursorVisible(true)
      setCursorPos({ x: -10, y: 30 })

      timeout = setTimeout(() => {
        setCursorPos({ x: targetDay * 40 + 12, y: 30 })

        timeout = setTimeout(() => {
          setPressing(true)
          timeout = setTimeout(() => {
            setPressing(false)
            setActiveDay(targetDay)

            timeout = setTimeout(() => {
              setCursorPos({ x: 220, y: 80 })

              timeout = setTimeout(() => {
                setSaved(true)
                timeout = setTimeout(() => {
                  setCursorVisible(false)
                  setSaved(false)
                  setActiveDay(null)
                  timeout = setTimeout(sequence, 1500)
                }, 1000)
              }, 400)
            }, 600)
          }, 200)
        }, 600)
      }, 500)
    }

    sequence()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative h-48 sm:h-56">
      <p className="font-mono text-[10px] text-ivory/25 uppercase tracking-widest mb-3">
        Content Schedule
      </p>

      <div className="flex gap-2 sm:gap-3 mb-6">
        {days.map((d, i) => (
          <div
            key={i}
            className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
              activeDay === i
                ? 'bg-champagne text-obsidian scale-95 shadow-glow'
                : 'bg-ivory/5 text-ivory/30 border border-ivory/5'
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      <div
        className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
          saved
            ? 'bg-champagne text-obsidian shadow-glow'
            : 'bg-ivory/5 text-ivory/25 border border-ivory/5'
        }`}
      >
        {saved ? '✓ Saved' : 'Save'}
      </div>

      {cursorVisible && (
        <svg
          className="absolute pointer-events-none transition-all duration-500 ease-out"
          style={{ left: cursorPos.x, top: cursorPos.y, transform: pressing ? 'scale(0.85)' : 'scale(1)' }}
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
        >
          <path
            d="M1 1L1 14.5L4.5 11L8 18L10.5 17L7 10L12 10L1 1Z"
            fill="#C9A84C"
            stroke="#0D0D12"
            strokeWidth="1"
          />
        </svg>
      )}
    </div>
  )
}

/* ──────────────────────────────────────────────
   Card 4 — Radar Scan (Market Intelligence)
   ────────────────────────────────────────────── */
function RadarCard() {
  const [dots, setDots] = useState([])
  const angleRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      angleRef.current = (angleRef.current + 3) % 360
      if (angleRef.current % 45 === 0) {
        const r = 20 + Math.random() * 30
        const a = (Math.random() * 360 * Math.PI) / 180
        setDots((prev) => [
          ...prev.slice(-6),
          { id: Date.now(), x: 60 + r * Math.cos(a), y: 60 + r * Math.sin(a) },
        ])
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-48 sm:h-56 flex items-center justify-center">
      <svg className="w-32 h-32" viewBox="0 0 120 120">
        {/* Grid circles */}
        <circle cx="60" cy="60" r="50" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.15" />
        <circle cx="60" cy="60" r="35" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.1" />
        <circle cx="60" cy="60" r="20" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.1" />
        {/* Crosshairs */}
        <line x1="10" y1="60" x2="110" y2="60" stroke="#C9A84C" strokeWidth="0.3" opacity="0.1" />
        <line x1="60" y1="10" x2="60" y2="110" stroke="#C9A84C" strokeWidth="0.3" opacity="0.1" />
        {/* Sweep */}
        <line
          x1="60"
          y1="60"
          x2={60 + 50 * Math.cos((angleRef.current * Math.PI) / 180)}
          y2={60 + 50 * Math.sin((angleRef.current * Math.PI) / 180)}
          stroke="#C9A84C"
          strokeWidth="1"
          opacity="0.5"
          style={{ animation: 'slow-rotate 6s linear infinite', transformOrigin: '60px 60px' }}
        />
        {/* Detected data points */}
        {dots.map((dot) => (
          <circle key={dot.id} cx={dot.x} cy={dot.y} r="2.5" fill="#C9A84C" opacity="0.6">
            <animate attributeName="opacity" from="0.8" to="0" dur="4s" fill="freeze" />
          </circle>
        ))}
        <circle cx="60" cy="60" r="2" fill="#C9A84C" opacity="0.8" />
      </svg>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Card 5 — Document Generator (Finance)
   ────────────────────────────────────────────── */
function DocumentCard() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 2
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  const lines = [
    { label: 'Client Requirements', w: '85%' },
    { label: 'ROI Projections', w: '70%' },
    { label: 'Architecture Diagram', w: '60%' },
    { label: 'Implementation Timeline', w: '90%' },
    { label: 'Cost Breakdown', w: '75%' },
  ]

  return (
    <div className="h-48 sm:h-56">
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-[10px] text-ivory/25 uppercase tracking-widest">
          Proposal.pdf
        </p>
        <span className={`font-mono text-[10px] ${progress >= 100 ? 'text-champagne' : 'text-ivory/25'}`}>
          {progress >= 100 ? '✓ Ready' : `${progress}%`}
        </span>
      </div>
      <div className="space-y-2.5">
        {lines.map((line, i) => {
          const lineProgress = Math.max(0, Math.min(100, (progress - i * 15) * 2))
          return (
            <div key={i}>
              <p className={`font-mono text-[10px] mb-1 transition-colors duration-300 ${lineProgress > 50 ? 'text-ivory/40' : 'text-ivory/15'}`}>
                {line.label}
              </p>
              <div className="h-1 bg-ivory/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-champagne/40 rounded-full transition-all duration-200"
                  style={{ width: lineProgress > 0 ? line.w : '0%', opacity: lineProgress / 100 }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Card 6 — Workflow Nodes (Administrative)
   ────────────────────────────────────────────── */
function WorkflowCard() {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const nodes = [
    { label: 'Trigger', x: 10, y: 20 },
    { label: 'Process', x: 55, y: 8 },
    { label: 'Route', x: 100, y: 20 },
    { label: 'Execute', x: 55, y: 52 },
    { label: 'Report', x: 100, y: 52 },
  ]

  const connections = [
    [0, 1], [1, 2], [1, 3], [3, 4], [2, 4],
  ]

  return (
    <div className="h-48 sm:h-56 flex items-center justify-center">
      <svg className="w-full h-28" viewBox="0 0 140 70">
        {/* Connection lines */}
        {connections.map(([from, to], i) => {
          const isActive = activeNode === from || activeNode === to
          return (
            <line
              key={i}
              x1={nodes[from].x + 15}
              y1={nodes[from].y + 8}
              x2={nodes[to].x + 15}
              y2={nodes[to].y + 8}
              stroke="#C9A84C"
              strokeWidth={isActive ? '1.5' : '0.5'}
              opacity={isActive ? '0.5' : '0.1'}
              className="transition-all duration-500"
            />
          )
        })}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <rect
              x={node.x}
              y={node.y}
              width="30"
              height="16"
              rx="4"
              fill={activeNode === i ? '#C9A84C' : 'transparent'}
              stroke="#C9A84C"
              strokeWidth={activeNode === i ? '1' : '0.5'}
              opacity={activeNode === i ? '0.8' : '0.2'}
              className="transition-all duration-500"
            />
            <text
              x={node.x + 15}
              y={node.y + 11}
              textAnchor="middle"
              className="font-mono"
              fontSize="5"
              fill={activeNode === i ? '#0D0D12' : '#FAF8F5'}
              opacity={activeNode === i ? '1' : '0.3'}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Features Section Container
   ────────────────────────────────────────────── */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      icon: Zap,
      title: 'Sales System',
      desc: 'AI-powered prospecting and outreach engine — from lead sourcing to closed deal.',
      Component: ShufflerCard,
    },
    {
      icon: BarChart3,
      title: 'Marketing System',
      desc: 'Campaign analytics and multi-channel performance engine in real time.',
      Component: TypewriterCard,
    },
    {
      icon: Layers,
      title: 'Content Production',
      desc: 'AI content pipeline — competitive intelligence, proposals, and creative at scale.',
      Component: SchedulerCard,
    },
    {
      icon: Radar,
      title: 'Market Intelligence',
      desc: 'Multi-source scraping and competitive analysis — outlier detection before gaps become obvious.',
      Component: RadarCard,
    },
    {
      icon: FileText,
      title: 'Finance Automation',
      desc: 'AI-generated proposals, architecture diagrams, and branded PDFs — from two days to ten minutes.',
      Component: DocumentCard,
    },
    {
      icon: Settings,
      title: 'Operations Hub',
      desc: 'Workflow automation, AI-powered task management, and 20+ inboxes from a single interface.',
      Component: WorkflowCard,
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-void">
      {/* Separator glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-champagne uppercase tracking-[0.2em] mb-4">
          Core Systems
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight mb-16">
          Six engines,<br />
          <span className="font-drama italic text-champagne drop-shadow-[0_0_20px_rgba(201,168,76,0.2)]">one growth machine.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map(({ icon: Icon, title, desc, Component }, i) => (
            <div
              key={i}
              className="feature-card hud-corners glow-border bg-obsidian/40 rounded-[2rem] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-champagne/10 flex items-center justify-center">
                  <Icon size={16} className="text-champagne" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ivory tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-ivory/40 mb-6 leading-relaxed">{desc}</p>
              <Component />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
