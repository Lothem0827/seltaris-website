import { AppImage as Image } from "@/components/atoms/AppImage";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { FeaturePageHeadingContainer } from "@/components/molecules/FeaturePageHeadingContainer";
import { AltraservicePerformanceSliderSection } from "@/components/organisms/AltraservicePerformanceSliderSection";
import { assets } from "@/lib/assets";
import {
  altraserviceEngineering,
  altraserviceMicroservice,
  altraservicePageHero,
  altraserviceSpeedIntro,
} from "@/lib/content/altraservice";
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

export function AltraservicePageHero() {
  return (
    <section className="px-container-padding pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <FeaturePageHeadingContainer
          logoSrc={assets.featureIcons.altraService}
          logoAlt="Altraservice"
          eyebrow={altraservicePageHero.eyebrow}
          heading={altraservicePageHero.heading}
          subtitle={altraservicePageHero.subtitle}
        />

        <div className="relative w-full max-w-container">
          <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[1200/673]">
            <Image
              src={assets.altraservicePage.heroMockup}
              alt="Seltaris dashboard"
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
              {altraserviceSpeedIntro.leftHeading}
            </FeaturePageHeading>
            <Text>{altraserviceSpeedIntro.leftBody}</Text>
          </div>
          <div className="px-8 lg:pt-2">
            <Text as="div" className="prose-stack px-8">
              {altraserviceSpeedIntro.rightBody}
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AltraserviceEngineeringSection() {
  const content = altraserviceEngineering;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-12">
        <div className="flex items-center justify-between gap-8 px-8">
          <FeaturePageHeading
            as="h2"
            variant="sectionTitleLg"
            className="text-brand"
          >
            {content.poweredByHeading}
          </FeaturePageHeading>
          <div className="relative h-20 w-[4.375rem] shrink-0">
            <Image
              src={assets.altraservicePage.altraserviceCube}
              alt=""
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-8 px-8">
            <FeaturePageHeading as="h3" variant="headingSmall">
              {content.leftHeading}
            </FeaturePageHeading>
            <Text>{content.leftBody}</Text>
          </div>
          <Text as="div" className="prose-stack px-8">
            {content.rightBody}
          </Text>
        </div>
      </Container>
    </section>
  );
}

export function AltraserviceEngineSection() {
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <FeatureImage
          src={assets.altraservicePage.engine}
          className="min-h-content-block lg:min-h-content-block-alt"
        />
      </Container>
    </section>
  );
}

export function AltraserviceMicroserviceSection() {
  const content = altraserviceMicroservice;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-4 px-8 text-center">
          <FeaturePageHeading as="h2" variant="sectionTitleXl">
            {content.heading}
          </FeaturePageHeading>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Text className="px-8">{content.leftBody}</Text>
          <Text className="px-8">{content.rightBody}</Text>
        </div>

        <FeatureImage
          src={assets.altraservicePage.macbook}
          className="min-h-content-block lg:min-h-content-block-md"
        />
      </Container>
    </section>
  );
}

export function AltraserviceBuiltForSpeedSection() {
  return <AltraservicePerformanceSliderSection />;
}
