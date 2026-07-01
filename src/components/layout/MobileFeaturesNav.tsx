import Image from "@/components/ui/Image";
import Link from "next/link";
import { Text } from "@/components/ui/Text";
import { featureNavItems } from "@/components/layout/feature-nav.content";
import { siteAssets } from "@/lib/site-assets";

const itemClass =
  "group flex flex-col gap-2 border-l-2 border-border py-3 pl-6 transition-colors hover:border-brand focus-visible:border-brand";

type MobileFeaturesNavProps = {
  onNavigate?: () => void;
};

export function MobileFeaturesNav({ onNavigate }: MobileFeaturesNavProps) {
  return (
    <div className="flex w-full flex-col ">
      {featureNavItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={itemClass}
          onClick={onNavigate}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="font-body text-body font-semibold text-text transition-colors group-hover:text-brand">
              {item.title}
            </p>
            <Image
              src={siteAssets.arrowUp}
              alt=""
              width={24}
              height={24}
              className="shrink-0 rotate-180 opacity-0 transition-opacity group-hover:opacity-70 group-focus-visible:opacity-70"
              aria-hidden
            />
          </div>
          <Text variant="body-sm">{item.description}</Text>
        </Link>
      ))}
    </div>
  );
}
