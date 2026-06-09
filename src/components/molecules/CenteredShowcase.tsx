import Image from "next/image";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ShowcaseSize = "default" | "tall" | "data" | "health";

const showcaseHeights: Record<ShowcaseSize, string> = {
  default: "h-showcase",
  tall: "h-showcase-tall",
  data: "h-showcase-data",
  health: "h-showcase-health",
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
      <div className="mx-auto max-w-3xl space-y-4">
        <Heading level="sectionDisplay">{title}</Heading>
        {subtitle ? (
          <Text variant="body" className="text-subheading font-semibold">
            {subtitle}
          </Text>
        ) : null}
      </div>
      <div
        className={cn(
          "relative w-full max-w-container",
          showcaseHeights[imageSize],
        )}
      >
        <Image src={imageSrc} alt={imageAlt} fill sizes="1200px" />
      </div>
    </div>
  );
}
