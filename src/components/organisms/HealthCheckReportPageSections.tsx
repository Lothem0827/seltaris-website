import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";
import {
  healthCheckReportNextSteps,
  healthCheckReportOverview,
  healthCheckReportPageHero,
} from "@/lib/content/health-check-report";
import { getHealthCheckReportImage } from "@/lib/health-check-report-images";

export function HealthCheckReportPageHero() {
  return (
    <section className="px-container-padding pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="relative flex size-20 items-center justify-center rounded-radius-sm bg-brand-light">
            <Image
              src={assets.healthCheckReportPage.logo}
              alt="Health Check Report"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              {healthCheckReportPageHero.eyebrow}
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              {healthCheckReportPageHero.heading}
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              {healthCheckReportPageHero.subtitle}
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <div className="relative h-visual-wide w-full">
            <Image
              src={assets.healthCheckReportPage.heroMockup}
              alt="Health Check Report on MacBook"
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

export function HealthCheckReportOverviewSection() {
  const content = healthCheckReportOverview;

  return (
    <section className="px-container-padding pb-section">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-5 px-8">
            <Eyebrow label={content.eyebrow} />
            <FeaturePageHeading as="h2" variant="sectionTitle">
              {content.heading}
            </FeaturePageHeading>
          </div>
          <div className="relative hidden size-14 shrink-0 lg:block">
            <Image
              src={assets.healthCheckReportPage.logo}
              alt=""
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Text as="div" className="prose-stack px-8">
            {content.leftBody}
          </Text>
          <Text className="px-8 lg:pt-2">{content.rightBody}</Text>
        </div>

        <div className="overflow-hidden rounded-radius-panel border-4 border-brand">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={getHealthCheckReportImage("overviewPhoto")}
              alt="Team reviewing data quality report"
              fill
              className="object-cover"
              sizes="1200px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HealthCheckReportNextStepsSection() {
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <div className="rounded-radius-panel bg-brand-surface px-6 py-16 sm:px-12 lg:py-24">
          <div className="mx-auto flex max-w-content-wide flex-col gap-12">
            <FeaturePageHeading as="h2" variant="sectionTitle">
              Next Steps
            </FeaturePageHeading>

            <div className="grid gap-8 lg:grid-cols-3">
              {healthCheckReportNextSteps.map((step) => (
                <article key={step.id} className="flex flex-col gap-6">
                  <div className="relative aspect-[445/426] overflow-hidden rounded-radius-panel">
                    <Image
                      src={getHealthCheckReportImage(step.imageKey)}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="445px"
                    />
                  </div>
                  <Text as="div" className="prose-strong px-1.5">
                    <strong>{step.lead}</strong> {step.body}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
