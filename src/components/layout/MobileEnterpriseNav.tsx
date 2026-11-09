import type { ReactNode } from "react";
import Image from "@/components/ui/Image";
import Link from "next/link";
import { CursorGlowCard } from "@/components/molecules/CursorGlowCard";import { cn } from "@/lib/utils";
import {
  enterpriseIndustries,
  enterpriseStories,
} from "@/components/layout/enterprise-nav.content";

type MobileEnterpriseNavProps = {
  onNavigate?: () => void;
};

const innerCardClass = cn(
  "flex flex-col rounded-radius-lg transition-colors",
  "hover:border-brand/30 hover:bg-brand-light/30",
);

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="type-20 text-text uppercase">
      {children}
    </p>
  );
}

export function MobileEnterpriseNav({ onNavigate }: MobileEnterpriseNavProps) {
  return (
    <div className="mt-3 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <SectionLabel>Enterprise Stories</SectionLabel>
        <div className="flex flex-col gap-4">
          {enterpriseStories.map((story) => {
            const card = (
              <CursorGlowCard className="rounded-radius-lg"
                innerClassName={cn(innerCardClass, "gap-4 px-6 py-6")}
                glowRadius={230}>
                <div className="relative flex h-20 items-center justify-start">
                  <Image src={story.imageSrc}
                    alt=""
                    width={185}
                    height={68}
                    className="max-h-20 w-auto object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="type-12 text-paragraph uppercase tracking-wider">{story.category}</p>
                  <p className="font-body text-body font-semibold text-text">
                    {story.title}
                  </p>
                  <p className="type-16 text-paragraph">{story.description}</p>
                </div>
              </CursorGlowCard>
            );

            if (story.external) {
              return (
                <a key={story.id}
                  href={story.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={onNavigate}>
                  {card}
                </a>
              );
            }

            return (
              <Link key={story.id}
                href={story.href}
                className="block"
                onClick={onNavigate}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <SectionLabel>Enterprise Industries</SectionLabel>
        <div className="flex flex-col gap-4">
          {enterpriseIndustries.map((industry) => {
            const card = (
              <CursorGlowCard
                className="rounded-radius-lg"
                innerClassName={cn(innerCardClass, "gap-2 px-6 py-6")}
                glowRadius={230}
              >
                <p className="font-body text-body font-semibold text-text">
                  {industry.title}
                </p>
                <p className="type-16 text-paragraph">{industry.description}</p>
              </CursorGlowCard>
            );

            if (industry.external) {
              return (
                <a
                  key={industry.id}
                  href={industry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={onNavigate}
                >
                  {card}
                </a>
              );
            }

            return (
              <Link
                key={industry.id}
                href={industry.href}
                className="block"
                onClick={onNavigate}
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
