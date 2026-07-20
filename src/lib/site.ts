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
  // While this contains REPLACE_ME, CTAs fall back to the email below.
  tallyFormUrl: "https://tally.so/r/REPLACE_ME",
  // Optional: a Calendly/booking link for the "Book a demo" button.
  demoUrl: "https://tally.so/r/REPLACE_ME",
  // Fallback contact — used whenever no real form URL is set. Always works.
  contactEmail: "francesco@ouicapital.vc",

  // The credibility hook — your real differentiator.
  builtBy: {
    fund: "Oui Capital",
    blurb: "Built and used daily inside an active early-stage fund.",
  },

  // Outcome stats (honest, product-capability framed — edit freely).
  stats: [
    { value: "6+", label: "Signal sources monitored daily" },
    { value: "<2 min", label: "From pitch deck to first-pass memo" },
    { value: "0", label: "Manual data-entry required" },
    { value: "100%", label: "Of email & activity auto-logged" },
  ],

  // Replace with a real, attributed quote from a partner before launch.
  testimonial: {
    quote:
      "Every feature exists because our own fund needed it. We ship what actually wins deals — not demos.",
    name: "Managing Partner",
    role: "Oui Capital",
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

/** True once a real Tally form URL has been set. */
export const formReady = !site.tallyFormUrl.includes("REPLACE_ME");

/** A CTA target that never 404s: the demo section anchor. */
export const demoHref = "#demo";

/** Working mailto fallback for "Book a demo" until a form exists. */
export const contactMailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.name} — request a demo`
)}`;
