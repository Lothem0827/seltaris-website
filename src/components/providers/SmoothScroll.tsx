"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";
import { LENIS_OPTIONS } from "@/lib/lenis-config";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
