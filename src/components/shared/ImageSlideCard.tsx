import Image from "@/components/ui/Image";import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SlideCardWidth = "default" | "wide" | "narrow";

const widthClasses: Record<SlideCardWidth, string> = {
  default: "w-slide-card",
  wide: "w-slide-card-wide sm:w-slide-card",
  narrow: "w-slide-card-narrow sm:w-slide-card",
};

const imageSizes: Record<SlideCardWidth, string> = {
  default: "(max-width: 640px) 88vw, 414px",
  wide: "(max-width: 640px) 90vw, 414px",
  narrow: "(max-width: 640px) 80vw, 320px",
};

type ImageSlideCardProps = {
  imageSrc: string;
  title?: string;
  description: ReactNode;
  width?: SlideCardWidth;
  priority?: boolean;
  loading?: "lazy" | "eager";
  imageAlt?: string;
};

export function ImageSlideCard({
  imageSrc,
  title,
  description,
  width = "default",
  priority,
  loading,
  imageAlt,
}: ImageSlideCardProps) {
  return (
    <article className={cn("group flex shrink-0 flex-col gap-4", widthClasses[width])}>
      <div className="slider-slide-image-frame relative isolate aspect-auto h-card-slide w-full overflow-hidden rounded-radius-lg sm:aspect-[4/3] sm:h-auto">
        <Image src={imageSrc}
          alt={imageAlt ?? title ?? ""}
          fill
          priority={priority}
          loading={loading}
          className="slider-slide-image rounded-radius-lg object-cover"
          sizes={imageSizes[width]} />
      </div>
      <div className="space-y-2 px-4 py-2">
        {title ? (
          <h3 className="type-24 text-text">
            {title}
          </h3>
        ) : null}
        <p className="type-16 text-paragraph prose-strong">{description}</p>
      </div>
    </article>
  );
}
