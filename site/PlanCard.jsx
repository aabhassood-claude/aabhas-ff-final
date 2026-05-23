/* global React, PriceDisplay, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// Plan card — LIGHT theme. White surface, lime accents.
// Pro card keeps the lime border + glow + pulse from the dark version.
// ============================================================
function PlanCard({ plan, billing, mountKey }) {
  const cardRef = React.useRef(null);
  const inView = useInView(cardRef, { threshold: 0.25, once: true });

  const amount = billing === 'annual' ? plan.annual : plan.monthly;
  const isPopular = !!plan.popular;
  const outline = plan.ctaKind === 'outline';

  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'var(--ff-paper)',
        border: isPopular
          ? '1.5px solid var(--ff-rich)'
          : `1.5px solid ${hovered ? 'rgba(143,184,33,0.6)' : 'var(--border-1)'}`,
        borderRadius: 20,
        padding: '32px 28px',
        display: 'flex', flexDirection: 'column',
        boxShadow: isPopular
          ? `0 0 0 1px rgba(195,235,66,0.25),
             0 24px 60px -18px rgba(143,184,33,0.32),
             0 50px 90px -40px rgba(0,0,0,0.12)`
          : hovered
            ? '0 24px 48px -18px rgba(143,184,33,0.22), 0 36px 72px -36px rgba(0,0,0,0.12)'
            : '0 14px 36px -22px rgba(0,0,0,0.1)',
        transform: hovered && !isPopular ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform .35s var(--ease-out), border-color .25s var(--ease-out), box-shadow .35s var(--ease-out)',
        animation: isPopular ? 'ffPulseLight 4.5s ease-in-out infinite' : 'none',
      }}
    >
      {isPopular && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ff-ink)', color: 'var(--ff-lime)',
          padding: '6px 14px', borderRadius: 999,
          fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          boxShadow: '0 10px 22px -6px rgba(0,0,0,0.25)',
          whiteSpace: 'nowrap',
        }}>★ Most Popular</div>
      )}

      {/* Eyebrow + blurb */}
      <div style={{
        fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
        color: isPopular ? 'var(--ff-rich)' : 'var(--ff-mute)', textTransform: 'uppercase',
      }}>{plan.name}</div>
      <p style={{
        marginTop: 12, marginBottom: 0,
        fontFamily: "'Geist'", fontSize: 14, lineHeight: 1.55,
        color: 'var(--fg-2)',
        minHeight: 44,
      }}>{plan.blurb}</p>

      {/* Price */}
      <div style={{ marginTop: 26 }}>
        <PriceDisplay
          key={`${mountKey}-${plan.id}-${billing}`}
          amount={amount}
          customLabel={plan.customLabel}
          customSub={plan.customSub}
          inView={inView}
          theme="light"
        />
      </div>

      {/* Trial pill */}
      <div style={{
        marginTop: 22,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 14px',
        background: 'rgba(195,235,66,0.14)',
        border: '1px solid rgba(143,184,33,0.4)',
        borderRadius: 10,
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 8, height: 8, borderRadius: 999, background: 'var(--ff-rich)',
            boxShadow: '0 0 0 4px rgba(143,184,33,0.18)',
          }}/>
          <span style={{ fontFamily: "'Geist'", fontWeight: 600, fontSize: 13, color: 'var(--ff-ink)' }}>{plan.trial.title}</span>
        </div>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, color: 'var(--ff-mute)', letterSpacing: '0.04em' }}>{plan.trial.meta}</span>
      </div>

      {/* CTA */}
      <button
        style={{
          marginTop: 14,
          padding: '14px 18px', borderRadius: 12,
          border: outline ? '1.5px solid var(--ff-ink)' : 'none',
          background: outline ? 'transparent' : 'var(--ff-lime)',
          color: 'var(--ff-ink)',
          fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, letterSpacing: '-0.005em',
          cursor: 'pointer', width: '100%',
          transition: 'background .15s var(--ease-out), filter .15s var(--ease-out)',
          boxShadow: outline ? 'none' : '0 10px 24px -8px rgba(143,184,33,0.5)',
        }}
        onMouseEnter={e => {
          if (outline) { e.currentTarget.style.background = 'var(--ff-ink)'; e.currentTarget.style.color = 'var(--ff-paper)'; }
          else e.currentTarget.style.filter = 'brightness(1.04)';
        }}
        onMouseLeave={e => {
          if (outline) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ff-ink)'; }
          else e.currentTarget.style.filter = 'brightness(1)';
        }}
      >{plan.cta}</button>

      {/* Trailing line */}
      <div style={{
        marginTop: 14, fontFamily: "'Geist'", fontSize: 12.5, lineHeight: 1.5,
        color: 'var(--ff-mute)', textAlign: 'center',
      }}>{plan.trailing}</div>

      {/* Credit pill */}
      <div style={{ marginTop: 18, display: 'flex' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '7px 14px', borderRadius: 999,
          background: plan.creditPillStyle === 'filled' ? 'rgba(195,235,66,0.18)' : 'transparent',
          border: '1px solid rgba(143,184,33,0.55)',
          color: 'var(--ff-rich)',
          fontFamily: "'Geist'", fontWeight: 600, fontSize: 12.5,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ff-rich)' }}/>
          {plan.creditPill}
        </span>
      </div>

      {/* Feature sections with staggered checkmarks */}
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
        {plan.sections.map((sec, sIdx) => (
          <div key={sec.name}>
            <div style={{
              fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
              color: 'var(--ff-mute)', textTransform: 'uppercase', marginBottom: 10,
            }}>{sec.name}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {sec.items.map((item, iIdx) => {
                const delay = inView ? `${(sIdx * 90 + iIdx * 60) + 200}ms` : '0ms';
                return (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(6px)',
                    transition: `opacity .45s var(--ease-out) ${delay}, transform .45s var(--ease-out) ${delay}`,
                    fontFamily: "'Geist'", fontSize: 14, color: 'var(--fg-2)',
                  }}>
                    <svg viewBox="0 0 20 20" width="18" height="18" style={{ flexShrink: 0, marginTop: 1 }}>
                      <circle cx="10" cy="10" r="9" fill="rgba(195,235,66,0.25)" stroke="rgba(143,184,33,0.7)" strokeWidth="1"/>
                      <path d="M6 10.5L9 13.5L14.5 7.5" fill="none" stroke="#5C7A14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Dashed footer */}
      <div style={{
        marginTop: 24, paddingTop: 18,
        borderTop: '1px dashed var(--border-1)',
        fontFamily: "'Geist'", fontSize: 12, lineHeight: 1.55, color: 'var(--ff-mute)',
      }}>{plan.footer}</div>
    </div>
  );
}

window.PlanCard = PlanCard;
