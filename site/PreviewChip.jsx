/* global React */

// ============================================================
// PreviewChip — small floating "open in preview shell" button
// that appears on every page. Detects the current page from the
// URL and deep-links into preview.html with it pre-selected.
// Clicking it navigates to the preview shell where the device
// toggle (Desktop/Tablet/Mobile) lives.
// ============================================================
function PreviewChip() {
  const [dismissed, setDismissed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [insideFrame, setInsideFrame] = React.useState(false);

  React.useEffect(() => {
    // Only hide the chip when we're inside OUR preview shell (which adds
    // ?in_preview=1 to the iframe src). Generic editor / preview iframes
    // should still show it.
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('in_preview') === '1') setInsideFrame(true);
    } catch (e) { /* fine */ }
  }, []);

  if (insideFrame || dismissed) return null;

  // Detect current page so we can pass it to preview.html
  const path = (typeof window !== 'undefined') ? window.location.pathname.split('/').pop().toLowerCase() : '';
  const page = path.includes('pricing') ? 'pricing' : 'landing';
  const previewHref = `preview.html?page=${page}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed', right: 20, bottom: 20, zIndex: 200,
        display: 'flex', alignItems: 'center', gap: 4,
        padding: 5,
        background: 'rgba(15,15,12,0.92)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 999,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 18px 40px -10px rgba(0,0,0,0.45), 0 0 0 1px rgba(195,235,66,0.08)',
        fontFamily: "'Geist', sans-serif",
      }}
    >
      <a
        href={previewHref}
        title="Open in preview shell — switch Desktop / Tablet / Mobile"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 9,
          padding: '8px 14px 8px 10px', borderRadius: 999,
          color: 'var(--ff-paper)', textDecoration: 'none',
          fontWeight: 600, fontSize: 13, letterSpacing: '-0.005em',
          background: hovered ? 'rgba(195,235,66,0.16)' : 'transparent',
          transition: 'background .18s var(--ease-out)',
        }}
      >
        <span style={{
          width: 28, height: 28, borderRadius: 999,
          background: 'var(--ff-lime)', color: 'var(--ff-ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .25s var(--ease-out)',
          transform: hovered ? 'rotate(-8deg)' : 'rotate(0)',
        }}>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="6" height="6" rx="1"/>
            <rect x="8" y="8" width="5" height="5" rx="1"/>
          </svg>
        </span>
        <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span style={{ color: 'var(--ff-paper)' }}>Preview</span>
          <span style={{
            fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 600,
            color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>Desktop · Tablet · Mobile</span>
        </span>
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4, color: 'rgba(255,255,255,0.55)' }}>
          <path d="M9 2h5v5M14 2l-7 7"/>
        </svg>
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        title="Hide for this session"
        style={{
          width: 26, height: 26, borderRadius: 999, marginLeft: 2,
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.5)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .15s ease, color .15s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
      >
        <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M3 3l6 6M9 3L3 9"/>
        </svg>
      </button>
    </div>
  );
}

window.PreviewChip = PreviewChip;
