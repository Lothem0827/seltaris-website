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
  size?: "default" | "large";
  className?: string;
};

export function CenteredShowcase({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  imageHeight = "h-[556px]",
  size = "default",
  className,
}: CenteredShowcaseProps) {
  return (
    <div className={cn("flex flex-col items-center gap-12 text-center", className)}>
      <div className="mx-auto max-w-3xl space-y-4">
        <Heading
          level={size === "large" ? "display" : "h1"}
          className={size === "large" ? "!text-[68px] !leading-[1.35]" : undefined}
        >
          {title}
        </Heading>
        {subtitle ? (
          <Text variant="body" className="text-subheading font-semibold">
            {subtitle}
          </Text>
        ) : null}
      </div>
      <div className={cn("relative w-full max-w-container", imageHeight)}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="1200px"
        />
      </div>
    </div>
  );
}
