"use client";

import { useState } from "react";
import { TabGroup, getTabId, getTabPanelId } from "@/components/shared/TabGroup";
import { cn } from "@/lib/utils";
import { ImageTextCard } from "./ImageTextCard";

const HUMAN_TOUCH_TABS_ID = "human-touch-detail-tabs";

const humanTouchTabs = [
  "Enhance existing data",
  "Quality datasets",
  "Unverified address enhancement",
] as const;

const humanTouchTabPanels = [
  {
    id: "enhance",
    cards: [
      {
        id: "formatting",
        imageSrc: "/images/home/enhance-existing-data-1.webp",
        body: (
          <>
            <strong>Correct formatting and missing details.</strong> See an
            address typed with no care for format or detail? Instead of letting
            it pass through broken, Human Touch™ steps in. Like magic, the
            address is re-formatted, misspellings repaired, and missing details
            are now filled in.
          </>
        ),
      },
      {
        id: "advanced",
        imageSrc: "/images/home/enhance-existing-data-2.webp",
        body: (
          <>
            <strong>Advanced address handling.</strong> Not all addresses are
            just street, suburb, and postcode. Human Touch™ understands complex
            details — from units, levels, and floors to lots, sites, ranges, and
            hyphenation. It recognises how these interact with streets,
            localities, and numbering systems.
          </>
        ),
      },
      {
        id: "vanity",
        imageSrc: "/images/home/enhance-existing-data-3.webp",
        body: (
          <>
            <strong>Vanity Suburbs. </strong>Swapping a suburb for a more
            &ldquo;prestigious&rdquo; one sounds harmless, until customer
            address return invalid. Human Touch™ spots these vanity suburbs, and
            correctly fixes them to the official suburb of the address.
          </>
        ),
      },
    ],
  },
  {
    id: "quality",
    cards: [
      {
        id: "sources",
        imageSrc: "/images/home/quality-dataset-1.webp",
        body: (
          <>
            <strong>Multiple verified sources.</strong> When it comes to
            verifying addresses, the quality of your results depends on the
            quality of the reference sources used – and even though some come
            close, no single data source can give you complete address coverage.
            Our OptiSource System™ sources the best datasets available from
            multiple suppliers in one system to give you the very best, utmost
            accurate results.
          </>
        ),
      },
      {
        id: "anz",
        imageSrc: "/images/home/quality-dataset-2.webp",
        body: (
          <>
            <strong>Australia & New Zealand Data.</strong> In Australia, we have
            two primary data sources: the Postal Address File (PAF) and the
            Geocoded National Address File (GNAF). In New Zealand, there are
            three main sources: the Postal Address File (PAF), the New Zealand
            Address Dataset (NZAD), and the Land Information New Zealand
            database (LINZ).
          </>
        ),
      },
      {
        id: "international",
        imageSrc: "/images/home/quality-dataset-3.webp",
        body: (
          <>
            <strong>International data.</strong> We partner with the leading
            data quality organisations in specific countries to deliver address
            verification for more than 245 countries and territories.
          </>
        ),
      },
    ],
  },
  {
    id: "unverified",
    cards: [
      {
        id: "field-corrections",
        imageSrc: "/images/home/unverified-address-enhancement-1.webp",
        badge: "NEW",
        body: (
          <>
            <strong>Individual field corrections.</strong> Others might reject
            an address as unfixable when key parts are missing — we don&apos;t.
            With Seltaris, even if all you have is a suburb and the rest is
            incomplete or incorrect, we still validate and correct what&apos;s
            there. Every field is processed, errors are cleaned, and details are
            standardised to match your verified records. The result? The highest
            quality version of that address, ready for future updates.
          </>
        ),
      },
      {
        id: "standardisation",
        imageSrc: "/images/home/unverified-address-enhancement-2.webp",
        badge: "NEW",
        body: (
          <>
            <strong>Standardisation on invalid entries.</strong> We always look
            for ways to go the extra step. Even if an address is marked as
            invalid, Human Touch™ refines every part it can — correcting errors
            and standardising details upfront. That way, even when an address
            can&apos;t be fully fixed, the parts you do have are already
            accurate, structured, and ready for correction when further
            information arrives.
          </>
        ),
      },
    ],
  },
] as const;

type HumanTouchTabPanelsProps = {
  className?: string;
};

export function HumanTouchTabPanels({ className }: HumanTouchTabPanelsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const panel = humanTouchTabPanels[activeTab];

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <TabGroup
        idPrefix={HUMAN_TOUCH_TABS_ID}
        tabs={humanTouchTabs}
        activeIndex={activeTab}
        onChange={setActiveTab}
        className="mb-12 sm:order-last"
      />

      <div
        role="tabpanel"
        id={getTabPanelId(HUMAN_TOUCH_TABS_ID, activeTab)}
        aria-labelledby={getTabId(HUMAN_TOUCH_TABS_ID, activeTab)}
        className="mb-12 grid grid-cols-3 items-start gap-6 lg:grid-cols-1"
      >
        {panel.cards.map((card, cardIndex) => (
          <ImageTextCard
            key={card.id}
            imageSrc={card.imageSrc}
            badge={"badge" in card ? card.badge : undefined}
            loading="lazy"
            imageAlt={`${humanTouchTabs[activeTab]} — card ${cardIndex + 1}`}
          >
            {card.body}
          </ImageTextCard>
        ))}
      </div>
    </div>
  );
}
