/* global React, PlatformGlyph, PricingHooks, I */

const { useInView, useCountUp } = window.PricingHooks;

// ============================================================
// Shared building blocks for the 3 platform pages (Meta, TikTok, NewsBreak).
// All sections accept data props so each page can configure copy + visuals.
// ============================================================

// ----- Eyebrow pill --------------------------------------------------
function Eyebrow({ children, color = 'lime' }) {
  const bg = color === 'lime' ? 'var(--ff-lime)' : 'var(--ff-cream)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 14px', borderRadius: 999,
      background: bg, color: 'var(--ff-ink)',
      border: color === 'lime' ? 'none' : '1px solid var(--border-1)',
      fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
    }}>{children}</span>
  );
}

// ----- 1. Platform hero ----------------------------------------------
function PlatformHero({ platform, eyebrow, title, body, primaryCTA, secondaryCTA, decorGlyphs = [] }) {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--ff-cream)',
      padding: '40px 24px 64px',
    }}>
      {/* Soft glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-10%', top: '-30%', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(195,235,66,0.32) 0%, rgba(195,235,66,0.05) 40%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }}/>

      <div style={{
        maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32, alignItems: 'center',
      }} className="ff-phero-grid">
        <div>
          <Eyebrow>Platform</Eyebrow>
          <h1 style={{
            margin: '20px 0 16px',
            fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.04, letterSpacing: '-0.03em',
            color: 'var(--ff-ink)',
          }}>{title}</h1>
          <p style={{
            margin: '0 0 28px', maxWidth: 540,
            fontFamily: "'Geist'", fontSize: 16.5, lineHeight: 1.6, color: 'var(--fg-2)',
          }}>{body}</p>
          <div className="ff-phero-cta-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={primaryCTA.href} style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 16px 12px 22px', borderRadius: 10, border: 'none',
                background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
                boxShadow: '0 12px 28px -10px rgba(143,184,33,0.5)',
              }}>
                {primaryCTA.label}
                <span style={{
                  background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                  width: 24, height: 24, borderRadius: 5,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
                }}>›</span>
              </button>
            </a>
            <a href={secondaryCTA.href} style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 16px 12px 22px', borderRadius: 10,
                background: 'var(--ff-paper)', color: 'var(--ff-ink)', border: '1.5px solid var(--ff-ink)',
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
              }}>
                {secondaryCTA.label}
                <span style={{
                  background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                  width: 24, height: 24, borderRadius: 5,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
                }}>›</span>
              </button>
            </a>
          </div>
        </div>

        {/* Decorative right side — FabFunnel mark intertwined with platform glyph */}
        <div style={{ position: 'relative', minHeight: 280 }} className="ff-phero-decor">
          {/* Soft lime ring */}
          <svg viewBox="0 0 400 280" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <path d="M40 160 Q 100 60, 200 110 T 360 130" fill="none" stroke="#C3EB42" strokeWidth="38" strokeLinecap="round" opacity="0.55"/>
            <path d="M40 160 Q 100 60, 200 110 T 360 130" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 5"/>
          </svg>
          {decorGlyphs.map((g, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: g.left, top: g.top, right: g.right, bottom: g.bottom,
              width: g.size, height: g.size, borderRadius: g.size * 0.28,
              background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 18px 36px -18px rgba(0,0,0,0.18)',
              transform: `rotate(${g.rotate || 0}deg)`,
            }}>
              <PlatformGlyph name={g.glyph} size={g.size * 0.55}/>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ff-phero-grid { grid-template-columns: 1fr !important; }
          .ff-phero-decor { min-height: 200px !important; }
        }
        @media (max-width: 600px) {
          .ff-phero-cta-row > a { width: 100%; }
          .ff-phero-cta-row > a > button { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

// ----- 2. Platform stats strip (4 stats) -----------------------------
function PlatformStats({ stats }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });
  return (
    <section ref={ref} style={{
      background: 'var(--ff-paper)', padding: '60px 24px',
      borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 0 }} className="ff-pstats-grid">
          {stats.map((s, i) => (
            <PStat key={i} s={s} i={i} inView={inView} hasBorder={i > 0}/>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .ff-pstats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function PStat({ s, i, inView, hasBorder }) {
  const v = useCountUp(s.v, { duration: 1300 + i * 80, start: inView });
  return (
    <div style={{
      padding: '14px 22px',
      borderLeft: hasBorder ? '1px solid var(--border-1)' : 'none',
    }} className="ff-pstat-block">
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 2,
        fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(34px, 4.4vw, 52px)',
        lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ff-ink)',
      }}>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>{Math.round(v)}</span>
        {s.suffix && <span style={{ color: 'var(--ff-rich)' }}>{s.suffix}</span>}
      </div>
      <div style={{ marginTop: 8, fontFamily: "'Geist'", fontWeight: 500, fontSize: 13.5, color: 'var(--ff-mute)' }}>{s.label}</div>
      <div style={{
        marginTop: 12, height: 2, background: 'var(--ff-lime)', borderRadius: 999,
        width: inView ? 36 : 0, transition: `width .8s var(--ease-out) ${0.15 + i * 0.1}s`,
      }}/>
    </div>
  );
}

// ----- 3. Three-step "How X Works on FabFunnel" ----------------------
function PlatformHowItWorks({ heading, accentChip, steps }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });
  const [hovered, setHovered] = React.useState(-1);
  return (
    <section ref={ref} style={{ background: 'var(--ff-cream)', padding: '88px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          {accentChip && <Eyebrow>{accentChip}</Eyebrow>}
          <h2 style={{
            margin: '20px 0 12px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>{heading}</h2>
          <p style={{ margin: '0 auto', maxWidth: 520, fontFamily: "'Geist'", fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Connect and start launching within the hour.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <svg className="ff-phow-line" viewBox="0 0 1000 4" preserveAspectRatio="none"
            style={{ position: 'absolute', top: '18%', left: '11%', right: '11%', width: '78%', height: 4, zIndex: 0 }}
          >
            <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--border-1)" strokeWidth="2" strokeDasharray="4 6"/>
            <line x1="0" y1="2" x2="1000" y2="2" stroke="#C3EB42" strokeWidth="2.5"
              strokeDasharray="1000" strokeDashoffset={inView ? 0 : 1000}
              style={{ transition: 'stroke-dashoffset 2s var(--ease-out) .2s' }}/>
          </svg>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, position: 'relative', zIndex: 1 }} className="ff-phow-grid">
            {steps.map((s, i) => {
              const isActive = hovered === i;
              return (
                <div key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                  style={{
                  background: isActive ? 'rgba(195,235,66,0.18)' : 'var(--ff-paper)',
                  border: `1.5px solid ${isActive ? 'rgba(143,184,33,0.7)' : 'var(--border-1)'}`,
                  borderRadius: 16, padding: '24px 22px',
                  boxShadow: isActive
                    ? '0 18px 40px -22px rgba(143,184,33,0.32), 0 24px 56px -32px rgba(0,0,0,0.08)'
                    : '0 6px 18px -14px rgba(0,0,0,0.08)',
                  transition: 'background .3s, border-color .3s, box-shadow .3s, transform .3s',
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  opacity: inView ? 1 : 0,
                  animation: inView ? `ffFadeUp .6s var(--ease-out) ${i * 90}ms both` : 'none',
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 999,
                    background: isActive ? 'var(--ff-lime)' : 'var(--ff-cream)',
                    color: 'var(--ff-ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Geist'", fontWeight: 800, fontSize: 12,
                  }}>{i + 1}</div>
                  <h3 style={{
                    marginTop: 18, marginBottom: 8, fontFamily: "'Geist'", fontWeight: 800,
                    fontSize: 18, letterSpacing: '-0.015em', color: 'var(--ff-ink)',
                  }}>{s.title}</h3>
                  <p style={{ margin: 0, fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)' }}>{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href={(window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} style={{ textDecoration: 'none' }}>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '11px 16px 11px 20px', borderRadius: 10, border: 'none',
              background: 'var(--ff-lime)', color: 'var(--ff-ink)',
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
              boxShadow: '0 12px 28px -10px rgba(143,184,33,0.5)',
            }}>
              See it in action
              <span style={{
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 22, height: 22, borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
              }}>›</span>
            </button>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ff-phow-grid { grid-template-columns: 1fr !important; }
          .ff-phow-line { display: none; }
        }
      `}</style>
    </section>
  );
}

// ----- 4. "Who uses FabFunnel for X?" 3-up persona row ---------------
function PlatformAudience({ heading, accentChip, personas }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.15, once: true });
  return (
    <section ref={ref} style={{ background: 'var(--ff-paper)', padding: '88px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          {accentChip && <Eyebrow>{accentChip}</Eyebrow>}
          <h2 style={{
            margin: '20px 0 0', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>{heading}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${personas.length}, 1fr)`, gap: 18 }} className="ff-paud-grid">
          {personas.map((p, i) => (
            <div key={p.name} style={{
              background: 'var(--ff-paper)',
              border: '1.5px solid var(--border-1)',
              borderRadius: 16,
              padding: '28px 26px 26px',
              boxShadow: '0 6px 20px -14px rgba(0,0,0,0.08)',
              opacity: inView ? 1 : 0,
              animation: inView ? `ffFadeUp .65s var(--ease-out) ${i * 90}ms both` : 'none',
              transition: 'border-color .25s, box-shadow .25s, transform .3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,184,33,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 22px 44px -22px rgba(143,184,33,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px -14px rgba(0,0,0,0.08)'; }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Geist'", fontWeight: 800, fontSize: 18,
              }}>{p.glyph}</div>
              <h3 style={{ margin: '18px 0 8px', fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--ff-ink)' }}>
                {p.name}
              </h3>
              <p style={{ margin: 0, fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.6, color: 'var(--fg-2)' }}>
                {p.body}
              </p>
              <a href={p.href || '#'} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 18, fontFamily: "'Geist'", fontWeight: 700, fontSize: 13.5,
                color: 'var(--ff-ink)', textDecoration: 'none',
              }}>
                {p.cta || `${p.name} solution`}
                <span style={{
                  width: 20, height: 20, borderRadius: 999,
                  background: 'var(--ff-cream)', color: 'var(--ff-ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
                }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .ff-paud-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ----- 5. Feature/Reason cards row -----------------------------------
function PlatformFeatureRow({ heading, accentChip, intro, cards }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  return (
    <section ref={ref} style={{ background: 'var(--ff-paper)', padding: '88px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          {accentChip && <Eyebrow>{accentChip}</Eyebrow>}
          <h2 style={{
            margin: '20px 0 12px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>{heading}</h2>
          {intro && <p style={{ margin: '0 auto', maxWidth: 580, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>{intro}</p>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(cards.length, 3)}, 1fr)`, gap: 18 }} className="ff-pfeat-grid">
          {cards.map((c, i) => (
            <div key={c.title} style={{
              background: 'var(--ff-paper)',
              border: '1.5px solid var(--border-1)',
              borderRadius: 16, padding: 22,
              boxShadow: '0 6px 20px -14px rgba(0,0,0,0.08)',
              opacity: inView ? 1 : 0,
              animation: inView ? `ffFadeUp .6s var(--ease-out) ${i * 70}ms both` : 'none',
              display: 'flex', flexDirection: 'column', gap: 14,
              transition: 'transform .3s, border-color .25s, box-shadow .25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,184,33,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Mock visual */}
              <div style={{
                background: c.mockBg || 'var(--ff-cream)',
                borderRadius: 10, padding: 14, minHeight: 124, position: 'relative',
                border: '1px solid var(--border-1)', overflow: 'hidden',
              }}>
                {c.mock}
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Geist'", fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--ff-ink)' }}>{c.title}</h3>
              <p style={{ margin: 0, fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)', flex: 1 }}>{c.body}</p>
              <a href={c.href || '#'} style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 13, color: 'var(--ff-rich)', textDecoration: 'none' }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .ff-pfeat-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .ff-pfeat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ----- 6. FAQ accordion (per-page, slimmer than landing) -------------
function PlatformFAQ({ heading = 'Frequently asked questions', faqs }) {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section style={{ background: 'var(--ff-cream)', padding: '88px 24px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 style={{
            margin: '20px 0 0', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.025em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>{heading}</h2>
        </div>
        <div style={{
          background: 'var(--ff-paper)', borderRadius: 16,
          border: '1px solid var(--border-1)', padding: '6px 22px',
          boxShadow: '0 10px 28px -18px rgba(0,0,0,0.1)',
        }}>
          {faqs.map((f, i) => (
            <div key={f.q} style={{ borderBottom: i === faqs.length - 1 ? 'none' : '1px solid var(--border-1)' }}>
              <button onClick={() => setOpenIdx(openIdx === i ? -1 : i)} style={{
                width: '100%', textAlign: 'left',
                padding: '18px 4px', background: 'transparent', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
                fontFamily: "'Geist'", fontWeight: 700, fontSize: 15.5, letterSpacing: '-0.005em',
                color: openIdx === i ? 'var(--ff-rich)' : 'var(--ff-ink)',
              }}>
                <span style={{ flex: 1 }}>{f.q}</span>
                <span style={{
                  width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                  background: openIdx === i ? 'var(--ff-ink)' : 'var(--ff-cream)',
                  color: openIdx === i ? 'var(--ff-lime)' : 'var(--ff-ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background .25s, color .25s, transform .3s',
                  transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 2v10M2 7h10"/>
                  </svg>
                </span>
              </button>
              <div style={{ maxHeight: openIdx === i ? 280 : 0, overflow: 'hidden', transition: 'max-height .4s var(--ease-out)' }}>
                <p style={{ margin: 0, padding: '0 4px 20px', fontFamily: "'Geist'", fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)' }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- 7. Final CTA panel (used at bottom of every platform page) ----
function PlatformFinalCTA({ heading, body }) {
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '64px 24px 88px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          margin: '0 0 12px', fontFamily: "'Geist'", fontWeight: 900,
          fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
          lineHeight: 1.05,
        }}>{heading}</h2>
        <p style={{ margin: '0 auto 24px', maxWidth: 580, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)' }}>{body}</p>
        <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={(window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} style={{ textDecoration: 'none' }}>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 18px', borderRadius: 10, border: 'none',
              background: 'var(--ff-lime)', color: 'var(--ff-ink)',
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
              boxShadow: '0 12px 28px -10px rgba(143,184,33,0.5)',
            }}>
              Get a demo — start today
              <span style={{
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 24, height: 24, borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
              }}>›</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

window.PlatformHero = PlatformHero;
window.PlatformStats = PlatformStats;
window.PlatformHowItWorks = PlatformHowItWorks;
window.PlatformAudience = PlatformAudience;
window.PlatformFeatureRow = PlatformFeatureRow;
window.PlatformFAQ = PlatformFAQ;
window.PlatformFinalCTA = PlatformFinalCTA;
