"use client";

import { DeferredMount } from "@/components/shared/DeferredMount";
import { LazyAddressDemo } from "@/components/lazy/client-modules";

const demoPlaceholder = (
  <div className="h-[280px] w-full max-w-demo-card" aria-hidden />
);

export function HeroDeferredAddressDemo() {
  return (
    <DeferredMount placeholder={demoPlaceholder} idleTimeoutMs={2_500}>
      <LazyAddressDemo />
    </DeferredMount>
  );
}
