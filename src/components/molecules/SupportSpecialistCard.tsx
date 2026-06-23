import { AppImage as Image } from "@/components/atoms/AppImage";
import Link from "next/link";
import { assets } from "@/lib/assets";
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
  href = "#contact",
  className,
}: SupportSpecialistCardProps) {
  return (
    <div
      className={cn(
        "group w-fit shrink-0 rounded-radius-lg border border-border bg-white p-4",
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="relative size-[46px] shrink-0 overflow-hidden rounded-full border border-border bg-white">
          <Image
            src={assets.seltarisPlusPage.supportSpecialist}
            alt=""
            fill
            className="object-cover object-top"
            sizes="46px"
          />
        </div>
        <div className="flex flex-col gap-.5">
          <p className="font-body text-body font-semibold text-text">
            {heading}
          </p>
          <Link
            href={href}
            className="inline-flex items-center font-body text-body-sm font-semibold text-brand"
          >
            {linkText}
            <span
              aria-hidden
              className="ml-0 inline-grid grid-cols-[0fr] opacity-0 transition-[grid-template-columns,margin,opacity] duration-200 ease-out group-hover:ml-1.5 group-hover:grid-cols-[1fr] group-hover:opacity-100"
            >
              <span className="min-w-0 overflow-hidden">
                <Image
                  src={assets.learnMoreArrow}
                  alt=""
                  width={10}
                  height={8}
                  aria-hidden
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
