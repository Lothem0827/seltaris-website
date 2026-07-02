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
    let engagementIdleId: number | undefined;

    const loadLenis = () => {
      void Promise.all([
        import("lenis/dist/lenis.css"),
        import("lenis/react"),
      ]).then(([, { ReactLenis }]) => {
        if (cancelled) return;

        const Wrapper = ({ children: inner }: LenisWrapperProps) => (
          <ReactLenis root options={LENIS_OPTIONS}>
            {inner}
          </ReactLenis>
        );

        setLenisWrapper(() => Wrapper);
      });
    };

    const startLenis = () => {
      removeEngagementListeners();
      if (engagementIdleId !== undefined) {
        const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
        cancelIdle(engagementIdleId);
      }
      loadLenis();
    };

    const removeEngagementListeners = () => {
      window.removeEventListener("scroll", startLenis, { capture: true });
      window.removeEventListener("wheel", startLenis, { capture: true });
      window.removeEventListener("pointerdown", startLenis, { capture: true });
    };

    window.addEventListener("scroll", startLenis, {
      capture: true,
      passive: true,
    });
    window.addEventListener("wheel", startLenis, {
      capture: true,
      passive: true,
    });
    window.addEventListener("pointerdown", startLenis, { capture: true });

    const idle =
      window.requestIdleCallback ??
      ((callback: IdleRequestCallback) =>
        window.setTimeout(
          () => callback({ didTimeout: false, timeRemaining: () => 0 }),
          1,
        ));

    engagementIdleId = idle(
      () => {
        if (!cancelled) {
          startLenis();
        }
      },
      { timeout: 8_000 },
    );

    return () => {
      cancelled = true;
      removeEngagementListeners();
      if (engagementIdleId !== undefined) {
        const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
        cancelIdle(engagementIdleId);
      }
    };
  }, []);

  if (!LenisWrapper) {
    return children;
  }

  return <LenisWrapper>{children}</LenisWrapper>;
}
