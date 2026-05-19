import {
  FeatureSliderSection,
  type FeatureSlide,
} from "@/components/sections/FeatureSliderSection";
import { assets } from "@/lib/assets";

const slides: FeatureSlide[] = [
  {
    width: 604,
    image: assets.altraservice.slides.fastest,
    lead: "World’s Fastest Addressing Batch Processing Tool.",
    body: " By leveraging advanced computing techniques, we developed innovative methodologies for processing files more efficiently, resulting in significantly faster processing times and improved system performance.",
  },
  {
    width: 441,
    image: assets.altraservice.slides.scale,
    lead: "Designed to scale.",
    body: " On demand dynamic computational capacity designed to draw on even larger server clusters for even faster performance.",
  },
  {
    width: 441,
    image: assets.altraservice.slides.security,
    lead: "Speed is nothing without leading security.",
    body: " Advanced encryption techniques at every step keeps your data secure and confidential.",
  },
];

export function AltraserviceSection() {
  return (
    <FeatureSliderSection
      eyebrow="DataTools Altraservice™"
      title={
        <>
          Groundbreaking <span className="text-brand">Performance.</span>
        </>
      }
      description={
        <>
          Over the past few years, we have dedicated substantial effort to
          optimising efficiency at every layer of our cloud technology stack. As
          a result, we are proud to announce that DataTools Seltaris sets{" "}
          <span className="font-bold">
            a new industry standard as the world’s fastest addressing batch
            processing tool
          </span>
          , delivering unprecedented speed and reliability for all your data
          processing needs.
        </>
      }
      headerVisual={assets.altraservice.headerVisual}
      slides={slides}
      prevButton={assets.altraservice.prevButton}
      nextButton={assets.altraservice.nextButton}
      cta={{ label: "Explore all features", href: "#features" }}
    />
  );
}
