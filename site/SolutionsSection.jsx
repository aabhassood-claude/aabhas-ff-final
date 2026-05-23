/* global React, PlatformGlyph */

// ============================================================
// Three sticky-scroll visuals — one per solution
// ============================================================
function AffiliateVisual() {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Stacked launch console */}
      <div style={{
        background: 'var(--ff-paper)', border: '1.5px solid var(--ff-rich)', borderRadius: 14,
        boxShadow: '0 30px 60px -20px rgba(143,184,33,0.3), 0 24px 48px -24px rgba(0,0,0,0.15)',
        width: '88%', maxWidth: 540,
        padding: 22, transform: 'rotate(-1.5deg)',
      }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <span style={{ width: 28, height: 28, borderRadius: 8, background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PlatformGlyph name="meta" size={14}/></span>
          <span style={{ width: 28, height: 28, borderRadius: 8, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PlatformGlyph name="tiktok" size={14}/></span>
          <span style={{ width: 28, height: 28, borderRadius: 8, background: '#FE2D2D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PlatformGlyph name="newsbreak" size={14}/></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 14 }}>
          {['Ad accounts 22', 'Campaigns 200', 'Ad-groups 134', 'Adsets 487'].map(s => (
            <div key={s} style={{ background: 'var(--ff-cream)', padding: '8px 10px', borderRadius: 6, fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)', letterSpacing: '0.06em' }}>
              <span style={{ display: 'block', color: 'var(--ff-mute)' }}>{s.split(' ').slice(0,-1).join(' ')}</span>
              <span style={{ fontFamily: "'Geist'", fontSize: 14, fontWeight: 800, color: 'var(--ff-ink)' }}>{s.split(' ').slice(-1)}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {['Budget $500', 'Markets 46', 'Headlines 26', 'Texts 16', 'Destinations 16'].slice(0,3).map(s => (
            <div key={s} style={{ background: 'var(--ff-cream)', padding: '8px 10px', borderRadius: 6 }}>
              <span style={{ display: 'block', fontFamily: "'Geist Mono'", fontSize: 9.5, color: 'var(--ff-mute)' }}>{s.split(' ').slice(0,-1).join(' ')}</span>
              <span style={{ fontFamily: "'Geist'", fontSize: 14, fontWeight: 800, color: 'var(--ff-ink)' }}>{s.split(' ').slice(-1)}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)' }}>Launch in: 2m 16s</span>
          <button style={{ background: 'var(--ff-lime)', color: 'var(--ff-ink)', border: 'none', padding: '6px 12px', borderRadius: 6, fontFamily: "'Geist'", fontWeight: 700, fontSize: 11.5 }}>Launch</button>
        </div>
      </div>

      {/* Second card peeking behind */}
      <div style={{
        position: 'absolute', top: '14%', right: '6%', width: '38%', maxWidth: 240,
        background: 'var(--ff-paper)', border: '1.5px solid var(--ff-rich)', borderRadius: 14,
        boxShadow: '0 14px 30px -12px rgba(143,184,33,0.3)',
        padding: 16, transform: 'rotate(3deg)',
      }}>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', letterSpacing: '0.1em' }}>UTM</span>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['affiliate=fab','utm_src=meta','utm_med=cpc'].map(t => (
            <div key={t} style={{ fontFamily: "'Geist Mono'", fontSize: 11, color: 'var(--ff-ink)', padding: '6px 8px', borderRadius: 4, background: 'var(--ff-cream)' }}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgencyVisual() {
  const clients = ['Nuvanti', 'Halight', 'Embr', 'Trellis'];
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
      <div style={{
        background: 'var(--ff-paper)', border: '1.5px solid var(--ff-rich)', borderRadius: 14,
        boxShadow: '0 30px 60px -20px rgba(143,184,33,0.3), 0 24px 48px -24px rgba(0,0,0,0.15)',
        width: '92%', maxWidth: 560,
        padding: 22,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Clients · 4</span>
          <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-rich)', fontWeight: 700 }}>● All synced</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {clients.map((c, i) => (
            <div key={c} style={{
              display: 'grid', gridTemplateColumns: '24px 1fr 70px 60px 60px', gap: 12,
              alignItems: 'center', padding: '10px 12px', borderRadius: 8,
              background: i === 0 ? 'rgba(195,235,66,0.12)' : 'var(--ff-cream)',
              border: i === 0 ? '1px solid rgba(143,184,33,0.4)' : '1px solid transparent',
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: 6, background: ['#8FB821','#171717','#FE2D2D','#1877F2'][i],
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Geist'", fontWeight: 800, fontSize: 11,
              }}>{c[0]}</span>
              <span style={{ fontFamily: "'Geist'", fontWeight: 600, fontSize: 13, color: 'var(--ff-ink)' }}>{c}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 11, color: 'var(--ff-ink)', textAlign: 'right' }}>${(38 + i*14).toLocaleString()}k</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 11, color: i === 0 ? 'var(--ff-rich)' : 'var(--fg-2)', textAlign: 'right' }}>{(4.2 - i*0.4).toFixed(1)}×</span>
              <span style={{
                fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-rich)', textAlign: 'right',
                background: 'rgba(195,235,66,0.18)', padding: '3px 8px', borderRadius: 999, fontWeight: 700,
              }}>+{12 - i*2}%</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px dashed var(--border-1)',
          display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Total spend</span>
          <span style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 16, color: 'var(--ff-ink)' }}>$184,302 <span style={{ color: 'var(--ff-rich)', fontWeight: 600, fontSize: 11 }}>+12% wow</span></span>
        </div>
      </div>
    </div>
  );
}

function EcomVisual() {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
      {/* Product catalog card */}
      <div style={{
        background: 'var(--ff-paper)', border: '1.5px solid var(--ff-rich)', borderRadius: 14,
        boxShadow: '0 30px 60px -20px rgba(143,184,33,0.3), 0 24px 48px -24px rgba(0,0,0,0.15)',
        width: '88%', maxWidth: 540, padding: 22, transform: 'rotate(-1deg)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-mute)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Catalog · 312 SKUs</span>
          <span style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-rich)', fontWeight: 700 }}>● Auto-pull</span>
        </div>
        {/* Product grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 14 }}>
          {[
            ['#FFE8D9', '#FFB37D', 'Tee'],
            ['#E0F0FF', '#7AB8F5', 'Cap'],
            ['#E8FFE0', '#8FB821', 'Mug'],
            ['#FFE8F0', '#F57AB8', 'Bag'],
          ].map(([bg, dot, label], i) => (
            <div key={i} style={{ background: bg, borderRadius: 8, padding: 8, position: 'relative', overflow: 'hidden', aspectRatio: '1' }}>
              <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, borderRadius: 999, background: dot }}/>
              <div style={{ position: 'absolute', bottom: 6, left: 6, fontFamily: "'Geist Mono'", fontSize: 9, color: 'rgba(23,23,23,0.6)', fontWeight: 700, letterSpacing: '0.06em' }}>{label}</div>
            </div>
          ))}
        </div>
        {/* SKU performance row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            ['Linen Tee · UGC-A', 'ROAS 5.4×', true],
            ['Snapback · Studio-B', 'ROAS 4.1×', false],
            ['Tote · Lifestyle-C', 'ROAS 2.2×', false],
          ].map(([sku, roas, hot], i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 6,
              background: hot ? 'rgba(195,235,66,0.16)' : 'var(--ff-cream)',
              border: hot ? '1px solid rgba(143,184,33,0.4)' : '1px solid transparent',
            }}>
              <span style={{ fontFamily: "'Geist'", fontSize: 12, color: 'var(--ff-ink)', flex: 1, fontWeight: 600 }}>{sku}</span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 11, fontWeight: 700, color: hot ? 'var(--ff-rich)' : 'var(--fg-2)' }}>{roas}</span>
              {hot && <span style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-rich)', fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: 'rgba(195,235,66,0.25)', letterSpacing: '0.06em' }}>SCALE</span>}
            </div>
          ))}
        </div>
      </div>
      {/* Shopify badge peeking */}
      <div style={{
        position: 'absolute', top: '8%', right: '4%',
        background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 12,
        padding: '10px 14px', boxShadow: '0 14px 30px -12px rgba(0,0,0,0.18)',
        transform: 'rotate(3deg)', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ width: 22, height: 22, borderRadius: 6, background: '#96BF48', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Geist'", fontWeight: 800, fontSize: 12 }}>S</span>
        <span style={{ fontFamily: "'Geist'", fontSize: 12, fontWeight: 700, color: 'var(--ff-ink)' }}>Shopify synced</span>
      </div>
    </div>
  );
}

function MediaBuyerVisual() {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
      <div style={{
        background: 'var(--ff-paper)', border: '1.5px solid var(--ff-rich)', borderRadius: 14,
        boxShadow: '0 30px 60px -20px rgba(143,184,33,0.3), 0 24px 48px -24px rgba(0,0,0,0.15)',
        width: '90%', maxWidth: 540,
      }}>
        {/* Co-pilot chat */}
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border-1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 28, height: 28, borderRadius: 999, background: 'var(--ff-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--ff-lime)', fontFamily: "'Geist'", fontWeight: 800, fontSize: 14,
            }}>★</span>
            <span style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, color: 'var(--ff-ink)' }}>AI Co-pilot</span>
            <span style={{ marginLeft: 'auto', fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-rich)' }}>● Live</span>
          </div>
        </div>
        <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--ff-ink)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ff-lime)', fontFamily: "'Geist'", fontWeight: 800, fontSize: 11 }}>★</span>
            <div style={{ background: 'var(--ff-cream)', padding: '10px 14px', borderRadius: 12, fontFamily: "'Geist'", fontSize: 13, lineHeight: 1.5, color: 'var(--ff-ink)' }}>
              "iOS-Cart-Lookalike-v3" is overspending without converting. <strong>Suggested: pause it and shift $400/day to "UGC-Batch-12"</strong> which is at 5.8× ROAS.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--ff-ink)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ff-lime)', fontFamily: "'Geist'", fontWeight: 800, fontSize: 11 }}>★</span>
            <div style={{ background: 'var(--ff-cream)', padding: '10px 14px', borderRadius: 12, fontFamily: "'Geist'", fontSize: 13, lineHeight: 1.5, color: 'var(--ff-ink)' }}>
              CTR on the new TikTok creative dropped 18% over 24h. Want me to <strong style={{ color: 'var(--ff-rich)' }}>auto-generate 6 variants</strong> from the winning hook?
            </div>
          </div>
          <div style={{ marginLeft: 36, display: 'flex', gap: 8 }}>
            <button style={{ background: 'var(--ff-lime)', color: 'var(--ff-ink)', border: 'none', padding: '6px 12px', borderRadius: 6, fontFamily: "'Geist'", fontWeight: 700, fontSize: 11.5 }}>Yes, generate</button>
            <button style={{ background: 'transparent', color: 'var(--fg-2)', border: '1px solid var(--border-1)', padding: '6px 12px', borderRadius: 6, fontFamily: "'Geist'", fontWeight: 600, fontSize: 11.5 }}>Maybe later</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Sticky-scroll storytelling block
// ============================================================
function SolutionsSection() {
  const sectionRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  // Scroll-based active step detection. Computes which step is closest to
  // the center of the viewport on every scroll/resize tick. This is more
  // reliable than IntersectionObserver in some preview iframes.
  React.useEffect(() => {
    const root = rightRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('[data-step]'));

    let raf = null;
    const compute = () => {
      raf = null;
      let best = 0, bestDist = Infinity;
      const vh = window.innerHeight;
      items.forEach(el => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        if (dist < bestDist) { bestDist = dist; best = parseInt(el.getAttribute('data-step'), 10); }
      });
      setActive(best);
    };
    const onScroll = () => { if (raf == null) raf = requestAnimationFrame(compute); };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const steps = [
    {
      key: 'media',
      label: 'Media Buyers',
      icon: '✦',
      title: 'Your AI-powered campaign assistant.',
      body: 'It watches performance around the clock, flags issues before they cost you, and suggests moves your team might have missed.',
      cta: 'Media Buyers solution',
      Visual: MediaBuyerVisual,
    },
    {
      key: 'affiliate',
      label: 'Affiliate Marketers',
      icon: '↗',
      title: 'Hundreds of variations in a single session.',
      body: 'Launch ad variations across Meta, TikTok, and NewsBreak in one operation. What used to take your team all day now happens before lunch.',
      cta: 'Affiliate solution',
      Visual: AffiliateVisual,
    },
    {
      key: 'ecom',
      label: 'Ecom Brands',
      icon: '⌘',
      title: 'Catalog-aware creative at every SKU.',
      body: 'Pull products straight from Shopify or WooCommerce. FabFunnel generates SKU-tagged creatives, watches per-product ROAS, and scales the winners across markets.',
      cta: 'Ecom solution',
      Visual: EcomVisual,
    },
    {
      key: 'agencies',
      label: 'Agencies',
      icon: '◧',
      title: 'Every account. Every platform. One clean dashboard.',
      body: 'Agencies love this. No more logging into ten accounts to build one client report. Cross-brand views, shared workspaces, and a single source of performance truth.',
      cta: 'Agencies solution',
      Visual: AgencyVisual,
    },
  ];

  return (
    <section ref={sectionRef} id="solutions" style={{ background: 'var(--ff-paper)', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px 64px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Solutions</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            Built for how <span style={{ color: 'var(--ff-rich)' }}>you</span> work.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 560, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Adapt FabFunnel to your workflow.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-start' }} className="ff-solutions-grid">
          {/* Sticky visual */}
          <div className="ff-solutions-visual" style={{
            position: 'sticky', top: 96, height: '70vh', minHeight: 520,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {steps.map((s, i) => {
              const V = s.Visual;
              return (
                <div key={s.key} style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? 'translateY(0)' : (active > i ? 'translateY(-18px)' : 'translateY(18px)'),
                  transition: 'opacity .55s var(--ease-out), transform .55s var(--ease-out)',
                  pointerEvents: active === i ? 'auto' : 'none',
                }}>
                  <V/>
                </div>
              );
            })}
          </div>

          {/* Scrolling right column */}
          <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {steps.map((s, i) => (
              <div key={s.key} data-step={i} style={{
                minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                paddingTop: 8,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <span style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: active === i ? 'var(--ff-lime)' : 'var(--ff-cream)',
                    color: 'var(--ff-ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Geist'", fontWeight: 800, fontSize: 18,
                    transition: 'background .3s var(--ease-out)',
                  }}>{s.icon}</span>
                  <span style={{
                    fontFamily: "'Geist'", fontWeight: 700, fontSize: 15, color: 'var(--ff-ink)',
                  }}>{s.label}</span>
                </div>
                <h3 style={{
                  margin: 0, fontFamily: "'Geist'", fontWeight: 800,
                  fontSize: 'clamp(26px, 2.8vw, 34px)', letterSpacing: '-0.02em', lineHeight: 1.15,
                  color: 'var(--ff-ink)',
                }}>{s.title}</h3>
                <p style={{
                  marginTop: 16, marginBottom: 0,
                  fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 480,
                }}>{s.body}</p>
                <button style={{
                  marginTop: 24, alignSelf: 'flex-start',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '10px 16px', borderRadius: 10,
                  background: active === i ? 'var(--ff-lime)' : 'var(--ff-paper)',
                  color: 'var(--ff-ink)',
                  border: active === i ? 'none' : '1.5px solid var(--ff-ink)',
                  fontFamily: "'Geist'", fontWeight: 700, fontSize: 14, cursor: 'pointer',
                  transition: 'background .25s var(--ease-out), color .25s var(--ease-out)',
                  boxShadow: active === i ? '0 10px 24px -8px rgba(143,184,33,0.4)' : 'none',
                }}>
                  {s.cta}
                  <span style={{
                    background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                    width: 22, height: 22, borderRadius: 5,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11,
                  }}>›</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ff-solutions-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ff-solutions-visual { position: relative !important; top: auto !important; height: 380px !important; min-height: 380px !important; }
        }
      `}</style>
    </section>
  );
}

window.SolutionsSection = SolutionsSection;
