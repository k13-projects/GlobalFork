"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

/**
 * Slowly rotates the sun element as the user scrolls through the Visit
 * section. Subtle — quarter-turn over the section's scroll length.
 */
export default function SunRotator({
  size = 520,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate }}
      className={className}
      aria-hidden
    >
      <Image
        src="/brand/elements/sun.png"
        alt=""
        width={size}
        height={size}
        className="[filter:invert(1)]"
      />
    </motion.div>
  );
}
