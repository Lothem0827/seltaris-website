import Image from "next/image";
import { GBG_CUSTOMER_SUPPORT_URL, siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

type SupportSpecialistCardProps = {
  heading?: string;
  linkText?: string;
  href?: string;
  className?: string;
};

export function SupportSpecialistCard({
  heading = "Need more licenses?",
  linkText = "Ask a Support Specialist",
  href = GBG_CUSTOMER_SUPPORT_URL,
  className,
}: SupportSpecialistCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block shrink-0 rounded-radius-lg border border-border bg-white p-4 transition-colors hover:border-brand/30",
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="relative size-[46px] shrink-0 overflow-hidden rounded-full border border-border bg-white">
          <Image
            src={siteAssets.supportSpecialist}
            alt=""
            fill
            className="object-cover object-top"
            sizes="46px"
          />
        </div>
        <div className="shrink-0 space-y-0.5">
          <p className="whitespace-nowrap font-body text-body font-semibold text-text">
            {heading}
          </p>
          <span className="inline-flex items-center font-body text-body-sm font-semibold text-brand">
            {linkText}
            <span
              aria-hidden
              className="ml-0 inline-grid grid-cols-[0fr] opacity-0 transition-[grid-template-columns,margin,opacity] duration-200 ease-out group-hover:ml-1.5 group-hover:grid-cols-[1fr] group-hover:opacity-100"
            >
              <span className="min-w-0 overflow-hidden">
                <Image
                  src={siteAssets.learnMoreArrow}
                  alt=""
                  width={10}
                  height={8}
                  aria-hidden
                />
              </span>
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
