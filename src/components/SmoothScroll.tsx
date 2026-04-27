"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";

type LenisContextValue = {
  scrollTo: (target: string | HTMLElement | number, opts?: { offset?: number; duration?: number }) => void;
  isReady: boolean;
};

const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
  isReady: false,
});

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setIsReady(true);
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    setIsReady(true);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Lenis caches scroll height at init. When lazy images / fonts / dynamic
    // content land afterwards the page grows but Lenis still caps scroll to
    // the old height — which is why footer is unreachable on first load and
    // fine after a reload (cached assets settle before init).
    const ro = new ResizeObserver(() => lenis.resize());
    ro.observe(document.body);
    const onLoad = () => lenis.resize();
    window.addEventListener("load", onLoad);

    // Intercept in-page anchor clicks for smooth scroll
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("load", onLoad);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo: LenisContextValue["scrollTo"] = (target, opts) => {
    const lenis = lenisRef.current;
    if (!lenis) {
      // fallback: native instant scroll for reduced-motion users
      if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) (el as HTMLElement).scrollIntoView({ behavior: "auto" });
      }
      return;
    }
    lenis.scrollTo(target, opts);
  };

  return (
    <LenisContext.Provider value={{ scrollTo, isReady }}>
      {children}
    </LenisContext.Provider>
  );
}
