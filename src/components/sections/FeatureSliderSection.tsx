"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SliderNavButton } from "@/components/ui/SliderNavButton";
import { cn } from "@/lib/cn";

import "swiper/css";

export type FeatureSlide = {
  lead: string;
  body: string;
  image: string;
  /** Figma card width in px — controls slide sizing. */
  width?: 441 | 572 | 604;
  cardClassName?: string;
  glow?: string;
  overlay?: string;
};

const slideWidthClass: Record<NonNullable<FeatureSlide["width"]>, string> = {
  441: "w-[441px]",
  572: "w-[572px]",
  604: "w-[604px]",
};

type FeatureSliderSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  headerVisual?: string;
  showStars?: boolean;
  starsImage?: string;
  slides: FeatureSlide[];
  prevButton: string;
  nextButton: string;
  cta?: { label: string; href: string };
  /** Business-style: title + nav on one row. Default: split header with eyebrow block. */
  headerLayout?: "inline" | "split";
  /** `titled` — Mint Grotesk h3 + body (business slider). `emphasis` — bold lead inline. */
  slideTextLayout?: "titled" | "emphasis";
  glowImages?: { left?: string; right?: string };
  className?: string;
};

function SlideCard({
  slide,
  textLayout,
}: {
  slide: FeatureSlide;
  textLayout: "titled" | "emphasis";
}) {
  const width = slide.width ?? 441;

  return (
    <article
      className={cn(
        "flex max-w-full shrink-0 flex-col gap-4",
        slideWidthClass[width],
      )}
    >
      <div
        className={cn(
          "relative h-[363px] overflow-hidden rounded-[32px] bg-[#0a0118]",
          slide.cardClassName,
        )}
      >
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes={`${width}px`}
        />
        {slide.overlay ? (
          <Image
            src={slide.overlay}
            alt=""
            width={82}
            height={49}
            className="absolute right-[25%] top-[17%]"
          />
        ) : null}
        {slide.glow ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 mix-blend-color-dodge">
            <Image
              src={slide.glow}
              alt=""
              fill
              className="object-cover opacity-80"
            />
          </div>
        ) : null}
      </div>
      <div className="px-4 pr-8">
        {textLayout === "titled" ? (
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-[28px] font-bold leading-[33.6px] tracking-[-1px] text-charcoal-700">
              {slide.lead}
            </h3>
            <p className="text-base leading-[26px] text-charcoal-500">
              {slide.body}
            </p>
          </div>
        ) : (
          <p className="text-base leading-[26px] text-charcoal-500">
            <span className="font-bold text-charcoal-500">{slide.lead}</span>
            {slide.body}
          </p>
        )}
      </div>
    </article>
  );
}

export function FeatureSliderSection({
  eyebrow,
  title,
  description,
  headerVisual,
  showStars = false,
  starsImage,
  slides,
  prevButton,
  nextButton,
  cta,
  headerLayout = "split",
  slideTextLayout = "emphasis",
  glowImages,
  className,
}: FeatureSliderSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={cn("relative overflow-hidden py-24", className)}>
      {glowImages?.left ? (
        <div className="pointer-events-none absolute bottom-[-320px] h-[561px] w-[903px] mix-blend-color-dodge">
          <Image
            src={glowImages.left}
            alt=""
            fill
            className="rotate-180 object-contain"
          />
        </div>
      ) : null}
      {glowImages?.right ? (
        <div className="pointer-events-none absolute -right-5 top-1/2 h-[279px] w-[903px] -translate-y-1/2 mix-blend-color-dodge">
          <Image
            src={glowImages.right}
            alt=""
            fill
            className="rotate-180 object-contain"
          />
        </div>
      ) : null}

      {headerLayout === "split" ? (
        <Container className="relative flex max-w-[994px] flex-col items-center justify-center pb-[60px]">
          {showStars && starsImage ? (
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[508px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-80">
              <Image src={starsImage} alt="" fill className="object-contain" />
            </div>
          ) : null}
          <div className="relative flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-[609px]">
              {eyebrow ? <Eyebrow label={eyebrow} className="mb-5" /> : null}
              <h2 className="font-display text-3xl font-bold leading-[1.35] tracking-[-0.8px] text-charcoal-700 sm:text-[40px]">
                {title}
              </h2>
              {description ? (
                <div className="mt-6 text-base leading-[26px] text-charcoal-500">
                  {description}
                </div>
              ) : null}
            </div>
            {headerVisual ? (
              <div className="relative mx-auto size-[264px] shrink-0 lg:mx-0">
                <Image
                  src={headerVisual}
                  alt=""
                  width={316}
                  height={316}
                  className="size-full object-contain"
                />
              </div>
            ) : null}
          </div>
        </Container>
      ) : null}

      <Container className="relative flex max-w-[1200px] flex-col items-center gap-20">
        <div className="flex w-full flex-col gap-12 px-0 lg:px-[103px]">
          {headerLayout === "inline" ? (
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <h2 className="font-display max-w-[662px] text-3xl font-bold leading-[1.35] tracking-[-0.8px] text-charcoal-700 sm:text-[40px]">
                {title}
              </h2>
              <SliderControls
                prevButton={prevButton}
                nextButton={nextButton}
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
              />
            </div>
          ) : (
            <div className="flex justify-end">
              <SliderControls
                prevButton={prevButton}
                nextButton={nextButton}
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
              />
            </div>
          )}

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.05 },
              1024: { slidesPerView: 1.5 },
              1280: { slidesPerView: 1.65 },
            }}
            className="!overflow-visible w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.lead} className="!h-auto">
                <SlideCard slide={slide} textLayout={slideTextLayout} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {cta ? (
          <Button href={cta.href} size="lg">
            {cta.label}
          </Button>
        ) : null}
      </Container>
    </section>
  );
}

function SliderControls({
  prevButton,
  nextButton,
  onPrev,
  onNext,
}: {
  prevButton: string;
  nextButton: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-4">
      <SliderNavButton direction="prev" src={prevButton} onClick={onPrev} />
      <SliderNavButton direction="next" src={nextButton} onClick={onNext} />
    </div>
  );
}
