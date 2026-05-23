/* global React, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// PricingTeaser — "Grow Your Business With FabFunnel"
// 3 compact plan cards that link out to the full pricing page.
// ============================================================
const TEASER_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'For media buyers stepping into automation.',
    price: '$349',
    cadence: '/ month',
    bullets: ['Up to 8 ad accounts', 'Bulk launcher (manual)', 'Meta · TikTok · NewsBreak', 'Email support'],
    cta: 'Start free trial',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    blurb: 'For performance teams scaling across platforms.',
    price: '$599',
    cadence: '/ month',
    bullets: ['Up to 15 ad accounts', 'Bulk launcher (automated)', 'AI Co-pilot (always on)', 'Priority support'],
    cta: 'Start free trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'For agencies and high-volume operators.',
    price: 'Custom',
    cadence: 'talk to sales',
    bullets: ['Unlimited ad accounts', 'Multi-account reporting', 'Dedicated CSM', 'SLA-backed onboarding'],
    cta: 'Book a call',
    popular: false,
  },
];

function TeaserCard({ p, i, inView }) {
  const popular = p.popular;
  return (
    <div style={{
      position: 'relative',
      background: popular ? 'rgba(195,235,66,0.16)' : 'var(--ff-paper)',
      border: popular ? '1.5px solid var(--ff-rich)' : '1.5px solid var(--border-1)',
      borderRadius: 18,
      padding: '32px 28px 28px',
      boxShadow: popular
        ? '0 24px 56px -20px rgba(143,184,33,0.36), 0 30px 60px -30px rgba(0,0,0,0.12)'
        : '0 8px 24px -16px rgba(0,0,0,0.08)',
      transform: inView ? 'translateY(0)' : 'translateY(12px)',
      opacity: inView ? 1 : 0,
      transition: `transform .65s var(--ease-out) ${i * 80}ms, opacity .65s var(--ease-out) ${i * 80}ms`,
      display: 'flex', flexDirection: 'column',
    }}>
      {popular && (
        <span style={{
          position: 'absolute', top: -12, right: 20,
          padding: '5px 11px', borderRadius: 999,
          background: 'var(--ff-ink)', color: 'var(--ff-lime)',
          fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>★ Most popular</span>
      )}
      <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ff-mute)' }}>
        {p.name}
      </div>
      <p style={{ margin: '8px 0 18px', fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg-2)', minHeight: 40 }}>
        {p.blurb}
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <div style={{ fontFamily: "'Geist'", fontWeight: 900, fontSize: 44, letterSpacing: '-0.03em', color: 'var(--ff-ink)' }}>
          {p.price}
        </div>
        <div style={{ fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-mute)' }}>{p.cadence}</div>
      </div>
      <div style={{ height: 1, background: 'var(--border-1)', margin: '22px 0 18px' }}/>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {p.bullets.map(b => (
          <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Geist'", fontSize: 13.5, color: 'var(--ff-ink)' }}>
            <span style={{
              width: 16, height: 16, borderRadius: 4, flexShrink: 0,
              background: popular ? 'var(--ff-rich)' : 'var(--ff-cream)',
              color: popular ? 'var(--ff-paper)' : 'var(--ff-rich)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Geist'", fontSize: 10, fontWeight: 800,
              border: popular ? 'none' : '1px solid var(--border-1)',
            }}>✓</span>
            {b}
          </li>
        ))}
      </ul>
      <a href={(window.ROUTES && window.ROUTES.pricing.href) || 'pricing.html'} style={{ textDecoration: 'none' }}>
        <button style={{
          marginTop: 24, width: '100%',
          padding: '12px 16px', borderRadius: 10, border: popular ? 'none' : '1.5px solid var(--ff-ink)',
          background: popular ? 'var(--ff-lime)' : 'transparent',
          color: 'var(--ff-ink)',
          fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: popular ? '0 12px 28px -10px rgba(143,184,33,0.55)' : 'none',
        }}>
          {p.cta}
          <span style={{
            width: 22, height: 22, borderRadius: 5,
            background: popular ? 'var(--ff-ink)' : 'var(--ff-lime)',
            color: popular ? 'var(--ff-lime)' : 'var(--ff-ink)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
          }}>›</span>
        </button>
      </a>
    </div>
  );
}

function PricingTeaser() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.15, once: true });
  return (
    <section ref={ref} id="grow" style={{ background: 'var(--ff-cream)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Pricing</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            Grow your business with <span style={{ color: 'var(--ff-rich)' }}>FabFunnel</span>.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 580, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Three plans. 14-day free trial. Cancel anytime. No credit card required to start.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'stretch' }} className="ff-grow-grid">
          {TEASER_PLANS.map((p, i) => <TeaserCard key={p.id} p={p} i={i} inView={inView}/>)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href={(window.ROUTES && window.ROUTES.pricing.href) || 'pricing.html'} style={{
            fontFamily: "'Geist'", fontWeight: 600, fontSize: 14, color: 'var(--ff-mute)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            Compare every plan, side by side
            <span style={{ color: 'var(--ff-rich)', fontWeight: 700, borderBottom: '1px solid rgba(143,184,33,0.4)' }}>See full pricing →</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .ff-grow-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

window.PricingTeaser = PricingTeaser;
