import Image from "@/components/ui/Image";
import Link from "next/link";
import { Text } from "@/components/ui/Text";
import type { SolutionsNavPromo } from "@/components/layout/solutions-nav.content";

type SolutionsNavPromoCardProps = SolutionsNavPromo & {
  onNavigate?: () => void;
};

export function SolutionsNavPromoCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  onNavigate,
}: SolutionsNavPromoCardProps) {
  return (
    <Link href={href} className="group block min-w-0" onClick={onNavigate}>
      <div className="flex h-full flex-col gap-4 rounded-radius-lg bg-brand-light p-5 transition-colors hover:bg-brand-light/80">
        <div className="overflow-hidden rounded-radius-md bg-white p-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={280}
            height={180}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-body text-body font-semibold text-text transition-colors group-hover:text-brand">
            {title}
          </p>
          <Text variant="body-sm">{description}</Text>
        </div>
      </div>
    </Link>
  );
}
