"use client";

import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import { LENIS_OPTIONS } from "@/lib/lenis-config";

type SmoothScrollProps = {
  children: ReactNode;
};

type LenisWrapperProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [LenisWrapper, setLenisWrapper] =
    useState<ComponentType<LenisWrapperProps> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;

    const loadLenis = () => {
      void import("lenis/react").then(({ ReactLenis }) => {
        if (cancelled) return;

        const Wrapper = ({ children: inner }: LenisWrapperProps) => (
          <ReactLenis root options={LENIS_OPTIONS}>
            {inner}
          </ReactLenis>
        );

        setLenisWrapper(() => Wrapper);
      });
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
    const idleId = idle(loadLenis);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idleId as number);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, []);

  if (!LenisWrapper) {
    return children;
  }

  return <LenisWrapper>{children}</LenisWrapper>;
}
