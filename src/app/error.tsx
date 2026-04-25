"use client";

import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import PillButton from "@/components/PillButton";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to monitoring once configured
    console.error("Route error:", error);
  }, [error]);

  return (
    <>
      <PageHeader
        eyebrow="Something went wrong"
        title="The kitchen had a hiccup"
        subtitle="We hit an unexpected error. Try again, or head somewhere else on the site."
      />
      <section className="bg-[var(--color-sand)] px-8 py-24 text-center text-[var(--color-iron)]">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-spicy)] px-10 py-3 font-display text-sm uppercase tracking-[0.2em] text-[var(--color-sand)] transition-colors hover:bg-[var(--color-clay-deep)]"
          >
            Try again
          </button>
          <PillButton href="/" variant="ironOnSand">
            Back to Home
          </PillButton>
          {error.digest && (
            <p className="mt-4 text-xs text-[var(--color-iron)]/45">
              error id · {error.digest}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
