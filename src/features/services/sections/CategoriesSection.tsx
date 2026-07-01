"use client";

import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import type { ServiceCategoryId } from "@/features/services/service-routes";
import type { PricingCardTone } from "@/components/shared/PricingCard";
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

type ServiceOffering = {
  id: string;
  label: string;
  tone: PricingCardTone;
  iconSrc: string;
  title: string;
  description: string;
  features: string[];
  footerNote?: string;
  learnMoreHref?: string;
  cta: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
  };
  showAustralia?: boolean;
  showNewZealand?: boolean;
  showInternational?: boolean;
};

type ServiceCategory = {
  id: ServiceCategoryId;
  title: string;
  intro: string;
  offerings: ServiceOffering[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "address-data",
    title: "Address data",
    intro:
      "Seltaris formats, cleanses, repairs, verifies, enhances, and standardises addresses. Transform your existing datasets into accurate, reliable information for mailing, logistics, compliance, and more.",
    offerings: [
      {
        id: "hcr-au",
        label: "Health check report",
        tone: "success",
        iconSrc: "/images/home/pricing-icon-health.png",
        title: "Address Quality Health Check Report",
        description:
          "Test your Australian data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase.",
        features: [
          "1x Health Check Report",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-quality-health-check-report",
        showAustralia: true,
        cta: {
          label: "Get started",
          href: SELTARIS_LOGIN_URL,
        },
      },
      {
        id: "hcr-nz",
        label: "Health check report",
        tone: "success",
        iconSrc: "/images/home/pricing-icon-health.png",
        title: "Address Quality Health Check Report",
        description:
          "Test your New Zealand data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase.",
        features: [
          "1x Health Check Report",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-quality-health-check-report",
        showNewZealand: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "repaired-intl",
        label: "Repaired file only",
        tone: "default",
        iconSrc: "/images/home/pricing-icon-repaired.png",
        title: "Address Validation",
        description:
          "Validate, Repair and Standardise. Improve the quality of your International address data.",
        features: [
          "Validate & Repair addresses",
          "Standardisation of all addresses",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-validation",
        showInternational: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "repaired-au",
        label: "Repaired file only",
        tone: "default",
        iconSrc: "/images/home/pricing-icon-repaired.png",
        title: "Address Validation",
        description:
          "Validate, Repair and Standardise. Improve the quality of your Australian address data.",
        features: [
          "Validate & Repair addresses",
          "Standardisation of all addresses",
          "1x Repaired file available for purchase",
        ],
        footerNote:
          "Only accessible after completing your Address Quality Health Check Report – Australia.",
        learnMoreHref: "/address-validation",
        showAustralia: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "repaired-nz",
        label: "Repaired file only",
        tone: "default",
        iconSrc: "/images/home/pricing-icon-repaired.png",
        title: "Address Validation",
        description:
          "Validate, Repair and Standardise. Improve the quality of your New Zealand address data.",
        features: [
          "Validate & Repair addresses",
          "Standardisation of all addresses",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-validation",
        showNewZealand: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
  {
    id: "email-data",
    title: "Email address data",
    intro:
      "Seltaris validates and verifies email addresses. Eliminate invalid, disposable, or risky emails to ensure your datasets are accurate, deliverable, and ready for reliable communication, marketing, compliance, and more.",
    offerings: [
      {
        id: "email-intl",
        label: "Validated file only",
        tone: "default",
        iconSrc: "/images/home/service-icon-email.png",
        title: "Email Validation",
        description:
          "Validate email delivery status. Improve the quality of your email addresses.",
        features: [
          "Validate email delivery status",
          "1x Repaired file available for purchase",
        ],
        showInternational: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
  {
    id: "phone-data",
    title: "Phone number data",
    intro:
      "Seltaris validates and verifies phone numbers. Ensure they are active, accurate, and correctly identified as landline or mobile. Transform your datasets into reliable information for sales, customer service, compliance, and more.",
    offerings: [
      {
        id: "phone-intl",
        label: "Validated file only",
        tone: "default",
        iconSrc: "/images/home/service-icon-phone.png",
        title: "Phone Validation",
        description:
          "Validate phone number connection status. Improve the quality of your phone numbers.",
        features: [
          "Validate phone number connection status",
          "1x Repaired file available for purchase",
        ],
        showInternational: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
  {
    id: "geocode-data",
    title: "Geocode appending",
    intro:
      "Seltaris appends precise latitude and longitude coordinates to every validated address. Transform your datasets into accurate, mappable information for logistics, delivery, analytics, compliance, and more.",
    offerings: [
      {
        id: "geocode-au",
        label: "Appended file only",
        tone: "default",
        iconSrc: "/images/home/service-icon-geocode.png",
        title: "Geocode Appending",
        description:
          "Add latitude and longitude coordinates to every validated address, giving you geocodes across Australia.",
        features: [
          "Appending geocodes",
          "1x Repaired file available for purchase",
        ],
        showAustralia: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "geocode-nz",
        label: "Appended file only",
        tone: "default",
        iconSrc: "/images/home/service-icon-geocode.png",
        title: "Geocode Appending",
        description:
          "Add latitude and longitude coordinates to every validated address, giving you geocodes across New Zealand.",
        features: [
          "Appending geocodes",
          "1x Repaired file available for purchase",
        ],
        showNewZealand: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
];

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

function CategorySection({ category }: { category: ServiceCategory }) {
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
        />
      </Container>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <>
      {SERVICE_CATEGORIES.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </>
  );
}
