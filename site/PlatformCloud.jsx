/* global React, PlatformGlyph, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// PlatformCloud — "Connect With 5+ Platforms"
// Strip of platform tiles. Hover lifts + reveals a description.
// ============================================================
const PLATFORMS = [
  { name: 'Meta',       glyph: 'meta',       desc: 'Facebook + Instagram. Bulk launch, creative testing, auto-rules.',  status: 'Native' },
  { name: 'TikTok',     glyph: 'tiktok',     desc: 'Bulk creation, video analysis, hook-based variations.',              status: 'Native' },
  { name: 'NewsBreak',  glyph: 'newsbreak',  desc: 'Native integration for traffic arbitrage at scale.',                  status: 'Native' },
  { name: 'Redtrack',   glyph: 'redtrack',   desc: 'Pixel-less attribution + click data, fully synced.',                  status: 'Tracking' },
  { name: 'Slack',      glyph: 'slack',      desc: 'Real-time alerts, daily digests, anomaly pings.',                     status: 'Alerts' },
  { name: 'Voluum',     glyph: 'voluum',     desc: 'Affiliate routing + cost-per-conversion mapping.',                    status: 'Tracking' },
];

function PlatformTile({ p, i, inView }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--ff-paper)',
        border: '1.5px solid var(--border-1)',
        borderRadius: 16,
        padding: '24px 22px',
        boxShadow: hov
          ? '0 18px 36px -14px rgba(143,184,33,0.16), 0 24px 48px -28px rgba(0,0,0,0.12)'
          : '0 4px 14px -10px rgba(0,0,0,0.06)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: hov ? 'rgba(143,184,33,0.55)' : 'var(--border-1)',
        opacity: inView ? 1 : 0,
        animation: inView ? `ffFadeUp .55s var(--ease-out) ${i * 60}ms both` : 'none',
        transition: 'transform .3s var(--ease-out), box-shadow .3s var(--ease-out), border-color .25s var(--ease-out)',
        display: 'flex', flexDirection: 'column', gap: 14, minHeight: 156,
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: 'var(--ff-cream)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .35s var(--ease-out)',
          transform: hov ? 'rotate(-6deg) scale(1.05)' : 'rotate(0)',
        }}>
          <PlatformGlyph name={p.glyph} size={26}/>
        </div>
        <span style={{
          padding: '3px 8px', borderRadius: 4,
          background: hov ? 'var(--ff-lime)' : 'var(--ff-cream)',
          color: 'var(--ff-ink)',
          fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          transition: 'background .25s var(--ease-out)',
        }}>● {p.status}</span>
      </div>
      <div>
        <div style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, letterSpacing: '-0.015em', color: 'var(--ff-ink)' }}>
          {p.name}
        </div>
        <p style={{ margin: '6px 0 0', fontFamily: "'Geist'", fontSize: 13.5, lineHeight: 1.5, color: 'var(--fg-2)' }}>
          {p.desc}
        </p>
      </div>
    </div>
  );
}

function PlatformCloud() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.15, once: true });
  return (
    <section ref={ref} id="connect" style={{ background: 'var(--ff-paper)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Integrations</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            Connect with <span style={{ color: 'var(--ff-rich)' }}>5+ platforms</span>.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 560, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Native integrations to your ad platforms and the tracking stack you already trust.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ff-platform-cloud-grid">
          {PLATFORMS.map((p, i) => <PlatformTile key={p.name} p={p} i={i} inView={inView}/>)}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .ff-platform-cloud-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .ff-platform-cloud-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

window.PlatformCloud = PlatformCloud;
