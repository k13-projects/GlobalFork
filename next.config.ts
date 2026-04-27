import type { NextConfig } from "next";

/**
 * Security headers applied to every route.
 *
 * Strategy:
 * - Static-policy headers (HSTS, frame-options, etc.) are enforced from day one.
 * - CSP starts in `Content-Security-Policy-Report-Only` so any mismatch shows
 *   up as a console report instead of breaking the page. Flip `CSP_ENFORCE`
 *   after a clean week of report-only — see PLAN.md §P6.2 / DECISIONS_NEEDED §9.
 *
 * CSP notes:
 * - `'unsafe-inline'` on style-src is required by Tailwind v4 + Motion inline styles.
 * - `'unsafe-inline'` on script-src is required by Next.js's hydration bootstrap.
 *   Switching to nonces would mean a middleware pipeline — overkill for a static site.
 * - `data:`/`blob:` allowed for img/font because next/image + next/font serialize small assets that way.
 */

const CSP_ENFORCE = false;

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: CSP_ENFORCE
      ? "Content-Security-Policy"
      : "Content-Security-Policy-Report-Only",
    value: csp,
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
