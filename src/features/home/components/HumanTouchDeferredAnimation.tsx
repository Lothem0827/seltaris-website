"use client";

import { LazyHumanTouchAnimated } from "@/components/lazy/client-modules";
import { DeferredMount } from "@/components/shared/DeferredMount";

const placeholder = (
  <div className="min-h-[320px] w-full max-w-content-wide" aria-hidden />
);

export function HumanTouchDeferredAnimation() {
  return (
    <DeferredMount whenVisible placeholder={placeholder} rootMargin="300px">
      <LazyHumanTouchAnimated />
    </DeferredMount>
  );
}
