import { ElementIconRow } from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";

export default function Tagline() {
  return (
    <section
      id="tagline"
      aria-label="Tagline"
      className="relative overflow-hidden bg-[var(--color-iron)] px-8 py-32 text-center text-[var(--color-sand)]"
    >
      <PatternOverlay name="bars" size={420} opacity={0.08} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12">
        <ElementIconRow variant="light" size={56} />

        <h1 className="font-display text-[3.25rem] uppercase leading-[0.98] tracking-tight md:text-[5.5rem] lg:text-[6.25rem]">
          A world of flavors.
          <br />
          One place to gather.
        </h1>
      </div>
    </section>
  );
}
