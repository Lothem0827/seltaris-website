import Image from "next/image";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SlideCardWidth = "default" | "wide" | "narrow";

const widthClasses: Record<SlideCardWidth, string> = {
  default: "w-slide-card",
  wide: "w-slide-card-wide sm:w-slide-card",
  narrow: "w-slide-card-narrow sm:w-slide-card",
};

type ImageSlideCardProps = {
  imageSrc: string;
  title?: string;
  description: ReactNode;
  width?: SlideCardWidth;
};

export function ImageSlideCard({
  imageSrc,
  title,
  description,
  width = "default",
}: ImageSlideCardProps) {
  return (
    <article
      className={cn("flex shrink-0 flex-col gap-4", widthClasses[width])}
    >
      <div className="relative isolate aspect-auto h-card-slide w-full overflow-hidden rounded-radius-lg sm:aspect-[4/3] sm:h-auto">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="rounded-radius-lg object-cover"
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
