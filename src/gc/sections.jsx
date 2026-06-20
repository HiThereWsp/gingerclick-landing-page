import React from 'react';
import { GC_STACK } from './content.js';
/* ============================================================
   Gingerclick, Sections : Features, Philosophy, Cases,
   Process, Book, Footer
   ============================================================ */

/* ── Simplified feature cards (no heavy anims, kept compact) ── */
function FeatureVisual({ idx }) {
  const key = `v${idx}`;
  switch (idx) {
    /* 0 — SALES : mini outbound funnel */
    case 0: return <div key={key} className="gc-fv gc-fv-funnel">
      <div className="gc-funnel-row"><span className="gc-funnel-label">Sourced</span><div className="gc-funnel-bar" style={{width:'100%'}}/><span className="gc-funnel-num">2,840</span></div>
      <div className="gc-funnel-row"><span className="gc-funnel-label">Enriched</span><div className="gc-funnel-bar" style={{width:'78%'}}/><span className="gc-funnel-num">2,214</span></div>
      <div className="gc-funnel-row"><span className="gc-funnel-label">Contacted</span><div className="gc-funnel-bar" style={{width:'52%'}}/><span className="gc-funnel-num">1,476</span></div>
      <div className="gc-funnel-row"><span className="gc-funnel-label">Replied</span><div className="gc-funnel-bar hot" style={{width:'18%'}}/><span className="gc-funnel-num">511</span></div>
      <div className="gc-funnel-row"><span className="gc-funnel-label">Booked</span><div className="gc-funnel-bar hot" style={{width:'5%'}}/><span className="gc-funnel-num">142</span></div>
    </div>;

    /* 1 — MARKETING : multi-channel bars */
    case 1: return <div key={key} className="gc-fv gc-fv-chart">
      <svg viewBox="0 0 200 80" preserveAspectRatio="none">
        {[
          {x:10, h:32}, {x:28, h:48}, {x:46, h:40}, {x:64, h:62}, {x:82, h:55},
          {x:100, h:72}, {x:118, h:50}, {x:136, h:68}, {x:154, h:58}, {x:172, h:74}
        ].map((b,i)=>(
          <rect key={i} x={b.x} y={80-b.h} width="12" height={b.h} fill="#C9A84C" opacity={0.25 + (i*0.07)} rx="1.5"/>
        ))}
        <line x1="0" y1="60" x2="200" y2="60" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.3"/>
      </svg>
      <div className="gc-chart-legend">
        <span>SEARCH</span><span>SOCIAL</span><span>EMAIL</span><span>REF</span>
      </div>
    </div>;

    /* 2 — CONTENT : week calendar */
    case 2: return <div key={key} className="gc-fv gc-fv-cal">
      {['M','T','W','T','F','S','S'].map((d,i)=>(
        <div key={i} className={`gc-cal-cell ${[0,2,4].includes(i)?'on':''}`}>
          <span className="gc-cal-dow">{d}</span>
          <span className="gc-cal-dot"/>
        </div>
      ))}
    </div>;

    /* 3 — INTEL : radar, now properly contained */
    case 3: return <div key={key} className="gc-fv gc-fv-radar">
      <svg viewBox="-5 -5 130 130" preserveAspectRatio="xMidYMid meet">
        <circle cx="60" cy="60" r="56" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.18"/>
        <circle cx="60" cy="60" r="40" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.25"/>
        <circle cx="60" cy="60" r="22" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.3"/>
        <line x1="4" y1="60" x2="116" y2="60" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2"/>
        <line x1="60" y1="4" x2="60" y2="116" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2"/>
        <g style={{transformOrigin:'60px 60px', animation:'slow-rotate 5s linear infinite'}}>
          <defs>
            <linearGradient id="radar-sweep" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0"/>
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.55"/>
            </linearGradient>
          </defs>
          <path d="M60 60 L116 60 A56 56 0 0 0 100 20 Z" fill="url(#radar-sweep)"/>
        </g>
        <circle cx="60" cy="60" r="2.2" fill="#C9A84C"/>
        <circle cx="88" cy="36" r="2" fill="#C9A84C" opacity="0.85"/>
        <circle cx="36" cy="76" r="1.6" fill="#C9A84C" opacity="0.6"/>
        <circle cx="78" cy="88" r="1.4" fill="#C9A84C" opacity="0.5"/>
      </svg>
    </div>;

    /* 4 — FINANCE : document preview */
    case 4: return <div key={key} className="gc-fv gc-fv-doc">
      <div className="gc-doc-head">
        <span className="mono">PROPOSAL · DRAFT</span>
        <span className="gc-dot pulse-dot"/>
      </div>
      <div className="gc-doc-lines">
        <div className="gc-doc-line"><span className="gc-doc-marker">§</span><span className="gc-doc-bar" style={{width:'92%'}}/></div>
        <div className="gc-doc-line"><span className="gc-doc-marker"> </span><span className="gc-doc-bar" style={{width:'72%'}}/></div>
        <div className="gc-doc-line"><span className="gc-doc-marker"> </span><span className="gc-doc-bar" style={{width:'85%'}}/></div>
        <div className="gc-doc-line"><span className="gc-doc-marker">§</span><span className="gc-doc-bar" style={{width:'68%'}}/></div>
        <div className="gc-doc-sum">
          <span>TOTAL</span><span className="gc-doc-val">€ 48,200</span>
        </div>
      </div>
    </div>;

    /* 5 — OPS : inbox nodes / network */
    case 5: return <div key={key} className="gc-fv gc-fv-nodes">
      <svg viewBox="0 0 200 110" preserveAspectRatio="xMidYMid meet">
        {/* connections */}
        {[
          ['20,30','100,55'], ['20,55','100,55'], ['20,80','100,55'],
          ['100,55','180,30'], ['100,55','180,55'], ['100,55','180,80']
        ].map(([a,b],i)=>{
          const [x1,y1] = a.split(',').map(Number);
          const [x2,y2] = b.split(',').map(Number);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>;
        })}
        {/* left column — inboxes */}
        {[30,55,80].map((y,i)=>(
          <g key={`l${i}`}>
            <rect x="6" y={y-8} width="28" height="16" rx="3" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.7"/>
            <circle cx="14" cy={y} r="1.5" fill="#C9A84C" opacity="0.6"/>
            <rect x="18" y={y-1.5} width="12" height="1.5" fill="#C9A84C" opacity="0.4"/>
          </g>
        ))}
        {/* center hub */}
        <rect x="84" y="42" width="32" height="26" rx="4" fill="#C9A84C" opacity="0.14" stroke="#C9A84C" strokeWidth="0.8"/>
        <text x="100" y="58" textAnchor="middle" fontSize="8" fill="#C9A84C" fontFamily="JetBrains Mono, monospace" opacity="0.95" fontWeight="500">HUB</text>
        {/* right column — outputs */}
        {[30,55,80].map((y,i)=>(
          <g key={`r${i}`}>
            <rect x="166" y={y-8} width="28" height="16" rx="3" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.7"/>
            <circle cx="174" cy={y} r="1.5" fill="#C9A84C" opacity={i===1?'1':'0.5'}/>
            <rect x="178" y={y-1.5} width="12" height="1.5" fill="#C9A84C" opacity="0.4"/>
          </g>
        ))}
      </svg>
    </div>;

    default: return null;
  }
}

function Features({ t }) {
  return (
    <section id="features" className="gc-section gc-features">
      <div className="gc-hr-glow" />
      <div className="gc-section-inner">
        <p className="gc-eyebrow">{t.features.eyebrow}</p>
        <h2 className="gc-section-title">
          {t.features.title}<br/>
          <em>{t.features.titleItalic}</em>
        </h2>
        <div className="gc-features-grid">
          {t.features.items.map((f, i) => (
            <article key={i} className="gc-feature hud-corners glow-border">
              <div className="gc-feature-tag">{f.tag}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <FeatureVisual idx={i} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy({ t }) {
  return (
    <section id="philosophy" className="gc-section gc-philosophy scanlines">
      <div className="gc-philosophy-glow" />
      <div className="gc-philosophy-grid line-grid" />
      <div className="gc-philosophy-inner">
        <p className="gc-eyebrow gc-eyebrow-light">{t.philosophy.eyebrow}</p>
        <p className="gc-philosophy-pre">{t.philosophy.pre}</p>
        <p className="gc-philosophy-main">
          <span className="mainA">{t.philosophy.mainA}</span>
          <span className="mainBig"><em>{t.philosophy.mainB}</em></span>
          <span className="mainBig">
            <span className="plain">{t.philosophy.mainC}</span>{' '}
            <em>{t.philosophy.mainD}</em>{' '}
            <span className="plain">{t.philosophy.mainE}</span>
          </span>
        </p>
        <p className="gc-philosophy-post">
          <span className="postA">{t.philosophy.postA}</span>{' '}
          <em className="postB">{t.philosophy.postB}</em>
        </p>
      </div>
    </section>
  );
}

function Cases({ t }) {
  return (
    <section id="cases" className="gc-section gc-cases">
      <div className="gc-hr-glow" />
      <div className="gc-section-inner">
        <p className="gc-eyebrow">{t.cases.eyebrow}</p>
        <h2 className="gc-section-title">
          {t.cases.title}<br/>
          <em>{t.cases.titleItalic}</em>
        </h2>
        <div className="gc-cases-list">
          {t.cases.items.map((c, i) => (
            <article key={i} className="gc-case">
              <div className="gc-case-num">0{i+1}</div>
              <div className="gc-case-body">
                <div className="gc-case-meta">
                  <span className="gc-case-client">{c.client}</span>
                  <span className="gc-case-sector">{c.sector}</span>
                </div>
                <h3 className="gc-case-head">{c.headline}</h3>
                <p className="gc-case-desc">{c.desc}</p>
              </div>
              <div className="gc-case-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4h8v8M12 4 4 12" stroke="currentColor" strokeWidth="1.2"/></svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section id="protocol" className="gc-section gc-protocol">
      <div className="gc-hr-glow" />
      <div className="gc-section-inner">
        <p className="gc-eyebrow">{t.process.eyebrow}</p>
        <h2 className="gc-section-title">
          {t.process.title}<br/>
          <em>{t.process.titleItalic}</em>
        </h2>
        <div className="gc-protocol-list">
          {t.process.items.map((s, i) => (
            <div key={i} className="gc-protocol-step hud-corners glow-border">
              <div>
                <span className="gc-protocol-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="gc-protocol-viz">
                {i === 0 && <svg viewBox="0 0 120 120" style={{animation:'slow-rotate 20s linear infinite'}}>
                  {[0,30,60,90,120,150].map(a => <ellipse key={a} cx="60" cy="60" rx="50" ry="20" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" transform={`rotate(${a} 60 60)`}/>)}
                  <circle cx="60" cy="60" r="4" fill="#C9A84C" opacity="0.7"/>
                </svg>}
                {i === 1 && <svg viewBox="0 0 200 120" style={{overflow:'visible'}}>
                  {/* Architecture : nœuds interconnectés → convergence vers le revenu */}
                  <defs>
                    <marker id="arch-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                      <path d="M0,0 L10,5 L0,10 z" fill="#C9A84C"/>
                    </marker>
                  </defs>
                  {/* Liens — stroke dash animé pour simuler le flux */}
                  {[
                    ['30,25','155,60'],
                    ['30,60','155,60'],
                    ['30,95','155,60'],
                    ['85,25','155,60'],
                    ['85,95','155,60'],
                  ].map(([p1,p2],idx) => (
                    <line key={idx} x1={p1.split(',')[0]} y1={p1.split(',')[1]} x2={p2.split(',')[0]} y2={p2.split(',')[1]}
                          stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"
                          strokeDasharray="3 4" markerEnd="url(#arch-arrow)">
                      <animate attributeName="stroke-dashoffset" from="0" to="-14" dur={`${2 + idx*0.3}s`} repeatCount="indefinite"/>
                    </line>
                  ))}
                  {/* Nœuds sources (outils / ICP / workflows) */}
                  {[[30,25],[30,60],[30,95],[85,25],[85,95]].map(([x,y],idx) => (
                    <g key={idx}>
                      <circle cx={x} cy={y} r="5" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.8"/>
                      <circle cx={x} cy={y} r="2" fill="#C9A84C" opacity="0.9">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2.5 + idx*0.2}s`} repeatCount="indefinite"/>
                      </circle>
                    </g>
                  ))}
                  {/* Nœud cible = revenu */}
                  <circle cx="155" cy="60" r="14" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.3">
                    <animate attributeName="r" values="14;20;14" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="155" cy="60" r="10" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.2"/>
                  <text x="155" y="63" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#C9A84C" fontWeight="600" letterSpacing="0.1em">€</text>
                </svg>}
                {i === 2 && <svg viewBox="0 0 400 80" preserveAspectRatio="none">
                  <path d="M0,40 L40,40 L60,15 L70,65 L80,20 L90,55 L100,40 L150,40 L160,10 L170,70 L180,25 L190,50 L200,40 L250,40 L260,15 L270,65 L280,20 L290,55 L300,40 L350,40 L360,10 L370,70 L380,25 L390,50 L400,40" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.7"/>
                </svg>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCall({ t }) {
  return (
    <section id="book" className="gc-section gc-book">
      <div className="gc-hr-glow" />
      <div className="gc-book-glow" />
      <div className="gc-section-inner">
        <div className="gc-book-head">
          <p className="gc-eyebrow">{t.getStarted.eyebrow}</p>
          <h2 className="gc-section-title">{t.getStarted.title}</h2>
          <p className="gc-book-sub">{t.getStarted.sub}</p>
        </div>

        <div className="gc-book-card hud-corners glow-border">
          <div className="gc-book-cal-placeholder">
            <div className="gc-book-cal-header">
              <span className="mono">cal.com / andy-gtd / intro-discovery-call</span>
              <span className="gc-dot pulse-dot"/>
            </div>
            <div className="gc-book-cal-grid">
              <div className="gc-book-cal-months">
                <p className="mono">APRIL 2026</p>
                <div className="gc-cal-days">
                  {Array.from({length: 30}, (_, i) => i + 1).map(d => (
                    <button key={d} className={`gc-cal-day ${[17,18,21,22,23,24].includes(d) ? 'avail' : ''} ${d===22 ? 'sel' : ''}`}>{d}</button>
                  ))}
                </div>
              </div>
              <div className="gc-book-cal-slots">
                <p className="mono">WED · APR 22</p>
                <button className="gc-cal-slot">09:00</button>
                <button className="gc-cal-slot on">09:30</button>
                <button className="gc-cal-slot">10:00</button>
                <button className="gc-cal-slot">14:00</button>
                <button className="gc-cal-slot">14:30</button>
                <button className="gc-cal-confirm">Confirm, 30 min</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  const stack = GC_STACK || [];
  return (
    <footer className="gc-footer">
      <div className="gc-hr-glow"/>
      <div className="gc-footer-inner">
        <div className="gc-footer-top">
          <div className="gc-footer-brand">
            <img src="logos/gingerclick.png" alt="Gingerclick" className="gc-footer-logo" />
            <p>{t.footer.tagline}</p>
          </div>

          <div className="gc-footer-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>
              <li><a href="#features">{t.nav.systems}</a></li>
              <li><a href="#philosophy">{t.nav.philosophy}</a></li>
              <li><a href="#protocol">{t.nav.process}</a></li>
              <li><a href="#book">{t.nav.book}</a></li>
            </ul>
          </div>

          <div className="gc-footer-col">
            <h4>{t.footer.connectTitle}</h4>
            <ul>
              {t.footer.connectLinks.map((l, i) => <li key={i}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="gc-footer-base">
          <p>© {new Date().getFullYear()} Gingerclick. {t.footer.rights}</p>
          <div className="gc-footer-status">
            <span className="gc-dot pulse-dot"/>
            <span className="mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Features, Philosophy, Cases, Process, BookCall, Footer };
