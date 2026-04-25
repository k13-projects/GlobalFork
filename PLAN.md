# GlobalFork — Living Work Plan

> **This document is the source of truth for project direction.** Updated before every commit so any tab / collaborator can pick up without context loss.
>
> **Last updated:** 2026-04-24 · **Current phase:** P0 — Foundation · **Active branch:** `gf_apr24_v1`

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

## 6 · P0 checklist *(current)*

- [x] Git remote + auth confirmed (`k13-projects/GlobalFork`)
- [x] Branch `gf_apr24_v1` created
- [x] PLAN.md committed (this file)
- [ ] `.gitignore` for Node/Next
- [ ] Next.js 15 scaffold (TS, App Router, Tailwind, ESLint, src dir)
- [ ] Tailwind v4 config with brand palette tokens
- [ ] Font loading: Google Font fallbacks (Archivo Narrow + Inter + Sacramento) via `next/font/google`
- [ ] Lenis smooth scroll wired in root layout
- [ ] Root layout with split-nav shell + circular badge logo placeholder
- [ ] Single hero section stub so there's something to see
- [ ] Local dev verified (`pnpm dev`)
- [ ] Pushed to remote, Vercel preview link captured

---

## 7 · Decisions log

| Date | Decision | Why |
|---|---|---|
| 2026-04-24 | Use pnpm (not npm/bun) | Already installed; faster than npm; bun not available |
| 2026-04-24 | Start with Google Font fallbacks, not licensed Pitch | Unblock P0 — swap in Pitch when Kazimiro confirms licensing |
| 2026-04-24 | Desktop-first layout | Lorena's mockups are desktop; mobile adapts in P2 |
| 2026-04-24 | Defer WebGL / Three.js to P3 | Ship static + motion layer first; WebGL is polish not foundation |

---

## 8 · Open questions for Kazimiro

1. **Pitch font license** — do the stakeholders own a web license, or do we sub in a free alternative permanently?
2. **Content owner for Events** — who will keep the event calendar updated? (drives CMS choice)
3. **Booking flow** — does "Bookings for 15+" submit to an email, a reservation system (OpenTable/Resy), or just a form to owners?
4. **Hours** — copy shows "From am to 9:00 pm" with the start time blank. What's the open time?
5. **Vendor photography** — the mockup uses placeholder Italian food photos. Will Lorena provide final vendor-specific shoots before P3?
6. **Plaza panorama** — is there existing plaza photography/timelapse, or do we need to commission it?

---

## 9 · Risks watched

- **Imagery weight** — site is photo-heavy; need hero art direction from Lorena before P2
- **Font licensing** — Pitch is paid; plan B is locked-in free alternatives
- **Mobile-first vs desktop-first tension** — mockups are desktop; responsive strategy needs care
- **WebGL budget** — capped at one signature hero moment; no more
