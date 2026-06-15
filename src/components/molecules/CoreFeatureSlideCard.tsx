import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

type CoreFeatureSlideCardProps = {
  visualSrc: string;
  eyebrow: string;
  heading: ReactNode;
  body: string;
  href: string;
  cta: string;
  className?: string;
};

export function CoreFeatureSlideCard({
  visualSrc,
  eyebrow,
  heading,
  body,
  href,
  cta,
  className,
}: CoreFeatureSlideCardProps) {
  return (
    <article
      className={cn(
        "core-feature-slide flex h-core-feature-slide w-core-feature-slide shrink-0 flex-col overflow-hidden rounded-radius-panel bg-white",
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-12 p-12">
        <div className="flex shrink-0 flex-col gap-7">
          <div className="flex flex-col gap-3">
            <p className="core-feature-card-eyebrow">{eyebrow}</p>
            <h3 className="core-feature-card-title">{heading}</h3>
          </div>
          <Text>{body}</Text>
          <Button href={href} variant="secondary" className="w-fit">
            {cta}
          </Button>
        </div>

        <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:min-h-0 sm:flex-1">
          <Image
            src={visualSrc}
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 88vw, 640px"
          />
        </div>
      </div>
    </article>
  );
}
