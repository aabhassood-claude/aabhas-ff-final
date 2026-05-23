/* global React, I, MegaItem, PlatformGlyph */

const R = (k) => (window.ROUTES && window.ROUTES[k]) || { href: '#', tbd: false };

// ============================================================
// Featured dark card — used in Platforms + Solutions mega menus
// ============================================================
function MegaFeaturedCard({ children, padded = true }) {
  return (
    <div style={{
      background: 'var(--ff-ink)', borderRadius: 14, overflow: 'hidden',
      padding: padded ? 24 : 0, color: 'var(--ff-paper)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      minHeight: 280, position: 'relative',
      boxShadow: '0 24px 48px -24px rgba(0,0,0,0.4)',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', right: -80, bottom: -80, width: 220, height: 220, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(195,235,66,0.32) 0%, rgba(195,235,66,0) 70%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }}/>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function MiniDashThumb() {
  return (
    <div style={{
      background: '#0F0F0D', borderRadius: 8, border: '1px solid #1F1F1B',
      padding: 10, marginBottom: 14,
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        {['#1877F2', '#000', '#FE2D2D'].map((hex, i) => (
          <span key={i} style={{ width: 14, height: 14, borderRadius: 3, background: hex }}/>
        ))}
        <span style={{ flex: 1 }}/>
        <span style={{ fontFamily: "'Geist Mono'", fontSize: 8, color: '#666', letterSpacing: '0.1em' }}>● LIVE</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {[['ROAS', '4.2×'], ['Spend', '$24k'], ['CPA', '$12']].map(([k, v]) => (
          <div key={k} style={{ background: '#141412', padding: '6px 8px', borderRadius: 4 }}>
            <div style={{ fontFamily: "'Geist Mono'", fontSize: 8, color: '#666', letterSpacing: '0.08em' }}>{k}</div>
            <div style={{ fontFamily: "'Geist'", fontSize: 12, fontWeight: 800, color: '#fff' }}>{v}</div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 100 24" preserveAspectRatio="none" style={{ marginTop: 8, width: '100%', height: 22 }}>
        <polyline fill="none" stroke="#C3EB42" strokeWidth="1.5" points="0,20 14,16 28,18 42,12 56,14 70,8 84,10 100,4"/>
      </svg>
    </div>
  );
}

// ============================================================
// PLATFORMS mega — all 3 platforms are BUILT (not TBD)
// ============================================================
function MegaPlatforms() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 32, padding: '28px 32px' }}>
      <div>
        <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 600, color: 'var(--ff-mute)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0 14px 8px' }}>Ad Platforms</div>
        <MegaItem
          icon={<PlatformGlyph name="meta" size={22}/>}
          title="Meta Ads Automation"
          desc="Facebook & Instagram campaigns — bulk launch, creative testing, auto-rules."
          href={R('meta').href}
        />
        <MegaItem
          icon={<PlatformGlyph name="tiktok" size={22}/>}
          title="TikTok Ads Automation"
          desc="Bulk creation & video analysis — built for the platform's pace."
          href={R('tiktok').href}
        />
        <MegaItem
          icon={<PlatformGlyph name="newsbreak" size={22}/>}
          title="NewsBreak Ads Management"
          desc="Native integration for traffic arbitrage — alongside Meta & TikTok."
          href={R('newsbreak').href}
        />
      </div>
      <MegaFeaturedCard>
        <div>
          <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-lime)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Featured</div>
          <MiniDashThumb/>
        </div>
        <div>
          <div style={{ fontFamily: "'Geist'", fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em', marginBottom: 14 }}>
            See FabFunnel in action
          </div>
          <a href={R('demo').href} style={{ textDecoration: 'none' }}><button style={{
            width: '100%', padding: '10px 14px', borderRadius: 8, border: 'none',
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            Book a demo <I.arrowR/>
          </button></a>
        </div>
      </MegaFeaturedCard>
    </div>
  );
}

// ============================================================
// SOLUTIONS mega — all TBD
// ============================================================
function MegaSolutions() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 32, padding: '28px 32px' }}>
      <div>
        <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 600, color: 'var(--ff-mute)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0 14px 8px' }}>By Role</div>
        <MegaItem icon={<I.target/>}    title="For Media Buyers"     desc="AI co-pilot for performance teams. Always-on guardrails."   href={R('media').href}      tbd={R('media').tbd}/>
        <MegaItem icon={<I.affiliate/>} title="For Affiliate Marketers" desc="Scale campaigns across networks. UTM-first launch flow." href={R('affiliates').href} tbd={R('affiliates').tbd}/>
        <MegaItem icon={<I.sparkle/>}   title="For Ecom Brands"      desc="Catalog-aware creative testing. Shopify & WooCommerce."     href={R('ecom').href}       tbd={R('ecom').tbd}/>
        <MegaItem icon={<I.building/>}  title="For Agencies"         desc="Every client account in one workspace. Cross-brand reporting." href={R('agencies').href} tbd={R('agencies').tbd}/>
      </div>
      <MegaFeaturedCard>
        <div>
          <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'var(--ff-lime)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>Customer story</div>
          <div style={{
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 17, lineHeight: 1.35, letterSpacing: '-0.01em',
            color: 'var(--ff-paper)',
          }}>
            "We replaced three tools and a contractor. <span style={{ color: 'var(--ff-lime)' }}>140 creatives a week</span>, ROAS on day one."
          </div>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--ff-rich)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ff-paper)', fontWeight: 800, fontSize: 11, fontFamily: "'Geist'" }}>MO</div>
            <div>
              <div style={{ fontFamily: "'Geist'", fontWeight: 600, fontSize: 12, color: 'var(--ff-paper)' }}>Maya Ortega</div>
              <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>Head of Performance · Nuvanti</div>
            </div>
          </div>
        </div>
        <a href={R('cases').href} style={{ textDecoration: 'none' }}><button style={{
          marginTop: 16, padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.18)',
          background: 'transparent', color: 'var(--ff-paper)',
          fontFamily: "'Geist'", fontWeight: 700, fontSize: 13, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
        }}>
          View case studies <I.arrowR/>
        </button></a>
      </MegaFeaturedCard>
    </div>
  );
}

// ============================================================
// FEATURES mega — 2 columns × 4 rows, all TBD
// ============================================================
function MegaFeatures() {
  return (
    <div style={{ padding: '24px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        <MegaItem icon={<I.rocket/>}    title="Bulk Campaign Launch"      desc="100+ campaigns in under 5 minutes."                       href={R('bulk').href}       tbd={R('bulk').tbd}/>
        <MegaItem icon={<I.sparkle/>}   title="Creative Generation"       desc="10× ad variations — images, headlines, copy."              href={R('gen').href}        tbd={R('gen').tbd}/>
        <MegaItem icon={<I.bulb/>}      title="Industry Insights"         desc="Trending creatives & benchmarks across your vertical."     href={R('insights').href}   tbd={R('insights').tbd}/>
        <MegaItem icon={<I.book/>}      title="Creative Library"          desc="Organize, tag, and search every creative your team ships." href={R('library').href}    tbd={R('library').tbd}/>
        <MegaItem icon={<I.handshake/>} title="Automation"                desc="Auto-pause, auto-scale, 24/7. Set rules once."             href={R('automation').href} tbd={R('automation').tbd}/>
        <MegaItem icon={<I.chart/>}     title="Multi Ad Account Reporting" desc="15-min sync, unified dashboard, exportable."              href={R('reporting').href}  tbd={R('reporting').tbd}/>
        <MegaItem icon={<I.video/>}     title="Video Sage"                desc="Scene-by-scene breakdown of hooks, transitions, CTAs."     href={R('video').href}      tbd={R('video').tbd}/>
        <MegaItem icon={<I.ai/>}        title="Co-Pilot"                  desc="Suggests optimizations, analyzes trends, drafts briefs."   href={R('copilot').href}    tbd={R('copilot').tbd}/>
      </div>
    </div>
  );
}

// ============================================================
// RESOURCES mega — 2 cols (Learn + Compare)
// ============================================================
function MegaResources() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, padding: '28px 32px' }}>
      <div>
        <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 600, color: 'var(--ff-mute)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0 14px 8px' }}>Learn</div>
        <MegaItem icon={<I.blog/>}      title="Blogs"           desc="Performance marketing playbooks." href={R('blogs').href}      tbd={R('blogs').tbd}/>
        <MegaItem icon={<I.kb/>}        title="Knowledge Base"  desc="Product docs and how-tos."         href={R('docs').href}       tbd={R('docs').tbd}/>
        <MegaItem icon={<I.caseStudy/>} title="Case Studies"    desc="Real results from real teams."     href={R('cases').href}      tbd={R('cases').tbd}/>
        <MegaItem icon={<I.envelope/>}  title="Contact Us"      desc="Talk to sales or support."         href={R('contact').href}    tbd={R('contact').tbd}/>
      </div>
      <div>
        <div style={{ fontFamily: "'Geist Mono'", fontSize: 10, fontWeight: 600, color: 'var(--ff-mute)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0 14px 8px' }}>Compare</div>
        <MegaItem icon={<I.versus/>}    title="FabFunnel vs Madgicx"   desc="See how we compare." href={R('vsMadgicx').href}   tbd={R('vsMadgicx').tbd}/>
        <MegaItem icon={<I.versus/>}    title="FabFunnel vs Revealbot" desc="Feature-by-feature breakdown." href={R('vsRevealbot').href} tbd={R('vsRevealbot').tbd}/>
      </div>
    </div>
  );
}

window.MegaPlatforms = MegaPlatforms;
window.MegaSolutions = MegaSolutions;
window.MegaFeatures  = MegaFeatures;
window.MegaResources = MegaResources;
