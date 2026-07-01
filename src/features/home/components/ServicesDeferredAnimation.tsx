"use client";

import { LazyAddressValidateAnimation } from "@/components/lazy/client-modules";
import { DeferredMount } from "@/components/shared/DeferredMount";

const placeholder = (
  <div className="min-h-[320px] w-full max-w-content-wide" aria-hidden />
);

export function ServicesDeferredAnimation() {
  return (
    <DeferredMount whenVisible placeholder={placeholder} rootMargin="200px">
      <LazyAddressValidateAnimation />
    </DeferredMount>
  );
}
