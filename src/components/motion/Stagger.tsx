"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import clsx from "clsx";

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Stagger reveals a group of children one after another as the group
 * scrolls into view. Pair with `<StaggerItem>` (or any motion element
 * that consumes the parent variant cascade).
 */
export function StaggerGroup({
  children,
  stagger = 0.08,
  delayChildren = 0,
  amount = 0.25,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  as?: "div" | "section" | "header" | "article" | "ul" | "ol";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren,
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

export function StaggerItem({
  children,
  as: Tag = "div",
  className,
}: {
  children?: ReactNode;
  as?: "div" | "li" | "article" | "span" | "p" | "header";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      className={clsx(className)}
      variants={reduce ? { hidden: { opacity: 1 }, show: { opacity: 1 } } : ITEM_VARIANTS}
    >
      {children}
    </MotionTag>
  );
}
