const techStack = [
  'Python', 'Claude AI', 'n8n', 'Zapier', 'Make.com', 'Instantly',
  'Lemlist', 'HubSpot', 'Salesforce', 'GoHighLevel', 'HeyReach',
  'Apify', 'Gmail API',
]

export default function Footer() {
  return (
    <footer className="relative bg-void rounded-t-[4rem] px-6 sm:px-12 lg:px-24 pt-16 sm:pt-24 pb-8">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/gingerclick-logo-new.png"
              alt="GingerClick"
              className="h-10 mb-4"
            />
            <p className="text-ivory/30 text-sm leading-relaxed max-w-sm">
              Automated growth systems for B2B companies. From prospecting to
              proposals — every workflow maps to revenue.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold text-champagne/50 uppercase tracking-[0.15em] mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Systems', href: '#features' },
                { label: 'Philosophy', href: '#philosophy' },
                { label: 'Process', href: '#protocol' },
                { label: 'Book a Call', href: '#book' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/20 hover:text-champagne transition-colors lift-hover inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold text-champagne/50 uppercase tracking-[0.15em] mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/109212630/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/20 hover:text-champagne transition-colors lift-hover inline-block"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scrolling tech stack */}
        <div className="relative overflow-hidden mb-6 py-3 border-t border-b border-ivory/5">
          <div className="flex tech-scroll-track">
            <div className="flex shrink-0 items-center gap-3 px-2">
              {techStack.map((tech, i) => (
                <span key={`a-${i}`} className="font-mono text-[10px] text-ivory/15 whitespace-nowrap">
                  {tech}
                </span>
              ))}
              <span className="font-mono text-[10px] text-champagne/20 whitespace-nowrap">— 20+ integrations</span>
            </div>
            <div className="flex shrink-0 items-center gap-3 px-2">
              {techStack.map((tech, i) => (
                <span key={`b-${i}`} className="font-mono text-[10px] text-ivory/15 whitespace-nowrap">
                  {tech}
                </span>
              ))}
              <span className="font-mono text-[10px] text-champagne/20 whitespace-nowrap">— 20+ integrations</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/15">
            © {new Date().getFullYear()} GingerClick. All rights reserved.
          </p>

          {/* System status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-champagne/10 bg-champagne/5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne pulse-dot" />
            <span className="font-mono text-[10px] text-champagne/50 uppercase tracking-widest">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
