import Image from "next/image";
import PillButton from "../PillButton";
import PatternOverlay from "../PatternOverlay";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";

export default function Bookings() {
  return (
    <section
      id="bookings"
      aria-label="Bookings"
      className="relative overflow-hidden bg-[var(--color-harvey)] text-[var(--color-sand)]"
    >
      <Reveal amount={0.3}>
        <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden">
          <Image
            src="/photos/event-dining.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="relative px-8 pt-20 pb-36">
      <PatternOverlay name="sun-line" size={520} opacity={0.14} />

      <div className="relative mx-auto max-w-4xl">
        <Reveal direction="up" amount={0.4}>
          <h2 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-5xl">
            We love a special occasion.
            <br />
            Book your next event.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.15} amount={0.4}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-sand)]/90 md:text-lg">
            From birthdays to big celebrations, GLOBAL FORK is the perfect place
            to gather, share, and indulge.
          </p>
        </Reveal>
        <Reveal delay={0.3} amount={0.4}>
          <div className="mt-10">
            <PillButton href="/#contact" variant="cream">
              Get in Touch
            </PillButton>
          </div>
        </Reveal>
      </div>

      <DiagonalCut to="var(--color-iron)" height={100} flip />
      </div>
    </section>
  );
}
