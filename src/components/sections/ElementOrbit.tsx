"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import type { ElementName } from "../ElementIcon";

const ORBIT: { name: ElementName; angle: number }[] = [
  { name: "sun", angle: -90 }, // top
  { name: "earth", angle: 0 }, // right
  { name: "water", angle: 90 }, // bottom
  { name: "community", angle: 180 }, // left
];

/**
 * Signature scroll moment between Tagline and About:
 * the four brand elements break from the horizontal row, fan out
 * around a central glyph, and rotate while the camera "pulls back"
 * (scale + fade of the central group).
 */
export default function ElementOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const [stageSize, setStageSize] = useState(420);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w) setStageSize(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const groupScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.92]);
  const groupOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0]);
  const orbitFan = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const orbitRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? 0 : -25, reduce ? 0 : 25],
  );
  const ringOpacity = useTransform(orbitFan, [0, 1], [0, 0.18]);

  // Radius scales with the stage; leave room for a 72px icon on the edge
  const radius = Math.max(0, stageSize / 2 - 60);

  return (
    <section
      ref={sectionRef}
      aria-label="Brand elements"
      className="relative h-[80vh] min-h-[520px] overflow-hidden bg-[var(--color-iron)] text-[var(--color-sand)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(176,133,57,0.18) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.05]"
        style={{
          backgroundImage: "url(/brand/patterns/bars.png)",
          backgroundSize: "420px auto",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          ref={stageRef}
          style={{
            scale: reduce ? 1 : groupScale,
            opacity: reduce ? 1 : groupOpacity,
            rotate: reduce ? 0 : orbitRotate,
          }}
          className="relative h-[420px] w-[420px] md:h-[520px] md:w-[520px]"
        >
          {/* Central glyph */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-28 w-28 rounded-full border border-[var(--color-sand)]/30 md:h-36 md:w-36">
              <span className="absolute inset-0 flex items-center justify-center font-display text-4xl uppercase tracking-tight text-[var(--color-sand)] md:text-5xl">
                GF
              </span>
              <span aria-hidden className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--color-sand)]/15" />
              <span aria-hidden className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[var(--color-sand)]/15" />
            </div>
          </div>

          {/* Faint orbit ring */}
          <motion.div
            aria-hidden
            style={{ opacity: ringOpacity }}
            className="absolute inset-0 rounded-full border border-[var(--color-sand)]"
          />

          {/* Orbiting elements */}
          {ORBIT.map((el) => (
            <OrbitChild
              key={el.name}
              name={el.name}
              angle={el.angle}
              fan={orbitFan}
              radius={radius}
              reduce={!!reduce}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <p className="font-script text-2xl text-[var(--color-harvey)]/85">
          four elements · one table
        </p>
      </div>
    </section>
  );
}

function OrbitChild({
  name,
  angle,
  fan,
  radius,
  reduce,
}: {
  name: ElementName;
  angle: number;
  fan: MotionValue<number>;
  radius: number;
  reduce: boolean;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = useTransform(fan, (f) => Math.cos(rad) * f * radius);
  const y = useTransform(fan, (f) => Math.sin(rad) * f * radius);
  const opacity = useTransform(fan, [0, 0.2, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ x: reduce ? 0 : x, y: reduce ? 0 : y, opacity: reduce ? 1 : opacity }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Image
        src={`/brand/elements/${name}.png`}
        alt={name}
        width={72}
        height={72}
        className="select-none [filter:invert(1)_brightness(1.15)]"
      />
    </motion.div>
  );
}
