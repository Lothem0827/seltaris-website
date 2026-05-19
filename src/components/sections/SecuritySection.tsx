import {
  FeatureSliderSection,
  type FeatureSlide,
} from "@/components/sections/FeatureSliderSection";
import { assets } from "@/lib/assets";

const slides: FeatureSlide[] = [
  {
    width: 441,
    image: assets.security.slides.privateKeys,
    lead: "Private Keys.",
    body: " Your very own unique security key — It’s the single key to your encrypted result file — and without it, no one can gain access. Not even DataTools under force. There are no backdoors, no hidden pathways and no exceptions.",
  },
  {
    width: 604,
    image: assets.security.slides.encryptedCloud,
    lead: "Encrypted Cloud Computing.",
    body: " An exclusive cloud security architecture purpose-built to process batch data securely at the scale today’s largest enterprises demand. Embedded in DataTools Seltaris it delivers groundbreaking speed and reliability to keep your data fully encrypted from upload to processing to download.",
  },
  {
    width: 441,
    image: assets.security.slides.iso27001,
    lead: "ISO27001 certified.",
    body: " Have peace of mind knowing that DataTools doesn’t just claim to prioritise security; its practices have been thoroughly vetted by independent third parties and validated against international standards of ISO27001.",
  },
];

export function SecuritySection() {
  return (
    <FeatureSliderSection
      eyebrow="Advanced Data Protection"
      title={
        <>
          Enterprise <span className="text-brand">grade security.</span>
          <br />
          Built from the ground up.
        </>
      }
      description="An enterprise-grade protection package built for today’s most demanding security requirements. With private keys and our all-new Encrypted Cloud Computing™ architecture, DataTools takes its industry-leading security to a whole new level. Ensuring your data remains strictly confidential, heavily encrypted, and completely inaccessible."
      headerVisual={assets.security.headerVisual}
      showStars
      starsImage={assets.security.stars}
      slides={slides}
      prevButton={assets.security.prevButton}
      nextButton={assets.security.nextButton}
      cta={{ label: "Explore all features", href: "#features" }}
    />
  );
}
