"use client";

import { parseServiceSectionFromPath } from "@/features/services/service-routes";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const ANCHOR_OFFSET = 72;

function getScrollTargetId(pathname: string) {
  const sectionFromPath = parseServiceSectionFromPath(pathname);
  const hash =
    typeof window !== "undefined" ? window.location.hash.slice(1) : "";
  const id = sectionFromPath ?? (hash ? decodeURIComponent(hash) : null);
  return id;
}

export function ScrollToHash() {
  const lenis = useLenis();
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const scrollToTarget = useCallback(
    (id: string) => {
      const target = document.getElementById(id);
      if (!target) {
        return;
      }

      if (lenis) {
        lenis.scrollTo(target, { offset: ANCHOR_OFFSET });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [lenis],
  );

  useEffect(() => {
    const id = getScrollTargetId(pathname);
    if (!id) {
      return;
    }

    const timeoutId = window.setTimeout(() => scrollToTarget(id), 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash, scrollToTarget]);

  return null;
}
