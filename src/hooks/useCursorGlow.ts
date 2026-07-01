"use client";

import { useEffect, type RefObject } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useCursorGlow(
  ref: RefObject<HTMLElement | null>,
  disabled = false,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element || disabled || prefersReducedMotion()) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty(
        "--glow-x",
        `${event.clientX - rect.left}px`,
      );
      element.style.setProperty(
        "--glow-y",
        `${event.clientY - rect.top}px`,
      );
    };

    const onPointerEnter = () => {
      element.dataset.glowActive = "true";
    };

    const onPointerLeave = () => {
      element.dataset.glowActive = "false";
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerenter", onPointerEnter);
    element.addEventListener("pointerleave", onPointerLeave);

    return () => {
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerenter", onPointerEnter);
      element.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [ref, disabled]);
}
