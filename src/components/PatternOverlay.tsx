import clsx from "clsx";

type PatternName =
  | "bars"
  | "earth-white"
  | "sun-line"
  | "water-line"
  | "clay"
  | "harvey"
  | "sandstone"
  | "sandstone-footer"
  | "iron-black";

export default function PatternOverlay({
  name,
  opacity = 0.12,
  size = 600,
  className,
  blendMode = "normal",
}: {
  name: PatternName;
  opacity?: number;
  size?: number;
  className?: string;
  blendMode?: React.CSSProperties["mixBlendMode"];
}) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 bg-repeat",
        className,
      )}
      style={{
        backgroundImage: `url(/brand/patterns/${name}.png)`,
        backgroundSize: `${size}px auto`,
        opacity,
        mixBlendMode: blendMode,
      }}
    />
  );
}
