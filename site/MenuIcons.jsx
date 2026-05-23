/* global React, PlatformGlyph */

// ============================================================
// Icon set — 22px lucide-style stroked icons + special tinted versions
// ============================================================
const Icon = ({ d, fill, size = 22, strokeWidth = 1.6, viewBox = '0 0 24 24' }) => (
  <svg viewBox={viewBox} width={size} height={size} fill={fill || 'none'} stroke={fill ? 'none' : 'currentColor'}
       strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const I = {
  rocket:    () => <Icon d={<><path d="M4.5 16.5l-1 4 4-1 9-9-3-3-9 9z"/><path d="M14 6l4 4"/><path d="M16 4l4 4-4 4"/><circle cx="13" cy="11" r="1.5"/></>}/>,
  handshake: () => <Icon d={<><path d="M11 17l2 2 4-4 4-3-3-3-3 2-3-2-2 2"/><path d="M3 13l3-3 3 1 3-3 3 1"/></>}/>,
  book:      () => <Icon d={<><path d="M4 4h7a3 3 0 013 3v13"/><path d="M20 4h-7a3 3 0 00-3 3"/><path d="M4 4v16h16"/></>}/>,
  bulb:      () => <Icon d={<><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 00-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 00-4-10z"/></>}/>,
  chart:     () => <Icon d={<><path d="M3 21h18"/><path d="M5 21V11"/><path d="M10 21V7"/><path d="M15 21V13"/><path d="M20 21V4"/></>}/>,
  sparkle:   () => <Icon d={<><path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z"/><path d="M19 14l.8 2 2 .8-2 .8L19 19.5l-.8-1.9-2-.8 2-.8z"/></>}/>,
  ai:        () => <Icon d={<><circle cx="12" cy="12" r="3.2"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4"/></>}/>,
  video:     () => <Icon d={<><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></>}/>,
  building:  () => <Icon d={<><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M14 7h.01M9 11h.01M14 11h.01M9 15h.01M14 15h.01M10 21v-3h4v3"/></>}/>,
  affiliate: () => <Icon d={<><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 6h8M6 8v8M18 8v8M8 18h8"/></>}/>,
  target:    () => <Icon d={<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></>}/>,
  blog:      () => <Icon d={<><path d="M14 3v6h6"/><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M8 13h8M8 17h5"/></>}/>,
  caseStudy: () => <Icon d={<><path d="M3 17l5-5 4 4 9-9"/><path d="M14 7h6v6"/></>}/>,
  kb:        () => <Icon d={<><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3.5"/><circle cx="12" cy="16.5" r="0.7" fill="currentColor" stroke="none"/></>}/>,
  envelope:  () => <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>}/>,
  versus:    () => <Icon d={<><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><path d="M3 21L21 3"/></>}/>,
  telegram:  () => <Icon d={<><path d="M21 4L3 11l5.5 2.2L17 7l-6.5 8L11 21l3-4 5 3z"/></>}/>,
  linkedin:  () => <Icon d={<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/></>}/>,
  instagram: () => <Icon d={<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none"/></>}/>,
  youtube:   () => <Icon d={<><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9l4 3-4 3z" fill="currentColor"/></>}/>,
  arrowR:    () => <Icon d={<><path d="M5 12h14M13 6l6 6-6 6"/></>}/>,
  chevronR:  () => <Icon d={<><path d="M9 6l6 6-6 6"/></>} size={14}/>,
  chevronD:  () => <Icon d={<><path d="M6 9l6 6 6-6"/></>} size={14}/>,
  close:     () => <Icon d={<><path d="M5 5l14 14M19 5L5 19"/></>} size={20}/>,
  hamburger: () => <Icon d={<><path d="M4 7h16M4 12h16M4 17h16"/></>} size={22}/>,
};

window.I = I;

// ============================================================
// TBD badge — used for unbuilt pages in nav + footer + cards
// ============================================================
function TBDBadge({ size = 'sm' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: size === 'sm' ? '2px 6px' : '3px 8px',
      borderRadius: 4,
      background: 'rgba(23,23,23,0.06)',
      color: 'var(--ff-mute)',
      border: '1px solid var(--border-1)',
      fontFamily: "'Geist Mono'", fontSize: size === 'sm' ? 8.5 : 9.5, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      verticalAlign: 'middle',
      lineHeight: 1,
    }}>TBD</span>
  );
}

window.TBDBadge = TBDBadge;

// ============================================================
// MegaItem — icon + title + description, hover tint, optional TBD
// ============================================================
function MegaItem({ icon, title, desc, href = '#', tbd = false, accentColor }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         display: 'flex', gap: 14, padding: '12px 14px',
         borderRadius: 10, textDecoration: 'none',
         background: hov ? 'rgba(23,23,23,0.04)' : 'transparent',
         transition: 'background .18s ease-in-out',
         opacity: tbd ? 0.78 : 1,
       }}>
      <div style={{
        flexShrink: 0, width: 38, height: 38, borderRadius: 9,
        background: hov ? 'var(--ff-lime)' : 'var(--ff-cream)',
        color: 'var(--ff-ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .18s ease-in-out, transform .25s var(--ease-out)',
        transform: hov ? 'rotate(-6deg)' : 'rotate(0deg)',
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, letterSpacing: '-0.005em',
          color: hov ? 'var(--ff-rich)' : 'var(--ff-ink)',
          transition: 'color .18s ease-in-out',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>{title}{tbd && <TBDBadge/>}</div>
        <div style={{
          marginTop: 3, fontFamily: "'Geist'", fontSize: 12.5, lineHeight: 1.5, color: 'var(--ff-mute)',
        }}>{desc}</div>
      </div>
    </a>
  );
}

window.MegaItem = MegaItem;
