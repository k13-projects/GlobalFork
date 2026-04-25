import Image from "next/image";
import Link from "next/link";
import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import ScriptAccent from "../ScriptAccent";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";
import { VENDORS } from "@/data/vendors";

export default function Vendors() {
  return (
    <section
      id="vendors"
      aria-label="Our Vendors"
      className="relative overflow-hidden bg-[var(--color-clay)] px-8 pt-24 pb-32 text-[var(--color-sand)]"
    >
      <PatternOverlay name="earth-white" size={520} opacity={0.1} />

      <div className="relative mx-auto max-w-7xl">
        <Reveal as="header" amount={0.5}>
          <div className="flex flex-col items-center text-center">
            <ElementIcon name="community" variant="light" size={62} />
            <h2 className="mt-5 font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
              Our Vendors
            </h2>
          </div>
        </Reveal>

        <StaggerGroup
          as="ul"
          stagger={0.09}
          amount={0.15}
          className="mt-14 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3"
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
                <Image
                  aria-hidden
                  src="/brand/patterns/earth-white.png"
                  alt=""
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover opacity-15 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-[var(--color-iron)]/85 via-[var(--color-iron)]/30 to-transparent p-6 text-[var(--color-sand)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <h3 className="font-display text-xl uppercase tracking-wide">
                    {v.name}
                  </h3>
                  <p className="text-sm leading-snug opacity-90">{v.blurb}</p>
                  <span className="mt-1 font-script text-lg text-[var(--color-harvey)]">
                    {v.handle}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 font-display text-sm uppercase tracking-wider text-[var(--color-sand)] transition-opacity group-hover:opacity-0">
                  {v.name}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal direction="right" delay={0.1}>
          <div className="mt-12 flex justify-start pl-4">
            <ScriptAccent
              name="where-taste-travels"
              width={360}
              variant="cream"
              className="opacity-90"
            />
          </div>
        </Reveal>
      </div>

      <DiagonalCut to="var(--color-sand)" height={80} />
    </section>
  );
}
