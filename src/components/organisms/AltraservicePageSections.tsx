import { AppImage as Image } from "@/components/atoms/AppImage";
import { Container } from "@/components/atoms/Container";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { FeaturePageHeadingContainer } from "@/components/molecules/FeaturePageHeadingContainer";
import { AltraservicePerformanceSliderSection } from "@/components/organisms/AltraservicePerformanceSliderSection";
import { assets } from "@/lib/assets";
import {
  altraserviceBuiltForSpeed,
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
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative h-12 w-logo-strip">
            <Image
              src={assets.altraservicePage.poweredBy}
              alt="Powered by GBG Altraservice"
              fill
              className="object-contain"
              sizes="320px"
            />
          </div>
          <FeaturePageHeading as="h2" variant="headingMedium" className="max-w-3xl">
            {content.leftHeading}
          </FeaturePageHeading>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Text className="px-8">{content.leftBody}</Text>
            <Text as="div" className="prose-stack prose-strong px-8">
            {content.rightBody}
          </Text>
        </div>

        <FeatureImage
          src={assets.altraservicePage.gbgAltraservice}
          className="min-h-content-block lg:min-h-content-block-md"
        />
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

        <FeatureImage
          src={assets.altraservicePage.macbook}
          className="min-h-content-block lg:min-h-content-block-md"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Text className="px-8">{content.leftBody}</Text>
          <Text className="px-8">{content.rightBody}</Text>
        </div>
      </Container>
    </section>
  );
}

export function AltraserviceBuiltForSpeedSection() {
  const content = altraserviceBuiltForSpeed;
  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <FeaturePageHeading as="h2" variant="sectionTitleLg">
            {content.heading}
          </FeaturePageHeading>
          <Text className="text-paragraph">{content.subheading}</Text>
        </div>
        <AltraservicePerformanceSliderSection />
      </Container>
    </section>
  );
}
