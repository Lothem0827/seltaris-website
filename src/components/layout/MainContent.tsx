import { SectionRevealEnhancer } from "@/components/shared/SectionRevealEnhancer";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MainContentProps = {
  children: ReactNode;
  className?: string;
  /**
   * Reveal each direct child with fade + slide up on scroll.
   * Disable on pages that define their own reveal choreography (e.g. homepage).
   */
  sectionReveal?: boolean;
};

export function MainContent({
  children,
  className,
  sectionReveal = true,
}: MainContentProps) {
  return (
    <main id="main-content" className={cn(className)}>
      {sectionReveal ? (
        <SectionRevealEnhancer>{children}</SectionRevealEnhancer>
      ) : (
        children
      )}
    </main>
  );
}
