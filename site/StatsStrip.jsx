/* global React, PricingHooks */

const { useCountUp, useInView } = window.PricingHooks;

// ============================================================
// Stats strip — 4 stat blocks, count-up on viewport entry,
// animated lime line draws across as it enters.
// ============================================================
function StatBlock({ value, suffix = '', label, inView, decimals = 0, prefix = '' }) {
  const v = useCountUp(value, { duration: 1400, start: inView });
  const display = decimals
    ? v.toFixed(decimals)
    : Math.round(v).toLocaleString();
  return (
    <div style={{
      flex: 1, padding: '24px 18px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
      gap: 8,
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 2,
        fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(36px, 4.4vw, 56px)',
        lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ff-ink)',
      }}>
        {prefix && <span>{prefix}</span>}
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>{display}</span>
        {suffix && <span style={{ color: 'var(--ff-rich)' }}>{suffix}</span>}
      </div>
      <div style={{
        fontFamily: "'Geist'", fontWeight: 500, fontSize: 14, color: 'var(--ff-mute)',
      }}>{label}</div>
    </div>
  );
}

function StatsStrip() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });

  return (
    <section ref={ref} style={{
      background: 'var(--ff-paper)', padding: '56px 24px',
      borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {/* Animated lime line — draws across top */}
        <svg viewBox="0 0 1000 4" preserveAspectRatio="none" style={{
          position: 'absolute', left: 0, right: 0, top: -28, width: '100%', height: 4,
          pointerEvents: 'none',
        }}>
          <line x1="0" y1="2" x2="1000" y2="2" stroke="#C3EB42" strokeWidth="2"
            strokeDasharray="1000" strokeDashoffset={inView ? 0 : 1000}
            style={{ transition: 'stroke-dashoffset 1.4s var(--ease-out) .1s' }}/>
        </svg>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="ff-stats-grid">
          <StatBlock value={38000} suffix="k+" label="Campaigns launched"     inView={inView}/>
          <StatBlock value={5}     suffix="×"  label="Faster than manual"      inView={inView}/>
          <StatBlock value={3}                 label="Ad platforms supported"  inView={inView}/>
          <StatBlock value={5}     suffix=" min" label="Ad spend sync time"    inView={inView}/>
        </div>

        {/* Vertical dividers — only visible on desktop */}
        <div aria-hidden="true" className="ff-stats-dividers" style={{
          position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          pointerEvents: 'none',
        }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ position: 'relative' }}>
              {i > 0 && (
                <div style={{
                  position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 1,
                  background: 'var(--border-1)',
                }}/>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .ff-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .ff-stats-dividers { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// Mining the value formatter — adjust the 38000 to display as "38k+"
// Override StatBlock for the special case
StatBlock.value38k = (v) => {
  // Display as 38k once count finishes — but the simpler trick is to count to 38 and add 'k+'.
  return v;
};

// Patch: We want "38k+" — animate 0 → 38, then show '38k+' postfix
// Reimplement cleaner version:
function StatsStripFinal() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });
  return (
    <section ref={ref} style={{
      background: 'var(--ff-paper)', padding: '64px 24px',
      borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <svg viewBox="0 0 1000 4" preserveAspectRatio="none" style={{
          position: 'absolute', left: 0, right: 0, top: -36, width: '100%', height: 4,
          pointerEvents: 'none',
        }}>
          <line x1="0" y1="2" x2="1000" y2="2" stroke="#C3EB42" strokeWidth="2"
            strokeDasharray="1000" strokeDashoffset={inView ? 0 : 1000}
            style={{ transition: 'stroke-dashoffset 1.4s var(--ease-out) .1s' }}/>
        </svg>

        <div className="ff-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            { v: 38, suffix: 'k+',  label: 'Campaigns launched' },
            { v: 5,  suffix: '×',   label: 'Faster than manual' },
            { v: 3,  suffix: '',    label: 'Ad platforms supported' },
            { v: 5,  suffix: ' min', label: 'Ad spend sync time' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '22px 22px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-1)',
            }} className="ff-stat-block">
              <StatNum value={s.v} suffix={s.suffix} inView={inView} index={i}/>
              <div style={{ marginTop: 10, fontFamily: "'Geist'", fontWeight: 500, fontSize: 14, color: 'var(--ff-mute)' }}>
                {s.label}
              </div>
              {/* underline that draws under each stat as it enters */}
              <div style={{
                marginTop: 14, height: 2, background: 'var(--ff-lime)', borderRadius: 999,
                width: inView ? 42 : 0, transition: `width .9s var(--ease-out) ${0.15 + i * 0.12}s`,
              }}/>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .ff-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 4px !important; }
          .ff-stat-block { border-left: none !important; padding: 16px 14px !important; }
          .ff-stat-block:nth-child(2n) { border-left: 1px solid var(--border-1) !important; }
        }
      `}</style>
    </section>
  );
}

function StatNum({ value, suffix, inView, index }) {
  const v = useCountUp(value, { duration: 1300 + index * 100, start: inView });
  const rounded = Math.round(v);
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 2,
      fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(36px, 4.4vw, 56px)',
      lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ff-ink)',
    }}>
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>{rounded}</span>
      {suffix && <span style={{ color: 'var(--ff-rich)' }}>{suffix}</span>}
    </div>
  );
}

window.StatsStrip = StatsStripFinal;
