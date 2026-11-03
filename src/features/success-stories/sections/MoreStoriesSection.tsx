import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Heading } from "@/components/ui/Heading";
import { Image } from "@/components/ui/Image";
import Link from "next/link";
import {
  getRelatedStories,
  type SuccessStory,
} from "../success-stories.content";

type MoreStoriesSectionProps = {
  story: SuccessStory;
};

export function MoreStoriesSection({ story }: MoreStoriesSectionProps) {
  const related = getRelatedStories(story.slug);

  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-12">
        <div className="mx-auto flex w-full max-w-hero-body flex-col gap-12">
          <FeaturePageHeading as="h2" variant="headingSmall">
            Browse more success stories
          </FeaturePageHeading>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {related.map((relatedStory) => (
              <Link
                key={relatedStory.slug}
                href={`/success-stories/${relatedStory.slug}`}
                className="overflow-hidden rounded-radius-lg border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={relatedStory.heroImageSrc}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 400px"
                  />
                </div>
                <div className="bg-white p-8">
                  <Heading as="h3" level="h2">
                    {relatedStory.title}
                  </Heading>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
