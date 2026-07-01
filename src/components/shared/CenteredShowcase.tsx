import Image from "@/components/ui/Image";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ShowcaseSize = "default" | "tall" | "data" | "health";

const showcaseHeights: Record<ShowcaseSize, string> = {
  default: "aspect-auto h-showcase md:aspect-[4/3] md:h-auto",
  tall: "aspect-auto h-showcase-tall md:aspect-[3/4] md:h-auto",
  data: "aspect-auto h-showcase-data md:aspect-[4/3] md:h-auto",
  health: "aspect-auto h-showcase-health md:aspect-[4/3] md:h-auto",
};

type CenteredShowcaseProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imageSize?: ShowcaseSize;
  className?: string;
};

export function CenteredShowcase({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  imageSize = "default",
  className,
}: CenteredShowcaseProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-12 text-center", className)}
    >
      <RevealOnView staggerIndex={0} className="mx-auto max-w-3xl space-y-4">
        <Heading level="sectionDisplay">{title}</Heading>
        {subtitle ? (
          <Text variant="body" className="text-subheading font-semibold">
            {subtitle}
          </Text>
        ) : null}
      </RevealOnView>
      <RevealOnView
        staggerIndex={1}
        className={cn(
          "relative w-full max-w-container overflow-hidden rounded-radius-lg",
          showcaseHeights[imageSize],
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </RevealOnView>
    </div>
  );
}
