import React from 'react';
/* ============================================================
   Gingerclick — Stack logos (tools marquee)
   Monochrome, uniform rendered height, currentColor driven.
   ============================================================ */

const GC_STACK_ITEMS = [
  {
    name: 'Make',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="currentColor" aria-hidden="true">
          <path d="M3 3h3v18H3zM10 3h2.5l3.5 9-3.5 9H10l3.5-9zM18 3h3v18h-3z"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:17, letterSpacing:'-0.01em'}}>Make</span>
      </div>
    ),
  },
  {
    name: 'Instantly',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="18" fill="currentColor" aria-hidden="true">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:600, fontSize:16, letterSpacing:'-0.01em'}}>Instantly</span>
      </div>
    ),
  },
  {
    name: 'Lemlist',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:7}}>
        <span style={{width:22, height:22, borderRadius:'50%', background:'currentColor', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'#0D0D12', fontFamily:'Inter, sans-serif', fontWeight:800, fontSize:13}}>L</span>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>lemlist</span>
      </div>
    ),
  },
  {
    name: 'HubSpot',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="currentColor" aria-hidden="true">
          <circle cx="18" cy="17" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="18" cy="6" r="1.5"/>
          <path d="M6 8v7M8 15h7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M18 7.5v6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>HubSpot</span>
      </div>
    ),
  },
  {
    name: 'Salesforce',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 32 22" height="18" fill="currentColor" aria-hidden="true">
          <path d="M13 4c1.5-2.5 4.5-3 7-1.5 1-2 3.5-2.5 5.5-1 2.5-1 5.5 1 5.5 4 0 .5-.1 1-.3 1.5 1.8 1 2.3 3.5 1 5.2-1 1.4-3 2-4.7 1.3-.7 2-3 3-5 2.2-1.3 2.2-4.3 2.2-5.5 0-2.3-2-3.8-4.5-3.5-1.5-1.3-4-1.3-5.3 0C7.5 17 4.5 16 3.5 13.5 1.5 13 0 11 0 9c0-2.5 2-4.5 4.5-4.5.3 0 .6 0 .9.1C6 2.5 8.8 1 11.5 2c.5.3 1 .8 1.5 1.5v.5z"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>salesforce</span>
      </div>
    ),
  },
  {
    name: 'GoHighLevel',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M4 20V8l8-5 8 5v12" strokeLinejoin="round"/>
          <path d="M9 20v-6h6v6" strokeLinejoin="round"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:15, letterSpacing:'-0.01em'}}>HighLevel</span>
      </div>
    ),
  },
  {
    name: 'HeyReach',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="18" fill="currentColor" aria-hidden="true">
          <path d="M4 4h3v7h5V4h3v16h-3v-7H7v7H4z"/>
          <circle cx="19" cy="7" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>HeyReach</span>
      </div>
    ),
  },
  {
    name: 'Apify',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 2l10 18H2L12 2zm0 5l-5.5 10h11L12 7z"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>Apify</span>
      </div>
    ),
  },
  {
    name: 'Gmail API',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="1" y="1" width="22" height="16" rx="2"/>
          <path d="M1 3l11 8L23 3" strokeLinejoin="round"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:600, fontSize:15, letterSpacing:'-0.01em'}}>Gmail <span style={{opacity:.55, fontFamily:'JetBrains Mono, monospace', fontSize:11, fontWeight:500, marginLeft:2}}>API</span></span>
      </div>
    ),
  },
  {
    name: 'Python',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8 2 8 4 8 4v3h4v1H5s-3 0-3 4 3 4 3 4h2v-3c0-2 2-3 4-3h4s3 0 3-3V4s0-2-4-2h-2zm-2 2a1 1 0 110 2 1 1 0 010-2z"/>
          <path d="M12 22c4 0 4-2 4-2v-3h-4v-1h7s3 0 3-4-3-4-3-4h-2v3c0 2-2 3-4 3h-4s-3 0-3 3v4s0 2 4 2h2zm2-2a1 1 0 110-2 1 1 0 010 2z" opacity=".55"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>Python</span>
      </div>
    ),
  },
  {
    name: 'Claude',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="currentColor" aria-hidden="true">
          <path d="M7 3l-4 18h3l1-5h6l1 5h3L13 3H7zm0.5 10L10 5.5 12.5 13h-5zM17 3h3v18h-3z"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>Claude</span>
      </div>
    ),
  },
  {
    name: 'n8n',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 28 16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="4" cy="8" r="2.5" fill="currentColor"/>
          <circle cx="14" cy="8" r="2.5" fill="currentColor"/>
          <circle cx="24" cy="8" r="2.5" fill="currentColor"/>
          <path d="M6.5 8h5M16.5 8h5"/>
        </svg>
        <span style={{fontFamily:'JetBrains Mono, monospace', fontWeight:700, fontSize:16, letterSpacing:'-0.02em'}}>n8n</span>
      </div>
    ),
  },
  {
    name: 'Zapier',
    node: (
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg viewBox="0 0 24 24" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 2v4.5M12 17.5V22M2 12h4.5M17.5 12H22M4.93 4.93l3.18 3.18M15.89 15.89l3.18 3.18M4.93 19.07l3.18-3.18M15.89 8.11l3.18-3.18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3.5"/>
        </svg>
        <span style={{fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>Zapier</span>
      </div>
    ),
  },
];

function StackMarquee({ prefix }) {
  const track = (setKey) => (
    <div className="gc-stack-set" key={setKey}>
      {prefix ? <span className="stack-prefix">{prefix}</span> : null}
      {GC_STACK_ITEMS.map((item, i) => (
        <div key={`${setKey}-${i}`} className="gc-stack-cell" title={item.name} aria-label={item.name}>
          {item.node}
        </div>
      ))}
    </div>
  );
  return (
    <div className="gc-stack-marquee">
      <div className="gc-marquee-fade gc-marquee-fade-l" />
      <div className="gc-marquee-fade gc-marquee-fade-r" />
      <div className="gc-stack-track">
        {track('a')}
        {track('b')}
      </div>
    </div>
  );
}

/* ── "We build with" logo bar — tools/stack logos, sits just below Core systems ── */
const GC_BUILD_ITEMS = [
  { name: 'Make',       src: '/logos2/tools/make.png',       h: 26 },
  { name: 'n8n',        src: '/logos2/tools/n8n.png',        h: 26 },
  { name: 'Zapier',     src: '/logos2/tools/zapier.png',     h: 30 },
  { name: 'Instantly',  src: '/logos2/tools/instantly.png',  h: 26 },
  { name: 'lemlist',    src: '/logos2/tools/lemlist.png',    h: 28 },
  { name: 'HeyReach',   src: '/logos2/tools/heyreach.png',   h: 24 },
  { name: 'HubSpot',    src: '/logos2/tools/hubspot.png',    h: 26 },
  { name: 'Salesforce', src: '/logos2/tools/salesforce.png', h: 34 },
  { name: 'HighLevel',  src: '/logos2/tools/highlevel.png',  h: 26 },
  { name: 'Apify',      src: '/logos2/tools/apify.png',      h: 28 },
  { name: 'Gmail',      src: '/logos2/tools/gmail.png',      h: 32 },
  { name: 'Python',     src: '/logos2/tools/python.png',     h: 28 },
  { name: 'Claude',     src: '/logos2/tools/claude.png',     h: 32 },
  { name: 'OpenAI',     src: '/logos2/tools/openai.png',     h: 28 },
  { name: 'Vapi',       src: '/logos2/tools/vapi.png',       h: 28 },
  { name: 'ElevenLabs', src: '/logos2/tools/elevenlabs.png', h: 22 },
];

function ToolsBar({ eyebrow }) {
  const track = (prefix) => GC_BUILD_ITEMS.map((l, i) => (
    <div key={`${prefix}-${i}`} className="gc-logo-cell" title={l.name} aria-label={l.name}>
      <img src={l.src} alt={l.name} style={{ height: l.h + 'px' }} />
    </div>
  ));
  return (
    <section className="gc-toolsbar" aria-label="We build with">
      <div className="gc-logobar-rule" />
      <p className="gc-logobar-eyebrow">{eyebrow}</p>
      <div className="gc-marquee">
        <div className="gc-marquee-fade gc-marquee-fade-l" />
        <div className="gc-marquee-fade gc-marquee-fade-r" />
        <div className="gc-marquee-track gc-marquee-track-rev">
          <div className="gc-marquee-set">{track('a')}</div>
          <div className="gc-marquee-set">{track('b')}</div>
        </div>
      </div>
      <div className="gc-logobar-rule" />
    </section>
  );
}

export { StackMarquee, ToolsBar };
