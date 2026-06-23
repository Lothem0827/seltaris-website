"use client";

import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/molecules/SliderNavButtons";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/organisms/ContentSlider";
import {
  altraserviceBuiltForSpeed,
  altraservicePerformanceSlides,
} from "@/lib/content/altraservice";
import { getAltraservicePageImage } from "@/lib/altraservice-images";

const performanceSlideWidth = altraservicePerformanceSlides[0].width;

const slides: SliderSlide[] = altraservicePerformanceSlides.map((slide) => ({
  type: "image",
  id: slide.id,
  item: {
    id: slide.id,
    title: slide.title,
    description: slide.body,
    imageSrc: getAltraservicePageImage(slide.imageKey),
    width: performanceSlideWidth,
  },
}));

export function AltraservicePerformanceSliderSection() {
  const content = altraserviceBuiltForSpeed;
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <section className="pb-section">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex max-w-xl flex-col gap-6">
            <FeaturePageHeading as="h2" variant="sectionTitleLg">
              {content.heading}
            </FeaturePageHeading>
            <Text className="max-w-md text-paragraph">{content.subheading}</Text>
          </div>
          <SliderNavButtons {...navButtonProps} />
        </div>
      </Container>

      <div className="slider-track-bleed mt-12">
        <ContentSlider {...sliderProps} slides={slides} />
      </div>
    </section>
  );
}
