import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";

export function DataProtectionTeaserSection() {
  return (
    <section className="px-container-padding py-section">
      <Container className="flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-8 text-center">
          <IconSurface
            src="/icons/features/advanced-data-protection.svg"
            alt="Advanced Data Protection"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Advanced Data Protection
            </FeaturePageHeading>
            <FeaturePageHeading as="h2" variant="teaserTitle">
              Enterprise grade security.
              <br />
              <span className="text-brand">Built from the ground up.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              Your business is nobody else&apos;s. Not even GBG.
            </FeaturePageHeading>
          </div>
        </div>
        <Button href="/advanced-data-protection" variant="ghost" size="small">
          Learn more
        </Button>
      </Container>
    </section>
  );
}
