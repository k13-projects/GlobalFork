"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import clsx from "clsx";

/**
 * Two-line headline with word-by-word stagger reveal.
 * Pass two strings: the first and second visual lines.
 */
export default function SplitHeadline({
  lineOne,
  lineTwo,
  className,
}: {
  lineOne: string;
  lineTwo: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: reduce ? 0 : 0.1 },
    },
  };
  const word: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: "0.6em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const renderLine = (line: string) =>
    line.split(" ").map((w, i) => (
      <span
        key={`${line}-${i}`}
        className="inline-block overflow-hidden align-bottom"
      >
        <motion.span variants={word} className="inline-block">
          {w}
          {i < line.split(" ").length - 1 ? " " : ""}
        </motion.span>
      </span>
    ));

  return (
    <motion.h1
      className={clsx(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      <span className="block">{renderLine(lineOne)}</span>
      <span className="block">{renderLine(lineTwo)}</span>
    </motion.h1>
  );
}
