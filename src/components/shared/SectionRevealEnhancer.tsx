"use client";

import { RevealOnView } from "@/components/shared/RevealOnView";
import { Children, isValidElement, type ReactNode } from "react";

type SectionRevealEnhancerProps = {
  children: ReactNode;
  /** Skip reveal on the first direct child (typically the page hero). */
  skipFirst?: boolean;
};

export function SectionRevealEnhancer({
  children,
  skipFirst = true,
}: SectionRevealEnhancerProps) {
  const items = Children.toArray(children);

  return (
    <>
      {items.map((child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const shouldSkip =
          (skipFirst && index === 0) ||
          (child.props as { "data-reveal"?: string })["data-reveal"] === "skip";

        if (shouldSkip) {
          return child;
        }

        return (
          <RevealOnView key={child.key ?? `section-reveal-${index}`}>
            {child}
          </RevealOnView>
        );
      })}
    </>
  );
}
