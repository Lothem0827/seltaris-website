import Image from "@/components/ui/Image";
import { Container } from "@/components/ui/Container";import { IconSurface } from "@/components/ui/IconSurface";

export function HeroSection() {
  return (
    <section className="pt-16 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <IconSurface src="/icons/features/health-check.svg"
            alt="Health Check Report"
            size="feature" />
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="type-24-semi text-brand">
              Health Check Report
            </p>
            <h1 className="type-48 text-text">
              Data quality at its
              <br />
              finest detail.
            </h1>
            <p className="type-18 text-paragraph">
              A comprehensive report about the data quality of your existing
              data.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <div className="relative aspect-[1200/673] w-full lg:aspect-[3/2] sm:aspect-[4/3]">
            <Image src="/images/health-check-report/hero-mockup.webp"
              alt="Health Check Report on MacBook"
              fill
              className="object-contain"
              sizes="1200px"
              priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
