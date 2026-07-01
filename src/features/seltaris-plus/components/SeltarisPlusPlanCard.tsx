import Image from "@/components/ui/Image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SupportSpecialistCard } from "@/components/molecules/SupportSpecialistCard";
import { cn } from "@/lib/utils";

export type SeltarisPlusPlanFeature = {
  label: string;
  value: string;
  period?: string;
  badge?: string;
  included?: boolean;
  subscriptionBadge?: string;
  subscriptionValue?: string;
};

export type SeltarisPlusPlan = {
  id: string;
  tier: "free" | "standard" | "premium" | "premier";
  name: string;
  tagline: string;
  price: string;
  gstNote: string;
  features: SeltarisPlusPlanFeature[];
  cta: { label: string; href: string };
  popular?: boolean;
  popularLabel?: string;
};

const tierIcons = {
  free: "/images/seltaris-plus/standard.svg",
  standard: "/images/seltaris-plus/standard.svg",
  premium: "/images/seltaris-plus/premium.svg",
  premier: "/images/seltaris-plus/premier.svg",
} as const;

const planFeatureIcons = {
  infinity: "/images/seltaris-plus/infinity.svg",
  healthCheck: "/images/seltaris-plus/health-check.svg",
  dataProtection: "/images/seltaris-plus/data-protection.svg",
  notIncluded: "/images/seltaris-plus/not-included.svg",
  database: "/images/seltaris-plus/database.svg",
  users: "/images/seltaris-plus/users.svg",
} as const;

function getFeatureIconSrc(feature: SeltarisPlusPlanFeature): string {
  switch (feature.label) {
    case "Health Check Reports":
      return feature.value.toLowerCase().includes("unlimited")
        ? planFeatureIcons.infinity
        : planFeatureIcons.healthCheck;
    case "Advanced Data Protection":
      return feature.included
        ? planFeatureIcons.dataProtection
        : planFeatureIcons.notIncluded;
    case "Volume discounts":
    case "Volume Discounts":
      return feature.included
        ? planFeatureIcons.database
        : planFeatureIcons.notIncluded;
    case "Shared Licences":
      return planFeatureIcons.users;
    default:
      return planFeatureIcons.notIncluded;
  }
}

function PlanTierIcon({ tier }: { tier: SeltarisPlusPlan["tier"] }) {
  return (
    <div className="relative size-12 shrink-0">
      <Image
        src={tierIcons[tier]}
        alt=""
        fill
        className="object-contain"
        sizes="48px"
      />
    </div>
  );
}

function FeatureStatusIcon({ feature }: { feature: SeltarisPlusPlanFeature }) {
  return (
    <Image
      src={getFeatureIconSrc(feature)}
      alt=""
      width={14}
      height={14}
      className="shrink-0"
      aria-hidden
    />
  );
}

function PlanFeatureList({ plan }: { plan: SeltarisPlusPlan }) {
  const isPopular = Boolean(plan.popular);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-t border-border",
        isPopular ? "py-6" : "py-5",
      )}
    >
      {plan.features.map((feature) => (
        <div key={feature.label} className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <Text variant="caption" className="font-medium text-paragraph/70">
              {feature.label}
            </Text>
            <div className="flex items-center gap-2">
              <FeatureStatusIcon feature={feature} />
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
      ))}
    </div>
  );
}

export function SeltarisPlusPlanCard({ plan }: { plan: SeltarisPlusPlan }) {
  const isPopular = Boolean(plan.popular);

  const card = (
    <article
      className={cn(
        "flex flex-col justify-between rounded-radius-lg bg-white p-8",
        !isPopular && "border-2 border-border",
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
          <div className="flex flex-col gap-1">
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
        </div>
        <PlanFeatureList plan={plan} />
      </div>
      <Button
        href={plan.cta.href}
        variant={isPopular ? "primary" : "secondary"}
        className={cn(
          "mt-8 w-full",
          !isPopular &&
            "border-brand/20 bg-pricing-accent-bg text-brand hover:bg-pricing-accent-bg/90",
        )}
      >
        {plan.cta.label}
      </Button>
    </article>
  );

  if (!isPopular) {
    return card;
  }

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-10 rounded-t-radius-lg bg-brand px-6 py-4 text-center">
        <p className="font-body text-body font-semibold uppercase tracking-wide text-white">
          {plan.popularLabel ?? "Most Popular Plan"}
        </p>
      </div>
      <div className="rounded-[20px] bg-brand p-1 pt-14">{card}</div>
    </div>
  );
}

export function SeltarisPlusSupportCard() {
  return (
    <div className="mx-auto flex w-full max-w-support-card flex-row items-center justify-between gap-8 rounded-radius-lg border border-border bg-white px-6 py-5 lg:flex-col lg:items-stretch">
      <div className="space-y-2">
        <p className="font-body text-xl font-semibold tracking-tight text-text">
          Need more licences?
        </p>
        <Text>
          Have a chat with a Data Quality Specialist to discuss custom plans for
          your enterprise organisation.
        </Text>
      </div>
      <SupportSpecialistCard
        heading="Need GBG support?"
        linkText="Ask a Data Quality Specialist"
        className="shrink-0 border-0"
      />
    </div>
  );
}
