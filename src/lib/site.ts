/**
 * SINGLE SOURCE OF TRUTH FOR BRANDING.
 * To rebrand the whole site (name, domain, links), edit this file only.
 * `name`, `domain`, and the CTA links flow everywhere from here.
 */
export const site = {
  // ⬇️ PLACEHOLDER BRAND — rename these three when you pick the final name.
  name: "VentureOS",
  domain: "ventureos.ai",
  url: "https://ventureos.ai",

  tagline: "The AI-native operating system for venture capital",
  description:
    "Source, evaluate, and manage deals with AI. VentureOS surfaces founders before they raise, drafts investment memos in your format, and keeps your pipeline moving — built inside an active fund, not a lab.",

  // Lead capture — paste your Tally form URL / embed id here.
  // Get one at https://tally.so (free). Example: https://tally.so/r/abc123
  tallyFormUrl: "https://tally.so/r/REPLACE_ME",
  // Optional: a Calendly/booking link for the "Book a demo" button.
  demoUrl: "https://tally.so/r/REPLACE_ME",

  // The credibility hook — your real differentiator.
  builtBy: {
    fund: "Oui Capital",
    blurb: "Dogfooded daily by an active early-stage fund.",
  },

  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
  },

  nav: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how" },
    { label: "Blog", href: "/blog" },
  ],
} as const;

export type Site = typeof site;
