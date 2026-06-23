"use client";

import { AppImage as Image } from "@/components/atoms/AppImage";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { IconSurface } from "@/components/atoms/IconSurface";
import { Text } from "@/components/atoms/Text";
import { useAddressServicePage } from "@/components/organisms/AddressServicePageContext";
import { AddressDataAccuracyCodesPanel } from "@/components/molecules/AddressDataAccuracyCodesPanel";
import { AddressRefinementCodesPanel } from "@/components/molecules/AddressRefinementCodesPanel";
import { AddressResultFilePanel } from "@/components/molecules/AddressResultFilePanel";
import { AddressSampleExamplesPanel } from "@/components/molecules/AddressSampleExamplesPanel";
import { PricingCard } from "@/components/molecules/PricingCard";
import { SupportSpecialistCard } from "@/components/molecules/SupportSpecialistCard";
import { SupportedDatasetsBar } from "@/components/molecules/SupportedDatasetsBar";
import { TabGroup } from "@/components/molecules/TabGroup";
import { AddressValidateAnimation } from "@/components/svg-animations/AddressValidateAnimation";
import { HumanTouchAnimated } from "@/components/svg-animations/HumanTouchAnimated";
import { assets } from "@/lib/assets";
import { getAddressQualityHealthCheckReportImage } from "@/lib/address-quality-health-check-report-images";
import type {
  AddressServicePageFeatureCard,
  AddressServicePageGridPanel,
  AddressServicePageIconKey,
  AddressServicePageSecurityAdvancedPanel,
  AddressServicePageSecurityStandardPanel,
  AddressServicePageSplitIntroPanel,
  AddressServicePageTabPanel,
  AddressServicePageTabSection,
} from "@/lib/types/address-service-page";
import { cn } from "@/lib/utils";

const pricingIcons = {
  health: assets.pricingIcons.health,
  repaired: assets.pricingIcons.repaired,
  subscription: assets.pricingIcons.subscription,
} as const;

const sectionIcons: Record<AddressServicePageIconKey, string> = {
  humanTouchLogo: assets.featureIcons.humanTouch,
  altraserviceLogo: assets.featureIcons.altraService,
  dataProtectionLogo: assets.featureIcons.advancedDataProtection,
};

function LearnMoreLink({ href }: { href: string }) {
  return (
    <Button href={href} variant="ghost" size="small">
      Learn more
    </Button>
  );
}

function PanelImage({
  imageKey,
  className,
}: {
  imageKey: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-radius-lg ", className)}
    >
      <Image
        src={getAddressQualityHealthCheckReportImage(imageKey)}
        alt=""
        fill
        className="object-cover"
        sizes="578px"
      />
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
      <div className="grid gap-2 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-1 items-center rounded-radius-md p-8">
            <Text as="div" className="prose-strong">
              {panel.body}
            </Text>
          </div>
          <PanelImage
            imageKey={images[0]}
            className="aspect-[578/351] w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <PanelImage
            imageKey={images[1]}
            className="aspect-[578/351] w-full"
          />
          <PanelImage
            imageKey={images[2]}
            className="aspect-[578/351] w-full"
          />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid gap-2 lg:grid-cols-2 lg:items-start">
        <Text as="div" className="prose-strong px-2">
          {panel.body}
        </Text>
        <div className="grid gap-2">
          <PanelImage imageKey={images[0]} className="aspect-[4/3] w-full" />
          <PanelImage imageKey={images[1]} className="aspect-[4/3] w-full" />
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="grid gap-2 lg:grid-cols-2 lg:items-center">
        <Text as="div" className="prose-strong px-2">
          {panel.body}
        </Text>
        <PanelImage imageKey={images[0]} className="aspect-[4/3] w-full" />
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
    <div className="flex flex-col gap-16 lg:gap-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-20">
        <div className="flex flex-col gap-8">
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
              src={getAddressQualityHealthCheckReportImage(panel.heroImageKey)}
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
          src={getAddressQualityHealthCheckReportImage(card.imageKey)}
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
    <div className="flex flex-col gap-16 lg:gap-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div className="flex flex-col gap-8">
          <IconSurface src={sectionIcons[panel.iconKey]} />
          <div className="space-y-4">
            <FeaturePageHeading as="h3" variant="sectionTitleLg">
              {panel.leftHeading}
            </FeaturePageHeading>
            <Link
              href="/seltaris-plus"
              className="inline-block font-body text-body-lg font-medium text-brand"
            >
              {panel.seltarisPlusNote}
            </Link>
            <div className="space-y-1">
              <p className="font-body text-body-lg font-medium text-text">
                {panel.price}
              </p>
              <Text variant="body-sm" className="text-muted">
                {panel.gstNote}
              </Text>
            </div>
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

      <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
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
    <div className="flex flex-col gap-16 lg:gap-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
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
            src={getAddressQualityHealthCheckReportImage(panel.heroImageKey)}
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
      className="scroll-mt-24 px-container-padding pb-section"
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
    <section className="bg-brand-surface px-container-padding py-section-sm">
      <Container className="flex flex-col gap-12">
        <Link
          href={hero.breadcrumb.href}
          className="inline-flex w-fit items-center gap-2.5"
        >
          <Image
            src={assets.arrowLeftWrap}
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

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
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
    <section className="bg-white px-container-padding py-section-sm">
      <Container>
        <nav
          aria-label="Page sections"
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 "
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
      className="scroll-mt-24 px-container-padding pb-section"
    >
      <Container className="mx-auto flex max-w-content-wide flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div className="space-y-5">
            <Eyebrow label={overview.eyebrow} />
            <FeaturePageHeading as="h2" variant="sectionTitle">
              {overview.heading}
            </FeaturePageHeading>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
            <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[1200/673]">
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
      className="scroll-mt-24 px-container-padding pb-section"
    >
      <Container className="flex flex-col gap-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <FeaturePageHeading as="h2" variant="sectionTitle">
            {pricingIntro.heading}
          </FeaturePageHeading>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
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
