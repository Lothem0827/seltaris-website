import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";

export function HeroSection() {
  return (
    <section className="px-container-padding pt-24 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface
            src="/icons/features/design-made-simple.svg"
            alt="Design made simple"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Design made simple
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              Innovation <span className="text-brand">for all.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              Built for everyone so anyone can use it.
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <div className="relative aspect-[1200/673] w-full lg:aspect-[3/2] sm:aspect-[4/3]">
            <Image
              src="/images/design-made-simple/hero-mockup.png"
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
