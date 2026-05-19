"use client";

import { useRef, type ReactNode } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/ui/Container";
import { SliderNavButton } from "@/components/ui/SliderNavButton";
import { cn } from "@/lib/cn";

import "swiper/css";

type SliderSectionLayoutProps = {
  eyebrow?: string;
  title: ReactNode;
  prevButton: string;
  nextButton: string;
  slides: ReactNode[];
  slideKeys: string[];
  className?: string;
  containerClassName?: string;
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
};

export function SliderSectionLayout({
  eyebrow,
  title,
  prevButton,
  nextButton,
  slides,
  slideKeys,
  className,
  containerClassName,
  slidesPerView = { mobile: 1, tablet: 1.2, desktop: 1.5 },
}: SliderSectionLayoutProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={cn("py-24", className)}>
      <Container
        className={cn("flex max-w-[1200px] flex-col gap-[60px]", containerClassName)}
      >
        <div className="flex flex-col items-start justify-between gap-6 px-0 lg:flex-row lg:items-end lg:px-[103px]">
          <div className="max-w-[701px]">
            {eyebrow ? (
              <p className="text-2xl font-medium tracking-[-0.24px] text-brand">
                {eyebrow}
              </p>
            ) : null}
            <h2
              className={cn(
                "font-display text-3xl font-bold leading-[1.35] tracking-[-0.8px] text-charcoal-700 sm:text-[40px]",
                eyebrow && "mt-5",
              )}
            >
              {title}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <SliderNavButton
              direction="prev"
              src={prevButton}
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <SliderNavButton
              direction="next"
              src={nextButton}
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={32}
          slidesPerView={slidesPerView.mobile ?? 1}
          breakpoints={{
            640: { slidesPerView: slidesPerView.tablet ?? 1.2 },
            1024: { slidesPerView: slidesPerView.desktop ?? 1.5 },
            1280: { slidesPerView: slidesPerView.desktop ?? 2.2 },
          }}
          className="!overflow-visible w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slideKeys[index]} className="!h-auto">
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
