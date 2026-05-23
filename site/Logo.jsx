/* global React */

// ---------- Logo (mark + wordmark) ----------
function FFMark({ size = 32, color = 'full', tipInk = null }) {
  // color: 'full' | 'mono-ink' | 'mono-white'
  const isMono = color !== 'full';
  const monoColor = color === 'mono-white' ? '#FFFFFF' : '#171717';
  const f = isMono ? Array(6).fill(monoColor) : ['#171717', '#C3EB42', '#A8D632', '#C3EB42', tipInk || '#171717', '#C3EB42'];
  const o = isMono ? [1, 0.78, 0.56, 0.78, 1, 0.78] : [1,1,1,1,1,1];
  return (
    <svg width={size} height={size * 102/128} viewBox="0 0 128 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M127.882 4.84577C127.882 6.0199 127.464 7.09453 126.768 7.93035L104.23 34.9453C104.151 35.0547 104.121 35.0746 104.111 35.0945C103.225 36.1294 101.902 36.796 100.419 36.796H44.8571L20.6183 8.5373L23.7625 4.85573L24.1307 4.4378C26.5088 1.62188 30.0014 0 33.6829 0H123.026C125.713 0 127.882 2.16916 127.882 4.85573Z" fill={f[0]} fillOpacity={o[0]}/>
      <path d="M49.4939 98.6169L47.683 100.746C47.0063 101.542 46.0013 102 44.9566 102H8.66802C5.99141 102 3.8123 99.8309 3.8123 97.1542C3.8123 95.9801 4.23021 94.9054 4.91678 94.0696L25.2352 70.388L49.4839 98.6069Z" fill={f[1]} fillOpacity={o[1]}/>
      <path d="M83.663 58.8557L49.4939 98.6169L3.4939 45.0647C2.68793 44.1094 2.59837 43.9901 2.51876 43.8707C0.429211 40.9552 2.48892 36.786 6.23022 36.796H44.867L63.7327 58.7264C68.9964 64.8458 78.3794 64.8756 83.663 58.8557Z" fill={f[2]} fillOpacity={o[2]}/>
      <path d="M44.8571 36.786H6.22025C2.48891 36.786 0.429215 40.9652 2.50882 43.8707C-0.914068 39.612 -0.834461 33.5025 2.74763 29.3333L8.88693 22.1692L20.6183 8.52737L44.8571 36.786Z" fill={f[3]} fillOpacity={o[3]}/>
      <path d="M87.9018 52.1492C87.9018 53.3234 87.4839 54.398 86.7874 55.2338L83.7824 58.7363C78.3496 64.8855 68.9665 64.8557 63.7128 58.7363L53.8819 47.3035H83.0362C85.7228 47.3035 87.8919 49.4726 87.8919 52.1592Z" fill={f[4]} fillOpacity={o[4]}/>
      <path d="M87.9018 52.1492C87.9018 53.3234 87.4839 54.398 86.7874 55.2338L83.7824 58.7363C78.3496 64.8855 68.9665 64.8557 63.7128 58.7363L53.8819 47.3035H83.0362C85.7228 47.3035 87.8919 49.4726 87.8919 52.1592Z" fill={f[5]} fillOpacity={o[5]}/>
    </svg>
  );
}

function FFLockup({ height = 22, fab = '#171717', fun = '#8FB821', mark = 'full', tipInk = null }) {
  const markSize = height * 1.55;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.42 }}>
      <FFMark size={markSize} color={mark} tipInk={tipInk}/>
      <span style={{
        fontSize: height, lineHeight: 0.95, letterSpacing: '-0.02em',
        whiteSpace: 'nowrap', textTransform: 'uppercase',
        fontFamily: "'Geist', sans-serif",
        display: 'inline-flex', alignItems: 'baseline',
      }}>
        <span style={{ fontWeight: 900, color: fab }}>FAB</span>
        <span style={{ fontWeight: 500, color: fun, marginLeft: '0.04em' }}>FUNNEL</span>
      </span>
    </div>
  );
}

Object.assign(window, { FFMark, FFLockup });
