"use client";

import { parseServiceSectionFromPath } from "@/lib/content/service-categories";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ANCHOR_OFFSET = 72;

export function ScrollToHash() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const sectionFromPath = parseServiceSectionFromPath(pathname);
    const hash = window.location.hash;
    const id =
      sectionFromPath ?? (hash ? decodeURIComponent(hash.slice(1)) : null);

    if (!id) return;

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
