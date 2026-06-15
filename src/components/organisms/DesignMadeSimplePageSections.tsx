import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
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
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative size-20">
            <Image
              src={assets.designMadeSimplePage.logo}
              alt="Design made simple"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              {designMadeSimplePageHero.eyebrow}
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              {designMadeSimplePageHero.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              {designMadeSimplePageHero.subtitle}
            </FeaturePageHeading>
          </div>
        </div>

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
        <div className="relative size-20">
          <Image
            src={assets.dataProtectionPage.logo}
            alt="Advanced Data Protection"
            fill
            className="object-contain"
            sizes="80px"
          />
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          <FeaturePageHeading as="p" variant="pageEyebrow">
            {teaser.eyebrow}
          </FeaturePageHeading>
          <FeaturePageHeading as="h2" variant="teaserTitle">
            {teaser.heading}
          </FeaturePageHeading>
          <FeaturePageHeading as="p" variant="bannerSubtitle">
            {teaser.subheading}
          </FeaturePageHeading>
        </div>
        <Button href={teaser.cta.href} variant="secondary">
          {teaser.cta.label}
        </Button>
      </Container>
    </section>
  );
}
