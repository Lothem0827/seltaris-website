"use client";

import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { CoreFeatureSlideCard } from "@/components/molecules/CoreFeatureSlideCard";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/molecules/SliderNavButtons";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/organisms/ContentSlider";
import { coreFeaturesSection } from "@/lib/content/core-features";
import { getCoreFeatureImage } from "@/lib/core-features-images";

const slides: SliderSlide[] = coreFeaturesSection.features.map((feature) => ({
  type: "custom",
  id: feature.id,
  content: (
    <CoreFeatureSlideCard
      visualSrc={getCoreFeatureImage(feature.visualKey)}
      eyebrow={feature.eyebrow}
      heading={feature.heading}
      body={feature.body}
      href={feature.href}
      cta={feature.cta}
    />
  ),
}));

export function CoreFeaturesSection() {
  const section = coreFeaturesSection;
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <section
      id="features"
      className="overflow-hidden px-container-padding py-section"
    >
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <Eyebrow label={section.eyebrow} />
            <FeaturePageHeading as="h2" variant="sectionTitleLg">
              {section.heading}
            </FeaturePageHeading>
          </div>
          <SliderNavButtons {...navButtonProps} />
        </div>

        <ContentSlider {...sliderProps} slides={slides} />
      </Container>
    </section>
  );
}
