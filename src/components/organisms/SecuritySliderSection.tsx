import { assets } from "@/lib/assets";
import { securitySlides } from "@/lib/content/sections";
import { SliderSection } from "@/components/organisms/SliderSection";
import type { SliderSlide } from "@/components/organisms/ContentSlider";

const slides: SliderSlide[] = securitySlides.map((item) => ({
  type: "image",
  id: item.id,
  item,
}));

export function SecuritySliderSection() {
  return (
    <SliderSection
      intro={{
        eyebrow: "Advanced Data Protection",
        heading: (
          <>
            Enterprise <span className="text-brand">grade security.</span>
            <br />
            Built from the ground up.
          </>
        ),
        body:
          "An enterprise-grade protection package built for today's most demanding security requirements. With private keys and our all-new Encrypted Cloud Computing™ architecture, DataTools takes its industry-leading security to a whole new level.",
        imageSrc: assets.securitySide,
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
