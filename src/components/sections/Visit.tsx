import Image from "next/image";
import PillButton from "../PillButton";
import ScriptAccent from "../ScriptAccent";
import Reveal from "../motion/Reveal";
import SunRotator from "../motion/SunRotator";

const ADDRESS = "550 W Date St suite B, San Diego, CA 92101";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;

export default function Visit() {
  return (
    <section
      id="visit"
      aria-label="Visit Us"
      className="relative overflow-hidden bg-[var(--color-iron)] px-8 pt-24 pb-32 text-[var(--color-sand)]"
    >
      <SunRotator
        size={520}
        className="pointer-events-none absolute -right-24 top-12 hidden opacity-15 md:block"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <Reveal as="header" amount={0.5}>
            <h2 className="font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
              Visit Us
            </h2>
          </Reveal>

          <Reveal delay={0.15} direction="left">
            <div className="mt-12 flex items-start gap-4">
              <span aria-hidden className="mt-1 text-[var(--color-harvey)]">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M11 25c6-8 9-12 9-15A9 9 0 1 0 2 10c0 3 3 7 9 15Z" />
                  <circle cx="11" cy="10" r="3.2" />
                </svg>
              </span>
              <p className="text-base leading-relaxed">{ADDRESS}</p>
            </div>
          </Reveal>

          <Reveal delay={0.25} direction="left">
            <div className="mt-8">
              <p className="font-display text-base uppercase tracking-[0.18em]">
                Opening hours
              </p>
              <p className="mt-2 text-base text-[var(--color-sand)]/85">
                Monday to Friday from 9 am to 9 pm
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10">
              <PillButton href={MAPS_URL} variant="harvey">
                Go Now
              </PillButton>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.35} amount={0.3}>
          <div className="relative flex flex-col items-end justify-end gap-8 pb-2 md:items-end">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/photos/storefront.jpg"
                alt="Global Fork storefront on West Date Street, San Diego"
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <ScriptAccent
              name="culture-and-flavor"
              width={420}
              variant="gold"
              className="opacity-90"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
