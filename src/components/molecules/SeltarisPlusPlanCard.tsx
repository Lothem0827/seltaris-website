import { AppImage as Image } from "@/components/atoms/AppImage";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";
import {
  seltarisPlusSupportCard,
  type SeltarisPlusPlan,
} from "@/lib/content/seltaris-plus";
import { cn } from "@/lib/utils";

const tierIconStyles = {
  standard: "bg-gradient-tier-standard",
  premium: "bg-gradient-tier-premium",
  premier: "bg-gradient-tier-premier",
} as const;

function PlanTierIcon({ tier }: { tier: SeltarisPlusPlan["tier"] }) {
  return (
    <div
      className={cn(
        "relative size-12 shrink-0 overflow-hidden rounded-radius-md border border-white/50 shadow-icon-inset",
        tierIconStyles[tier],
      )}
    >
      <div className="absolute inset-1/5">
        <Image
          src="/seltaris-logo.svg"
          alt=""
          fill
          className="object-contain brightness-0 invert"
          sizes="28px"
        />
      </div>
    </div>
  );
}

function FeatureStatusIcon({
  included,
  isReports,
}: {
  included?: boolean;
  isReports?: boolean;
}) {
  if (isReports) {
    return (
      <span className="inline-flex size-3.5 items-center justify-center text-text">
        ∞
      </span>
    );
  }
  if (included === false) {
    return (
      <span className="inline-flex size-3.5 items-center justify-center text-text">
        ✕
      </span>
    );
  }
  if (included) {
    return (
      <Image
        src={assets.checkIcon}
        alt=""
        width={14}
        height={14}
        className="shrink-0"
        aria-hidden
      />
    );
  }
  return (
    <span className="inline-flex size-4 items-center justify-center text-text">
      👥
    </span>
  );
}

function PlanFeatureList({ plan }: { plan: SeltarisPlusPlan }) {
  return (
    <div className="flex flex-col gap-4 border-t border-pricing-border py-6">
      {plan.features.map((feature) => {
        const isReports = feature.label === "Health Check Reports";

        return (
          <div key={feature.label} className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <Text variant="caption" className="font-medium text-paragraph/70">
                {feature.label}
              </Text>
              <div className="flex items-center gap-2">
                <FeatureStatusIcon
                  included={feature.included}
                  isReports={isReports}
                />
                <span className="font-body text-body text-text">
                  {feature.value}
                  {feature.period ? (
                    <span className="ml-1.5 text-body-sm font-medium text-text">
                      {feature.period}
                    </span>
                  ) : null}
                </span>
              </div>
            </div>
            {feature.badge ? <Badge>{feature.badge}</Badge> : null}
            {feature.subscriptionBadge ? (
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{feature.subscriptionBadge}</Badge>
                {feature.subscriptionValue ? (
                  <Text variant="tiny" className="italic text-paragraph/70">
                    {feature.subscriptionValue}
                  </Text>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function SeltarisPlusPlanCard({ plan }: { plan: SeltarisPlusPlan }) {
  const card = (
    <article
      className={cn(
        "flex h-full flex-col justify-between rounded-radius-lg border-2 border-border bg-white p-8",
        plan.popular && "min-h-plan-popular",
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <PlanTierIcon tier={plan.tier} />
          <div className="space-y-1">
            <Heading as="h3" level="h2">
              {plan.name}
            </Heading>
            <Text className="font-medium text-paragraph">{plan.tagline}</Text>
          </div>
          <div className="flex items-end gap-1.5">
            <span className="font-body text-2xl font-medium text-text">
              {plan.price}
            </span>
            <span className="pb-1 font-body text-body font-medium text-paragraph">
              /month
            </span>
          </div>
          <Text variant="body-sm" className="text-paragraph">
            {plan.gstNote}
          </Text>
        </div>
        <PlanFeatureList plan={plan} />
      </div>
      <Button
        href={plan.cta.href}
        variant={plan.popular ? "primary" : "secondary"}
        className={cn(
          "mt-8 w-full",
          !plan.popular &&
            "border-brand/20 bg-pricing-accent-bg text-brand hover:bg-pricing-accent-bg/90",
        )}
      >
        {plan.cta.label}
      </Button>
    </article>
  );

  if (!plan.popular) {
    return card;
  }

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-10 rounded-t-radius-lg bg-gradient-popular px-6 py-4 text-center">
        <p className="font-body text-body font-semibold uppercase tracking-wide text-white">
          Most Popular Plan
        </p>
      </div>
      <div className="rounded-radius-lg bg-gradient-popular p-0.5 pt-14">
        {card}
      </div>
    </div>
  );
}

export function SeltarisPlusSupportCard() {
  const content = seltarisPlusSupportCard;

  return (
    <div className="mx-auto flex w-full max-w-support-card flex-col gap-8 rounded-radius-xl border border-border bg-white px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2">
        <p className="font-body text-xl font-semibold tracking-tight text-text">
          {content.heading}
        </p>
        <Text>{content.body}</Text>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative size-icon-support overflow-hidden rounded-full border border-border bg-white">
          <Image
            src={assets.seltarisPlusPage.supportSpecialist}
            alt=""
            fill
            className="object-cover object-top"
            sizes="52px"
          />
        </div>
        <div className="space-y-0.5">
          <p className="font-body text-lg font-semibold text-text">
            {content.supportHeading}
          </p>
          <Link
            href={content.cta.href}
            className="inline-flex items-center gap-1.5 font-body text-body font-medium text-brand"
          >
            {content.cta.label}
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
  );
}
