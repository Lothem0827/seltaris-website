import Image from "next/image";
import type { ReactNode } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";
import {
  humanTouchAltraserviceTeaser,
  humanTouchCoreTech,
  humanTouchFieldCorrections,
  humanTouchFinestDatasets,
  humanTouchGeographic,
  humanTouchGeographicRows,
  humanTouchIntuition,
  humanTouchOptiSource,
  humanTouchPageHero,
  humanTouchSmallDetailRows,
  humanTouchSmallDetails,
  humanTouchStandardisation,
  humanTouchUnverified,
  type HumanTouchSplitRow,
} from "@/lib/content/human-touch";
import { getHumanTouchPageImage } from "@/lib/human-touch-images";
import { cn } from "@/lib/utils";

function BannerImage({
  src,
  alt = "",
  children,
  className,
}: {
  src: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative mx-auto aspect-[4/3] w-full max-w-visual-hero overflow-hidden md:aspect-auto md:h-visual-hero">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain md:object-cover"
          sizes="(max-width: 768px) 100vw, 1600px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent px-6 pb-8 pt-24">
          {children}
        </div>
      </div>
    </div>
  );
}

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
    <div className={cn("banner-media", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4"
        sizes="512px"
      />
    </div>
  );
}

function SplitContentRow({
  imageSrc,
  imagePosition,
  children,
}: {
  imageSrc: string;
  imagePosition: "left" | "right";
  children: ReactNode;
}) {
  const image = <FeatureImage src={imageSrc} />;
  const text = (
    <div className="flex flex-col justify-center px-8 py-4 lg:px-8">
      <Text as="div" className="prose-list space-y-4">
        {children}
      </Text>
    </div>
  );

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
      {imagePosition === "left" ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}

function SplitRowsSection({ rows }: { rows: HumanTouchSplitRow[] }) {
  return (
    <div className="flex flex-col gap-20">
      {rows.map((row) => (
        <SplitContentRow
          key={row.id}
          imageSrc={getHumanTouchPageImage(row.imageKey)}
          imagePosition={row.imagePosition}
        >
          {row.content}
        </SplitContentRow>
      ))}
    </div>
  );
}

export function HumanTouchPageHero() {
  return (
    <section className="px-container-padding pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative size-20">
            <Image
              src={assets.humanTouchPage.humanTouchLogo}
              alt="Human Touch"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              {humanTouchPageHero.eyebrow}
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              {humanTouchPageHero.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              {humanTouchPageHero.subtitle}
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-container">
          <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[1200/673]">
            <Image
              src={assets.humanTouchPage.heroMockup}
              alt="Human Touch dashboard"
              fill
              className="object-contain"
              sizes="1200px"
              priority
            />
          </div>
        </div>

        <div className="grid w-full max-w-container gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6 px-8">
            <FeaturePageHeading as="h2" variant="headingSmall">
              {humanTouchCoreTech.leftHeading}
            </FeaturePageHeading>
            <Text>{humanTouchCoreTech.leftBody}</Text>
          </div>
          <div className="px-8 lg:pt-2">
            <Text>{humanTouchCoreTech.rightBody}</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HumanTouchIntuitionSection() {
  const section = humanTouchIntuition;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-16">
        <BannerImage src={getHumanTouchPageImage(section.bannerKey)}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              {section.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              {section.subheading}
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="px-8">
            <Text>{section.body}</Text>
          </div>
          <FeatureImage src={getHumanTouchPageImage(section.uiKey)} />
        </div>
      </Container>
    </section>
  );
}

export function HumanTouchSmallDetailsSection() {
  const section = humanTouchSmallDetails;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-20">
        <BannerImage src={getHumanTouchPageImage(section.bannerKey)}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              {section.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              {section.subheading}
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <SplitRowsSection rows={humanTouchSmallDetailRows} />
      </Container>
    </section>
  );
}

export function HumanTouchGeographicSection() {
  const section = humanTouchGeographic;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-20">
        <BannerImage src={getHumanTouchPageImage(section.bannerKey)}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              {section.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              {section.subheading}
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <SplitRowsSection rows={humanTouchGeographicRows} />
      </Container>
    </section>
  );
}

export function HumanTouchUnverifiedSection() {
  const section = humanTouchUnverified;
  const standardisation = humanTouchStandardisation;
  const fieldCorrections = humanTouchFieldCorrections;
  const finestDatasets = humanTouchFinestDatasets;

  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-20">
        <BannerImage src={getHumanTouchPageImage(section.bannerKey)}>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              {section.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              {section.subheading}
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <div className="flex flex-col gap-10">
          <div className="space-y-6 px-8">
            <Badge className="w-fit px-2 py-1">{standardisation.badge}</Badge>
            <FeaturePageHeading as="h3" variant="headingSplitMint">
              {standardisation.title}
            </FeaturePageHeading>
          </div>
          <FeatureImage
            src={getHumanTouchPageImage("standardisation")}
            className="min-h-content-block lg:min-h-content-block-md"
          />
          <div className="grid gap-12 lg:grid-cols-2">
            <Text className="px-8">{standardisation.leftBody}</Text>
            <Text className="px-8">{standardisation.rightBody}</Text>
          </div>
        </div>

        <SplitContentRow
          imageSrc={getHumanTouchPageImage("fieldCorrections")}
          imagePosition="left"
        >
          <Badge className="mb-6 w-fit px-2 py-1">
            {fieldCorrections.badge}
          </Badge>
          <FeaturePageHeading as="h3" variant="headingSplitDm" className="mb-6">
            {fieldCorrections.title}
          </FeaturePageHeading>
          {fieldCorrections.body}
        </SplitContentRow>

        <div className="flex flex-col gap-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <FeaturePageHeading as="h3" variant="bodyLead" className="px-8">
              {finestDatasets.heading}
            </FeaturePageHeading>
            <Text className="px-8">{finestDatasets.subheading}</Text>
          </div>
          <FeatureImage
            src={getHumanTouchPageImage("coreDiagram")}
            className="min-h-content-block lg:min-h-content-block-md"
          />
        </div>
      </Container>
    </section>
  );
}

export function HumanTouchOptiSourceSection() {
  const content = humanTouchOptiSource;
  return (
    <section className="px-container-padding py-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Eyebrow label={content.eyebrow} />
          <FeaturePageHeading as="h2" variant="bannerTitleWide">
            {content.heading}
          </FeaturePageHeading>
        </div>

        <FeatureImage
          src={assets.humanTouchPage.optisourceDiagram}
          className="min-h-content-block-lg lg:min-h-content-block-xl"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 px-8">
            <Eyebrow label={content.premium.eyebrow} />
            <div className="rounded-radius-xl border border-border bg-white p-8">
              <FeaturePageHeading as="p" variant="statLabel">
                {content.premium.statLabel}
              </FeaturePageHeading>
              <FeaturePageHeading as="p" variant="statValue" className="mt-2">
                {content.premium.statValue}
              </FeaturePageHeading>
            </div>
          </div>
          <div className="px-8">
            <Text>{content.premium.body}</Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HumanTouchAltraserviceTeaserSection() {
  const teaser = humanTouchAltraserviceTeaser;
  return (
    <section className="relative overflow-hidden px-container-padding py-section">
      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="relative size-20">
          <Image
            src={assets.humanTouchPage.featureAltraservice}
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
