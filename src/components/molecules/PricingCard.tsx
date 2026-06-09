import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";
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
  cta: { label: string; href: string; variant?: "primary" | "secondary" };
  showAustralia?: boolean;
};

const headerTones: Record<PricingCardTone, string> = {
  default: "bg-text",
  success: "bg-pricing-success",
  subscription: "bg-gradient-popular",
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
  showAustralia,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-pricing-card flex-1 flex-col overflow-hidden rounded-radius-lg p-1",
        headerTones[tone],
        borderClass,
      )}
    >
      <p className="py-3 text-center font-body text-body font-extrabold uppercase tracking-wide text-white">
        {label}
      </p>
      <div className="flex flex-1 flex-col rounded-radius-md bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          {iconSrc ? (
            <div className="relative size-12">
              <Image src={iconSrc} alt="" fill className="object-contain" />
            </div>
          ) : (
            <span />
          )}
          {showAustralia ? (
            <span className="inline-flex items-center gap-1 rounded-radius-full border border-border px-3 py-1.5 text-xs font-medium">
              <Image
                src={assets.australiaFlag}
                alt=""
                width={16}
                height={16}
                aria-hidden
              />
              Australia
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="space-y-2">
            <Heading as="h3" level="h2">
              {title}
            </Heading>
            <Text>{description}</Text>
            <Link
              href="#learn-more"
              className="inline-flex items-center gap-2 font-label text-body-sm text-brand"
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
          </div>

          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Image
                  src={assets.checkIcon}
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
              <p className="font-display text-xl font-bold text-pricing-navy">
                {price.amount}
              </p>
              {price.gst ? (
                <Text variant="body-sm">{price.gst}</Text>
              ) : null}
              {price.note ? (
                <Text variant="body-sm">{price.note}</Text>
              ) : null}
            </div>
          ) : null}
          <Button
            href={cta.href}
            variant={cta.variant === "secondary" ? "secondary" : "primary"}
            className={cn(
              "w-full",
              cta.variant === "secondary" && "bg-text text-white hover:bg-text/90",
            )}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </article>
  );
}
