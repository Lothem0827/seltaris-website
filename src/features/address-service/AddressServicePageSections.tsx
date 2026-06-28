"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { Text } from "@/components/ui/Text";
import { PricingCard } from "@/components/shared/PricingCard";
import { SupportSpecialistCard } from "@/components/molecules/SupportSpecialistCard";
import { SupportedDatasetsBar } from "@/components/shared/SupportedDatasetsBar";
import { TabGroup } from "@/components/shared/TabGroup";
import { AddressValidateAnimation } from "@/components/svg-animations/AddressValidateAnimation";
import { HumanTouchAnimated } from "@/components/svg-animations/HumanTouchAnimated";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";
import { AddressDataAccuracyCodesPanel } from "./components/AddressDataAccuracyCodesPanel";
import { AddressRefinementCodesPanel } from "./components/AddressRefinementCodesPanel";
import { AddressResultFilePanel } from "./components/AddressResultFilePanel";
import { AddressSampleExamplesPanel } from "./components/AddressSampleExamplesPanel";
import { useAddressServicePage } from "./useAddressServicePage";
import type {
  AddressServicePageFeatureCard,
  AddressServicePageGridPanel,
  AddressServicePageIconKey,
  AddressServicePageSecurityAdvancedPanel,
  AddressServicePageSecurityStandardPanel,
  AddressServicePageSplitIntroPanel,
  AddressServicePageTabPanel,
  AddressServicePageTabSection,
} from "./types";

const pricingIcons = {
  health: "/images/home/pricing-icon-health.png",
  repaired: "/images/home/pricing-icon-repaired.png",
  subscription: "/seltaris-logo.svg",
} as const;

const sectionIcons: Record<AddressServicePageIconKey, string> = {
  humanTouchLogo: siteAssets.featureIcons.humanTouch,
  altraserviceLogo: siteAssets.featureIcons.altraService,
  dataProtectionLogo: siteAssets.featureIcons.advancedDataProtection,
};

function LearnMoreLink({ href }: { href: string }) {
  return (
    <Button href={href} variant="ghost" size="small">
      Learn more
    </Button>
  );
}

function PanelImage({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-radius-lg ", className)}
    >
      <Image src={src} alt="" fill className="object-cover" sizes="578px" />
    </div>
  );
}

function GridTabPanelContent({
  panel,
}: {
  panel: AddressServicePageGridPanel;
}) {
  const images = panel.imageKeys;

  if (images.length >= 3) {
    return (
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
        <div className="flex flex-col gap-2">
          <div className="flex flex-1 items-center rounded-radius-md p-8">
            <Text as="div" className="prose-strong">
              {panel.body}
            </Text>
          </div>
          <PanelImage src={images[0]} className="aspect-[578/351] w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <PanelImage src={images[1]} className="aspect-[578/351] w-full" />
          <PanelImage src={images[2]} className="aspect-[578/351] w-full" />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 items-start gap-2 lg:grid-cols-1">
        <Text as="div" className="prose-strong px-2">
          {panel.body}
        </Text>
        <div className="grid gap-2">
          <PanelImage src={images[0]} className="aspect-[4/3] w-full" />
          <PanelImage src={images[1]} className="aspect-[4/3] w-full" />
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="grid grid-cols-2 items-center gap-2 lg:grid-cols-1">
        <Text as="div" className="prose-strong px-2">
          {panel.body}
        </Text>
        <PanelImage src={images[0]} className="aspect-[4/3] w-full" />
      </div>
    );
  }

  return (
    <Text as="div" className="prose-strong max-w-3xl px-2">
      {panel.body}
    </Text>
  );
}

function SplitIntroTabPanelContent({
  panel,
}: {
  panel: AddressServicePageSplitIntroPanel;
}) {
  return (
    <div className="flex flex-col gap-20 lg:gap-16">
      <div className="grid grid-cols-2 items-end gap-20 lg:grid-cols-1 lg:gap-12">
        <div className="flex flex-col gap-4">
          <IconSurface src={sectionIcons[panel.iconKey]} size="feature" />
          <div className="flex flex-col gap-6">
            <FeaturePageHeading as="h3" variant="sectionTitleLg">
              {panel.leftHeading}
            </FeaturePageHeading>
            {panel.leftSubtitle ? <Text>{panel.leftSubtitle}</Text> : null}
            {panel.datasets ? (
              <SupportedDatasetsBar
                datasets={panel.datasets}
                label="Included datasets:"
              />
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Text as="div" className="prose-strong">
            {panel.rightBody}
          </Text>
          {panel.learnMoreHref ? (
            <LearnMoreLink href={panel.learnMoreHref} />
          ) : null}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-content-wide">
        {panel.heroImageKey === "humanTouchAnimated" ? (
          <HumanTouchAnimated />
        ) : (
          <div className="relative aspect-[1200/673] w-full">
            <Image
              src={panel.heroImageKey}
              alt=""
              fill
              className="object-contain"
              sizes="1200px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function SecurityFeatureCard({
  card,
}: {
  card: AddressServicePageFeatureCard;
}) {
  return (
    <article className="flex w-full max-w-sm flex-col gap-4">
      <div className="relative aspect-[441/363] w-full overflow-hidden rounded-radius-lg">
        <Image
          src={card.imageKey}
          alt=""
          fill
          className="object-cover"
          sizes="441px"
        />
      </div>
      <div className="flex flex-col gap-4 px-1">
        <Text className="prose-strong">{card.body}</Text>
        {card.learnMoreHref ? (
          <LearnMoreLink href={card.learnMoreHref} />
        ) : null}
      </div>
    </article>
  );
}

function SecurityAdvancedTabPanelContent({
  panel,
}: {
  panel: AddressServicePageSecurityAdvancedPanel;
}) {
  return (
    <div className="flex flex-col gap-20 lg:gap-16">
      <div className="grid grid-cols-2 items-start gap-20 lg:grid-cols-1 lg:gap-12">
        <div className="flex flex-col gap-4">
          <IconSurface src={sectionIcons[panel.iconKey]} />
          <div className="space-y-2 ">
            <FeaturePageHeading as="h3" variant="sectionTitleLg">
              {panel.leftHeading}
            </FeaturePageHeading>
            <Link
              href="/seltaris-plus"
              className="inline-block font-body text-body-lg font-medium text-brand py-2 px-4 bg-brand-light/50 rounded-radius-sm"
            >
              {panel.seltarisPlusNote}
            </Link>
            {/* <div className="space-y-1">
              <p className="font-body text-body-lg font-medium text-text">
                {panel.price}
              </p>
              <Text variant="body-sm" className="text-muted">
                {panel.gstNote}
              </Text>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Text as="div" className="prose-strong">
            {panel.rightBody}
          </Text>
          {panel.learnMoreHref ? (
            <LearnMoreLink href={panel.learnMoreHref} />
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-3 items-start gap-8 lg:grid-cols-1">
        {panel.featureCards.map((card) => (
          <SecurityFeatureCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function SecurityStandardTabPanelContent({
  panel,
}: {
  panel: AddressServicePageSecurityStandardPanel;
}) {
  return (
    <div className="flex flex-col gap-20 lg:gap-16">
      <div className="grid grid-cols-2 items-start gap-20 lg:grid-cols-1 lg:gap-12">
        <div className="flex flex-col gap-8">
          <IconSurface src={sectionIcons[panel.iconKey]} />
          <div className="space-y-4">
            <FeaturePageHeading as="h3" variant="sectionTitleLg">
              {panel.leftHeading}
            </FeaturePageHeading>
            <p className="font-body text-body-lg font-medium text-brand">
              {panel.priceLabel}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Text as="div" className="prose-strong">
            {panel.rightBody}
          </Text>
          {panel.learnMoreHref ? (
            <LearnMoreLink href={panel.learnMoreHref} />
          ) : null}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-content-wide">
        <div className="relative aspect-[994/497] w-full ">
          <Image
            src={panel.heroImageKey}
            alt=""
            fill
            className="object-contain rounded-radius-lg"
            sizes="994px"
          />
        </div>
      </div>
    </div>
  );
}

function TabPanelRenderer({ panel }: { panel: AddressServicePageTabPanel }) {
  switch (panel.layout) {
    case "grid":
      return <GridTabPanelContent panel={panel} />;
    case "refinementCodes":
      return <AddressRefinementCodesPanel panel={panel} />;
    case "dataAccuracyCodes":
      return <AddressDataAccuracyCodesPanel panel={panel} />;
    case "sampleExamples":
      return <AddressSampleExamplesPanel panel={panel} />;
    case "resultFile":
      return <AddressResultFilePanel panel={panel} />;
    case "splitIntro":
      return <SplitIntroTabPanelContent panel={panel} />;
    case "securityAdvanced":
      return <SecurityAdvancedTabPanelContent panel={panel} />;
    case "securityStandard":
      return <SecurityStandardTabPanelContent panel={panel} />;
    default:
      return null;
  }
}

function TabFeatureSection({
  section,
}: {
  section: AddressServicePageTabSection;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const panel = section.panels[activeTab];
  const tabLabels = section.panels.map((item) => item.label);
  const contentVariant = section.contentVariant ?? "grid";

  return (
    <section
      id={section.sectionId}
      className="scroll-mt-24 pb-section"
    >
      <Container className="mx-auto flex max-w-content-wide flex-col gap-12 ">
        <div className="flex flex-col items-start justify-between gap-4">
          <FeaturePageHeading as="h2" variant="sectionTitle">
            {section.heading}
          </FeaturePageHeading>

          <TabGroup
            tabs={tabLabels}
            activeIndex={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {contentVariant === "grid" ? (
          <div className="rounded-radius-panel ">
            <TabPanelRenderer panel={panel} />
          </div>
        ) : (
          <TabPanelRenderer panel={panel} />
        )}
      </Container>
    </section>
  );
}

export function AddressServicePageHero() {
  const { hero } = useAddressServicePage();

  return (
    <section className="bg-brand-surface py-section-sm">
      <Container className="flex flex-col gap-12">
        <Link
          href={hero.breadcrumb.href}
          className="inline-flex w-fit items-center gap-2.5"
        >
          <Image
            src={siteAssets.arrowLeftWrap}
            alt=""
            width={24}
            height={24}
            className="shrink-0"
            aria-hidden
          />
          <span className="font-body text-lg font-medium text-text">
            {hero.breadcrumb.label}
          </span>
        </Link>

        <div className="flex flex-row items-end justify-between gap-10 lg:flex-col">
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex items-center gap-7">
              <IconSurface src={hero.logoSrc} size="hero" />
              <FeaturePageHeading
                as="h1"
                variant="heroTitle"
                className="text-left"
              >
                {hero.heading}
              </FeaturePageHeading>
            </div>

            <SupportedDatasetsBar datasets={hero.datasets} />
          </div>

          <SupportSpecialistCard
            heading={hero.supportHeading}
            linkText={hero.supportCta.label}
            href={hero.supportCta.href}
          />
        </div>
      </Container>
    </section>
  );
}

export function AddressServicePageSectionNav() {
  const { sectionNav } = useAddressServicePage();

  return (
    <section className="bg-white py-section-sm">
      <Container>
        <nav
          aria-label="Page sections"
          className="grid grid-cols-6 gap-6 lg:grid-cols-3 sm:grid-cols-2"
        >
          {sectionNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex flex-col items-center gap-3 text-center border-border border rounded-radius-md p-6 hover:border-brand/30 hover:bg-brand-light/30"
            >
              <IconSurface
                src={item.iconSrc}
                size="nav"
                variant="custom"
                backgroundClassName="bg-brand-surface"
              />
              <FeaturePageHeading
                as="span"
                variant="featureCardEyebrow"
                className="text-paragraph"
              >
                {item.label}
              </FeaturePageHeading>
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}

export function AddressServicePageOverviewSection() {
  const { overview } = useAddressServicePage();

  return (
    <section
      id="overview"
      className="scroll-mt-24 pb-section"
    >
      <Container className="mx-auto flex max-w-content-wide flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="space-y-5">
            <Eyebrow label={overview.eyebrow} />
            <FeaturePageHeading as="h2" variant="sectionTitle">
              {overview.heading}
            </FeaturePageHeading>
          </div>

          <div className="grid grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-12">
            <Text as="div" className="prose-stack">
              {overview.leftBody}
            </Text>
            <Text>{overview.rightBody}</Text>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-content-wide">
          {overview.heroMockupKey === "addressValidateAnimation" ? (
            <AddressValidateAnimation />
          ) : (
            <div className="relative aspect-[1200/673] w-full lg:aspect-[3/2] sm:aspect-[4/3]">
              <Image
                src={overview.heroMockupSrc!}
                alt={overview.heroMockupAlt ?? ""}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 1200px"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function AddressServicePageWhatsIncludedSection() {
  const { whatsIncludedSection } = useAddressServicePage();
  return <TabFeatureSection section={whatsIncludedSection} />;
}

export function AddressServicePageDataQualitySection() {
  const { dataQualitySection } = useAddressServicePage();
  return <TabFeatureSection section={dataQualitySection} />;
}

export function AddressServicePagePerformanceSection() {
  const { performanceSection } = useAddressServicePage();
  return <TabFeatureSection section={performanceSection} />;
}

export function AddressServicePageSecuritySection() {
  const { securitySection } = useAddressServicePage();
  return <TabFeatureSection section={securitySection} />;
}

export function AddressServicePagePricingSection() {
  const { pricingIntro, pricingCards } = useAddressServicePage();

  return (
    <section
      id="pricing"
      className="scroll-mt-24 pb-section"
    >
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <FeaturePageHeading as="h2" variant="sectionTitle">
            {pricingIntro.heading}
          </FeaturePageHeading>
        </div>

        <div className="grid w-full grid-cols-3 gap-6 lg:grid-cols-1">
          {pricingCards.map((card) => (
            <PricingCard
              key={card.id}
              label={card.label}
              tone={card.tone}
              iconSrc={pricingIcons[card.iconKey]}
              title={card.title}
              description={card.description}
              features={card.features}
              footerNote={card.footerNote}
              price={card.price}
              learnMoreHref={card.learnMoreHref}
              cta={card.cta}
              showAustralia={card.showAustralia}
              showNewZealand={card.showNewZealand}
              showInternational={card.showInternational}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
