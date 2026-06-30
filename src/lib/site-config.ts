/**
 * Single source of truth for site-wide configuration.
 *
 * Anything that varies between dev / staging / prod (domain, emails, legal entity)
 * lives here and reads from `NEXT_PUBLIC_*` env vars with safe defaults so a
 * missing env never breaks the build. Real values land via Vercel project env.
 *
 * When a real value arrives, either set the env var OR edit the default below
 * and remove the corresponding item from DECISIONS_NEEDED.md.
 */

const env = (key: string, fallback: string) =>
  process.env[key]?.trim() || fallback;

export const siteConfig = {
  /** Public URL — used for metadata, sitemap, robots, OG image, JSON-LD. */
  url: env("NEXT_PUBLIC_SITE_URL", "https://globalforkfh.com"),

  name: "Global Fork",
  shortName: "GF",
  tagline: "A world of flavors. One place to gather.",
  description:
    "A vibrant San Diego dining destination where global flavors, craft drinks, and cultural experiences come together in one open, piazza-inspired space.",

  /** Inboxes that receive form submissions / public correspondence. */
  emails: {
    general: env("NEXT_PUBLIC_EMAIL_GENERAL", "info@globalforkfh.com"),
    vendors: env("NEXT_PUBLIC_EMAIL_VENDORS", "vendors@globalfork.example"),
    careers: env("NEXT_PUBLIC_EMAIL_CAREERS", "careers@globalfork.example"),
    bookings: env("NEXT_PUBLIC_EMAIL_BOOKINGS", "bookings@globalfork.example"),
    privacy: env("NEXT_PUBLIC_EMAIL_PRIVACY", "privacy@globalfork.example"),
    accessibility: env(
      "NEXT_PUBLIC_EMAIL_ACCESSIBILITY",
      "accessibility@globalfork.example",
    ),
  },

  /** Real-world venue. Used in footer, /visit, JSON-LD. */
  business: {
    streetAddress: "550 W Date St, Suite B",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
    /** Optional. Empty string = omit from JSON-LD. */
    telephone: env("NEXT_PUBLIC_TELEPHONE", ""),
    /** Schema.org openingHoursSpecification. Mon=Monday etc. */
    hours: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: [
      "Global",
      "Pizza",
      "Burgers",
      "Thai",
      "Seafood",
      "Healthy",
      "Ice Cream",
    ],
  },

  /** Social handles. Empty string = link to platform home. */
  social: {
    instagram: env("NEXT_PUBLIC_INSTAGRAM", ""),
    /**
     * Behold (behol.so) feed ID for the Instagram grid in the Follow section.
     * Empty = grid falls back to brand-gradient placeholders.
     * Create a feed at behold.so → copy its Feed ID here / into env.
     */
    beholdFeedId: env("NEXT_PUBLIC_BEHOLD_FEED_ID", ""),
  },

  /** Legal — fed into Privacy + Terms + Accessibility pages. */
  legal: {
    /** Registered legal entity that owns the site (per LLC filing). */
    entity: env("NEXT_PUBLIC_LEGAL_ENTITY", "Global Fork (legal entity TBC)"),
    /** Governing-law jurisdiction for Terms of Service. */
    jurisdiction: env("NEXT_PUBLIC_LEGAL_JURISDICTION", "State of California"),
    /** How long we retain inquiry submissions, in months. */
    retentionMonths: Number(env("NEXT_PUBLIC_RETENTION_MONTHS", "18")),
    /** Effective date displayed on legal pages. */
    effectiveDate: env("NEXT_PUBLIC_LEGAL_EFFECTIVE_DATE", "2026-04-27"),
  },
} as const;

/** Build a fully-qualified URL from a path. */
export const absoluteUrl = (path: string) =>
  `${siteConfig.url.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

/** Format the business address as a single line. */
export const formattedAddress = () => {
  const b = siteConfig.business;
  return `${b.streetAddress}, ${b.addressLocality}, ${b.addressRegion} ${b.postalCode}`;
};
