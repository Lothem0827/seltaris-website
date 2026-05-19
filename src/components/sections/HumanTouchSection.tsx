"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TabGroup, type TabItem } from "@/components/ui/TabGroup";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type FeatureCard = {
  title: string;
  lead: string;
  body: string;
  visual: string;
  overlay?: string;
};

type TabPanel = {
  id: string;
  label: string;
  cards: FeatureCard[];
};

const tabPanels: TabPanel[] = [
  {
    id: "enhance",
    label: "Enhance existing data",
    cards: [
      {
        title: "Correct formatting and missing details.",
        lead: "Correct formatting and missing details.",
        body: " See an address typed with no care for format or detail? Instead of letting it pass through broken, DataTools Human Touch™ steps in. Like magic, the address is re-formatted, misspellings repaired, and missing details are now filled in.",
        visual: assets.humanTouch.cards.formatting.visual,
      },
      {
        title: "Advanced address handling.",
        lead: "Advanced address handling.",
        body: " Not all addresses are just street, suburb, and postcode. DataTools Human Touch™ understands complex details — from units, levels, and floors to lots, sites, ranges, and hyphenation. It recognises how these interact with streets, localities, and numbering systems.",
        visual: assets.humanTouch.cards.advanced.visual,
        overlay: assets.humanTouch.cards.advanced.puzzle,
      },
      {
        title: "Vanity Suburbs.",
        lead: "Vanity Suburbs.",
        body: " Swapping a suburb for a more “prestigious” one sounds harmless, until customer address return invalid. DataTools Human Touch™ spots these vanity suburbs, and correctly fixes them to the official suburb of the address.",
        visual: assets.humanTouch.cards.vanity.visual,
      },
    ],
  },
  {
    id: "quality",
    label: "Quality datasets",
    cards: [
      {
        title: "Consistent quality standards.",
        lead: "Consistent quality standards.",
        body: " Maintain datasets that meet the highest benchmarks for accuracy and completeness across every record in your organisation.",
        visual: assets.humanTouch.cards.formatting.visual,
      },
      {
        title: "Automated validation rules.",
        lead: "Automated validation rules.",
        body: " Apply intelligent rules that flag anomalies before they spread through downstream systems and customer communications.",
        visual: assets.humanTouch.cards.advanced.visual,
      },
      {
        title: "Continuous monitoring.",
        lead: "Continuous monitoring.",
        body: " Keep data quality high over time with ongoing checks that surface drift, duplicates, and formatting issues as they appear.",
        visual: assets.humanTouch.cards.vanity.visual,
      },
    ],
  },
  {
    id: "unverified",
    label: "Unverified address enhancement",
    cards: [
      {
        title: "Repair unverified records.",
        lead: "Repair unverified records.",
        body: " Turn incomplete or unverified addresses into validated, deliverable records without manual rework from your team.",
        visual: assets.humanTouch.cards.formatting.visual,
      },
      {
        title: "Fill missing components.",
        lead: "Fill missing components.",
        body: " Detect and append missing street, suburb, state, and postcode details using Human Touch™ interpretation logic.",
        visual: assets.humanTouch.cards.advanced.visual,
      },
      {
        title: "Confidence at scale.",
        lead: "Confidence at scale.",
        body: " Process large volumes of unverified addresses with the same accuracy you expect from fully verified datasets.",
        visual: assets.humanTouch.cards.vanity.visual,
      },
    ],
  },
];

const tabs: TabItem[] = tabPanels.map(({ id, label }) => ({ id, label }));

function FeatureCardBlock({ card }: { card: FeatureCard }) {
  return (
    <article className="flex w-full max-w-[425px] flex-col gap-6">
      <div className="relative h-[425px] overflow-hidden rounded-[32px] bg-[#0a0118]">
        <Image src={card.visual} alt="" fill className="object-cover" sizes="425px" />
        {card.overlay ? (
          <Image
            src={card.overlay}
            alt=""
            width={262}
            height={343}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        ) : null}
      </div>
      <p className="px-1.5 text-base leading-[26px] text-charcoal-500">
        <span className="font-bold text-charcoal-500">{card.lead}</span>
        {card.body}
      </p>
    </article>
  );
}

export function HumanTouchSection() {
  const [activeTabId, setActiveTabId] = useState(tabPanels[0].id);
  const activePanel = tabPanels.find((panel) => panel.id === activeTabId) ?? tabPanels[0];

  return (
    <section className="px-4 sm:px-8">
      <div className="mx-auto max-w-[1856px] overflow-hidden rounded-[40px] bg-brand-20u pb-40">
        <div className="relative flex items-center justify-center px-6 pb-[60px] pt-[125px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[508px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-80">
            <Image src={assets.humanTouch.stars} alt="" fill className="object-contain" />
          </div>
          <Container className="relative flex max-w-[994px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-[609px]">
              <Eyebrow label="DataTools Human Touch™" className="mb-5" />
              <h2 className="font-display text-3xl font-bold leading-[1.35] tracking-[-0.8px] text-charcoal-700 sm:text-[40px]">
                <span className="text-brand">The tool is innovative.</span>
                <br />
                The experience is magical.
              </h2>
              <p className="mt-6 text-base leading-[26px] text-charcoal-500">
                The DataTools Human Touch™ logic, tightly integrated with DataTools
                Seltaris, intelligently interprets information in the same intuitive
                way a human would. With our most advanced and expansive methodologies,{" "}
                <strong className="font-bold">
                  we continue to push the limits of what it means to have the most
                  accurate data possible.
                </strong>
              </p>
            </div>
            <div className="relative mx-auto size-[264px] shrink-0">
              <Image
                src={assets.humanTouch.rings}
                alt=""
                fill
                className="object-contain"
              />
              <Image
                src={assets.humanTouch.logoMark}
                alt=""
                width={62}
                height={50}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Container>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -left-[850px] bottom-[-320px] h-[561px] w-[903px] mix-blend-color-dodge">
            <Image
              src={assets.humanTouch.glowLeft}
              alt=""
              fill
              className="rotate-180 object-contain"
            />
          </div>
          <div className="pointer-events-none absolute -right-5 top-1/2 h-[279px] w-[903px] -translate-y-1/2 mix-blend-color-dodge">
            <Image
              src={assets.humanTouch.glowRight}
              alt=""
              fill
              className="rotate-180 object-contain"
            />
          </div>

          <Container className="relative flex max-w-[1200px] flex-col items-center gap-12">
            <TabGroup
              tabs={tabs}
              activeId={activeTabId}
              onChange={setActiveTabId}
              className="max-w-[994px]"
            />

            {tabPanels.map((panel) => (
              <div
                key={panel.id}
                role="tabpanel"
                id={`tabpanel-${panel.id}`}
                aria-labelledby={`tab-${panel.id}`}
                hidden={panel.id !== activeTabId}
                className={cn(
                  "grid w-full max-w-[1340px] gap-8 md:grid-cols-2 xl:grid-cols-3",
                  panel.id !== activeTabId && "hidden",
                )}
              >
                {panel.cards.map((card) => (
                  <FeatureCardBlock key={card.title} card={card} />
                ))}
              </div>
            ))}

            <Button href="#get-started" size="lg">
              Get started with Seltaris
            </Button>
          </Container>
        </div>
      </div>
    </section>
  );
}
