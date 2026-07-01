"use client";

import { useEffect, type RefObject } from "react";

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Restores reveal state when the browser returns via back/forward cache
 * (e.g. after following an external link). Without this, IntersectionObservers
 * do not re-run and `.reveal-up` content stays at opacity 0.
 */
export function useRevealBackForwardRestore(
  setVisible: (visible: boolean) => void,
) {
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setVisible(true);
      }
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [setVisible]);
}

export function useRevealOnView(
  ref: RefObject<HTMLElement | null>,
  setVisible: (visible: boolean) => void,
) {
  useRevealBackForwardRestore(setVisible);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const revealIfIntersecting = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setVisible(true);
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && revealIfIntersecting(entry)) {
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    const rect = element.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      setVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [ref, setVisible]);
}
