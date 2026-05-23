/* global React, MAC2026, FFLockup, FFMark, SiteFooter */

const M = () => window.MAC2026;

// ============================================================
// Shared utilities
// ============================================================

// Lucide-style icon set used in feature + contact tiles.
function MacIcon({ name, size = 22 }) {
  const stroke = 'currentColor';
  const sw = 1.6;
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'sparkles') return (
    <svg {...common}><path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8z"/><path d="M19 14l.8 2.1 2.2.9-2.2.9L19 20l-.8-2.1L16 17l2.2-.9z"/></svg>
  );
  if (name === 'video') return (
    <svg {...common}><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg>
  );
  if (name === 'compass') return (
    <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>
  );
  if (name === 'rocket') return (
    <svg {...common}><path d="M14 13l-3 3M5 19c0-3 1-4 4-4l3 3c0 3-1 4-4 4 0-1-1-2-3-3z"/><path d="M16 6c2 0 4 1 4 4 0 5-5 7-5 7l-3-3s2-5 7-5"/><circle cx="15.5" cy="9.5" r="1.5"/></svg>
  );
  if (name === 'gears') return (
    <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>
  );
  if (name === 'chart') return (
    <svg {...common}><path d="M3 21V5"/><path d="M3 21h18"/><rect x="6" y="13" width="3" height="6"/><rect x="11" y="9" width="3" height="10"/><rect x="16" y="5" width="3" height="14"/></svg>
  );
  if (name === 'whatsapp') return (
    <svg {...common}><path d="M3 21l1.6-4.4A8 8 0 1119 18.5l-4.5-1.2z"/><path d="M8.5 9c.3 1.6 2.1 4 3.6 4.5"/><path d="M8.5 9c0-.8.6-1.3 1.3-1.3.2 0 .4 0 .6.2l.6 1.3a.8.8 0 01-.2 1l-.7.5c.4.8 1.1 1.5 1.9 1.9l.5-.7a.8.8 0 011-.2l1.3.6c.2.1.2.3.2.5 0 .8-.6 1.5-1.4 1.4-2.7-.1-5-2.4-5.1-5z"/></svg>
  );
  if (name === 'telegram') return (
    <svg {...common}><path d="M3 11l18-7-3 17-6-3-3 4v-5z"/><path d="M9 14l9-8"/></svg>
  );
  if (name === 'coffee') return (
    <svg {...common}><path d="M5 8h12v6a4 4 0 01-4 4H9a4 4 0 01-4-4z"/><path d="M17 10h2a2 2 0 010 4h-2"/><path d="M8 4c0 1.5 1 2 1 3M12 4c0 1.5 1 2 1 3"/></svg>
  );
  if (name === 'linkedin') return (
    <svg {...common}><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="9" r="1.2" fill="currentColor"/><path d="M8 12v6M12 12v6M12 14a2.5 2.5 0 015 0v4"/></svg>
  );
  return null;
}

// TBD marker — visible when content/mac2026 still has placeholders.
function TBDChip({ children = 'TBD link' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '2px 7px', borderRadius: 4,
      background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)',
      border: '1px dashed rgba(255,255,255,0.18)',
      fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase',
    }}>[{children}]</span>
  );
}

// Eyebrow pill (purple for the MAC date pill, lime everywhere else).
function MacEyebrow({ tone = 'lime', children, dot = true }) {
  const palette = tone === 'purple'
    ? { bg: 'var(--accent-mac-purple)', fg: '#fff', dot: '#fff', border: 'transparent' }
    : tone === 'purpleSoft'
      ? { bg: 'var(--accent-mac-purple-soft)', fg: '#C8B5FF', dot: '#C8B5FF', border: 'rgba(91,45,204,0.4)' }
      : { bg: 'rgba(195,235,66,0.12)', fg: 'var(--ff-lime)', dot: 'var(--ff-lime)', border: 'rgba(195,235,66,0.3)' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 14px', borderRadius: 999,
      background: palette.bg, color: palette.fg,
      border: `1px solid ${palette.border}`,
      fontFamily: "'Geist Mono'", fontSize: 10.5, fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase',
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: palette.dot }}/>}
      {children}
    </span>
  );
}

// Shared CTA button — primary (lime), ghost (outlined), text link.
function MacButton({ kind = 'primary', href = '#', children, small, full, tbd }) {
  const isPrimary = kind === 'primary';
  const isGhost   = kind === 'ghost';
  const isLink    = kind === 'link';

  if (isLink) {
    return (
      <a href={href} style={{
        fontFamily: "'Geist'", fontSize: 14, fontWeight: 600,
        color: tbd ? 'rgba(255,255,255,0.55)' : 'var(--ff-lime)',
        textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
        borderBottom: '1px dashed rgba(195,235,66,0.4)', paddingBottom: 2,
      }}>
        {children}
        {tbd && <TBDChip/>}
      </a>
    );
  }

  const padding = small ? '10px 14px 10px 18px' : '12px 16px 12px 22px';
  const fontSize = small ? 13.5 : 14.5;

  return (
    <a href={href} style={{ textDecoration: 'none', width: full ? '100%' : 'auto', display: full ? 'block' : 'inline-block' }}>
      <button style={{
        padding, borderRadius: 12,
        border: isGhost ? '1.5px solid rgba(255,255,255,0.25)' : 'none',
        background: isPrimary ? 'var(--ff-lime)' : 'transparent',
        color: isPrimary ? 'var(--ff-ink)' : 'var(--ff-paper)',
        fontFamily: "'Geist'", fontWeight: 700, fontSize, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        width: full ? '100%' : 'auto',
        boxShadow: isPrimary ? '0 16px 32px -10px rgba(195,235,66,0.55)' : 'none',
        transition: 'transform .15s var(--ease-out), filter .15s, background .15s, border-color .15s',
      }}
        onMouseEnter={e => {
          if (isPrimary) { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; }
          else { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }
        }}
        onMouseLeave={e => {
          if (isPrimary) { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }
          else { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }
        }}
      >
        {children}
        {isPrimary && (
          <span aria-hidden="true" style={{
            width: 22, height: 22, borderRadius: 6,
            background: 'var(--ff-ink)', color: 'var(--ff-lime)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
          }}>›</span>
        )}
        {tbd && <TBDChip/>}
      </button>
    </a>
  );
}

// ============================================================
// SpeakerCard
// ============================================================
function SpeakerCard({ speaker }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16, padding: '22px 22px',
      display: 'flex', alignItems: 'center', gap: 18,
      transition: 'border-color .25s, transform .25s var(--ease-out), box-shadow .25s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(195,235,66,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 18px 36px -18px rgba(195,235,66,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{
        flexShrink: 0, width: 72, height: 72, borderRadius: 999, overflow: 'hidden',
        background: 'rgba(255,255,255,0.08)',
        backgroundImage: `url(${speaker.photo})`,
        backgroundSize: 'cover', backgroundPosition: 'center 20%',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 0 0 3px rgba(195,235,66,0.18)',
      }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'Geist'", fontWeight: 800, fontSize: 18,
          letterSpacing: '-0.015em', color: 'var(--ff-paper)',
        }}>{speaker.name}</div>
        <div style={{
          marginTop: 3, fontFamily: "'Geist'", fontSize: 13.5,
          color: 'rgba(255,255,255,0.55)',
        }}>{speaker.title}</div>
      </div>
      {/* LinkedIn icon — real hyperlink */}
      <a href={speaker.linkedin}
         target="_blank" rel="noopener noreferrer"
         aria-label={`${speaker.name} on LinkedIn`}
         title={`${speaker.name} on LinkedIn`}
         style={{
           flexShrink: 0,
           width: 40, height: 40, borderRadius: 10,
           background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)',
           border: '1px solid rgba(255,255,255,0.1)',
           display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
           textDecoration: 'none',
           transition: 'background .2s, color .2s, border-color .2s, transform .2s var(--ease-out)',
         }}
         onMouseEnter={e => { e.currentTarget.style.background = '#0A66C2'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
         onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        <MacIcon name="linkedin" size={20}/>
      </a>
    </div>
  );
}

// ============================================================
// FeatureTile — used for both FabAI features and Complete Suite
// Variants: 'fabai' (dark + lime), 'suite' (slightly elevated dark + lime border glow)
// ============================================================
function FeatureTile({ feature, variant = 'fabai', href = '#', tbd }) {
  const elevated = variant === 'suite';
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
        display: 'block', textDecoration: 'none',
        background: elevated
          ? 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hov ? 'rgba(195,235,66,0.5)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16, padding: '24px 22px',
        boxShadow: hov
          ? '0 20px 40px -20px rgba(195,235,66,0.25), 0 30px 60px -30px rgba(0,0,0,0.5)'
          : '0 8px 24px -16px rgba(0,0,0,0.4)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'border-color .25s, box-shadow .3s, transform .25s var(--ease-out)',
        display: 'flex', flexDirection: 'column', gap: 14, height: '100%',
      }}>
      <span style={{
        width: 40, height: 40, borderRadius: 10,
        background: 'rgba(195,235,66,0.12)', color: 'var(--ff-lime)',
        border: '1px solid rgba(195,235,66,0.2)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <MacIcon name={feature.icon} size={22}/>
      </span>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: "'Geist'", fontWeight: 800, fontSize: 18,
          letterSpacing: '-0.015em', color: 'var(--ff-paper)',
        }}>
          {feature.title}
          {tbd && <TBDChip/>}
        </div>
        <p style={{
          margin: '6px 0 0', fontFamily: "'Geist'", fontSize: 14, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.6)',
        }}>
          {feature.body}
        </p>
      </div>
      <span aria-hidden="true" style={{
        marginTop: 'auto',
        display: 'inline-flex', alignItems: 'center', gap: 6,
        color: 'var(--ff-lime)', fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
        transition: 'gap .25s var(--ease-out)',
      }}>
        Learn more
        <span style={{
          display: 'inline-block',
          transform: hov ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform .25s var(--ease-out)',
        }}>→</span>
      </span>
    </a>
  );
}

// ============================================================
// ContactTile — used by previous MeetUs section, kept for re-use
// ============================================================
function ContactTile({ icon, title, sub, href, tbd, ctaLabel }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
        display: 'flex', alignItems: 'center', gap: 18,
        padding: '22px 24px', borderRadius: 16,
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hov ? 'rgba(195,235,66,0.45)' : 'rgba(255,255,255,0.08)'}`,
        textDecoration: 'none',
        boxShadow: hov
          ? '0 18px 40px -20px rgba(195,235,66,0.22)'
          : '0 6px 20px -14px rgba(0,0,0,0.4)',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'border-color .25s, box-shadow .3s, transform .25s var(--ease-out)',
      }}>
      <span style={{
        flexShrink: 0,
        width: 52, height: 52, borderRadius: 12,
        background: 'rgba(195,235,66,0.12)', color: 'var(--ff-lime)',
        border: '1px solid rgba(195,235,66,0.2)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <MacIcon name={icon} size={26}/>
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'Geist'", fontWeight: 800, fontSize: 17,
          letterSpacing: '-0.015em', color: 'var(--ff-paper)',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          {title}
          {tbd && <TBDChip/>}
        </div>
        <div style={{
          marginTop: 4, fontFamily: "'Geist'", fontSize: 13.5,
          color: 'rgba(255,255,255,0.6)',
        }}>{sub}</div>
      </div>
      <span aria-hidden="true" style={{
        color: 'var(--ff-lime)',
        transform: hov ? 'translateX(4px)' : 'translateX(0)',
        transition: 'transform .25s var(--ease-out)',
        fontSize: 18, fontWeight: 700,
      }}>→</span>
    </a>
  );
}

// ============================================================
// 4.1 Hero
// ============================================================
function MacHero() {
  const m = M();
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--ff-ink)', color: 'var(--ff-paper)',
      padding: '56px 20px 72px',
    }} className="ff-mac-hero">
      {/* Top stripe — subtle MAC purple to dark gradient */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 220,
        background: 'linear-gradient(180deg, var(--accent-mac-purple) 0%, rgba(91,45,204,0) 100%)',
        opacity: 0.45, pointerEvents: 'none',
      }}/>
      {/* Lime orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        right: '-15%', bottom: '-30%',
        background: 'radial-gradient(circle, rgba(195,235,66,0.28) 0%, rgba(195,235,66,0.04) 40%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }}/>
      <div aria-hidden="true" style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        left: '-10%', top: '20%',
        background: 'radial-gradient(circle, rgba(195,235,66,0.18) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }}/>

      <div style={{
        position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center',
      }} className="ff-mac-hero-grid">
        <div>
          <MacEyebrow tone="purple" dot={false}>
            Live at {m.event.name} → {m.event.dateShort}, Yerevan
          </MacEyebrow>
          <h1 style={{
            margin: '20px 0 16px',
            fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(32px, 6vw, 76px)', lineHeight: 1.02, letterSpacing: '-0.035em',
            color: 'var(--ff-paper)',
          }}>
            Catch <span style={{ color: 'var(--ff-lime)' }}>Rohit & Sahil</span> live at MAC2026
          </h1>
          <p style={{
            margin: '0 0 30px', maxWidth: 540,
            fontFamily: "'Geist'", fontSize: 17, lineHeight: 1.55,
            color: 'rgba(255,255,255,0.72)',
          }}>
            Our co founders are breaking down the AI architecture behind $10M a month Meta campaigns. See FabAI live in Yerevan.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
            <MacButton kind="primary" href="#newsletter">Stay in the loop</MacButton>
            <MacButton kind="ghost" href={m.links.fabAi} tbd={m.links.fabAiTBD}>Try FabAI</MacButton>
          </div>
          <MacButton kind="link" href={m.links.completeSuite} tbd={m.links.completeSuiteTBD}>
            Need bulk launching and automation too? See the complete suite →
          </MacButton>
        </div>

        {/* Founder portraits */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
        }} className="ff-mac-hero-portraits">
          {m.speakers.map(s => (
            <FounderPortrait key={s.id} speaker={s}/>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ff-mac-hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 640px) {
          .ff-mac-hero-portraits { gap: 10px !important; }
          .ff-mac-hero-grid { gap: 28px !important; }
          .ff-mac-hero h1 { font-size: 36px !important; line-height: 1.05 !important; letter-spacing: -0.025em !important; }
          .ff-mac-hero p  { font-size: 15.5px !important; }
        }
        @media (max-width: 420px) {
          .ff-mac-hero-portraits { grid-template-columns: 1fr !important; }
          .ff-mac-hero h1 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}

function FounderPortrait({ speaker }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', aspectRatio: '3 / 4', borderRadius: 18, overflow: 'hidden',
        background: '#0F0F0D',
        backgroundImage: `url(${speaker.photo})`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        border: `1.5px solid ${hov ? 'rgba(195,235,66,0.6)' : 'rgba(255,255,255,0.1)'}`,
        boxShadow: hov
          ? '0 30px 80px -28px rgba(195,235,66,0.5), 0 30px 80px -28px rgba(0,0,0,0.6)'
          : '0 20px 60px -28px rgba(0,0,0,0.7)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color .25s, box-shadow .35s, transform .35s var(--ease-out)',
      }}>
      {/* Name plate */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 16px 14px',
        background: 'linear-gradient(180deg, rgba(15,15,12,0) 0%, rgba(15,15,12,0.78) 50%, rgba(15,15,12,0.92) 100%)',
        color: 'var(--ff-paper)',
      }}>
        <div style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 15.5, letterSpacing: '-0.01em' }}>{speaker.name}</div>
        <div style={{ marginTop: 2, fontFamily: "'Geist Mono'", fontSize: 10, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{speaker.title}</div>
      </div>
    </div>
  );
}

// ============================================================
// 4.2 Session block
// ============================================================
function MacSession() {
  const m = M();
  return (
    <section id="session" style={{
      background: 'var(--ff-ink)', padding: '56px 20px 72px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <MacEyebrow tone="lime">Our talk at MAC</MacEyebrow>
          <h2 style={{
            margin: '18px 0 0', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(26px, 4vw, 44px)', letterSpacing: '-0.025em', lineHeight: 1.05,
            color: 'var(--ff-paper)',
          }}>
            One <span style={{ color: 'var(--ff-lime)' }}>45 minute</span> session. The full architecture.
          </h2>
        </div>

        {/* Card with MAC purple top stripe */}
        <div style={{
          position: 'relative',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 18, overflow: 'hidden',
          boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)',
        }}>
          {/* 4px purple top stripe */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'linear-gradient(90deg, var(--accent-mac-purple) 0%, var(--accent-mac-purple-deep) 100%)',
          }}/>

          <div style={{ padding: '32px 36px 30px' }} className="ff-mac-session-card">
            <MacEyebrow tone="purpleSoft">
              {m.event.sessionDay} · {m.event.sessionDate} · {m.event.sessionTime}
            </MacEyebrow>
            <h3 style={{
              margin: '18px 0 14px', fontFamily: "'Geist'", fontWeight: 800,
              fontSize: 'clamp(22px, 2.6vw, 30px)', letterSpacing: '-0.02em', lineHeight: 1.18,
              color: 'var(--ff-paper)',
              maxWidth: 880,
            }}>
              {m.event.sessionTitle}
            </h3>
            <p style={{
              margin: '0 0 16px', maxWidth: 760,
              fontFamily: "'Geist'", fontSize: 15.5, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.7)',
            }}>
              {m.event.sessionAbstract}
              {m.event.sessionAbstractTBD && (
                <span style={{ marginLeft: 8, verticalAlign: 'middle' }}><TBDChip>TBD abstract</TBDChip></span>
              )}
            </p>
            {/* Powered by FabAI */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px', borderRadius: 8,
              background: 'rgba(195,235,66,0.1)', border: '1px solid rgba(195,235,66,0.25)',
              marginBottom: 28,
            }}>
              <FFLockup height={12} fab="#FFFFFF" fun="var(--ff-lime)"/>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-lime)', letterSpacing: '0.16em', fontWeight: 700, textTransform: 'uppercase' }}>Powered by FabAI</span>
            </div>

            {/* Speakers row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="ff-mac-session-speakers">
              {m.speakers.map(s => <SpeakerCard key={s.id} speaker={s}/>)}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .ff-mac-session-card { padding: 24px 18px 22px !important; }
          .ff-mac-session-speakers { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 380px) {
          .ff-mac-session-card { padding: 22px 14px 20px !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 4.3 Meet FabAI — headline product section
// ============================================================
function MeetFabAI() {
  const m = M();
  return (
    <section style={{
      background: 'var(--ff-ink)', padding: '72px 20px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          <MacEyebrow tone="lime">Meet FabAI</MacEyebrow>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.4vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.04,
            color: 'var(--ff-paper)',
          }}>
            The AI layer inside FabFunnel.
          </h2>
          <p style={{
            margin: '0 auto', maxWidth: 560,
            fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55,
            color: 'rgba(255,255,255,0.65)',
          }}>
            Three things we will show you live in Yerevan.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ff-mac-tile-grid">
          {m.fabAiFeatures.map(f => (
            <FeatureTile key={f.id} feature={f} variant="fabai" href={m.links.fabAi}/>
          ))}
        </div>

        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <MacButton kind="primary" href={m.links.fabAi} tbd={m.links.fabAiTBD}>Try FabAI</MacButton>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .ff-mac-tile-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ============================================================
// 4.4 Complete suite — upgrade hook
// ============================================================
function CompleteSuite() {
  const m = M();
  return (
    <section style={{
      background: '#0F0F0D', padding: '80px 20px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
          marginBottom: 56,
        }} className="ff-mac-suite-head">
          <div>
            <MacEyebrow tone="lime">The complete suite</MacEyebrow>
            <h2 style={{
              margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
              fontSize: 'clamp(28px, 4.4vw, 50px)', letterSpacing: '-0.03em', lineHeight: 1.04,
              color: 'var(--ff-paper)',
            }}>
              FabAI is the start. <span style={{ color: 'var(--ff-lime)' }}>The complete suite</span> is where it scales.
            </h2>
            <p style={{
              margin: 0, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.65)', maxWidth: 520,
            }}>
              Pair FabAI with our bulk launcher and cross platform automation to run thousands of campaigns across Meta, TikTok, and NewsBreak from one dashboard.
            </p>
          </div>
          <SuiteVisual/>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ff-mac-tile-grid">
          {m.suiteFeatures.map(f => (
            <FeatureTile key={f.id} feature={f} variant="suite" href={m.links.completeSuite}/>
          ))}
        </div>

        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <MacButton kind="primary" href={m.links.demo}>Book a Demo</MacButton>
          <MacButton kind="ghost" href={m.links.completeSuite} tbd={m.links.completeSuiteTBD}>See the complete suite</MacButton>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ff-mac-suite-head { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// Lightweight dashboard mock — bulk launcher + automation feel
function SuiteVisual() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #1A1A18, #131312)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18,
      padding: 18, boxShadow: '0 40px 80px -30px rgba(0,0,0,0.7)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: 'var(--ff-lime)', color: 'var(--ff-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Geist'", fontWeight: 900, fontSize: 13 }}>★</span>
        <span style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 13.5, color: 'var(--ff-paper)' }}>Bulk launcher</span>
        <span style={{ marginLeft: 'auto', fontFamily: "'Geist Mono'", fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>247 / 250 sets</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: 3, marginBottom: 12 }}>
        {Array.from({ length: 56 }).map((_, i) => {
          const lit = (i * 7 + 3) % 11 < 4;
          return <span key={i} style={{ aspectRatio: '1', borderRadius: 2, background: lit ? 'var(--ff-lime)' : 'rgba(255,255,255,0.06)' }}/>;
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 10 }}>
        {[
          ['$184K', 'Spend', '+12%'],
          ['4.2×',  'ROAS',  '+0.4'],
          ['$12',   'CPA',   '-$3'],
        ].map(([v, l, d]) => (
          <div key={l} style={{
            padding: '10px 12px', borderRadius: 8,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, color: 'var(--ff-paper)', letterSpacing: '-0.02em' }}>{v}</div>
            <div style={{ marginTop: 4, fontFamily: "'Geist Mono'", fontSize: 9, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em' }}>{l}</div>
            <div style={{ marginTop: 4, fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-lime)', fontWeight: 700 }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 12, padding: '8px 12px', borderRadius: 8,
        background: 'rgba(195,235,66,0.08)', border: '1px solid rgba(195,235,66,0.18)',
        fontFamily: "'Geist Mono'", fontSize: 10.5, color: 'var(--ff-lime)', letterSpacing: '0.06em',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ff-lime)' }}/>
        AUTOMATION · 24 / 7 · 8 rules active
      </div>
    </div>
  );
}

// (MeetUs and MacAbout were removed at user request — newsletter replaces the bottom CTA stack.)

window.MacHero = MacHero;
window.MacSession = MacSession;
window.MeetFabAI = MeetFabAI;
window.CompleteSuite = CompleteSuite;
window.MacNewsletter = MacNewsletter;
window.MacFeatureTile = FeatureTile;
window.MacSpeakerCard = SpeakerCard;

// ============================================================
// Newsletter — dark on-theme subscribe section
// ============================================================
function MacNewsletter() {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle'); // idle | submitted | error

  const submit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setState('error'); return; }
    setState('submitted');
  };

  return (
    <section id="newsletter" style={{
      background: 'var(--ff-ink)', padding: '72px 20px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Lime halo behind */}
      <div aria-hidden="true" style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(195,235,66,0.18) 0%, rgba(195,235,66,0.03) 40%, transparent 70%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto', textAlign: 'center',
      }}>
        <MacEyebrow tone="lime">Newsletter</MacEyebrow>
        <h2 style={{
          margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
          fontSize: 'clamp(26px, 4.4vw, 46px)', letterSpacing: '-0.028em', lineHeight: 1.05,
          color: 'var(--ff-paper)',
        }}>
          Stay in the loop.
        </h2>
        <p style={{
          margin: '0 auto 28px', maxWidth: 500,
          fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.65)',
        }}>
          Get our weekly playbooks on what is winning in paid ads — straight from the team running $10M a month in spend.
        </p>

        <form onSubmit={submit} style={{
          maxWidth: 520, margin: '0 auto',
          display: 'flex', gap: 10, alignItems: 'stretch',
        }} className="ff-mac-news-form">
          <input
            type="email" value={email}
            onChange={e => { setEmail(e.target.value); if (state === 'error') setState('idle'); }}
            placeholder="you@company.com"
            aria-label="Email address"
            disabled={state === 'submitted'}
            style={{
              flex: 1, minWidth: 0,
              padding: '14px 18px', borderRadius: 12,
              fontFamily: "'Geist'", fontSize: 15, color: 'var(--ff-paper)',
              background: 'rgba(255,255,255,0.04)',
              border: state === 'error'
                ? '1.5px solid rgba(254,45,45,0.7)'
                : state === 'submitted'
                  ? '1.5px solid rgba(195,235,66,0.6)'
                  : '1.5px solid rgba(255,255,255,0.12)',
              outline: 'none',
              transition: 'border-color .2s, box-shadow .2s, background .2s',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(195,235,66,0.55)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(195,235,66,0.12)'; }}
            onBlur={e => { if (state === 'idle') { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; } }}
          />
          <button type="submit" disabled={state === 'submitted'} style={{
            padding: '14px 20px', borderRadius: 12, border: 'none',
            background: state === 'submitted' ? 'rgba(195,235,66,0.45)' : 'var(--ff-lime)',
            color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 15,
            cursor: state === 'submitted' ? 'default' : 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: state === 'submitted' ? 'none' : '0 14px 28px -10px rgba(195,235,66,0.55)',
            transition: 'filter .15s, transform .15s, background .2s',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
            onMouseEnter={e => { if (state !== 'submitted') { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
            onMouseLeave={e => { if (state !== 'submitted') { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; } }}
          >
            {state === 'submitted' ? '✓ Subscribed' : 'Subscribe →'}
          </button>
        </form>

        <div style={{
          minHeight: 24, marginTop: 14,
          fontFamily: "'Geist Mono'", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: state === 'error' ? '#FE6A6A'
               : state === 'submitted' ? 'var(--ff-lime)'
               : 'rgba(255,255,255,0.4)',
        }}>
          {state === 'error'
            ? 'Enter a valid email address'
            : state === 'submitted'
              ? 'Thanks. See you on Monday.'
              : 'No spam · One email a week · Unsubscribe any time'}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .ff-mac-news-form { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}

window.MacNewsletter = MacNewsletter;
