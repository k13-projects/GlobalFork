# GlobalFork — Living Work Plan

> **This document is the source of truth for project direction.** Updated before every commit so any tab / collaborator can pick up without context loss.
>
> **Last updated:** 2026-04-24 · **Current phase:** P2 complete → P3 next · **Active branch:** `gf_apr24_v1`

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
/                      Home — full scroll experience (all sections above)
/about                 About deep dive
/vendors               Vendor grid
/vendors/[slug]        Per-vendor detail
/events                Calendar + upcoming
/events/[slug]         Event detail
/bookings              Form for 15+ guests
/visit                 Map + hours
/contact               General · Vendor · Careers tabs
```

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

## 6c · P3 checklist *(next — the "wow" layer)*

- [ ] Hero gradient mesh / WebGL — evaluate scope vs ship date
- [ ] Element-orbit moment: 4 elements orbit a central glyph as Tagline scrolls past
- [ ] Vendor section: horizontal "piazza walk" scroll with pinning
- [ ] Plaza panorama: scrub-locked image sequence (24-frame dusk timelapse) — needs photography from Lorena
- [ ] Custom Mapbox style for Visit using palette (sand/grove/clay)
- [ ] Convert script accents to SVG and add path draw-on
- [ ] Mobile responsive pass with full QA
- [ ] Hex code lock from IDENTITY.pdf
- [ ] Hook Vercel preview to repo so commits auto-deploy

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

---

## 8 · Open questions for Kazimiro

1. ~~**Pitch font license**~~ → **Deferred.** Stay on Archivo Narrow fallback for now.
2. **Content owner for Events** — who will keep the event calendar updated? (drives CMS choice)
3. ~~**Booking flow**~~ → **Deferred.** Placeholder CTA in P1; flow decision in P4.
4. ~~**Hours**~~ → **9 am – 9 pm** (Monday–Friday from copy; weekends TBC).
5. ~~**Vendor photography**~~ → **Placeholders OK** until Lorena delivers final shoots.
6. **Plaza panorama** — is there existing plaza photography/timelapse, or do we need to commission it? *(P3 concern)*

---

## 9 · Risks watched

- **Imagery weight** — site is photo-heavy; need hero art direction from Lorena before P2
- **Font licensing** — Pitch is paid; plan B is locked-in free alternatives
- **Mobile-first vs desktop-first tension** — mockups are desktop; responsive strategy needs care
- **WebGL budget** — capped at one signature hero moment; no more
