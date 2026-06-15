import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { DataProtectionWorkflowSliderSection } from "@/components/organisms/DataProtectionWorkflowSliderSection";
import { assets } from "@/lib/assets";
import {
  dataProtectionCloudIntro,
  dataProtectionDesignTeaser,
  dataProtectionEncryptedCloudCard,
  dataProtectionHowItWorks,
  dataProtectionPageHero,
  dataProtectionPrivateKeys,
  dataProtectionWhyBuilt,
} from "@/lib/content/data-protection";
import { cn } from "@/lib/utils";

function FeatureImage({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "banner-media",
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-contain p-4" sizes="512px" />
    </div>
  );
}

export function DataProtectionPageHero() {
  return (
    <section className="px-container-padding pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative size-20">
            <Image
              src={assets.dataProtectionPage.logo}
              alt="Advanced Data Protection"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              {dataProtectionPageHero.eyebrow}
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              {dataProtectionPageHero.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              {dataProtectionPageHero.subtitle}
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-auto lg:h-visual-data">
            <Image
              src={assets.dataProtectionPage.heroBanner}
              alt="Advanced Data Protection"
              fill
              className="object-contain"
              sizes="1216px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DataProtectionEncryptedCloudCardSection() {
  const content = dataProtectionEncryptedCloudCard;
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <div className="grid-split-content">
          <div className="flex flex-col justify-between gap-8 p-12">
            <div className="space-y-6">
              <div className="relative size-icon-feature">
                <Image
                  src={assets.dataProtectionPage.bulletproofIcon}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="60px"
                />
              </div>
              <FeaturePageHeading as="h2" variant="cardTitle">
                {content.heading}
              </FeaturePageHeading>
              <Text>{content.body}</Text>
            </div>
          </div>
          <FeatureImage
            src={assets.dataProtectionPage.encryptedCloud}
            className="min-h-split-content rounded-none lg:min-h-split-content-lg"
          />
        </div>
      </Container>
    </section>
  );
}

export function DataProtectionCloudIntroSection() {
  const intro = dataProtectionCloudIntro;
  const whyBuilt = dataProtectionWhyBuilt;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-16">
        <div className="grid-aside-layout">
          <div className="space-y-6 px-8">
            <Eyebrow label={intro.eyebrow} />
            <FeaturePageHeading as="h2" variant="sectionTitle">
              {intro.heading}
            </FeaturePageHeading>
          </div>
          <div className="relative mx-8 size-20 shrink-0 lg:mx-0">
            <Image
              src={assets.dataProtectionPage.logo}
              alt=""
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Text as="div" className="prose-stack px-8">
            {intro.leftBody}
          </Text>
          <Text as="div" className="prose-stack px-8">
            {intro.rightBody}
          </Text>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FeaturePageHeading as="h3" variant="sectionTitle" className="px-8">
            {whyBuilt.heading}
          </FeaturePageHeading>
          <div className="space-y-6 px-8">
            <Text>{whyBuilt.leftBody}</Text>
            <Text>{whyBuilt.rightBody}</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DataProtectionHowItWorksSection() {
  const content = dataProtectionHowItWorks;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FeaturePageHeading as="h2" variant="sectionTitle" className="px-8">
            {content.heading}
          </FeaturePageHeading>
          <div className="space-y-6 px-8">
            <Text>{content.leftBody}</Text>
            <Text>{content.rightBody}</Text>
          </div>
        </div>
        <DataProtectionWorkflowSliderSection />
      </Container>
    </section>
  );
}

export function DataProtectionPrivateKeysSection() {
  const content = dataProtectionPrivateKeys;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-16">
        <div className="grid-split-content">
          <div className="flex flex-col gap-8 p-12">
            <div className="relative size-icon-feature">
              <Image
                src={assets.dataProtectionPage.bulletproofIcon}
                alt=""
                fill
                className="object-contain"
                sizes="60px"
              />
            </div>
            <div className="space-y-4">
              <Eyebrow label={content.eyebrow} />
              <FeaturePageHeading as="p" variant="bannerSubtitle" className="text-left">
                {content.subheading}
              </FeaturePageHeading>
              <FeaturePageHeading as="h2" variant="sectionTitleLg">
                {content.heading}
              </FeaturePageHeading>
            </div>
          </div>
          <FeatureImage
            src={assets.dataProtectionPage.privateKeys}
            className="min-h-split-content rounded-none lg:min-h-split-content-lg"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 px-8">
            <Text className="font-semibold text-text">{content.intro}</Text>
            <Text as="div" className="prose-stack">
              {content.body}
            </Text>
          </div>
          <div className="space-y-6 px-8">
            <Text className="font-semibold text-text">
              {content.guaranteesHeading}
            </Text>
            <Text as="div">
              <ul className="list-disc space-y-3 pl-5">
                {content.guarantees.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Text>
            <Text>{content.closing}</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DataProtectionDesignTeaserSection() {
  const teaser = dataProtectionDesignTeaser;
  return (
    <section className="relative overflow-hidden px-container-padding py-section">
      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="relative size-20">
          <Image
            src={assets.humanTouchPage.featureDesign}
            alt=""
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
