import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export function EncryptedCloudCardSection() {
  return (
    <section className="pb-section">
      <Container>
        <div className="flex items-center justify-between overflow-hidden rounded-radius-panel bg-brand-surface">
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
              <FeaturePageHeading as="h2" variant="cardTitle">
                Encrypted
                <br />
                Cloud Computing™
              </FeaturePageHeading>
              <Text>
                Our most advanced cloud security architecture specifically built
                with enterprise in mind.
              </Text>
            </div>
          </div>
          <div
            className={cn(
              "banner-media min-h-split-content-lg rounded-radius-panel lg:min-h-split-content sm:hidden",
            )}
          >
            <Image
              src="/images/data-protection/encrypted-cloud.png"
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
