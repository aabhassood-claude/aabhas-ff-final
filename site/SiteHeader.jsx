/* global React, FFLockup, I, MegaPlatforms, MegaSolutions, MegaFeatures, MegaResources, MegaItem, PlatformGlyph */

// ============================================================
// SiteHeader — sticky header with mega menus + mobile drawer.
// Drop-in replacement for SiteNavLive.
// ============================================================

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

const NAV_ITEMS = (typeof window !== 'undefined' && window.NAV_ROUTES && window.ROUTES)
  ? window.NAV_ROUTES.map(k => {
      const r = window.ROUTES[k];
      const hasMenu = ['platforms','solutions','features','resources'].includes(k);
      return { k, label: r.label, Menu: hasMenu ? `Mega${k[0].toUpperCase()}${k.slice(1)}` : null, hash: r.href };
    })
  : [
      { k: 'platforms', label: 'PLATFORMS', Menu: 'MegaPlatforms', hash: 'landing.html#platforms' },
      { k: 'solutions', label: 'SOLUTIONS', Menu: 'MegaSolutions', hash: 'landing.html#solutions' },
      { k: 'features',  label: 'FEATURES',  Menu: 'MegaFeatures',  hash: 'landing.html#features' },
      { k: 'resources', label: 'RESOURCES', Menu: 'MegaResources', hash: 'landing.html#resources' },
      { k: 'pricing',   label: 'PRICING',   Menu: null,            hash: 'pricing.html' },
    ];

function NavLink({ item, active, open, onEnter, onLeave }) {
  const isActive = active === item.k;
  const isOpen = open === item.k;
  const hot = isActive || isOpen;
  return (
    <a
      href={item.hash}
      onMouseEnter={() => onEnter(item.k)}
      style={{
        position: 'relative',
        padding: '20px 4px',
        fontFamily: "'Geist Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
        color: hot ? 'var(--ff-ink)' : 'var(--ff-mute)',
        textDecoration: 'none',
        transition: 'color .2s ease-in-out',
        display: 'inline-flex', alignItems: 'center', gap: 4,
      }}
    >
      {item.label}
      {item.Menu && (
        <span style={{
          opacity: 0.5, display: 'inline-flex',
          transition: 'transform .2s var(--ease-out)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        }}><I.chevronD/></span>
      )}
      {/* animated underline */}
      <span style={{
        position: 'absolute', left: 2, right: 2, bottom: 14,
        height: 2, borderRadius: 999, background: 'var(--ff-lime)',
        transform: hot ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform .25s var(--ease-out)',
      }}/>
    </a>
  );
}

function SiteHeader({ active }) {
  // If no active prop is passed, auto-detect from URL.
  const detectedActive = (typeof window !== 'undefined' && window.getActivePage) ? window.getActivePage() : 'home';
  active = active || detectedActive;

  const scrolled = useScrolled(8);
  const [open, setOpen] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [transitioning, setTransitioning] = React.useState(false);
  const closeTimer = React.useRef(null);

  // Smooth handoff from main site → Fab AI workspace.
  // Shows a brief on-theme overlay, then navigates.
  const enterFabAI = (e) => {
    if (e) e.preventDefault();
    const href = (window.ROUTES && window.ROUTES.tryAI && window.ROUTES.tryAI.href) || 'fab-ai.html';
    setTransitioning(true);
    setMobileOpen(false);
    setTimeout(() => { window.location.href = href; }, 720);
  };

  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const openMenu = (k) => {
    cancelClose();
    const item = NAV_ITEMS.find(i => i.k === k);
    if (!item || !item.Menu) { setOpen(null); return; }
    setOpen(k);
  };

  // Close on Esc
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(null); setMobileOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const MenuMap = {
    MegaPlatforms: typeof window !== 'undefined' ? window.MegaPlatforms : null,
    MegaSolutions: typeof window !== 'undefined' ? window.MegaSolutions : null,
    MegaFeatures:  typeof window !== 'undefined' ? window.MegaFeatures  : null,
    MegaResources: typeof window !== 'undefined' ? window.MegaResources : null,
  };
  const openItem = open ? NAV_ITEMS.find(i => i.k === open) : null;
  const OpenMenu = openItem && openItem.Menu ? MenuMap[openItem.Menu] : null;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 90 }}>
      <nav style={{
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--border-1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 18px -8px rgba(0,0,0,0.06)' : 'none',
        transition: 'background .25s ease-in-out, border-color .25s ease-in-out, box-shadow .25s ease-in-out',
      }}>
        <div style={{
          maxWidth: 1340, margin: '0 auto', padding: '0 32px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href={(window.ROUTES && window.ROUTES.home.href) || 'landing.html'} style={{ textDecoration: 'none', flexShrink: 0 }}><FFLockup height={18}/></a>

          {/* Desktop nav */}
          <div className="ff-nav-desktop"
               onMouseLeave={scheduleClose}
               style={{ display: 'flex', gap: 32 }}>
            {NAV_ITEMS.map(item => (
              <NavLink key={item.k} item={item} active={active} open={open}
                       onEnter={(k) => { if (NAV_ITEMS.find(i => i.k === k).Menu) openMenu(k); else setOpen(null); }}/>
            ))}
          </div>

          {/* Right side */}
          <div className="ff-nav-right" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href={(window.ROUTES && window.ROUTES.tryAI.href) || '#try'}
               onClick={enterFabAI}
               style={{
              fontFamily: "'Geist'", fontSize: 13, fontWeight: 600,
              color: 'var(--ff-ink)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              cursor: 'pointer',
            }}>
              Try Fab AI
              <span style={{
                background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 700,
                letterSpacing: '0.12em', padding: '3px 7px', borderRadius: 4,
              }}>NEW</span>
            </a>
            <a href={(window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} style={{ textDecoration: 'none' }}><button style={{
              background: 'var(--ff-lime)', color: 'var(--ff-ink)', border: 'none',
              padding: '10px 14px 10px 18px', borderRadius: 8,
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'filter .15s var(--ease-out)',
            }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.05)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            >
              Book A Demo
              <span style={{
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 22, height: 22, borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12,
              }}>›</span>
            </button></a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="ff-nav-hamburger"
            onClick={() => setMobileOpen(true)}
            style={{
              display: 'none',
              background: 'transparent', border: '1px solid var(--border-1)',
              width: 40, height: 40, borderRadius: 8, cursor: 'pointer',
              alignItems: 'center', justifyContent: 'center', color: 'var(--ff-ink)',
            }}
          >
            <I.hamburger/>
          </button>
        </div>

        {/* Mega menu panel */}
        <div
          aria-hidden={!OpenMenu}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={{
            position: 'absolute', left: 0, right: 0, top: '100%',
            display: 'flex', justifyContent: 'center',
            pointerEvents: OpenMenu ? 'auto' : 'none',
            paddingBottom: 24,
          }}
        >
          <div style={{
            width: 'min(1100px, calc(100vw - 48px))',
            background: 'var(--ff-paper)',
            border: '1px solid var(--border-1)', borderRadius: 16,
            boxShadow: '0 30px 60px -20px rgba(0,0,0,0.15), 0 60px 120px -40px rgba(0,0,0,0.1)',
            transform: OpenMenu ? 'translateY(8px)' : 'translateY(-4px)',
            opacity: OpenMenu ? 1 : 0,
            transition: 'transform .2s var(--ease-out), opacity .18s var(--ease-out)',
            overflow: 'hidden',
          }}>
            {OpenMenu && <OpenMenu/>}
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} enterFabAI={enterFabAI}/>

      {/* Smooth Fab AI handoff overlay */}
      <FabAITransition active={transitioning}/>

      <style>{`
        @media (max-width: 960px) {
          .ff-nav-desktop, .ff-nav-right { display: none !important; }
          .ff-nav-hamburger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}

// ============================================================
// Mobile drawer — slide in from right, accordion subitems
// ============================================================
function MobileDrawer({ open, onClose, enterFabAI }) {
  const [expanded, setExpanded] = React.useState(null);
  React.useEffect(() => { if (!open) setExpanded(null); }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const sections = [
    { k: 'platforms', label: 'Platforms', items: [
      ['Meta Ads Automation', <PlatformGlyph name="meta" size={20}/>, (window.ROUTES && window.ROUTES.meta.href) || '#meta'],
      ['TikTok Ads Automation', <PlatformGlyph name="tiktok" size={20}/>, (window.ROUTES && window.ROUTES.tiktok.href) || '#tiktok'],
      ['NewsBreak', <PlatformGlyph name="newsbreak" size={20}/>, (window.ROUTES && window.ROUTES.newsbreak.href) || '#newsbreak'],
    ]},
    { k: 'solutions', label: 'Solutions', items: [
      ['For Agencies', <I.building/>, (window.ROUTES && window.ROUTES.agencies.href) || '#agencies'],
      ['For Affiliates', <I.affiliate/>, (window.ROUTES && window.ROUTES.affiliates.href) || '#affiliates'],
      ['For Media Buyers', <I.target/>, (window.ROUTES && window.ROUTES.media.href) || '#media'],
    ]},
    { k: 'features', label: 'Features', items: [
      ['Bulk Campaign Launch', <I.rocket/>, (window.ROUTES && window.ROUTES.bulk.href) || '#bulk'],
      ['Automation', <I.handshake/>, (window.ROUTES && window.ROUTES.automation.href) || '#automation'],
      ['Creative Library', <I.book/>, (window.ROUTES && window.ROUTES.library.href) || '#library'],
      ['Industry Insights', <I.bulb/>, (window.ROUTES && window.ROUTES.insights.href) || '#insights'],
      ['Multi Ad Account Reporting', <I.chart/>, (window.ROUTES && window.ROUTES.reporting.href) || '#reporting'],
      ['Creative Generations', <I.sparkle/>, (window.ROUTES && window.ROUTES.gen.href) || '#gen'],
      ['Co-Pilot AI Strategy', <I.ai/>, (window.ROUTES && window.ROUTES.copilot.href) || '#copilot'],
      ['Video Analysis', <I.video/>, (window.ROUTES && window.ROUTES.video.href) || '#video'],
    ]},
    { k: 'resources', label: 'Resources', items: [
      ['Blogs', <I.blog/>, (window.ROUTES && window.ROUTES.blogs.href) || '#blogs'],
      ['Case Studies', <I.caseStudy/>, (window.ROUTES && window.ROUTES.cases.href) || '#cases'],
      ['Knowledge Base', <I.kb/>, (window.ROUTES && window.ROUTES.docs.href) || '#docs'],
      ['Newsletter', <I.envelope/>, (window.ROUTES && window.ROUTES.newsletter.href) || '#newsletter'],
      ['vs Madgicx', <I.versus/>, (window.ROUTES && window.ROUTES.vsMadgicx.href) || '#vs-madgicx'],
      ['vs Revealbot', <I.versus/>, (window.ROUTES && window.ROUTES.vsRevealbot.href) || '#vs-revealbot'],
    ]},
  ];

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15,15,12,0.5)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .2s var(--ease-out)',
        backdropFilter: 'blur(2px)',
      }}/>
      {/* Drawer */}
      <aside aria-hidden={!open} style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 101,
        width: 'min(360px, 92vw)', background: 'var(--ff-paper)',
        boxShadow: '-20px 0 40px -20px rgba(0,0,0,0.2)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .3s var(--ease-out)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border-1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FFLockup height={16}/>
          <button aria-label="Close menu" onClick={onClose} style={{
            background: 'transparent', border: '1px solid var(--border-1)',
            width: 36, height: 36, borderRadius: 8, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <I.close/>
          </button>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 8px' }}>
          {sections.map(s => {
            const ex = expanded === s.k;
            return (
              <div key={s.k} style={{ borderBottom: '1px solid var(--border-1)' }}>
                <button onClick={() => setExpanded(ex ? null : s.k)} style={{
                  width: '100%', padding: '16px 14px', background: 'transparent', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 16, color: ex ? 'var(--ff-rich)' : 'var(--ff-ink)',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'color .2s ease-in-out',
                }}>
                  {s.label}
                  <span style={{ transform: ex ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform .25s var(--ease-out)', color: 'var(--ff-mute)' }}>
                    <I.chevronR/>
                  </span>
                </button>
                <div style={{
                  maxHeight: ex ? 600 : 0, overflow: 'hidden',
                  transition: 'max-height .35s var(--ease-out)',
                }}>
                  <div style={{ padding: '4px 4px 12px' }}>
                    {s.items.map(([label, icon, href]) => (
                      <a key={label} href={href} onClick={onClose} style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '10px 14px', borderRadius: 8, textDecoration: 'none',
                        color: 'var(--ff-ink)',
                        fontFamily: "'Geist'", fontSize: 14, fontWeight: 500,
                      }}>
                        <span style={{ width: 32, height: 32, borderRadius: 7, background: 'var(--ff-cream)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <a href={(window.ROUTES && window.ROUTES.pricing.href) || 'pricing.html'} onClick={onClose} style={{
            display: 'block', padding: '20px 14px',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 16, color: 'var(--ff-ink)',
            textDecoration: 'none', borderBottom: '1px solid var(--border-1)',
          }}>Pricing</a>

          <div style={{ padding: '20px 14px' }}>
            <a href={(window.ROUTES && window.ROUTES.tryAI.href) || '#try'}
               onClick={(e) => { if (enterFabAI) enterFabAI(e); else onClose(); }}
               style={{
              fontFamily: "'Geist'", fontSize: 13, fontWeight: 600,
              color: 'var(--ff-ink)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              cursor: 'pointer',
            }}>
              Try Fab AI
              <span style={{
                background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 700,
                letterSpacing: '0.12em', padding: '3px 7px', borderRadius: 4,
              }}>NEW</span>
            </a>
          </div>
        </nav>
        <div style={{ padding: 16, borderTop: '1px solid var(--border-1)', background: 'var(--ff-cream)' }}>
          <a href={(window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} onClick={onClose} style={{ textDecoration: 'none' }}><button style={{
            width: '100%', padding: '14px 16px', borderRadius: 10, border: 'none',
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 15, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            boxShadow: '0 12px 28px -10px rgba(143,184,33,0.5)',
          }}>
            Book A Demo
            <span style={{ background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              width: 22, height: 22, borderRadius: 5,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>›</span>
          </button></a>
        </div>
      </aside>
    </>
  );
}

window.SiteHeader = SiteHeader;

// ============================================================
// FabAITransition — clean handoff overlay shown when a user
// navigates from the main site into the Fab AI workspace.
// Cream surface, FabFunnel mark → arrow → Fab AI badge,
// thin lime progress bar, mono "loading workspace" caption.
// ============================================================
function FabAITransition({ active }) {
  // Lock body scroll while overlay is visible
  React.useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [active]);

  return (
    <>
      <div aria-hidden={!active} style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'var(--ff-cream)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'auto' : 'none',
        transition: 'opacity .35s var(--ease-out)',
      }}>
        {/* Soft lime halo */}
        <div aria-hidden="true" style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(195,235,66,0.36) 0%, rgba(195,235,66,0.06) 40%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
          transform: active ? 'scale(1.05)' : 'scale(0.9)',
          transition: 'transform .9s var(--ease-out)',
        }}/>

        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26,
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity .4s var(--ease-out) .08s, transform .5s var(--ease-out) .08s',
        }}>
          {/* Logo chain: FabFunnel mark → arrow → Fab AI badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <FFLockup height={22}/>
            <span aria-hidden="true" style={{
              fontFamily: "'Geist Mono'", fontSize: 14, fontWeight: 700,
              color: 'var(--ff-mute)', letterSpacing: '0.06em',
            }}>→</span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px', borderRadius: 999,
              background: 'var(--ff-ink)', color: 'var(--ff-lime)',
              fontFamily: "'Geist Mono'", fontSize: 12, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              border: '1px solid var(--ff-ink)',
              boxShadow: '0 14px 28px -12px rgba(0,0,0,0.18)',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--ff-lime)' }}/>
              Fab AI
            </span>
          </div>

          {/* Thin progress bar */}
          <div style={{
            width: 240, height: 3, borderRadius: 999,
            background: 'rgba(23,23,23,0.08)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'var(--ff-lime)',
              borderRadius: 999,
              transformOrigin: 'left',
              animation: active ? 'ffaiTransProg .65s var(--ease-out) forwards' : 'none',
            }}/>
          </div>

          {/* Caption */}
          <div style={{
            fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700,
            color: 'var(--ff-mute)', letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>
            Entering workspace
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ffaiTransProg {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}

window.FabAITransition = FabAITransition;
