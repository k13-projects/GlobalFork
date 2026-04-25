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

export default function SiteNav() {
  return (
    <NavCondense>
      <header>
        <nav
          aria-label="Primary"
          className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 text-iron md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-8 md:py-5"
        >
          {/* LEFT — desktop nav */}
          <ul className="hidden items-center gap-10 justify-self-start font-display text-sm uppercase tracking-[0.18em] md:flex">
            {LEFT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* LEFT — mobile hamburger */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

          {/* CENTER badge */}
          <Link
            href="/"
            aria-label="Global Fork — Home"
            className="justify-self-center text-[color:var(--color-iron)]"
          >
            <span className="md:hidden">
              <LogoBadge size={64} />
            </span>
            <span className="hidden md:block">
              <LogoBadge size={92} />
            </span>
          </Link>

          {/* RIGHT — desktop nav */}
          <ul className="hidden items-center gap-10 justify-self-end font-display text-sm uppercase tracking-[0.18em] md:flex">
            {RIGHT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT — mobile spacer to keep badge centered */}
          <div className="h-10 w-10 md:hidden" aria-hidden />
        </nav>
        <div className="mx-auto h-px max-w-[1600px] bg-[var(--color-iron)]/15" />
      </header>
    </NavCondense>
  );
}
