"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Hero — full-bleed living gradient.
 * Two slow-drifting radial gradients give the impression of warm light
 * shifting across the plaza at dusk. Placeholder until the real bar
 * render arrives.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Global Fork — hero"
      className="relative h-[78vh] min-h-[480px] w-full overflow-hidden bg-[var(--color-iron)]"
    >
      {/* Base warm radial */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={
          reduce
            ? undefined
            : {
                background: [
                  "radial-gradient(ellipse at 30% 65%, rgba(176,133,57,0.55) 0%, rgba(184,107,61,0.4) 28%, rgba(47,44,40,0.95) 72%)",
                  "radial-gradient(ellipse at 60% 55%, rgba(201,140,58,0.55) 0%, rgba(176,133,57,0.42) 30%, rgba(47,44,40,0.95) 75%)",
                  "radial-gradient(ellipse at 30% 65%, rgba(176,133,57,0.55) 0%, rgba(184,107,61,0.4) 28%, rgba(47,44,40,0.95) 72%)",
                ],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={
          reduce
            ? {
                background:
                  "radial-gradient(ellipse at 30% 65%, rgba(176,133,57,0.55) 0%, rgba(184,107,61,0.4) 28%, rgba(47,44,40,0.95) 72%)",
              }
            : undefined
        }
      />

      {/* Light shaft sweep */}
      <motion.div
        aria-hidden
        className="absolute inset-0 mix-blend-soft-light opacity-60"
        animate={
          reduce
            ? undefined
            : {
                background: [
                  "linear-gradient(115deg, transparent 0%, rgba(235,225,208,0.25) 35%, transparent 60%, rgba(235,225,208,0.18) 78%, transparent 100%)",
                  "linear-gradient(115deg, transparent 0%, rgba(235,225,208,0.18) 30%, transparent 55%, rgba(235,225,208,0.28) 80%, transparent 100%)",
                  "linear-gradient(115deg, transparent 0%, rgba(235,225,208,0.25) 35%, transparent 60%, rgba(235,225,208,0.18) 78%, transparent 100%)",
                ],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-iron)]/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <p className="font-script text-2xl text-[var(--color-sand)]/70">
          piazza · plaza · gather
        </p>
      </div>
    </section>
  );
}
