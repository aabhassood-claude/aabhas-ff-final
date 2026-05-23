/* global React */

// ============================================================
// MAC2026 — single source of truth for the event launch.
// Every Try FabAI / See the complete suite / contact CTA reads
// from here. One edit, propagates everywhere.
// ============================================================

const MAC2026 = {
  // Banner sunset moment (28 May 00:00 IST = 27 May 18:30 UTC)
  sunsetISO: '2026-05-27T18:30:00Z',

  // Event
  event: {
    name: 'MAC2026',
    longName: 'MAC Affiliate Conference 2026',
    dateRange: '25 to 27 May 2026',
    dateShort: '25 to 27 May',
    venue: 'Meridian Expo, Yerevan',
    venueLong: 'Meridian Expo, Yerevan, Armenia',
    sessionDay: 'Day 1',
    sessionDate: '25 May',
    sessionTime: '12:30',
    sessionTitle:
      'Scaling Meta Ads to $10M/Month: Breaking Down the Architecture That Drives Our Lead Gen & VSL Campaigns',
    // TBD per the brief — placeholder copy makes the section ship.
    sessionAbstractTBD: true,
    sessionAbstract:
      "Rohit and Sahil walk through the exact stack IdeaClan runs to spend at scale: the bulk launch flow, the AI creative system that keeps fatigue in check, and the guardrails that catch a bad ad set before it eats budget. Every example pulled from a live $10M a month book of business.",
  },

  // Speakers
  speakers: [
    {
      id: 'rohit',
      name: 'Rohit Ajmani',
      title: 'Co Founder & CEO, IdeaClan',
      photo: '../assets/mac2026/rohit.png',
      linkedin: 'https://www.linkedin.com/in/rohit-ajmani-a2298863/',
      linkedinTBD: false,
    },
    {
      id: 'sahil',
      name: 'Sahil Walia',
      title: 'Co Founder, IdeaClan',
      photo: '../assets/mac2026/sahil.png',
      linkedin: 'https://www.linkedin.com/in/sahilwaliacom/',
      linkedinTBD: false,
    },
  ],

  // CTA destinations — change once, applies everywhere
  links: {
    fabAi:         'fab-ai.html',
    fabAiTBD:      false,
    completeSuite: 'landing.html',
    completeSuiteTBD: false,
    demo:          'pricing.html#demo',
    fabAiDemoVideo: '#tbd-fab-ai-demo-video',
    fabAiDemoVideoTBD: true,
  },

  // Banner copy
  banner: {
    desktop:  'Catch Rohit & Sahil live at MAC2026 → 25 to 27 May, Yerevan',
    mobile:   'MAC2026 → Meet our founders',
    ctaLabel: 'Meet Us',
    ctaHref:  'mac2026.html',
    storageKey: 'mac2026_banner_dismissed',
  },

  // FabAI feature tiles (Meet FabAI section)
  fabAiFeatures: [
    { id: 'cgen',    title: 'Creative Generation', body: 'AI generated ad creatives in your brand voice, ready to launch.', icon: 'sparkles' },
    { id: 'vsage',   title: 'Video Sage',          body: 'AI breaks down which moments in your video ads actually convert.', icon: 'video' },
    { id: 'copilot', title: 'Co Pilot',            body: 'An always on AI assistant that suggests the next move on every campaign.', icon: 'compass' },
  ],

  // Complete suite tiles
  suiteFeatures: [
    { id: 'bulk',       title: 'Bulk Campaign Launch',       body: 'Launch hundreds of variations across Meta, TikTok, and NewsBreak in minutes.', icon: 'rocket' },
    { id: 'automation', title: 'Cross Platform Automation',  body: 'Set rules once, FabFunnel watches every account and acts 24/7.', icon: 'gears' },
    { id: 'reporting',  title: 'Multi Ad Account Reporting', body: 'Every account, every platform, in one live dashboard.', icon: 'chart' },
  ],
};

window.MAC2026 = MAC2026;
