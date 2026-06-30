import BeholdWidget from "../BeholdWidget";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";
import { siteConfig } from "@/lib/site-config";

const beholdFeedId = siteConfig.social.beholdFeedId;

const instagramHref = siteConfig.social.instagram
  ? `https://instagram.com/${siteConfig.social.instagram.replace(/^@/, "")}`
  : "https://instagram.com/";

export default function Follow() {
  return (
    <section
      id="follow"
      aria-label="Follow us"
      className="relative overflow-hidden bg-[var(--color-clay)] px-8 pt-20 pb-32 text-[var(--color-sand)]"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_2fr]">
        <Reveal direction="right" amount={0.4}>
          <div>
            <h2 className="font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
              Follow Us
            </h2>
            <div className="mt-6">
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-sand)] px-10 py-3 font-display text-sm uppercase tracking-[0.2em] text-[var(--color-iron)] transition-colors hover:bg-[var(--color-sand-deep)]"
                aria-label="Follow Global Fork on Instagram (opens in new tab)"
              >
                Here
              </a>
            </div>
          </div>
        </Reveal>

        {beholdFeedId ? (
          <Reveal direction="left" amount={0.2}>
            <BeholdWidget feedId={beholdFeedId} />
          </Reveal>
        ) : (
          <StaggerGroup
            as="ul"
            stagger={0.06}
            amount={0.2}
            className="grid grid-cols-3 gap-4"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <StaggerItem
                key={i}
                as="li"
                className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-sky-200 via-sky-100 to-emerald-200/80"
              />
            ))}
          </StaggerGroup>
        )}
      </div>

      <DiagonalCut to="var(--color-sand)" height={80} />
    </section>
  );
}
