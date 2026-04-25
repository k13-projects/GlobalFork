import PillButton from "../PillButton";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

export default function Follow() {
  return (
    <section
      id="follow"
      aria-label="Follow us"
      className="relative overflow-hidden bg-[var(--color-clay)] px-8 pt-20 pb-32 text-[var(--color-sand)]"
    >
      <Reveal amount={0.2}>
        <div className="relative mx-auto mb-16 h-72 max-w-6xl overflow-hidden rounded-sm bg-[var(--color-iron-soft)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(79,95,59,0.7) 0%, rgba(47,44,40,0.6) 50%, rgba(176,133,57,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-3xl uppercase tracking-[0.3em] text-[var(--color-sand)]/85 md:text-4xl">
              Global Fork
            </p>
          </div>
        </div>
      </Reveal>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_2fr]">
        <Reveal direction="right" amount={0.4}>
          <div>
            <h2 className="font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
              Follow Us
            </h2>
            <div className="mt-6">
              <PillButton href="#instagram" variant="cream">
                Here
              </PillButton>
            </div>
          </div>
        </Reveal>

        <StaggerGroup
          as="ul"
          stagger={0.06}
          amount={0.2}
          className="grid grid-cols-3 gap-4"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <StaggerItem
              key={i}
              as="li"
              className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-sky-200 via-sky-100 to-emerald-200/80"
            />
          ))}
        </StaggerGroup>
      </div>

      <DiagonalCut to="var(--color-sand)" height={80} />
    </section>
  );
}
