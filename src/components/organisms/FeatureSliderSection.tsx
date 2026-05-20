"use client";

import { assets } from "@/lib/assets";
import { featureSliderSlides } from "@/lib/content/home";
import { SliderSection } from "@/components/organisms/SliderSection";
import type { SliderSlide } from "@/components/organisms/ContentSlider";

const slides: SliderSlide[] = featureSliderSlides.map((slide) => ({
  type: "image" as const,
  id: slide.id,
  item: {
    id: slide.id,
    title: slide.title,
    description: slide.description,
    imageSrc: assets.featureSlides[slide.imageIndex],
  },
}));

export function FeatureSliderSection() {
  return (
    <SliderSection
      heading={
        <>
          From fast-growing <span className="text-brand">businesses</span> to{" "}
          <span className="text-brand">enterprise.</span>
        </>
      }
      headingClassName="max-w-xl"
      slides={slides}
      cta={{ label: "Get started with Seltaris", href: "#get-started" }}
    />
  );
}
