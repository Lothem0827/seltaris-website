"use client";

import Image from "next/image";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/organisms/ContentSlider";
import { SliderNavButtons } from "@/components/molecules/SliderNavButtons";
import { dataProtectionWorkflowSteps } from "@/lib/content/data-protection";
import { getDataProtectionPageImage } from "@/lib/data-protection-images";
import { useRef } from "react";

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
    <article className="flex w-slide-card shrink-0 flex-col gap-6">
      <div className="relative h-card-slide w-full overflow-hidden rounded-radius-xl border border-border bg-white">
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="572px" />
      </div>
      <div className="flex flex-col gap-4 px-4 py-2">
        <div className="flex size-20 items-center justify-center rounded-radius-xl border border-border bg-white">
          <FeaturePageHeading as="p" variant="workflowStepNumber">
            {step}
          </FeaturePageHeading>
        </div>
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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <SliderNavButtons prevRef={prevRef} nextRef={nextRef} />
      </div>
      <ContentSlider prevRef={prevRef} nextRef={nextRef} slides={slides} />
    </div>
  );
}
