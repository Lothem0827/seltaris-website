import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";

export function HeroSection() {
  return (
    <section className="pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <IconSurface
            src="/icons/features/health-check.svg"
            alt="Health Check Report"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Health Check Report
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              Data quality at its
              <br />
              finest detail.
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              A comprehensive report about the data quality of your existing
              data.
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <div className="relative aspect-[1200/673] w-full lg:aspect-[3/2] sm:aspect-[4/3]">
            <Image
              src="/images/health-check-report/hero-mockup.png"
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
