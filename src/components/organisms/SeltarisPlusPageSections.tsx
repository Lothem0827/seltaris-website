import { AppImage as Image } from "@/components/atoms/AppImage";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { FeaturePageHeadingContainer } from "@/components/molecules/FeaturePageHeadingContainer";
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
  healthCheckIcon: assets.seltarisPlusPage.healthCheckIcon,
  dataProtectionIcon: assets.seltarisPlusPage.dataProtectionIcon,
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
        <FeaturePageHeadingContainer
          logoSrc={assets.featureIcons.seltaris}
          logoAlt="Seltaris+"
          eyebrow={seltarisPlusPageHero.eyebrow}
          heading={seltarisPlusPageHero.heading}
        >
          <Text className="mx-auto max-w-hero-body text-paragraph">
            {seltarisPlusPageHero.body}
          </Text>
        </FeaturePageHeadingContainer>

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
          <Image
            src={iconSrc}
            alt=""
            width={60}
            height={60}
            className="object-contain"
            style={{ width: 60, height: 60 }}
            sizes="60px"
          />
          <div className="space-y-2">
            <FeaturePageHeading as="h2" variant="cardTitle">
              {heading}
            </FeaturePageHeading>
            <FeaturePageHeading
              as="p"
              variant="bannerSubtitle"
              className="text-left"
            >
              {body}
            </FeaturePageHeading>
          </div>
        </div>
        <Button href={href} variant="ghost" size="small">
          Learn more
        </Button>
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
            className="text-brand"
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
