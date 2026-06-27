import Image from "next/image";
import HeroOpening from "./HeroOpening";

export default function Hero() {
  return (
    <section
      aria-label="Global Fork — hero"
      className="relative h-[78vh] min-h-[480px] w-full overflow-hidden bg-[var(--color-iron)]"
    >
      <Image
        src="/photos/hero-bar.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-iron)]/70 to-transparent" />

      {/* Opening-day announcement */}
      <HeroOpening />

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <p className="font-script text-2xl text-[var(--color-sand)]/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
          piazza · plaza · gather
        </p>
      </div>
    </section>
  );
}
