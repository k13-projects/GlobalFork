import Link from "next/link";
import clsx from "clsx";

type Variant = "spicy" | "cream" | "harvey" | "clay" | "ironOnSand";

const STYLES: Record<Variant, string> = {
  spicy:
    "bg-[var(--color-spicy)] text-[var(--color-sand)] hover:bg-[var(--color-clay-deep)]",
  cream:
    "bg-[var(--color-sand)] text-[var(--color-iron)] hover:bg-[var(--color-sand-deep)]",
  harvey:
    "bg-[var(--color-harvey)] text-[var(--color-sand)] hover:bg-[var(--color-ochre)]",
  clay: "bg-[var(--color-clay)] text-[var(--color-sand)] hover:bg-[var(--color-clay-deep)]",
  ironOnSand:
    "bg-[var(--color-iron)] text-[var(--color-sand)] hover:bg-[var(--color-iron-soft)]",
};

export default function PillButton({
  href,
  children,
  variant = "spicy",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-10 py-3 font-display text-sm uppercase tracking-[0.2em] transition-colors",
        STYLES[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
