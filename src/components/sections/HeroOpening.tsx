"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Opening-day announcement, centered in the hero. Global Fork's own take on a
 * grand-opening badge: a sunrise motif (the brand's Sun element) flanking a
 * confident display headline, with a script eyebrow and a tracked sub-line.
 * Lives over the hero photo; respects prefers-reduced-motion.
 */
export default function HeroOpening() {
  const reduce = useReducedMotion();

  const rise = (delay: number): Variants => ({
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: EASE },
    },
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
      {/* Soft warm vignette so the type reads over the photo */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[78vmin] w-[78vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(47,44,40,0.55) 0%, rgba(47,44,40,0.32) 42%, transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center text-center"
      >
        {/* Script eyebrow */}
        <motion.p
          variants={rise(0.1)}
          className="font-script text-2xl text-[var(--color-harvey)] sm:text-3xl [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]"
          style={{ color: "#d8a857" }}
        >
          the doors are open
        </motion.p>

        {/* Headline with flanking sunrise rules */}
        <motion.div
          variants={rise(0.22)}
          className="mt-2 flex items-center justify-center gap-4 sm:gap-7"
        >
          <SunRule side="left" />
          <h2 className="font-display text-[2.7rem] uppercase leading-none tracking-[0.02em] text-[var(--color-sand)] sm:text-7xl [text-shadow:0_3px_18px_rgba(0,0,0,0.6)]">
            We&rsquo;re Open
          </h2>
          <SunRule side="right" />
        </motion.div>

        {/* Tracked sub-line */}
        <motion.p
          variants={rise(0.36)}
          className="mt-5 font-display text-[0.72rem] uppercase tracking-[0.42em] text-[var(--color-sand)]/85 sm:text-sm [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]"
        >
          Grand Opening&nbsp;&nbsp;·&nbsp;&nbsp;Come Gather
        </motion.p>
      </motion.div>
    </div>
  );
}

/** A tapering gold rule that ends in a slowly rotating sun glyph. */
function SunRule({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <span
      aria-hidden
      className="hidden items-center gap-3 sm:flex"
      style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
    >
      <span
        className={`gf-open-rule${isLeft ? "" : " gf-open-rule--2"} h-px w-12 sm:w-20`}
        style={{
          background: isLeft
            ? "linear-gradient(to right, transparent, #d8a857)"
            : "linear-gradient(to left, transparent, #d8a857)",
        }}
      />
      <Sun />
    </span>
  );
}

function Sun() {
  return (
    <span className="gf-open-halo relative inline-flex h-7 w-7 items-center justify-center sm:h-9 sm:w-9">
      <svg
        viewBox="0 0 40 40"
        className="gf-open-sun h-full w-full"
        fill="none"
        stroke="#d8a857"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="20" cy="20" r="6" fill="#d8a857" stroke="none" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const r1 = 10.5;
          const r2 = i % 2 === 0 ? 17.5 : 14.5;
          const f = (n: number) => (20 + n).toFixed(3);
          return (
            <line
              key={i}
              x1={f(Math.cos(a) * r1)}
              y1={f(Math.sin(a) * r1)}
              x2={f(Math.cos(a) * r2)}
              y2={f(Math.sin(a) * r2)}
            />
          );
        })}
      </svg>
    </span>
  );
}
