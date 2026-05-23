/* global React, FFMark */

// ============================================================
// Landing dashboard mockup — stylized FabFunnel product UI
// Designed for the hero block. ~960×640 at design size; scales
// down. Uses lime accents on cream/paper surfaces.
// ============================================================
function LandingDashboardMock() {
  return (
    <div style={{
      width: '100%', background: 'var(--ff-paper)', border: '1px solid var(--border-1)',
      borderRadius: 14, overflow: 'hidden',
      fontFamily: "'Geist', sans-serif",
    }}>
      <div style={{ display: 'flex', height: 580 }}>
        {/* Sidebar */}
        <div style={{
          width: 56, background: 'var(--ff-cream)', borderRight: '1px solid var(--border-1)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: '14px 0', gap: 14,
        }}>
          <FFMark size={26} color="full" tipInk="#FAF9F4"/>
          {[0,1,2,3,4,5,6].map(i => (
            <div key={i} style={{
              width: 30, height: 30, borderRadius: 7,
              background: i === 1 ? 'var(--ff-ink)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: 14, height: 14, borderRadius: 3,
                background: i === 1 ? 'var(--ff-lime)' : 'var(--ff-mute)',
                opacity: i === 1 ? 1 : 0.5,
              }}/>
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Top bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 22px', borderBottom: '1px solid var(--border-1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ width: 14, height: 1.5, background: '#3a3a35', borderRadius: 999 }}/>
                <span style={{ width: 14, height: 1.5, background: '#3a3a35', borderRadius: 999 }}/>
                <span style={{ width: 14, height: 1.5, background: '#3a3a35', borderRadius: 999 }}/>
              </div>
              <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--ff-ink)' }}>Dashboard</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                padding: '5px 11px', borderRadius: 6, background: 'var(--ff-cream)',
                border: '1px solid var(--border-1)',
                fontFamily: "'Geist Mono'", fontSize: 11, color: 'var(--fg-2)',
              }}>(GMT+00:00) UTC</span>
              <span style={{
                padding: '5px 11px', borderRadius: 6, background: 'var(--ff-cream)',
                border: '1px solid var(--border-1)',
                fontFamily: "'Geist Mono'", fontSize: 11, color: 'var(--fg-2)',
              }}>2026-05-02 → 2026-05-16</span>
              <div style={{
                width: 28, height: 28, borderRadius: 999, background: 'var(--ff-rich)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--ff-paper)', fontSize: 10, fontWeight: 800,
              }}>HS</div>
            </div>
          </div>

          {/* Welcome */}
          <div style={{ padding: '18px 22px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 16 }}>👋</span>
              <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--ff-ink)' }}>Welcome, Harvey Sanford</span>
              <span style={{
                padding: '4px 10px', borderRadius: 999,
                background: 'var(--ff-lime)', color: 'var(--ff-ink)',
                fontFamily: "'Geist Mono'", fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>Quick tour</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 30, height: 16, borderRadius: 999, background: 'var(--ff-rich)',
                position: 'relative',
              }}>
                <span style={{ position: 'absolute', top: 2, right: 2, width: 12, height: 12, borderRadius: 999, background: '#fff' }}/>
              </span>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: 11, color: 'var(--fg-2)' }}>Show graph</span>
            </div>
          </div>

          {/* Stat cards row */}
          <div style={{ padding: '0 22px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
            {[
              { label: 'Total Revenue', value: '$1,684,240', delta: '↑ 48%', spark: [22, 18, 20, 16, 18, 12, 14, 8] },
              { label: 'Total spend',   value: '$16,724', meta: '/ 100k', delta: '↑ 400%', spark: [22, 16, 18, 14, 16, 12, 10, 8] },
              { label: 'ROAS',          value: '4.2×', delta: '↑ 18%', spark: [20, 14, 16, 12, 14, 10, 8, 6] },
              { label: 'Revenue per Campaign', value: '32%', delta: '↑ 12%', spark: [20, 18, 14, 16, 12, 10, 8, 6] },
              { label: 'CR',            value: '21.4%', delta: '↑ 36%', spark: [18, 14, 16, 12, 14, 10, 8, 6] },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 8,
                padding: '10px 12px',
              }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: 8.5, color: 'var(--ff-mute)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
                  <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--ff-ink)', letterSpacing: '-0.01em' }}>{s.value}</span>
                  {s.meta && <span style={{ fontSize: 9, color: 'var(--ff-mute)', fontFamily: "'Geist Mono'" }}>{s.meta}</span>}
                </div>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-rich)', marginTop: 2 }}>{s.delta} vs last month</div>
                <svg viewBox="0 0 80 18" preserveAspectRatio="none" style={{ width: '100%', height: 16, marginTop: 6 }}>
                  <polyline fill="none" stroke="#A8D632" strokeWidth="1.2"
                    points={s.spark.map((v, idx) => `${(idx*80/(s.spark.length-1))},${v}`).join(' ')}/>
                </svg>
              </div>
            ))}
          </div>

          {/* Two-column: Traffic source + Industry insights */}
          <div style={{ padding: '14px 22px 0', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
            <div style={{ background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 8, padding: 12, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Traffic source analysis</div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <span style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--ff-cream)' }}/>
                  <span style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--ff-cream)' }}/>
                </div>
              </div>
              <table style={{ width: '100%', marginTop: 10, borderCollapse: 'collapse', fontSize: 11 }}>
                <thead>
                  <tr style={{ color: 'var(--ff-mute)', fontFamily: "'Geist Mono'", fontSize: 9, letterSpacing: '0.08em' }}>
                    <th style={{ textAlign: 'left', padding: '4px 6px', textTransform: 'uppercase' }}>Source</th>
                    <th style={{ textAlign: 'right', padding: '4px 6px', textTransform: 'uppercase' }}>Revenue</th>
                    <th style={{ textAlign: 'right', padding: '4px 6px', textTransform: 'uppercase' }}>Spend</th>
                    <th style={{ textAlign: 'right', padding: '4px 6px', textTransform: 'uppercase' }}>ROAS</th>
                    <th style={{ textAlign: 'right', padding: '4px 6px', textTransform: 'uppercase' }}>CTR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: 'Facebook',  c: '#1877F2', rev: '$1,102,480', sp: '$239,670', roas: '4.6×', ctr: '3.3%' },
                    { p: 'TikTok',    c: '#000',    rev: '$401,260',   sp: '$102,900', roas: '3.9×', ctr: '2.9%' },
                    { p: 'NewsBreak', c: '#FE2D2D', rev: '$180,500',   sp: '$54,700',  roas: '3.3×', ctr: '2.3%' },
                  ].map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--border-1)' }}>
                      <td style={{ padding: '8px 6px', color: 'var(--ff-ink)', fontWeight: 500 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 14, height: 14, borderRadius: 3, background: r.c }}/>
                          {r.p}
                        </span>
                      </td>
                      <td style={{ padding: '8px 6px', textAlign: 'right', fontFamily: "'Geist Mono'", color: 'var(--ff-ink)' }}>{r.rev}</td>
                      <td style={{ padding: '8px 6px', textAlign: 'right', fontFamily: "'Geist Mono'", color: 'var(--ff-ink)' }}>{r.sp}</td>
                      <td style={{ padding: '8px 6px', textAlign: 'right', fontFamily: "'Geist Mono'", color: 'var(--ff-ink)' }}>{r.roas}</td>
                      <td style={{ padding: '8px 6px', textAlign: 'right', fontFamily: "'Geist Mono'", color: 'var(--ff-ink)' }}>{r.ctr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 8, padding: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Industry Insights</div>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)' }}>3 days ↗</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, color: 'var(--ff-rich)' }}>
                <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2,11 6,7 9,9 12,4"/><polyline points="9,4 12,4 12,7"/></svg>
                <span style={{ fontSize: 11, fontWeight: 600 }}>Fast growing industries</span>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', marginLeft: 'auto' }}>(based on Ads)</span>
              </div>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  ['1.', 'Health & Fitness', '+214 ads'],
                  ['2.', 'Finance',          '+180 ads'],
                  ['3.', 'Beauty',           '+165 ads'],
                ].map(([n, name, val]) => (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
                    <span style={{ color: 'var(--ff-mute)', fontFamily: "'Geist Mono'", fontSize: 10 }}>{n}</span>
                    <span style={{ color: 'var(--ff-ink)', flex: 1 }}>{name}</span>
                    <span style={{ color: 'var(--ff-rich)', fontFamily: "'Geist Mono'", fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px dashed var(--border-1)', fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Creative distribution</div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 14 }}>
                <svg viewBox="0 0 56 56" width="56" height="56">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="var(--border-1)" strokeWidth="8"/>
                  <circle cx="28" cy="28" r="22" fill="none" stroke="#C3EB42" strokeWidth="8" strokeDasharray={`${0.71 * 2 * Math.PI * 22} ${2 * Math.PI * 22}`} transform="rotate(-90 28 28)"/>
                </svg>
                <div style={{ flex: 1, fontSize: 11 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--ff-ink)' }}>Image</span><span style={{ fontFamily: "'Geist Mono'", color: 'var(--ff-rich)' }}>71% · 529</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}><span style={{ color: 'var(--ff-ink)' }}>Video</span><span style={{ fontFamily: "'Geist Mono'", color: 'var(--ff-mute)' }}>25% · 623</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Launch summary */}
          <div style={{ padding: '14px 22px 18px' }}>
            <div style={{ background: 'var(--ff-paper)', border: '1px solid var(--border-1)', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <span style={{ fontFamily: "'Geist Mono'", fontSize: 9, color: 'var(--ff-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Launch Summary</span>
                <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--ff-ink)' }}>3,842</span>
                <span style={{ fontSize: 12, color: 'var(--fg-2)' }}>Campaigns Launched 🚀</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 11, color: 'var(--fg-2)' }}>
                <span><b style={{ color: 'var(--ff-ink)' }}>529</b> active</span>
                <span><b style={{ color: 'var(--ff-ink)' }}>623</b> optimised</span>
                <span><b style={{ color: 'var(--ff-ink)' }}>789</b> live</span>
                <span style={{ marginLeft: 8, display: 'flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: 36, height: 8, borderRadius: 999, background: '#1877F2' }}/>
                  <span style={{ display: 'inline-block', width: 18, height: 8, borderRadius: 999, background: '#FE2D2D' }}/>
                  <span style={{ display: 'inline-block', width: 24, height: 8, borderRadius: 999, background: 'var(--ff-ink)' }}/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.LandingDashboardMock = LandingDashboardMock;
