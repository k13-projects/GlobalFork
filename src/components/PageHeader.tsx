import { ElementIconRow } from "./ElementIcon";
import PatternOverlay from "./PatternOverlay";

/**
 * Shared inner-page hero strip.
 * Iron Black band with the four element icons, eyebrow + title.
 * Keeps every inner page anchored in the same brand language as the home.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header
      aria-label={title}
      className="relative overflow-hidden bg-[var(--color-iron)] px-8 pt-24 pb-16 text-center text-[var(--color-sand)]"
    >
      <PatternOverlay name="bars" size={420} opacity={0.06} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6">
        <ElementIconRow variant="light" size={36} className="gap-4 sm:gap-6" />
        {eyebrow && (
          <p className="font-display text-xs uppercase tracking-[0.32em] text-[var(--color-harvey)]">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl uppercase leading-[1] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-base leading-relaxed text-[var(--color-sand)]/85 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
