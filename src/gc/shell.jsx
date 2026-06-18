import React from 'react';
/* ============================================================
   Gingerclick, Core components : Navbar, Hero, Stats
   ============================================================ */

function LangSwitch({ lang, setLang }) {
  return (
    <div className="gc-lang">
      <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
      <span>·</span>
      <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
    </div>
  );
}

function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <button className="gc-theme-toggle" onClick={toggle} aria-label="Toggle theme" title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}>
      {theme === 'light' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      )}
    </button>
  );
}

function Navbar({ t, lang, setLang, theme, setTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.nav.systems, href: '#features' },
    { label: t.nav.philosophy, href: '#philosophy' },
    { label: t.nav.process, href: '#protocol' },
  ];

  return (
    <nav className={`gc-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="gc-nav-brand">
        <img src="logos/gingerclick.png" alt="Gingerclick" className="gc-nav-logo" />
      </a>
      <div className="gc-nav-links">
        {links.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
      </div>
      <div className="gc-nav-right">
        <LangSwitch lang={lang} setLang={setLang} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <a href="#book" className="gc-btn gc-btn-ghost">{t.nav.book}</a>
      </div>
      <button className="gc-nav-toggle" onClick={() => setOpen(!open)} aria-label="menu">
        {open ? '×' : '≡'}
      </button>
      {open && (
        <div className="gc-nav-mobile">
          {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>))}
          <a href="#book" className="gc-btn gc-btn-ghost" onClick={() => setOpen(false)}>{t.nav.book}</a>
          <LangSwitch lang={lang} setLang={setLang} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      )}
    </nav>
  );
}

function HudData() {
  return (
    <div className="gc-hud" aria-hidden="true">
      <div className="gc-hud-tr">
        <p>SYS.STATUS: <span>OPERATIONAL</span></p>
        <p>PIPELINES: <span>12 ACTIVE</span></p>
        <p>UPTIME: <span>99.97%</span></p>
      </div>
      <div className="gc-hud-l">
        {['0x4F','0xA3','0x7B','0xE1','0x2D','0x9C','0x5E','0xF4'].map((h,i) => <span key={i}>{h}</span>)}
      </div>
      <svg className="gc-hud-rings" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="70" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 4"/>
        <circle cx="80" cy="80" r="50" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="80" cy="80" r="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 6"/>
        <line x1="80" y1="0" x2="80" y2="160" stroke="#C9A84C" strokeWidth="0.3"/>
        <line x1="0" y1="80" x2="160" y2="80" stroke="#C9A84C" strokeWidth="0.3"/>
      </svg>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section id="hero" className="gc-hero scanlines">
      <div className="gc-hero-bg dot-grid" />
      <div className="gc-hero-glow-a" />
      <div className="gc-hero-glow-b" />
      <div className="gc-hero-grid line-grid" />
      <div className="gc-hero-topline" />
      <HudData />

      <div className="gc-hero-content">
        <div className="gc-hero-badge">
          <span className="gc-dot pulse-dot" />
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="gc-hero-title">
          <span className="gc-hero-title-a">{t.hero.titleA}</span>
          <span className="gc-hero-title-b">{t.hero.titleB}</span>
        </h1>
        <p className="gc-hero-sub">{t.hero.sub}</p>
        <div className="gc-hero-ctas">
          <a href="#book" className="gc-btn gc-btn-primary">
            <span>{t.hero.ctaPrimary}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      <div className="gc-hero-bottomline" />
    </section>
  );
}

function Stats({ t }) {
  return (
    <section className="gc-stats">
      <div className="gc-hr-glow" />
      <div className="gc-stats-glow" />
      <div className="gc-stats-inner">
        <p className="gc-eyebrow">{t.stats.eyebrow}</p>
        <h2 className="gc-section-title">
          {t.stats.title}<br/>
          <em>{t.stats.titleItalic}</em>
        </h2>
        <div className="gc-stats-grid">
          {t.stats.items.map((s, i) => (
            <div key={i} className="gc-stat hud-corners glow-border">
              <p className="gc-stat-value">{s.value}</p>
              <p className="gc-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Navbar, Hero, Stats };
