import clsx from "clsx";

/**
 * Diagonal section transition.
 * Place INSIDE the bottom of a section; renders a slanted triangle filled
 * with `to` color so the next section bleeds upward into this one.
 *
 * Direction matches Lorena's mockup: slant goes from lower-left to upper-right
 * by default (set `flip` for the opposite).
 */
export default function DiagonalCut({
  to,
  height = 96,
  flip = false,
  className,
}: {
  to: string;
  height?: number;
  flip?: boolean;
  className?: string;
}) {
  const clip = flip
    ? "polygon(0 100%, 100% 0, 100% 100%, 0 100%)"
    : "polygon(0 100%, 100% 100%, 100% 0)";
  return (
    <div
      aria-hidden
      className={clsx("absolute inset-x-0 bottom-0 w-full", className)}
      style={{
        height,
        background: to,
        clipPath: clip,
      }}
    />
  );
}
