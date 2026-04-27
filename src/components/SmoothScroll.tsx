"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Section's top sits flush with the bottom of the sticky nav.
  const navOffset = () => {
    if (typeof document === "undefined") return -80;
    const nav = document.querySelector("header");
    const h = nav ? nav.getBoundingClientRect().height : 80;
    return -h;
  };

  const smoothScrollToHash = (hash: string) => {
    if (!hash || hash === "#") return;
    let el: Element | null = null;
    try {
      el = document.querySelector(hash);
    } catch {
      return;
    }
    if (!el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: navOffset(), duration: 1.2 });
    } else {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY + navOffset();
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // After Next.js client-side navigation lands on a route with a hash, the URL
  // change came via history.pushState — which does not fire hashchange — so we
  // re-position with the correct nav offset whenever the pathname settles.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.hash) return;
    const hash = window.location.hash;
    // Wait for the new page's sections to render.
    const t = setTimeout(() => smoothScrollToHash(hash), 60);
    return () => clearTimeout(t);
  }, [pathname]);

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

    // Intercept anchor clicks for smooth scroll. Runs in capture phase so it
    // beats Next.js <Link> — otherwise Link's own handler would fire a route
    // change on `/#events` clicks before we got the chance to preventDefault.
    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      let hash = "";
      let scrollToTop = false;
      if (href.startsWith("#")) {
        hash = href;
      } else if (href.startsWith("/")) {
        const hashIdx = href.indexOf("#");
        const path = (hashIdx === -1 ? href : href.slice(0, hashIdx)) || "/";
        if (path !== window.location.pathname) return; // let Next.js navigate
        if (hashIdx === -1) {
          // Same-path link with no hash (e.g. logo → "/" while on /): glide to top.
          scrollToTop = true;
        } else {
          hash = href.slice(hashIdx);
        }
      } else {
        return;
      }

      if (scrollToTop) {
        e.preventDefault();
        e.stopPropagation();
        history.replaceState(null, "", window.location.pathname);
        const lenis = lenisRef.current;
        if (lenis) lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        return;
      }
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();
      history.replaceState(null, "", hash);
      smoothScrollToHash(hash);
    };
    document.addEventListener("click", onAnchorClick, true);

    // Back/forward (popstate) and direct hash assignment fire hashchange.
    // Cross-page Next.js navigation does NOT — that's handled by the pathname
    // effect above.
    const onHashChange = () => smoothScrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    if (window.location.hash) {
      requestAnimationFrame(() => smoothScrollToHash(window.location.hash));
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("load", onLoad);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onAnchorClick, true);
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
