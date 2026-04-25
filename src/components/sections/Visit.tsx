import Image from "next/image";
import PillButton from "../PillButton";
import ScriptAccent from "../ScriptAccent";

const ADDRESS = "550 W Date St suite B, San Diego, CA 92101";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;

export default function Visit() {
  return (
    <section
      id="visit"
      aria-label="Visit Us"
      className="relative overflow-hidden bg-[var(--color-iron)] px-8 pt-24 pb-32 text-[var(--color-sand)]"
    >
      {/* Sun element decoration — large, faded, on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-12 hidden opacity-15 md:block"
      >
        <Image
          src="/brand/elements/sun.png"
          alt=""
          width={520}
          height={520}
          className="[filter:invert(1)]"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
            Visit Us
          </h2>

          <div className="mt-12 flex items-start gap-4">
            <span aria-hidden className="mt-1 text-[var(--color-harvey)]">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M11 25c6-8 9-12 9-15A9 9 0 1 0 2 10c0 3 3 7 9 15Z" />
                <circle cx="11" cy="10" r="3.2" />
              </svg>
            </span>
            <p className="text-base leading-relaxed">{ADDRESS}</p>
          </div>

          <div className="mt-8">
            <p className="font-display text-base uppercase tracking-[0.18em]">
              Opening hours
            </p>
            <p className="mt-2 text-base text-[var(--color-sand)]/85">
              Monday to Friday from 9 am to 9 pm
            </p>
          </div>

          <div className="mt-10">
            <PillButton href={MAPS_URL} variant="harvey">
              Go Now
            </PillButton>
          </div>
        </div>

        <div className="relative flex flex-col items-end justify-end pb-2 md:items-end">
          <ScriptAccent
            name="culture-and-flavor"
            width={420}
            variant="gold"
            className="opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
