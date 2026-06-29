import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { cn } from "@/lib/utils";

type SeltarisPlusOfferingTone =
  | "health"
  | "protection"
  | "licensing"
  | "volume";

type SeltarisPlusOffering = {
  id: string;
  iconSrc: string;
  imageSrc: string;
  backgroundTone: SeltarisPlusOfferingTone;
  heading: ReactNode;
  body: string;
  href: string;
};

const offeringBackgrounds: Record<SeltarisPlusOfferingTone, string> = {
  health: "bg-offering-health",
  protection: "bg-offering-protection",
  licensing: "bg-offering-licensing",
  volume: "bg-offering-volume",
};

const seltarisPlusOfferings: SeltarisPlusOffering[] = [
  {
    id: "health-check",
    iconSrc: "/images/seltaris-plus/health-check-filled.svg",
    imageSrc: "/images/seltaris-plus/health-check-visual.png",
    backgroundTone: "health",
    heading: "Health Check Report",
    body: "Get the full picture of your existing data.",
    href: "/health-check-report",
  },
  {
    id: "data-protection",
    iconSrc: "/images/seltaris-plus/advanced-data-protection-filled.svg",
    imageSrc: "/images/seltaris-plus/data-protection-visual.png",
    backgroundTone: "protection",
    heading: (
      <>
        Advanced
        <br />
        Data Protection
      </>
    ),
    body: "Enterprise grade security. Built from the ground up.",
    href: "/advanced-data-protection",
  },
  {
    id: "shared-licensing",
    iconSrc: "/images/seltaris-plus/shared-licensing.svg",
    imageSrc: "/images/seltaris-plus/shared-licensing-visual.png",
    backgroundTone: "licensing",
    heading: "Shared licensing",
    body: "Sharing is caring. So everyone can start repairing.",
    href: "#contact",
  },
  {
    id: "volume-discounts",
    iconSrc: "/images/seltaris-plus/volume-discounts.svg",
    imageSrc: "/images/seltaris-plus/volume-discounts-visual.png",
    backgroundTone: "volume",
    heading: "Volume discounts",
    body: "Buying big volumes of clean data? You deserve some credit.",
    href: "#contact",
  },
];

function OfferingCard({
  backgroundTone,
  iconSrc,
  imageSrc,
  heading,
  body,
  href,
}: SeltarisPlusOffering) {
  return (
    <article
      className={cn("grid-offering", offeringBackgrounds[backgroundTone])}
    >
      <div className="flex min-h-offering-panel flex-col justify-between p-12 sm:min-h-fit ">
        <div className="space-y-8">
          <Image
            src={iconSrc}
            alt=""
            width={60}
            height={60}
            className="object-contain"
            style={{ width: 60, height: 60 }}
            sizes="60px"
          />
          <div className="space-y-2">
            <FeaturePageHeading as="h2" variant="cardTitle">
              {heading}
            </FeaturePageHeading>
            <FeaturePageHeading
              as="p"
              variant="bannerSubtitle"
              className="text-left"
            >
              {body}
            </FeaturePageHeading>
          </div>
        </div>
        <Button href={href} variant="ghost" size="small" className="sm:mt-6">
          Learn more
        </Button>
      </div>
      <div className="relative min-h-offering-panel lg:min-h-offering-image">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="681px"
        />
      </div>
    </article>
  );
}

export function SeltarisPlusIncludedSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <FeaturePageHeading
            as="p"
            variant="bannerSubtitle"
            className="text-brand"
          >
            What&apos;s included in Seltaris+
          </FeaturePageHeading>
          <FeaturePageHeading as="h2" variant="sectionTitleLg">
            <>
              Learn more about the
              <br />
              core offerings of <span className="text-brand">Seltaris+</span>
            </>
          </FeaturePageHeading>
        </div>

        <div className="flex flex-col gap-8">
          {seltarisPlusOfferings.map((offering) => (
            <OfferingCard key={offering.id} {...offering} />
          ))}
        </div>
      </Container>
    </section>
  );
}
