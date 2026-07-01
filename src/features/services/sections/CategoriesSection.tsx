"use client";

import type {
  ServiceCategory,
  ServiceOffering,
} from "@/features/services/service-categories.content";
import { PricingCard } from "@/components/shared/PricingCard";
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

const pricingSlideClass =
  "w-[min(calc(100vw-3rem),24rem)] shrink-0 transition-transform duration-300 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100";

function buildOfferingSlides(offerings: ServiceOffering[]): SliderSlide[] {
  return offerings.map((offering) => ({
    type: "custom",
    id: offering.id,
    content: (
      <div className={pricingSlideClass}>
        <PricingCard
          label={offering.label}
          tone={offering.tone}
          iconSrc={offering.iconSrc}
          title={offering.title}
          description={offering.description}
          features={offering.features}
          footerNote={offering.footerNote}
          learnMoreHref={offering.learnMoreHref}
          cta={offering.cta}
          showAustralia={offering.showAustralia}
          showNewZealand={offering.showNewZealand}
          showInternational={offering.showInternational}
        />
      </div>
    ),
  }));
}

export function CategorySection({ category }: { category: ServiceCategory }) {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <section
      id={category.id}
      className="scroll-mt-24 overflow-hidden py-section"
    >
      <Container className="flex flex-col gap-12">
        <div className="flex flex-row items-center justify-between gap-6 sm:flex-col">
          <div className="flex max-w-xl flex-col gap-2">
            <FeaturePageHeading as="h2" variant="sectionTitle">
              {category.title}
            </FeaturePageHeading>
            <Text>{category.intro}</Text>
          </div>

          <SliderNavButtons {...navButtonProps} />
        </div>

        <ContentSlider
          {...sliderProps}
          slides={buildOfferingSlides(category.offerings)}
          staggerSlides={false}
        />
      </Container>
    </section>
  );
}
