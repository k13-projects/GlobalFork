import ElementIcon, { type ElementName } from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import SplitHeadline from "../motion/SplitHeadline";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

const ELEMENTS: ElementName[] = ["sun", "community", "earth", "water"];

export default function Tagline() {
  return (
    <section
      id="tagline"
      aria-label="Tagline"
      className="relative overflow-hidden bg-[var(--color-iron)] px-8 py-32 text-center text-[var(--color-sand)]"
    >
      <PatternOverlay name="bars" size={420} opacity={0.08} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 md:gap-12">
        <StaggerGroup
          stagger={0.12}
          amount={0.6}
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8"
        >
          {ELEMENTS.map((name) => (
            <StaggerItem key={name}>
              <ElementIcon
                name={name}
                variant="light"
                size={56}
                className="md:!h-[72px] md:!w-[72px] lg:!h-[88px] lg:!w-[88px]"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <SplitHeadline
          lineOne="A world of flavors."
          lineTwo="One place to gather."
          className="px-2 font-display text-[1.75rem] uppercase leading-[1.05] tracking-tight sm:text-[2.25rem] md:text-[3.25rem] md:leading-[1] lg:text-[3.75rem]"
        />
      </div>
    </section>
  );
}
