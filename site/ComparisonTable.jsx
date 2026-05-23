/* global React */

// ============================================================
// Feature comparison table — LIGHT theme
// ============================================================
const COMPARE_ROWS = [
  { group: 'Account', rows: [
    ['Team members',  'Unlimited', 'Unlimited', 'Unlimited'],
    ['Ad accounts',   'Up to 5',   'Up to 15',  'Unlimited'],
  ]},
  { group: 'Campaign ops', rows: [
    ['Bulk Launcher',         'Manual',     'Automated',   'Automated'],
    ['Automation rules',      'Basic',      'Advanced',    'Advanced'],
    ['Campaign Cloning',      false,        true,          true],
    ['API access',            false,        false,         true],
  ]},
  { group: 'Platforms', rows: [
    ['Meta',          true, true, true],
    ['TikTok',        true, true, true],
    ['NewsBreak',     true, true, true],
  ]},
  { group: 'AI', rows: [
    ['AI Co-pilot',           'Always on',  'Always on',  'Always on'],
    ['Video Analysis',        false,        true,         true],
    ['Custom models',         false,        false,        true],
  ]},
  { group: 'Reporting', rows: [
    ['Multi Ad Account Reporting',  true, true, true],
    ['Cross platform reporting',    false, true, true],
    ['RedTrack + Voluum',           true, true, true],
    ['Custom dashboards',           false, false, true],
  ]},
  { group: 'Support', rows: [
    ['Tier',                'Email',     'Priority',     'Dedicated CSM'],
    ['White glove onboarding', false,    false,          true],
    ['SLA backed support',     false,    false,          true],
  ]},
];

function ComparisonTable() {
  const [stickyHover, setStickyHover] = React.useState(null);
  const cellBase = {
    padding: '14px 18px',
    fontFamily: "'Geist'", fontSize: 14,
    color: 'var(--fg-2)',
    borderBottom: '1px solid var(--border-1)',
  };
  const headBase = {
    padding: '20px 18px',
    fontFamily: "'Geist'", fontWeight: 800, fontSize: 15,
    color: 'var(--ff-ink)', letterSpacing: '-0.005em',
    borderBottom: '1px solid #D5D5CD',
    position: 'sticky', top: 0, background: 'var(--ff-paper)', zIndex: 2,
  };
  const Cell = ({ v, accent }) => {
    if (v === true) return <td style={{ ...cellBase, textAlign: 'center' }}>
      <svg viewBox="0 0 20 20" width="18" height="18">
        <circle cx="10" cy="10" r="9" fill="rgba(195,235,66,0.28)" stroke="rgba(143,184,33,0.7)" strokeWidth="1"/>
        <path d="M6 10.5L9 13.5L14.5 7.5" fill="none" stroke="#5C7A14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </td>;
    if (v === false) return <td style={{ ...cellBase, textAlign: 'center' }}>
      <span style={{ display: 'inline-block', width: 14, height: 1.5, background: 'var(--border-1)', borderRadius: 999 }}/>
    </td>;
    return <td style={{ ...cellBase, textAlign: 'center', color: accent ? 'var(--ff-rich)' : 'var(--fg-1)', fontWeight: accent ? 600 : 500 }}>{v}</td>;
  };
  return (
    <section style={{ background: 'var(--ff-cream)', padding: '8px 24px 96px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-rich)', letterSpacing: '0.22em' }}>Compare plans</span>
          <h2 style={{ margin: '12px 0 0', fontFamily: "'Geist'", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.025em', color: 'var(--ff-ink)' }}>
            Every feature, side by side.
          </h2>
        </div>

        <div style={{
          background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 30px 70px -36px rgba(0,0,0,0.14)',
        }}>
          <div className="ff-compare-scroll" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ ...headBase, textAlign: 'left', width: '34%' }}>Feature</th>
                {[['Starter', false], ['Pro', true], ['Enterprise', false]].map(([n, hi]) => (
                  <th key={n} style={{
                    ...headBase, textAlign: 'center', width: '22%',
                    background: hi ? 'linear-gradient(180deg, rgba(195,235,66,0.18), rgba(195,235,66,0.0) 90%)' : 'var(--ff-paper)',
                    color: hi ? 'var(--ff-rich)' : 'var(--ff-ink)',
                    borderBottom: hi ? '1px solid rgba(143,184,33,0.5)' : '1px solid #D5D5CD',
                  }}>
                    {n}{hi && <span style={{
                      marginLeft: 8, padding: '2px 7px', borderRadius: 999,
                      background: 'var(--ff-ink)', color: 'var(--ff-lime)',
                      fontFamily: "'Geist Mono'", fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', verticalAlign: 'middle',
                    }}>Popular</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(grp => (
                <React.Fragment key={grp.group}>
                  <tr>
                    <td colSpan={4} style={{
                      padding: '24px 18px 10px', fontFamily: "'Geist Mono'", fontSize: 11,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'var(--ff-mute)', borderBottom: '1px solid var(--border-1)',
                      background: 'var(--ff-warm)',
                    }}>{grp.group}</td>
                  </tr>
                  {grp.rows.map((row, i) => {
                    const id = `${grp.group}-${i}`;
                    return (
                      <tr key={id} onMouseEnter={() => setStickyHover(id)} onMouseLeave={() => setStickyHover(null)}
                        style={{ background: stickyHover === id ? 'rgba(195,235,66,0.06)' : 'transparent', transition: 'background .15s var(--ease-out)' }}>
                        <td style={{ ...cellBase, textAlign: 'left', color: 'var(--fg-1)', fontWeight: 500 }}>{row[0]}</td>
                        <Cell v={row[1]}/>
                        <Cell v={row[2]} accent/>
                        <Cell v={row[3]}/>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ComparisonTable = ComparisonTable;
