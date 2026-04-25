/**
 * Hero — full-bleed photo placeholder.
 * Lorena's mockup uses a warm 3D render of the indoor/outdoor bar at dusk.
 * Until that asset arrives, render a tonal gradient that respects the palette.
 */
export default function Hero() {
  return (
    <section
      aria-label="Global Fork — hero"
      className="relative h-[78vh] min-h-[560px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(176,133,57,0.55) 0%, rgba(184,107,61,0.4) 28%, rgba(47,44,40,0.95) 72%)",
        }}
      />
      {/* Warm light shafts */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-60"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(235,225,208,0.25) 35%, transparent 60%, rgba(235,225,208,0.18) 78%, transparent 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-iron)]/70 to-transparent" />

      {/* Caption — small, low-key. Hero is meant to breathe, headline lives below. */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <p className="font-script text-2xl text-[var(--color-sand)]/70">
          piazza · plaza · gather
        </p>
      </div>
    </section>
  );
}
