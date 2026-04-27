"use client";

import { useEffect, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import PillButton from "@/components/PillButton";
import { siteConfig } from "@/lib/site-config";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Local dev visibility. Production wiring (Sentry / Vercel) lands when
    // the monitoring service is chosen — see DECISIONS_NEEDED §6.
    console.error("Route error:", error);
  }, [error]);

  const supportHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Site error report${error.digest ? ` · ${error.digest}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        "Something went wrong on the Global Fork site.",
        "",
        `Page: ${typeof window !== "undefined" ? window.location.href : ""}`,
        `Error id: ${error.digest ?? "(none)"}`,
        "",
        "What I was doing when it happened:",
        "",
      ].join("\n"),
    );
    return `mailto:${siteConfig.emails.general}?subject=${subject}&body=${body}`;
  }, [error.digest]);

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
          <a
            href={supportHref}
            className="font-display text-xs uppercase tracking-[0.2em] text-[var(--color-clay)] underline-offset-4 hover:underline"
          >
            Tell us what happened
          </a>
          {error.digest && (
            <p className="mt-2 text-xs text-[var(--color-iron)]/70">
              error id · {error.digest}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
