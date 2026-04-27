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

export default function SiteNav() {
  return (
    <NavCondense>
      <header>
        {/* Badge — centered above the divider */}
        <div className="flex justify-center pt-5 pb-4 md:pt-7 md:pb-5">
          <Link
            href="/"
            aria-label="Global Fork — Home"
            className="text-[color:var(--color-iron)]"
          >
            <span className="md:hidden">
              <LogoBadge size={BADGE_MOBILE} />
            </span>
            <span className="hidden md:block">
              <LogoBadge size={BADGE_DESKTOP} />
            </span>
          </Link>
        </div>

        {/* Full-width divider */}
        <div aria-hidden className="h-px bg-[var(--color-iron)]/15" />

        {/* Nav row — capped width so items cluster toward the centre,
            not stretched to the page edges */}
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8 md:py-4"
        >
          {/* LEFT — desktop links */}
          <ul className="hidden items-center gap-8 font-display text-sm uppercase tracking-[0.18em] text-[var(--color-iron)] md:flex lg:gap-12">
            {LEFT.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LEFT — mobile hamburger */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

          {/* RIGHT — desktop links */}
          <ul className="hidden items-center gap-8 font-display text-sm uppercase tracking-[0.18em] text-[var(--color-iron)] md:flex lg:gap-12">
            {RIGHT.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT — mobile spacer to keep the badge centred */}
          <div className="h-10 w-10 md:hidden" aria-hidden />
        </nav>
      </header>
    </NavCondense>
  );
}
