"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const ITEMS = [
  { label: "About Us", href: "/#about" },
  { label: "Our Vendors", href: "/#vendors" },
  { label: "Events", href: "/#events" },
  { label: "Bookings", href: "/#bookings" },
  { label: "Visit Us", href: "/#visit" },
  { label: "Contact", href: "/#contact" },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape, lock body scroll, trap focus inside the drawer.
  useEffect(() => {
    if (!open) return;

    // Capture the trigger node now so the cleanup can restore focus reliably
    // even after React has updated the ref.
    const triggerNode = triggerRef.current;

    const focusFirst = () => {
      const first = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      first?.focus();
    };
    // Drawer mounts via AnimatePresence; defer one frame so the node exists.
    const raf = requestAnimationFrame(focusFirst);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const root = drawerRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      triggerNode?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] text-[var(--color-iron)] md:hidden"
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
            ref={drawerRef}
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            // Starts below the sticky nav so the logo + divider stay visible
            // while the menu is open. The hamburger animates to an X and acts
            // as the close affordance — no second close button needed.
            className="fixed inset-x-0 bottom-0 top-[108px] z-30 flex flex-col bg-[var(--color-iron)] text-[var(--color-sand)] md:hidden"
          >
            <nav className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-start gap-6 px-8 pt-8">
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
