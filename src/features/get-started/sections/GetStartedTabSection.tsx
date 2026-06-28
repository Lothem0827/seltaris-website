"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FeatureAccordion } from "@/components/shared/FeatureAccordion";
import { PricingCard } from "@/components/shared/PricingCard";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import {
  GET_STARTED_TAB_LABELS,
  getStartedOfferingCards,
  getStartedTabs,
} from "@/lib/content/get-started-tabs";
import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import { cn } from "@/lib/utils";
import { GetStartedServiceHeader } from "../components/GetStartedServicePanel";
import { GetStartedServicePanel } from "../components/GetStartedServicePanel";
import { GetStartedTabSwitch } from "../components/GetStartedTabSwitch";

const GET_STARTED_PRICING_SECTION_ID = "get-started-pricing";
/** Main nav bar height in GetStartedHeader — sticky tabs sit below it. */
const GET_STARTED_NAV_HEIGHT_PX = 74;

export function GetStartedTabSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pricingInView, setPricingInView] = useState(false);
  const panel = getStartedTabs[activeIndex];
  const [openAccordionId, setOpenAccordionId] = useState(
    getStartedTabs[0].kind === "accordion"
      ? (getStartedTabs[0].accordion[0]?.id ?? "")
      : "",
  );

  function handleTabChange(index: number) {
    setActiveIndex(index);
    const nextPanel = getStartedTabs[index];
    if (nextPanel.kind === "accordion") {
      setOpenAccordionId(nextPanel.accordion[0]?.id ?? "");
    }
  }

  useEffect(() => {
    const pricingSection = document.getElementById(
      GET_STARTED_PRICING_SECTION_ID,
    );
    if (!pricingSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPricingInView(entry.intersectionRatio >= 0.5);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    observer.observe(pricingSection);
    return () => observer.disconnect();
  }, []);

  const activeAccordionItem =
    panel.kind === "accordion"
      ? (panel.accordion.find((item) => item.id === openAccordionId) ??
        panel.accordion[0])
      : null;

  return (
    <section className="py-section">
      <Container className="mb-12 flex flex-col items-center lg:mb-8">
        <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl font-bold leading-subheading text-text lg:text-3xl">
            One platform for all
            <br />
            your data quality needs.
          </h2>
          <p className="w-[70%] font-body text-lg lg:w-full">
            Seltaris is an all-in-one data quality platform designed to inspect
            and clean your existing datasets
          </p>
        </div>
      </Container>

      <div
        className={cn(
          "z-40 w-full bg-white py-4 lg:py-3",
          !pricingInView && "sticky",
        )}
        style={!pricingInView ? { top: GET_STARTED_NAV_HEIGHT_PX } : undefined}
      >
        <Container className="flex w-full justify-center">
          <GetStartedTabSwitch
            tabs={GET_STARTED_TAB_LABELS}
            activeIndex={activeIndex}
            onChange={handleTabChange}
          />
        </Container>
      </div>

      <Container className="mt-12 lg:mt-8">
        <GetStartedServicePanel className="w-full">
          <GetStartedServiceHeader
            iconSrc={panel.serviceIcon}
            availability={panel.availability}
            serviceTitle={panel.serviceTitle}
            showDatasets={panel.showDatasets}
            ctaHref={SELTARIS_LOGIN_URL}
          />

          {panel.kind === "accordion" ? (
            <div className="flex flex-row items-start gap-24 p-6 lg:flex-col lg:gap-8 lg:p-4 sm:p-0">
              <div className="flex min-w-0 flex-1 flex-col gap-12 lg:gap-8">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl leading-subheading font-bold text-text">
                    {panel.headline.split("\n").map((line, index) => (
                      <span key={line}>
                        {index > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </h2>
                  <Text className="text-paragraph">{panel.intro}</Text>
                </div>
                <FeatureAccordion
                  key={panel.id}
                  items={panel.accordion}
                  defaultOpenId={panel.accordion[0]?.id}
                  onOpenChange={setOpenAccordionId}
                />
              </div>
              <div className="relative mx-auto w-full max-w-[440px] shrink-0 lg:hidden">
                <Image
                  key={activeAccordionItem?.visualSrc}
                  src={activeAccordionItem?.visualSrc ?? ""}
                  alt={activeAccordionItem?.visualAlt ?? ""}
                  width={440}
                  height={622}
                  className="h-auto w-full rounded-radius-lg object-cover"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-12 p-6 lg:gap-8 lg:p-4">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                <FeaturePageHeading as="h3" variant="headingSplitMint">
                  {panel.headline}
                </FeaturePageHeading>
                <Text className="text-paragraph">{panel.intro}</Text>
              </div>
              <div className="grid grid-cols-3 gap-6 xl:grid-cols-1">
                {getStartedOfferingCards.map((card) => (
                  <PricingCard
                    key={card.title}
                    label={card.label}
                    tone={card.tone}
                    iconSrc={card.iconSrc}
                    title={card.title}
                    description={card.description}
                    features={card.features}
                    learnMoreHref={card.learnMoreHref}
                    showAustralia={card.showAustralia}
                    showInternational={card.showInternational}
                    cta={{
                      label: "Coming soon",
                      href: "#",
                      variant: "secondary",
                      disabled: true,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </GetStartedServicePanel>
      </Container>
    </section>
  );
}
