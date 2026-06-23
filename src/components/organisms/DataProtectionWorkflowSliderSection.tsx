"use client";

import { AppImage as Image } from "@/components/atoms/AppImage";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/organisms/ContentSlider";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/molecules/SliderNavButtons";
import { dataProtectionWorkflowSteps } from "@/lib/content/data-protection";
import { getDataProtectionPageImage } from "@/lib/data-protection-images";

function WorkflowStepCard({
  step,
  title,
  body,
  imageSrc,
}: {
  step: number;
  title: string;
  body: string;
  imageSrc: string;
}) {
  return (
    <article className="flex w-slide-card shrink-0 flex-col">
      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-lg border border-border sm:aspect-auto sm:h-card-slide">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-contain sm:object-cover"
            sizes="(max-width: 640px) 88vw, 572px"
          />
        </div>
        <div className="absolute bottom-0 left-4 z-10 flex size-16 translate-y-1/2 items-center justify-center rounded-full border border-border bg-white">
          <FeaturePageHeading as="p" variant="workflowStepNumber">
            {step}
          </FeaturePageHeading>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 pt-16">
        <FeaturePageHeading as="h3" variant="workflowStepTitle">
          {title}
        </FeaturePageHeading>
        <Text>{body}</Text>
      </div>
    </article>
  );
}

const slides: SliderSlide[] = dataProtectionWorkflowSteps.map((item) => ({
  type: "custom",
  id: item.id,
  content: (
    <WorkflowStepCard
      step={item.step}
      title={item.title}
      body={typeof item.body === "string" ? item.body : ""}
      imageSrc={getDataProtectionPageImage(item.imageKey)}
    />
  ),
}));

export function DataProtectionWorkflowSliderSection() {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <SliderNavButtons {...navButtonProps} />
      </div>
      <ContentSlider {...sliderProps} slides={slides} />
    </div>
  );
}
