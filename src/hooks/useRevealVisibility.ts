"use client";

import { hasVisitedRoute } from "@/lib/reveal-route-memory";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState, type RefObject } from "react";

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isElementInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

/**
 * Restores reveal state when the browser returns via back/forward cache
 * (e.g. after following an external link). Without this, IntersectionObservers
 * do not re-run and `.reveal-up` content stays at opacity 0.
 */
export function useRevealBackForwardRestore(
  setVisible: (visible: boolean) => void,
  setSettled?: (settled: boolean) => void,
) {
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setVisible(true);
        setSettled?.(true);
      }
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [setVisible, setSettled]);
}

export function useRevealOnView(
  ref: RefObject<HTMLElement | null>,
): { visible: boolean; settled: boolean } {
  const pathname = usePathname();
  const isRevisit = hasVisitedRoute(pathname);
  const [visible, setVisible] = useState(isRevisit);
  const [settled, setSettled] = useState(isRevisit);

  useRevealBackForwardRestore(setVisible, setSettled);

  useLayoutEffect(() => {
    if (isRevisit || prefersReducedMotion()) {
      setVisible(true);
      setSettled(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    if (isElementInView(element)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, isRevisit]);

  return { visible, settled };
}

export function useRevealRouteRevisit(): boolean {
  const pathname = usePathname();
  return hasVisitedRoute(pathname);
}
