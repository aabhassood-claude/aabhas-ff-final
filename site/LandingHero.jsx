/* global React, LandingDashboardMock, PlatformGlyph */

// ============================================================
// Rotating word — fades + slides up
// ============================================================
function RotatingWord({ words, interval = 2200 }) {
  const [idx, setIdx] = React.useState(0);
  const prefersReducedMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []
  );
  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, prefersReducedMotion]);

  const longest = words.reduce((a, w) => w.length > a.length ? w : a, '');

  return (
    <span style={{
      position: 'relative', display: 'inline-block', verticalAlign: 'baseline',
      minWidth: `${longest.length * 0.58}em`, height: '1.1em', lineHeight: 1.1,
    }}>
      {words.map((w, i) => (
        <span key={w} style={{
          position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap',
          color: 'var(--ff-rich)',
          opacity: i === idx ? 1 : 0,
          transform: i === idx ? 'translateY(0)' : (i === (idx - 1 + words.length) % words.length ? 'translateY(-22%)' : 'translateY(22%)'),
          transition: 'opacity .5s var(--ease-out), transform .55s var(--ease-out)',
        }}>{w}</span>
      ))}
      {/* underline pulse */}
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: -8,
        height: 8, background: 'var(--ff-lime)', borderRadius: 999,
        transform: 'scaleX(0.92)', transformOrigin: 'left', opacity: 0.85,
        animation: prefersReducedMotion ? 'none' : 'ffUnderlineGlide 2.2s var(--ease-in-out) infinite',
      }}/>
    </span>
  );
}

// ============================================================
// Cursor-tilt wrapper — gentle 3D tilt, ~6° max
// ============================================================
function TiltCard({ children, max = 5 }) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({ x: 0, y: 0 });
  const prefersReducedMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []
  );

  const onMove = (e) => {
    if (prefersReducedMotion) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: -dy * max, y: dx * max });
  };
  const onLeave = () => setT({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1600 }}
    >
      <div style={{
        transform: `rotateX(${t.x}deg) rotateY(${t.y}deg) translateZ(0)`,
        transition: 'transform .25s cubic-bezier(0.22,1,0.36,1)',
        transformStyle: 'preserve-3d', willChange: 'transform',
      }}>
        {children}
      </div>
    </div>
  );
}

// ============================================================
// Parallax floating logo — moves opposite to scroll
// ============================================================
function ParallaxLogo({ top, left, right, glyph, depth = 0.12, size = 56, delay = 0 }) {
  const [y, setY] = React.useState(0);
  const ref = React.useRef(null);
  const [appeared, setAppeared] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setAppeared(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  React.useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // distance from viewport center
          const dy = rect.top + rect.height / 2 - window.innerHeight / 2;
          setY(dy * depth);
        }
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [depth]);

  return (
    <div ref={ref} style={{
      position: 'absolute', top, left, right,
      transform: `translateY(${y}px) scale(${appeared ? 1 : 0.6})`,
      opacity: appeared ? 1 : 0,
      transition: 'opacity .8s var(--ease-out), transform .8s var(--ease-out)',
      pointerEvents: 'none', zIndex: 1,
    }}>
      <div style={{
        width: size, height: size, borderRadius: size * 0.28,
        background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 18px 36px -18px rgba(0,0,0,0.18), 0 6px 14px -6px rgba(0,0,0,0.08)',
      }}>
        <PlatformGlyph name={glyph} size={size * 0.55}/>
      </div>
    </div>
  );
}

// ============================================================
// Animated grid background — slow drift, masked to fade
// ============================================================
function HeroBg() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
    }}>
      <div style={{
        position: 'absolute', inset: '-15% -10%',
        backgroundImage: `linear-gradient(rgba(23,23,23,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(23,23,23,0.05) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 75% 70% at 50% 35%, black, transparent 78%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 35%, black, transparent 78%)',
        animation: 'ffHeroGrid 60s linear infinite',
      }}/>
      <div style={{
        position: 'absolute', width: 760, height: 760, borderRadius: '50%',
        top: '-25%', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(195,235,66,0.28) 0%, rgba(195,235,66,0.06) 35%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'ffHeroMesh 24s ease-in-out infinite alternate',
      }}/>
    </div>
  );
}

// ============================================================
// Landing Hero
// ============================================================
function LandingHero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--ff-cream)', padding: '64px 24px 96px',
    }}>
      <style>{`
        @keyframes ffHeroGrid {
          from { transform: translate(0,0); }
          to   { transform: translate(56px,56px); }
        }
        @keyframes ffHeroMesh {
          from { transform: translateX(-50%) scale(1); }
          to   { transform: translateX(-50%) scale(1.18); }
        }
        @keyframes ffUnderlineGlide {
          0%, 100% { transform: scaleX(0.92); opacity: 0.85; }
          50%      { transform: scaleX(1);    opacity: 1; }
        }
        @keyframes ffFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ff-fade-up { animation: ffFadeUp .7s var(--ease-out) both; }
      `}</style>
      <HeroBg/>

      {/* Floating parallax logos — desktop only */}
      <div className="ff-parallax-host" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <ParallaxLogo top="90px"  left="8%"  glyph="newsbreak" depth={0.14} size={60} delay={150}/>
        <ParallaxLogo top="220px" left="3%"  glyph="tiktok"    depth={0.10} size={52} delay={300}/>
        <ParallaxLogo top="120px" right="6%" glyph="meta"      depth={0.14} size={60} delay={200}/>
        <ParallaxLogo top="260px" right="2%" glyph="redtrack"  depth={0.10} size={52} delay={350}/>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto' }}>
        {/* Headline */}
        <div className="ff-fade-up" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{
            margin: 0, fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(40px, 6vw, 84px)', lineHeight: 1.05, letterSpacing: '-0.035em',
            color: 'var(--ff-ink)',
          }}>
            One platform for{' '}
            <RotatingWord words={['Optimizing', 'Scaling', 'Launching', 'Automating']}/>
          </h1>
          <p style={{
            margin: '24px auto 0', maxWidth: 620,
            fontFamily: "'Geist'", fontSize: 18, lineHeight: 1.55, color: 'var(--fg-2)',
          }}>
            Launch hundreds of campaigns in minutes. Let the robots handle the boring stuff.
          </p>
          <div className="ff-hero-cta-row" style={{ marginTop: 30, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={(typeof window !== 'undefined' && window.ROUTES && window.ROUTES.trial.href) || 'pricing.html'} style={{ textDecoration: 'none' }}><button className="btn-cta-primary" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 16px 12px 22px', borderRadius: 10, border: 'none',
              background: 'var(--ff-lime)', color: 'var(--ff-ink)',
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 15, cursor: 'pointer',
              boxShadow: '0 12px 28px -10px rgba(143,184,33,0.5)',
              transition: 'filter .15s var(--ease-out), transform .15s var(--ease-out)',
            }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.05)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            >
              Get Started
              <span style={{
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 26, height: 26, borderRadius: 6,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13,
              }}>›</span>
            </button></a>
            <a href={(typeof window !== 'undefined' && window.ROUTES && window.ROUTES.demo.href) || 'pricing.html'} style={{ textDecoration: 'none' }}><button style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 16px 12px 22px', borderRadius: 10,
              background: 'var(--ff-paper)', color: 'var(--ff-ink)', border: '1.5px solid var(--ff-ink)',
              fontFamily: "'Geist'", fontWeight: 700, fontSize: 15, cursor: 'pointer',
              transition: 'background .15s var(--ease-out), color .15s var(--ease-out)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ff-ink)'; e.currentTarget.style.color = 'var(--ff-paper)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ff-paper)'; e.currentTarget.style.color = 'var(--ff-ink)'; }}
            >
              Book A Demo
              <span style={{
                background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                width: 26, height: 26, borderRadius: 6,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13,
              }}>›</span>
            </button></a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="ff-hero-dash-wrap ff-fade-up" style={{ marginTop: 64, animationDelay: '120ms', position: 'relative' }}>
          {/* Lime glow underneath */}
          <div aria-hidden="true" style={{
            position: 'absolute', left: '8%', right: '8%', bottom: -40, height: 80,
            background: 'radial-gradient(ellipse at center, rgba(195,235,66,0.55) 0%, rgba(195,235,66,0) 70%)',
            filter: 'blur(40px)', zIndex: 0,
          }}/>
          <div className="ff-tilt-host" style={{ position: 'relative', zIndex: 1 }}>
            <TiltCard max={4}>
              <LandingDashboardMock/>
            </TiltCard>
          </div>
        </div>

        {/* Logo strip below dashboard */}
        <div className="ff-fade-up" style={{
          marginTop: 44, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14,
          animationDelay: '240ms',
        }}>
          {[
            ['redtrack', 'Redtrack'],
            ['meta', 'Meta'],
            ['tiktok', 'TikTok'],
            ['newsbreak', 'NewsBreak'],
            ['slack', 'Slack'],
          ].map(([g, label]) => (
            <span key={label} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 999,
              background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
              fontFamily: "'Geist'", fontSize: 13, fontWeight: 600, color: 'var(--fg-2)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <PlatformGlyph name={g} size={16}/>
              {label}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ff-parallax-host { display: none; }
          .ff-tilt-host { transform: none !important; }
          .ff-hero-dash-wrap { overflow-x: auto; padding-bottom: 12px; }
          .ff-hero-dash-wrap > div { min-width: 640px; }
        }
        @media (max-width: 600px) {
          .ff-hero-cta-row { flex-direction: column !important; width: 100%; max-width: 360px; margin-left: auto; margin-right: auto; }
          .ff-hero-cta-row > a { width: 100%; }
          .ff-hero-cta-row > a > button { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

window.LandingHero = LandingHero;
