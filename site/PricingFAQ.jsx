/* global React */

const FAQS = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — every Growth and AI plan comes with a 14-day free trial. No credit card required. If Enterprise feels right, we set up a tailored trial sized to your scale.',
  },
  {
    q: 'Can I upgrade or downgrade any time?',
    a: 'Anytime. Upgrades take effect immediately and prorate against your remaining cycle. Downgrades take effect at the next renewal so you keep the credits you already paid for.',
  },
  {
    q: 'What\'s included in Genie credits?',
    a: 'Every AI generation — static creative, carousel variants, video analysis, copy — consumes credits. Each plan ships with a monthly allowance; if you blow through it, top-ups are flat and you can set a hard cap from billing settings.',
  },
  {
    q: 'How does annual billing work?',
    a: 'Annual billing locks in two months free vs monthly — the rate displayed when "Annual" is selected is the effective per-month price. You\'re invoiced once per year and can renew, pause, or cancel before the next cycle.',
  },
  {
    q: 'Do you offer partner / agency pricing?',
    a: 'Yes — Enterprise covers most agency setups, including multi-brand workspaces and shared credit pools. For high-volume reseller partnerships, talk to sales and we\'ll cut a custom deal.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'All major credit cards, ACH for US customers, and wire / invoice for annual contracts. Enterprise plans support net-30 and net-60 terms.',
  },
];

function FaqRow({ q, a, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const bodyRef = React.useRef(null);
  return (
    <div style={{
      borderBottom: '1px solid var(--border-1)',
      transition: 'background .2s var(--ease-out)',
      background: open ? 'rgba(195,235,66,0.06)' : 'transparent',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '22px 4px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: "'Geist'", fontWeight: 600, fontSize: 17, color: open ? 'var(--ff-rich)' : 'var(--ff-ink)',
          transition: 'color .2s var(--ease-out)', letterSpacing: '-0.01em',
        }}>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: 999, flexShrink: 0,
          border: '1px solid ' + (open ? 'rgba(143,184,33,0.55)' : 'var(--border-1)'),
          background: open ? 'rgba(195,235,66,0.22)' : 'var(--ff-paper)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all .2s var(--ease-out)',
        }}>
          <svg viewBox="0 0 14 14" width="14" height="14" style={{ transition: 'transform .25s var(--ease-out)', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            <line x1="7" y1="2" x2="7" y2="12" stroke={open ? '#5C7A14' : '#171717'} strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="2" y1="7" x2="12" y2="7" stroke={open ? '#5C7A14' : '#171717'} strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight + 'px' : '500px') : '0px',
        overflow: 'hidden',
        transition: 'max-height .35s var(--ease-out), opacity .25s var(--ease-out)',
        opacity: open ? 1 : 0,
      }}>
        <div ref={bodyRef} style={{
          padding: '0 50px 22px 4px', fontFamily: "'Geist'", fontSize: 15, lineHeight: 1.6,
          color: 'var(--fg-2)', maxWidth: 680,
        }}>{a}</div>
      </div>
    </div>
  );
}

function PricingFAQ() {
  return (
    <section style={{ background: 'var(--ff-paper)', padding: '88px 24px 120px', color: 'var(--ff-ink)', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }} className="ff-faq-grid">
          <div style={{ position: 'sticky', top: 100 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: 'var(--ff-lime)', color: 'var(--ff-ink)',
              fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>FAQ</span>
            <h2 style={{ margin: '18px 0 12px', fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.025em', color: 'var(--ff-ink)' }}>
              Pricing,<br/>answered.
            </h2>
            <p style={{ margin: 0, fontFamily: "'Geist'", fontSize: 15, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 320 }}>
              The most common questions on plans, credits, billing, and trials. Can't find what you need? <a href="#contact" style={{ color: 'var(--ff-rich)', textDecoration: 'none', borderBottom: '1px solid rgba(143,184,33,0.4)' }}>Talk to us</a>.
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => <FaqRow key={f.q} q={f.q} a={f.a} defaultOpen={i === 0}/>)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .ff-faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

window.PricingFAQ = PricingFAQ;
