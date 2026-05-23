/* global React */

// ============================================================
// Animated count-up hook — animates a number toward `target`
// ============================================================
function useCountUp(target, { duration = 700, start = false } = {}) {
  const [value, setValue] = React.useState(target);
  const fromRef = React.useRef(target);
  const rafRef = React.useRef(null);

  React.useEffect(() => {
    if (!start) { setValue(target); return; }
    const from = fromRef.current;
    const to = target;
    if (from === to) return;
    const t0 = performance.now();
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const v = from + (to - from) * easeOutCubic(t);
      setValue(t === 1 ? to : v);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); fromRef.current = value; };
    // eslint-disable-next-line
  }, [target, start]);
  return value;
}

// IntersectionObserver "has it been seen?" hook.
// Safety net: if IO doesn't fire within `fallbackMs` (some embedded/preview
// iframes don't honor IO reliably), we force inView=true so the entrance
// animation still plays.
function useInView(ref, { threshold = 0.2, once = true, fallbackMs = 800 } = {}) {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    let fired = false;
    const trigger = () => { if (fired) return; fired = true; setInView(true); };

    // Eager check — if already on-screen, fire immediately
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      trigger();
      if (once) return;
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        trigger();
        if (once) io.disconnect();
      } else if (!once) {
        fired = false;
        setInView(false);
      }
    }, { threshold });
    io.observe(ref.current);

    // Final safety net — guarantees the section reveals even if IO is silent
    const t = setTimeout(trigger, fallbackMs);

    return () => { io.disconnect(); clearTimeout(t); };
  }, [ref, threshold, once, fallbackMs]);
  return inView;
}

// ============================================================
// Price display — count-up animation tied to viewport + plan change
// ============================================================
function PriceDisplay({ amount, customLabel, customSub, suffix = 'per workspace / month', inView, theme = 'light' }) {
  const headColor = theme === 'dark' ? 'var(--ff-paper)' : 'var(--ff-ink)';
  const subColor  = theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'var(--ff-mute)';
  const dollarColor = theme === 'dark' ? 'rgba(255,255,255,0.78)' : '#3A3A35';
  if (amount == null) {
    return (
      <div>
        <div style={{
          fontFamily: "'Geist'", fontWeight: 900, fontSize: 76, lineHeight: 1,
          color: headColor, letterSpacing: '-0.035em',
        }}>{customLabel}</div>
        <div style={{ marginTop: 14, fontFamily: "'Geist'", fontSize: 14, color: subColor }}>{customSub}</div>
      </div>
    );
  }
  const v = useCountUp(amount, { duration: 700, start: inView });
  const rounded = Math.round(v);
  return (
    <div>
      <div style={{
        display: 'inline-flex', alignItems: 'flex-start', gap: 2,
        fontFamily: "'Geist'", fontWeight: 900, lineHeight: 1, color: headColor, letterSpacing: '-0.035em',
      }}>
        <span style={{ fontSize: 36, marginTop: 12, fontWeight: 700, color: dollarColor }}>$</span>
        <span style={{ fontSize: 76, fontVariantNumeric: 'tabular-nums' }}>{rounded.toLocaleString()}</span>
      </div>
      <div style={{ marginTop: 10, fontFamily: "'Geist'", fontSize: 14, color: subColor }}>{suffix}</div>
    </div>
  );
}

window.PricingHooks = { useCountUp, useInView };
window.PriceDisplay = PriceDisplay;
