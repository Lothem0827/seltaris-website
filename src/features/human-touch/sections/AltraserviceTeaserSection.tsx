import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";

export function AltraserviceTeaserSection() {
  return (
    <section className="relative overflow-hidden px-container-padding py-section">
      <Container className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-8 text-center">
          <IconSurface
            src="/icons/features/altra-service.svg"
            alt="Altraservice"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Altraservice™
            </FeaturePageHeading>
            <FeaturePageHeading as="h2" variant="teaserTitle">
              Groundbreaking <span className="text-brand">Performance.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              The Fastest Addressing Batch Processor We&apos;ve Ever Created
            </FeaturePageHeading>
          </div>
        </div>
        <Button href="/altraservice" variant="ghost" size="small">
          Learn more
        </Button>
      </Container>
    </section>
  );
}
