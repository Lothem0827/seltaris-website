import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";

export function HeroSection() {
  return (
    <section className="pt-24 pb-section ">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface
            src="/icons/features/advanced-data-protection.svg"
            alt="Advanced Data Protection"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Advanced Data Protection
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              Enterprise grade security.
              <br />
              <span className="text-brand">Built from the ground up.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              Your business is nobody else&apos;s. Not even GBG.
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <div className="relative aspect-auto h-visual-data w-full lg:aspect-[3/2] lg:h-auto sm:aspect-[4/3]">
            <Image
              src="/images/data-protection/hero-banner.png"
              alt="Advanced Data Protection"
              fill
              className="object-contain"
              sizes="1216px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
