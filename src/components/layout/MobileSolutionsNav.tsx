import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { siteAssets } from "@/lib/site-assets";
import {
  solutionsNavColumns,
  type SolutionsNavItem,
} from "@/lib/content/solutions-nav";

const itemClass =
  "group flex flex-col border-l-2 border-border pl-6 transition-colors hover:border-brand focus-visible:border-brand";

type MobileSolutionsNavProps = {
  onNavigate?: () => void;
};

function SolutionsNavItemBody({ item }: { item: SolutionsNavItem }) {
  return (
    <div className="flex flex-col gap-2 py-3">
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
      <Text variant="body" className="w-[75%]">
        {item.description}
      </Text>
      {item.comingSoon ? <Badge className="mt-0">COMING SOON</Badge> : null}
    </div>
  );
}

function SolutionsNavItemRow({
  item,
  onNavigate,
}: {
  item: SolutionsNavItem;
  onNavigate?: () => void;
}) {
  const isLink = Boolean(item.href);

  if (isLink) {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
          onClick={onNavigate}
        >
          <SolutionsNavItemBody item={item} />
        </a>
      );
    }

    return (
      <Link href={item.href!} className={itemClass} onClick={onNavigate}>
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
  onNavigate,
}: (typeof solutionsNavColumns)[number] & MobileSolutionsNavProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Heading level="panel">{title}</Heading>
      <div className="flex flex-col">
        {items.map((item) => (
          <SolutionsNavItemRow
            key={item.id}
            item={item}
            onNavigate={onNavigate}
          />
        ))}
        {footerLink ? (
          <Link
            href={footerLink.href}
            className={itemClass}
            onClick={onNavigate}
          >
            <div className="flex items-center justify-between gap-2 py-0">
              <span className="font-body text-body font-semibold text-text transition-colors group-hover:text-brand">
                {footerLink.label}
              </span>
              <Image
                src={siteAssets.arrowUp}
                alt=""
                width={24}
                height={24}
                className="shrink-0 rotate-180 opacity-0 transition-opacity group-hover:opacity-70 group-focus-visible:opacity-70"
                aria-hidden
              />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function MobileSolutionsNav({ onNavigate }: MobileSolutionsNavProps) {
  return (
    <div className="flex w-full flex-col gap-10 mt-3">
      {solutionsNavColumns.map((column) => (
        <SolutionsNavColumn
          key={column.title}
          {...column}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
