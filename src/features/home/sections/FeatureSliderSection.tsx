"use client";

import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import { SliderSection } from "@/components/shared/SliderSection";
import type { SliderSlide } from "@/components/shared/ContentSlider";

const FEATURE_SLIDE_IMAGES = [
  "/images/home/feature-slide-1.png",
  "/images/home/feature-slide-2.png",
  "/images/home/feature-slide-3.png",
] as const;

const slides: SliderSlide[] = [
  {
    type: "image",
    id: "easy-to-start",
    item: {
      id: "easy-to-start",
      title: "Easy to start.",
      description:
        "Seltaris makes it incredibly simple to import your data and uncover any deficiencies. With Advanced Health Check Reports, you'll quickly see exactly which aspects of your data need attention. And with built-in services to repair these issues in seconds, maintaining your data at its highest quality has never been simpler.",
      imageSrc: FEATURE_SLIDE_IMAGES[0],
    },
  },
  {
    type: "image",
    id: "built-for-scale",
    item: {
      id: "built-for-scale",
      title: "Built for Scale.",
      description:
        "The possibilities are limitless with Seltaris. Whether you're a growing business looking to clean your database or an enterprise organisation preparing for a data migration, Seltaris delivers the capacity to handle large scale computational loads of addressing data at industry-leading speeds.",
      imageSrc: FEATURE_SLIDE_IMAGES[1],
    },
  },
  {
    type: "image",
    id: "enterprise-first",
    item: {
      id: "enterprise-first",
      title: "Enterprise first design.",
      description:
        "Built with the infrastructure and security credentials today's enterprise demands. Seltaris is designed to let organisations share data with absolute confidence. Security measures that ensure your data remains yours and is inaccessible to anyone else.",
      imageSrc: FEATURE_SLIDE_IMAGES[2],
    },
  },
];

export function FeatureSliderSection() {
  return (
    <SliderSection
      heading={
        <>
          From fast-growing <span className="text-brand">businesses</span> to{" "}
          <span className="text-brand">enterprise.</span>
        </>
      }
      headingClassName="max-w-xl"
      slides={slides}
      cta={{ label: "Get started with Seltaris", href: SELTARIS_LOGIN_URL }}
    />
  );
}
