"use client";

import { markRouteVisited } from "@/lib/reveal-route-memory";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Marks routes as visited when the user navigates away so reveal animations
 * can skip replay on soft return navigation within the same session.
 */
export function RevealRouteMemory() {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    const previousPathname = previousPathnameRef.current;

    if (previousPathname !== pathname) {
      markRouteVisited(previousPathname);
      previousPathnameRef.current = pathname;
    }
  }, [pathname]);

  return null;
}
