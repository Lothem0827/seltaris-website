import type { ReactNode } from "react";
import Image from "@/components/ui/Image";
import { cn } from "@/lib/utils";

export function BannerImage({
  src,
  alt = "",
  children,
  className,
}: {
  src: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2",
        className,
      )}
    >
      <div className="relative aspect-auto h-visual-hero w-full overflow-hidden md:aspect-[4/3] md:h-auto">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent px-6 pb-8 pt-24">
          {children}
        </div>
      </div>
    </div>
  );
}

export function FeatureImage({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={cn("banner-media sm:h-fit", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="512px"
      />
    </div>
  );
}
