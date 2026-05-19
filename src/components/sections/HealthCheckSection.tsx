import {
  FeatureSliderSection,
  type FeatureSlide,
} from "@/components/sections/FeatureSliderSection";
import { assets } from "@/lib/assets";

const slides: FeatureSlide[] = [
  {
    width: 441,
    image: assets.healthCheck.slides.refinementCodes,
    cardClassName: "bg-white",
    lead: "Address refinement codes.",
    body: " Each code is designed to make it easy to pinpoint the specific issues in your dataset. And if you choose to purchase a repaired file, you’ll know exactly what you are—and aren’t—paying for. Each code is tied to a set price, keeping the entire process clear and transparent.",
  },
  {
    width: 441,
    image: assets.healthCheck.slides.accuracyCodes,
    cardClassName: "bg-white",
    lead: "Data accuracy codes.",
    body: " DataTools Seltaris assigns an accuracy code to every address, showing the level of precision achieved in matching and validation. These codes make it clear how reliable each address is for business operations, logistics, or compliance, with a full summary provided for easy reference.",
  },
  {
    width: 604,
    image: assets.healthCheck.slides.preview,
    cardClassName: "bg-white",
    lead: "Preview before purchase.",
    body: " Health Check Report shows you exactly how your addresses were returned after being processed through Seltaris. You can review the transformation in complete detail, giving you a clear, transparent view of how your file performed. Happy with what you see, purchasing your refined file is just one click away.",
  },
];

export function HealthCheckSection() {
  return (
    <FeatureSliderSection
      eyebrow="Health Check Report"
      title={
        <>
          Get the full picture
          <br />
          of your <span className="text-brand">existing data</span>
        </>
      }
      description="To help you better understand your current datasets, the Health Check Report in DataTools Seltaris assesses each record in your dataset for completeness, accuracy, and compliance with official postal standards. It highlights issues and provides clear recommendations, corrections, and enhancements—helping you improve the quality, deliverability, and reliability of your address data so it’s ready for use across mailing, logistics, and compliance systems."
      headerVisual={assets.healthCheck.headerVisual}
      slides={slides}
      prevButton={assets.healthCheck.prevButton}
      nextButton={assets.healthCheck.nextButton}
      cta={{ label: "Explore all features", href: "#features" }}
    />
  );
}
