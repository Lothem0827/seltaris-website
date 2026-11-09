import { Container } from "@/components/ui/Container";import { Image } from "@/components/ui/Image";
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
          <h2 className="type-32 text-text">
            Browse more success stories
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {related.map((relatedStory) => (
              <Link key={relatedStory.slug}
                href={`/success-stories/${relatedStory.slug}`}
                className="overflow-hidden rounded-radius-lg border border-border">
                <div className="relative h-64 overflow-hidden">
                  <Image src={relatedStory.heroImageSrc}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, 400px" />
                </div>
                <div className="bg-white p-8">
                  <h3 className="type-24 text-text">
                    {relatedStory.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
