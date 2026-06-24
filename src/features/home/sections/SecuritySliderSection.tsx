import { SliderSection } from "@/components/shared/SliderSection";
import type { SliderSlide } from "@/components/shared/ContentSlider";

const slides: SliderSlide[] = [
  {
    type: "image",
    id: "private-keys",
    item: {
      id: "private-keys",
      imageSrc: "/images/home/security-1.png",
      description: (
        <>
          <strong>Private Keys.</strong> Your very own unique security key —
          it&apos;s the single key to your encrypted result file — and without it,
          no one can gain access. Not even us under force. There are no backdoors,
          no hidden pathways and no exceptions.
        </>
      ),
      width: "narrow",
    },
  },
  {
    type: "image",
    id: "encrypted-cloud",
    item: {
      id: "encrypted-cloud",
      imageSrc: "/images/home/security-2.png",
      description: (
        <>
          <strong>Encrypted Cloud Computing.</strong> An exclusive cloud security
          architecture purpose-built to process batch data securely at the scale
          today&apos;s largest enterprises demand. Embedded in Seltaris it
          delivers groundbreaking speed and reliability to keep your data fully
          encrypted from upload to processing to download.
        </>
      ),
      width: "wide",
    },
  },
  {
    type: "image",
    id: "iso",
    item: {
      id: "iso",
      imageSrc: "/images/home/security-3.png",
      description: (
        <>
          <strong>ISO27001 certified.</strong> Have peace of mind knowing that we
          don&apos;t just claim to prioritise security; its practices have been
          thoroughly vetted by independent third parties and validated against
          international standards of ISO27001.
        </>
      ),
      width: "narrow",
    },
  },
];

export function SecuritySliderSection() {
  return (
    <SliderSection
      intro={{
        eyebrow: "Advanced Data Protection",
        heading: (
          <>
            Enterprise <span className="text-brand">grade security.</span>
            <br />
            Built from the ground up.
          </>
        ),
        body:
          "An enterprise-grade protection package built for today's most demanding security requirements. With private keys and our all-new Encrypted Cloud Computing™ architecture, we take its industry-leading security to a whole new level. Ensuring your data remains strictly confidential, heavily encrypted, and completely inaccessible.",
        logoKey: "advanced-data-protection",
        logoAlt: "Advanced Data Protection",
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
