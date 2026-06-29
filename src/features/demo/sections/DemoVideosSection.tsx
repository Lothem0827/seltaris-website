import { Container } from "@/components/ui/Container";
import { DemoVideoCard } from "../components/DemoVideoCard";

export type DemoVideo = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
};

const demoVideos: DemoVideo[] = [
  {
    id: "signup",
    title: "How to signup to Seltaris",
    description: "Register for an account to access Seltaris.",
    embedUrl: "https://www.youtube.com/embed/hYIXjdsEHs0",
    watchUrl: "https://www.youtube.com/watch?v=hYIXjdsEHs0",
  },
  {
    id: "first-file",
    title: "How to process your first file",
    description:
      "Free Health Check Report before purchasing your cleaned data.",
    embedUrl: "https://www.youtube.com/embed/zBwa-PCQgwY",
    watchUrl: "https://www.youtube.com/watch?v=zBwa-PCQgwY&t=1s",
  },
];

export function DemoVideosSection() {
  return (
    <section className="bg-text py-section">
      <Container className="flex flex-col items-center gap-12 lg:gap-8">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <h1 className="font-display text-5xl font-semibold leading-subheading text-white lg:text-3xl">
            Getting Started with Seltaris
          </h1>
          <p className="font-body text-lg text-white/90">
            Discover how easy it is to start cleaning your data.
          </p>
        </div>

        <div className="grid w-full max-w-[1300px] grid-cols-2 gap-6 lg:grid-cols-1">
          {demoVideos.map((video) => (
            <DemoVideoCard key={video.id} video={video} />
          ))}
        </div>
      </Container>
    </section>
  );
}
