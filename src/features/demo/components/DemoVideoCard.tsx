import Link from "next/link";
import type { DemoVideo } from "@/lib/content/demo-videos";
import { cn } from "@/lib/utils";

function YouTubePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        d="M10.3235 4.92537C10.7238 4.70507 11.2 4.99289 11.2 5.44444V14.5556C11.2 15.0071 10.7238 15.2949 10.3235 15.0746L3.12353 10.5191C2.72323 10.2988 2.72323 9.70123 3.12353 9.48093L10.3235 4.92537Z"
        fill="currentColor"
      />
    </svg>
  );
}

type DemoVideoCardProps = {
  video: DemoVideo;
  className?: string;
};

export function DemoVideoCard({ video, className }: DemoVideoCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-6 rounded-radius-lg border border-border bg-white p-8",
        className,
      )}
    >
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-xl font-bold leading-subheading text-text">
          {video.title}
        </p>
        <p className="font-body text-body text-paragraph">
          {video.description}
        </p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-radius-md bg-black">
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="size-full border-0"
        />
      </div>
    </article>
  );
}
