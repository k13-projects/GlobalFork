"use client";

import { useEffect, useState } from "react";
import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";
import { fetchEvents, normalizeUrl, type EventItem } from "../../lib/events";

/** Shown until the live sheet loads, and if the sheet fetch fails. */
const FALLBACK_EVENTS: EventItem[] = [
  { month: "JUNE", day: "4", title: "Live music at the plaza" },
  { month: "JUNE", day: "11", title: "Vendor showcase night" },
  { month: "JUNE", day: "18", title: "Summer kickoff gathering" },
];

export default function Events() {
  // Live event list comes from the published Google Sheet (see lib/events.ts).
  // Falls back to the hardcoded list above on any fetch/parse failure.
  const [events, setEvents] = useState<EventItem[]>(FALLBACK_EVENTS);

  useEffect(() => {
    let active = true;
    fetchEvents()
      .then((rows) => {
        if (active && rows.length > 0) setEvents(rows);
      })
      .catch(() => {
        /* keep FALLBACK_EVENTS */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="events"
      aria-label="Upcoming events"
      className="relative overflow-hidden bg-[var(--color-sand)] px-8 pt-24 pb-20 text-[var(--color-iron)]"
    >
      <PatternOverlay name="sun-line" size={680} opacity={0.06} />

      <div className="relative mx-auto max-w-6xl">
        <Reveal as="header" amount={0.5}>
          <div className="flex flex-col items-center text-center">
            <ElementIcon name="sun" size={64} />
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
              Upcoming Events
            </h2>
          </div>
        </Reveal>

        <StaggerGroup
          as="ul"
          stagger={0.12}
          delayChildren={0.1}
          amount={0.3}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {events.map((e, i) => {
            const href = e.url ? normalizeUrl(e.url) : "";
            return (
              <StaggerItem
                key={`${e.month}-${e.day}-${i}`}
                as="li"
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
                <div className="flex flex-1 flex-col items-center justify-center gap-1.5 px-6 text-center">
                  <p className="font-display text-base uppercase leading-snug tracking-wide opacity-90 group-hover:opacity-100">
                    {e.title}
                  </p>
                  {e.description && (
                    <p className="text-xs leading-snug text-[var(--color-sand)]/60">
                      {e.description}
                    </p>
                  )}
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-harvey)] underline-offset-4 hover:underline"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
