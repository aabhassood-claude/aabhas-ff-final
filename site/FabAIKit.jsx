/* global React, FFLockup */

// ============================================================
// FabAIKit — LIGHT THEME standalone Fab AI page.
// Custom nav (logo + Buy Now only). Cream surface, ink type, lime accents.
// 3 features: Creative Generation, Industry Insight, Video Sage.
// Each feature has: rich visualization + mini stats + 2 CTAs.
// Plus: comparison table, cross-link to Growth, FAQ, final CTA.
// ============================================================

// ============================================================
// 1. Nav — JUST FabFunnel logo on the left + Buy Now on the right
// ============================================================
function FabAINav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 90 }}>
      <nav style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.78)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--border-1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 18px -8px rgba(0,0,0,0.06)' : 'none',
        transition: 'background .25s ease, border-color .25s ease, box-shadow .25s ease',
      }}>
        <div style={{
          maxWidth: 1340, margin: '0 auto', padding: '0 32px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="landing.html" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <FFLockup height={18}/>
              <span style={{
                padding: '4px 9px', borderRadius: 6,
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
              }}>Fab AI</span>
            </span>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '11px 18px 11px 22px', borderRadius: 10, border: 'none',
              background: 'var(--ff-lime)', color: 'var(--ff-ink)',
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              boxShadow: '0 12px 28px -10px rgba(195,235,66,0.55)',
              transition: 'filter .15s var(--ease-out), transform .15s var(--ease-out)',
            }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Buy Now
              <span style={{
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 24, height: 24, borderRadius: 6,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
              }}>›</span>
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}

// ============================================================
// 2. Hero — light bold headline with workspace mock
// ============================================================
function FabAIHero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--ff-cream)',
      padding: '64px 24px 80px',
    }}>
      {/* Soft mesh background */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '-10%', pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(23,23,23,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(23,23,23,0.04) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)',
      }}/>
      <div aria-hidden="true" style={{
        position: 'absolute', width: 760, height: 760, borderRadius: '50%',
        top: '-25%', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(195,235,66,0.36) 0%, rgba(195,235,66,0.08) 35%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }}/>

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 920, margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ff-ink)' }}/>
            Introducing Fab AI
          </span>
          <h1 style={{
            margin: '22px 0 18px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(42px, 6.4vw, 84px)', lineHeight: 1.02, letterSpacing: '-0.035em',
            color: 'var(--ff-ink)',
          }}>
            The creative engine for{' '}
            <span style={{ color: 'var(--ff-rich)' }}>scroll-stopping ads.</span>
          </h1>
          <p style={{
            margin: '0 auto 32px', maxWidth: 640,
            fontFamily: "'Geist'", fontSize: 18, lineHeight: 1.55,
            color: 'var(--fg-2)',
          }}>
            Generate ad creatives that ship. Surface what's winning in your vertical. Dissect any video competitor in minutes. Three tools. One purpose: make the next ad better than the last.
          </p>
          <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 20px 14px 26px', borderRadius: 12, border: 'none',
                background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                boxShadow: '0 18px 36px -10px rgba(195,235,66,0.55)',
              }}>
                Get instant access
                <span style={{ background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                  width: 26, height: 26, borderRadius: 6,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>›</span>
              </button>
            </a>
            <a href="#features" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 22px', borderRadius: 12,
                background: 'var(--ff-paper)', color: 'var(--ff-ink)',
                border: '1.5px solid var(--ff-ink)',
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, cursor: 'pointer',
              }}>
                See it work ↓
              </button>
            </a>
          </div>
          <div style={{ marginTop: 22, fontFamily: "'Geist Mono'", fontSize: 11, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            ● Live · 100 credits / month · cancel anytime
          </div>
        </div>

        {/* Workspace mock */}
        <div style={{ marginTop: 56, position: 'relative' }}>
          <div aria-hidden="true" style={{
            position: 'absolute', left: '8%', right: '8%', bottom: -40, height: 120,
            background: 'radial-gradient(ellipse at center, rgba(195,235,66,0.55) 0%, rgba(195,235,66,0) 70%)',
            filter: 'blur(50px)', zIndex: 0,
          }}/>
          <div style={{
            position: 'relative', zIndex: 1,
            background: 'var(--ff-paper)',
            border: '1px solid var(--border-1)', borderRadius: 18,
            padding: 22,
            boxShadow: '0 40px 100px -30px rgba(0,0,0,0.18), 0 0 0 1px rgba(195,235,66,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, paddingBottom: 16, borderBottom: '1px solid var(--border-1)' }}>
              <span style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Geist'", fontWeight: 900, fontSize: 16 }}>★</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, color: 'var(--ff-ink)' }}>Fab AI Workspace</div>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.08em' }}>WORKSPACE / PERSONAL</div>
              </div>
              <span style={{ padding: '5px 12px', borderRadius: 999, background: 'rgba(195,235,66,0.18)', color: 'var(--ff-rich)', fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>● 87 / 100 credits</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="ff-aihero-grid">
              {/* Creative Gen tile */}
              <div style={{
                background: 'rgba(195,235,66,0.14)', border: '1px solid rgba(143,184,33,0.3)',
                borderRadius: 12, padding: 18,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13 }}>★</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-rich)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Creative Gen</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
                  {[
                    'linear-gradient(135deg, #FFE8D9, #FFB37D)',
                    'linear-gradient(135deg, #E0F0FF, #7AB8F5)',
                    'linear-gradient(135deg, #E8FFE0, #8FB821)',
                    'linear-gradient(135deg, #FFE8F0, #F57AB8)',
                    'linear-gradient(135deg, rgba(195,235,66,0.5), #C3EB42)',
                    'linear-gradient(135deg, #FAF9F4, #E5E5DF)',
                  ].map((bg, i) => (
                    <div key={i} style={{ aspectRatio: '1', borderRadius: 5, background: bg }}/>
                  ))}
                </div>
                <div style={{ marginTop: 10, fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.06em' }}>+12 generating</div>
              </div>

              {/* Insights tile */}
              <div style={{
                background: 'var(--ff-cream)', border: '1px solid var(--border-1)',
                borderRadius: 12, padding: 18,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13 }}>↗</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Insights</span>
                </div>
                <svg viewBox="0 0 200 70" preserveAspectRatio="none" style={{ width: '100%', height: 70 }}>
                  <defs>
                    <linearGradient id="aiHTrend1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8FB821" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#8FB821" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,60 L25,52 L50,46 L75,48 L100,32 L125,24 L150,18 L175,12 L200,4 L200,70 L0,70 Z" fill="url(#aiHTrend1)"/>
                  <path d="M0,60 L25,52 L50,46 L75,48 L100,32 L125,24 L150,18 L175,12 L200,4" fill="none" stroke="#8FB821" strokeWidth="2"/>
                </svg>
                <div style={{ marginTop: 4, display: 'flex', justifyContent: 'space-between', fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.06em' }}>
                  <span>SUPPLEMENTS · 7D</span><span style={{ color: 'var(--ff-rich)', fontWeight: 700 }}>+24%</span>
                </div>
              </div>

              {/* Video Sage tile */}
              <div style={{
                background: 'var(--ff-cream)', border: '1px solid var(--border-1)',
                borderRadius: 12, padding: 18,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 11 }}>▶</span>
                  <span style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Video Sage</span>
                </div>
                <div style={{ display: 'flex', gap: 4, height: 50 }}>
                  {[35, 80, 55, 88, 42, 30, 25, 22].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: '100%', position: 'relative', borderRadius: 3, background: 'rgba(23,23,23,0.06)', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: `${h}%`, background: i === 1 ? 'var(--ff-rich)' : 'rgba(143,184,33,0.45)' }}/>
                      {i === 1 && (
                        <span style={{ position: 'absolute', top: 2, left: '50%', transform: 'translateX(-50%)', padding: '1px 4px', borderRadius: 3, background: 'var(--ff-ink)', color: 'var(--ff-lime)', fontFamily: "'Geist Mono'", fontSize: 7.5, fontWeight: 800, letterSpacing: '0.04em' }}>HOOK</span>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.06em' }}>
                  <span>0–3s</span><span style={{ color: 'var(--ff-rich)', fontWeight: 700 }}>CTR 7.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .ff-aihero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 3. Stats strip — quick proof points below hero
// ============================================================
function FabAIStats() {
  const stats = [
    { v: '10×',   l: 'Faster than agency' },
    { v: '40+',   l: 'Variations per brief' },
    { v: '100',   l: 'Credits per month' },
    { v: '40+',   l: 'Verticals tracked' },
  ];
  return (
    <section style={{
      background: 'var(--ff-paper)', padding: '48px 24px',
      borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="ff-aistats-grid">
        {stats.map((s, i) => (
          <div key={s.l} style={{ padding: '6px 22px', borderLeft: i > 0 ? '1px solid var(--border-1)' : 'none' }} className="ff-aistat-cell">
            <div style={{
              fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(30px, 3.8vw, 46px)',
              lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ff-ink)',
              display: 'inline-flex', alignItems: 'baseline',
            }}>{s.v}</div>
            <div style={{ marginTop: 10, fontFamily: "'Geist'", fontWeight: 500, fontSize: 13.5, color: 'var(--ff-mute)' }}>{s.l}</div>
            <div style={{ marginTop: 10, height: 2, width: 32, background: 'var(--ff-lime)', borderRadius: 999 }}/>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .ff-aistats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px 0 !important; }
          .ff-aistat-cell { border-left: none !important; }
          .ff-aistat-cell:nth-child(odd) { border-left: 1px solid var(--border-1) !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 4. Feature section — generic shell with rich content + 2 CTAs
// ============================================================
function FabAIFeature({
  number, eyebrow, title, body, bullets, visual, extras, reverse, bgVariant,
}) {
  const bg = bgVariant === 'cream' ? 'var(--ff-cream)' : 'var(--ff-paper)';
  return (
    <section style={{
      background: bg, padding: '88px 24px',
      borderTop: '1px solid var(--border-1)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Top split — text + main visual */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center',
          direction: reverse ? 'rtl' : 'ltr',
        }} className="ff-aifeat-grid">
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 30, height: 30, borderRadius: 8,
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 800, letterSpacing: '0.06em',
              }}>{number}</span>
              <span style={{
                fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ff-rich)',
              }}>{eyebrow}</span>
            </div>
            <h2 style={{
              margin: '20px 0 16px',
              fontFamily: "'Geist'", fontWeight: 900,
              fontSize: 'clamp(32px, 4.4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.025em',
              color: 'var(--ff-ink)',
            }}>{title}</h2>
            <p style={{
              margin: '0 0 26px', maxWidth: 520,
              fontFamily: "'Geist'", fontSize: 16.5, lineHeight: 1.6, color: 'var(--fg-2)',
            }}>{body}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bullets.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontFamily: "'Geist'", fontSize: 15, color: 'var(--ff-ink)' }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: 5, flexShrink: 0, marginTop: 1,
                    background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 12,
                  }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '11px 16px 11px 20px', borderRadius: 10, border: 'none',
                  background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 10px 22px -10px rgba(143,184,33,0.5)',
                }}>
                  Get started
                  <span style={{ background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                    width: 22, height: 22, borderRadius: 5,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>›</span>
                </button>
              </a>
              <a href="#" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '11px 16px', borderRadius: 10,
                  background: 'transparent', color: 'var(--ff-ink)',
                  border: '1.5px solid var(--ff-ink)',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  transition: 'background .15s, color .15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--ff-ink)'; e.currentTarget.style.color = 'var(--ff-paper)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ff-ink)'; }}
                >
                  Learn more →
                </button>
              </a>
            </div>
          </div>
          <div style={{ direction: 'ltr', position: 'relative' }}>
            {visual}
          </div>
        </div>

        {/* Extras row — mini stats / mini grids / before-after */}
        {extras && (
          <div style={{ marginTop: 56 }}>
            {extras}
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ff-aifeat-grid { grid-template-columns: 1fr !important; direction: ltr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}

// --- VISUALS -----------------------------------------------------

function VisualCreative() {
  return (
    <div style={{
      background: 'var(--ff-paper)',
      border: '1px solid var(--border-1)', borderRadius: 18,
      padding: 22, boxShadow: '0 30px 80px -20px rgba(0,0,0,0.15)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13 }}>★</span>
        <span style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, color: 'var(--ff-ink)' }}>Generate ad creative</span>
        <span style={{ marginLeft: 'auto', fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.1em' }}>● 24 / 40</span>
      </div>
      <div style={{
        padding: '12px 14px', borderRadius: 10,
        background: 'var(--ff-cream)', border: '1px solid var(--border-1)',
        fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-ink)',
        marginBottom: 14,
      }}>
        <span style={{ color: 'var(--ff-mute)' }}>Brief ›</span> Linen tee · UGC, beach lifestyle, golden hour, candid
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          'linear-gradient(135deg, #FFE8D9, #FFB37D)',
          'linear-gradient(135deg, #E0F0FF, #7AB8F5)',
          'linear-gradient(135deg, rgba(195,235,66,0.5), #C3EB42)',
          'linear-gradient(135deg, #FFE8F0, #F57AB8)',
          'linear-gradient(135deg, #E8FFE0, #8FB821)',
          'linear-gradient(135deg, rgba(23,23,23,0.2), rgba(23,23,23,0.6))',
        ].map((bg, i) => (
          <div key={i} style={{ aspectRatio: '4/5', borderRadius: 8, background: bg, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 6, left: 6, padding: '2px 6px', borderRadius: 999, background: 'rgba(0,0,0,0.5)', color: '#fff', fontFamily: "'Geist Mono'", fontSize: 8.5, letterSpacing: '0.08em' }}>V{i+1}</div>
            {i === 2 && (
              <div style={{ position: 'absolute', bottom: 6, right: 6, padding: '2px 6px', borderRadius: 4, background: 'var(--ff-ink)', color: 'var(--ff-lime)', fontFamily: "'Geist Mono'", fontSize: 8.5, fontWeight: 800, letterSpacing: '0.06em' }}>BEST</div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        <button style={{ flex: 1, padding: '10px', borderRadius: 8, border: 'none', background: 'var(--ff-lime)', color: 'var(--ff-ink)', fontFamily: "'Geist'", fontWeight: 700, fontSize: 13 }}>Generate 6 more</button>
        <button style={{ padding: '10px 14px', borderRadius: 8, background: 'var(--ff-cream)', color: 'var(--ff-ink)', border: '1px solid var(--border-1)', fontFamily: "'Geist'", fontWeight: 600, fontSize: 13 }}>Save</button>
      </div>
    </div>
  );
}

// Extra row for Creative — "From brief to ad" steps
function CreativeExtras() {
  const steps = [
    { n: '01', t: 'Drop a brief',          d: 'One line, one style reference. That\'s it.' },
    { n: '02', t: 'Genie spreads it',      d: '40 on-brand variations in under 90 seconds.' },
    { n: '03', t: 'Pick the keepers',      d: 'Star, save, ship. The rest disappear.' },
    { n: '04', t: 'Export to your manager', d: 'Meta, TikTok, NewsBreak — one click each.' },
  ];
  return (
    <div>
      <div style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ff-mute)', marginBottom: 18 }}>
        FROM BRIEF TO AD · IN FOUR STEPS
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="ff-aix-grid">
        {steps.map(s => (
          <div key={s.n} style={{
            background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
            borderRadius: 14, padding: '22px 20px',
            boxShadow: '0 4px 18px -14px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--ff-rich)' }}>{s.n}</div>
            <div style={{ marginTop: 12, fontFamily: "'Geist'", fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--ff-ink)' }}>{s.t}</div>
            <div style={{ marginTop: 6, fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>{s.d}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .ff-aix-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .ff-aix-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function VisualInsight() {
  const rows = [
    ['Supplements', '+24%', 'UGC hooks', true],
    ['Fashion DTC', '+18%', 'Lifestyle stills', false],
    ['Skincare',    '+15%', 'Founder POV', false],
    ['Wellness',    '+12%', 'B-roll edits', false],
    ['Beauty',      '+9%',  'Before/after', false],
  ];
  return (
    <div style={{
      background: 'var(--ff-paper)',
      border: '1px solid var(--border-1)', borderRadius: 18,
      padding: 22, boxShadow: '0 30px 80px -20px rgba(0,0,0,0.15)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, color: 'var(--ff-ink)' }}>Trending verticals · 7 days</div>
          <div style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.1em' }}>BENCHMARKS · ANONYMOUS</div>
        </div>
        <span style={{ padding: '4px 10px', borderRadius: 999, background: 'rgba(195,235,66,0.18)', color: 'var(--ff-rich)', fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Live</span>
      </div>
      <svg viewBox="0 0 400 90" preserveAspectRatio="none" style={{ width: '100%', height: 78, marginBottom: 14, display: 'block' }}>
        <defs>
          <linearGradient id="aiLightTrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8FB821" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#8FB821" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0,72 L40,68 L80,60 L120,62 L160,48 L200,40 L240,32 L280,26 L320,18 L360,10 L400,4 L400,90 L0,90 Z" fill="url(#aiLightTrend)"/>
        <path d="M0,72 L40,68 L80,60 L120,62 L160,48 L200,40 L240,32 L280,26 L320,18 L360,10 L400,4" fill="none" stroke="#8FB821" strokeWidth="2"/>
        {[[240,32],[320,18],[400,4]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="3" fill="#C3EB42" stroke="#171717" strokeWidth="1.5"/>)}
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {rows.map(([cat, delta, hook, hot], i) => (
          <div key={cat} style={{
            display: 'grid', gridTemplateColumns: '20px 1fr auto 70px', gap: 10, alignItems: 'center',
            padding: '8px 10px', borderRadius: 7,
            background: hot ? 'rgba(195,235,66,0.16)' : 'var(--ff-cream)',
            border: hot ? '1px solid rgba(143,184,33,0.4)' : '1px solid transparent',
          }}>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)' }}>{String(i+1).padStart(2,'0')}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: 13, fontWeight: 600, color: 'var(--ff-ink)' }}>{cat}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, color: 'var(--ff-mute)' }}>{hook}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700, color: hot ? 'var(--ff-rich)' : 'var(--fg-2)', textAlign: 'right' }}>{delta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Extra row for Insight — coverage stats + creative formats grid
function InsightExtras() {
  const formats = ['UGC creators', 'Founder POV', 'Lifestyle still', 'Before/after', 'Static product', 'B-roll edits', 'Talking head', 'Voice-over'];
  return (
    <div>
      <div style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ff-mute)', marginBottom: 18 }}>
        COVERAGE · WHAT WE WATCH
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: 18 }} className="ff-aix-grid2">
        <div style={{
          background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 14,
          padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontFamily: "'Geist'", fontWeight: 900, fontSize: 44, letterSpacing: '-0.03em', color: 'var(--ff-ink)', lineHeight: 1 }}>40+</div>
            <div style={{ marginTop: 8, fontFamily: "'Geist'", fontSize: 14.5, color: 'var(--fg-2)' }}>verticals scanned daily across Meta, TikTok, and NewsBreak.</div>
          </div>
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: -6 }}>
              {['#1877F2','#000','#FE2D2D'].map((c,i)=> (
                <span key={i} style={{ width: 26, height: 26, borderRadius: 999, background: c, border: '2px solid var(--ff-paper)', marginLeft: i === 0 ? 0 : -10 }}/>
              ))}
            </div>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>3 networks</span>
          </div>
        </div>
        <div style={{
          background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 14,
          padding: 22,
        }}>
          <div style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--ff-mute)', textTransform: 'uppercase', marginBottom: 14 }}>
            Creative formats we benchmark
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {formats.map((f, i) => (
              <span key={f} style={{
                padding: '7px 12px', borderRadius: 999,
                background: i === 0 ? 'var(--ff-lime)' : 'var(--ff-cream)',
                border: i === 0 ? '1px solid var(--ff-rich)' : '1px solid var(--border-1)',
                fontFamily: "'Geist'", fontSize: 13, fontWeight: 600, color: 'var(--ff-ink)',
              }}>{f}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .ff-aix-grid2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function VisualVideoSage() {
  return (
    <div style={{
      background: 'var(--ff-paper)',
      border: '1px solid var(--border-1)', borderRadius: 18,
      padding: 22, boxShadow: '0 30px 80px -20px rgba(0,0,0,0.15)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 12 }}>▶</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, color: 'var(--ff-ink)' }}>competitor_winner.mp4</div>
          <div style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.1em' }}>0:24 · 1080×1920 · 8.2M VIEWS</div>
        </div>
        <span style={{ padding: '4px 10px', borderRadius: 999, background: 'rgba(195,235,66,0.18)', color: 'var(--ff-rich)', fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em' }}>ANALYZED</span>
      </div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 14, height: 80 }}>
        {[
          ['#FFE8D9', '#FFB37D', 'HOOK'],
          ['#E0F0FF', '#7AB8F5', null],
          ['#E8FFE0', '#8FB821', null],
          ['#FFE8F0', '#F57AB8', null],
          ['#FAF9F4', '#E5E5DF', null],
          ['#1A1A1A', '#171717', 'CTA'],
        ].map(([bg, accent, label], i) => (
          <div key={i} style={{
            flex: 1, height: '100%', borderRadius: 6, position: 'relative', overflow: 'hidden',
            background: `linear-gradient(135deg, ${bg}, ${accent})`,
            border: label ? '2px solid var(--ff-rich)' : '1px solid var(--border-1)',
          }}>
            {label && (
              <span style={{ position: 'absolute', top: 4, left: 4, padding: '2px 6px', borderRadius: 4, background: 'var(--ff-ink)', color: 'var(--ff-lime)', fontFamily: "'Geist Mono'", fontSize: 8.5, fontWeight: 800, letterSpacing: '0.06em' }}>{label}</span>
            )}
            <span style={{ position: 'absolute', bottom: 4, right: 4, fontFamily: "'Geist Mono'", fontSize: 8.5, color: i === 5 ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)', fontWeight: 700 }}>0:{String(i*4).padStart(2,'0')}</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 400 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, marginBottom: 12 }}>
        <defs>
          <linearGradient id="aiLightRet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8FB821" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#8FB821" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0,8 L66,12 L132,28 L200,38 L264,30 L332,18 L400,14 L400,60 L0,60 Z" fill="url(#aiLightRet)"/>
        <path d="M0,8 L66,12 L132,28 L200,38 L264,30 L332,18 L400,14" fill="none" stroke="#8FB821" strokeWidth="2"/>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.08em' }}>
        <span>HOOK CTR <span style={{ color: 'var(--ff-rich)', fontWeight: 700 }}>7.4%</span></span>
        <span>RETENTION <span style={{ color: 'var(--ff-rich)', fontWeight: 700 }}>62%</span></span>
        <span>SIMILAR ADS <span style={{ color: 'var(--ff-rich)', fontWeight: 700 }}>14</span></span>
      </div>
    </div>
  );
}

// Extra row for Video Sage — 3 mini insight cards
function VideoSageExtras() {
  const cards = [
    { stat: '0–3s', t: 'Hook detection', d: 'AI marks the exact frame where attention either holds or drops. Optimize the first three seconds first.' },
    { stat: '24 frames', t: 'Scene breakdown',  d: 'Every cut, transition, CTA position, and on-screen text read — labeled and timed.' },
    { stat: '14 ads',   t: 'Lookalike radar',  d: 'Find every similar ad already running in market. Know what you\'re up against before you spend a cent.' },
  ];
  return (
    <div>
      <div style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ff-mute)', marginBottom: 18 }}>
        WHAT VIDEO SAGE TELLS YOU
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="ff-aix-grid3">
        {cards.map(c => (
          <div key={c.t} style={{
            background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
            borderRadius: 14, padding: '22px 22px',
          }}>
            <div style={{
              display: 'inline-block', padding: '4px 10px', borderRadius: 999,
              background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
            }}>{c.stat}</div>
            <div style={{ marginTop: 16, fontFamily: "'Geist'", fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--ff-ink)' }}>{c.t}</div>
            <div style={{ marginTop: 6, fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>{c.d}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .ff-aix-grid3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function FabAIFeatures() {
  return (
    <div id="features">
      <FabAIFeature
        number="01"
        eyebrow="Creative Generation"
        title={<>Brief once. Generate forty. <span style={{ color: 'var(--ff-rich)' }}>Ship the winners.</span></>}
        body="Creative Generation turns a one-line brief into a batch of on-brand ads — images, hooks, scripts. Pick the keepers. Toss the rest. Repeat until the ad account has a stable of working creative."
        bullets={[
          'On-brand outputs from a single style reference',
          '40+ variations per brief — images, hooks, copy',
          'One-click export to Meta, TikTok, NewsBreak templates',
        ]}
        visual={<VisualCreative/>}
        extras={<CreativeExtras/>}
        bgVariant="paper"
      />
      <FabAIFeature
        number="02"
        eyebrow="Industry Insight"
        title={<>See what's <span style={{ color: 'var(--ff-rich)' }}>winning</span> before it's everywhere.</>}
        body="Industry Insight surfaces the creative formats trending across your vertical right now — anonymous, real-spend benchmarks refreshed weekly. Know what's working before your competitor's CMO does."
        bullets={[
          'Anonymous benchmarks across 40+ verticals',
          'Trending hooks, formats, and aspect ratios',
          'Weekly refresh — the data is never stale',
        ]}
        visual={<VisualInsight/>}
        extras={<InsightExtras/>}
        reverse={true}
        bgVariant="cream"
      />
      <FabAIFeature
        number="03"
        eyebrow="Video Sage"
        title={<>Dissect any winning ad in <span style={{ color: 'var(--ff-rich)' }}>two minutes</span>.</>}
        body="Paste a video URL. Video Sage scrubs frame-by-frame to find the hook, measure retention, mark the CTA, and surface every similar ad in market. The fastest reverse-engineer in the game."
        bullets={[
          'Frame-by-frame hook detection + retention curves',
          'CTA timing, on-screen text reads, scene cuts',
          'Find every similar ad already running in market',
        ]}
        visual={<VisualVideoSage/>}
        extras={<VideoSageExtras/>}
        bgVariant="paper"
      />
    </div>
  );
}

// ============================================================
// 5. Comparison table — Fab AI vs The Old Way
// ============================================================
function FabAICompare() {
  const rows = [
    ['On-brand ad creatives',           ['Tossed-around briefs', '3–5 days', 'Designer queue'],            ['Brief in 30 sec', 'Genie ships in 90 sec', 'On-brand from reference']],
    ['Variations per concept',          ['2–3 per round',  'Same hook re-shot',  'Cost per variant'],     ['40+ per brief',  'Multi-format batch',  'Included in plan']],
    ['Trending vertical signal',        ['Gut feel + Twitter',  'Yesterday\'s data',  'Cherry-picked anecdotes'], ['40 verticals · refreshed weekly', 'Real spend benchmarks',  'Anonymous + safe']],
    ['Competitor video teardown',       ['Watch 12 ads. Take notes.',  '45 minutes per video',  'Easily missed'], ['Frame-by-frame in 2 min',  'Hook + CTA + retention',  'Find lookalikes instantly']],
    ['Time to first usable creative',   ['3–5 business days',  'Designer + writer queue',  '$$$'],         ['Under 5 minutes',  'No queue',  'Included']],
    ['Monthly creative output',         ['8–15 variations',  'Limited by team',  'Bottlenecked'],          ['400+ variations',  '100 credits / month',  'Pool with team']],
  ];
  return (
    <section style={{ background: 'var(--ff-cream)', padding: '96px 24px', borderTop: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Comparison</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.4vw, 50px)', letterSpacing: '-0.025em', lineHeight: 1.05,
            color: 'var(--ff-ink)',
          }}>
            Fab AI vs <span style={{ color: 'var(--ff-rich)' }}>the old way.</span>
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 580, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Side-by-side, day-one. The math sells itself.
          </p>
        </div>

        <div style={{
          background: 'var(--ff-paper)', borderRadius: 18,
          border: '1px solid var(--border-1)',
          boxShadow: '0 20px 50px -22px rgba(0,0,0,0.12)',
          overflow: 'hidden',
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 0,
            borderBottom: '1px solid var(--border-1)',
          }} className="ff-aicmp-head">
            <div style={{ padding: '20px 24px', background: 'var(--ff-paper)' }}>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ff-mute)' }}>What you need</span>
            </div>
            <div style={{ padding: '20px 24px', background: 'var(--ff-cream)', borderLeft: '1px solid var(--border-1)' }}>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ff-mute)' }}>The old way</span>
              <div style={{ marginTop: 4, fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, color: 'var(--ff-ink)', letterSpacing: '-0.015em' }}>Designers + spreadsheets</div>
            </div>
            <div style={{ padding: '20px 24px', background: 'var(--ff-ink)', borderLeft: '1px solid var(--ff-ink)', position: 'relative' }}>
              <span style={{
                position: 'absolute', top: -10, right: 18,
                padding: '4px 10px', borderRadius: 999,
                background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
              }}>★ Fab AI</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ff-lime)' }}>The new way</span>
              <div style={{ marginTop: 4, fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, color: 'var(--ff-paper)', letterSpacing: '-0.015em' }}>Fab AI</div>
            </div>
          </div>

          {/* Body rows */}
          {rows.map(([label, oldCol, newCol], i) => (
            <div key={label} style={{
              display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 0,
              borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-1)',
            }} className="ff-aicmp-row">
              <div style={{ padding: '22px 24px', background: 'var(--ff-paper)' }}>
                <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, letterSpacing: '-0.01em', color: 'var(--ff-ink)' }}>{label}</div>
              </div>
              <div style={{ padding: '22px 24px', background: 'var(--ff-cream)', borderLeft: '1px solid var(--border-1)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {oldCol.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: "'Geist'", fontSize: 13.5, color: 'var(--fg-2)' }}>
                      <span style={{ width: 14, height: 14, borderRadius: 999, flexShrink: 0, marginTop: 3,
                        background: 'rgba(254,45,45,0.18)', color: '#FE2D2D',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 10 }}>×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: '22px 24px', background: 'var(--ff-ink)', borderLeft: '1px solid var(--ff-ink)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {newCol.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: "'Geist'", fontSize: 13.5, color: 'var(--ff-paper)' }}>
                      <span style={{ width: 14, height: 14, borderRadius: 999, flexShrink: 0, marginTop: 3,
                        background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 10 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '12px 18px 12px 22px', borderRadius: 10, border: 'none',
              background: 'var(--ff-lime)', color: 'var(--ff-ink)',
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 14px 28px -10px rgba(143,184,33,0.5)',
            }}>
              Try Fab AI
              <span style={{ background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 24, height: 24, borderRadius: 6,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>›</span>
            </button>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .ff-aicmp-head, .ff-aicmp-row { grid-template-columns: 1fr !important; }
          .ff-aicmp-head > div, .ff-aicmp-row > div { border-left: none !important; border-top: 1px solid var(--border-1) !important; }
          .ff-aicmp-head > div:first-child, .ff-aicmp-row > div:first-child { border-top: none !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 6. Pricing — LIGHT theme, 2 tiers ($39 / $99)
// ============================================================
function FabAIPricing() {
  const plans = [
    {
      id: 'individual',
      name: 'AI Individual',
      price: '$39',
      cadence: 'per seat / month',
      cta: 'Get instant access',
      tagline: 'Pay monthly. Cancel any time.',
      popular: false,
      bullets: [
        { t: 'AI generated ad creatives', b: 'Brief Genie and ship on brand ads, hooks, and scripts. 100 credits per month.' },
        { t: 'Video Sage analysis',       b: 'Deconstruct any winning ad video. See what makes it convert.' },
        { t: 'Competitor intelligence',   b: 'Track 5 competitors. Surface winning angles before they go mainstream.' },
      ],
    },
    {
      id: 'team',
      name: 'AI Team',
      price: '$99',
      cadence: 'starting at 3 seats / month',
      cta: 'Get instant access',
      tagline: 'Pay monthly. Cancel any time.',
      popular: true,
      bullets: [
        { t: 'Shared creative workspace', b: 'Everyone briefs Genie, everyone ships. 450 credits pooled across the team.' },
        { t: 'Team scale intelligence',   b: 'Track 15 competitors and dissect their videos. Patterns no solo buyer would see.' },
        { t: 'Built to scale',            b: '100 GB storage, unlimited brands, team usage reporting included.' },
      ],
    },
  ];

  return (
    <section id="pricing" style={{
      background: 'var(--ff-paper)', position: 'relative', overflow: 'hidden',
      padding: '96px 24px', borderTop: '1px solid var(--border-1)',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        top: '20%', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(195,235,66,0.22) 0%, rgba(195,235,66,0.04) 40%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }}/>

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Pricing</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(34px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.04,
            color: 'var(--ff-ink)',
          }}>
            Pricing that <span style={{ color: 'var(--ff-rich)' }}>overdelivers</span>.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 540, fontFamily: "'Geist'", fontSize: 16.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            One workspace. Real credits. No tokens, no quotas, no "starter" trap.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22,
          maxWidth: 920, margin: '0 auto', alignItems: 'stretch',
        }} className="ff-aipricing-grid">
          {plans.map(p => (
            <div key={p.id} style={{
              position: 'relative',
              background: p.popular ? 'rgba(195,235,66,0.16)' : 'var(--ff-paper)',
              border: p.popular ? '1.5px solid var(--ff-rich)' : '1.5px solid var(--border-1)',
              borderRadius: 22, padding: '40px 36px 36px',
              boxShadow: p.popular
                ? '0 30px 80px -24px rgba(143,184,33,0.4), 0 50px 90px -40px rgba(0,0,0,0.12)'
                : '0 20px 40px -22px rgba(0,0,0,0.1)',
              display: 'flex', flexDirection: 'column',
            }}>
              {p.popular && (
                <span style={{
                  position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                  padding: '6px 14px', borderRadius: 999,
                  background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                  fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 800,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 10px 20px -8px rgba(0,0,0,0.3)',
                }}>★ Best for teams</span>
              )}
              <div style={{
                fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--ff-mute)', marginBottom: 18,
              }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <div style={{
                  fontFamily: "'Geist'", fontWeight: 900,
                  fontSize: 76, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--ff-ink)',
                }}>{p.price}</div>
              </div>
              <div style={{ marginTop: 12, fontFamily: "'Geist'", fontSize: 14.5, color: 'var(--ff-mute)' }}>{p.cadence}</div>

              <a href="#" style={{ textDecoration: 'none', marginTop: 28 }}>
                <button style={{
                  width: '100%', padding: '16px', borderRadius: 12, border: 'none',
                  background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, cursor: 'pointer',
                  boxShadow: p.popular
                    ? '0 14px 32px -10px rgba(143,184,33,0.7)'
                    : '0 10px 24px -10px rgba(143,184,33,0.4)',
                  transition: 'filter .15s, transform .15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >{p.cta}</button>
              </a>
              <div style={{ marginTop: 14, textAlign: 'center', fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-mute)' }}>
                {p.tagline}
              </div>

              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {p.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <span style={{
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: 'var(--ff-cream)', border: '1px solid var(--border-1)',
                      color: 'var(--ff-rich)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg viewBox="0 0 22 22" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && p.popular === false && <><path d="M11 3l2 5 5 1.5-3.5 3.5L15 18l-4-2.5L7 18l.5-5L4 9.5 9 8z"/></>}
                        {i === 1 && p.popular === false && <><circle cx="11" cy="11" r="8"/><path d="M8 11l2.5 2.5L14 9.5"/></>}
                        {i === 2 && p.popular === false && <><circle cx="11" cy="11" r="3"/><circle cx="11" cy="11" r="7"/></>}
                        {i === 0 && p.popular === true && <><circle cx="8" cy="9" r="2.5"/><circle cx="15" cy="9" r="2.5"/><path d="M4 18c0-2 2-3 4-3M11 18c0-2 2-3 4-3M18 18c0-1.5 1-2.5 2-3"/></>}
                        {i === 1 && p.popular === true && <><path d="M4 18V8M10 18V4M16 18v-6"/></>}
                        {i === 2 && p.popular === true && <><ellipse cx="11" cy="6" rx="6" ry="2"/><path d="M5 6v5c0 1 3 2 6 2s6-1 6-2V6M5 11v5c0 1 3 2 6 2s6-1 6-2v-5"/></>}
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, color: 'var(--ff-ink)', letterSpacing: '-0.005em' }}>{b.t}</div>
                      <div style={{ marginTop: 4, fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>{b.b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .ff-aipricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 7. Cross-link CTA — send the user to FabFunnel (Growth plan)
// ============================================================
function GrowthCrossLink() {
  return (
    <section style={{ background: 'var(--ff-cream)', padding: '64px 24px', borderTop: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{
          background: 'var(--ff-paper)', borderRadius: 20,
          border: '1.5px solid var(--border-1)',
          padding: '40px 48px',
          boxShadow: '0 20px 50px -22px rgba(0,0,0,0.12)',
          display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }} className="ff-aigrowth-panel">
          {/* Decorative lime */}
          <div aria-hidden="true" style={{
            position: 'absolute', right: -80, top: -80, width: 280, height: 280, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(195,235,66,0.32) 0%, rgba(195,235,66,0) 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }}/>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '5px 12px', borderRadius: 999,
              background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Need more than creative?</span>
            <h3 style={{
              margin: '16px 0 12px',
              fontFamily: "'Geist'", fontWeight: 900,
              fontSize: 'clamp(26px, 3.4vw, 38px)', letterSpacing: '-0.025em', lineHeight: 1.08,
              color: 'var(--ff-ink)',
            }}>
              Bulk-launch and automate too. <span style={{ color: 'var(--ff-rich)' }}>Explore the Growth plan.</span>
            </h3>
            <p style={{
              margin: 0, fontFamily: "'Geist'", fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 540,
            }}>
              The full FabFunnel platform adds bulk campaign launches, multi-account reporting, Co-Pilot automation, and 24/7 optimization rules — on top of everything Fab AI ships.
            </p>
          </div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="pricing.html" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%', padding: '14px 18px', borderRadius: 12, border: 'none',
                background: 'var(--ff-ink)', color: 'var(--ff-paper)',
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 15, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                boxShadow: '0 14px 28px -10px rgba(0,0,0,0.25)',
              }}>
                Explore Growth plan
                <span style={{ background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                  width: 24, height: 24, borderRadius: 6,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>›</span>
              </button>
            </a>
            <a href="landing.html" style={{
              textAlign: 'center',
              fontFamily: "'Geist'", fontSize: 13, fontWeight: 600,
              color: 'var(--ff-mute)', textDecoration: 'none',
            }}>or visit the FabFunnel platform tour →</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .ff-aigrowth-panel { grid-template-columns: 1fr !important; padding: 32px 28px !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 8. FAQ
// ============================================================
const AI_FAQS = [
  { q: 'How do credits work?', a: 'Each generated creative consumes 1 credit. Individual plans include 100 credits/month, Team plans pool 450 credits across the workspace. Credits refresh monthly. Unused credits don\'t roll over.' },
  { q: 'What happens if I run out of credits?', a: 'Buy a top-up pack any time (50 credits / $19) or upgrade. Workspaces never freeze — you keep access to everything you\'ve already shipped.' },
  { q: 'How is Fab AI different from FabFunnel?', a: 'Fab AI is the creative-only tier — generation, insights, and video analysis. The full FabFunnel platform adds the bulk launcher, automation rules, multi-account reporting, and Co-Pilot. If you only need creative, this is the cheaper door.' },
  { q: 'Can I cancel any time?', a: 'Yes. Monthly billing, cancel from your dashboard. No questions, no save offers, no friction.' },
  { q: 'Do I need a Meta or TikTok ad account?', a: 'No. Fab AI runs standalone — generate creatives, export them, ship from any ad manager you already use.' },
];

function FabAIFAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '96px 24px', borderTop: '1px solid var(--border-1)' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>FAQ</span>
          <h2 style={{
            margin: '20px 0 0', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.025em', lineHeight: 1.04,
            color: 'var(--ff-ink)',
          }}>Questions, answered.</h2>
        </div>
        <div style={{
          background: 'var(--ff-cream)', borderRadius: 16,
          border: '1px solid var(--border-1)', padding: '6px 24px',
        }}>
          {AI_FAQS.map((f, i) => (
            <div key={f.q} style={{ borderBottom: i === AI_FAQS.length - 1 ? 'none' : '1px solid var(--border-1)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', textAlign: 'left',
                padding: '20px 4px', background: 'transparent', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 16, letterSpacing: '-0.005em',
                color: open === i ? 'var(--ff-rich)' : 'var(--ff-ink)',
                transition: 'color .2s',
              }}>
                <span style={{ flex: 1 }}>{f.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: open === i ? 'var(--ff-ink)' : 'var(--ff-paper)',
                  color: open === i ? 'var(--ff-lime)' : 'var(--ff-ink)',
                  border: '1px solid var(--border-1)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background .25s, color .25s, transform .3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  <svg viewBox="0 0 14 14" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 2v10M2 7h10"/>
                  </svg>
                </span>
              </button>
              <div style={{ maxHeight: open === i ? 280 : 0, overflow: 'hidden', transition: 'max-height .4s var(--ease-out)' }}>
                <p style={{ margin: 0, padding: '0 4px 22px', fontFamily: "'Geist'", fontSize: 15, lineHeight: 1.6, color: 'var(--fg-2)' }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 9. Final lime CTA panel
// ============================================================
function FabAIFinalCTA() {
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '0 24px 96px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: '-30px 4% -30px 4%',
          background: 'radial-gradient(ellipse at center, rgba(195,235,66,0.6) 0%, rgba(195,235,66,0.12) 40%, transparent 70%)',
          filter: 'blur(60px)', zIndex: 0,
        }}/>
        <div style={{
          position: 'relative', zIndex: 1,
          background: 'var(--ff-lime)', borderRadius: 22,
          padding: '48px 56px',
          display: 'grid', gridTemplateColumns: '1.4fr auto', gap: 32, alignItems: 'center',
          boxShadow: '0 30px 60px -20px rgba(195,235,66,0.6)',
        }} className="ff-aicta-panel">
          <div>
            <div style={{
              fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(23,23,23,0.7)',
              marginBottom: 12,
            }}>
              Try Fab AI today
            </div>
            <h2 style={{
              margin: 0, fontFamily: "'Geist'", fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.028em', lineHeight: 1.04,
              color: 'var(--ff-ink)',
            }}>
              Ship better ads.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="#" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '16px 22px', borderRadius: 12, border: 'none',
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                whiteSpace: 'nowrap', width: '100%',
                boxShadow: '0 14px 32px -10px rgba(0,0,0,0.4)',
              }}>Buy now →</button>
            </a>
            <a href="pricing.html" style={{
              textAlign: 'center',
              fontFamily: "'Geist'", fontSize: 13, fontWeight: 600,
              color: 'rgba(23,23,23,0.65)', textDecoration: 'none',
            }}>Need the full platform? Explore Growth →</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .ff-aicta-panel { grid-template-columns: 1fr !important; padding: 36px 28px !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 10. Footer — minimal, light theme
// ============================================================
function FabAIFooter() {
  return (
    <footer style={{ background: 'var(--ff-cream)', borderTop: '1px solid var(--border-1)', padding: '36px 24px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <FFLockup height={16}/>
          <span style={{ padding: '3px 8px', borderRadius: 5, background: 'var(--ff-ink)', color: 'var(--ff-lime)', fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Fab AI</span>
        </div>
        <div style={{ display: 'flex', gap: 22, fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-mute)' }}>
          <a href="landing.html" style={{ color: 'inherit', textDecoration: 'none' }}>FabFunnel platform</a>
          <a href="pricing.html" style={{ color: 'inherit', textDecoration: 'none' }}>Growth pricing</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
        </div>
        <div style={{ fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-mute)' }}>© 2026 FabFunnel</div>
      </div>
    </footer>
  );
}

window.FabAINav = FabAINav;
window.FabAIHero = FabAIHero;
window.FabAIStats = FabAIStats;
window.FabAIFeatures = FabAIFeatures;
window.FabAICompare = FabAICompare;
window.FabAIPricing = FabAIPricing;
window.GrowthCrossLink = GrowthCrossLink;
window.FabAIFAQ = FabAIFAQ;
window.FabAIFinalCTA = FabAIFinalCTA;
window.FabAIFooter = FabAIFooter;
