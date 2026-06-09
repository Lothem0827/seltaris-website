import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import {
  SeltarisPlusPlanCard,
  SeltarisPlusSupportCard,
} from "@/components/molecules/SeltarisPlusPlanCard";
import { assets } from "@/lib/assets";
import {
  seltarisPlusIncludedSection,
  seltarisPlusOfferings,
  seltarisPlusPageHero,
  seltarisPlusPlans,
  type SeltarisPlusOffering,
  type SeltarisPlusOfferingTone,
} from "@/lib/content/seltaris-plus";
import { getSeltarisPlusPageImage } from "@/lib/seltaris-plus-images";
import { cn } from "@/lib/utils";

const offeringIcons = {
  healthCheckIcon: assets.pricingIcons.health,
  dataProtectionIcon: assets.dataProtectionPage.bulletproofIcon,
  sharedLicensingIcon: assets.seltarisPlusPage.sharedLicensingIcon,
  volumeDiscountsIcon: assets.seltarisPlusPage.volumeDiscountsIcon,
} as const;

const offeringBackgrounds: Record<SeltarisPlusOfferingTone, string> = {
  health: "bg-offering-health",
  protection: "bg-offering-protection",
  licensing: "bg-offering-licensing",
  volume: "bg-offering-volume",
};

export function SeltarisPlusPageHero() {
  return (
    <section className="px-container-padding pt-16 pb-section">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative size-20">
            <Image
              src={assets.seltarisPlusPage.logo}
              alt="Seltaris+"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              {seltarisPlusPageHero.eyebrow}
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              {seltarisPlusPageHero.heading}
            </FeaturePageHeading>
            <Text className="mx-auto max-w-hero-body text-paragraph">
              {seltarisPlusPageHero.body}
            </Text>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-16">
          <div className="grid w-full max-w-plans-grid gap-6 lg:grid-cols-3 lg:items-start">
            {seltarisPlusPlans.map((plan) => (
              <SeltarisPlusPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <SeltarisPlusSupportCard />
        </div>
      </Container>
    </section>
  );
}

function OfferingCard({
  backgroundTone,
  iconKey,
  imageKey,
  heading,
  body,
  href,
}: SeltarisPlusOffering) {
  const iconSrc =
    offeringIcons[iconKey as keyof typeof offeringIcons] ??
    assets.seltarisPlusPage.logo;

  return (
    <article
      className={cn("grid-offering", offeringBackgrounds[backgroundTone])}
    >
      <div className="flex min-h-offering-panel flex-col justify-between p-12">
        <div className="space-y-8">
          <div className="relative size-icon-feature overflow-hidden rounded-radius-md bg-white">
            <Image
              src={iconSrc}
              alt=""
              fill
              className="object-contain p-3"
              sizes="60px"
            />
          </div>
          <div className="space-y-2">
            <FeaturePageHeading as="h2" variant="cardTitle">
              {heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle" className="text-left">
              {body}
            </FeaturePageHeading>
          </div>
        </div>
        <Link
          href={href}
          className="inline-flex w-fit items-center gap-3 font-body text-body-sm font-medium text-brand-accent"
        >
          Learn more
          <Image
            src={assets.learnMoreArrow}
            alt=""
            width={10}
            height={8}
            aria-hidden
          />
        </Link>
      </div>
      <div className="relative min-h-offering-image lg:min-h-offering-panel">
        <Image
          src={getSeltarisPlusPageImage(imageKey)}
          alt=""
          fill
          className="object-cover object-left-top"
          sizes="681px"
        />
      </div>
    </article>
  );
}

export function SeltarisPlusIncludedSection() {
  const section = seltarisPlusIncludedSection;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <FeaturePageHeading
            as="p"
            variant="bannerSubtitle"
            className="text-brand-accent"
          >
            {section.eyebrow}
          </FeaturePageHeading>
          <FeaturePageHeading as="h2" variant="sectionTitleLg">
            {section.heading}
          </FeaturePageHeading>
        </div>

        <div className="flex flex-col gap-8">
          {seltarisPlusOfferings.map((offering) => (
            <OfferingCard key={offering.id} {...offering} />
          ))}
        </div>
      </Container>
    </section>
  );
}
