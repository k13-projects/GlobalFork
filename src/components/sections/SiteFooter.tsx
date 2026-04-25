import Image from "next/image";
import { ElementIconRow } from "../ElementIcon";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="relative overflow-hidden bg-[var(--color-sand)] px-8 pt-20 pb-16 text-[var(--color-iron)]"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <ElementIconRow size={32} className="gap-3" />
          <Image
            src="/brand/logos/lockup.png"
            alt="Global Fork — San Diego, CA"
            width={320}
            height={120}
            className="h-auto w-72 select-none"
          />
        </div>

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
              <a className="hover:text-[var(--color-clay)]" href="mailto:hello@globalfork.example">
                General Inquiries
              </a>
            </li>
            <li>
              <a className="hover:text-[var(--color-clay)]" href="mailto:vendors@globalfork.example">
                Vendor Opportunities
              </a>
            </li>
            <li>
              <a className="hover:text-[var(--color-clay)]" href="mailto:careers@globalfork.example">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl items-center justify-between border-t border-[var(--color-iron)]/15 pt-6 text-xs uppercase tracking-[0.18em] text-[var(--color-iron)]/60">
        <span>&copy; {new Date().getFullYear()} Global Fork</span>
        <span>San Diego, CA</span>
      </div>
    </footer>
  );
}
