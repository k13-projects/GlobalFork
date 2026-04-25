import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScriptAccent from "@/components/ScriptAccent";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "About — Global Fork",
  description:
    "A 4,685 sqft venue connecting indoor and outdoor living, flowing into a 10,000 sqft cobblestone plaza in one of California's most celebrated food neighborhoods.",
};

const FACTS = [
  { label: "Indoor space", value: "4,685 sqft" },
  { label: "Plaza", value: "10,000 sqft" },
  { label: "Vendors", value: "6" },
  { label: "Bar", value: "Indoor / outdoor" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A vibrant gathering place"
        subtitle="Where global flavors, craft drinks, and cultural experiences come together in one open, piazza-inspired space."
      />

      <section className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal direction="up">
            <article className="space-y-6 leading-relaxed">
              <p className="text-lg md:text-xl">
                Located in one of California&rsquo;s most celebrated food
                neighborhoods, this 4,685-square-foot venue seamlessly connects
                indoor and outdoor living, flowing into a 10,000-square-foot
                cobblestone plaza.
              </p>
              <p>
                Guests can explore five distinct culinary concepts, gather
                around a central indoor-outdoor bar, and enjoy a variety of
                seating designed for everything from quick bites to long,
                leisurely moments.
              </p>
              <p>
                At Global Fork, food is more than a meal &mdash; it&rsquo;s a
                shared experience. Discover bold flavors from different
                cultures, and immerse yourself in a space that feels alive with
                movement, sound, and connection.
              </p>
            </article>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <aside className="rounded-3xl bg-[var(--color-iron)] p-10 text-[var(--color-sand)]">
              <h2 className="font-display text-2xl uppercase tracking-[0.18em]">
                The space
              </h2>
              <dl className="mt-8 grid grid-cols-2 gap-y-8 gap-x-6">
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-harvey)]">
                      {f.label}
                    </dt>
                    <dd className="mt-2 font-display text-3xl">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-12 font-script text-3xl text-[var(--color-harvey)]">
                a true gathering place
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-clay)] px-8 py-24 text-[var(--color-sand)]">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl uppercase tracking-[0.06em] md:text-4xl">
              What you&rsquo;ll find here
            </h2>
          </Reveal>
          <StaggerGroup
            as="ul"
            stagger={0.08}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Five culinary concepts", body: "From wood-fired pizza to Thai street food, each chef brings their own story." },
              { title: "Indoor-outdoor bar", body: "A central anchor for craft drinks designed to be sipped slowly or shared loud." },
              { title: "Cobblestone plaza", body: "10,000 sqft of open-air seating, events, and afternoons that turn into evenings." },
              { title: "Live music & events", body: "Regular programming with local musicians, vendor showcases, and seasonal gatherings." },
              { title: "Family friendly", body: "Open seating, a menu for every age, ice cream within crawling distance." },
              { title: "Private bookings", body: "Reserved spaces for parties of 15+ — birthdays, business, big celebrations." },
            ].map((item) => (
              <StaggerItem
                key={item.title}
                as="li"
                className="rounded-2xl border border-[var(--color-sand)]/20 p-6"
              >
                <h3 className="font-display text-xl uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-sand)]/85">
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2} className="mt-16 flex flex-wrap items-center gap-6">
            <PillButton href="/vendors" variant="cream">
              Meet the Vendors
            </PillButton>
            <PillButton href="/bookings" variant="harvey">
              Book Your Event
            </PillButton>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-sand)] px-8 py-20 text-center text-[var(--color-iron)]">
        <ScriptAccent
          name="culture-and-flavor"
          width={520}
          variant="dark"
          className="mx-auto opacity-90"
        />
      </section>
    </>
  );
}
