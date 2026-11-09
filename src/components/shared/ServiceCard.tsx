import Image from "@/components/ui/Image";
import { CursorGlowCard } from "@/components/molecules/CursorGlowCard";
import { Badge } from "@/components/ui/Badge";import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  comingSoon?: boolean;
};

function ServiceCardContent({
  title,
  description,
  iconSrc,
  comingSoon,
}: ServiceCardProps) {
  return (
    <>
      <div className="relative size-service-icon shrink-0">
        <Image src={iconSrc}
          alt=""
          fill
          className="object-contain"
          sizes="61px" />
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className={cn("type-14-bold text-text", comingSoon ? "text-tab-inactive" : undefined)}>
          {title}
        </h3>
        <p className={cn("type-12 text-paragraph", comingSoon ? "text-tab-inactive" : undefined)}>
          {description}
        </p>
      </div>
    </>
  );
}

export function ServiceCard({
  title,
  description,
  iconSrc,
  comingSoon,
}: ServiceCardProps) {
  if (comingSoon) {
    return (
      <article className={cn(
          "bg-white relative flex h-full flex-1 items-center justify-center gap-4 rounded-radius-md border border-border/70  p-4 sm:justify-start",
        )}>
        <div className="absolute -top-4 right-6">
          <Badge>COMING SOON</Badge>
        </div>
        <ServiceCardContent title={title}
          description={description}
          iconSrc={iconSrc}
          comingSoon />
      </article>
    );
  }

  return (
    <CursorGlowCard as="article"
      className="h-full flex-1 rounded-radius-md"
      innerClassName="flex items-center justify-center gap-4 rounded-radius-md p-4 sm:justify-start"
      glowRadius={160}>
      <ServiceCardContent title={title}
        description={description}
        iconSrc={iconSrc} />
    </CursorGlowCard>
  );
}
