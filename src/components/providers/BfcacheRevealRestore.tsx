"use client";

import { useEffect } from "react";

const RESTORED_CLASS = "reveal-bfcache-restored";

/**
 * CSS fallback when bfcache restores the page: ensures reveal content is visible
 * even if individual component state fails to update in time.
 */
export function BfcacheRevealRestore() {
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        return;
      }

      document.documentElement.classList.add(RESTORED_CLASS);

      const onNextPageShow = (nextEvent: PageTransitionEvent) => {
        if (!nextEvent.persisted) {
          document.documentElement.classList.remove(RESTORED_CLASS);
        }
      };

      window.addEventListener("pageshow", onNextPageShow, { once: true });
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
