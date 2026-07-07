import Image from "@/components/ui/Image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SolutionsNavPromoCard } from "@/components/layout/SolutionsNavPromoCard";
import { siteAssets } from "@/lib/site-assets";
import {
  solutionsNavColumns,
  solutionsNavPromo,
  type SolutionsNavItem,
} from "@/components/layout/solutions-nav.content";

const itemClass = "group flex flex-col gap-2 py-0 transition-colors";

function SolutionsNavItemBody({ item }: { item: SolutionsNavItem }) {
  return (
    <div className="flex flex-col gap-0.5 py-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-body text-body font-semibold text-text transition-colors group-hover:text-brand">
          {item.title}
        </p>
        <Image
          src={siteAssets.arrowUp}
          alt=""
          width={24}
          height={24}
          className="shrink-0 rotate-180 opacity-0 transition-opacity group-hover:opacity-70"
          aria-hidden
        />
      </div>
      <Text variant="body-sm">{item.description}</Text>
      {item.comingSoon ? <Badge className="mt-1.5">COMING SOON</Badge> : null}
    </div>
  );
}

function SolutionsNavItemRow({ item }: { item: SolutionsNavItem }) {
  const isLink = Boolean(item.href);

  if (isLink) {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
        >
          <SolutionsNavItemBody item={item} />
        </a>
      );
    }

    return (
      <Link href={item.href!} className={itemClass}>
        <SolutionsNavItemBody item={item} />
      </Link>
    );
  }

  return (
    <div className={itemClass}>
      <SolutionsNavItemBody item={item} />
    </div>
  );
}

function SolutionsNavColumn({
  title,
  items,
  footerLink,
}: (typeof solutionsNavColumns)[number]) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6 self-stretch">
      <Heading level="panel">{title}</Heading>
      <div className="flex flex-1 flex-col border-l-2 border-border pl-6">
        <div className="flex flex-col">
          {items.map((item) => (
            <SolutionsNavItemRow key={item.id} item={item} />
          ))}
          {footerLink ? (
            <Link href={footerLink.href} className={itemClass}>
              <div className="flex items-center justify-between gap-2">
                <span className="font-body text-body font-semibold text-text transition-colors group-hover:text-brand">
                  {footerLink.label}
                </span>
                <Image
                  src={siteAssets.arrowUp}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0 rotate-180 opacity-0 transition-opacity group-hover:opacity-70"
                  aria-hidden
                />
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function SolutionsNavPanel() {
  return (
    <div className="w-full max-w-container">
      <div className="rounded-radius-panel bg-white p-8 shadow-panel">
        <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,2.95fr)] items-stretch gap-8 lg:grid-cols-1">
          <SolutionsNavPromoCard {...solutionsNavPromo} />
          <div className="grid grid-cols-3 items-stretch gap-8 lg:grid-cols-1">
            {solutionsNavColumns.map((column) => (
              <SolutionsNavColumn key={column.title} {...column} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
