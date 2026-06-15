import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  comingSoon?: boolean;
};

export function ServiceCard({
  title,
  description,
  iconSrc,
  comingSoon,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-1 items-start gap-5 rounded-radius-md border border-border bg-white p-4",
        comingSoon && "opacity-50",
      )}
    >
      {comingSoon ? (
        <div className="absolute -top-4 right-6">
          <Badge>COMING SOON</Badge>
        </div>
      ) : null}
      <div className="relative size-service-icon shrink-0">
        <Image
          src={iconSrc}
          alt=""
          fill
          className="object-contain"
          sizes="61px"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <Heading as="h3" level="h3">
          {title}
        </Heading>
        <Text variant="caption">{description}</Text>
      </div>
    </article>
  );
}
