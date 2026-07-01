"use client";

import Image from "@/components/ui/Image";
import { useState } from "react";
import { Text } from "@/components/ui/Text";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

export type FeatureAccordionItem = {
  id: string;
  title: string;
  body: string;
};

type FeatureAccordionProps = {
  items: FeatureAccordionItem[];
  defaultOpenId?: string;
  onOpenChange?: (openId: string) => void;
  className?: string;
};

export function FeatureAccordion({
  items,
  defaultOpenId,
  onOpenChange,
  className,
}: FeatureAccordionProps) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id ?? "");

  function handleOpenChange(nextId: string) {
    setOpenId(nextId);
    onOpenChange?.(nextId);
  }

  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headingId = `accordion-heading-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="w-full rounded-radius-lg bg-white/80 p-6 backdrop-blur-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => handleOpenChange(isOpen ? "" : item.id)}
            >
              <h3
                id={headingId}
                className="font-display text-xl leading-subheading font-bold text-text"
              >
                {item.title}
              </h3>
              <Image
                src={
                  isOpen
                    ? siteAssets.getStarted.accordionMinus
                    : siteAssets.getStarted.accordionPlus
                }
                alt=""
                width={32}
                height={32}
                className="shrink-0"
                aria-hidden
              />
              <span className="sr-only">
                {isOpen ? "Collapse section" : "Expand section"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className="pt-4"
            >
              <Text className="text-paragraph">{item.body}</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}
