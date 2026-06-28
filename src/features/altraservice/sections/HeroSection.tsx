import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { Text } from "@/components/ui/Text";

export function HeroSection() {
  return (
    <section className="pt-24 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface
            src="/icons/features/altra-service.svg"
            alt="Altraservice"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Altraservice™
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              Groundbreaking
              <br />
              <span className="text-brand">Performance.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              The Fastest Addressing Batch Processor We&apos;ve Ever Created
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-container">
          <div className="relative aspect-[1200/673] w-full lg:aspect-[3/2] sm:aspect-[4/3]">
            <Image
              src="/images/altraservice/hero-mockup.png"
              alt="Seltaris dashboard"
              fill
              className="object-contain"
              sizes="1200px"
              priority
            />
          </div>
        </div>

        <div className="grid w-full max-w-container grid-cols-2 items-start gap-16 lg:grid-cols-1 lg:gap-12">
          <div className="space-y-6 px-8">
            <FeaturePageHeading as="h2" variant="headingSmall">
              Feel the need.
              <br />
              The need for processing speed.
            </FeaturePageHeading>
            <Text>
              Our latest step in pushing the boundaries of batch processing
              data, this time in the direction of fast processing speeds.
            </Text>
          </div>
          <div className="px-8 pt-2 lg:pt-0">
            <Text as="div" className="prose-stack px-8">
              <p>
                Over the past few years, we have dedicated substantial effort to
                optimising efficiency at every layer of our cloud technology
                stack.
              </p>
              <p className="mt-6">
                As a result, we are proud to announce that Seltaris sets new
                industry standards, delivering unprecedented speed and
                reliability for all your data processing needs.
              </p>
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}
