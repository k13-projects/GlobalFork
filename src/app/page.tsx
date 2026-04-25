/**
 * Home — P0 hero stub.
 * Intentionally minimal: confirms the stack is alive end-to-end.
 * P1 will replace this with the full 8-section homepage from Lorena's mockup.
 */
export default function Home() {
  return (
    <>
      {/* Hero — full-bleed photo placeholder */}
      <section
        aria-label="Hero"
        className="relative h-[78vh] w-full overflow-hidden bg-[var(--color-iron-soft)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-iron)] via-[var(--color-spicy)]/40 to-[var(--color-harvey)]/30" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <p className="font-script text-2xl text-[var(--color-sand)]/70">
            piazza · plaza · gather
          </p>
        </div>
      </section>

      {/* Tagline strip — Iron Black with element-icon row */}
      <section
        id="tagline"
        aria-label="Tagline"
        className="relative bg-[var(--color-iron)] px-8 py-28 text-center text-[var(--color-sand)]"
      >
        <div className="mx-auto flex max-w-md items-center justify-center gap-8 pb-10 opacity-90">
          {/* Four element icons — placeholder dots for P0; SVG icons in P1 */}
          {["sun", "community", "earth", "water"].map((el) => (
            <span
              key={el}
              aria-label={el}
              className="block h-6 w-6 rounded-full border border-[var(--color-sand)]/70"
            />
          ))}
        </div>
        <h1 className="font-display text-4xl uppercase tracking-tight md:text-6xl">
          A world of flavors.
          <br />
          One place to gather.
        </h1>
        <p className="mt-8 font-script text-3xl text-[var(--color-harvey)]">
          a true gathering place
        </p>
      </section>

      {/* P0 status panel — temporary; deleted in P1 */}
      <section className="px-8 py-20 text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-[var(--color-clay)]">
          P0 · Foundation
        </p>
        <h2 className="mt-3 font-display text-3xl">Stack online</h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-iron-soft)]">
          Next.js 16 · React 19 · Tailwind v4 · Motion · Lenis smooth scroll · brand tokens wired.
          Lorena&rsquo;s 8-section homepage lands in P1.
        </p>
      </section>
    </>
  );
}
