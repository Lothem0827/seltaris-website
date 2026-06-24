"use client";

import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SplitIntro } from "@/components/shared/SplitIntro";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/shared/SliderNavButtons";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/shared/ContentSlider";
import type { SplitIntroContent } from "@/lib/types/slider";
import { cn } from "@/lib/utils";

type SliderSectionProps = {
  id?: string;
  intro?: SplitIntroContent;
  heading?: ReactNode;
  headingClassName?: string;
  navAlign?: "header" | "end";
  slides: SliderSlide[];
  cta?: { label: string; href: string; variant?: "primary" | "secondary" };
  className?: string;
  backgroundClassName?: string;
};

export function SliderSection({
  id,
  intro,
  heading,
  headingClassName,
  navAlign = "header",
  slides,
  cta,
  className,
  backgroundClassName,
}: SliderSectionProps) {
  const { navButtonProps, sliderProps } = useSliderNav();
  const showNav = slides.length > 1;

  return (
    <section
      id={id}
      className={cn(
        "overflow-hidden py-section",
        backgroundClassName,
        className,
      )}
    >
      <Container className="flex flex-col gap-12">
        {intro ? <SplitIntro {...intro} /> : null}

        <div
          className={cn(
            "flex flex-col gap-6",
            heading && navAlign === "header"
              ? "flex-row items-end justify-between sm:flex-col sm:items-stretch"
              : "items-start",
          )}
        >
          {heading ? (
            <Heading level="h1" className={headingClassName}>
              {heading}
            </Heading>
          ) : null}
          <SliderNavButtons {...navButtonProps} visible={showNav} />
        </div>

        <ContentSlider {...sliderProps} slides={slides} />

        {cta ? (
          <div className="flex justify-center pt-4">
            <Button href={cta.href} variant={cta.variant ?? "primary"}>
              {cta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
