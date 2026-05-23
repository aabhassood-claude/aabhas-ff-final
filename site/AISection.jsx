/* global React, PricingHooks */

const { useInView, useCountUp } = window.PricingHooks;

// ============================================================
// AISection — "AI That Actually Moves The Needle"
// Split panel: lime stat tile on the left, dark capability
// list on the right. Stats count up on enter.
// ============================================================
function AISection() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });
  const roas = useCountUp(64, { duration: 1300, start: inView });
  const winners = useCountUp(975, { duration: 1600, start: inView });
  const paused = useCountUp(333, { duration: 1400, start: inView });

  return (
    <section ref={ref} id="ai" style={{
      background: 'var(--ff-paper)', padding: '96px 24px', position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 28, alignItems: 'stretch',
        }} className="ff-ai-grid">
          {/* LEFT — lime panel with stat + sparkline */}
          <div style={{
            position: 'relative', overflow: 'hidden',
            background: 'var(--ff-lime)',
            borderRadius: 22, padding: '40px 40px 32px',
            boxShadow: '0 30px 60px -22px rgba(143,184,33,0.45)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 460,
          }}>
            {/* Big stat */}
            <div>
              <div style={{
                fontFamily: "'Geist'", fontWeight: 900,
                fontSize: 'clamp(72px, 10vw, 140px)', lineHeight: 0.95, letterSpacing: '-0.04em',
                color: 'var(--ff-ink)',
              }}>
                {Math.round(roas)}%
              </div>
              <div style={{
                marginTop: 14, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.5,
                color: 'rgba(23,23,23,0.78)', maxWidth: 460,
              }}>
                Average lift in ROAS for teams that turn on Co-Pilot's auto-budget rebalancing in the first 30 days.
              </div>
            </div>

            {/* Twin mini-stat row */}
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { v: Math.round(winners), label: 'AI suggestions accepted this week' },
                { v: Math.round(paused), label: 'Underperformers paused, hands-free' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(23,23,23,0.06)',
                  borderRadius: 12, padding: '16px 16px',
                  border: '1px solid rgba(23,23,23,0.1)',
                }}>
                  <div style={{
                    fontFamily: "'Geist'", fontWeight: 900, fontSize: 30,
                    color: 'var(--ff-ink)', lineHeight: 1, letterSpacing: '-0.02em',
                    fontVariantNumeric: 'tabular-nums',
                  }}>{s.v.toLocaleString()}</div>
                  <div style={{
                    marginTop: 6, fontFamily: "'Geist Mono'", fontSize: 10,
                    color: 'rgba(23,23,23,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Sparkline at bottom */}
            <svg viewBox="0 0 400 80" preserveAspectRatio="none" style={{
              marginTop: 24, width: '100%', height: 70, display: 'block',
            }}>
              <defs>
                <linearGradient id="aiSpark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#171717" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#171717" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,60 L40,52 L80,55 L120,40 L160,42 L200,28 L240,32 L280,18 L320,22 L360,10 L400,4 L400,80 L0,80 Z"
                    fill="url(#aiSpark)"/>
              <path d="M0,60 L40,52 L80,55 L120,40 L160,42 L200,28 L240,32 L280,18 L320,22 L360,10 L400,4"
                    fill="none" stroke="#171717" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="600" strokeDashoffset={inView ? 0 : 600}
                    style={{ transition: 'stroke-dashoffset 1.6s var(--ease-out) .2s' }}/>
            </svg>

            {/* Decorative noise/mesh */}
            <div aria-hidden="true" style={{
              position: 'absolute', right: -80, top: -60, width: 280, height: 280, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
              filter: 'blur(40px)', pointerEvents: 'none',
            }}/>
          </div>

          {/* RIGHT — capabilities list */}
          <div style={{ padding: '8px 6px', display: 'flex', flexDirection: 'column' }}>
            <span style={{
              alignSelf: 'flex-start', padding: '6px 14px', borderRadius: 999,
              background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>AI Co-Pilot</span>
            <h2 style={{
              margin: '20px 0 12px',
              fontFamily: "'Geist'", fontWeight: 900,
              fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.025em', lineHeight: 1.05,
              color: 'var(--ff-ink)',
            }}>
              AI that actually <span style={{ color: 'var(--ff-rich)' }}>moves the needle</span>.
            </h2>
            <p style={{
              margin: '0 0 28px',
              fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)',
              maxWidth: 520,
            }}>
              Most "AI" in this space is a chatbot strapped to a dashboard. FabFunnel's Co-Pilot actually executes — rebalancing budgets, generating creatives, and flagging issues before they cost you.
            </p>

            {[
              { t: 'Budget rebalancer', d: 'Watches ROAS hourly. Moves spend from losers to winners while you sleep.' },
              { t: 'Creative auto-refresh', d: 'Detects fatigue. Generates 6 variations from the winning hook automatically.' },
              { t: 'Anomaly alerts', d: 'CTR drops 18% overnight? You get a Slack ping before your coffee is cold.' },
              { t: 'Plain-English Q&A', d: '"Why did CPA spike yesterday?" — get a real answer with the data behind it.' },
            ].map((row, i) => (
              <div key={row.t} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 0',
                borderTop: i === 0 ? '1px solid var(--border-1)' : 'none',
                borderBottom: '1px solid var(--border-1)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(8px)',
                transition: `opacity .6s var(--ease-out) ${i * 90}ms, transform .6s var(--ease-out) ${i * 90}ms`,
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                  background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Geist'", fontWeight: 800, fontSize: 13,
                }}>✓</span>
                <div>
                  <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 16, color: 'var(--ff-ink)', letterSpacing: '-0.01em' }}>{row.t}</div>
                  <div style={{ marginTop: 4, fontFamily: "'Geist'", fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)' }}>{row.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ff-ai-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

window.AISection = AISection;
