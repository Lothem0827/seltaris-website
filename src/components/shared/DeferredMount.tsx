"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredMountProps = {
  children: ReactNode;
  placeholder?: ReactNode;
  /** When true, wait until the placeholder enters the viewport before scheduling mount. */
  whenVisible?: boolean;
  /** When true, wait for scroll/wheel/pointer/keyboard before scheduling mount. */
  whenEngaged?: boolean;
  rootMargin?: string;
  idleTimeoutMs?: number;
};

export function DeferredMount({
  children,
  placeholder = null,
  whenVisible = false,
  whenEngaged = false,
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
      if (whenEngaged) {
        let fallbackIdleId: number | undefined;

        const mountNow = () => {
          if (cancelled) {
            return;
          }
          removeEngagementListeners();
          if (fallbackIdleId !== undefined) {
            const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
            cancelIdle(fallbackIdleId);
          }
          setMounted(true);
        };

        const removeEngagementListeners = () => {
          window.removeEventListener("scroll", mountNow, { capture: true });
          window.removeEventListener("wheel", mountNow, { capture: true });
          window.removeEventListener("pointerdown", mountNow, { capture: true });
          window.removeEventListener("keydown", mountNow, { capture: true });
        };

        window.addEventListener("scroll", mountNow, {
          capture: true,
          passive: true,
        });
        window.addEventListener("wheel", mountNow, {
          capture: true,
          passive: true,
        });
        window.addEventListener("pointerdown", mountNow, { capture: true });
        window.addEventListener("keydown", mountNow, { capture: true });

        const idle =
          window.requestIdleCallback ??
          ((callback: IdleRequestCallback) =>
            window.setTimeout(
              () => callback({ didTimeout: false, timeRemaining: () => 0 }),
              1,
            ));

        fallbackIdleId = idle(
          () => {
            if (!cancelled) {
              mountNow();
            }
          },
          { timeout: idleTimeoutMs },
        );
        return;
      }

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
  }, [mounted, whenVisible, whenEngaged, rootMargin, idleTimeoutMs]);

  return <div ref={ref}>{mounted ? children : placeholder}</div>;
}
