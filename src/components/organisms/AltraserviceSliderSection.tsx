import { altraservicePerformanceSlides } from "@/lib/content/sections";
import { SliderSection } from "@/components/organisms/SliderSection";
import type { SliderSlide } from "@/components/organisms/ContentSlider";

const slides: SliderSlide[] = altraservicePerformanceSlides.map((item) => ({
  type: "image",
  id: item.id,
  item,
}));

export function AltraserviceSliderSection() {
  return (
    <SliderSection
      intro={{
        eyebrow: "Altraservice™",
        heading: (
          <>
            Groundbreaking
            <br />
            Performance.
          </>
        ),
        body: (
          <>
            Over the past few years, we have dedicated substantial effort to
            optimising efficiency at every layer of our cloud technology stack.
            As a result, we are proud to announce that{" "}
            <strong>
              Seltaris sets a new industry standard in performance
            </strong>
            , delivering unprecedented speed and reliability for all your data
            processing needs.
          </>
        ),
        logoKey: "altra-service",
        logoAlt: "Altraservice",
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
