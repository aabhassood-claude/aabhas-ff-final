/* global React, FFLockup, I, FFMark */

// ============================================================
// SiteFooter — redesigned, premium SaaS feel.
// Stack (top → bottom):
//   1. Closing CTA banner (hero-grade)
//   2. Trust strip (live operator stats)
//   3. Newsletter inline
//   4. 4-column nav grid (curated, no TBD noise)
//   5. Brand row (logo, tagline, socials)
//   6. Watermark headline
//   7. Fine print
// ============================================================

// ============================================================
// 1. Closing CTA banner — bigger, motion-rich, lime pulse
// ============================================================
function ClosingCTA() {
  return (
    <section style={{ padding: '0 24px', position: 'relative' }}>
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        {/* Pulsing lime aura behind */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: '-40px 2% -40px 2%',
          background: 'radial-gradient(ellipse at center, rgba(195,235,66,0.55) 0%, rgba(195,235,66,0.12) 40%, transparent 70%)',
          filter: 'blur(60px)', zIndex: 0,
          animation: 'ffCTAPulse 5s ease-in-out infinite',
        }}/>
        <div style={{
          position: 'relative', zIndex: 1,
          background: 'var(--ff-ink)', borderRadius: 28,
          padding: '64px 64px', overflow: 'hidden',
          boxShadow: '0 40px 80px -28px rgba(0,0,0,0.5)',
        }} className="ff-cta-panel">
          {/* Watermark mark — top-right */}
          <div aria-hidden="true" style={{
            position: 'absolute', right: -40, top: -50, opacity: 0.08, pointerEvents: 'none',
          }}>
            <FFMark size={320} color="mono-white"/>
          </div>
          {/* Lime corner glow */}
          <div aria-hidden="true" style={{
            position: 'absolute', right: -120, bottom: -120, width: 420, height: 420, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(195,235,66,0.38) 0%, rgba(195,235,66,0) 70%)',
            filter: 'blur(30px)', pointerEvents: 'none',
          }}/>

          <div style={{
            position: 'relative', zIndex: 1,
            display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center',
          }} className="ff-cta-inner">
            <div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 999,
                background: 'rgba(195,235,66,0.14)', color: 'var(--ff-lime)',
                border: '1px solid rgba(195,235,66,0.35)',
                fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ff-lime)', animation: 'ffDotPulse 2s ease-in-out infinite' }}/>
                Ready when you are
              </span>
              <h2 style={{
                margin: '20px 0 16px', fontFamily: "'Geist'", fontWeight: 900,
                fontSize: 'clamp(32px, 4.6vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05,
                color: 'var(--ff-paper)',
              }}>
                Ready to automate <span style={{ color: 'var(--ff-lime)' }}>your ads?</span>
              </h2>
              <p style={{
                margin: 0, fontFamily: "'Geist'", fontSize: 17, lineHeight: 1.55,
                color: 'rgba(255,255,255,0.72)', maxWidth: 520,
              }}>
                Start your 14-day free trial. No credit card. Bring your team. Cancel anytime.
              </p>
              {/* Live ticker — micro trust signal */}
              <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ display: 'inline-flex', gap: -8 }}>
                  {['#FFB37D','#7AB8F5','#8FB821','#F57AB8'].map((c, i) => (
                    <span key={i} style={{
                      width: 22, height: 22, borderRadius: 999, background: c,
                      border: '2px solid var(--ff-ink)', marginLeft: i === 0 ? 0 : -8,
                      display: 'inline-block',
                    }}/>
                  ))}
                </span>
                <span style={{ fontFamily: "'Geist'", fontSize: 12.5, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: 'var(--ff-lime)', fontWeight: 700 }}>12 teams</span> started a trial this week.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="ff-cta-buttons">
              <a href={(window.ROUTES && window.ROUTES.trial.href) || 'pricing.html'} style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '16px 22px', borderRadius: 12, border: 'none',
                  background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 16, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%',
                  boxShadow: '0 14px 32px -10px rgba(195,235,66,0.55)',
                  transition: 'filter .15s var(--ease-out), transform .15s var(--ease-out)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.05)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Start free trial
                  <span style={{ background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                    width: 26, height: 26, borderRadius: 6,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>›</span>
                </button>
              </a>
              <a href={(window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '16px 22px', borderRadius: 12,
                  background: 'transparent', color: 'var(--ff-paper)', border: '1.5px solid rgba(255,255,255,0.3)',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 16, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%',
                  transition: 'background .15s, border-color .15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                >
                  Book a demo
                  <span style={{ background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                    width: 26, height: 26, borderRadius: 6,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>›</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ffCTAPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.04); }
        }
        @keyframes ffDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
        @media (max-width: 768px) {
          .ff-cta-panel { padding: 40px 28px !important; border-radius: 22px !important; }
          .ff-cta-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// 2. Trust strip — operator stats, mono-tracked
// ============================================================
function TrustStrip() {
  const stats = [
    { v: '38k+',  label: 'Campaigns launched' },
    { v: '5×',    label: 'Faster than manual' },
    { v: '3',     label: 'Native ad platforms' },
    { v: '15min', label: 'Spend sync time' },
  ];
  return (
    <div style={{ padding: '64px 24px 32px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
      }} className="ff-trust-grid">
        {stats.map((s, i) => (
          <div key={s.label} style={{
            padding: '16px 24px', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid var(--border-1)' : 'none',
          }} className="ff-trust-cell">
            <div style={{
              fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(28px, 3.4vw, 40px)',
              letterSpacing: '-0.025em', color: 'var(--ff-ink)', lineHeight: 1,
            }}>{s.v}</div>
            <div style={{
              marginTop: 8, fontFamily: "'Geist Mono'", fontSize: 10.5,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ff-mute)',
            }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .ff-trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px 0 !important; }
          .ff-trust-cell { border-right: none !important; }
          .ff-trust-cell:nth-child(odd) { border-right: 1px solid var(--border-1) !important; }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// 3. Newsletter — slim inline strip
// ============================================================
function NewsletterInline() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  return (
    <div style={{ padding: '24px 24px 56px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        padding: '20px 28px', borderRadius: 14,
        background: 'rgba(195,235,66,0.10)',
        border: '1px solid rgba(143,184,33,0.25)',
      }} className="ff-news-row">
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 17, color: 'var(--ff-ink)', letterSpacing: '-0.015em' }}>
            Get the FabFunnel newsletter
          </div>
          <div style={{ marginTop: 4, fontFamily: "'Geist'", fontSize: 13.5, color: 'var(--fg-2)' }}>
            Weekly playbooks. Real operator wins. No spam.
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
          style={{ display: 'flex', gap: 8 }} className="ff-news-form"
        >
          <input
            type="email" required value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@company.com"
            aria-label="Email address" disabled={subscribed}
            style={{
              padding: '12px 16px', minWidth: 280,
              fontFamily: "'Geist'", fontSize: 14, color: 'var(--ff-ink)',
              background: subscribed ? 'rgba(195,235,66,0.16)' : 'var(--ff-paper)',
              border: '1.5px solid var(--border-1)',
              borderRadius: 10, outline: 'none',
              transition: 'border-color .15s, box-shadow .15s',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = 'var(--ff-rich)'; e.currentTarget.style.boxShadow = '0 0 0 4px rgba(143,184,33,0.18)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'var(--border-1)'; e.currentTarget.style.boxShadow = 'none'; }}
          />
          <button type="submit" disabled={subscribed} style={{
            padding: '10px 20px', borderRadius: 10, border: 'none',
            background: subscribed ? 'rgba(195,235,66,0.5)' : 'var(--ff-lime)',
            color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: subscribed ? 'default' : 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: subscribed ? 'none' : '0 10px 22px -10px rgba(143,184,33,0.55)',
          }}>
            {subscribed ? '✓ Subscribed' : 'Subscribe →'}
          </button>
        </form>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .ff-news-row { flex-direction: column !important; align-items: stretch !important; }
          .ff-news-form { flex-direction: column !important; }
          .ff-news-form input { min-width: 0 !important; width: 100% !important; }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// 4. Curated nav grid — 4 columns, no TBD noise
// ============================================================
function FooterLink({ href, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         position: 'relative', textDecoration: 'none',
         display: 'inline-block',
         fontFamily: "'Geist'", fontSize: 14, lineHeight: 1.55,
         color: hov ? 'var(--ff-ink)' : 'var(--ff-mute)',
         transition: 'color .18s ease-in-out, transform .25s var(--ease-out)',
         transform: hov ? 'translateX(2px)' : 'translateX(0)',
       }}>
      {children}
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: -1, height: 1,
        background: 'var(--ff-rich)', borderRadius: 999,
        transform: hov ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform .25s var(--ease-out)',
      }}/>
    </a>
  );
}

function FooterColumns() {
  const R = (typeof window !== 'undefined' && window.ROUTES) ? window.ROUTES : {};
  const href = (k, fallback) => (R[k] && R[k].href) || fallback;

  const cols = [
    {
      title: 'Platforms',
      items: [
        ['Meta Ads',      href('meta', '#meta')],
        ['TikTok Ads',    href('tiktok', '#tiktok')],
        ['NewsBreak',     href('newsbreak', '#newsbreak')],
      ],
    },
    {
      title: 'Product',
      items: [
        ['Bulk Launch',         href('bulk', '#bulk')],
        ['Creative Generation', href('gen', '#gen')],
        ['Co-Pilot',            href('copilot', '#copilot')],
        ['Reporting',           href('reporting', '#reporting')],
      ],
    },
    {
      title: 'Resources',
      items: [
        ['Blog',         href('blogs', '#blogs')],
        ['Case Studies', href('cases', '#cases')],
        ['Knowledge Base', href('docs', '#docs')],
        ['Contact',      href('contact', '#contact')],
      ],
    },
    {
      title: 'Company',
      items: [
        ['Pricing',      href('pricing', 'pricing.html')],
        ['Book a Demo',  href('demo', 'pricing.html')],
        ['About',        href('about', '#about')],
        ['Careers',      '#careers'],
      ],
    },
  ];

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40,
    }} className="ff-footer-nav">
      {cols.map((c, idx) => (
        <div key={c.title} style={{
          animation: `ffFooterColEnter .55s var(--ease-out) ${idx * 60}ms both`,
        }}>
          <div style={{
            fontFamily: "'Geist Mono'", fontWeight: 700, fontSize: 11,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--ff-ink)', marginBottom: 18,
          }}>
            {c.title}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {c.items.map(([label, h]) => (
              <li key={label}><FooterLink href={h}>{label}</FooterLink></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// 5. Brand row — logo, tagline, socials
// ============================================================
function BrandRow() {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      gap: 32, flexWrap: 'wrap',
      paddingBottom: 36, marginBottom: 36,
      borderBottom: '1px solid var(--border-1)',
    }} className="ff-brand-row">
      <div style={{ maxWidth: 320 }}>
        <FFLockup height={22}/>
        <p style={{
          margin: '16px 0 0',
          fontFamily: "'Geist'", fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)',
        }}>
          The operating system for paid ads. Built for operators who actually run media.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            ['linkedin',  'LinkedIn',  <I.linkedin/>],
            ['youtube',   'YouTube',   <I.youtube/>],
            ['instagram', 'Instagram', <I.instagram/>],
            ['telegram',  'Telegram',  <I.telegram/>],
          ].map(([k, label, icon]) => <SocialIcon key={k} label={label} icon={icon}/>)}
        </div>
        <span style={{
          padding: '5px 10px', borderRadius: 999,
          background: 'rgba(195,235,66,0.16)', color: 'var(--ff-rich)',
          border: '1px solid rgba(143,184,33,0.3)',
          fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--ff-rich)' }}/>
          All systems operational
        </span>
      </div>
    </div>
  );
}

function SocialIcon({ label, icon }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href="#" aria-label={label}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         width: 38, height: 38, borderRadius: 10,
         background: hov ? 'var(--ff-ink)' : 'transparent',
         color: hov ? 'var(--ff-lime)' : 'var(--ff-mute)',
         border: `1px solid ${hov ? 'var(--ff-ink)' : 'var(--border-1)'}`,
         display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
         textDecoration: 'none',
         transition: 'background .2s, color .2s, border-color .2s, transform .25s var(--ease-out)',
         transform: hov ? 'translateY(-2px)' : 'translateY(0)',
       }}>{icon}</a>
  );
}

// ============================================================
// 6. Watermark headline
// ============================================================
function Watermark() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '24px 0 16px' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ff-mute)',
          marginBottom: 18,
        }}>
          <span style={{ width: 22, height: 1, background: 'var(--ff-mute)' }}/>
          Start today — it's free
        </div>
        <div style={{ fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(44px, 9vw, 108px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ff-ink)' }}>
          Automate your ads.
        </div>
        <div style={{ fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(44px, 9vw, 108px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ff-rich)', marginTop: 4 }}>
          Scale what works.
        </div>
      </div>
      <div aria-hidden="true" style={{
        position: 'absolute', left: '38%', bottom: -22, right: -40,
        fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(120px, 16vw, 240px)',
        lineHeight: 0.9, letterSpacing: '-0.05em',
        color: 'var(--ff-ink)', opacity: 0.04, pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>FabFunnel</div>
    </section>
  );
}

// ============================================================
// SiteFooter root
// ============================================================
function SiteFooter() {
  return (
    <footer style={{ background: 'var(--ff-cream)', position: 'relative' }}>
      <style>{`
        @keyframes ffFooterColEnter {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1100px) { .ff-footer-nav { grid-template-columns: repeat(2, 1fr) !important; gap: 36px 24px !important; } }
        @media (max-width: 600px)  { .ff-footer-nav { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px)  { .ff-brand-row { flex-direction: column !important; align-items: flex-start !important; } .ff-brand-row > div:last-child { align-items: flex-start !important; } }
      `}</style>

      {/* 1. CTA banner — hovers above with paper-cream backdrop */}
      <div style={{ paddingTop: 88, paddingBottom: 24, background: 'var(--ff-cream)' }}>
        <ClosingCTA/>
      </div>

      {/* 2-3. Newsletter on paper surface */}
      <div style={{ background: 'var(--ff-paper)', borderTop: '1px solid var(--border-1)', paddingTop: 56 }}>
        <NewsletterInline/>
      </div>

      {/* 4-5. Brand row + nav columns */}
      <div style={{ background: 'var(--ff-paper)', borderTop: '1px solid var(--border-1)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <BrandRow/>
          <FooterColumns/>
        </div>
      </div>

      {/* 6. Watermark block */}
      <div style={{ background: 'var(--ff-paper)', padding: '56px 24px 56px', borderTop: '1px solid var(--border-1)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Watermark/>
        </div>
      </div>

      {/* 7. Fine print */}
      <div style={{ background: 'var(--ff-paper)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--ff-lime), transparent)' }}/>
          <div style={{
            padding: '22px 0',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
          }}>
            <div style={{ fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-mute)' }}>© 2026 FabFunnel · All rights reserved</div>
            <div style={{ display: 'flex', gap: 22, fontFamily: "'Geist'", fontSize: 13, color: 'var(--ff-mute)' }}>
              <FooterLink href={(window.ROUTES && window.ROUTES.privacy.href) || '#privacy'}>Privacy</FooterLink>
              <FooterLink href={(window.ROUTES && window.ROUTES.terms.href) || '#terms'}>Terms</FooterLink>
              <FooterLink href="#security">Security</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
