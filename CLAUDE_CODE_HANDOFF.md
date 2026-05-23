# FabFunnel — Website Build Brief for Claude Code

**Hand-off package.** This document is the build spec for the FabFunnel marketing site. Use it together with the prototype files shipped in this project: open `index.html` to see the interactive prototype with the responsive device toggle (Desktop / Tablet / Mobile).

---

## 1. What's shipping in this hand-off

### Pages — Phase 1 (this delivery, fully designed)

| Page | Route | Source file |
|---|---|---|
| Landing | `/` | `site/landing.html` |
| Meta Ads Automation | `/platforms/meta-ads-automation` | `site/meta.html` |
| TikTok Ads Automation | `/platforms/tiktok-ads-automation` | `site/tiktok.html` |
| NewsBreak Ads Management | `/platforms/newsbreak-ads-management` | `site/newsbreak.html` |
| Pricing | `/pricing` | `site/pricing.html` |

### Pages — Phase 2 (TBD; do not implement yet)

The header mega menu and footer surface every planned page on the site. Items still in design carry a small **TBD** badge — leave the link in place and route to a "Coming soon" stub or 404, but do **not** build the page yet.

- **Solutions**: For Media Buyers · For Affiliate Marketers · For Ecom Brands · For Agencies
- **Features**: Bulk Campaign Launch · Creative Generation · Industry Insight · Creative Library · Automation · Multi Ad Account Reporting · Video Sage · Co-Pilot
- **Resources**: Blogs · Knowledge Base · Case Studies · Contact Us
- **Compare**: vs Madgicx · vs Revealbot
- **Company**: About · Partners · Privacy · Terms · Try Fab AI · Sign in

---

## 2. Tech stack the build should use

The prototype is React + Babel from CDN for fast iteration; for production:

- **Framework**: Next.js 14+ (App Router) or Astro 4+ — pick whichever the existing FabFunnel codebase uses.
- **Styling**: Plain CSS with custom properties (already wired). All design tokens live in `colors_and_type.css` — port these into a global stylesheet. **Do not** rewrite them as Tailwind classes; this site uses semantic CSS vars across every component.
- **Fonts**: Self-hosted Geist + Geist Mono. The `fonts/` folder ships 6 `.woff2` files (Latin, Latin-Ext, Cyrillic for each family). Reference the `@font-face` declarations at the top of `colors_and_type.css`.
- **Icons**: Lucide (https://lucide.dev). The Mega menu and footer use a custom subset wrapped in `MenuIcons.jsx`. Brand glyphs (Meta, TikTok, NewsBreak, Slack, Redtrack) live in `PlatformGlyph.jsx`.
- **No CSS reset libraries**. The prototype ships minimal global resets in each page's `<head>`.

---

## 3. File map — what to port from the prototype

```
fonts/                          → /public/fonts/
assets/                         → /public/assets/
colors_and_type.css             → global stylesheet (import once in root layout)
site/Logo.jsx                   → FFLockup + FFMark — convert to React component
site/PlatformGlyph.jsx          → platform brand icons
site/MenuIcons.jsx              → Lucide-style icon set + <TBDBadge> + <MegaItem>
site/Routes.jsx                 → single source of truth for nav links + TBD flags
site/PricingHooks.jsx           → useInView + useCountUp hooks
site/SiteHeader.jsx             → sticky header w/ mega menu + mobile drawer
site/SiteFooter.jsx             → global footer (CTA panel, newsletter, columns, watermark)
site/MegaMenus.jsx              → 4 mega menu panels (Platforms / Solutions / Features / Resources)

LANDING PAGE SECTIONS
site/LandingHero.jsx            → rotating headline + dashboard mock + parallax logos
site/LandingDashboardMock.jsx   → the in-product screenshot in the hero
site/StatsStrip.jsx             → 4-stat strip (38k campaigns / 5× faster / 3 platforms / 5min sync)
site/PlatformsSection.jsx       → "One dashboard for every ad platform" — 3 cards
site/SolutionsSection.jsx       → "Built for how you work" — sticky-scroll 3-step storytelling
site/HowItWorks.jsx             → "From zero to scaled" — 3-step timeline w/ lime line
site/BenefitsGrid.jsx           → "Everything you need to win at performance marketing"
site/AISection.jsx              → "AI that actually moves the needle" — lime panel + capability list
site/PricingTeaser.jsx          → "Grow your business with FabFunnel" — 3-tier teaser
site/Testimonials.jsx           → "Trusted by teams who actually use it" — 6-up quote grid
site/FAQ.jsx                    → "Frequently asked questions" — 6-item accordion
site/PlatformCloud.jsx          → "Connect with 5+ platforms" — 6-tile integration grid

PLATFORM PAGES (Meta / TikTok / NewsBreak)
site/PlatformPageKit.jsx        → 7 shared building blocks (Hero, Stats, HowItWorks,
                                  Audience, FeatureRow, FAQ, FinalCTA) — each page is
                                  just a composition of these w/ page-specific data.

PRICING PAGE
site/PricingData.jsx, PlanCard.jsx, PricingSection.jsx,
ComparisonTable.jsx, PricingFAQ.jsx

PREVIEW SHELL (dev only — do not ship)
index.html                      → the responsive prototype harness
site/PreviewChip.jsx            → floating chip that links into the harness
```

When porting, drop `window.X = X;` exports and use ES module exports instead. Style objects can stay inline; nothing in here needs CSS-in-JS at runtime.

---

## 4. Landing page composition

The landing page is a vertical stack of sections in this exact order. Each section is **independent** — pages are dumb layouts, sections own their own data + animations.

```
<SiteHeader active="home"/>     ← sticky, glassy, mega menus, mobile drawer
<LandingHero/>                  ← Hero
<StatsStrip/>                   ← Performance Metrics / Stats
<PlatformsSection/>             ← One Dashboard for Every Ad Platform
<SolutionsSection/>             ← Built for How You Work
<HowItWorks/>                   ← From Zero to Scaled
<BenefitsGrid/>                 ← Everything You Need to Win at Performance Marketing
<AISection/>                    ← AI That Actually Moves the Needle
<PricingTeaser/>                ← Grow Your Business With FabFunnel
<Testimonials/>                 ← Trusted by Teams Who Actually Use It
<FAQ/>                          ← Frequently Asked Questions
<PlatformCloud/>                ← Connect With 5+ Platforms
<SiteFooter/>                   ← Final CTA + Newsletter + Footer columns
```

---

## 5. Platform page composition (Meta / TikTok / NewsBreak)

Each platform page is a composition of `PlatformPageKit` building blocks with page-specific data. The user-supplied section order is preserved exactly:

### Meta Ads Automation
1. `<PlatformHero/>` — title, body, lime CTAs, decorative Meta glyph
2. `<PlatformStats/>` — 100k campaigns · 5× faster · 5+ platforms · 15min sync
3. `<PlatformHowItWorks/>` — 3 steps: Connect Accounts → Launch at Scale → Automate
4. `<PlatformAudience/>` — Agencies · Affiliates · Media Buyers
5. `<PlatformFAQ/>` — 3 platform-specific questions
6. `<PlatformFinalCTA/>` — "Ready to put your Facebook ads on autopilot?"
7. `<SiteFooter/>`

### TikTok Ads Automation
1. `<PlatformHero/>`
2. `<PlatformFeatureRow/>` — **TikTok Features** (6 cards: Bulk Launch · AI Video Analysis · AI Creatives · Automation · Cross-Platform · Industry Insights)
3. `<PlatformHowItWorks/>`
4. `<PlatformAudience/>`
5. `<PlatformFAQ/>`
6. `<PlatformFinalCTA/>`
7. `<SiteFooter/>`

### NewsBreak Ads Management
1. `<PlatformHero/>`
2. `<PlatformFeatureRow/>` — **Why NewsBreak on FabFunnel?** (4 cards)
3. `<PlatformHowItWorks/>`
4. `<PlatformFAQ/>`
5. `<PlatformFinalCTA/>`
6. `<SiteFooter/>`

(Note: NewsBreak intentionally has no "Who uses…" section per the source spec.)

---

## 6. Header + Mega Menu — implementation notes

- **Sticky**, 68px tall, glassy backdrop (`backdrop-filter: blur(20px)` on `rgba(255,255,255,0.78)`).
- **5 desktop tabs** (mono caps, 0.2em tracking): PLATFORMS · SOLUTIONS · FEATURES · RESOURCES · PRICING.
- **Hover dropdown** — chevron rotates 180°; underline scales in from the left; menu fades + slides 8px down from the nav.
- **Active page** — the matching tab stays "hot" (ink color + underline) on its dedicated page.
- **Right side**: "Try Fab AI · COMING SOON" link + lime "Book A Demo" pill.
- **Mobile (≤960px)**: collapses to a hamburger that opens a right-side slide-in drawer with accordion sections.
- **Esc closes** any open menu / drawer.

### Mega menu structures
- **PLATFORMS** — 2-col: 3 platform items (all built) + featured dark card with mini-dash thumbnail.
- **SOLUTIONS** — 2-col: 4 role items (Media Buyers · Affiliate Marketers · Ecom · Agencies — all TBD) + featured dark card w/ a customer quote.
- **FEATURES** — 2×4 grid, no featured panel. All 8 items are TBD in Phase 1.
- **RESOURCES** — 2-col: Learn (Blogs · KB · Case Studies · Contact) + Compare (vs Madgicx · vs Revealbot). All TBD.

Each TBD item gets a small `<TBDBadge/>` next to its title.

---

## 7. Footer — implementation notes

The global footer is the same on every page. Five vertical zones:

1. **CTA panel** (hovering above): "Ready to automate your ads?" — dark Geist 900 panel with lime glow underneath. Two buttons: Start free trial / Book a demo. **This is the Final CTA section per the user's brief — no separate Final CTA component exists.**
2. **Newsletter strip**: email input + Subscribe button. Inline success state on submit.
3. **Logo + socials row**: full FabFunnel lockup, 4 social icons (Telegram · LinkedIn · Instagram · YouTube).
4. **6-column link grid**: Platforms · Solutions · Features · Resources · Company · Compare. TBD items show their badge.
5. **Watermark block**: huge "Automate your ads. Scale what works." Display headline with the word "FabFunnel" floated at 4% opacity behind it.
6. **Fine print bar**: © 2026 FabFunnel · Privacy · Terms.

Footer responsiveness: 6 cols → 3 cols (≤1100px) → 2 cols (≤640px) → 1 col (≤420px).

---

## 8. Design system — single source of truth

Open `colors_and_type.css` — it ships **76 CSS custom properties**. Do not invent tokens; use what's there. Highlights:

| Variable | Value | Use |
|---|---|---|
| `--ff-rich` | `#8FB821` | Brand voice — links, primary buttons, eyebrow accents |
| `--ff-lime` | `#C3EB42` | Accent — CTA pills, hover states, hot badges |
| `--ff-ink` | `#171717` | All body and display text, dark surfaces |
| `--ff-paper` | `#FFFFFF` | Default surface |
| `--ff-cream` | `#FAF9F4` | Editorial / marketing surface |
| `--ff-warm` | `#F7F7F4` | Secondary cream |
| `--border-1` | `#E5E5DF` | Default light border |
| `--font-sans` | Geist | Body |
| `--font-mono` | Geist Mono | Eyebrows, codes, dimensions |

Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 (`--space-1` through `--space-9`).
Radii: 4px micro · 8px form · 10px cards · 14px panels · 999px pills.

---

## 9. Voice & content rules (non-negotiable)

These are baked into every section's copy:

- **Operator-confident.** Short, declarative sentences. 3–6 word headlines.
- **Sentence case** everywhere except the wordmark and mono eyebrow labels.
- **Mono eyebrows** are 11px, 0.18em tracked, uppercase: `OS FOR PAID ADS`, `NEW · BULK LAUNCH`.
- **No emoji.** Anywhere. The brand has its own funnel mark.
- **No fluff verbs.** Avoid "leverage", "transform", "empower", "seamless".
- **Specific over abstract.** Real numbers always win: "ROAS 4.2× · CPA $12.40 · CTR 3.1%".
- Inline data uses Geist Mono.

If you edit copy, match this voice. The prototype is the canonical reference.

---

## 10. Animation budget

- Defaults: **120–200ms** with `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out).
- Page-level transitions: 320ms.
- **No springs, no bounces, no overshoot, no parallax** (except the very subtle floating logos in the landing hero).
- Hover lift: shadow only — never `translateY` more than 4px, never scale.
- The single approved chart flourish is a stroke-draw on first reveal (≤500ms).
- Respect `prefers-reduced-motion` — the prototype's `<style>` block already disables animations when set.

---

## 11. Responsiveness contract

The prototype is responsive — open `index.html` and use the floating toggle at the bottom of the page to flip between Desktop / Tablet (820×1180) / Mobile (390×844). Press R to rotate. Press 1/2/3 to jump devices. Press H to hide controls.

Per-page breakpoints (already implemented):

- **Header**: ≤960px collapses to hamburger.
- **Hero**: ≤960px hides parallax logos; ≤600px stacks CTAs full-width.
- **All section grids**: 3/4-col → 2-col (≤960px) → 1-col (≤600px).
- **Footer grid**: 6 → 3 → 2 → 1.

When implementing, lift these media queries verbatim; do not redesign them.

---

## 12. SEO + meta (for whoever wires up Next.js heads)

Per page:

```yaml
landing:
  title: "FabFunnel — One platform for paid ads."
  description: "Launch hundreds of campaigns in minutes. Bulk launch, automate, and win the auction across Meta, TikTok, and NewsBreak."

meta-ads-automation:
  title: "Meta Ads Automation — FabFunnel"
  description: "Bulk launch Facebook and Instagram campaigns. AI creatives, automated rules, multi-account reporting — all in one dashboard."

tiktok-ads-automation:
  title: "TikTok Ads Automation — FabFunnel"
  description: "Scale TikTok with bulk creation, AI video analysis, and performance-based automation. Built for the platform's pace."

newsbreak-ads-management:
  title: "NewsBreak Ads Management — FabFunnel"
  description: "Native NewsBreak support alongside Meta and TikTok. Bulk launch, unified reporting, automated optimization."

pricing:
  title: "Pricing — FabFunnel"
  description: "Simple, transparent pricing. 14-day free trial. Starter, Pro, Enterprise — scale as you grow."
```

Open Graph: use the mark + wordmark on a Cream background. The 8% watermark pattern from the brand book is the approved OG style.

---

## 13. Build order (recommended)

1. **Foundation** — port `colors_and_type.css`, `fonts/`, `assets/`, `Routes` table.
2. **Shell** — `SiteHeader` + `SiteFooter` + `MegaMenus` + `MenuIcons`. Get the chrome working with all 5 pages stubbed.
3. **Landing page** — port section-by-section, top to bottom. Stats and AI section both use `useCountUp`, so port `PricingHooks.jsx` first.
4. **Platform pages** — port `PlatformPageKit.jsx` once, then the 3 pages are just compositions with data.
5. **Pricing page** — port `PricingData.jsx` first, then `PlanCard` + `PricingSection` + `ComparisonTable` + `PricingFAQ`.
6. **TBD stubs** — for every TBD route, ship a minimal "Coming soon" page that reuses `SiteHeader` + `SiteFooter` and a centered headline. Or have the link 404 — your call.
7. **QA** — open the prototype side-by-side at Desktop / Tablet / Mobile and visually diff each section.

---

## 14. Out of scope for Phase 1

Do not build (these are Phase 2):
- Sign-in / dashboard product surfaces
- "Try Fab AI" chat surface
- Knowledge base, blog index, individual blog posts
- Solution sub-pages (Media Buyers / Affiliates / Ecom / Agencies)
- Feature deep-dive pages (Bulk Launcher / Co-Pilot / etc.)
- "vs" comparison pages
- Internationalization
- Cookie banner / consent management

---

## 15. Open questions for the user

Surface these before starting the build:

1. **CMS or hard-coded?** Testimonials, FAQ, plan data — do these live in a CMS or stay as static data in the codebase?
2. **Demo / trial CTAs** — do these go to Calendly, a Typeform, an in-house form, or a custom pricing-page anchor? Currently every CTA points to `pricing.html#pricing`.
3. **Pricing — final numbers?** The prototype shows $349 / $599 / Custom. Confirm exact retail before production.
4. **Newsletter** — confirm provider (Beehiiv / ConvertKit / custom). Currently shows fake success state.
5. **Analytics** — GA4? PostHog? Segment? The prototype has no analytics wired.
6. **Hosting target** — Vercel? Netlify? AWS Amplify? Affects ISR + image config.
7. **Legal pages** (Privacy, Terms) — point to existing pages or write fresh?

---

## 16. How to read the prototype

```bash
# Just open index.html in a browser. The responsive harness boots and
# loads each page in an iframe. The floating pill at the bottom switches
# between pages and device sizes.

# Each individual page in site/ also loads on its own (open in a new tab
# from the harness's "↗" button).
```

---

## Quick handoff prompt for Claude Code

> Build the FabFunnel marketing site in Next.js 14 (App Router). The full prototype, design system, and content live in this project. Start with the foundation files — port `colors_and_type.css`, the `fonts/` directory, and `assets/`. Then build the global shell (`SiteHeader` + `SiteFooter` + mega menus). Then implement the 5 routes in order: `/`, `/platforms/meta-ads-automation`, `/platforms/tiktok-ads-automation`, `/platforms/newsbreak-ads-management`, `/pricing`. Every other page in the navigation is marked TBD in `Routes.jsx` — ship a "Coming soon" stub for each so the nav doesn't 404, but **do not** design those pages. Match the prototype pixel-for-pixel on Desktop · Tablet · Mobile; the breakpoints are already implemented in each section's `<style>` block. The voice rules in section 9 of this brief are non-negotiable.

---

End of brief.
