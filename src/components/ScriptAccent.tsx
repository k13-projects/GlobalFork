import Image from "next/image";
import clsx from "clsx";

export type ScriptName = "a-true-gathering" | "where-taste-travels" | "culture-and-flavor";

const SOURCES: Record<ScriptName, string> = {
  "a-true-gathering": "/brand/script/a-true-gathering.png",
  "where-taste-travels": "/brand/script/where-taste-travels.png",
  "culture-and-flavor": "/brand/script/culture-and-flavor.png",
};

const ALT: Record<ScriptName, string> = {
  "a-true-gathering": "a true gathering place",
  "where-taste-travels": "Where taste travels",
  "culture-and-flavor": "Culture and flavor carry global spirit",
};

export default function ScriptAccent({
  name,
  width = 360,
  className,
  variant = "gold",
}: {
  name: ScriptName;
  width?: number;
  className?: string;
  variant?: "gold" | "cream" | "dark";
}) {
  const filter =
    variant === "cream"
      ? "[filter:invert(1)_brightness(1.05)_opacity(0.85)]"
      : variant === "dark"
        ? "[filter:brightness(0.4)]"
        : ""; // gold = native asset color

  return (
    <Image
      src={SOURCES[name]}
      alt={ALT[name]}
      width={width}
      height={Math.round(width / 4)}
      className={clsx("select-none object-contain", filter, className)}
    />
  );
}
