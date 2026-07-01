import { SliderSection } from "@/components/shared/SliderSection";
import type { SliderSlide } from "@/components/shared/ContentSlider";

const slides: SliderSlide[] = [
  {
    type: "image",
    id: "refinement-codes",
    item: {
      id: "refinement-codes",
      imageSrc: "/images/home/health-1.webp",
      description: (
        <>
          <strong>Address refinement codes.</strong> Each code is designed to make
          it easy to pinpoint the specific issues in your dataset. And if you
          choose to purchase a repaired file, you&apos;ll know exactly what you
          are—and aren&apos;t—paying for. Each code is tied to a set price,
          keeping the entire process clear and transparent.
        </>
      ),
      width: "narrow",
    },
  },
  {
    type: "image",
    id: "accuracy-codes",
    item: {
      id: "accuracy-codes",
      imageSrc: "/images/home/health-2.webp",
      description: (
        <>
          <strong>Data accuracy codes.</strong> Seltaris assigns an accuracy code
          to every address, showing the level of precision achieved in matching
          and validation. These codes make it clear how reliable each address is
          for business operations, logistics, or compliance, with a full summary
          provided for easy reference.
        </>
      ),
      width: "narrow",
    },
  },
  {
    type: "image",
    id: "preview",
    item: {
      id: "preview",
      imageSrc: "/images/home/health-3.svg",
      description: (
        <>
          <strong>Preview before purchase.</strong> Health Check Report shows you
          exactly how your addresses were returned after being processed through
          Seltaris. You can review the transformation in complete detail, giving
          you a clear, transparent view of how your file performed. Happy with
          what you see, purchasing your refined file is just one click away.
        </>
      ),
      width: "wide",
    },
  },
];

export function HealthCheckSliderSection() {
  return (
    <SliderSection
      intro={{
        eyebrow: "Health Check Report",
        heading: (
          <>
            Get the full picture
            <br />
            of your <span className="text-brand">existing data</span>
          </>
        ),
        body:
          "To help you better understand your current datasets, the Health Check Report in Seltaris assesses each record in your dataset for completeness, accuracy, and compliance with official postal standards. It highlights issues and provides clear recommendations, corrections, and enhancements—helping you improve the quality, deliverability, and reliability of your address data so it's ready for use across mailing, logistics, and compliance systems.",
        logoKey: "health-check",
        logoAlt: "Health Check Report",
      }}
      navAlign="end"
      slides={slides}
      cta={{
        label: "Explore all features",
        href: "#features",
        variant: "secondary",
      }}
    />
  );
}
