"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import ScriptAccent from "../ScriptAccent";
import DiagonalCut from "../DiagonalCut";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";
import { VENDORS, type Vendor } from "@/data/vendors";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Vendors() {
  const [active, setActive] = useState<Vendor | null>(null);
  const reduce = useReducedMotion();

  return (
    <section
      id="vendors"
      aria-label="Our Vendors"
      className="relative overflow-hidden bg-[var(--color-clay)] px-6 pt-20 pb-28 text-[var(--color-sand)] md:px-12 md:pt-28 md:pb-36"
    >
      <PatternOverlay name="earth-white" size={520} opacity={0.1} />

      <div className="relative mx-auto max-w-6xl">
        <Reveal as="header" amount={0.5}>
          <div className="flex flex-col items-center text-center">
            <ElementIcon name="community" variant="light" size={56} />
            <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.16em] md:text-5xl">
              Our Vendors
            </h2>
          </div>
        </Reveal>

        <StaggerGroup
          as="ul"
          stagger={0.08}
          amount={0.15}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-4"
        >
          {VENDORS.map((v) => (
            <StaggerItem
              key={v.slug}
              as="li"
              className="relative aspect-[5/4] overflow-hidden bg-[var(--color-iron-soft)]"
            >
              <button
                type="button"
                onClick={() => setActive(v)}
                aria-label={`View details for ${v.name}`}
                className="group absolute inset-0 block w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-sand)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: v.tone }}
                />
                {v.cover && (
                  <Image
                    src={v.cover}
                    alt=""
                    fill
                    sizes="(min-width:768px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Hover scrim — darkens cover so the name reads cleanly */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[var(--color-iron)]/0 transition-colors duration-300 group-hover:bg-[var(--color-iron)]/55 group-focus-visible:bg-[var(--color-iron)]/55"
                />
                {/* Name — hidden by default, revealed on hover/focus */}
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="font-display text-2xl uppercase leading-tight tracking-wide text-[var(--color-sand)] md:text-3xl">
                    {v.name}
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal direction="right" delay={0.1}>
          <div className="mt-14 flex justify-center md:mt-20">
            <ScriptAccent
              name="where-taste-travels"
              width={360}
              variant="cream"
              className="opacity-90 md:w-[460px]"
            />
          </div>
        </Reveal>
      </div>

      <DiagonalCut to="var(--color-sand)" height={64} />

      <AnimatePresence>
        {active && (
          <VendorModal
            vendor={active}
            onClose={() => setActive(null)}
            reduce={!!reduce}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function VendorModal({
  vendor,
  onClose,
  reduce,
}: {
  vendor: Vendor;
  onClose: () => void;
  reduce: boolean;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus trap, ESC to close, body scroll lock
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusFirst = () => {
      const first = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      first?.focus();
    };
    const raf = requestAnimationFrame(focusFirst);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;
      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`vendor-${vendor.slug}-title`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 sm:px-6"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close vendor details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[var(--color-iron)]/75 backdrop-blur-sm"
      />

      {/* Dialog */}
      <motion.div
        ref={dialogRef}
        initial={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduce ? 0 : 8, scale: reduce ? 1 : 0.98 }}
        transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-[var(--color-sand)] text-[var(--color-iron)] shadow-2xl"
      >
        {/* Cover */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden"
          style={{ background: vendor.tone }}
        >
          {vendor.cover && (
            <Image
              src={vendor.cover}
              alt=""
              fill
              sizes="(min-width:768px) 768px, 100vw"
              className="object-cover"
            />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-iron)]/70 text-[var(--color-sand)] transition-colors hover:bg-[var(--color-iron)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sand)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body — independently scrollable when content overflows */}
        <div className="max-h-[calc(90vh-min(56vw,432px))] overflow-y-auto px-6 py-7 md:px-10 md:py-9">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-[var(--color-clay)]">
            {vendor.cuisine} · {vendor.origin}
          </p>
          <h3
            id={`vendor-${vendor.slug}-title`}
            className="mt-3 font-display text-3xl uppercase leading-tight tracking-tight md:text-4xl"
          >
            {vendor.name}
          </h3>
          <p className="mt-5 leading-relaxed text-[var(--color-iron)]/85">
            {vendor.longBlurb}
          </p>

          <dl className="mt-7 grid grid-cols-1 gap-5 border-t border-[var(--color-iron)]/15 pt-6 sm:grid-cols-2">
            <div>
              <dt className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-clay)]">
                Signature
              </dt>
              <dd className="mt-2 leading-relaxed">{vendor.signature}</dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-[0.22em] text-[var(--color-clay)]">
                Instagram
              </dt>
              <dd className="mt-2">
                <a
                  href={`https://instagram.com/${vendor.handle.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-script text-2xl text-[var(--color-spicy)] hover:opacity-80"
                >
                  {vendor.handle}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </motion.div>
    </motion.div>
  );
}
