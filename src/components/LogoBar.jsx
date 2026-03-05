const logos = [
  { name: 'Careforce AI', src: '/logos/careforce-new.png' },
  { name: 'Airbnb', src: '/airbnb-logo.png' },
  { name: 'FabuLingua', src: '/logos/fabulingua.webp' },
  { name: 'Orange', src: '/orange-logo.png' },
  { name: 'Hippocratic AI', src: '/logos/hippocratic-ai.png' },
  { name: 'BAT', src: '/bat-logo.png' },
  { name: 'Elate Staffing', src: '/logos/elate-staffing.webp' },
  { name: 'Sovereign Brands', src: '/sovereign brands-logo.png' },
  { name: 'Crawford Thomas', src: '/logos/crawford-thomas-new.png' },
  { name: 'Vuse', src: '/vuse-logo.png' },
]

function LogoImg({ logo, prefix }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center h-10 w-28 sm:w-32">
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-8 max-w-full w-auto object-contain brightness-0 invert opacity-40 hover:opacity-70 transition-opacity duration-300"
      />
    </div>
  )
}

export default function LogoBar() {
  return (
    <section className="relative py-12 sm:py-16 bg-void overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/10 to-transparent" />

      <p className="text-center font-mono text-[10px] text-champagne/40 uppercase tracking-[0.2em] mb-8 px-6">
        Trusted by teams scaling from founder to 50+ reps
      </p>

      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-void to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-void to-transparent z-10" />

        <div className="flex logo-scroll-track">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-10 sm:gap-14 px-6">
            {logos.map((logo, i) => (
              <LogoImg key={`a-${i}`} logo={logo} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center gap-10 sm:gap-14 px-6">
            {logos.map((logo, i) => (
              <LogoImg key={`b-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/10 to-transparent" />
    </section>
  )
}
