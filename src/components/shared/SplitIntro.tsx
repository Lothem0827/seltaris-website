import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
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
        <Eyebrow label={eyebrow} />
        <Heading level="h1">{heading}</Heading>
        <Text>{body}</Text>
      </div>
      <SplitIntroPulsingLogo
        logoSrc={splitIntroLogos[logoKey]}
        logoAlt={logoAlt}
        className="self-center"
      />
    </div>
  );
}
