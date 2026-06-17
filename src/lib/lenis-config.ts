import type { LenisOptions } from "lenis";

/**
 * Lenis tuning — lower `lerp` = smoother deceleration.
 * Avoid `allowNestedScroll` and `naiveDimensions` (DOM walks / layout cost).
 */
export const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.08,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  overscroll: true,
  stopInertiaOnNavigate: true,
  anchors: {
    lerp: 0.08,
    offset: 72,
  },
} satisfies LenisOptions;
