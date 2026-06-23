import { AppImage as Image } from "@/components/atoms/AppImage";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { FeaturePageHeadingContainer } from "@/components/molecules/FeaturePageHeadingContainer";
import { assets } from "@/lib/assets";
import {
  designMadeSimpleDataProtectionTeaser,
  designMadeSimpleInnovation,
  designMadeSimplePageHero,
} from "@/lib/content/design-made-simple";

export function DesignMadeSimplePageHero() {
  return (
    <section className="px-container-padding pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <FeaturePageHeadingContainer
          logoSrc={assets.featureIcons.designMadeSimple}
          logoAlt="Design made simple"
          eyebrow={designMadeSimplePageHero.eyebrow}
          heading={designMadeSimplePageHero.heading}
          subtitle={designMadeSimplePageHero.subtitle}
        />

        <div className="relative w-full max-w-content-wide">
          <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[1200/673]">
            <Image
              src={assets.designMadeSimplePage.heroMockup}
              alt="Seltaris interface"
              fill
              className="object-contain"
              sizes="1200px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DesignMadeSimpleInnovationSection() {
  const content = designMadeSimpleInnovation;
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6 px-8">
            <FeaturePageHeading as="h2" variant="headingSmall">
              {content.leftHeading}
            </FeaturePageHeading>
            <Text>{content.leftSubheading}</Text>
          </div>
          <div className="px-8 lg:pt-2">
            <Text as="div" className="prose-stack">
              {content.rightBody}
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DesignMadeSimpleDataProtectionTeaserSection() {
  const teaser = designMadeSimpleDataProtectionTeaser;
  return (
    <section className="px-container-padding py-section">
      <Container className="flex flex-col items-center gap-10 text-center">
        <FeaturePageHeadingContainer
          logoSrc={assets.featureIcons.advancedDataProtection}
          logoAlt="Advanced Data Protection"
          eyebrow={teaser.eyebrow}
          heading={teaser.heading}
          subtitle={teaser.subheading}
          titleAs="h2"
          titleVariant="teaserTitle"
          subtitleVariant="bannerSubtitle"
          contentSpacing="compact"
        />
        <Button href={teaser.cta.href} variant="ghost" size="small">
          {teaser.cta.label}
        </Button>
      </Container>
    </section>
  );
}
