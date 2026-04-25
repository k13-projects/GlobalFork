/**
 * Decorative render strip beneath Events.
 * Lorena's mockup shows an indoor dining 3D render here. Placeholder until
 * that asset arrives.
 */
export default function EventsRender() {
  return (
    <section
      aria-hidden
      className="relative h-[36vh] min-h-[280px] w-full overflow-hidden bg-[var(--color-iron-soft)]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(79,95,59,0.85) 0%, rgba(47,44,40,0.85) 45%, rgba(176,133,57,0.7) 100%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-50"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(235,225,208,0.5) 0%, transparent 55%)",
        }}
      />
    </section>
  );
}
