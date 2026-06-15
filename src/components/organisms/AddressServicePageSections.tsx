"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeaturePageHeading } from "@/components/atoms/FeaturePageHeading";
import { Text } from "@/components/atoms/Text";
import { useAddressServicePage } from "@/components/organisms/AddressServicePageContext";
import { PricingCard } from "@/components/molecules/PricingCard";
import { TabGroup } from "@/components/molecules/TabGroup";
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

const flagAssets = {
  australia: assets.australiaFlag,
  nz: assets.nzFlag,
  international: assets.internationalFlag,
} as const;

const pricingIcons = {
  health: assets.pricingIcons.health,
  repaired: assets.pricingIcons.repaired,
  subscription: assets.pricingIcons.subscription,
} as const;

const sectionIcons: Record<AddressServicePageIconKey, string> = {
  humanTouchLogo: assets.addressQualityHealthCheckReportPage.humanTouchLogo,
  altraserviceLogo: assets.addressQualityHealthCheckReportPage.altraserviceLogo,
  dataProtectionLogo:
    assets.addressQualityHealthCheckReportPage.dataProtectionLogo,
};

function LearnMoreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-body text-body-sm font-semibold text-brand"
    >
      Learn more
      <Image
        src={assets.learnMoreArrow}
        alt=""
        width={10}
        height={8}
        aria-hidden
      />
    </Link>
  );
}

function PanelImage({
  imageKey,
  className,
  objectFit = "contain",
}: {
  imageKey: string;
  className?: string;
  objectFit?: "contain" | "cover";
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-radius-lg", className)}
    >
      <Image
        src={getAddressQualityHealthCheckReportImage(imageKey)}
        alt=""
        fill
        className={cn(
          objectFit === "cover" ? "object-cover" : "object-contain",
          objectFit === "contain" && "p-4",
        )}
        sizes="578px"
      />
    </div>
  );
}

function FeatureIcon({ iconKey }: { iconKey: AddressServicePageIconKey }) {
  return (
    <div className="relative size-icon-feature overflow-hidden rounded-radius-md border border-[#230356] bg-[rgba(17,6,37,0.9)] shadow-sm">
      <Image
        src={sectionIcons[iconKey]}
        alt=""
        fill
        className="object-contain p-3"
        sizes="60px"
      />
    </div>
  );
}

function GridTabPanelContent({ panel }: { panel: AddressServicePageGridPanel }) {
  const images = panel.imageKeys;

  if (images.length >= 3) {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-1 items-center rounded-radius-md border border-border bg-white p-8">
            <Text as="div" className="prose-strong">
              {panel.body}
            </Text>
          </div>
          <PanelImage imageKey={images[0]} className="aspect-[578/351] w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <PanelImage imageKey={images[1]} className="aspect-[578/351] w-full" />
          <PanelImage imageKey={images[2]} className="aspect-[578/351] w-full" />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <Text as="div" className="prose-strong px-2">
          {panel.body}
        </Text>
        <div className="grid gap-4">
          <PanelImage imageKey={images[0]} className="aspect-[4/3] w-full" />
          <PanelImage imageKey={images[1]} className="aspect-[4/3] w-full" />
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
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
          <FeatureIcon iconKey={panel.iconKey} />
          <div className="space-y-4">
            <FeaturePageHeading as="h3" variant="sectionTitleLg">
              {panel.leftHeading}
            </FeaturePageHeading>
            {panel.leftSubtitle ? <Text>{panel.leftSubtitle}</Text> : null}
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
        <div className="relative aspect-[1200/673] w-full">
          <Image
            src={getAddressQualityHealthCheckReportImage(panel.heroImageKey)}
            alt=""
            fill
            className="object-contain"
            sizes="1200px"
          />
        </div>
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
          <FeatureIcon iconKey={panel.iconKey} />
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
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
      <div className="flex flex-col gap-8">
        <FeatureIcon iconKey={panel.iconKey} />
        <div className="space-y-4">
          <FeaturePageHeading as="h3" variant="sectionTitleLg">
            {panel.leftHeading}
          </FeaturePageHeading>
          <p className="font-body text-body-lg font-medium text-text">
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
  );
}

function TabPanelRenderer({ panel }: { panel: AddressServicePageTabPanel }) {
  switch (panel.layout) {
    case "grid":
      return <GridTabPanelContent panel={panel} />;
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

function TabFeatureSection({ section }: { section: AddressServicePageTabSection }) {
  const [activeTab, setActiveTab] = useState(0);
  const panel = section.panels[activeTab];
  const tabLabels = section.panels.map((item) => item.label);
  const contentVariant = section.contentVariant ?? "grid";

  return (
    <section
      id={section.sectionId}
      className="scroll-mt-24 px-container-padding pb-section"
    >
      <Container className="mx-auto flex max-w-content-wide flex-col gap-10">
        <FeaturePageHeading as="h2" variant="sectionTitle">
          {section.heading}
        </FeaturePageHeading>

        <TabGroup
          tabs={tabLabels}
          activeIndex={activeTab}
          onChange={setActiveTab}
        />

        {contentVariant === "grid" ? (
          <div className="rounded-radius-panel border border-border bg-white p-4 sm:p-6">
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
    <section className="bg-brand-light px-container-padding py-section">
      <Container className="flex flex-col gap-12">
        <Link
          href={hero.breadcrumb.href}
          className="inline-flex w-fit items-center gap-3"
        >
          <span className="flex size-6 items-center justify-center rounded-radius-xs border border-[#230356] bg-[linear-gradient(180deg,#2d134a_0%,#110625_100%)]">
            <Image
              src={assets.chevronDown}
              alt=""
              width={12}
              height={12}
              className="rotate-90 brightness-0 invert"
              aria-hidden
            />
          </span>
          <span className="font-body text-xl font-medium text-text">
            {hero.breadcrumb.label}
          </span>
        </Link>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex items-center gap-7">
              <div className="flex size-[100px] shrink-0 items-center justify-center rounded-radius-lg bg-[#e1f4f4]">
                <Image
                  src={hero.logoSrc}
                  alt=""
                  width={57}
                  height={57}
                  className="object-contain"
                  priority
                />
              </div>
              <FeaturePageHeading
                as="h1"
                variant="heroTitle"
                className="text-left"
              >
                {hero.heading}
              </FeaturePageHeading>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-text">
                Supported datasets:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {hero.datasets.map((dataset) => (
                  <span
                    key={dataset.id}
                    className="inline-flex items-center gap-1.5 rounded-radius-full border border-border bg-white px-3.5 py-1.5 font-body text-body-sm font-medium text-text"
                  >
                    <Image
                      src={flagAssets[dataset.flagKey]}
                      alt=""
                      width={20}
                      height={20}
                      aria-hidden
                    />
                    {dataset.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-fit shrink-0 rounded-radius-xl bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="relative size-[46px] shrink-0 overflow-hidden rounded-full border border-[#e2e8f0] bg-white">
                <Image
                  src={assets.seltarisPlusPage.supportSpecialist}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="46px"
                />
              </div>
              <div className="space-y-0.5">
                <p className="font-body text-body font-semibold text-text">
                  {hero.supportHeading}
                </p>
                <Link
                  href={hero.supportCta.href}
                  className="inline-flex items-center gap-3 font-body text-body-sm font-semibold text-brand"
                >
                  {hero.supportCta.label}
                  <Image
                    src={assets.learnMoreArrow}
                    alt=""
                    width={10}
                    height={8}
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AddressServicePageSectionNav() {
  const { sectionNav, sectionNavIconSrc } = useAddressServicePage();

  return (
    <section className="bg-white px-container-padding py-10">
      <Container>
        <nav
          aria-label="Page sections"
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {sectionNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-radius-md bg-brand-surface transition-colors group-hover:bg-brand-light">
                <Image
                  src={sectionNavIconSrc}
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </span>
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

        <div className="relative mx-auto w-full max-w-content-wide">
          <div className="relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-[1200/673]">
            <Image
              src={overview.heroMockupSrc}
              alt={overview.heroMockupAlt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 1200px"
            />
          </div>
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
          <FeaturePageHeading as="p" variant="pageEyebrow">
            {pricingIntro.eyebrow}
          </FeaturePageHeading>
          <FeaturePageHeading as="h2" variant="sectionTitle">
            {pricingIntro.heading}
          </FeaturePageHeading>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {pricingCards.map((card) => (
            <PricingCard
              key={card.id}
              label={
                card.regionLabel
                  ? `${card.label} · ${card.regionLabel}`
                  : card.label
              }
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
