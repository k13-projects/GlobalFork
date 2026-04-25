"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import clsx from "clsx";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * IntersectionObserver-based reveal. Plays once on enter, respects
 * `prefers-reduced-motion` (instant render, no animation).
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Fraction of element that must be visible before reveal triggers */
  amount?: number;
  as?: "div" | "section" | "header" | "article" | "li" | "ul";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const offset = OFFSET[direction];

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, x: offset.x, y: offset.y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      className={clsx(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
