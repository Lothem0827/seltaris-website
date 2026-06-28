"use client";

import Image from "next/image";
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
        return (
          <button
            key={item.id}
            type="button"
            className="w-full rounded-radius-lg bg-white/80 p-6 text-left backdrop-blur-sm"
            aria-expanded={isOpen}
            onClick={() => handleOpenChange(isOpen ? "" : item.id)}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <span className="font-display text-xl leading-subheading font-bold text-text">
                {item.title}
              </span>
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
            </div>
            {isOpen ? (
              <Text className="mt-4 whitespace-pre-line text-paragraph">
                {item.body}
              </Text>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
