import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { DesignMadeSimpleAnimation } from "@/components/svg-animations/DesignMadeSimpleAnimation";

export function HeroSection() {
  return (
    <section className="pt-24 pb-section">
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
          <DesignMadeSimpleAnimation />
        </div>
      </Container>
    </section>
  );
}
