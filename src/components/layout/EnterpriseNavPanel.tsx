import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import {
  enterpriseIndustries,
  enterpriseStories,
  type EnterpriseIndustry,
  type EnterpriseStory,
} from "@/components/layout/enterprise-nav.content";

const cardClass =
  "flex min-w-0 flex-1 flex-col rounded-radius-lg border border-border px-6 py-8 transition-colors hover:border-brand/30 hover:bg-brand-light/30";

function EnterpriseStoryCard({ story }: { story: EnterpriseStory }) {
  return (
    <a
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      <div className="relative mb-6 flex items-center h-fit">
        <Image
          src={story.imageSrc}
          alt=""
          width={185}
          height={68}
          className="h-12 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Text variant="label">{story.category}</Text>
        <p className="font-body text-body font-semibold text-text">
          {story.title}
        </p>
        <Text variant="caption" className="w-[80%]">
          {story.description}
        </Text>
      </div>
    </a>
  );
}

function EnterpriseIndustryCard({
  industry,
}: {
  industry: EnterpriseIndustry;
}) {
  return (
    <a
      href={industry.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      <div className="flex flex-col gap-2 w-[80%] h-fit">
        <p className="font-body text-body font-semibold text-text">
          {industry.title}
        </p>
        <Text variant="caption">{industry.description}</Text>
      </div>
    </a>
  );
}

export function EnterpriseNavPanel() {
  return (
    <div className="w-full max-w-container">
      <div className="rounded-radius-panel bg-white p-8 shadow-panel">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Heading level="panel">Enterprise Stories</Heading>
            <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
              {enterpriseStories.map((story) => (
                <EnterpriseStoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Heading level="panel">Enterprise Industries</Heading>
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
