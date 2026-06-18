import React from 'react';
/* ============================================================
   Gingerclick — Client logo marquee (REAL trimmed logos)
   White background removed → transparent. Dark mode inverts
   them to light; light mode shows them as-is. Per-logo height
   tuned to optical balance.
   ============================================================ */

const GC_LOGO_ITEMS = [
  { name: 'Klook',           src: '/logos2/klook.png',           h: 28 },
  { name: 'Airbnb',          src: '/logos2/airbnb.png',          h: 28 },
  { name: 'Careforce',       src: '/logos2/careforce.png',       h: 24 },
  { name: 'Hippocratic AI',  src: '/logos2/hippocratic.png',     h: 30 },
  { name: 'Orange',          src: '/logos2/orange.png',          h: 46 },
  { name: 'BAT',             src: '/logos2/bat.png',             h: 34 },
  { name: 'Crawford Thomas', src: '/logos2/crawford-thomas.png', h: 26 },
  { name: 'Sovereign Brands',src: '/logos2/sovereign.png',       h: 36 },
  { name: 'Westrom Group',   src: '/logos2/westrom.png',         h: 52 },
  { name: 'FabuLingua',      src: '/logos2/fabulingua.png',      h: 48 },
  { name: 'HAQQ',            src: '/logos2/haqq.png',            h: 52 },
  { name: 'Castr',           src: '/logos2/castr.png',           h: 26 },
  { name: 'CoinCola',        src: '/logos2/coincola.png',        h: 26 },
];

function LogoMarquee({ eyebrow }) {
  const track = (prefix) => GC_LOGO_ITEMS.map((l, i) => (
    <div key={`${prefix}-${i}`} className="gc-logo-cell" title={l.name} aria-label={l.name}>
      <img src={l.src} alt={l.name} style={{ height: l.h + 'px' }} />
    </div>
  ));

  return (
    <section className="gc-logobar" aria-label="Clients">
      <div className="gc-logobar-rule" />
      <p className="gc-logobar-eyebrow">{eyebrow}</p>
      <div className="gc-marquee">
        <div className="gc-marquee-fade gc-marquee-fade-l" />
        <div className="gc-marquee-fade gc-marquee-fade-r" />
        <div className="gc-marquee-track">
          <div className="gc-marquee-set">{track('a')}</div>
          <div className="gc-marquee-set">{track('b')}</div>
        </div>
      </div>
      <div className="gc-logobar-rule" />
    </section>
  );
}

export { LogoMarquee };
