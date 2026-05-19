import {
  FeatureSliderSection,
  type FeatureSlide,
} from "@/components/sections/FeatureSliderSection";
import { assets } from "@/lib/assets";

const slides: FeatureSlide[] = [
  {
    width: 572,
    image: assets.businessSlider.slides.easyToStart.image,
    glow: assets.businessSlider.slides.easyToStart.glow,
    lead: "Easy to start.",
    body: " DataTools Seltaris makes it incredibly simple to import your data and uncover any deficiencies. With Advanced Health Check Reports, you'll quickly see exactly which aspects of your data need attention. And with built-in services to repair these issues in seconds, maintaining your data at its highest quality has never been simpler.",
  },
  {
    width: 572,
    image: assets.businessSlider.slides.builtForScale.image,
    overlay: assets.businessSlider.slides.builtForScale.chart,
    glow: assets.businessSlider.slides.builtForScale.glow,
    lead: "Built for Scale.",
    body: " The possibilities are limitless with DataTools Seltaris. Whether you're a growing business looking to clean your database or an enterprise organisation preparing for a data migration, DataTools Seltaris delivers the capacity to handle large scale computational loads of addressing data at industry-leading speeds.",
  },
  {
    width: 572,
    image: assets.businessSlider.slides.enterprise.image,
    glow: assets.businessSlider.slides.enterprise.glow,
    lead: "Enterprise first design.",
    body: " Built with the infrastructure and security credentials today's enterprise demands. DataTools Seltaris is designed to let organisations share data with absolute confidence. Security measures that ensure your data remains yours and is not accessible to anyone else (even DataTools).",
  },
];

export function BusinessSliderSection() {
  return (
    <FeatureSliderSection
      headerLayout="inline"
      slideTextLayout="titled"
      title={
        <>
          From fast-growing{" "}
          <span className="text-brand">businesses to enterprise.</span>
        </>
      }
      slides={slides}
      prevButton={assets.businessSlider.prevButton}
      nextButton={assets.businessSlider.nextButton}
      glowImages={{
        left: assets.businessSlider.glowLeft,
        right: assets.businessSlider.glowRight,
      }}
      cta={{ label: "Get started with Seltaris", href: "#get-started" }}
    />
  );
}
