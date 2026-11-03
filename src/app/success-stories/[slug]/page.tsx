import { SuccessStoryPage } from "@/features/success-stories/SuccessStoryPage";
import {
  getSuccessStory,
  isSuccessStorySlug,
  SUCCESS_STORY_SLUGS,
} from "@/features/success-stories/success-stories.content";
import { createPageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SUCCESS_STORY_SLUGS.map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isSuccessStorySlug(slug)) {
    return {};
  }

  const story = getSuccessStory(slug);

  return createPageMetadata({
    pathname: `/success-stories/${slug}`,
    title: `${story.title} | Success Stories | Seltaris`,
    description: story.metaDescription,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!isSuccessStorySlug(slug)) {
    notFound();
  }

  return <SuccessStoryPage slug={slug} />;
}
