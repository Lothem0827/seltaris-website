import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { SplitIntroPulsingLogo } from "@/components/shared/SplitIntroPulsingLogo";
import { siteAssets } from "@/lib/site-assets";
import type { SplitIntroContent, SplitIntroLogoKey } from "@/lib/types/slider";
import { cn } from "@/lib/utils";

const splitIntroLogos: Record<SplitIntroLogoKey, string> = {
  "human-touch": siteAssets.featureIcons.humanTouch,
  "altra-service": siteAssets.featureIcons.altraService,
  "advanced-data-protection": siteAssets.featureIcons.advancedDataProtection,
  "health-check": siteAssets.featureIcons.healthCheck,
};

type SplitIntroProps = SplitIntroContent & {
  className?: string;
};

export function SplitIntro({
  eyebrow,
  heading,
  body,
  logoKey,
  logoAlt = "",
  className,
}: SplitIntroProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between gap-12 lg:flex-col lg:items-start",
        className,
      )}
    >
      <div className="max-w-xl shrink-0 space-y-6">
        <RevealOnView staggerIndex={0}>
          <Eyebrow label={eyebrow} />
        </RevealOnView>
        <RevealOnView staggerIndex={1}>
          <Heading as="h2" level="h1">{heading}</Heading>
        </RevealOnView>
        <RevealOnView staggerIndex={2}>
          <Text>{body}</Text>
        </RevealOnView>
      </div>
      <RevealOnView staggerIndex={3} className="self-center">
        <SplitIntroPulsingLogo
          logoSrc={splitIntroLogos[logoKey]}
          logoAlt={logoAlt}
        />
      </RevealOnView>
    </div>
  );
}
