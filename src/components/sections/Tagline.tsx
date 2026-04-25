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

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12">
        <StaggerGroup
          stagger={0.12}
          amount={0.6}
          className="flex items-center justify-center gap-8"
        >
          {ELEMENTS.map((name) => (
            <StaggerItem key={name}>
              <ElementIcon name={name} variant="light" size={56} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <SplitHeadline
          lineOne="A world of flavors."
          lineTwo="One place to gather."
          className="font-display text-[3.25rem] uppercase leading-[0.98] tracking-tight md:text-[5.5rem] lg:text-[6.25rem]"
        />
      </div>
    </section>
  );
}
