import PillButton from "../PillButton";
import PatternOverlay from "../PatternOverlay";
import DiagonalCut from "../DiagonalCut";

export default function Bookings() {
  return (
    <section
      id="bookings"
      aria-label="Bookings"
      className="relative overflow-hidden bg-[var(--color-harvey)] px-8 pt-24 pb-36 text-[var(--color-sand)]"
    >
      <PatternOverlay name="sun-line" size={520} opacity={0.14} />

      <div className="relative mx-auto max-w-4xl">
        <h2 className="font-display text-3xl uppercase leading-tight tracking-tight md:text-5xl">
          We love a special occasion.
          <br />
          Book your next event.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-sand)]/90 md:text-lg">
          From birthdays to big celebrations, GLOBAL FORK is the perfect place
          to gather, share, and indulge.
        </p>
        <div className="mt-10">
          <PillButton href="#contact" variant="cream">
            Get in Touch
          </PillButton>
        </div>
      </div>

      <DiagonalCut to="var(--color-iron)" height={100} flip />
    </section>
  );
}
