# FabFunnel × MAC2026 Launch Brief

| Field | Value |
|---|---|
| Project | MAC2026 announcement banner + landing page |
| Owner | Aabhas |
| Date | 24 May 2026 |
| Version | v2. Supersedes v1. |
| Status | Urgent. Conference starts 25 May. Ship today. |
| Audience | Claude Code |
| Depends on | `FABFUNNEL_BUILD_BRIEF.md` (Phase 1 shell must exist) |

---

## v2 changelog

| Change | Where |
|---|---|
| Page now positions **FabAI** as the headline product, not the full FabFunnel suite | Hero, About |
| New "What FabAI does" section replaces the generic "Why meet us" tiles | Section 4.3 |
| New "Get the complete suite" section added with bulk launcher + automation as upgrade hooks | Section 4.4 |
| About block reframed: FabAI is the wedge, full suite is the upgrade path | Section 4.6 |
| Two new CTA destinations to wire: `Try FabAI` and `See the complete suite` | All sections |
| Assets list updated with FabAI logo and complete suite link | Section 6 |

Everything else (banner, session block, meet us tiles, footer, theme treatment, file layout, acceptance criteria) is unchanged from v1.

---

## TL;DR

Add two things to the FabFunnel site:

1. A site wide announcement banner above the top nav, MAC purple, promoting our founders speaking at MAC2026. Auto sunset after the event ends.
2. A standalone landing page at `/mac2026` that leads with FabAI (our AI ads layer: creative generation, video analysis, co pilot) and uses the full FabFunnel suite (bulk launcher + automation) as the upgrade CTA.

Theme treatment: FabFunnel dominant (dark + lime). MAC purple shows up only on the banner, the conference date pill, and the session block top stripe.

---

## 1. Context

**Event:** MAC Affiliate Conference 2026 (MAC2026)
**Dates:** 25 to 27 May 2026
**Venue:** Meridian Expo, Yerevan, Armenia
**Our role:** Speakers only, no booth
**Audience fit:** Performance marketers, affiliates, media buyers. Direct FabFunnel ICP.

**Product framing for this page:**

| Layer | What it is | Role on this page |
|---|---|---|
| FabAI | AI features inside FabFunnel: creative generation, video analysis (Video Sage), co pilot | Headline product. What we talk about at MAC. |
| Full FabFunnel suite | Adds bulk campaign launcher, multi ad account reporting, cross platform automation | Upgrade hook. What attendees move to after FabAI. |

**Our session (Day 1):**

| Field | Value |
|---|---|
| Date | 25 May 2026 |
| Time | 12:30 |
| Title | Scaling Meta Ads to $10M/Month: Breaking Down the Architecture That Drives Our Lead Gen & VSL Campaigns |
| Speakers | Rohit Ajmani (Co Founder & CEO, IdeaClan) and Sahil Walia (Co Founder, IdeaClan) |
| Format | Co presentation |
| Abstract | `[TBD]` Aabhas to provide 2 to 3 lines |

---

## 2. Theme treatment

FabFunnel dominant, MAC accent. Add one new token:

```css
:root {
  --accent-mac-purple: #5B2DCC;        /* placeholder, swap with MAC official hex */
  --accent-mac-purple-soft: rgba(91, 45, 204, 0.15);
}
```

Usage rules:

| Surface | Treatment |
|---|---|
| Announcement banner | Background `--accent-mac-purple`, white text, lime pill CTA inside |
| Banner CTA pill | `--accent-lime` fill, dark text |
| `/mac2026` hero | FabFunnel dark base, lime accents as usual. Purple shows up only in the date pill and a thin top stripe |
| Session block | 4px top border in `--accent-mac-purple`, otherwise dark card |
| FabAI feature tiles | Dark card, lime accent on icons |
| Complete suite block | Slightly elevated surface, lime border glow on the primary CTA |
| Contact tiles | Dark card, lime hover |
| Rest of page | Standard FabFunnel dark + lime |

---

## 3. Announcement banner

### Placement
Above the top nav, full width. Pushes the entire site down by the banner height. Sticky scrolls with the nav.

### Copy
> Catch Rohit & Sahil live at MAC2026 → 25 to 27 May, Yerevan  [Meet Us]

`Meet Us` is a lime pill button linking to `/mac2026`.

### Behaviour

1. Visible on every page on first visit, except `/mac2026` itself
2. Dismissible via small X on the right, dismissal stored in `localStorage` under key `mac2026_banner_dismissed`
3. Auto sunset: hide unconditionally if `new Date() >= new Date("2026-05-28T00:00:00+05:30")` (28 May 00:00 IST)
4. Mobile: copy collapses to "MAC2026 → Meet our founders" with the same CTA pill, dismiss X stays
5. When banner is visible, the top nav sticky offset accounts for banner height
6. When dismissed or sunset, banner is fully removed from the DOM, not just hidden

### Component
`<MacEventBanner />` lives in `components/banners/MacEventBanner.tsx`. Mounts in the root layout above `<TopNav />`.

---

## 4. Landing page `/mac2026`

Sections in order:

### 4.1 Hero

| Element | Content |
|---|---|
| Eyebrow pill | "Live at MAC2026 → 25 to 27 May, Yerevan" (purple background, white text) |
| H1 | "Catch Rohit & Sahil live at MAC2026" |
| Sub | "Our co founders are breaking down the AI architecture behind $10M a month Meta campaigns. See FabAI live in Yerevan." |
| Primary CTA | "Grab a coffee at MAC" → scrolls to `#meet-us` |
| Secondary CTA | "Try FabAI" → `[TBD FabAI link, default /fabai]` |
| Tertiary link | "Need bulk launching and automation too? See the complete suite →" → `[TBD link, default /]` |
| Visual | Two founder portraits side by side in the right column, framed cards with lime border glow on hover |

Background: subtle purple to dark gradient at the very top edge, fades to FabFunnel base by 200px down. Lime orbs drift in the background as on home.

### 4.2 Session block `#session`

Heading: **Our talk at MAC**

Card with a 4px MAC purple top stripe. Inside:

| Line | Content |
|---|---|
| Date pill | "Day 1 · 25 May · 12:30" (purple soft background) |
| Session title | Scaling Meta Ads to $10M/Month: Breaking Down the Architecture That Drives Our Lead Gen & VSL Campaigns |
| Abstract | `[TBD]` 2 to 3 lines from Aabhas |
| Powered by tag | Small line under abstract: "Powered by FabAI" with the FabAI mark |
| Speakers row | Two cards side by side |

Speaker card spec:

```
[Photo, circular, 96px]
Name (display type)
Title (muted)
Linkedin icon link [TBD]
```

| Speaker | Name | Title |
|---|---|---|
| 1 | Rohit Ajmani | Co Founder & CEO, IdeaClan |
| 2 | Sahil Walia | Co Founder, IdeaClan |

### 4.3 What FabAI does

Heading: **Meet FabAI**
Sub: "The AI layer inside FabFunnel. Three things we will show you live."

Three feature tiles in a row:

| Tile | Headline | One line | Icon |
|---|---|---|---|
| 1 | Creative Generation | AI generated ad creatives in your brand voice, ready to launch | Sparkles |
| 2 | Video Sage | AI breaks down which moments in your video ads actually convert | Video |
| 3 | Co Pilot | An always on AI assistant that suggests the next move on every campaign | Compass |

Each tile is a dark card. Lime icon top left, headline, one line copy, subtle lime arrow that nudges right on hover. Tile click goes to the matching feature page when those Phase 3 routes ship; for now link to `#` placeholders.

CTA strip below the tiles:
**Primary:** "Try FabAI" → `[TBD FabAI link]`
**Ghost:** "Watch a 2 min demo" → `[TBD demo link]` (optional, omit if no link)

### 4.4 Get the complete suite

Heading: **FabAI is the start. The complete suite is where it scales.**
Sub: "Pair FabAI with our bulk launcher and cross platform automation to run thousands of campaigns across Meta, TikTok, and NewsBreak from one dashboard."

Three upgrade tiles:

| Tile | Headline | One line |
|---|---|---|
| 1 | Bulk Campaign Launch | Launch hundreds of variations across Meta, TikTok, and NewsBreak in minutes |
| 2 | Cross Platform Automation | Set rules once, FabFunnel watches every account and acts 24/7 |
| 3 | Multi Ad Account Reporting | Every account, every platform, in one live dashboard |

Visual: a screenshot mock of the bulk launcher and automation UI floats to the right of the tiles on desktop, sits below on mobile. Lift the asset from the home page Feature Grid section if it exists.

CTA strip below:
**Primary (lime, large):** "See the complete suite" → `[TBD link, default /]`
**Ghost:** "Book a Demo" → existing demo CTA destination

### 4.5 Meet us `#meet-us`

Heading: **Find us in Yerevan**
Sub: "We are around the venue all three days. Easiest way to lock a chat is to ping us before."

Three contact tiles in a row:

| Tile | Action |
|---|---|
| WhatsApp | Tap to chat → `[TBD WhatsApp link]` |
| Telegram | Tap to message → `[TBD Telegram link]` |
| Coffee | "Pick a slot before MAC" → `[TBD Calendly link, optional]` |

Each tile is a large dark card with a lime icon on the left, headline, sub copy, and arrow on hover.

Below the row, optional QR code block: "Scan to add us on WhatsApp" with a generated QR code for the WhatsApp link. Useful for in person scanning at MAC. Skip if no link supplied yet.

### 4.6 About

Short three line blurb:

> FabAI is the AI layer inside FabFunnel: creative generation, video analysis, and a co pilot for media buyers. Pair it with bulk campaign launching and cross platform automation and you get the complete FabFunnel suite, built by IdeaClan. We help teams launch and scale across Meta, TikTok, and NewsBreak from one dashboard.

Below: three platform logos (Meta, TikTok, NewsBreak) and two CTAs:
**Lime primary:** "Try FabAI" → `[TBD FabAI link]`
**Ghost:** "Explore the complete FabFunnel suite" → `/`

### 4.7 Footer

Standard global footer.

---

## 5. File layout

```
app/
  layout.tsx                       # mount MacEventBanner here
  mac2026/
    page.tsx                       # the landing page
    sections/
      Hero.tsx
      Session.tsx
      MeetFabAI.tsx
      CompleteSuite.tsx
      MeetUs.tsx
      About.tsx
components/
  banners/
    MacEventBanner.tsx
  cards/
    SpeakerCard.tsx
    FeatureTile.tsx
    ContactTile.tsx
content/
  mac2026.ts                       # all copy, links, founder data, CTA destinations
public/
  mac2026/
    rohit.jpg                      # to drop in
    sahil.jpg                      # to drop in
    mac-logo.svg                   # to drop in or link from MAC
    fabai-mark.svg                 # to drop in
```

Keep all copy, links, and CTA destinations in `content/mac2026.ts` so updates are one file edits.

---

## 6. Assets and links to plug in

Aabhas to supply:

| Asset / link | Where it goes | Status |
|---|---|---|
| Rohit photo (square 800px+) | `public/mac2026/rohit.jpg` | `[TBD]` |
| Sahil photo (square 800px+) | `public/mac2026/sahil.jpg` | `[TBD]` |
| MAC2026 official logo (SVG ideal) | `public/mac2026/mac-logo.svg` | `[TBD]` |
| FabAI logo / mark | `public/mac2026/fabai-mark.svg` | `[TBD]` |
| Session abstract (2 to 3 lines) | Section 4.2 | `[TBD]` |
| FabAI product URL | Try FabAI CTAs across page | `[TBD, default /fabai]` |
| Complete suite URL | Suite CTAs and tertiary link | `[TBD, default /]` |
| FabAI demo video (optional) | Section 4.3 ghost CTA | `[TBD, optional]` |
| Bulk launcher / automation UI screenshot | Section 4.4 visual | Lift from home Feature Grid if not supplied |
| WhatsApp link(s) | Section 4.5 | `[TBD]` |
| Telegram link(s) | Section 4.5 | `[TBD]` |
| Calendly / Cal.com link (optional) | Section 4.5 | `[TBD]` |
| Rohit and Sahil LinkedIn URLs | Section 4.2 speaker cards | `[TBD]` |
| Exact MAC purple hex | Section 2 token | Placeholder `#5B2DCC` until provided |

Until assets arrive, ship the page with greyscale placeholder portraits and `#` placeholder links so it renders cleanly. Aabhas will swap them in `content/mac2026.ts`.

---

## 7. Acceptance criteria

The launch is done when:

1. Banner shows on every route except `/mac2026` itself
2. Banner dismiss persists across reloads in the same browser
3. Banner is fully gone after 28 May 00:00 IST without any code change
4. `/mac2026` renders all seven sections with the global shell
5. FabAI features are the clear headline of the page; complete suite is the obvious next step
6. Every "Try FabAI" and "See the complete suite" CTA links to the correct destination once `content/mac2026.ts` is filled in
7. Page is responsive across mobile, tablet, desktop
8. All TBD links and images are clearly placeholders so Aabhas can spot them
9. Lighthouse performance 90+, accessibility 95+
10. `prefers-reduced-motion` is honoured

---

## 8. Open questions

1. **Session abstract:** 2 to 3 lines on what Rohit and Sahil will actually cover, ideally framed around FabAI's role in the architecture. Without it the session block reads thin.
2. **FabAI product URL:** is it `/fabai` on this domain, a subdomain like `ai.fabfunnel.com`, or the standalone `fabfunnel.ai`? CTAs across the page all point here.
3. **FabAI brand mark:** does FabAI have its own wordmark/icon distinct from FabFunnel, or use the FabFunnel mark with an "AI" tag?
4. **Complete suite CTA destination:** does it go to `/` (home), `/pricing`, or a dedicated `/platform` overview? Default is `/`.
5. **WhatsApp / Telegram:** one shared inbox or per founder? If per founder, the Meet Us section becomes four tiles, not three.
6. **Post event behaviour:** after 28 May, keep `/mac2026` live as a recap or redirect to `/`? Default: stay live, swap hero CTA to "Watch the session" if a recording exists.
