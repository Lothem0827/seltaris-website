"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { CoreFeatureSlideCard } from "@/components/shared/CoreFeatureSlideCard";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/shared/SliderNavButtons";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/shared/ContentSlider";

const CORE_FEATURE_VISUALS = {
  humanTouchVisual: "/images/core-features/human-touch-visual.png",
  altraserviceVisual: "/images/core-features/altraservice-visual.png",
  dataProtectionVisual: "/images/core-features/data-protection-visual.png",
  designVisual: "/images/core-features/design-visual.png",
  healthCheckVisual: "/images/core-features/health-check-visual.png",
} as const;

const features = [
  {
    id: "human-touch",
    visualSrc: CORE_FEATURE_VISUALS.humanTouchVisual,
    eyebrow: "Human Touch™",
    heading: (
      <>
        The tool is innovative.
        <br />
        The experience is magical.
      </>
    ),
    body: "At the core of Seltaris lies our intuitive Human Touch Technology. This powerful software features large, highly capable intelligence models specifically tailored to read and process data as efficiently as humans do.",
    href: "/human-touch",
    cta: "Learn more",
  },
  {
    id: "altraservice",
    visualSrc: CORE_FEATURE_VISUALS.altraserviceVisual,
    eyebrow: "Altraservice™",
    heading: (
      <>
        Groundbreaking
        <br />
        Performance.
      </>
    ),
    body: "Feel the need. The need for processing speed. Our latest step in pushing the boundaries of batch processing data, this time in the direction of fast processing speeds.",
    href: "/altraservice",
    cta: "Learn more",
  },
  {
    id: "data-protection",
    visualSrc: CORE_FEATURE_VISUALS.dataProtectionVisual,
    eyebrow: "Advanced Data Protection",
    heading: (
      <>
        Enterprise grade security.
        <br />
        Built from the ground up.
      </>
    ),
    body: "Seltaris is meticulously designed to protect your data at every step. Integrated into the core of our secure cloud environment, it utilises advanced encryption processes to handle your data without ever storing it unencrypted.",
    href: "/advanced-data-protection",
    cta: "Learn more",
  },
  {
    id: "design",
    visualSrc: CORE_FEATURE_VISUALS.designVisual,
    eyebrow: "Design made simple",
    heading: "Innovation for all.",
    body: "The best innovations are built for everyone. We have always believed that data quality software should be simple.",
    href: "/design-made-simple",
    cta: "Learn more",
  },
  {
    id: "health-check",
    visualSrc: CORE_FEATURE_VISUALS.healthCheckVisual,
    eyebrow: "Health Check Report",
    heading: "Data quality at its finest detail.",
    body: "This Health Check Report delivers a clear and comprehensive assessment of your submitted address data delivered in an easy to read PDF, analysed through the Seltaris service.",
    href: "/address-quality-health-check-report",
    cta: "Learn more",
  },
] as const;

const slides: SliderSlide[] = features.map((feature) => ({
  type: "custom",
  id: feature.id,
  content: (
    <CoreFeatureSlideCard
      visualSrc={feature.visualSrc}
      eyebrow={feature.eyebrow}
      heading={feature.heading}
      body={feature.body}
      href={feature.href}
      cta={feature.cta}
    />
  ),
}));

export function CoreFeaturesSection() {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <section className="overflow-hidden py-section">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <Eyebrow label="Core Features" />
          <div className="flex flex-row items-end justify-between gap-6 sm:flex-col sm:items-start">
            <Heading level="sectionDisplay">
              Explore the core features
              <br />
              of <span className="text-brand">Seltaris</span>
            </Heading>
            <SliderNavButtons {...navButtonProps} />
          </div>
        </div>
        <ContentSlider {...sliderProps} slides={slides} />
      </Container>
    </section>
  );
}
