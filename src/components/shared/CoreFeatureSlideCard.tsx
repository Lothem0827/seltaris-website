import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

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
      <div className="flex shrink-0 flex-col gap-4 p-8 h-full justify-between">
        <div className="flex flex-col gap-3">
          <p className="core-feature-card-eyebrow">{eyebrow}</p>
          <Heading level="subheading">{heading}</Heading>
          <Text>{body}</Text>
        </div>

        <Button href={href} variant="ghost" size="small">
          {cta}
        </Button>
      </div>

      {/* <div className="mt-auto w-full">
        <Image
          src={visualSrc}
          alt=""
          width={448}
          height={336}
          className="block w-full"
          style={{ width: "100%", height: "auto" }}
          sizes="448px"
        />
      </div> */}
    </article>
  );
}
