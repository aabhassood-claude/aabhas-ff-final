/* global React, PricingHooks */

const { useInView } = window.PricingHooks;

// ============================================================
// FAQ section — accordion list with smooth expand
// ============================================================
const FAQS = [
  {
    q: 'How long does it take to set up FabFunnel?',
    a: 'About 8 minutes. Connect your Meta, TikTok, or NewsBreak accounts via OAuth, run our setup wizard, and your campaigns sync within 15 minutes. Most teams launch their first bulk batch the same afternoon.',
  },
  {
    q: 'Can I use FabFunnel without an in-house designer?',
    a: 'Yes. The Creative Generation engine produces images, headlines, and copy variations from a brief and a single winning ad. Teams without a designer typically ship 40-60 variations a week through FabFunnel alone.',
  },
  {
    q: 'Which ad platforms are supported today?',
    a: 'Meta (Facebook + Instagram), TikTok, and NewsBreak. Native integration on all three — no third-party connector or zapier middleware. Google and Pinterest are on the roadmap for late 2026.',
  },
  {
    q: 'How does FabFunnel handle creative rotation?',
    a: 'Co-Pilot watches per-ad fatigue (CTR drop, CPM rise) and auto-pauses spent creatives. It then generates and uploads fresh variants from your highest-performing hook. You set the rules, it runs the schedule.',
  },
  {
    q: 'Can I bulk-launch the same campaign across all 3 platforms?',
    a: 'Yes. The Bulk Launcher takes a single campaign template and adapts placements, formats, and naming for each platform. A 200-set Meta launch + matching TikTok + NewsBreak deploy in under 5 minutes.',
  },
  {
    q: 'Does FabFunnel support multi-account reporting?',
    a: 'Yes — and this is the favorite feature for agencies. One workspace can manage unlimited ad accounts. Cross-brand totals, performance trees, and exportable reports are included in Pro and Enterprise.',
  },
];

function FAQRow({ item, i, open, onToggle, inView }) {
  return (
    <div style={{
      borderBottom: '1px solid var(--border-1)',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(8px)',
      transition: `opacity .55s var(--ease-out) ${i * 50}ms, transform .55s var(--ease-out) ${i * 50}ms`,
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', textAlign: 'left',
          padding: '22px 4px', background: 'transparent', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          cursor: 'pointer',
          fontFamily: "'Geist'", fontWeight: 700, fontSize: 17, letterSpacing: '-0.005em',
          color: open ? 'var(--ff-rich)' : 'var(--ff-ink)',
          transition: 'color .2s var(--ease-out)',
        }}
      >
        <span style={{ flex: 1 }}>{item.q}</span>
        <span style={{
          width: 30, height: 30, borderRadius: 8, flexShrink: 0,
          background: open ? 'var(--ff-ink)' : 'var(--ff-cream)',
          color: open ? 'var(--ff-lime)' : 'var(--ff-ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .25s var(--ease-out), color .25s var(--ease-out), transform .3s var(--ease-out)',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>
          <svg viewBox="0 0 14 14" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M7 2v10M2 7h10"/>
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 360 : 0,
        overflow: 'hidden',
        transition: 'max-height .4s var(--ease-out)',
      }}>
        <p style={{
          margin: 0, padding: '0 4px 24px',
          fontFamily: "'Geist'", fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)',
          maxWidth: 760,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section ref={ref} id="faq" style={{ background: 'var(--ff-cream)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', padding: '6px 14px', borderRadius: 999,
            background: 'var(--ff-lime)', color: 'var(--ff-ink)',
            fontFamily: "'Geist'", fontWeight: 700, fontSize: 13,
          }}>FAQ</span>
          <h2 style={{
            margin: '20px 0 14px', fontFamily: "'Geist'", fontWeight: 900,
            fontSize: 'clamp(28px, 4.6vw, 52px)', letterSpacing: '-0.03em', color: 'var(--ff-ink)',
            lineHeight: 1.05,
          }}>
            Frequently asked questions.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: 540, fontFamily: "'Geist'", fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)' }}>
            Can't find an answer? <a href={(window.ROUTES && window.ROUTES.contact.href) || '#contact'} style={{ color: 'var(--ff-rich)', fontWeight: 600 }}>Talk to us →</a>
          </p>
        </div>

        <div style={{
          background: 'var(--ff-paper)', borderRadius: 18,
          border: '1px solid var(--border-1)',
          padding: '8px 28px',
          boxShadow: '0 12px 32px -18px rgba(0,0,0,0.1)',
        }}>
          {FAQS.map((item, i) => (
            <FAQRow
              key={item.q} item={item} i={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
