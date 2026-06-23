import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { SplitIntroPulsingLogo } from "@/components/molecules/SplitIntroPulsingLogo";
import { assets } from "@/lib/assets";
import type { SplitIntroContent, SplitIntroLogoKey } from "@/lib/types/slider";
import { cn } from "@/lib/utils";

const splitIntroLogos: Record<SplitIntroLogoKey, string> = {
  "human-touch": assets.featureIcons.humanTouch,
  "altra-service": assets.featureIcons.altraService,
  "advanced-data-protection": assets.featureIcons.advancedDataProtection,
  "health-check": assets.featureIcons.healthCheck,
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
        "flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center",
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
