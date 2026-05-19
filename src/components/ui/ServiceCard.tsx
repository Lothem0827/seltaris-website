import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  comingSoon?: boolean;
};

export function ServiceCard({
  icon,
  title,
  description,
  comingSoon = false,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-w-0 flex-1 items-center gap-4 rounded-[13px] border border-charcoal-200 bg-white p-4 shadow-[0_36px_75px_rgba(25,117,255,0.08)]",
        comingSoon && "opacity-50",
      )}
    >
      {comingSoon ? (
        <Badge className="absolute -top-2 right-5 text-[6px] tracking-[0.83px]">
          COMING SOON
        </Badge>
      ) : null}
      <Image src={icon} alt="" width={50} height={50} className="shrink-0" />
      <div className="min-w-0">
        <h3 className="font-[family-name:var(--font-display)] text-xs font-bold text-charcoal-700">
          {title}
        </h3>
        <p className="mt-1 text-[10px] leading-[1.4] text-charcoal-500">
          {description}
        </p>
      </div>
    </article>
  );
}
