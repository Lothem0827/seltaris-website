import { Heading } from "@/components/atoms/Heading";
import { FeatureNavCard } from "@/components/molecules/FeatureNavCard";
import { assets } from "@/lib/assets";
import { featureNavItems } from "@/lib/content/feature-nav";

const featureIcons = {
  featureHumanTouch: assets.featureIcons.humanTouch,
  featureAltraservice: assets.featureIcons.altraService,
  featureDataProtection: assets.featureIcons.advancedDataProtection,
  featureDesign: assets.featureIcons.designMadeSimple,
} as const;

export function FeatureNavPanel() {
  return (
    <div className="w-full max-w-container">
      <div className="rounded-radius-panel bg-white p-5 shadow-panel">
        <div className="flex flex-col gap-4">
          <Heading level="panel">Features</Heading>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
