/* global React, PlanCard */

const { GROWTH_PLANS, AI_PLANS } = window.PRICING_DATA;

// ============================================================
// Top toggle: AI / Growth — light pill-style segmented control
// ============================================================
function TopToggle({ value, onChange }) {
  return (
    <div style={{
      display: 'inline-flex', position: 'relative',
      background: 'var(--ff-paper)',
      border: '1px solid var(--border-1)', borderRadius: 999,
      padding: 5,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    }}>
      <span style={{
        position: 'absolute', top: 5, bottom: 5, width: 'calc(50% - 5px)',
        left: value === 'growth' ? 'calc(50% + 0px)' : 5,
        background: 'var(--ff-lime)', borderRadius: 999,
        transition: 'left .35s var(--ease-out)',
        boxShadow: '0 6px 18px -6px rgba(143,184,33,0.55)',
      }}/>
      {[['ai','AI'], ['growth','Growth']].map(([k, label]) => (
        <button key={k} onClick={() => onChange(k)} style={{
          position: 'relative', zIndex: 1,
          padding: '10px 36px', border: 'none', background: 'transparent',
          fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
          color: value === k ? 'var(--ff-ink)' : 'var(--ff-mute)',
          transition: 'color .25s var(--ease-out)',
          letterSpacing: '-0.005em',
        }}>{label}</button>
      ))}
    </div>
  );
}

// ============================================================
// Billing toggle: Monthly / Annual — light theme
// ============================================================
function BillingToggle({ value, onChange }) {
  const annual = value === 'annual';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
      <span style={{
        fontFamily: "'Geist'", fontWeight: 600, fontSize: 14,
        color: !annual ? 'var(--ff-ink)' : 'var(--ff-mute)',
        transition: 'color .2s var(--ease-out)',
      }}>Monthly</span>
      <button
        onClick={() => onChange(annual ? 'monthly' : 'annual')}
        aria-label="Toggle billing period"
        style={{
          position: 'relative', width: 54, height: 30, borderRadius: 999,
          background: annual ? 'var(--ff-ink)' : 'var(--ff-cream)',
          border: '1px solid ' + (annual ? 'var(--ff-ink)' : 'var(--border-1)'),
          cursor: 'pointer', padding: 0,
          transition: 'background .25s var(--ease-out), border-color .25s var(--ease-out)',
        }}
      >
        <span style={{
          position: 'absolute', top: 3, left: annual ? 27 : 3,
          width: 22, height: 22, borderRadius: 999,
          background: annual ? 'var(--ff-lime)' : 'var(--ff-paper)',
          transition: 'left .28s var(--ease-out), background .25s var(--ease-out)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}/>
      </button>
      <span style={{
        fontFamily: "'Geist'", fontWeight: 600, fontSize: 14,
        color: annual ? 'var(--ff-ink)' : 'var(--ff-mute)',
        transition: 'color .2s var(--ease-out)',
      }}>Annual</span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 11px', borderRadius: 999,
        background: 'var(--ff-lime)', color: 'var(--ff-ink)',
        fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
        boxShadow: '0 4px 12px -3px rgba(143,184,33,0.4)',
      }}>
        Save 2 months
      </span>
    </div>
  );
}

// ============================================================
// Subtle animated background — very faint grid + drifting lime blobs
// (Light theme — much softer than the dark version)
// ============================================================
function AnimatedBg() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
    }}>
      {/* Faint grid */}
      <div style={{
        position: 'absolute', inset: '-20% -10% -10% -10%',
        backgroundImage: `linear-gradient(rgba(23,23,23,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(23,23,23,0.04) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)',
        animation: 'ffGridDrift 60s linear infinite',
      }}/>
      {/* Drifting lime mesh blobs */}
      <div style={{
        position: 'absolute', width: 720, height: 720, borderRadius: '50%',
        top: '-10%', left: '8%',
        background: 'radial-gradient(circle, rgba(195,235,66,0.32) 0%, rgba(195,235,66,0.08) 35%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'ffMesh1 26s ease-in-out infinite alternate',
      }}/>
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        bottom: '-12%', right: '6%',
        background: 'radial-gradient(circle, rgba(143,184,33,0.22) 0%, rgba(195,235,66,0.05) 40%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'ffMesh2 32s ease-in-out infinite alternate',
      }}/>
    </div>
  );
}

// ============================================================
// Pricing section — LIGHT theme orchestrator
// ============================================================
function PricingSection() {
  const [tab, setTab] = React.useState('growth');
  const [billing, setBilling] = React.useState('monthly');
  const [morphKey, setMorphKey] = React.useState(0);

  const plans = tab === 'growth' ? GROWTH_PLANS : AI_PLANS;

  const onTab = (next) => {
    if (next === tab) return;
    setTab(next);
    setMorphKey(k => k + 1);
  };

  return (
    <section id="pricing" style={{
      position: 'relative',
      background: 'var(--ff-cream)',
      color: 'var(--ff-ink)',
      padding: '72px 24px 96px',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes ffPulseLight {
          0%, 100% { box-shadow:
            0 0 0 1px rgba(195,235,66,0.25),
            0 24px 60px -18px rgba(143,184,33,0.32),
            0 50px 90px -40px rgba(0,0,0,0.12);
          }
          50% { box-shadow:
            0 0 0 1px rgba(195,235,66,0.45),
            0 28px 80px -14px rgba(143,184,33,0.5),
            0 50px 90px -40px rgba(0,0,0,0.12);
          }
        }
        @keyframes ffGridDrift {
          from { transform: translate(0,0); }
          to   { transform: translate(64px,64px); }
        }
        @keyframes ffMesh1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(180px,80px) scale(1.15); }
        }
        @keyframes ffMesh2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-160px,-60px) scale(1.2); }
        }
        @keyframes ffMorph {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ff-card-morph { animation: ffMorph .45s var(--ease-out) both; }
      `}</style>

      <AnimatedBg/>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Pricing</span>
          <h1 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.04, letterSpacing: '-0.03em',
            color: 'var(--ff-ink)',
          }}>
            Simple, transparent pricing.
          </h1>
          <p style={{
            margin: '0 auto', maxWidth: 580, fontFamily: "'Geist'", fontSize: 17, lineHeight: 1.55,
            color: 'var(--fg-2)',
          }}>
            Scale as you grow. No hidden fees. 14-day free trial on all plans.
          </p>
        </div>

        {/* Toggles */}
        <div style={{ marginBottom: 56, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }} className="ff-pricing-toggle-row">
          <TopToggle value={tab} onChange={onTab}/>
          <BillingToggle value={billing} onChange={setBilling}/>
        </div>

        {/* Cards */}
        <div
          key={`grid-${tab}`}
          className="ff-card-grid"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22,
            alignItems: 'stretch',
            paddingTop: 14,
          }}
        >
          {plans.map((p, i) => (
            <div key={p.id} className="ff-card-morph" style={{ animationDelay: `${i * 70}ms` }}>
              <PlanCard plan={p} billing={billing} mountKey={morphKey}/>
            </div>
          ))}
        </div>

        {/* Bottom cross-link */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button
            onClick={() => onTab(tab === 'growth' ? 'ai' : 'growth')}
            style={{
              background: 'transparent', border: 'none',
              fontFamily: "'Geist'", fontWeight: 600, fontSize: 15,
              color: 'var(--ff-mute)', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            {tab === 'growth' ? 'Just need creative generation?' : 'Need full campaign automation?'}
            <span style={{ color: 'var(--ff-rich)', fontWeight: 700, borderBottom: '1px solid rgba(143,184,33,0.4)' }}>
              See {tab === 'growth' ? 'AI' : 'Growth'} plans →
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .ff-pricing-toggle-row { flex-direction: column !important; gap: 12px !important; }
        }
        @media (max-width: 960px) {
          .ff-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.PricingSection = PricingSection;
