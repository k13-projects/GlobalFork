import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";

type Event = {
  month: string;
  day: string;
  title: string;
};

const EVENTS: Event[] = [
  { month: "JUNE", day: "4", title: "Live music at the plaza" },
  { month: "JUNE", day: "11", title: "Vendor showcase night" },
  { month: "JUNE", day: "18", title: "Summer kickoff gathering" },
];

export default function Events() {
  return (
    <section
      id="events"
      aria-label="Upcoming events"
      className="relative overflow-hidden bg-[var(--color-sand)] px-8 pt-24 pb-20 text-[var(--color-iron)]"
    >
      <PatternOverlay name="sun-line" size={680} opacity={0.06} />

      <div className="relative mx-auto max-w-6xl">
        <header className="flex flex-col items-center text-center">
          <ElementIcon name="sun" size={64} />
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
            Upcoming Events
          </h2>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <li
              key={i}
              className="group relative flex h-44 cursor-pointer items-stretch overflow-hidden rounded-[2rem] bg-[var(--color-iron)] text-[var(--color-sand)] shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex w-32 flex-col items-center justify-center border-r border-[var(--color-sand)]/15 bg-[var(--color-iron-soft)] px-3">
                <span className="font-display text-xs uppercase tracking-[0.25em] text-[var(--color-harvey)]">
                  {e.month}
                </span>
                <span className="mt-1 font-display text-6xl leading-none">
                  {e.day}
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center px-6 text-center">
                <p className="font-display text-base uppercase leading-snug tracking-wide opacity-90 group-hover:opacity-100">
                  {e.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
