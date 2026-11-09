import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import type { EnterprisePageContent } from "../enterprise.content";

type StoriesSectionProps = {
  content: EnterprisePageContent;
};

export function StoriesSection({ content }: StoriesSectionProps) {
  return (
    <section className="bg-white py-section">
      <Container className="flex flex-col gap-8">
        <h2 className="type-32 text-text">{content.storiesTitle}</h2>
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
          {content.stories.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              className="overflow-hidden rounded-radius-lg border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 384px"
                />
              </div>
              <div className="bg-white p-8">
                <h3 className="type-20 text-text">{story.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
