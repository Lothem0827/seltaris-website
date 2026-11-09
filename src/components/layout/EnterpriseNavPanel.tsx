import Image from "@/components/ui/Image";
import Link from "next/link";
import { CursorGlowCard } from "@/components/molecules/CursorGlowCard";import { cn } from "@/lib/utils";
import {
  enterpriseIndustries,
  enterpriseStories,
  type EnterpriseIndustry,
  type EnterpriseStory,
} from "@/components/layout/enterprise-nav.content";

const innerCardClass = cn(
  "flex min-w-0 flex-1 flex-col rounded-radius-lg transition-colors",
  "hover:border-brand/30 hover:bg-brand-light/30",
);

function EnterpriseStoryCard({ story }: { story: EnterpriseStory }) {
  const card = (
    <CursorGlowCard className="h-full rounded-radius-lg"
      innerClassName={cn(innerCardClass, "px-6 py-8")}
      glowRadius={230}>
      <div className="relative mb-6 flex h-fit items-center">
        <Image src={story.imageSrc}
          alt=""
          width={185}
          height={68}
          className="h-12 w-auto object-contain" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="type-12 text-paragraph uppercase tracking-wider">{story.category}</p>
        <p className="font-body text-body font-semibold text-text">
          {story.title}
        </p>
        <p className="type-12 text-paragraph w-[80%]">
          {story.description}
        </p>
      </div>
    </CursorGlowCard>
  );

  if (story.external) {
    return (
      <a href={story.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block min-w-0 flex-1">
        {card}
      </a>
    );
  }

  return (
    <Link href={story.href} className="block min-w-0 flex-1">
      {card}
    </Link>
  );
}

function EnterpriseIndustryCard({
  industry,
}: {
  industry: EnterpriseIndustry;
}) {
  const card = (
    <CursorGlowCard
      className="h-full rounded-radius-lg"
      innerClassName={cn(innerCardClass, "px-6 py-8")}
      glowRadius={230}
    >
      <div className="flex h-fit w-[80%] flex-col gap-2">
        <p className="font-body text-body font-semibold text-text">
          {industry.title}
        </p>
        <p className="type-12 text-paragraph">{industry.description}</p>
      </div>
    </CursorGlowCard>
  );

  if (industry.external) {
    return (
      <a
        href={industry.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block min-w-0 flex-1"
      >
        {card}
      </a>
    );
  }

  return (
    <Link href={industry.href} className="block min-w-0 flex-1">
      {card}
    </Link>
  );
}

export function EnterpriseNavPanel() {
  return (
    <div className="w-full max-w-container">
      <div className="rounded-radius-panel bg-white p-8 shadow-panel">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="type-20 text-text">Enterprise Stories</p>
            <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
              {enterpriseStories.map((story) => (
                <EnterpriseStoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="type-20 text-text">Enterprise Industries</p>
            <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
              {enterpriseIndustries.map((industry) => (
                <EnterpriseIndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
