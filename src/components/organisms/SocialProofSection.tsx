"use client";

import { type ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { SliderNavButtons, useSliderNav } from "@/components/molecules/SliderNavButtons";
import { ContentSlider, type SliderSlide } from "@/components/organisms/ContentSlider";
import {
  testimonialSlides,
  valuePropSlides,
} from "@/lib/content/sections";

function SliderBlock({
  label,
  title,
  slides,
}: {
  label: string;
  title: React.ReactNode;
  slides: SliderSlide[];
}) {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-label text-body-sm uppercase tracking-wide text-paragraph">
            {label}
          </p>
          <Heading level="h1" className="mt-2 max-w-xl">
            {title}
          </Heading>
        </div>
        <SliderNavButtons {...navButtonProps} />
      </div>
      <ContentSlider {...sliderProps} slides={slides} />
    </div>
  );
}

const valueSlides: SliderSlide[] = valuePropSlides.map((item) => ({
  type: "value",
  ...item,
}));

const testimonialSliderSlides: SliderSlide[] = testimonialSlides.map(
  (item) => ({
    type: "testimonial",
    ...item,
  }),
);

export function SocialProofSection() {
  return (
    <section className="bg-brand-surface/50 py-section">
      <Container className="flex flex-col gap-20">
        <SliderBlock
          label="Why Seltaris"
          title={
            <>
              Built for teams who need{" "}
              <span className="text-brand">results fast.</span>
            </>
          }
          slides={valueSlides}
        />
        <SliderBlock
          label="Customer stories"
          title={
            <>
              Trusted by organisations{" "}
              <span className="text-brand">across Australia.</span>
            </>
          }
          slides={testimonialSliderSlides}
        />
      </Container>
    </section>
  );
}
