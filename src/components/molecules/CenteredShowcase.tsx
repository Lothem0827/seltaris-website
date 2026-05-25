import Image from "next/image";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CenteredShowcaseProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imageHeight?: string;
  className?: string;
};

export function CenteredShowcase({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  imageHeight = "h-[556px]",
  className,
}: CenteredShowcaseProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-12 text-center", className)}
    >
      <div className="mx-auto max-w-3xl space-y-4">
        <Heading level="display" className="!text-[48px] !leading-[1.35]">
          {title}
        </Heading>
        {subtitle ? (
          <Text variant="body" className="text-subheading font-semibold">
            {subtitle}
          </Text>
        ) : null}
      </div>
      <div className={cn("relative w-full max-w-container", imageHeight)}>
        <Image src={imageSrc} alt={imageAlt} fill sizes="1200px" />
      </div>
    </div>
  );
}
