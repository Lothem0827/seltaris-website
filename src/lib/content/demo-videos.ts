export type DemoVideo = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
};

export const demoVideos: DemoVideo[] = [
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
