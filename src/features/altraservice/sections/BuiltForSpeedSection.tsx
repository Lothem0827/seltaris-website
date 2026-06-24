"use client";

import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/shared/SliderNavButtons";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/shared/ContentSlider";

const PERFORMANCE_SLIDES = [
  {
    id: "distributed",
    title: "Distributed computing",
    imageSrc: "/images/altraservice/altra-service-slider-1.svg",
    width: "wide" as const,
    body: (
      <>
        Altraservice™ distributed computing now enables us to break down large
        data files into smaller, manageable chunks. Each chunk is processed
        independently and simultaneously across an expansive network of
        powerful nodes, ensuring that even the most substantial data sets are
        handled with remarkable speed and efficiency. This parallel processing
        capability dramatically reduces the time required to complete
        data-intensive operations.
      </>
    ),
  },
  {
    id: "async",
    title: "Asynchronous communication patterns",
    imageSrc: "/images/altraservice/altra-service-slider-2.svg",
    width: "narrow" as const,
    body: (
      <>
        Altraservice™ asynchronous communication patterns further enhance our
        system&apos;s efficiency by allowing processes to run concurrently
        without waiting for the completion of previous tasks. This non-blocking
        approach minimises latency and maximises throughput, ensuring you have a
        seamless and swift data processing experience.
      </>
    ),
  },
  {
    id: "scale",
    title: "Designed to scale",
    imageSrc: "/images/altraservice/altra-service-slider-3.svg",
    width: "narrow" as const,
    body: (
      <>
        Seltaris is architected for massive scalability, dynamically expanding
        computational capacity by seamlessly orchestrating workloads across
        extensive server clusters. Powered by Altraservice™ within our cloud
        environment, it delivers exceptionally fast, precise data processing,
        effortlessly handling surges in demand with minimal latency.
      </>
    ),
  },
] as const;

const slides: SliderSlide[] = PERFORMANCE_SLIDES.map((slide) => ({
  type: "image",
  id: slide.id,
  item: {
    id: slide.id,
    title: slide.title,
    description: slide.body,
    imageSrc: slide.imageSrc,
    width: PERFORMANCE_SLIDES[0].width,
  },
}));

export function BuiltForSpeedSection() {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <section className="pb-section">
      <Container>
        <div className="flex flex-row items-end justify-between gap-6 sm:flex-col">
          <div className="flex max-w-xl flex-col gap-6">
            <FeaturePageHeading as="h2" variant="sectionTitleLg">
              Built for speed.
              <br />
              Born to perform.
            </FeaturePageHeading>
            <Text className="max-w-md text-paragraph">
              Explore the advanced processing techniques that power DataTools
              Seltaris to industry leading performance.
            </Text>
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
