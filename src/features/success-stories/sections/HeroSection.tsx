import { footerSocialLinks } from "@/components/layout/footer.content";
import { Container } from "@/components/ui/Container";import { Image } from "@/components/ui/Image";import { siteAssets } from "@/lib/site-assets";
import type { SuccessStory } from "../success-stories.content";

const storySocialLinks = footerSocialLinks.filter(
  (social) => social.iconKey !== "trust",
);

type HeroSectionProps = {
  story: SuccessStory;
};

export function HeroSection({ story }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-section">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[url('/images/success-stories/success-grid.png')] bg-cover bg-center bg-no-repeat" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-12">
        <div className="flex max-w-hero-body flex-col items-center gap-12 text-center">
          <Image src={story.logoSrc}
            alt=""
            width={story.logoWidth}
            height={story.logoHeight} />
          <h1 className="type-48 text-text text-center">
            {story.title}
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-radius-xl border border-brand">
          <Image src={story.heroImageSrc}
            alt={story.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand" />
          <div className="absolute inset-x-0 bottom-14 flex items-end justify-center gap-6 px-6 lg:flex-wrap">
            {story.stats.map((stat) => (
              <div key={stat.label}
                className="flex w-48 flex-col items-center justify-center gap-1 rounded-radius-lg bg-white p-5 text-center">
                <p className="type-32 text-brand">
                  {stat.value}
                </p>
                <p className="type-12 text-paragraph uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {storySocialLinks.map((social) => (
            <a key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}>
              <Image src={siteAssets.footerSocial[social.iconKey]}
                alt=""
                width={28}
                height={28}
                aria-hidden />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
