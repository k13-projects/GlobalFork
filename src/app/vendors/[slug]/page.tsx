import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PatternOverlay from "@/components/PatternOverlay";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/motion/Reveal";
import { VENDORS, getVendor } from "@/data/vendors";

export function generateStaticParams() {
  return VENDORS.map((v) => ({ slug: v.slug }));
}

type Params = Promise<{ slug: string }>;

// Map var(--color-*) tones to actual hex values for the OG renderer
const TONE_HEX: Record<string, string> = {
  "var(--color-clay-deep)": "#8a3934",
  "var(--color-spicy)": "#b86b3d",
  "var(--color-grove)": "#4f5f3b",
  "var(--color-tide)": "#243843",
  "var(--color-misty)": "#9aa28a",
  "var(--color-harvey)": "#b08539",
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const vendor = getVendor(slug);
  if (!vendor) return { title: "Vendor — Global Fork" };
  const tone = TONE_HEX[vendor.tone] ?? "#2f2c28";
  const og = `/og?title=${encodeURIComponent(vendor.name)}&eyebrow=${encodeURIComponent(`${vendor.cuisine} · ${vendor.origin}`)}&tagline=${encodeURIComponent(vendor.blurb)}&tone=${encodeURIComponent(tone)}`;
  return {
    title: `${vendor.name} — Global Fork`,
    description: vendor.blurb,
    openGraph: {
      title: `${vendor.name} — Global Fork`,
      description: vendor.blurb,
      images: [og],
    },
  };
}

export default async function VendorPage({ params }: { params: Params }) {
  const { slug } = await params;
  const vendor = getVendor(slug);
  if (!vendor) notFound();

  const others = VENDORS.filter((v) => v.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero — vendor's tone color */}
      <header
        className="relative overflow-hidden px-8 pt-32 pb-24 text-[var(--color-sand)]"
        style={{ background: vendor.tone }}
      >
        <PatternOverlay name="earth-white" size={520} opacity={0.1} />

        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[var(--color-sand)]/80">
              {vendor.cuisine} · {vendor.origin}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-5xl uppercase leading-[1] tracking-tight md:text-7xl">
              {vendor.name}
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-sand)]/90">
              {vendor.blurb}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-8 font-script text-3xl text-[var(--color-harvey)]">
              {vendor.handle}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <section className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <article className="space-y-6 text-lg leading-relaxed">
              <p>{vendor.longBlurb}</p>
            </article>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <aside className="space-y-6 rounded-2xl border border-[var(--color-iron)]/15 p-8">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  Signature
                </p>
                <p className="mt-2 leading-relaxed">{vendor.signature}</p>
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  Cuisine
                </p>
                <p className="mt-2">{vendor.cuisine}</p>
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  Origin
                </p>
                <p className="mt-2">{vendor.origin}</p>
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-clay)]">
                  Instagram
                </p>
                <a
                  href={`https://instagram.com/${vendor.handle.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-script text-2xl text-[var(--color-spicy)] hover:opacity-80"
                >
                  {vendor.handle}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Other vendors */}
      <section className="bg-[var(--color-iron)] px-8 py-20 text-[var(--color-sand)]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-2xl uppercase tracking-[0.16em]">
              More vendors
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="overflow-hidden rounded-2xl">
                <Link
                  href={`/vendors/${o.slug}`}
                  className="group relative flex aspect-[5/4] items-end p-6"
                  style={{ background: o.tone }}
                >
                  {o.cover && (
                    <Image
                      src={o.cover}
                      alt=""
                      fill
                      sizes="(min-width:640px) 33vw, 100vw"
                      className="object-cover opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <Image
                    aria-hidden
                    src="/brand/patterns/earth-white.png"
                    alt=""
                    fill
                    sizes="(min-width:640px) 33vw, 100vw"
                    className="object-cover opacity-15 mix-blend-overlay"
                  />
                  <span className="relative font-display text-xl uppercase tracking-wide">
                    {o.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-sand)] px-8 py-20 text-center">
        <Reveal>
          <PillButton href="/#vendors" variant="spicy">
            All Vendors
          </PillButton>
        </Reveal>
      </section>
    </>
  );
}
