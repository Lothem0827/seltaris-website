import { getImageAspectRatioStyle } from "@/lib/image-aspect-ratio-style";
import NextImage, { type ImageProps } from "next/image";
import type { CSSProperties } from "react";

export type { ImageProps };

export function Image({ style, className, ...props }: ImageProps) {
  const mergedStyle = getImageAspectRatioStyle(
    typeof className === "string" ? className : undefined,
    style as CSSProperties | undefined,
    {
      fill: props.fill,
      width: props.width,
      height: props.height,
    },
  );

  return (
    <NextImage {...props} className={className} style={mergedStyle} />
  );
}

export default Image;
