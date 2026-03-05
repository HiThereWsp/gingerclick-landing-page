import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'Systems', href: '#features' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Process', href: '#protocol' },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-6 py-3 rounded-full transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/80 backdrop-blur-xl border border-champagne/10 shadow-glow'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-4 sm:gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/gingerclick-logo-new.png"
            alt="GingerClick"
            className="h-8 sm:h-9"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-tight lift-hover transition-colors duration-300 text-ivory/60 hover:text-champagne"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#book"
          className="hidden sm:inline-flex btn-magnetic items-center gap-2 bg-champagne/10 border border-champagne/30 text-champagne px-5 py-2 rounded-full text-sm font-semibold tracking-tight"
        >
          <span className="btn-bg bg-champagne rounded-full" />
          <span className="relative z-10 transition-colors duration-300 hover:text-obsidian">
            Book a Call
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1 transition-colors text-ivory/60"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 bg-obsidian/95 backdrop-blur-xl rounded-2xl p-4 border border-champagne/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-ivory/60 hover:text-champagne transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="btn-magnetic inline-flex items-center justify-center bg-champagne/10 border border-champagne/30 text-champagne px-5 py-2 rounded-full text-sm font-semibold"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}
