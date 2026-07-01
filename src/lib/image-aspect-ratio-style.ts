import type { CSSProperties } from "react";

const HEIGHT_FIXED =
  /\b(h-(?:\d+(?:\.\d+)?|\[[^\]]+\])|max-h-(?:\d+|\[[^\]]+\])|h-full)\b/;
const WIDTH_FIXED =
  /\b(w-(?:\d+(?:\.\d+)?|\[[^\]]+\])|max-w-(?:\d+|\[[^\]]+\])|w-full|w-screen)\b/;
const HEIGHT_AUTO = /\bh-auto\b/;
const WIDTH_AUTO = /\bw-auto\b/;
const SIZE_UTILITY = /\bsize-(?:\d+|\[[^\]]+\]|full)\b/;

type ImageAspectRatioOptions = {
  fill?: boolean;
  width?: number | `${number}` | string;
  height?: number | `${number}` | string;
};

/**
 * Next.js warns when `width`/`height` props are paired with CSS that resizes only
 * one axis. It does not read Tailwind classes, so we mirror the intent inline.
 */
export function getImageAspectRatioStyle(
  className: string | undefined,
  style: CSSProperties | undefined,
  options: ImageAspectRatioOptions,
): CSSProperties | undefined {
  if (options.fill) {
    return style;
  }

  if (options.width == null || options.height == null) {
    return style;
  }

  const existing = style ?? {};

  if (existing.width !== undefined && existing.height !== undefined) {
    return style;
  }

  const cn = className ?? "";

  if (SIZE_UTILITY.test(cn)) {
    return style;
  }

  const hasFixedHeight = HEIGHT_FIXED.test(cn) && !HEIGHT_AUTO.test(cn);
  const hasFixedWidth = WIDTH_FIXED.test(cn) && !WIDTH_AUTO.test(cn);
  const hasHeightAuto = HEIGHT_AUTO.test(cn);
  const hasWidthAuto = WIDTH_AUTO.test(cn);

  const patch: CSSProperties = {};

  if (
    hasFixedHeight &&
    existing.width === undefined &&
    (!hasFixedWidth || hasWidthAuto)
  ) {
    patch.width = "auto";
  }

  if (
    hasFixedWidth &&
    existing.height === undefined &&
    (!hasFixedHeight || hasHeightAuto)
  ) {
    patch.height = "auto";
  }

  if (Object.keys(patch).length === 0) {
    return style;
  }

  return { ...patch, ...existing };
}
