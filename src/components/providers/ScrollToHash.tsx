"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ANCHOR_OFFSET = 72;

export function ScrollToHash() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: ANCHOR_OFFSET });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = window.setTimeout(scrollToTarget, 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, lenis]);

  return null;
}
