/* global React, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// How It Works — sequence of 3 step cards with scroll activation
// + connecting lime line that draws in
// ============================================================
function HowItWorks() {
  const sectionRef = React.useRef(null);
  const sectionInView = useInView(sectionRef, { threshold: 0.2, once: true });
  const stepRefs = [React.useRef(null), React.useRef(null), React.useRef(null)];
  const [hovered, setHovered] = React.useState(-1);

  const steps = [
    {
      n: 1,
      icon: (
        <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="10" r="4"/>
          <path d="M6 22c0-4 4-6 8-6s8 2 8 6"/>
        </svg>
      ),
      title: 'Connect Accounts',
      body: "Connect once. FabFunnel syncs everything — your campaigns, your creatives, your spend data across Meta, TikTok, and NewsBreak. Instantly.",
    },
    {
      n: 2,
      icon: (
        <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22 L4 18 L9 18 L9 14 L14 14 L14 10 L19 10 L19 6 L24 6"/>
          <path d="M20 6 L24 6 L24 10"/>
        </svg>
      ),
      title: 'Launch at Scale',
      body: "Pick your creatives, define your parameters, and press go. FabFunnel's Bulk Launcher pushes 200+ campaigns live in under 2 minutes. Your team will think you hired someone.",
    },
    {
      n: 3,
      icon: (
        <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="3"/>
          <path d="M14 5 L14 8 M14 20 L14 23 M5 14 L8 14 M20 14 L23 14 M7.6 7.6 L9.7 9.7 M18.3 18.3 L20.4 20.4 M7.6 20.4 L9.7 18.3 M18.3 9.7 L20.4 7.6"/>
        </svg>
      ),
      title: 'Automate, Optimize & Scale',
      body: "Set your rules once. FabFunnel handles the rest — pausing what's bleeding money, scaling what's printing it, and reporting everything in real time.",
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" style={{ background: 'var(--ff-cream)', padding: '96px 24px' }}>
      <style>{`
        @keyframes ffStepNumPop {
          0% { transform: scale(1); }
          40% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>How It Works</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            From zero to <span style={{ color: 'var(--ff-rich)' }}>scaled</span> in <RotatingScaleWord/>.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 560, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Connect and start launching within the hour.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Connecting line behind cards */}
          <svg className="ff-how-line" viewBox="0 0 1000 4" preserveAspectRatio="none"
            style={{ position: 'absolute', top: '20%', left: '11%', right: '11%', width: '78%', height: 4, zIndex: 0 }}
          >
            <line x1="0" y1="2" x2="1000" y2="2" stroke="var(--border-1)" strokeWidth="2" strokeDasharray="4 6"/>
            <line x1="0" y1="2" x2="1000" y2="2" stroke="#C3EB42" strokeWidth="2.5"
              strokeDasharray="1000" strokeDashoffset={sectionInView ? 0 : 1000}
              style={{ transition: 'stroke-dashoffset 2s var(--ease-out) .2s' }}/>
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, position: 'relative', zIndex: 1 }} className="ff-how-grid">
            {steps.map((s, i) => {
              const isActive = hovered === i;
              return (
                <div key={s.n} ref={stepRefs[i]}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                  style={{
                  background: isActive ? 'rgba(195,235,66,0.18)' : 'var(--ff-paper)',
                  border: `1.5px solid ${isActive ? 'rgba(143,184,33,0.7)' : 'var(--border-1)'}`,
                  borderRadius: 18, padding: '28px 24px',
                  boxShadow: isActive
                    ? '0 20px 48px -22px rgba(143,184,33,0.32), 0 30px 60px -30px rgba(0,0,0,0.1)'
                    : '0 8px 24px -16px rgba(0,0,0,0.08)',
                  transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out), box-shadow .3s var(--ease-out), transform .3s var(--ease-out)',
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  cursor: 'default',
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView ? `ffFadeUp .7s var(--ease-out) ${i * 100}ms both` : 'none',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 999,
                    background: isActive ? 'var(--ff-lime)' : 'var(--ff-cream)',
                    color: 'var(--ff-ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Geist'", fontWeight: 800, fontSize: 13,
                    transition: 'background .35s var(--ease-out)',
                    animation: isActive ? 'ffStepNumPop .55s var(--ease-out)' : 'none',
                  }}>{s.n}</div>
                  <div style={{
                    marginTop: 24, width: 48, height: 48, borderRadius: 12,
                    background: isActive ? 'var(--ff-ink)' : 'var(--ff-cream)',
                    color: isActive ? 'var(--ff-lime)' : 'var(--ff-mute)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background .35s var(--ease-out), color .35s var(--ease-out), transform .4s var(--ease-out)',
                    transform: isActive ? 'rotate(-6deg)' : 'rotate(0deg)',
                  }}>{s.icon}</div>
                  <h3 style={{
                    marginTop: 22, marginBottom: 10, fontFamily: "'Geist'", fontWeight: 800,
                    fontSize: 20, letterSpacing: '-0.02em', color: 'var(--ff-ink)',
                  }}>{s.title}</h3>
                  <p style={{ margin: 0, fontFamily: "'Geist'", fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)' }}>{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={(typeof window !== 'undefined' && window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} style={{ textDecoration: 'none' }}><button style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 16px 12px 22px', borderRadius: 10, border: 'none',
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 15, cursor: 'pointer',
            boxShadow: '0 12px 28px -10px rgba(143,184,33,0.5)',
          }}>
            Request A Demo
            <span style={{
              background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              width: 26, height: 26, borderRadius: 6,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
            }}>›</span>
          </button></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ff-how-grid { grid-template-columns: 1fr !important; }
          .ff-how-line { display: none; }
        }
      `}</style>
    </section>
  );
}

// Local rotating word for "Three"
function RotatingScaleWord() {
  const words = ['three', 'minutes', 'days', 'one shift'];
  const [idx, setIdx] = React.useState(0);
  const prefersReducedMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []
  );
  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [prefersReducedMotion]);
  const longest = words.reduce((a, w) => w.length > a.length ? w : a, '');
  return (
    <span style={{
      position: 'relative', display: 'inline-block',
      minWidth: `${longest.length * 0.58}em`, height: '1.1em', lineHeight: 1.1, verticalAlign: 'baseline',
    }}>
      {words.map((w, i) => (
        <span key={w} style={{
          position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap',
          color: 'var(--ff-rich)',
          opacity: i === idx ? 1 : 0,
          transform: i === idx ? 'translateY(0)' : 'translateY(22%)',
          transition: 'opacity .5s var(--ease-out), transform .55s var(--ease-out)',
        }}>{w}</span>
      ))}
    </span>
  );
}

window.HowItWorks = HowItWorks;
