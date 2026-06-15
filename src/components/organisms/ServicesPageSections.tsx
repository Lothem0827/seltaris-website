"use client";

import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { PricingCard } from "@/components/molecules/PricingCard";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { SliderNavButtons, useSliderNav } from "@/components/molecules/SliderNavButtons";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/organisms/ContentSlider";
import { assets } from "@/lib/assets";
import {
  servicesPageCategories,
  servicesPageCategoryCards,
  servicesPageHero,
  type ServiceCategory,
  type ServiceOffering,
  type ServiceOfferingIconKey,
} from "@/lib/content/services";

const offeringIcons: Record<ServiceOfferingIconKey, string> = {
  health: assets.pricingIcons.health,
  repaired: assets.pricingIcons.repaired,
  email: assets.serviceIcons.email,
  phone: assets.serviceIcons.phone,
  geocode: assets.serviceIcons.geocode,
};

const pricingSlideClass = "w-[min(calc(100vw-3rem),24rem)] shrink-0";

function buildOfferingSlides(offerings: ServiceOffering[]): SliderSlide[] {
  return offerings.map((offering) => ({
    type: "custom",
    id: offering.id,
    content: (
      <div className={pricingSlideClass}>
        <PricingCard
          label={offering.label}
          tone={offering.tone}
          iconSrc={offeringIcons[offering.iconKey]}
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

export function ServicesPageHero() {
  return (
    <section className="bg-brand-light py-section">
      <Container className="flex flex-col gap-12">
        <FeaturePageHeading as="h1" variant="sectionTitle">
          {servicesPageHero.heading}
        </FeaturePageHeading>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicesPageCategoryCards.map((category) => (
            <Link key={category.id} href={`#${category.id}`} className="block h-full">
              <ServiceCard
                title={category.title}
                description={category.description}
                iconSrc={assets.serviceIcons[category.iconKey]}
                comingSoon={category.comingSoon}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServicesPageCategorySection({
  category,
}: {
  category: ServiceCategory;
}) {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <section
      id={category.id}
      className="scroll-mt-24 overflow-hidden py-section"
    >
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl flex flex-col gap-2">
            <FeaturePageHeading as="h2" variant="sectionTitle">
              {category.title}
            </FeaturePageHeading>
            <Text>{category.intro}</Text>
          </div>

          <div className="flex justify-end">
            <SliderNavButtons {...navButtonProps} />
          </div>
        </div>

        <ContentSlider
          {...sliderProps}
          slides={buildOfferingSlides(category.offerings)}
        />
      </Container>
    </section>
  );
}

export function ServicesPageCategories() {
  return (
    <>
      {servicesPageCategories.map((category) => (
        <ServicesPageCategorySection key={category.id} category={category} />
      ))}
    </>
  );
}
