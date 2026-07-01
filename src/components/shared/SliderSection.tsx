"use client";

import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SplitIntro } from "@/components/shared/SplitIntro";
import { RevealOnView } from "@/components/shared/RevealOnView";
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

        <RevealOnView staggerIndex={0}>
          <div
            className={cn(
              "flex gap-6",
              heading && navAlign === "header"
                ? "flex-row items-end justify-between sm:flex-col sm:items-stretch"
                : "flex-row justify-end",
            )}
          >
            {heading ? (
              <Heading as="h2" level="h1" className={headingClassName}>
                {heading}
              </Heading>
            ) : null}
            <SliderNavButtons {...navButtonProps} visible={showNav} />
          </div>
        </RevealOnView>

        <ContentSlider {...sliderProps} slides={slides} />

        {cta ? (
          <RevealOnView staggerIndex={2}>
            <div className="flex justify-center pt-4">
              <Button href={cta.href} variant={cta.variant ?? "primary"}>
                {cta.label}
              </Button>
            </div>
          </RevealOnView>
        ) : null}
      </Container>
    </section>
  );
}
