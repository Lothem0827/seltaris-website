import Image from "next/image";
import type { ReactNode } from "react";
import { RegionBadge } from "@/components/shared/RegionBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type GetStartedServicePanelProps = {
  children: ReactNode;
  className?: string;
};

export function GetStartedServicePanel({
  children,
  className,
}: GetStartedServicePanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-radius-xl bg-brand-surface p-20 lg:p-6",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-16 size-[480px] rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 -left-24 size-[360px] rounded-full bg-brand/5 blur-3xl"
      />
      <div className="relative flex flex-col gap-4">{children}</div>
    </div>
  );
}

type GetStartedServiceHeaderProps = {
  iconSrc: string;
  availability: string;
  serviceTitle: string;
  showDatasets?: boolean;
  ctaHref: string;
};

export function GetStartedServiceHeader({
  iconSrc,
  availability,
  serviceTitle,
  showDatasets,
  ctaHref,
}: GetStartedServiceHeaderProps) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-6 rounded-radius-lg bg-white p-6">
      <div className="flex items-center gap-4">
        <div className="relative flex size-16 shrink-0 items-center justify-center rounded-radius-md bg-brand-surface">
          <Image
            src={iconSrc}
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div>
          <p className="font-body text-body text-paragraph">{availability}</p>
          <p className="font-body text-2xl font-semibold text-text">
            {serviceTitle}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {showDatasets ? (
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-body text-micro font-bold uppercase tracking-widest text-paragraph">
              Supported datasets:
            </p>
            <RegionBadge region="australia" />
          </div>
        ) : null}
        <Button href={ctaHref} size="small" className="shrink-0">
          Start for free
        </Button>
      </div>
    </div>
  );
}
