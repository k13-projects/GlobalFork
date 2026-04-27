"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { VENDORS } from "@/data/vendors";
import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import ScriptAccent from "../ScriptAccent";

/**
 * Vendor piazza walk — desktop signature scroll moment.
 * Pin a 100vh stage; translate the vendor row horizontally as the
 * outer container scrolls. Distance maths: 6 cards * card-width minus
 * one viewport = total horizontal travel; outer is sized so the user
 * traverses it at a comfortable cadence.
 *
 * Mobile (below md) is hidden — the parent <Vendors> renders <VendorGrid>
 * as the responsive fallback.
 */
export default function VendorPiazzaWalk() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Card is 70vw on desktop. 6 cards = 420vw. Travel = 420vw - 100vw = 320vw.
  // Add tail breathing room (the script accent) so we don't bottom out abruptly.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-340vw"]);

  // Headline parallax — moves slightly opposite the cards for depth
  const headerX = useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]);

  return (
    <section
      ref={sectionRef}
      id="vendors"
      aria-label="Our Vendors"
      // 320vh of scroll = 2.2vw of horizontal per 1vh of vertical. Comfortable.
      className="relative hidden min-h-screen md:block"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[var(--color-clay)] text-[var(--color-sand)]">
        <PatternOverlay name="earth-white" size={520} opacity={0.08} />

        {/* Header — stays roughly in view, drifts slightly */}
        <motion.header
          style={{ x: reduce ? 0 : headerX }}
          className="relative z-10 flex items-center gap-6 px-12 pt-12"
        >
          <ElementIcon name="community" variant="light" size={56} />
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[var(--color-harvey)]">
              Our Vendors · scroll
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none tracking-tight md:text-6xl">
              The piazza walk
            </h2>
          </div>
        </motion.header>

        {/* Scrolling row */}
        <motion.div
          style={{ x: reduce ? 0 : x }}
          className="absolute inset-y-0 flex items-center pl-12 will-change-transform"
        >
          <ul className="flex items-center gap-10">
            {VENDORS.map((v, i) => (
              <li key={v.slug} className="shrink-0">
                <Link
                  href={`/vendors/${v.slug}`}
                  className="group relative block h-[70vh] w-[70vw] max-w-[640px] overflow-hidden rounded-[32px] bg-[var(--color-iron-soft)] shadow-2xl"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: v.tone }}
                  />
                  {v.cover && (
                    <Image
                      src={v.cover}
                      alt=""
                      fill
                      sizes="70vw"
                      className="object-cover opacity-80 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                      priority={i < 2}
                    />
                  )}
                  <Image
                    aria-hidden
                    src="/brand/patterns/earth-white.png"
                    alt=""
                    fill
                    sizes="70vw"
                    className="object-cover opacity-15 mix-blend-overlay"
                  />

                  {/* Index numeral — big, faded, like a chapter mark */}
                  <span
                    aria-hidden
                    className="absolute right-6 top-6 font-display text-[7rem] leading-none text-[var(--color-sand)]/15"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-[var(--color-iron)]/85 via-[var(--color-iron)]/30 to-transparent p-8 text-[var(--color-sand)]">
                    <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--color-harvey)]">
                      {v.cuisine} · {v.origin}
                    </p>
                    <h3 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-4xl">
                      {v.name}
                    </h3>
                    <p className="max-w-md text-base leading-snug opacity-90">
                      {v.blurb}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <span className="font-script text-2xl text-[var(--color-harvey)]">
                        {v.handle}
                      </span>
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-sand)]/70">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}

            {/* Tail card — ScriptAccent + CTA */}
            <li className="flex h-[70vh] w-[55vw] shrink-0 flex-col items-start justify-center gap-8 px-8">
              <ScriptAccent
                name="where-taste-travels"
                width={420}
                variant="cream"
                className="opacity-95"
              />
              <Link
                href="/#bookings"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-sand)] px-10 py-3 font-display text-sm uppercase tracking-[0.2em] text-[var(--color-iron)] transition-colors hover:bg-[var(--color-sand-deep)]"
              >
                Book Your Event
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Progress bar */}
        <div className="pointer-events-none absolute inset-x-12 bottom-8 z-10 h-px bg-[var(--color-sand)]/15">
          <motion.div
            style={{ scaleX: reduce ? 1 : scrollYProgress, transformOrigin: "left" }}
            className="h-full bg-[var(--color-harvey)]"
          />
        </div>
      </div>
    </section>
  );
}
