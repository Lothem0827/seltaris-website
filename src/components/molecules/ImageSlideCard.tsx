import Image from "next/image";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SlideCardWidth = "default" | "wide" | "narrow";

const widthClasses: Record<SlideCardWidth, string> = {
  default: "w-slide-card",
  wide: "w-slide-card sm:w-slide-card-wide",
  narrow: "w-slide-card sm:w-slide-card-narrow",
};

type ImageSlideCardProps = {
  imageSrc: string;
  title?: string;
  description: ReactNode;
  width?: SlideCardWidth;
  imageVariant?: "dark" | "light";
};

export function ImageSlideCard({
  imageSrc,
  title,
  description,
  width = "default",
  imageVariant = "dark",
}: ImageSlideCardProps) {
  return (
    <article
      className={cn("flex shrink-0 flex-col gap-4", widthClasses[width])}
    >
      <div
        className={cn(
          "relative h-[300px] w-full overflow-hidden rounded-radius-lg sm:h-card-slide",
          imageVariant === "light" && "border border-border",
        )}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover sm:object-contain"
          sizes="(max-width: 640px) 88vw, 604px"
        />
      </div>
      <div className="space-y-2 px-4 py-2">
        {title ? (
          <FeaturePageHeading as="h3" variant="slideTitle">
            {title}
          </FeaturePageHeading>
        ) : null}
        <Text className="prose-strong">{description}</Text>
      </div>
    </article>
  );
}
