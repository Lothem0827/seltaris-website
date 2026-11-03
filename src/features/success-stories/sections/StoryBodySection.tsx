import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Image } from "@/components/ui/Image";
import { Text } from "@/components/ui/Text";
import Link from "next/link";
import type { SuccessStory, SuccessStoryQuote } from "../success-stories.content";

type StoryBodySectionProps = {
  story: SuccessStory;
};

function QuoteCard({ quote }: { quote: SuccessStoryQuote }) {
  return (
    <blockquote className="flex flex-col gap-8 rounded-radius-panel bg-brand p-10">
      <div className="flex flex-col gap-5">
        {quote.paragraphs.map((paragraph) => (
          <FeaturePageHeading
            key={paragraph}
            as="p"
            variant="heroSubtitle"
            className="text-white"
          >
            {paragraph}
          </FeaturePageHeading>
        ))}
      </div>
      <div>
        <Text className="font-semibold text-white">{quote.author}</Text>
        {quote.role ? (
          <Text variant="body-sm" className="text-white">
            {quote.role}
          </Text>
        ) : null}
      </div>
    </blockquote>
  );
}

export function StoryBodySection({ story }: StoryBodySectionProps) {
  return (
    <section className="pb-section">
      <Container>
        <div className="mx-auto flex w-full max-w-hero-body flex-col items-center gap-16">
          <div className="flex w-full flex-col gap-12">
            {story.intro ? (
              <FeaturePageHeading as="p" variant="heroSubtitle">
                {story.intro}
              </FeaturePageHeading>
            ) : null}

            <nav
              aria-label="On this page"
              className="w-full rounded-radius-panel bg-brand-surface p-8"
            >
              <ul className="flex flex-col gap-1.5">
                {story.toc.map((item) => (
                  <li key={item.id}>
                    <Link href={`#${item.id}`}>
                      <FeaturePageHeading
                        as="span"
                        variant="heroSubtitle"
                        className="font-display font-bold text-brand underline"
                      >
                        {item.label}
                      </FeaturePageHeading>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {story.sections.map((section) => (
            <div key={section.id} className="flex w-full flex-col gap-16">
              <div
                id={section.id}
                className="flex scroll-mt-24 flex-col gap-5"
              >
                <FeaturePageHeading as="h2" variant="headingSmall">
                  {section.title}
                </FeaturePageHeading>
                {section.paragraphs.map((paragraph) => (
                  <FeaturePageHeading
                    key={paragraph}
                    as="p"
                    variant="heroSubtitle"
                  >
                    {paragraph}
                  </FeaturePageHeading>
                ))}
              </div>

              {story.midImageAfterId === section.id ? (
                <div className="overflow-hidden rounded-radius-panel">
                  <Image
                    src={story.midImageSrc}
                    alt={story.midImageAlt}
                    width={800}
                    height={430}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : null}

              {section.quote ? <QuoteCard quote={section.quote} /> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
