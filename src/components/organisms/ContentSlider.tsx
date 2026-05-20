"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { ImageSlideCard } from "@/components/molecules/ImageSlideCard";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { ValuePropCard } from "@/components/molecules/ValuePropCard";
import { assets, getAsset } from "@/lib/assets";
import type { SlideItem } from "@/lib/types/slider";
import { cn } from "@/lib/utils";
import type { ReactNode, RefObject } from "react";

import "swiper/css";

export type SliderSlide =
  | { type: "image"; id: string; item: SlideItem }
  | { type: "testimonial"; id: string; author: string; quote: string }
  | { type: "value"; id: string; title: string; description: string }
  | { type: "custom"; id: string; content: ReactNode };

type ContentSliderProps = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  slides: SliderSlide[];
  className?: string;
};

function resolveImageSrc(item: SlideItem): string {
  if (item.imageSrc) return item.imageSrc;
  if (item.imageSrcKey) return getAsset(item.imageSrcKey);
  return assets.heroBackground;
}

function bindNavigation(
  swiper: SwiperInstance,
  prevRef: RefObject<HTMLButtonElement | null>,
  nextRef: RefObject<HTMLButtonElement | null>,
) {
  if (!prevRef.current || !nextRef.current) return;

  const navigation = swiper.params.navigation;
  if (!navigation || typeof navigation === "boolean") return;

  navigation.prevEl = prevRef.current;
  navigation.nextEl = nextRef.current;
  swiper.navigation.init();
  swiper.navigation.update();
}

/** Swiper for Figma frames named "THIS IS A SLIDER". */
export function ContentSlider({
  prevRef,
  nextRef,
  slides,
  className,
}: ContentSliderProps) {
  return (
    <div className={cn("w-full", className)} data-name="THIS IS A SLIDER">
      <Swiper
        modules={[Navigation]}
        navigation={{
          disabledClass: "swiper-button-disabled",
        }}
        watchOverflow
        onBeforeInit={(swiper) => {
          bindNavigation(swiper, prevRef, nextRef);
        }}
        onInit={(swiper) => {
          bindNavigation(swiper, prevRef, nextRef);
        }}
        onResize={(swiper) => {
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          swiper.navigation.update();
        }}
        spaceBetween={24}
        slidesPerView="auto"
        className="!overflow-visible"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!w-auto">
            {slide.type === "image" && (
              <ImageSlideCard
                imageSrc={resolveImageSrc(slide.item)}
                title={slide.item.title}
                description={slide.item.description}
                width={slide.item.width}
                imageVariant={
                  slide.item.id.includes("refinement") ||
                  slide.item.id.includes("accuracy") ||
                  slide.item.id.includes("preview")
                    ? "light"
                    : "dark"
                }
              />
            )}
            {slide.type === "testimonial" && (
              <TestimonialCard author={slide.author} quote={slide.quote} />
            )}
            {slide.type === "value" && (
              <ValuePropCard
                title={slide.title}
                description={slide.description}
              />
            )}
            {slide.type === "custom" && slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
