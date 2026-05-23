/* global React, PricingHooks, PlatformGlyph */

const { useInView } = window.PricingHooks;

// ============================================================
// Features Overview — bento-style layout aligned with the 8 nav items.
// Each card ships its own micro-visualization so the section never
// reads as a wall of identical cards.
// ============================================================

// ----- Mini visualizations ------------------------------------------
function VizBulk() {
  // Big "launch grid" — a 10×6 grid of small squares, lime ones representing campaigns going live
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: 4, marginBottom: 6 }}>
        {Array.from({ length: 14 * 5 }).map((_, i) => {
          const lit = (i * 7 + 3) % 11 < 4;
          return (
            <span key={i} style={{
              aspectRatio: '1',
              borderRadius: 2,
              background: lit ? 'var(--ff-lime)' : 'rgba(23,23,23,0.06)',
              transition: 'background .3s var(--ease-out)',
            }}/>
          );
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Live · 247 sets</span>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-rich)', fontWeight: 700, letterSpacing: '0.1em' }}>● PUSHING</span>
      </div>
    </div>
  );
}

function VizCreative() {
  // Creative variations — colored squares + AI sparkle
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Geist'", fontWeight: 800, fontSize: 13 }}>★</span>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Generating 12 of 40</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        {[
          'linear-gradient(135deg, #FFE8D9, #FFB37D)',
          'linear-gradient(135deg, rgba(195,235,66,0.5), #C3EB42)',
          'linear-gradient(135deg, #E0F0FF, #7AB8F5)',
          'linear-gradient(135deg, #FFE8F0, #F57AB8)',
          'linear-gradient(135deg, rgba(23,23,23,0.04), rgba(23,23,23,0.18))',
          'linear-gradient(135deg, #E8FFE0, #8FB821)',
          'linear-gradient(135deg, rgba(195,235,66,0.3), rgba(195,235,66,0.6))',
          'linear-gradient(135deg, #FAF9F4, #E5E5DF)',
        ].map((bg, i) => (
          <div key={i} style={{ aspectRatio: '1', borderRadius: 6, background: bg, border: '1px solid rgba(0,0,0,0.05)' }}/>
        ))}
      </div>
    </div>
  );
}

function VizAutomation() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
      <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Rules · 24/7</div>
      {[
        ['IF CTR < 1.2%',  'pause',     'rgba(254,45,45,0.18)', '#FE2D2D'],
        ['IF ROAS > 3.5×', 'scale +20%', 'rgba(195,235,66,0.22)', 'var(--ff-rich)'],
        ['IF CPA > $8',    'reduce -50%', 'rgba(23,23,23,0.06)', 'var(--ff-ink)'],
      ].map(([cond, act, bg, color], i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '7px 10px', borderRadius: 6,
          background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
          fontFamily: "'Geist Mono'", fontSize: 10.5, color: 'var(--ff-ink)',
        }}>
          <span style={{ flex: 1 }}>{cond}</span>
          <span style={{ padding: '2px 7px', borderRadius: 4, background: bg, color, fontWeight: 700, fontSize: 9.5, letterSpacing: '0.06em' }}>{act}</span>
        </div>
      ))}
    </div>
  );
}

function VizCopilot() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--ff-ink)', color: 'var(--ff-lime)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Geist'", fontWeight: 800, fontSize: 14 }}>★</span>
        <span style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 13, color: 'var(--ff-ink)' }}>AI Co-Pilot</span>
        <span style={{ marginLeft: 'auto', fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-rich)', fontWeight: 700, letterSpacing: '0.1em' }}>● ACTIVE</span>
      </div>
      <div style={{
        background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
        borderRadius: 10, padding: '12px 14px',
        fontFamily: "'Geist'", fontSize: 12.5, lineHeight: 1.5, color: 'var(--ff-ink)',
      }}>
        UGC-Batch-12 is at <strong style={{ color: 'var(--ff-rich)' }}>5.8× ROAS</strong>. Shift $400/day from iOS-Lookalike-v3?
        <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
          <span style={{ padding: '4px 10px', borderRadius: 5, background: 'var(--ff-lime)', color: 'var(--ff-ink)', fontFamily: "'Geist'", fontWeight: 700, fontSize: 11 }}>Yes, do it</span>
          <span style={{ padding: '4px 10px', borderRadius: 5, background: 'transparent', color: 'var(--fg-2)', border: '1px solid var(--border-1)', fontFamily: "'Geist'", fontWeight: 600, fontSize: 11 }}>Skip</span>
        </div>
      </div>
    </div>
  );
}

function VizReporting() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {['meta','tiktok','newsbreak'].map(g => <PlatformGlyph key={g} name={g} size={18}/>)}
        <span style={{ flex: 1 }}/>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-rich)', fontWeight: 700, letterSpacing: '0.1em' }}>● ALL SYNCED</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {[
          ['$184K', 'Spend', '+12%'],
          ['4.2×', 'ROAS', '+0.4'],
          ['$12', 'CPA', '-$3'],
        ].map(([v, l, d], i) => (
          <div key={i} style={{ padding: '10px 11px', borderRadius: 8, background: 'var(--ff-paper)', border: '1px solid var(--border-1)' }}>
            <div style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, color: 'var(--ff-ink)', letterSpacing: '-0.02em' }}>{v}</div>
            <div style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', letterSpacing: '0.1em', marginTop: 3 }}>{l}</div>
            <div style={{ fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-rich)', fontWeight: 700, marginTop: 3 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VizInsight() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Vertical: Supplements · 7d</div>
      <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
        <defs>
          <linearGradient id="insightGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C3EB42" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#C3EB42" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0,50 L25,46 L50,38 L75,40 L100,28 L125,22 L150,14 L175,10 L200,4 L200,60 L0,60 Z" fill="url(#insightGrad)"/>
        <path d="M0,50 L25,46 L50,38 L75,40 L100,28 L125,22 L150,14 L175,10 L200,4" fill="none" stroke="#8FB821" strokeWidth="2" strokeLinecap="round"/>
        {[[100,28],[150,14],[200,4]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="3" fill="#C3EB42" stroke="#171717" strokeWidth="1.5"/>)}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.08em' }}>UGC hooks ↑</span>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-rich)', fontWeight: 700 }}>+24% trend</span>
      </div>
    </div>
  );
}

function VizLibrary() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
        {['Hero', 'UGC', 'Carousel', 'Lifestyle'].map((t, i) => (
          <span key={t} style={{
            padding: '3px 9px', borderRadius: 999,
            background: i === 1 ? 'var(--ff-lime)' : 'var(--ff-paper)',
            border: '1px solid var(--border-1)',
            fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 700, color: 'var(--ff-ink)', letterSpacing: '0.06em',
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
        {[
          'linear-gradient(135deg, #FFE8D9, #FFB37D)',
          'linear-gradient(135deg, #E8FFE0, #8FB821)',
          'linear-gradient(135deg, #E0F0FF, #7AB8F5)',
          'linear-gradient(135deg, #FFE8F0, #F57AB8)',
        ].map((bg, i) => (
          <div key={i} style={{ aspectRatio: '4/5', borderRadius: 5, background: bg, border: '1px solid rgba(0,0,0,0.05)' }}/>
        ))}
      </div>
    </div>
  );
}

function VizVideo() {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: 5, height: 60 }}>
        {[35, 70, 55, 88, 42, 30, 25, 22].map((h, i) => (
          <div key={i} style={{ flex: 1, height: '100%', position: 'relative', borderRadius: 4, background: '#171717', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: `${h}%`, background: 'var(--ff-lime)' }}/>
            {i === 1 && (
              <span style={{
                position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)',
                padding: '1px 5px', borderRadius: 3, background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist Mono'", fontSize: 8, fontWeight: 700, letterSpacing: '0.06em',
              }}>HOOK</span>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.1em' }}>0–3s</span>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.1em' }}>CTR 7.4%</span>
      </div>
    </div>
  );
}

// ----- Card primitive -----------------------------------------------
function FeatureCard({ feat, i, inView }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: feat.span ? `span ${feat.span}` : 'span 6',
        position: 'relative', overflow: 'hidden',
        background: 'var(--ff-paper)',
        border: `1.5px solid ${hov ? 'rgba(143,184,33,0.55)' : 'var(--border-1)'}`,
        borderRadius: 18,
        boxShadow: hov
          ? '0 24px 48px -20px rgba(143,184,33,0.18), 0 30px 56px -32px rgba(0,0,0,0.12)'
          : '0 6px 20px -14px rgba(0,0,0,0.08)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        opacity: inView ? 1 : 0,
        animation: inView ? `ffFadeUp .65s var(--ease-out) ${i * 70}ms both` : 'none',
        transition: 'transform .35s var(--ease-out), border-color .25s, box-shadow .35s',
        display: 'flex', flexDirection: 'column',
      }}>
      {/* Visual mock — top portion */}
      <div style={{
        position: 'relative', height: 200, overflow: 'hidden',
        background: feat.mockBg || 'var(--ff-cream)',
        borderBottom: '1px solid var(--border-1)',
      }}>
        {feat.viz && <feat.viz/>}
      </div>
      {/* Text — bottom portion */}
      <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{
          fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ff-mute)',
        }}>{feat.label}</div>
        <h3 style={{
          margin: '8px 0 8px',
          fontFamily: "'Geist'", fontWeight: 800,
          fontSize: 19, letterSpacing: '-0.015em', color: 'var(--ff-ink)',
        }}>{feat.title}</h3>
        <p style={{
          margin: 0, fontFamily: "'Geist'", fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)',
          flex: 1,
        }}>{feat.body}</p>
        <a href={feat.href} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          marginTop: 16, fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          color: hov ? 'var(--ff-rich)' : 'var(--ff-ink)',
          textDecoration: 'none',
          transition: 'color .2s, gap .25s var(--ease-out)',
        }}>
          Learn more
          <span style={{ display: 'inline-block', transform: hov ? 'translateX(2px)' : 'translateX(0)', transition: 'transform .25s var(--ease-out)' }}>→</span>
        </a>
      </div>
    </div>
  );
}

// ----- Feature data — matches the 8 nav items exactly ---------------
const FEATURES = [
  { label: 'Launch',   title: 'Bulk Campaign Launch',       body: '200+ ad sets live in a single operation. Cross-platform naming, budgets, and creative mappings handled.',                                                  href: '#bulk',       viz: VizBulk,        mockBg: 'var(--ff-cream)',           span: 8 },
  { label: 'Generate', title: 'Creative Generation',         body: '10× ad variations — images, headlines, copy — all from one brief and a winner.',                                                                          href: '#gen',        viz: VizCreative,    mockBg: 'rgba(195,235,66,0.16)',    span: 4 },
  { label: 'AI',       title: 'Co-Pilot',                    body: 'Suggests optimizations, drafts briefs, answers questions in plain English. Always-on, never on PTO.',                                                     href: '#copilot',    viz: VizCopilot,     mockBg: 'rgba(195,235,66,0.16)',    span: 6 },
  { label: 'Operate',  title: 'Automation',                  body: 'Auto-pause losers. Auto-scale winners. 24/7. Set the rules once.',                                                                                         href: '#automation', viz: VizAutomation,  mockBg: 'var(--ff-cream)',           span: 6 },
  { label: 'See',      title: 'Multi Ad Account Reporting',  body: 'Every account. Every platform. One clean view. Cross-brand totals, performance trees, exportable.',                                                       href: '#reporting',  viz: VizReporting,   mockBg: 'var(--ff-cream)',           span: 6 },
  { label: 'Watch',    title: 'Industry Insights',           body: 'Trending creatives and benchmarks across your vertical. Anonymous data refreshed weekly.',                                                                href: '#insights',   viz: VizInsight,     mockBg: 'var(--ff-paper)',           span: 6 },
  { label: 'Organize', title: 'Creative Library',            body: 'Tag, search, and version every creative your team ships. Never lose a winner.',                                                                            href: '#library',    viz: VizLibrary,     mockBg: 'var(--ff-cream)',           span: 6 },
  { label: 'Analyze',  title: 'Video Sage',                  body: 'Frame-by-frame breakdown of your video creative. Hook strength, retention curves, copycat detection.',                                                    href: '#video',      viz: VizVideo,       mockBg: 'rgba(23,23,23,0.04)',      span: 6 },
];

function BenefitsGrid() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.05, once: true });
  return (
    <section ref={ref} id="features" style={{ background: 'var(--ff-paper)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Core Features</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            Everything you need to win at <span style={{ color: 'var(--ff-rich)' }}>performance marketing</span>.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 620, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Eight tools, one workflow. Each one earns its place on the nav.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 18,
        }} className="ff-bento-grid">
          {FEATURES.map((f, i) => <FeatureCard key={f.title} feat={f} i={i} inView={inView}/>)}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .ff-bento-grid > div { grid-column: span 6 !important; }
        }
        @media (max-width: 700px) {
          .ff-bento-grid > div { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}

window.BenefitsGrid = BenefitsGrid;
