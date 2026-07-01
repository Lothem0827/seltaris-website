"use client";

import { useEffect, useState } from "react";

/**
 * Loads the hero background after primary content paints (idle callback).
 * Uses a single <picture> so only the matching viewport image is fetched.
 */
export function HeroDeferredBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const idle =
      window.requestIdleCallback ??
      ((callback: IdleRequestCallback) =>
        window.setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 0 }), 1));

    const idleId = idle(
      () => {
        if (!cancelled) {
          setReady(true);
        }
      },
      { timeout: 3_000 },
    );

    return () => {
      cancelled = true;
      const cancelIdle = window.cancelIdleCallback ?? clearTimeout;
      cancelIdle(idleId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-white"
      aria-hidden
    >
      {ready ? (
        <picture className="block size-full">
          <source
            media="(max-width: 639px)"
            srcSet="/images/home/hero-background-mobile.webp"
            type="image/webp"
          />
          <img
            src="/images/home/hero-background.webp"
            alt=""
            decoding="async"
            loading="lazy"
            fetchPriority="low"
            className="size-full object-cover object-top sm:object-bottom"
          />
        </picture>
      ) : null}
    </div>
  );
}
