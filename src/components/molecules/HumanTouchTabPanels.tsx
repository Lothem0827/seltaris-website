"use client";

import { useState } from "react";
import { ImageTextCard } from "@/components/molecules/ImageTextCard";
import { TabGroup } from "@/components/molecules/TabGroup";
import { getAsset } from "@/lib/assets";
import { humanTouchTabPanels, humanTouchTabs } from "@/lib/content/sections";
import { cn } from "@/lib/utils";

type HumanTouchTabPanelsProps = {
  className?: string;
};

export function HumanTouchTabPanels({ className }: HumanTouchTabPanelsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const panel = humanTouchTabPanels[activeTab];

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <TabGroup
        tabs={humanTouchTabs}
        activeIndex={activeTab}
        onChange={setActiveTab}
        className="mb-12"
      />

      <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
        {panel.cards.map((card) => (
          <ImageTextCard
            key={card.id}
            imageSrc={getAsset(card.imageKey)}
            badge={"badge" in card ? card.badge : undefined}
          >
            {card.body}
          </ImageTextCard>
        ))}
      </div>
    </div>
  );
}
