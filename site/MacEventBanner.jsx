/* global React, MAC2026 */

// ============================================================
// MacEventBanner — site wide announcement above SiteHeader.
//
// Rules (per launch brief):
//   1. Renders on every page EXCEPT /mac2026
//   2. Dismissible — persists in localStorage
//   3. Auto sunsets at 2026-05-28T00:00:00+05:30 (= sunsetISO UTC)
//   4. Mobile copy collapses to short form
//   5. Sets CSS var --mac-banner-h on <html> so sticky SiteHeader
//      offsets correctly. Cleared on unmount.
//   6. When dismissed or sunset, returns null (fully removed from DOM)
// ============================================================

function MacEventBanner() {
  const M = window.MAC2026;
  const ref = React.useRef(null);

  // SSR guards (in case we use this in other harnesses later)
  const initialDismissed = (typeof window !== 'undefined')
    ? localStorage.getItem(M.banner.storageKey) === 'true'
    : false;
  const initialSunset = (typeof window !== 'undefined')
    ? new Date() >= new Date(M.sunsetISO)
    : false;
  // Suppress on the mac2026 page itself
  const initialOnPage = (typeof window !== 'undefined')
    ? window.location.pathname.toLowerCase().endsWith('mac2026.html')
    : false;

  const [dismissed, setDismissed] = React.useState(initialDismissed);
  const sunset = initialSunset;
  const onPage = initialOnPage;

  const visible = !dismissed && !sunset && !onPage;

  // Sync sticky offset CSS var with banner's actual rendered height
  React.useLayoutEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty('--mac-banner-h', '0px');
      return;
    }
    const apply = () => {
      const h = ref.current ? ref.current.getBoundingClientRect().height : 0;
      document.documentElement.style.setProperty('--mac-banner-h', `${Math.round(h)}px`);
    };
    apply();
    const ro = new ResizeObserver(apply);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener('resize', apply);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', apply);
      document.documentElement.style.setProperty('--mac-banner-h', '0px');
    };
  }, [visible]);

  const dismiss = () => {
    try { localStorage.setItem(M.banner.storageKey, 'true'); } catch (e) { /* ignore */ }
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div ref={ref} role="region" aria-label="MAC2026 announcement" style={{
      position: 'sticky', top: 0, zIndex: 95,
      background: 'linear-gradient(90deg, var(--accent-mac-purple-deep) 0%, var(--accent-mac-purple) 60%, var(--accent-mac-purple-deep) 100%)',
      color: 'var(--accent-mac-purple-fg)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      {/* Subtle moving sparkle overlay (motion respects prefers-reduced-motion via CSS below) */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
        opacity: 0.4,
      }}>
        <div style={{
          position: 'absolute', top: '-40%', left: '-10%', width: '40%', height: '180%',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 60%)',
          filter: 'blur(20px)',
          animation: 'macBannerDrift 14s ease-in-out infinite alternate',
        }}/>
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1440, margin: '0 auto', padding: '10px 56px 10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
        minHeight: 44,
      }}>
        {/* Desktop copy */}
        <span className="ff-macbanner-desktop" style={{
          fontFamily: "'Geist'", fontSize: 14, fontWeight: 500,
          letterSpacing: '-0.005em',
          textAlign: 'center',
        }}>
          {M.banner.desktop}
        </span>
        {/* Mobile copy */}
        <span className="ff-macbanner-mobile" style={{
          display: 'none',
          fontFamily: "'Geist'", fontSize: 13, fontWeight: 600,
        }}>
          {M.banner.mobile}
        </span>

        <a href={M.banner.ctaHref} style={{ textDecoration: 'none', flexShrink: 0 }}>
          <button style={{
            padding: '6px 12px 6px 14px', borderRadius: 999, border: 'none',
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 12.5, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            boxShadow: '0 8px 18px -8px rgba(195,235,66,0.6)',
            transition: 'transform .15s var(--ease-out), filter .15s',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {M.banner.ctaLabel}
            <span aria-hidden="true" style={{
              width: 18, height: 18, borderRadius: 999,
              background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 800,
            }}>›</span>
          </button>
        </a>

        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          title="Dismiss"
          style={{
            position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
            width: 28, height: 28, borderRadius: 999, padding: 0,
            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.85)', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .15s, color .15s, border-color .15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
        >
          <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M2 2l10 10M12 2L2 12"/>
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes macBannerDrift {
          0%   { transform: translateX(0)    translateY(0); }
          100% { transform: translateX(60vw) translateY(10%); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes macBannerDrift { 0%, 100% { transform: none; } }
        }
        @media (max-width: 720px) {
          .ff-macbanner-desktop { display: none !important; }
          .ff-macbanner-mobile  { display: inline !important; }
          [aria-label="MAC2026 announcement"] > div { padding-right: 44px !important; padding-left: 14px !important; gap: 10px !important; }
        }
      `}</style>
    </div>
  );
}

window.MacEventBanner = MacEventBanner;
