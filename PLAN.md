# GlobalFork — Living Work Plan

> **This document is the source of truth for project direction.** Updated before every commit so any tab / collaborator can pick up without context loss.
>
> **Last updated:** 2026-04-27 · **Current phase:** P6 — compliance & security hardening (legal pages, headers, 508/WCAG fixes) · **Active branch:** `gf_apr27_v4`
>
> **Companion docs:**
> - [DECISIONS_NEEDED.md](DECISIONS_NEEDED.md) — items waiting on Kazimiro / Eren / counsel input. Always check here when the user says "what's next?".

---

## 1 · Context

**Stakeholders:** Eren (bossman) · Lorena (their designer)
**Team:** Kazimiro (Team Manager) · Claude (Senior UI/UX Designer)
**Prior work for same stakeholders:** tigerhospitalitygroup.com · lavida.fit · miramarfoodhall.com
**Brief:** this site must visibly *level up* from prior work — cutting-edge animation, auto-triggered scroll effects, modern stack. Impress Eren.

**The venue:** GLOBAL FORK — 4,685 sqft indoor + 10,000 sqft cobblestone plaza at 550 W Date St, San Diego. Five culinary concepts + central indoor/outdoor bar.

**Vendors (6):** MOTO Pizza · Cosmos Burger · La Vida · Lobster Lab · Handel's Ice Cream · Thai Style Kitchen

**Tagline:** *A world of flavors. One place to gather.*

---

## 2 · Design system (observed from Lorena's screenshots + IDENTITY.pdf)

### Palette
| Token | Name | Use |
|---|---|---|
| `--sand` | Sandstone cream | primary backgrounds, text on dark |
| `--clay` | Clay red | vendor/follow sections, accent headlines |
| `--harvey` | Harvey gold | bookings section, highlight |
| `--iron` | Iron black | hero tagline / visit section / body text |
| `--grove` | Grove green | accents, hover states |
| `--ochre` | Ochre | secondary warm |
| `--misty` | Misty sage | subtle accents |
| `--spicy` | Spicy brown | CTA buttons (copper/terracotta pill) |
| `--tide` | Deeper Tide navy | reserved |

*Exact hex values to be extracted from IDENTITY.pdf in P1; initial approximations in Tailwind tokens.*

### Typography
- **Display/headline**: Pitch (Klim) — condensed bold slab. Licensed font; fallback = `Archivo Narrow` / `Oswald` until Kazimiro confirms web license
- **Body/UI**: Proxima Nova (Mark Simonson) — fallback = `Inter`
- **Script accent**: Contempora Script — fallback = `Sacramento` (Google Fonts)

### Signature layout patterns
1. **Split navigation** around a centered circular badge logo (`GLOBAL FORK · SAN DIEGO · CA`)
2. **Four element icons** (Sun · Community/Flower · Earth/Star · Water/Grid) appear as section chapter markers
3. **Diagonal section transitions** (not horizontal) between color blocks
4. **Pattern-as-background**: each section tiles its element pattern at ~8-15% opacity
5. **Pill CTAs** with solid fill in section accent color
6. **Script flourishes** as decorative accents ("a true gathering place", "Where taste travels", "Culture and flavor carry global spirit")
7. **Event cards**: dark rounded rectangles, big date month stack ("JUNE / 4")

### Section palette map (from screenshots)
| Section | Background | Accent pattern | Heading color |
|---|---|---|---|
| Hero | full-bleed photo | — | — |
| Tagline | Iron black | vertical bars pattern | Sandstone cream |
| About Us | Sandstone cream | — | Clay red |
| Our Vendors | Clay red | flower-of-life pattern | Sandstone cream |
| Events | Sandstone cream | sun radial pattern | Iron black |
| Bookings | Harvey gold | sun-floral pattern | Sandstone cream |
| Visit Us | Iron black | sun element faded | Sandstone cream |
| Follow Us | Clay red | — | Sandstone cream |
| Footer | Sandstone cream | — | Iron black |

---

## 3 · Information architecture

```
/                      Home — single scroll experience, all six brief sections
                       (#about · #vendors · #events · #bookings · #visit · #contact)
/vendors/[slug]        Per-vendor detail (only standalone route besides legal)
```

Brief is one-page (see [GLOBAL FORK WEBSITE STUCTURE.pdf](assets/GLOBAL%20FORK%20WEBSITE%20STUCTURE.pdf)).
Earlier P4 inner pages (`/about`, `/vendors`, `/bookings`, `/contact`) were a
misread and have been removed; nav links are anchors now and `SmoothScroll`
glides them in below the sticky header.

---

## 4 · Tech stack

- **Next.js 15** (App Router) · React 19 · TypeScript strict
- **Tailwind v4** with CSS custom properties for brand tokens
- **Motion** (Framer Motion 11) for component/layout animations
- **GSAP 3** + ScrollTrigger for scroll-driven cinema (deferred until P2)
- **Lenis** for smooth scroll
- **next/font** for local Pitch fonts + Google Font fallbacks
- **next/image** + AVIF for photography
- **shadcn/ui** primitives for forms (Bookings, Contact)
- **pnpm** package manager
- **Vercel** deployment

Deferred decisions (punt to when the need is real):
- WebGL hero (Three.js + R3F) — evaluate in P3
- CMS (Sanity vs Payload) — decide at P4 when Events/Vendors content owner is confirmed
- Map provider (Mapbox vs custom) — P3

---

## 5 · Phased roadmap

| Phase | Goal | Exit criteria |
|---|---|---|
| **P0 — Foundation** *(active)* | Repo alive with stack in place | Next.js app running locally, Tailwind tokens wired, fonts loaded, Lenis scrolling, deployed to Vercel preview |
| **P1 — Static homepage** | All 8 sections in code with real copy | Every section from Lorena's mockup rendered statically, desktop-first. Design review with Kazimiro before P2. |
| **P2 — Motion layer 1** | Auto-triggered scroll reveals | IntersectionObserver fade/slide-in, reduced-motion fallbacks, Lenis polish, element-icon entrances |
| **P3 — Signature moments** | The "wow" layer | Hero gradient mesh / element orbit / vendor horizontal piazza walk / plaza panorama scrub / custom map |
| **P4 — Inner pages + CMS** | Content-editable | Vendor detail pages, Events flow, Bookings form, CMS wired so Lorena can edit |
| **P5 — Polish + ship** | Launch | Perf pass (LCP <2s, 60fps motion), a11y audit, SEO/OG, Eren review, prod deploy |
| **P6 — Compliance & security hardening** *(active)* | Production-ready legal + security posture | Legal pages live (privacy/terms/cookies/accessibility), security headers + CSP enforced, 508/WCAG 2.1 AA fixes shipped, hosted form handler wired, Restaurant JSON-LD + real domain in env, monitoring connected |

---

## 6 · P0 checklist *(complete)*

- [x] Git remote + auth confirmed (`k13-projects/GlobalFork`)
- [x] Branch `gf_apr24_v1` created
- [x] PLAN.md committed (commit 1)
- [x] `.gitignore` for Node/Next
- [x] Next.js **16** + React 19 + TS scaffold (App Router, Tailwind v4, ESLint, src dir, Turbopack)
- [x] Tailwind v4 brand palette tokens via CSS-first `@theme inline` block
- [x] Font loading: Archivo Narrow (display) + Inter (body) + Sacramento (script) via `next/font/google`
- [x] Lenis smooth scroll component, mounted in root layout, respects `prefers-reduced-motion`
- [x] Split-nav shell + circular badge logo SVG placeholder
- [x] Hero stub + tagline strip + P0 status panel rendered
- [x] `pnpm dev` boots clean, `/` returns HTTP 200, key markup present
- [ ] Vercel preview link (deferred to first push — Kazimiro to connect repo to Vercel)

## 6a · P1 checklist *(complete)*

- [x] Real PNG assets (logo badge, lockup, 4 element icons, 3 script accents, 9 patterns) copied to `public/brand/`
- [x] LogoBadge swapped to real badge PNG via `next/image` (variant: dark/light)
- [x] `ElementIcon` + `ElementIconRow` primitives (Sun · Community · Earth · Water)
- [x] `ScriptAccent` primitive (3 named accents, 3 color variants)
- [x] `PatternOverlay` primitive (9 named patterns, opacity + size + blend props)
- [x] `PillButton` primitive (5 color variants, Link-based, accessible)
- [x] `DiagonalCut` primitive (clip-path triangle, flippable)
- [x] All 10 sections built with real copy + brand imagery:
      Hero · Tagline · About · Vendors · Events · EventsRender · Bookings · Visit · Follow · SiteFooter
- [x] 6 vendors wired with real names, blurbs, IG handles, hover reveal
- [x] 3 event cards with stacked month/day layout
- [x] 9 am – 9 pm hours wired in Visit
- [x] Production build green, TypeScript clean, page prerenders as static
- [ ] *Deferred to P2*: Confirm exact hex codes from IDENTITY.pdf (current values are sampled approximations and look correct against mockup)
- [ ] *Deferred to P2*: True full-bleed hero photo (placeholder gradient until Lorena delivers)

## 6b · P2 checklist *(complete)*

- [x] `Reveal` primitive — Motion/IntersectionObserver, 5 directions, motion-pref aware
- [x] `StaggerGroup` + `StaggerItem` — parent cascades stagger to children
- [x] `SplitHeadline` — word-by-word reveal with mask clip, used on Tagline
- [x] `SunRotator` — `useScroll` + `useTransform` rotating the Visit sun decoration on scroll progress
- [x] `NavCondense` — bg blur + opacity intensifies as user scrolls past hero
- [x] `SmoothScroll` lifted to provider, exposes `useLenis()` + handles in-page anchor clicks (any `<a href="#…">` smooth-scrolls via Lenis)
- [x] Reduced-motion: every motion primitive checks `useReducedMotion()` AND `globals.css` clamps animation durations as a global belt-and-suspenders
- [x] Motion applied to all 9 sections:
      Tagline (split headline + icon stagger) ·
      About (cascade: heading → body → script → CTA) ·
      Vendors (header reveal + 6-card stagger + script reveal) ·
      Events (header reveal + 3-card stagger) ·
      Bookings (cascade: heading → body → CTA) ·
      Visit (header + address + hours + CTA cascade · script slides in from right · sun rotates with scroll) ·
      Follow (storefront reveal + 6-tile stagger) ·
      Footer (two-column reveal from opposite sides)
- [x] Production build green; HTML rendered with motion initial styles (opacity:0, translateY/X) confirmed
- [ ] *Deferred to P3*: Element-orbit signature moment between Tagline and About — needs more scope/design conversation
- [ ] *Deferred to P3*: Script accent SVG draw-on-enter (currently fades; would need SVG paths instead of PNGs)
- [ ] *Deferred to P3*: Mobile responsive pass — mockup is desktop only; mobile design needs Lorena input

## 6c · P3 checklist *(partial — shipped what was unblocked)*

**Shipped this phase:**
- [x] Hero living gradient — two slow-drift radial gradients + light-shaft sweep, motion-pref aware
- [x] **ElementOrbit signature moment** — 4 elements break from row, fan out around a central GF glyph, slowly rotate as user scrolls; ResizeObserver-driven radius for responsive
- [x] **Mobile nav** — hamburger toggle below `md`, full-screen drawer with staggered link reveal, Escape + body-scroll-lock
- [x] **Mobile responsive baseline** — Tagline icon row + headline scale gracefully, nav badge resizes, drawer covers full viewport
- [x] Production build green; HTML at 105KB with new moment + drawer wired

**Deferred to P4 (need external resources or design conversation):**
- [x] **Vendor "piazza walk" horizontal scroll** — shipped 2026-04-26 on `gf_apr26_v1`. Pinned 320vh stage on desktop with horizontal scroll-driven translate; mobile renders the grid; both layouts coexist in DOM, CSS picks viewport.
- [ ] Plaza panorama scrub — needs Lorena's 24-frame dusk timelapse photography
- [ ] Custom Mapbox style — needs API key + design tokens conversation; rejected adding a placeholder map (not in Lorena's mockup)
- [ ] Convert script accents PNG → SVG with path draw-on — needs vector source files from Lorena
- [ ] Hex code lock from IDENTITY.pdf — current sampled values look right, can refine when palette gets a final review
- [ ] Hook Vercel preview to repo — Kazimiro action: connect `k13-projects/GlobalFork` to a Vercel project

## 6d · P4 checklist *(partial — pages shipped, CMS deferred)*

**Shipped this phase:**
- [x] Vendor data extracted to `src/data/vendors.ts` — single source for home + vendor detail
- [x] Footer lifted into root layout so every page gets it for free; footer also doubles as `#contact` anchor (LET'S CONNECT) per brief
- [x] `PageHeader` primitive — used by legal/error pages
- [x] `/vendors/[slug]` — six prerendered detail pages with hero in vendor's tone color, longform blurb, signature/cuisine/origin/IG aside, "more vendors" footer

**Reverted (2026-04-27 — Lorena one-page brief re-read):**
- [~] Inner pages `/about`, `/vendors` (index), `/bookings`, `/contact` were built then removed. Brief is single-scroll with six anchored sections; nav repointed to `/#about`, `/#vendors`, `/#events`, `/#bookings`, `/#visit`, `/#contact`.
- Bookings/contact forms removed — Web3Forms (https://app.web3forms.com/) will be wired into the section CTAs in a later pass.
- `/vendors/[slug]` retained — vendor detail is useful and harmless even on a one-page site.

**Deferred (need external decisions or content):**
- [ ] `/events` index + `/events/[slug]` — events data is mock; revisit when real calendar exists
- [ ] `/visit` extended page — homepage Visit section sufficient until parking/directions content is finalized
- [ ] CMS choice (Sanity vs Payload) — blocked on who owns Events/Vendors content
- [ ] Real photography swap (vendors + hero render) — blocked on Lorena delivery
- [ ] Hosted form handler — current mailto flow is functional but not analytics-friendly
- [ ] P3 deferred items still pending: piazza-walk, plaza panorama, custom Mapbox, script SVG draw-on, hex lock, Vercel preview hookup

## 6e · P5 checklist *(partial — code-side ship-ready, blockers external)*

**Shipped this phase:**
- [x] **Per-route metadata** on every page including title, description, openGraph
- [x] **Dynamic OG image route** at `/og` (edge runtime) using `next/og` ImageResponse — palette + type matched, accepts `?title=&eyebrow=&tagline=&tone=` params
- [x] **Per-vendor OG images** with the vendor's tone color baked in (six variants)
- [x] **`sitemap.xml`** via `app/sitemap.ts` — 11 URLs (5 static + 6 vendor SSG pages), real lastModified
- [x] **`robots.txt`** via `app/robots.ts` — allows all, points at sitemap
- [x] **A11y**: skip-to-content link (appears on first Tab), visible `:focus-visible` ring in Clay, `<main id="main">` target
- [x] **`not-found.tsx`** — branded 404 with three CTAs (Home / Vendors / Contact); used by `notFound()` in `/vendors/[slug]`
- [x] **`error.tsx`** — global error boundary with retry + home link, surfaces `error.digest` for support
- [x] Form layouts split: `/contact` and `/bookings` are client components, so metadata moved to sibling `layout.tsx` files
- [x] Build green: 16 prerendered routes + 1 dynamic edge route (/og); all smoke tests 200/404 as expected

**Deferred — external blockers:**
- [ ] Vercel preview hookup — Kazimiro action: connect `k13-projects/GlobalFork` to a Vercel project
- [~] Real photography swap — Lorena delivery (interim: brief-harvested placeholders for hero, bookings, visit, and vendor cards)
- [ ] Hosted form handler swap (replace mailto) — needs bookings inbox configured + spam strategy
- [ ] Perf field test — LCP < 2s on 4G, 60fps motion on mid-tier — needs real deploy + DevTools session
- [ ] Eren review pass — needs deploy URL
- [ ] Production deploy — needs Vercel hookup + Eren signoff
- [ ] Carry-overs from P3/P4: ~~piazza-walk~~ (shipped), plaza panorama, custom Mapbox, script SVG draw-on, hex lock from IDENTITY.pdf

---

## 6f · P6 checklist *(active — compliance & security hardening)*

> Triggered by the pre-prod audit (2026-04-27). Audit overall score 72/100, blockers: no security headers, no privacy/terms, mailto-only forms, four 508/WCAG items, placeholder domain. Eren wants production-ready and lawsuit-resistant (Section 508).
>
> **Strategy:** ship as much as possible *independently* with placeholder content + env-driven config; everything that needs Eren/counsel input lives in [DECISIONS_NEEDED.md](DECISIONS_NEEDED.md). Each item below is self-contained — another session can pick up at any unchecked item without re-reading the audit.

### P6.1 — Foundation (config + env)
- [ ] `src/lib/site-config.ts` — single source for site URL, legal entity name, business address, phone, hours, support emails. Env-driven with safe defaults so build never breaks.
- [ ] `.env.example` documenting all `NEXT_PUBLIC_*` vars (site URL, legal entity, emails) and server-side vars (form handler keys when ready).
- [ ] `metadataBase` in `layout.tsx`, `BASE` in `sitemap.ts`, `robots.ts`, and OG footer string all read from `siteConfig.url`.

### P6.2 — Security headers
- [ ] `next.config.ts` exports `headers()` returning:
      `Strict-Transport-Security` (max-age=31536000; includeSubDomains; preload),
      `X-Frame-Options: DENY`,
      `X-Content-Type-Options: nosniff`,
      `Referrer-Policy: strict-origin-when-cross-origin`,
      `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`,
      `Content-Security-Policy-Report-Only` (start in report-only for one week, then enforce). CSP allows `'self'`, `data:` images, font-src self, no inline scripts unless Next requires hashes.
- [ ] After 1 week soak in report-only with no breakage, flip CSP to enforcing (decision tracked in DECISIONS_NEEDED §8).
- [ ] `pnpm audit --prod` runs clean OR documented exception. Pin Next to a release that bundles patched postcss (≥ 8.5.10) when available.

### P6.3 — Legal pages (independent)
- [ ] `/privacy` — drafted boilerplate with TODO markers for legal entity, retention windows, processor list. Covers: data we collect (name/email/phone/event details via forms), why, how long, who we share with (email service when wired), CCPA + GDPR rights, contact for data requests.
- [ ] `/terms` — drafted boilerplate with TODO markers for legal entity + governing jurisdiction. Covers: site usage, IP, third-party content (vendors), no-warranty, limitation of liability.
- [ ] `/cookies` — declaration that **today** the site sets no cookies and uses no third-party trackers. Updated when analytics decision lands.
- [ ] `/accessibility` — Section 508 + WCAG 2.1 AA conformance statement. Reports what we conform to, known gaps, and a contact for accessibility issues.
- [ ] Footer: links to Privacy / Terms / Cookies / Accessibility added under the legal block.
- [ ] Sitemap includes the four new legal pages.

### P6.4 — 508 / WCAG 2.1 AA fixes (lawsuit-resistance)
- [ ] **Tab keyboard nav** — `/contact` topic tabs respond to Left/Right (move focus + activate) and Home/End. WAI-ARIA APG tab pattern.
- [ ] **Mobile menu focus trap** — when drawer opens, focus moves into menu; Tab cycles inside; Escape closes; focus returns to hamburger on close.
- [ ] **Hamburger touch target** — bump from 40×40 to 44×44 (WCAG 2.5.5).
- [ ] **Contrast bumps** — `text-[var(--color-iron)]/55` → `/70` across forms/error/footer where iron-on-sand currently fails 4.5:1.
- [ ] **Broken anchor `href="#instagram"`** — replace with real Instagram URL (or remove until handle confirmed).
- [ ] Form fields gain `aria-required="true"` for required inputs and explicit `htmlFor`/`id` pairing in `Field` components.
- [ ] Form error feedback wired with `aria-invalid` + `role="alert"` summary on submit failures (post-handler swap).

### P6.5 — Form pipeline (consent + safety; full server handler is P6.6)
- [ ] Consent checkbox on Contact + Bookings forms ("I have read the Privacy Policy"), required to submit, links to `/privacy`.
- [ ] Forms display retention notice ("We'll keep your inquiry for {N} months") inline.
- [ ] `/og` route caps query params: `title`/`eyebrow`/`tagline` `.slice(0, 200)`, `tone` validated against `^#[0-9A-Fa-f]{6}$` regex.

### P6.6 — Hosted form handler swap *(blocked on DECISIONS_NEEDED §2)*
- [ ] Email service decision (Resend / Postmark / Formspree / etc.) recorded.
- [ ] `POST /api/contact` and `POST /api/bookings` route handlers with: server-side validation, Turnstile/hCaptcha verify, IP rate limit (5/hr), honeypot, structured email to ops inbox, audit log.
- [ ] Mailto fallback removed from forms.
- [ ] CSRF protection (Next built-ins or token-in-cookie).

### P6.7 — Error & monitoring
- [ ] `app/global-error.tsx` for layout-level failures.
- [ ] `error.tsx` adds a "contact support" link with the digest pre-filled.
- [ ] Sentry / Vercel error monitoring wired *(blocked on DECISIONS_NEEDED §5)*.

### P6.8 — SEO finishing
- [ ] `Restaurant` / `LocalBusiness` JSON-LD in root layout reading from `siteConfig`.
- [ ] Verify per-page metadata + OG renders against real domain post-launch.
- [ ] Add `manifest.webmanifest` + `theme-color`.

### P6.9 — Pre-launch QA
- [ ] axe DevTools clean on every route.
- [ ] Lighthouse a11y ≥ 95.
- [ ] Manual screen-reader pass (NVDA + VoiceOver) on home + bookings.
- [ ] Test forms in real email clients post-handler swap.
- [ ] CSP enforcing with no console errors after 7-day report-only soak.

### P6 progress log

*(append-only — newest at bottom)*

- **2026-04-27** — P6 plan committed; audit findings translated into nine numbered work groups. Started executing P6.1–P6.5 + P6.7 (independent items); P6.6 (form handler) and Sentry wiring blocked on DECISIONS_NEEDED.
- **2026-04-27** — P6.1–P6.5, P6.7 (partial), P6.8 shipped in one pass:
  - **Foundation:** `src/lib/site-config.ts` with env-driven URL / emails / business / legal / social. `.env.example` documents every var. `metadataBase`, sitemap, robots, OG footer all read from config.
  - **Headers:** `next.config.ts` exports HSTS, X-Frame-Options DENY, X-Content-Type-Options, Referrer-Policy, locked-down Permissions-Policy, and CSP **in report-only mode** (flip via `CSP_ENFORCE = true` after a 7-day soak). `poweredByHeader: false`.
  - **Legal pages:** `/privacy`, `/terms`, `/cookies`, `/accessibility` shipped as static server components, all reading entity / jurisdiction / retention / address from siteConfig. `prose-legal` styles added to globals.css. Footer gains legal nav.
  - **JSON-LD:** Restaurant schema injected from layout, reading the same config (omits telephone if blank).
  - **A11y / 508:** mobile menu now traps focus (Tab cycles in-drawer, Shift+Tab reverses), restores focus to trigger on close, hamburger bumped 40→44px. Contact tabs respond to ←/→/Home/End per WAI-ARIA APG. Broken `#instagram` href replaced with real outbound link via `siteConfig.social.instagram`. Form fields gained `aria-required` + explicit `htmlFor`/`id`. Required-field marker (`*`) added to labels. Contrast bumps across forms/error/footer (`/55` → `/70-/85`).
  - **Forms:** Contact + Bookings now require a consent checkbox linking to `/privacy` before submit; bookings form discloses retention period inline.
  - **Edge hardening:** `/og` caps `title`/`eyebrow`/`tagline` lengths, validates `tone` against `/^#[0-9A-Fa-f]{6}$/`. `robots.ts` disallows `/og` and `/api/`.
  - **Errors:** `app/global-error.tsx` added (style-free fallback if root layout itself fails). `error.tsx` adds a "Tell us what happened" mailto with the digest pre-filled.
  - **Sitemap:** four legal routes added; everything goes through `absoluteUrl()`.
  - **Build:** `pnpm build` green — 20 prerendered routes (was 16) + 1 dynamic edge `/og`. ESLint surfaces the same one preexisting `SmoothScroll` `react-hooks/set-state-in-effect` (P5 leftover, separate scope).
  - **Still blocked:** real domain (env), real emails (env), Instagram handle (env), legal entity (env), email service decision, Sentry DSN — all parked in DECISIONS_NEEDED.md.

---

## 7 · Decisions log

| Date | Decision | Why |
|---|---|---|
| 2026-04-24 | Use pnpm (not npm/bun) | Already installed; faster than npm; bun not available |
| 2026-04-24 | Start with Google Font fallbacks, not licensed Pitch | Unblock P0 — swap in Pitch when Kazimiro confirms licensing |
| 2026-04-24 | Desktop-first layout | Lorena's mockups are desktop; mobile adapts in P2 |
| 2026-04-24 | Defer WebGL / Three.js to P3 | Ship static + motion layer first; WebGL is polish not foundation |
| 2026-04-24 | Next.js 16 (not 15) | Latest stable — ships React 19 + Turbopack default + improved RSC streaming |
| 2026-04-24 | Scaffolded into temp dir then rsync'd to root | npm naming rules reject capital-letter folder name "GlobalFork"; preserved existing .git + PLAN.md |
| 2026-04-24 | Lenis as React component, not provider with context | No consumers need scroll state in P0; keep API surface tiny |
| 2026-04-24 | Use PNG brand assets directly via next/image (not SVG conversion) | Time to value > pixel purity at this stage. Convert to SVG in P3 when motion benefits from vector |
| 2026-04-24 | Element icons use `[filter:invert(1)]` for cream-on-dark | Source PNGs are dark-on-transparent; one-line CSS over re-exporting from Illustrator |
| 2026-04-24 | Vendor cards: solid-tone placeholders with hover reveal | Lorena will deliver real photography; structure + interaction are locked, swap is one-line per vendor |
| 2026-04-24 | Diagonal section cuts via clip-path polygon | Cleaner than SVG masks; honors prefers-reduced-motion automatically (no animation involved) |
| 2026-04-24 | Motion library = `motion` (formerly Framer Motion) v12 | Already installed; v12 has the new lighter `motion/react` import; first-class IntersectionObserver via `whileInView` |
| 2026-04-24 | Reveal/Stagger as standalone client components | Server components stay server; client islands stay small. Pages still prerender as static. |
| 2026-04-24 | Lenis lifted to provider with anchor-click interception | Nav anchors and any future `<a href="#">` get smooth scroll for free without per-link wiring |
| 2026-04-24 | Belt-and-suspenders reduced-motion: useReducedMotion + global CSS clamp | Defense in depth — if a third-party animation slips in, the CSS rule still neutralizes it |
| 2026-04-24 | ElementOrbit as a dedicated section between Tagline and About | Original plan called for it; uses brand's four-element vocabulary as a focal point. Marks the visual "shift" from arrival (hero) to story (about). |
| 2026-04-24 | ElementOrbit radius via ResizeObserver, not window-globals | SSR-safe; adapts cleanly to viewport changes without remounts |
| 2026-04-24 | Rejected building a Mapbox/SVG map placeholder | Not in Lorena's mockup. "Go Now" button + address is enough; map decision belongs to a real conversation in P4. |
| 2026-04-24 | Mobile nav as hamburger + full-screen drawer (not slide-in side drawer) | Six items are too many for an icon row; full-screen lets the typography breathe and matches the brand's confident voice |
| 2026-04-24 | Hero motion via animated CSS gradients (no WebGL) | Achieves "living" feel without the WebGL bundle weight; WebGL stays available for P3 follow-up if Eren wants more |
| 2026-04-25 | Nav links route to real pages, not hash anchors | Marketing convention; direct linking; SEO. Home anchors (`/#events`, `/#visit`) survive for sections without dedicated pages yet |
| 2026-04-25 | Vendor data in `src/data/vendors.ts` (not a CMS) | One file, six entries — premature to add a CMS. Drop-in replacement for Sanity/Payload when content owner is decided |
| 2026-04-25 | Mailto submission for /contact and /bookings | Functional today, no backend needed, no spam exposure. Hosted form swap is one component change in P5 |
| 2026-04-25 | Footer lifted to root layout | Every inner page needs it; lifting once beats wiring it on each new route |
| 2026-04-25 | Skipped /events and /visit dedicated pages | Events data is mock; Visit section on home covers the hours+address brief. Revisit when real content is ready |
| 2026-04-25 | OG route as edge runtime + dynamic | Edge handles many concurrent requests cheaply; OG params let one route serve every page's image without one-off SVGs |
| 2026-04-25 | Metadata for client-component routes lives in sibling `layout.tsx` | Next requires server components for metadata; layout files are the cleanest split |
| 2026-04-25 | Skip-to-content + visible focus ring globally | Accessibility floor — minimal but real; deeper audit waits for a real device + screen reader pass |
| 2026-04-25 | not-found and error boundaries are full branded pages, not raw text | The 404/500 still represents the brand; cheap to do, expensive to skip |
| 2026-04-26 | Piazza-walk + grid both render to DOM, CSS picks viewport | Avoids hydration flash + matchMedia race; cost is small (6 vendor entries duplicated); benefit is deterministic SSR |
| 2026-04-26 | Section is 320vh tall (sticky 100vh stage inside) | Gives 220vh of vertical scroll mapped to ~340vw of horizontal travel — comfortable cadence (~1.5vw per 1vh), neither blink-and-miss nor exhausting |
| 2026-04-26 | Piazza walk replaces grid on desktop, not supplements | Grid in addition to walk would create two views of the same content; pick one per viewport |
| 2026-04-26 | Placeholder photography harvested from brief PDF (`pdfimages -all` + Pillow slicing) | Brief is canonical; faster + higher fidelity than screenshotting or stock. Used for hero (bar render), bookings (dining hall), visit (storefront), and 6 vendor card covers |
| 2026-04-26 | Vendor cover photos rendered with `mix-blend-luminosity` over `tone` | Brand color still bleeds through, signaling "placeholder" rather than pretending these are vendor-specific shots |
| 2026-04-27 | SmoothScroll observes `document.body` with ResizeObserver and re-runs `lenis.resize()` on `window load` | Lenis caches scrollHeight at init; lazy images settling afterwards (especially the new placeholder photos) made the footer unreachable on first load. Reload masked it because cached assets settled before init |
| 2026-04-27 | Trimmed `badge.png` from 1800×1800 (50% transparent padding) down to 902×902 in place | Visible badge was rendering at half its declared container size, so any nav sizing fought the image. Cropping decouples sizing from the asset's bake-in padding — `BADGE_DESKTOP=140` now means a 140px visible badge |
| 2026-04-27 | Nav layout follows Lorena's vision: small badge above a single full-width divider, links capped to `max-w-6xl` and `justify-between` | Earlier "drop badge through divider" iterations clashed with how the original mockup reads — the badge sits cleanly above, divider is a continuous line, links cluster toward the centre rather than at the page edges |
| 2026-04-27 | Final nav: single `items-end` flex row with `flex-1` divider segments on the **outside** of the link/logo cluster | Logo defines row height and "cuts" the divider visually; link groups flank the logo tightly while the dividers fill the page-edge → links gap — matches Lorena's reference exactly |
| 2026-04-27 | Mobile hamburger floats `absolute right-3 top-3`; drawer starts at `top-[108px]` instead of `inset-0` | Logo + divider stay visible while menu is open. Hamburger morphs into the X close affordance, so the drawer's own close button was removed to avoid two close UIs |
| 2026-04-27 | **Production domain locked: `globalforkfh.com`** | Eren confirmed. Wired as the new fallback in `src/lib/site-config.ts` so builds reflect production reality even without `NEXT_PUBLIC_SITE_URL` set; Vercel env can still override per-environment (preview/staging). Resolves DECISIONS_NEEDED §1. |

---

## 8 · Open questions for Kazimiro

1. ~~**Pitch font license**~~ → **Deferred.** Stay on Archivo Narrow fallback for now.
2. **Content owner for Events** — who will keep the event calendar updated? (drives CMS choice)
3. ~~**Booking flow**~~ → **Deferred.** Placeholder CTA in P1; flow decision in P4.
4. ~~**Hours**~~ → **9 am – 9 pm** (Monday–Friday from copy; weekends TBC).
5. ~~**Vendor photography**~~ → **Brief-harvested placeholders shipped** on `gf_apr26_v3`; swap to Lorena's final shoots when delivered.
6. **Plaza panorama** — is there existing plaza photography/timelapse, or do we need to commission it? *(P3 concern)*

---

## 9 · Risks watched

- **Imagery weight** — site is photo-heavy; need hero art direction from Lorena before P2
- **Font licensing** — Pitch is paid; plan B is locked-in free alternatives
- **Mobile-first vs desktop-first tension** — mockups are desktop; responsive strategy needs care
- **WebGL budget** — capped at one signature hero moment; no more
