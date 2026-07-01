"use client";

import dynamic from "next/dynamic";
import type { ComponentProps, ComponentType } from "react";

const animationPlaceholder = (
  <div className="min-h-[320px] w-full max-w-content-wide" aria-hidden />
);

const demoPlaceholder = (
  <div className="h-[280px] w-full max-w-demo-card" aria-hidden />
);

const sliderPlaceholder = <div className="min-h-[480px] w-full" aria-hidden />;

const marqueePlaceholder = <div className="h-32 w-full" aria-hidden />;

export const LazyAddressValidateAnimation = dynamic(
  () =>
    import("@/components/svg-animations/AddressValidateAnimation").then(
      (m) => m.AddressValidateAnimation,
    ),
  { ssr: false, loading: () => animationPlaceholder },
);

export const LazyHumanTouchAnimated = dynamic(
  () =>
    import("@/components/svg-animations/HumanTouchAnimated").then(
      (m) => m.HumanTouchAnimated,
    ),
  { ssr: false, loading: () => animationPlaceholder },
);

export const LazyAltraserviceAnimation = dynamic(
  () =>
    import("@/components/svg-animations/AltraserviceAnimation").then(
      (m) => m.AltraserviceAnimation,
    ),
  { ssr: false, loading: () => animationPlaceholder },
);

export const LazyAddressDemo = dynamic(
  () => import("@/components/shared/AddressDemo").then((m) => m.AddressDemo),
  { ssr: false, loading: () => demoPlaceholder },
);

export const LazySliderSection = dynamic(
  () => import("@/components/shared/SliderSection").then((m) => m.SliderSection),
  { ssr: false, loading: () => sliderPlaceholder },
);

export const LazyLogoMarquee = dynamic(
  () =>
    import("@/features/home/components/LogoMarquee").then((m) => m.LogoMarquee),
  { ssr: false, loading: () => marqueePlaceholder },
);

export function lazySection<P extends Record<string, unknown>>(
  loader: () => Promise<{ [key: string]: ComponentType<P> }>,
  exportName: string,
) {
  return dynamic(
    () => loader().then((m) => m[exportName] as ComponentType<P>),
    { loading: () => sliderPlaceholder },
  );
}

export type LazySliderSectionProps = ComponentProps<
  typeof import("@/components/shared/SliderSection").SliderSection
>;

export type LazyLogoMarqueeProps = ComponentProps<
  typeof import("@/features/home/components/LogoMarquee").LogoMarquee
>;
