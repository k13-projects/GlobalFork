"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps the nav and slightly intensifies its background blur + opacity
 * after the user scrolls past the hero. Keeps the nav from looking
 * floaty over the hero photo.
 */
export default function NavCondense({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 320], [0.78, 0.97]);
  const blur = useTransform(scrollY, [0, 320], [4, 14], {
    clamp: true,
  });
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  if (reduce) {
    return (
      <div className="sticky top-0 z-40 bg-[var(--color-sand)]/95">{children}</div>
    );
  }

  return (
    <motion.div
      className="sticky top-0 z-40 bg-[var(--color-sand)]"
      style={{ opacity: 1 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[var(--color-sand)]"
        style={{ opacity: bgOpacity, backdropFilter: filter, WebkitBackdropFilter: filter }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
