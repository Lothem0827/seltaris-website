"use client";

import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import { useRef } from "react";
import { AddressDemo } from "@/components/shared/AddressDemo";
import { CenteredShowcase } from "@/components/shared/CenteredShowcase";
import { CoreFeatureSlideCard } from "@/components/shared/CoreFeatureSlideCard";
import { FeatureNavCard } from "@/components/layout/FeatureNavCard";
import { FeatureNavDropdown } from "@/components/layout/FeatureNavDropdown";
import { FeatureNavPanel } from "@/components/layout/FeatureNavPanel";
import { ImageTextCard } from "@/features/home/components/ImageTextCard";
import { HumanTouchTabPanels } from "@/features/home/components/HumanTouchTabPanels";
import { LogoMarquee } from "@/features/home/components/LogoMarquee";
import { MainNav } from "@/components/layout/MainNav";
import { NavLink } from "@/components/layout/NavLink";
import { PricingCard } from "@/components/shared/PricingCard";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  SeltarisPlusPlanCard,
  SeltarisPlusSupportCard,
} from "@/features/seltaris-plus/components/SeltarisPlusPlanCard";
import { seltarisPlusPlans } from "@/features/seltaris-plus/plans.content";
import { SliderNavButtons } from "@/components/shared/SliderNavButtons";
import { SplitIntro } from "@/components/shared/SplitIntro";
import { SupportSpecialistCard } from "@/components/molecules/SupportSpecialistCard";
import { RegionBadge } from "@/components/shared/RegionBadge";
import { TabGroup } from "@/components/shared/TabGroup";
import { FeatureAccordion } from "@/components/shared/FeatureAccordion";
import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { GetStartedTabSwitch } from "@/features/get-started/components/GetStartedTabSwitch";
import { GET_STARTED_TAB_LABELS } from "@/features/get-started/sections/GetStartedTabSection.content";
import { FooterNavColumn } from "@/components/layout/FooterNavColumn";
import { ImageSlideCard } from "@/components/shared/ImageSlideCard";
import { Logo } from "@/components/layout/Logo";
import { siteAssets } from "@/lib/site-assets";
import { footerNavGroups } from "@/components/layout/footer.content";
import { useState } from "react";
import {
  ComponentDemo,
  GuideSubheading,
  TokenCode,
} from "./DesignSystemPrimitives";

export function DesignSystemMoleculesShowroom() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [demoTab, setDemoTab] = useState(0);

  return (
    <div className="space-y-12">
      <div>
        <GuideSubheading>Molecules — navigation</GuideSubheading>
        <div className="space-y-6">
          <ComponentDemo name="Logo" path="src/components/molecules/Logo.tsx">
            <Logo />
          </ComponentDemo>

          <ComponentDemo name="NavLink" path="src/components/molecules/NavLink.tsx">
            <div className="flex flex-wrap items-center gap-6">
              <NavLink label="Pricing" href="#components" />
              <NavLink label="Features" href="#components" hasDropdown />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="MainNav"
            path="src/components/molecules/MainNav.tsx"
            note="Hidden below lg in production; forced visible here for review."
          >
            <div className="[&_nav]:flex [&_nav]:flex-wrap">
              <MainNav />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="FeatureNavCard"
            path="src/components/molecules/FeatureNavCard.tsx"
          >
            <FeatureNavCard
              title="Human Touch™"
              description="Intelligent address correction"
              href="/human-touch"
              iconSrc={siteAssets.featureIcons.humanTouch}
            />
          </ComponentDemo>

          <ComponentDemo
            name="FeatureNavPanel"
            path="src/components/molecules/FeatureNavPanel.tsx"
          >
            <FeatureNavPanel />
          </ComponentDemo>

          <ComponentDemo
            name="FeatureNavDropdown"
            path="src/components/molecules/FeatureNavDropdown.tsx"
            note="Hover the Features trigger to open the dropdown panel (same as site header)."
          >
            <FeatureNavDropdown />
          </ComponentDemo>
        </div>
      </div>

      <div>
        <GuideSubheading>Molecules — cards</GuideSubheading>
        <div className="space-y-6">
          <ComponentDemo name="ServiceCard" path="src/components/molecules/ServiceCard.tsx">
            <ServiceCard
              title="Bulk Address Data"
              description="Format, clean, repair and verify addresses."
              iconSrc="/images/home/service-icon-address.png"
            />
          </ComponentDemo>

          <ComponentDemo name="PricingCard" path="src/components/molecules/PricingCard.tsx">
            <div className="flex gap-6 overflow-x-auto pb-2">
              <div className="w-full min-w-72 max-w-sm shrink-0">
                <PricingCard
                  label="Repaired file only"
                  tone="default"
                  iconSrc="/images/home/pricing-icon-repaired.png"
                  title="Address Validation"
                  description="Validate, Repair and Standardise Australian address data."
                  features={[
                    "Validate & Repair addresses",
                    "Standardisation of all addresses",
                  ]}
                  showAustralia
                  cta={{
                    label: "Coming soon",
                    variant: "secondary",
                    disabled: true,
                  }}
                />
              </div>
              <div className="w-full min-w-72 max-w-sm shrink-0">
                <PricingCard
                  label="Health check report"
                  tone="success"
                  iconSrc="/images/home/pricing-icon-health.png"
                  title="Address Quality Health Check Report"
                  description="Advanced reporting that pinpoints areas for improvement."
                  features={["Free Health Check Report", "1x Repaired File"]}
                  price={{ amount: "Free" }}
                  showAustralia
                  cta={{ label: "Get started", href: SELTARIS_LOGIN_URL }}
                />
              </div>
              <div className="w-full min-w-72 max-w-sm shrink-0">
                <PricingCard
                  label="Billing"
                  tone="subscription"
                  iconSrc="/seltaris-logo.svg"
                  title="Prepaid or Postpaid"
                  description="Load credits or pay by card. HCR and Advanced Data Protection are free on both."
                  features={[
                    "Free Health Check Reports",
                    "Free Advanced Data Protection",
                  ]}
                  cta={{ label: "Explore billing options", href: "#components" }}
                />
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="ImageSlideCard"
            path="src/components/molecules/ImageSlideCard.tsx"
          >
            <ImageSlideCard
              imageSrc="/images/home/enhance-existing-data-1.webp"
              title="Slide title"
              description="Supporting copy for carousel slides across feature pages."
            />
          </ComponentDemo>

          <ComponentDemo
            name="ImageTextCard"
            path="src/features/home/components/ImageTextCard.tsx"
          >
            <ImageTextCard
              imageSrc="/images/home/quality-dataset-1.webp"
              badge="Quality codes"
            >
              Explains transformation breakdown with badge and image.
            </ImageTextCard>
          </ComponentDemo>

          <ComponentDemo
            name="CoreFeatureSlideCard"
            path="src/components/molecules/CoreFeatureSlideCard.tsx"
          >
            <div className="overflow-x-auto pb-2">
              <CoreFeatureSlideCard
                visualSrc="/images/core-features/human-touch-visual.png"
                eyebrow="Human Touch™"
                heading="Intelligent correction"
                body="Automatically detect and repair address errors at scale."
                href="/human-touch"
                cta="Learn more"
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="SeltarisPlusPlanCard"
            path="src/features/seltaris-plus/components/SeltarisPlusPlanCard.tsx"
          >
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
              {seltarisPlusPlans.map((plan) => (
                <SeltarisPlusPlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="SeltarisPlusSupportCard"
            path="src/features/seltaris-plus/components/SeltarisPlusPlanCard.tsx (export)"
          >
            <SeltarisPlusSupportCard />
          </ComponentDemo>

          <ComponentDemo
            name="SupportSpecialistCard"
            path="src/components/molecules/SupportSpecialistCard.tsx"
          >
            <SupportSpecialistCard />
          </ComponentDemo>
        </div>
      </div>

      <div>
        <GuideSubheading>Molecules — content &amp; interactive</GuideSubheading>
        <div className="space-y-6">
          <ComponentDemo
            name="SplitIntro"
            path="src/components/molecules/SplitIntro.tsx"
          >
            <SplitIntro
              eyebrow="Performance"
              heading="Built for speed at scale"
              body="Process millions of records with confidence."
              logoKey="human-touch"
              logoAlt="Human Touch"
            />
          </ComponentDemo>

          <ComponentDemo
            name="CenteredShowcase"
            path="src/components/molecules/CenteredShowcase.tsx"
          >
            <CenteredShowcase
              title="Showcase headline"
              subtitle="Optional subtitle for feature page hero sections"
              imageSrc="/images/home/platform-showcase.webp"
            />
          </ComponentDemo>

          <ComponentDemo
            name="AddressDemo"
            path="src/components/molecules/AddressDemo.tsx"
          >
            <AddressDemo />
          </ComponentDemo>

          <ComponentDemo name="TabGroup" path="src/components/molecules/TabGroup.tsx">
            <TabGroup
              tabs={["Tab one", "Tab two", "Tab three"]}
              activeIndex={demoTab}
              onChange={setDemoTab}
            />
          </ComponentDemo>

          <ComponentDemo name="RegionBadge" path="src/components/shared/RegionBadge.tsx">
            <div className="flex flex-wrap items-center gap-3">
              <RegionBadge region="australia" />
              <RegionBadge region="nz" comingSoon />
              <RegionBadge region="international" comingSoon />
              <RegionBadge region="australia" size="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="GetStartedTabSwitch"
            path="src/features/get-started/components/GetStartedTabSwitch.tsx"
          >
            <GetStartedTabSwitch
              tabs={GET_STARTED_TAB_LABELS}
              activeIndex={demoTab}
              onChange={setDemoTab}
            />
          </ComponentDemo>

          <ComponentDemo
            name="FeatureAccordion"
            path="src/components/shared/FeatureAccordion.tsx"
          >
            <FeatureAccordion
              items={[
                {
                  id: "compare",
                  title: "Compare before & after",
                  body: "Each record is reviewed for completeness, accuracy, and compliance with official postal standards.",
                },
                {
                  id: "pricing",
                  title: "Clear pricing model",
                  body: "Know exactly what you pay before you commit.",
                },
              ]}
              defaultOpenId="compare"
            />
          </ComponentDemo>

          <ComponentDemo
            name="GetStartedHeader"
            path="src/components/layout/GetStartedHeader.tsx"
            note="Dedicated header for /get-started — not used on other pages."
          >
            <GetStartedHeader />
          </ComponentDemo>

          <ComponentDemo
            name="HumanTouchTabPanels"
            path="src/features/home/components/HumanTouchTabPanels.tsx"
            note="Composes TabGroup + ImageTextCard grid — used on Human Touch detail section."
          >
            <HumanTouchTabPanels />
          </ComponentDemo>

          <ComponentDemo
            name="SliderNavButtons"
            path="src/components/shared/SliderNavButtons.tsx"
          >
            <div className="flex w-full">
              <SliderNavButtons prevRef={prevRef} nextRef={nextRef} />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="LogoMarquee"
            path="src/features/home/components/LogoMarquee.tsx"
          >
            <LogoMarquee
              logos={[
                "/images/company-icons/boq-logo-6511cbd6c366f.webp",
                "/images/company-icons/hcf-logo-6511cbd81b4b0.webp",
                "/images/company-icons/qantas.webp",
                "/images/company-icons/commonwealth_bank.webp",
                "/images/company-icons/unsw-logo-6511cbdcc724c.webp",
                "/images/company-icons/david-jones-logo-6511cbd775386.webp",
              ]}
            />
          </ComponentDemo>

          <ComponentDemo
            name="FooterNavColumn"
            path="src/components/molecules/FooterNavColumn.tsx"
          >
            <FooterNavColumn group={footerNavGroups[0]} />
          </ComponentDemo>
        </div>
      </div>
    </div>
  );
}
