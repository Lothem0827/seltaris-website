import Image from "@/components/ui/Image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export function PrivateKeysCardSection() {
  return (
    <section className="pb-section">
      <Container>
        <div className="flex items-center justify-between rounded-radius-panel bg-brand-surface">
          <div className="flex flex-col justify-between gap-8 p-12">
            <div className="space-y-6">
              <div className="relative size-icon-feature">
                <Image
                  src="/images/data-protection/bulletproof-icon.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="60px"
                />
              </div>
              <div className="space-y-2">
                <FeaturePageHeading as="h2" variant="cardTitle">
                  Private Keys
                </FeaturePageHeading>
                <FeaturePageHeading
                  as="p"
                  variant="bannerSubtitle"
                  className="text-left"
                >
                  The single key to your encrypted result file.
                </FeaturePageHeading>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "banner-media min-h-split-content-lg rounded-none lg:min-h-split-content sm:hidden",
            )}
          >
            <Image
              src="/images/data-protection/private-keys-card.png"
              alt=""
              fill
              className="object-cover"
              sizes="512px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
