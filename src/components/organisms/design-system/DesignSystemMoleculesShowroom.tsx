"use client";

import { useRef } from "react";
import { AddressDemo } from "@/components/molecules/AddressDemo";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { CoreFeatureSlideCard } from "@/components/molecules/CoreFeatureSlideCard";
import { FeatureNavCard } from "@/components/molecules/FeatureNavCard";
import { FeatureNavDropdown } from "@/components/molecules/FeatureNavDropdown";
import { FeatureNavPanel } from "@/components/molecules/FeatureNavPanel";
import { FeatureSlideCard } from "@/components/molecules/FeatureSlideCard";
import { FooterNavColumn } from "@/components/molecules/FooterNavColumn";
import { HumanTouchTabPanels } from "@/components/molecules/HumanTouchTabPanels";
import { ImageSlideCard } from "@/components/molecules/ImageSlideCard";
import { ImageTextCard } from "@/components/molecules/ImageTextCard";
import { Logo } from "@/components/molecules/Logo";
import { LogoMarquee } from "@/components/molecules/LogoMarquee";
import { MainNav } from "@/components/molecules/MainNav";
import { NavLink } from "@/components/molecules/NavLink";
import { PricingCard } from "@/components/molecules/PricingCard";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import {
  SeltarisPlusPlanCard,
  SeltarisPlusSupportCard,
} from "@/components/molecules/SeltarisPlusPlanCard";
import { SliderNavButtons } from "@/components/molecules/SliderNavButtons";
import { SplitIntro } from "@/components/molecules/SplitIntro";
import { TabGroup } from "@/components/molecules/TabGroup";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { ValuePropCard } from "@/components/molecules/ValuePropCard";
import { assets } from "@/lib/assets";
import { footerNavGroups } from "@/lib/content/footer";
import { seltarisPlusPlans } from "@/lib/content/seltaris-plus";
import { useState } from "react";
import {
  ComponentDemo,
  GuideSubheading,
  TokenCode,
} from "./DesignSystemPrimitives";

const standardPlan = seltarisPlusPlans.find((p) => p.id === "standard")!;
const popularPlan = seltarisPlusPlans.find((p) => p.id === "premium")!;

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
              iconSrc={assets.humanTouchPage.featureHumanTouch}
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
              iconSrc={assets.serviceIcons.address}
            />
          </ComponentDemo>

          <ComponentDemo name="PricingCard" path="src/components/molecules/PricingCard.tsx">
            <div className="flex gap-6 overflow-x-auto pb-2">
              <div className="w-full min-w-72 max-w-sm shrink-0">
                <PricingCard
                  label="Repaired file only"
                  tone="default"
                  iconSrc={assets.pricingIcons.repaired}
                  title="Address Validation"
                  description="Validate, Repair and Standardise Australian address data."
                  features={[
                    "Validate & Repair addresses",
                    "Standardisation of all addresses",
                  ]}
                  showAustralia
                  cta={{
                    label: "Coming soon",
                    href: "#components",
                    variant: "secondary",
                  }}
                />
              </div>
              <div className="w-full min-w-72 max-w-sm shrink-0">
                <PricingCard
                  label="Health check report"
                  tone="success"
                  iconSrc={assets.pricingIcons.health}
                  title="Address Quality Health Check Report"
                  description="Advanced reporting that pinpoints areas for improvement."
                  features={["1x Health Check Report", "1x Repaired File"]}
                  showAustralia
                  cta={{ label: "Get started", href: "#components" }}
                />
              </div>
              <div className="w-full min-w-72 max-w-sm shrink-0">
                <PricingCard
                  label="Subscription"
                  tone="subscription"
                  iconSrc={assets.pricingIcons.subscription}
                  title="Seltaris+ Subscription"
                  description="Advanced capabilities and real savings in one monthly price."
                  features={["Health Check Reports", "Advanced Data Protection"]}
                  price={{ amount: "$99", gst: "Ex. GST", note: "per month" }}
                  cta={{ label: "Join now", href: "#components" }}
                />
              </div>
            </div>
          </ComponentDemo>

          <div className="grid gap-6 xl:grid-cols-2">
            <ComponentDemo
              name="ValuePropCard"
              path="src/components/molecules/ValuePropCard.tsx"
            >
              <ValuePropCard
                title="100% accuracy"
                description="Industry-leading address validation for Australian datasets."
              />
            </ComponentDemo>

            <ComponentDemo
              name="TestimonialCard"
              path="src/components/molecules/TestimonialCard.tsx"
            >
              <TestimonialCard
                author="Jane Smith"
                quote="Seltaris transformed how we handle bulk address data."
              />
            </ComponentDemo>
          </div>

          <ComponentDemo
            name="ImageSlideCard"
            path="src/components/molecules/ImageSlideCard.tsx"
          >
            <ImageSlideCard
              imageSrc={assets.humanTouch1}
              title="Slide title"
              description="Supporting copy for carousel slides across feature pages."
            />
          </ComponentDemo>

          <ComponentDemo
            name="FeatureSlideCard"
            path="src/components/molecules/FeatureSlideCard.tsx"
            note="Thin wrapper around ImageSlideCard with default width."
          >
            <FeatureSlideCard
              imageSrc={assets.altraservice1}
              title="Feature slide"
              description="Used in FeatureSliderSection and similar carousels."
            />
          </ComponentDemo>

          <ComponentDemo
            name="ImageTextCard"
            path="src/components/molecules/ImageTextCard.tsx"
          >
            <ImageTextCard
              imageSrc={assets.humanTouchQuality1}
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
                visualSrc={assets.coreFeatures.humanTouchVisual}
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
            path="src/components/molecules/SeltarisPlusPlanCard.tsx"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <SeltarisPlusPlanCard plan={standardPlan} />
              <SeltarisPlusPlanCard plan={popularPlan} />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="SeltarisPlusSupportCard"
            path="src/components/molecules/SeltarisPlusPlanCard.tsx (export)"
          >
            <SeltarisPlusSupportCard />
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
              imageSrc={assets.humanTouchSide}
            />
          </ComponentDemo>

          <ComponentDemo
            name="CenteredShowcase"
            path="src/components/molecules/CenteredShowcase.tsx"
          >
            <CenteredShowcase
              title="Showcase headline"
              subtitle="Optional subtitle for feature page hero sections"
              imageSrc={assets.platformShowcase}
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

          <ComponentDemo
            name="HumanTouchTabPanels"
            path="src/components/molecules/HumanTouchTabPanels.tsx"
            note="Composes TabGroup + ImageTextCard grid — used on Human Touch detail section."
          >
            <HumanTouchTabPanels />
          </ComponentDemo>

          <ComponentDemo
            name="SliderNavButtons"
            path="src/components/molecules/SliderNavButtons.tsx"
          >
            <SliderNavButtons prevRef={prevRef} nextRef={nextRef} />
          </ComponentDemo>

          <ComponentDemo
            name="LogoMarquee"
            path="src/components/molecules/LogoMarquee.tsx"
          >
            <LogoMarquee logos={assets.trustedLogos.slice(0, 6)} />
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
