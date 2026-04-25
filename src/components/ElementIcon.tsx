import Image from "next/image";
import clsx from "clsx";

export type ElementName = "sun" | "community" | "earth" | "water";

const SOURCES: Record<ElementName, string> = {
  sun: "/brand/elements/sun.png",
  community: "/brand/elements/community.png",
  earth: "/brand/elements/earth.png",
  water: "/brand/elements/water.png",
};

const LABELS: Record<ElementName, string> = {
  sun: "Sun",
  community: "Community",
  earth: "Earth",
  water: "Water",
};

export default function ElementIcon({
  name,
  size = 56,
  variant = "dark",
  className,
}: {
  name: ElementName;
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Image
      src={SOURCES[name]}
      alt={LABELS[name]}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={clsx(
        "select-none",
        variant === "light" && "[filter:invert(1)_brightness(1.2)]",
        className,
      )}
    />
  );
}

export function ElementIconRow({
  variant = "dark",
  size = 56,
  className,
}: {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
}) {
  return (
    <div
      role="presentation"
      className={clsx("flex items-center justify-center gap-8", className)}
    >
      {(["sun", "community", "earth", "water"] as ElementName[]).map((name) => (
        <ElementIcon key={name} name={name} variant={variant} size={size} />
      ))}
    </div>
  );
}
