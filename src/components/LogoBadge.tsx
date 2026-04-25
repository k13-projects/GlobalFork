import Image from "next/image";

export default function LogoBadge({
  size = 96,
  variant = "dark",
}: {
  size?: number;
  variant?: "dark" | "light";
}) {
  return (
    <Image
      src="/brand/logos/badge.png"
      alt="Global Fork — San Diego, CA"
      width={size}
      height={size}
      priority
      className={
        variant === "light"
          ? "select-none invert brightness-0 contrast-100 [filter:invert(1)]"
          : "select-none"
      }
      style={{ width: size, height: size }}
    />
  );
}
