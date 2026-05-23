/* global React */

// ============================================================
// Central routes table — single source of truth for navigation.
// `tbd: true` marks pages not yet designed — the nav/footer
// render a "TBD" badge next to those links.
//
// To add a new page:
//   1. Drop a new HTML file in site/ (e.g. blog.html)
//   2. Flip its entry below to `tbd: false` and set href
//   3. Both SiteHeader & SiteFooter & PreviewShell pick it up.
// ============================================================

const ROUTES = {
  // ----- BUILT PAGES -----
  home:      { key: 'home',      label: 'Home',                       href: 'landing.html',   tbd: false },
  pricing:   { key: 'pricing',   label: 'PRICING',                    href: 'pricing.html',   tbd: false },
  meta:      { key: 'meta',      label: 'Meta Ads Automation',        href: 'meta.html',      tbd: false },
  tiktok:    { key: 'tiktok',    label: 'TikTok Ads Automation',      href: 'tiktok.html',    tbd: false },
  newsbreak: { key: 'newsbreak', label: 'NewsBreak Ads Management',   href: 'newsbreak.html', tbd: false },

  // Mega-menu trigger items in the header (these are section anchors
  // on the landing page — they exist to wire up the dropdown).
  platforms: { key: 'platforms', label: 'PLATFORMS',  href: 'landing.html#platforms', tbd: false },
  solutions: { key: 'solutions', label: 'SOLUTIONS',  href: 'landing.html#solutions', tbd: false },
  features:  { key: 'features',  label: 'FEATURES',   href: 'landing.html#features',  tbd: false },
  resources: { key: 'resources', label: 'RESOURCES',  href: 'landing.html#resources', tbd: false },

  // Conversion targets
  demo:      { key: 'demo',      label: 'Book a demo',     href: 'pricing.html#pricing', tbd: false },
  trial:     { key: 'trial',     label: 'Start free trial', href: 'pricing.html#pricing', tbd: false },
  signin:    { key: 'signin',    label: 'Sign in',         href: '#signin',              tbd: true  },
  tryAI:     { key: 'tryAI',     label: 'Try Fab AI',      href: 'fab-ai.html',          tbd: false },

  // ----- TBD: SOLUTIONS -----
  agencies:   { key: 'agencies',   label: 'For Agencies',        href: '#agencies',   tbd: true },
  affiliates: { key: 'affiliates', label: 'For Affiliates',      href: '#affiliates', tbd: true },
  media:      { key: 'media',      label: 'For Media Buyers',    href: '#media',      tbd: true },
  ecom:       { key: 'ecom',       label: 'For Ecom Brands',     href: '#ecom',       tbd: true },

  // ----- TBD: FEATURES -----
  bulk:       { key: 'bulk',       label: 'Bulk Campaign Launch',       href: '#bulk',       tbd: true },
  automation: { key: 'automation', label: 'Automation',                 href: '#automation', tbd: true },
  library:    { key: 'library',    label: 'Creative Library',           href: '#library',    tbd: true },
  insights:   { key: 'insights',   label: 'Industry Insights',          href: '#insights',   tbd: true },
  reporting:  { key: 'reporting',  label: 'Multi Ad Account Reporting', href: '#reporting',  tbd: true },
  gen:        { key: 'gen',        label: 'Creative Generation',        href: '#gen',        tbd: true },
  copilot:    { key: 'copilot',    label: 'Co-Pilot AI',                href: '#copilot',    tbd: true },
  video:      { key: 'video',      label: 'Video Sage',                 href: '#video',      tbd: true },

  // ----- TBD: RESOURCES -----
  blogs:       { key: 'blogs',       label: 'Blogs',                href: '#blogs',       tbd: true },
  cases:       { key: 'cases',       label: 'Case Studies',         href: '#cases',       tbd: true },
  docs:        { key: 'docs',        label: 'Knowledge Base',       href: '#docs',        tbd: true },
  newsletter:  { key: 'newsletter',  label: 'Newsletter',           href: '#newsletter',  tbd: true },
  contact:     { key: 'contact',     label: 'Contact Us',           href: '#contact',     tbd: true },
  vsMadgicx:   { key: 'vsMadgicx',   label: 'vs Madgicx',           href: '#vs-madgicx',  tbd: true },
  vsRevealbot: { key: 'vsRevealbot', label: 'vs Revealbot',         href: '#vs-revealbot', tbd: true },

  // Company / legal — placeholders
  about:    { key: 'about',    label: 'About',    href: '#about',    tbd: true },
  partners: { key: 'partners', label: 'Partners', href: '#partners', tbd: true },
  privacy:  { key: 'privacy',  label: 'Privacy',  href: '#privacy',  tbd: true },
  terms:    { key: 'terms',    label: 'Terms',    href: '#terms',    tbd: true },
};

// The 5 items shown in the desktop header
const NAV_ROUTES = ['platforms', 'solutions', 'features', 'resources', 'pricing'];

// Detect which top-level page the user is on, so SiteHeader can highlight it
function getActivePage() {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.split('/').pop().toLowerCase();
  if (path.includes('pricing')) return 'pricing';
  if (path.includes('meta')) return 'platforms';
  if (path.includes('tiktok')) return 'platforms';
  if (path.includes('newsbreak')) return 'platforms';
  if (path.includes('landing') || path === '' || path === 'index.html') return 'home';
  return 'home';
}

window.ROUTES = ROUTES;
window.NAV_ROUTES = NAV_ROUTES;
window.getActivePage = getActivePage;
