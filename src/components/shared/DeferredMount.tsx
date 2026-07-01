"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredMountProps = {
  children: ReactNode;
  placeholder?: ReactNode;
  /** When true, wait until the placeholder enters the viewport before scheduling mount. */
  whenVisible?: boolean;
  rootMargin?: string;
  idleTimeoutMs?: number;
};

export function DeferredMount({
  children,
  placeholder = null,
  whenVisible = false,
  rootMargin = "200px",
  idleTimeoutMs = 2_000,
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      return;
    }

    let cancelled = false;
    let observer: IntersectionObserver | undefined;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const scheduleMount = () => {
      const idle =
        window.requestIdleCallback ??
        ((callback: IdleRequestCallback) =>
          window.setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 0 }), 1));

      idleId = idle(
        () => {
          if (!cancelled) {
            setMounted(true);
          }
        },
        { timeout: idleTimeoutMs },
      );
    };

    const start = () => {
      if (whenVisible) {
        const element = ref.current;
        if (!element) {
          return;
        }

        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting) {
              observer?.disconnect();
              scheduleMount();
            }
          },
          { rootMargin },
        );
        observer.observe(element);
        return;
      }

      scheduleMount();
    };

    timeoutId = setTimeout(start, 0);

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (idleId !== undefined) {
        const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
        cancelIdle(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [mounted, whenVisible, rootMargin, idleTimeoutMs]);

  return <div ref={ref}>{mounted ? children : placeholder}</div>;
}
