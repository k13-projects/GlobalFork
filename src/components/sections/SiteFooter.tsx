import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import { siteConfig } from "@/lib/site-config";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function SiteFooter() {
  const { emails } = siteConfig;

  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="relative overflow-hidden bg-[var(--color-sand)] px-8 pt-20 pb-16 text-[var(--color-iron)]"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        <Reveal direction="right" amount={0.3}>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Image
              src="/brand/logos/lockup.png"
              alt="Global Fork — San Diego, CA"
              width={320}
              height={120}
              className="h-auto w-72 select-none"
            />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} amount={0.3}>
          <div className="space-y-6">
            <h2 className="font-display text-3xl uppercase leading-none tracking-[0.06em]">
              Let&rsquo;s
              <br />
              Connect
            </h2>
            <p className="max-w-md leading-relaxed text-[var(--color-iron)]/80">
              Food, culture, and community come together here. Reach out &mdash;
              we&rsquo;re always ready to connect.
            </p>
            <ul className="space-y-3 font-display uppercase tracking-[0.14em]">
              <li>
                <a className="hover:text-[var(--color-clay)]" href={`mailto:${emails.general}`}>
                  General Inquiries
                </a>
              </li>
              <li>
                <a className="hover:text-[var(--color-clay)]" href={`mailto:${emails.vendors}`}>
                  Vendor Opportunities
                </a>
              </li>
              <li>
                <a className="hover:text-[var(--color-clay)]" href={`mailto:${emails.careers}`}>
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-iron)]/30 text-[var(--color-iron)] transition-colors hover:border-[var(--color-clay)] hover:text-[var(--color-clay)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-4 border-t border-[var(--color-iron)]/15 pt-6 text-xs uppercase tracking-[0.18em] text-[var(--color-iron)]/75 md:flex-row md:items-center md:justify-between">
        <span>&copy; {new Date().getFullYear()} Global Fork &middot; San Diego, CA</span>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[var(--color-clay)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
