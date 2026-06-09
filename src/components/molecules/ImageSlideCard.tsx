import Image from "next/image";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SlideCardWidth = "default" | "wide" | "narrow";

const widthClasses: Record<SlideCardWidth, string> = {
  default: "w-slide-card",
  wide: "w-slide-card-wide",
  narrow: "w-slide-card-narrow",
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
    <article className={cn("flex shrink-0 flex-col gap-4", widthClasses[width])}>
      <div
        className={cn(
          "relative h-card-slide w-full overflow-hidden rounded-radius-xl",
          imageVariant === "dark" ? "bg-card-dark" : "border border-border bg-white",
        )}
      >
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="604px" />
      </div>
      <div className="space-y-4 px-4 py-2">
        {title ? (
          <FeaturePageHeading as="h3" variant="slideTitle">
            {title}
          </FeaturePageHeading>
        ) : null}
        <Text className="prose-strong">
          {description}
        </Text>
      </div>
    </article>
  );
}
