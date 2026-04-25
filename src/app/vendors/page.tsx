import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PatternOverlay from "@/components/PatternOverlay";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { VENDORS } from "@/data/vendors";

export const metadata: Metadata = {
  title: "Our Vendors — Global Fork",
  description:
    "Meet the six culinary concepts that make Global Fork home — MOTO Pizza, Cosmos Burger, La Vida, Lobster Lab, Handel's Ice Cream, and Thai Style Kitchen.",
};

export default function VendorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Vendors"
        title="Six concepts. One table."
        subtitle="Every vendor brings their own story, their own ingredients, their own fire. Together they make the plaza what it is."
      />

      <section className="relative overflow-hidden bg-[var(--color-clay)] px-8 py-24 text-[var(--color-sand)]">
        <PatternOverlay name="earth-white" size={520} opacity={0.08} />

        <div className="relative mx-auto max-w-7xl">
          <StaggerGroup
            as="ul"
            stagger={0.1}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {VENDORS.map((v) => (
              <StaggerItem
                key={v.slug}
                as="li"
                className="relative overflow-hidden rounded-2xl bg-[var(--color-iron-soft)]"
              >
                <Link
                  href={`/vendors/${v.slug}`}
                  className="group relative grid h-full grid-cols-[40%_1fr] items-stretch"
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden md:aspect-auto"
                    style={{ background: v.tone }}
                  >
                    <Image
                      aria-hidden
                      src="/brand/patterns/earth-white.png"
                      alt=""
                      fill
                      sizes="(min-width:768px) 25vw, 40vw"
                      className="object-cover opacity-15 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-harvey)]">
                        {v.cuisine} · {v.origin}
                      </p>
                      <h2 className="mt-2 font-display text-2xl uppercase tracking-tight md:text-3xl">
                        {v.name}
                      </h2>
                      <p className="mt-4 leading-relaxed text-[var(--color-sand)]/85">
                        {v.blurb}
                      </p>
                    </div>
                    <div className="mt-6 flex items-end justify-between">
                      <span className="font-script text-2xl text-[var(--color-harvey)]">
                        {v.handle}
                      </span>
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-sand)]/70 transition-opacity group-hover:opacity-100">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-[var(--color-sand)] px-8 py-20 text-center text-[var(--color-iron)]">
        <Reveal>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed">
            Want to bring your concept to the plaza? We&rsquo;re always open to
            new collaborations.
          </p>
          <Link
            href="/contact?topic=vendor"
            className="mt-6 inline-block font-display text-sm uppercase tracking-[0.2em] underline decoration-[var(--color-clay)] underline-offset-8 hover:text-[var(--color-clay)]"
          >
            Vendor Opportunities
          </Link>
        </Reveal>
      </section>
    </>
  );
}
