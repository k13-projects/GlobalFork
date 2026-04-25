"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Our Vendors", href: "/vendors" },
  { label: "Events", href: "/#events" },
  { label: "Bookings", href: "/bookings" },
  { label: "Visit Us", href: "/#visit" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on hash change (anchor click) and on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-[var(--color-iron)] md:hidden"
      >
        <motion.span
          aria-hidden
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block h-px w-6 bg-current"
        />
        <motion.span
          aria-hidden
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block h-px w-6 bg-current"
        />
        <motion.span
          aria-hidden
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block h-px w-6 bg-current"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--color-iron)] text-[var(--color-sand)] md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center"
            >
              <span className="sr-only">Close</span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M5 5l16 16M21 5L5 21" />
              </svg>
            </button>

            <nav className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-8 px-8">
              {ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl uppercase tracking-[0.18em]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-[var(--color-sand)]/15 px-8 py-6 text-center font-script text-2xl text-[var(--color-harvey)]">
              a true gathering place
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
