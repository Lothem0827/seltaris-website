import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "./sections/HeroSection";
import { MoreStoriesSection } from "./sections/MoreStoriesSection";
import { StoryBodySection } from "./sections/StoryBodySection";
import {
  getSuccessStory,
  type SuccessStorySlug,
} from "./success-stories.content";

type SuccessStoryPageProps = {
  slug: SuccessStorySlug;
};

export function SuccessStoryPage({ slug }: SuccessStoryPageProps) {
  const story = getSuccessStory(slug);

  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection story={story} />
        <StoryBodySection story={story} />
        <MoreStoriesSection story={story} />
      </MainContent>
      <FooterSection />
    </>
  );
}
