/* global React, PlatformGlyph, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// Platform card — big faded letter behind, hover lifts + lime glow
// ============================================================
function PlatformCard({ glyph, letter, name, blurb, cta, ctaLink, color, index }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });
  const [hov, setHov] = React.useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--ff-paper)',
        border: `1.5px solid ${hov ? 'rgba(143,184,33,0.6)' : 'var(--border-1)'}`,
        borderRadius: 18, padding: '32px 30px',
        boxShadow: hov
          ? '0 24px 48px -18px rgba(143,184,33,0.22), 0 36px 72px -36px rgba(0,0,0,0.12)'
          : '0 8px 24px -16px rgba(0,0,0,0.1)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform .35s var(--ease-out), border-color .25s var(--ease-out), box-shadow .35s var(--ease-out)',
        opacity: inView ? 1 : 0,
        animation: inView ? `ffFadeUp .7s var(--ease-out) ${index * 90}ms both` : 'none',
        minHeight: 280,
      }}
    >
      {/* Drifting big letter — fades in on view, slow drift always */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: -24, bottom: -34,
        fontFamily: "'Geist'", fontWeight: 900, fontSize: 220, lineHeight: 0.85,
        color: color, opacity: hov ? 0.18 : 0.1,
        transform: hov ? 'translate(-8px,-6px) rotate(-2deg)' : 'translate(0,0) rotate(0deg)',
        transition: 'transform .8s var(--ease-out), opacity .35s var(--ease-out)',
        pointerEvents: 'none',
        animation: 'ffLetterDrift 14s ease-in-out infinite alternate',
      }}>{letter}</div>

      <div style={{
        width: 56, height: 56, borderRadius: 12,
        background: 'var(--ff-cream)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform .4s var(--ease-out), background .25s var(--ease-out)',
        transform: hov ? 'rotate(-6deg) scale(1.05)' : 'rotate(0deg) scale(1)',
        position: 'relative', zIndex: 1,
      }}>
        <PlatformGlyph name={glyph} size={32}/>
      </div>

      <h3 style={{
        marginTop: 22, marginBottom: 12, fontFamily: "'Geist'", fontWeight: 800,
        fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ff-ink)', position: 'relative', zIndex: 1,
      }}>{name}</h3>
      <p style={{
        margin: 0, fontFamily: "'Geist'", fontSize: 14.5, lineHeight: 1.55,
        color: 'var(--fg-2)', maxWidth: 360, position: 'relative', zIndex: 1,
      }}>{blurb}</p>
      <a href={ctaLink} style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        marginTop: 18, fontFamily: "'Geist'", fontWeight: 700, fontSize: 14,
        color: hov ? 'var(--ff-rich)' : 'var(--ff-ink)', textDecoration: 'none', position: 'relative', zIndex: 1,
        transition: 'color .2s var(--ease-out), gap .25s var(--ease-out)',
      }}>
        {cta}
        <span style={{
          width: 22, height: 22, borderRadius: 999,
          background: hov ? 'var(--ff-lime)' : 'var(--ff-cream)',
          color: 'var(--ff-ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s var(--ease-out), transform .25s var(--ease-out)',
          transform: hov ? 'translateX(2px)' : 'translateX(0)',
        }}>→</span>
      </a>
    </div>
  );
}

function PlatformsSection() {
  return (
    <section id="platforms" style={{ background: 'var(--ff-cream)', padding: '96px 24px', position: 'relative' }}>
      <style>{`
        @keyframes ffLetterDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-16px); }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Platforms</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            One dashboard for <span style={{ color: 'var(--ff-rich)' }}>every</span> ad platform.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 560, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Manage Meta, TikTok, and NewsBreak from a single workspace. No tab-switching.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ff-platform-grid">
          <PlatformCard
            glyph="meta" letter="M" color="#0064E0"
            name="Meta Ads Automation"
            blurb="Bulk-launch Facebook & Instagram campaigns. AI creatives, automated rules, cross-account management."
            cta="Explore Meta" ctaLink="#meta" index={0}
          />
          <PlatformCard
            glyph="tiktok" letter="T" color="#FE2C55"
            name="TikTok Ads Automation"
            blurb="Scale TikTok with bulk creation, creative testing, and performance-based automation."
            cta="Explore TikTok" ctaLink="#tiktok" index={1}
          />
          <PlatformCard
            glyph="newsbreak" letter="N" color="#FE2D2D"
            name="NewsBreak"
            blurb="Native NewsBreak support — one of the few platforms that has it. Launch alongside Meta and TikTok."
            cta="Explore NewsBreak" ctaLink="#newsbreak" index={2}
          />
        </div>

        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <span style={{ width: 24, height: 1, background: 'var(--border-1)' }}/>
          <span style={{
            fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>● All unified</span>
          <span style={{ width: 24, height: 1, background: 'var(--border-1)' }}/>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ff-platform-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.PlatformsSection = PlatformsSection;
