import Link from "next/link";
import LogoBadge from "./LogoBadge";
import NavCondense from "./motion/NavCondense";
import MobileMenu from "./MobileMenu";

const LEFT = [
  { label: "About Us", href: "/about" },
  { label: "Our Vendors", href: "/vendors" },
  { label: "Events", href: "/#events" },
];

const RIGHT = [
  { label: "Bookings", href: "/bookings" },
  { label: "Visit Us", href: "/#visit" },
  { label: "Contact", href: "/contact" },
];

const BADGE_DESKTOP = 140;
const BADGE_MOBILE = 84;

// `mb` on the divider segments controls where the line sits within the row.
// Row height = logo height. divider y = row_bottom - DIVIDER_FROM_BOTTOM - 1.
const DIVIDER_FROM_BOTTOM_DESKTOP = 42; // ~70% down the logo
const DIVIDER_FROM_BOTTOM_MOBILE = 26;

export default function SiteNav() {
  return (
    <NavCondense>
      <header>
        {/* Desktop: divider | links · logo · links | divider — dividers on the
            outer sides fill the space between the page edges and the central
            cluster, pulling the link groups in close to the logo */}
        <div className="hidden items-end gap-5 px-6 pb-3 pt-3 md:flex md:px-8 lg:gap-7">
          {/* Outer-left divider segment */}
          <div
            aria-hidden
            className="h-px flex-1 bg-[var(--color-iron)]/15"
            style={{ marginBottom: DIVIDER_FROM_BOTTOM_DESKTOP }}
          />

          <ul className="flex items-center gap-6 pb-3 font-display text-sm uppercase tracking-[0.18em] text-[var(--color-iron)] lg:gap-10">
            {LEFT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            aria-label="Global Fork — Home"
            className="shrink-0 text-[color:var(--color-iron)]"
          >
            <LogoBadge size={BADGE_DESKTOP} />
          </Link>

          <ul className="flex items-center gap-6 pb-3 font-display text-sm uppercase tracking-[0.18em] text-[var(--color-iron)] lg:gap-10">
            {RIGHT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Outer-right divider segment */}
          <div
            aria-hidden
            className="h-px flex-1 bg-[var(--color-iron)]/15"
            style={{ marginBottom: DIVIDER_FROM_BOTTOM_DESKTOP }}
          />
        </div>

        {/* Mobile: hamburger floats top-right; logo stays centred between two
            symmetric divider segments so the line + badge layout is untouched */}
        <div className="relative md:hidden">
          <div className="absolute right-3 top-3 z-10">
            <MobileMenu />
          </div>

          <div className="flex items-end gap-3 px-4 pb-3 pt-3">
            <div
              aria-hidden
              className="h-px flex-1 bg-[var(--color-iron)]/15"
              style={{ marginBottom: DIVIDER_FROM_BOTTOM_MOBILE }}
            />

            <Link
              href="/"
              aria-label="Global Fork — Home"
              className="shrink-0 text-[color:var(--color-iron)]"
            >
              <LogoBadge size={BADGE_MOBILE} />
            </Link>

            <div
              aria-hidden
              className="h-px flex-1 bg-[var(--color-iron)]/15"
              style={{ marginBottom: DIVIDER_FROM_BOTTOM_MOBILE }}
            />
          </div>
        </div>
      </header>
    </NavCondense>
  );
}
