import { Container } from "@/components/ui/Container";
import { demoVideos } from "@/lib/content/demo-videos";
import { DemoVideoCard } from "../components/DemoVideoCard";

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
