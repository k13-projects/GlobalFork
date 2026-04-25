import PillButton from "../PillButton";
import ScriptAccent from "../ScriptAccent";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Global Fork"
      className="relative overflow-hidden bg-[var(--color-sand)] px-8 pt-24 pb-40 text-[var(--color-iron)]"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal as="header" amount={0.5}>
          <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-spicy)] md:text-5xl">
            About Us
          </h2>
        </Reveal>

        <Reveal delay={0.15} amount={0.4}>
          <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-[var(--color-iron)]/85 md:text-xl">
            A vibrant dining destination where global flavors, craft drinks,
            and cultural experiences come together in one open, piazza-inspired
            space&mdash;inviting you to explore, connect, and savor every moment.
          </p>
        </Reveal>

        <Reveal direction="left" delay={0.25} amount={0.4}>
          <div className="mt-10 flex justify-end pr-4">
            <ScriptAccent
              name="a-true-gathering"
              width={420}
              variant="gold"
              className="opacity-85"
            />
          </div>
        </Reveal>

        <Reveal delay={0.35} amount={0.4}>
          <div className="mt-12 flex justify-center">
            <PillButton href="#about-more" variant="spicy">
              Learn More
            </PillButton>
          </div>
        </Reveal>
      </div>

      <DiagonalCut to="var(--color-clay)" height={80} />
    </section>
  );
}
