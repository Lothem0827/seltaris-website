import { assets } from "@/lib/assets";
import { healthCheckSlides } from "@/lib/content/sections";
import { SliderSection } from "@/components/organisms/SliderSection";
import type { SliderSlide } from "@/components/organisms/ContentSlider";

const slides: SliderSlide[] = healthCheckSlides.map((item) => ({
  type: "image",
  id: item.id,
  item,
}));

export function HealthCheckSliderSection() {
  return (
    <SliderSection
      intro={{
        eyebrow: "Health Check Report",
        heading: (
          <>
            Get the full picture
            <br />
            of your <span className="text-brand">existing data</span>
          </>
        ),
        body:
          "The Health Check Report in DataTools Seltaris assesses each record in your dataset for completeness, accuracy, and compliance with official postal standards. It highlights issues and provides clear recommendations, corrections, and enhancements.",
        imageSrc: assets.healthSide,
      }}
      navAlign="end"
      slides={slides}
      cta={{
        label: "Explore all features",
        href: "#features",
        variant: "secondary",
      }}
    />
  );
}
