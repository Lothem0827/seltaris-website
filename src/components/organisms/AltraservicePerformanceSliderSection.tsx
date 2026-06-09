"use client";

import { SliderSection } from "@/components/organisms/SliderSection";
import type { SliderSlide } from "@/components/organisms/ContentSlider";
import { altraservicePerformanceSlides } from "@/lib/content/altraservice";
import { getAltraservicePageImage } from "@/lib/altraservice-images";

const slides: SliderSlide[] = altraservicePerformanceSlides.map((slide) => ({
  type: "image",
  id: slide.id,
  item: {
    id: slide.id,
    title: slide.title,
    description: slide.body,
    imageSrc: getAltraservicePageImage(slide.imageKey),
    width: slide.width,
  },
}));

export function AltraservicePerformanceSliderSection() {
  return (
    <SliderSection
      navAlign="end"
      slides={slides}
      className="!py-0"
    />
  );
}
