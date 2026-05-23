/* global React, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// Testimonials — masonry-style grid of quotes from real operators
// ============================================================
const QUOTES = [
  { name: 'Tyler Conrad',   role: 'Affiliate Marketer · SOLO',         quote: 'Going from spreadsheets to FabFunnel was like going from a flip phone to an iPhone. 200+ ad sets in one launch is not a flex, it\'s the standard now.', initials: 'TC', accent: '#8FB821' },
  { name: 'Reet',           role: 'Affiliate Marketer',                quote: 'I run geos across Meta and NewsBreak. FabFunnel is the only platform that gets the workflow right for traffic arbitrage at the volume I need.', initials: 'RT', accent: '#171717' },
  { name: 'Threat Tomato',  role: 'Performance Marketer · Mexico',     quote: 'My team launches up to 80 campaigns a day across geos. The bulk launcher saved us 30+ hours every single week. The math sells itself.', initials: 'TT', accent: '#FE2D2D' },
  { name: 'Roy from PB',    role: 'Affiliate Marketer · Search Arb.',  quote: 'I\'ve used 5 different tools. None of them touched my workflow until FabFunnel. The keyword arbitrage flow is the cleanest in market.', initials: 'RP', accent: '#1877F2', wide: true },
  { name: 'Hera Sims',      role: 'Sr. Media Buyer',                   quote: 'The Co-Pilot suggestions caught a fatigue dip before our weekend spike. Saved us $14k in the first month. That\'s the entire annual cost paid back.', initials: 'HS', accent: '#8FB821' },
  { name: 'Maya Ortega',    role: 'Head of Performance · Nuvanti',     quote: 'We replaced three tools and a contractor. 140 creatives a week, ROAS positive from day one. Our retainer clients love the unified reports.', initials: 'MO', accent: '#171717' },
];

function QuoteCard({ q, i, inView }) {
  return (
    <div style={{
      position: 'relative',
      background: 'var(--ff-paper)',
      border: '1.5px solid var(--border-1)',
      borderRadius: 16,
      padding: '26px 26px 22px',
      boxShadow: '0 6px 20px -14px rgba(0,0,0,0.1)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(10px)',
      transition: `opacity .55s var(--ease-out) ${i * 70}ms, transform .55s var(--ease-out) ${i * 70}ms, border-color .2s var(--ease-out), box-shadow .25s var(--ease-out)`,
      gridColumn: q.wide ? 'span 2' : 'span 1',
      display: 'flex', flexDirection: 'column',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,184,33,0.5)'; e.currentTarget.style.boxShadow = '0 18px 36px -16px rgba(143,184,33,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-1)'; e.currentTarget.style.boxShadow = '0 6px 20px -14px rgba(0,0,0,0.1)'; }}
    >
      {/* 5 stars */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
        {[0,1,2,3,4].map(n => (
          <svg key={n} viewBox="0 0 16 16" width="14" height="14" fill="var(--ff-rich)">
            <path d="M8 1.5l1.95 4 4.4.65-3.18 3.1.75 4.4L8 11.55 4.08 13.65l.75-4.4-3.18-3.1 4.4-.65z"/>
          </svg>
        ))}
      </div>
      <p style={{
        margin: 0, fontFamily: "'Geist'", fontSize: 14.5, lineHeight: 1.6, color: 'var(--ff-ink)',
        flex: 1,
      }}>
        "{q.quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, paddingTop: 16, borderTop: '1px dashed var(--border-1)' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 999,
          background: q.accent, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Geist'", fontWeight: 800, fontSize: 13,
        }}>{q.initials}</div>
        <div>
          <div style={{ fontFamily: "'Geist'", fontWeight: 700, fontSize: 13.5, color: 'var(--ff-ink)' }}>{q.name}</div>
          <div style={{ fontFamily: "'Geist Mono'", fontSize: 10.5, color: 'var(--ff-mute)', letterSpacing: '0.06em' }}>{q.role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  return (
    <section ref={ref} id="testimonials" style={{ background: 'var(--ff-paper)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>Testimonials</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            Trusted by teams who <span style={{ color: 'var(--ff-rich)' }}>actually</span> use it.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 560, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            No paid endorsements. Real operators, real reviews.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18,
        }} className="ff-testimonial-grid">
          {QUOTES.map((q, i) => <QuoteCard key={q.name} q={q} i={i} inView={inView}/>)}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ff-testimonial-grid { grid-template-columns: 1fr 1fr !important; }
          .ff-testimonial-grid > div { grid-column: span 1 !important; }
        }
        @media (max-width: 600px) {
          .ff-testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.Testimonials = Testimonials;
