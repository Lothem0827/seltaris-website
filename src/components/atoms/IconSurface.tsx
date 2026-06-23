import type { CSSProperties } from "react";
import { AppImage as Image } from "@/components/atoms/AppImage";
import { cn } from "@/lib/utils";

export type IconSurfaceSize = "feature" | "hero" | "nav";
export type IconSurfaceVariant = "brand" | "custom";

type IconSurfaceSizeConfig = {
  /** Outer square — background surface dimensions. */
  containerClass: string;
  /** Inner graphic — independent of container size. */
  image: { width: number; height: number };
};

/**
 * Per-variant layout. Adjust `containerClass` for the surface box and `image`
 * for the graphic inside it without coupling the two.
 */
const iconSurfaceSizes = {
  feature: {
    containerClass: "size-18",
    image: { width: 42, height: 42 },
  },
  hero: {
    containerClass: "size-20",
    image: { width: 48, height: 48 },
  },
  nav: {
    containerClass: "size-14",
    image: { width: 28, height: 28 },
  },
} as const satisfies Record<IconSurfaceSize, IconSurfaceSizeConfig>;

type IconSurfaceProps = {
  src: string;
  alt?: string;
  size?: IconSurfaceSize;
  /**
   * `brand` — default `bg-brand-light`.
   * `custom` — pass `backgroundClassName` and/or `backgroundStyle`.
   */
  variant?: IconSurfaceVariant;
  backgroundClassName?: string;
  backgroundStyle?: CSSProperties;
  className?: string;
};

const defaultBackgroundClass = "bg-brand-light";

function getSurfaceBackgroundClass(
  variant: IconSurfaceVariant,
  backgroundClassName?: string,
) {
  if (variant === "custom") {
    return backgroundClassName;
  }

  return defaultBackgroundClass;
}

export function IconSurface({
  src,
  alt = "",
  size = "feature",
  variant = "brand",
  backgroundClassName,
  backgroundStyle,
  className,
}: IconSurfaceProps) {
  const { containerClass, image } = iconSurfaceSizes[size];
  const backgroundClass = getSurfaceBackgroundClass(
    variant,
    backgroundClassName,
  );
  const surfaceStyle = variant === "custom" ? backgroundStyle : undefined;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-radius-md",
        containerClass,
        backgroundClass,
        className,
      )}
      style={surfaceStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={image.width}
        height={image.height}
        className="object-contain"
        style={{ width: image.width, height: image.height }}
        sizes={`${image.width}px`}
      />
    </div>
  );
}
