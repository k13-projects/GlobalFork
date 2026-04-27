import Image from "next/image";
import Link from "next/link";
import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import ScriptAccent from "../ScriptAccent";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";
import { VENDORS } from "@/data/vendors";

/**
 * Vendor grid — mobile fallback for the piazza walk.
 * Same content, vertical scroll, simpler interactions.
 * Hidden on desktop (md+).
 */
export default function VendorGrid() {
  return (
    <section
      aria-label="Our Vendors"
      className="relative overflow-hidden bg-[var(--color-clay)] px-6 pt-20 pb-28 text-[var(--color-sand)] md:hidden"
    >
      <PatternOverlay name="earth-white" size={420} opacity={0.1} />

      <div className="relative mx-auto max-w-2xl">
        <Reveal as="header" amount={0.5}>
          <div className="flex flex-col items-center text-center">
            <ElementIcon name="community" variant="light" size={52} />
            <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.08em]">
              Our Vendors
            </h2>
          </div>
        </Reveal>

        <StaggerGroup
          as="ul"
          stagger={0.09}
          amount={0.15}
          className="mt-10 grid grid-cols-1 gap-1"
        >
          {VENDORS.map((v) => (
            <StaggerItem
              key={v.slug}
              as="li"
              className="relative aspect-[4/3] overflow-hidden bg-[var(--color-iron-soft)]"
            >
              <Link
                href={`/vendors/${v.slug}`}
                className="group absolute inset-0 block"
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
                    sizes="100vw"
                    className="object-cover opacity-80 mix-blend-luminosity"
                  />
                )}
                <Image
                  aria-hidden
                  src="/brand/patterns/earth-white.png"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-15 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-[var(--color-iron)]/85 via-[var(--color-iron)]/30 to-transparent p-5 text-[var(--color-sand)]">
                  <h3 className="font-display text-xl uppercase tracking-wide">
                    {v.name}
                  </h3>
                  <p className="text-sm leading-snug opacity-90">{v.blurb}</p>
                  <span className="mt-1 font-script text-lg text-[var(--color-harvey)]">
                    {v.handle}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal direction="right" delay={0.1}>
          <div className="mt-10 flex justify-center">
            <ScriptAccent
              name="where-taste-travels"
              width={300}
              variant="cream"
              className="opacity-90"
            />
          </div>
        </Reveal>
      </div>

      <DiagonalCut to="var(--color-sand)" height={64} />
    </section>
  );
}
