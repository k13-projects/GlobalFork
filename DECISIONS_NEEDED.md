# Decisions Needed — GlobalFork

> **What this file is.** A standing punch-list of decisions that block production work. Each item lists *what we need*, *why we need it*, *what we'll do until it's answered*, and *where it gets wired in code* once decided.
>
> **How to use it.** When the user (Kazimiro / Eren) asks "what's next?", this file is the answer. Resolved decisions move to PLAN.md §7 (Decisions log) with their date.
>
> **Last updated:** 2026-04-27 — generated from P6 audit; §1 resolved (domain locked to `globalforkfh.com`).

---

## Priority key
- 🔴 **Blocker** — production cannot ship without this.
- 🟡 **Soft blocker** — site can ship with placeholder, but must be replaced before public launch.
- 🟢 **Nice-to-have** — improves the site, not on the critical path.

---

## 1. 🔴 Real email addresses for the contact pipeline

**Need:** real inboxes for these four roles:
- General inquiries (currently `hello@globalfork.example`)
- Vendor opportunities (currently `vendors@globalfork.example`)
- Careers (currently `careers@globalfork.example`)
- Bookings (currently `bookings@globalfork.example`)

**Why:** today the forms `mailto:` these addresses and the footer surfaces them as plain links. Going public with `.example` addresses produces obvious bouncebacks and looks unprofessional.

**Interim:** all four addresses live in `siteConfig.emails` and are read everywhere. Single edit to swap.

**Wired at:** [src/lib/site-config.ts](src/lib/site-config.ts), referenced from `SiteFooter`, `/contact`, `/bookings`.

**Decision capture:** the four addresses + which mailbox/group owner is responsible.

---

## 2. 🔴 Hosted form handler — pick one

**Need:** how do contact + bookings submissions actually get delivered?

**Why:** today both forms open the user's email client via `mailto:`. That means **no spam protection, no rate limit, no audit log, no proof of receipt, no analytics on lead volume**. It also exposes inbox addresses to bots in plain HTML. Going public this way will lose inquiries and accept spam at the same time.

**Options (pick one):**
| Option | Pros | Cons | Effort |
|---|---|---|---|
| **Resend** + Vercel Route Handler | Cleanest API, generous free tier, made for Next.js, full control | Need to write the handler + spam protection | ~1 day |
| **Postmark** + Vercel Route Handler | Best-in-class deliverability, transactional mail focus | Paid from message 100 onward | ~1 day |
| **Formspree / Basin / Web3Forms** | Drop-in, zero backend, includes spam protection out of box | External dependency, branded emails, less control | ~2 hours |
| **Stay on mailto** | No work | All the cons above; not production-grade | 0 |

**Interim:** mailto stays wired so the forms aren't broken; planned removal in P6.6.

**Sub-decisions once option chosen:**
- Spam protection: **Cloudflare Turnstile** (free, privacy-friendly, recommended) vs **hCaptcha** vs honeypot-only.
- Rate limit threshold (default proposal: 5 submissions per IP per hour).
- Where audit logs live (Vercel logs / external).

**Wired at:** new `src/app/api/contact/route.ts`, `src/app/api/bookings/route.ts`. Forms swap `window.location.href = mailto:...` for `fetch("/api/...")`.

---

## 3. 🔴 Legal entity + governing jurisdiction

**Need:** for the Privacy Policy and Terms of Service pages — what is the legal entity name, registered address, and governing law?

**Why:** Privacy and Terms must name the data controller and the jurisdiction whose courts settle disputes. We have placeholders right now.

**Examples of what we need filled in:**
- Legal entity (e.g., "Global Fork LLC", "Tiger Hospitality Group LLC dba Global Fork")
- Registered business address (the real one, not the venue address — the address on the LLC filing)
- Governing law (e.g., "State of California")
- Venue address for footer / Restaurant JSON-LD: presumed **550 W Date St, Suite B, San Diego, CA 92101** (confirm exact suite + ZIP)

**Interim:** legal pages render with `{LEGAL_ENTITY}` / `{ADDRESS}` / `{JURISDICTION}` markers, sourced from `siteConfig.legal`. Easy edit when we have the answer.

**Recommendation:** ask Eren / counsel for a one-pager with these four fields plus the four emails from §1. Counsel review of the Privacy + Terms drafts before launch is strongly advised — our drafts are reasonable starting points, not legal advice.

**Wired at:** [src/lib/site-config.ts](src/lib/site-config.ts) → consumed by `/privacy`, `/terms`, `/accessibility`, footer, JSON-LD.

---

## 4. 🟡 Real Instagram handle (and other socials)

**Need:** the real Instagram handle (and any other socials we want to surface — TikTok? X? Facebook?).

**Why:** the home Follow section's CTA currently links to `#instagram`, an in-page anchor that goes nowhere. Audit flagged this as a broken link.

**Interim:** until a real handle is provided, the CTA links to `https://instagram.com/` (Instagram home). It is functional and not "broken," but it is also not yours. Replace ASAP.

**Wired at:** `siteConfig.social.instagram` → consumed by [src/components/sections/Follow.tsx](src/components/sections/Follow.tsx).

---

## 5. 🟡 Error monitoring service

**Need:** which service catches production errors? Options: **Sentry** (most common), **Vercel Monitoring** (built-in but more limited), **LogRocket**, or **none for now**.

**Why:** today `error.tsx` does `console.error(error)`. In production, browser consoles do not phone home — silent failures are invisible to us.

**Interim:** the error page already surfaces an `error.digest` to the user; we can correlate manually if a customer reports an issue. Not great for proactive triage.

**Recommendation:** Sentry free tier (5k events/mo) for starters; flip on for the first month, evaluate.

**Wired at:** would extend `error.tsx` and add `instrumentation.ts`.

---

## 6. 🟡 Analytics — which tool, if any?

**Need:** does Eren want web analytics?

**Why:** today there are zero trackers. That's a privacy strength but means we have zero data on traffic, conversions, or which vendor pages perform best.

**Options (privacy-first preferred to keep our compliance posture clean):**
- **Plausible** ($9/mo) — cookie-less, GDPR-clean, lightweight
- **Fathom** ($14/mo) — same idea, different vendor
- **Umami** (self-hosted, free) — same idea, more setup
- **Vercel Web Analytics** ($10/mo, built-in)
- **Google Analytics 4** — most data, biggest privacy/CCPA disclosure burden
- **None** — keep the cleanest legal posture; revisit in 90 days

**Cookie/consent implication:** the first three options + Vercel set **no cookies** → no consent banner needed. GA4 sets cookies → consent banner becomes mandatory.

**Wired at:** would add a single `<Script>` in `layout.tsx` plus update `/cookies` page to disclose.

---

## 7. 🟡 Booking-data retention period

**Need:** how long do we keep contact/booking inquiries on file?

**Why:** Privacy Policy must declare the retention window. Without a stated period, we're either over-retaining (legal risk) or making one up.

**Default proposal (used in current draft):** **18 months from last contact**, after which inquiries are deleted from the inbox and any back-end logs.

**Interim:** privacy page shows `{RETENTION_PERIOD}` as 18 months by default. Override in `siteConfig.legal.retentionMonths`.

---

## 8. 🟡 CSP enforcement timing

**Need:** when do we flip Content-Security-Policy from `report-only` to enforcing?

**Why:** going straight to enforcing risks blocking something legitimate (a Next.js inline style, a webfont preload, etc.) and breaking the site. Report-only logs violations without breaking anything.

**Default proposal:** ship in report-only on day one, monitor browser console + (eventually) `report-uri` endpoint for one week, then flip to enforcing. The flag is one line in `next.config.ts`.

**Interim:** `next.config.ts` ships `Content-Security-Policy-Report-Only`. Switch to `Content-Security-Policy` after 7 clean days.

---

## 9. 🟢 Hours of operation — confirm

**Need:** are weekend hours confirmed? Existing PLAN says "9 am – 9 pm Mon–Fri; weekends TBC."

**Why:** Restaurant JSON-LD (`openingHoursSpecification`) needs day-of-week granularity for Google Maps / Knowledge Panel.

**Interim:** JSON-LD currently emits Mon–Fri 09:00–21:00. Confirm + extend to Sat/Sun.

**Wired at:** [src/lib/site-config.ts](src/lib/site-config.ts) → `business.hours`.

---

## 10. 🟢 Phone number

**Need:** a public phone number (for JSON-LD + footer + privacy contact).

**Why:** strongly improves local SEO (`tel:` link in Knowledge Panel) and gives users a non-form contact path — required by some accessibility laws.

**Interim:** phone is omitted from JSON-LD if not set. No visible degradation; just a missed SEO opportunity.

---

## 11. 🟢 Cookie banner now or later?

**Need:** today the site sets **zero cookies** (verified — no `document.cookie`, no GA, no third-party scripts). We could ship without a banner.

**Decision:** if §6 (analytics) chooses a no-cookie tool (Plausible/Fathom/Umami/Vercel) → **no banner needed**. If it chooses GA4 → **banner becomes mandatory**.

**Recommendation:** defer until §6 is decided.

---

## 12. 🟢 Vercel project hookup

**Need:** Kazimiro to connect `k13-projects/GlobalFork` repo to a Vercel project so we get preview deploys.

**Why:** carry-over from P3/P4. Currently no preview URL → harder to share for review.

---

## How to resolve a decision

1. Pick the answer in this file (the user can just say "go with Resend" or "use these emails").
2. Move the resolved item into PLAN.md §7 (Decisions log) with today's date and a one-line rationale.
3. Update `src/lib/site-config.ts` (or env var) with the value.
4. Delete the resolved item from this file (history is preserved in git).
