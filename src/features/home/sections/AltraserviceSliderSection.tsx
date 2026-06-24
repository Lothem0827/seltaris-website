import { SliderSection } from "@/components/shared/SliderSection";
import type { SliderSlide } from "@/components/shared/ContentSlider";

const slides: SliderSlide[] = [
  {
    type: "image",
    id: "fastest",
    item: {
      id: "fastest",
      imageSrc: "/images/home/altraservice-1.png",
      description: (
        <>
          <strong>
            The fastest addressing Batch processing tool we&apos;ve ever created.
          </strong>{" "}
          By leveraging advanced computing techniques, we developed innovative
          methodologies for processing files more efficiently, resulting in
          significantly faster processing times and improved system performance.
        </>
      ),
      width: "wide",
    },
  },
  {
    type: "image",
    id: "scale",
    item: {
      id: "scale",
      imageSrc: "/images/home/altraservice-2.png",
      description: (
        <>
          <strong>Designed to scale.</strong> On demand dynamic computational
          capacity designed to draw on even larger server clusters for even faster
          performance.
        </>
      ),
      width: "narrow",
    },
  },
  {
    type: "image",
    id: "security",
    item: {
      id: "security",
      imageSrc: "/images/home/altraservice-3.png",
      description: (
        <>
          <strong>Speed is nothing without leading security.</strong> Advanced
          encryption techniques at every step keeps your data secure and
          confidential.
        </>
      ),
      width: "narrow",
    },
  },
];

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
