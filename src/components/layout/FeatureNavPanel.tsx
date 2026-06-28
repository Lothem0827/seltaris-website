import { Heading } from "@/components/ui/Heading";
import { FeatureNavCard } from "@/components/layout/FeatureNavCard";
import { siteAssets } from "@/lib/site-assets";
import { featureNavItems } from "@/lib/content/feature-nav";

const featureIcons = {
  featureHumanTouch: siteAssets.featureIcons.humanTouch,
  featureAltraservice: siteAssets.featureIcons.altraService,
  featureDataProtection: siteAssets.featureIcons.advancedDataProtection,
  featureDesign: siteAssets.featureIcons.designMadeSimple,
} as const;

export function FeatureNavPanel() {
  return (
    <div className="w-full max-w-container">
      <div className="rounded-radius-panel bg-white p-5 shadow-panel">
        <div className="flex flex-col gap-3">
          <Heading level="panel">Features</Heading>
          <div className="grid grid-cols-4 gap-6 xl:grid-cols-2 sm:grid-cols-1">
            {featureNavItems.map((item) => (
              <FeatureNavCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={item.href}
                iconSrc={featureIcons[item.iconKey]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
