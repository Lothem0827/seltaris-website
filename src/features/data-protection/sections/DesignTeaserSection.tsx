import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";

export function DesignTeaserSection() {
  return (
    <section className="relative overflow-hidden px-container-padding py-section">
      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-8 text-center">
          <IconSurface
            src="/icons/features/design-made-simple.svg"
            alt="Design made simple"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Design made simple
            </FeaturePageHeading>
            <FeaturePageHeading as="h2" variant="teaserTitle">
              Innovation <span className="text-brand">for all.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              Built for everyone so anyone can use it.
            </FeaturePageHeading>
          </div>
        </div>
        <Button href="/design-made-simple" variant="ghost" size="small">
          Learn more
        </Button>
      </Container>
    </section>
  );
}
