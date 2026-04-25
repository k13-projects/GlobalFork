import Link from "next/link";
import LogoBadge from "./LogoBadge";

const LEFT = [
  { label: "About Us", href: "#about" },
  { label: "Our Vendors", href: "#vendors" },
  { label: "Events", href: "#events" },
];

const RIGHT = [
  { label: "Bookings", href: "#bookings" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-sand)]/95 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 py-5 text-iron"
      >
        <ul className="flex items-center gap-10 justify-self-start font-display text-sm uppercase tracking-[0.18em]">
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

        <Link href="/" aria-label="Global Fork — Home" className="text-[color:var(--color-iron)]">
          <LogoBadge size={92} />
        </Link>

        <ul className="flex items-center gap-10 justify-self-end font-display text-sm uppercase tracking-[0.18em]">
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
      </nav>
      <div className="mx-auto h-px max-w-[1600px] bg-[var(--color-iron)]/15" />
    </header>
  );
}
