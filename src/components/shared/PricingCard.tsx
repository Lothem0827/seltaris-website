import Image from "next/image";
import { RegionBadge } from "@/components/shared/RegionBadge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

export type PricingCardTone = "default" | "success" | "subscription";

type PricingCardProps = {
  label: string;
  tone: PricingCardTone;
  borderClass?: string;
  iconSrc?: string;
  title: string;
  description: string;
  features: string[];
  footerNote?: string;
  price?: { amount: string; gst?: string; note?: string };
  cta: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
  };
  learnMoreHref?: string;
  showAustralia?: boolean;
  showNewZealand?: boolean;
  showInternational?: boolean;
};

const headerTones: Record<PricingCardTone, string> = {
  default: "bg-text",
  success: "bg-pricing-success",
  subscription: "bg-brand",
};

export function PricingCard({
  label,
  tone,
  borderClass,
  iconSrc,
  title,
  description,
  features,
  footerNote,
  price,
  cta,
  learnMoreHref,
  showAustralia,
  showNewZealand,
  showInternational,
}: PricingCardProps) {
  const region = showAustralia
    ? ("australia" as const)
    : showNewZealand
      ? ("nz" as const)
      : showInternational
        ? ("international" as const)
        : null;

  return (
    <article
      className={cn(
        "flex min-h-pricing-card flex-1 flex-col overflow-hidden rounded-radius-lg p-1",
        headerTones[tone],
        borderClass,
      )}
    >
      <p className="py-3 text-center font-body text-sm font-extrabold uppercase tracking-widest text-white">
        {label}
      </p>
      <div className="flex flex-1 flex-col rounded-radius-md bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          {iconSrc ? (
            <div className="relative size-12">
              <Image src={iconSrc} alt="" fill className="object-contain" />
            </div>
          ) : (
            <span />
          )}
          {region ? <RegionBadge region={region} size="sm" /> : null}
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="space-y-2">
            <Heading as="h3" level="panel" className="w-[80%]">
              {title}
            </Heading>
            <Text>{description}</Text>
            {learnMoreHref ? (
              <Button href={learnMoreHref} variant="ghost" size="small">
                Learn more
              </Button>
            ) : null}
          </div>

          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Image
                  src={siteAssets.checkIcon}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                  aria-hidden
                />
                <Text>{feature}</Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-3">
          {footerNote ? (
            <Text variant="micro" className="text-center text-muted">
              {footerNote}
            </Text>
          ) : null}
          {price ? (
            <div className="space-y-1">
              <p className="font-display text-xl font-bold text-text">
                {price.amount}
              </p>
              {price.gst ? <Text variant="body-sm">{price.gst}</Text> : null}
              {price.note ? <Text variant="body-sm">{price.note}</Text> : null}
            </div>
          ) : null}
          <Button
            href={cta.href}
            variant={cta.variant === "secondary" ? "secondary" : "primary"}
            disabled={cta.disabled}
            className={cn(
              "w-full",
              cta.variant === "secondary" &&
                "bg-text text-white hover:bg-text/90",
            )}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </article>
  );
}
