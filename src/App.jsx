import React from 'react';
import { GC_CONTENT } from './gc/content.js';
import { Navbar, Hero, Stats } from './gc/shell.jsx';
import { Features, Philosophy, Process, BookCall, Footer } from './gc/sections.jsx';
import { LogoMarquee } from './gc/logos.jsx';
import { ToolsBar } from './gc/stack-logos.jsx';

const TWEAK_DEFAULTS = {
  defaultLang: 'en',
  defaultTheme: 'dark',
};

export default function App() {
  const [lang, setLang] = React.useState(() => {
    try {
      const saved = localStorage.getItem('gc_lang');
      if (saved === 'en' || saved === 'fr') return saved;
    } catch (e) {}
    return TWEAK_DEFAULTS.defaultLang || 'en';
  });

  const [theme, setTheme] = React.useState(() => {
    try {
      const saved = localStorage.getItem('gc_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    return TWEAK_DEFAULTS.defaultTheme || 'dark';
  });

  React.useEffect(() => {
    try { localStorage.setItem('gc_lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  React.useEffect(() => {
    try { localStorage.setItem('gc_theme', theme); } catch (e) {}
    document.body.classList.toggle('gc-light', theme === 'light');
  }, [theme]);

  const t = GC_CONTENT[lang];

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <Hero t={t} />
      <LogoMarquee eyebrow={t.logos.eyebrow} />
      <Stats t={t} />
      <Features t={t} />
      <ToolsBar eyebrow={t.tools.eyebrow} />
      <Philosophy t={t} />
      <Process t={t} />
      <BookCall t={t} />
      <Footer t={t} />
    </>
  );
}
