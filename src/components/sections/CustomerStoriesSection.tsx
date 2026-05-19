import Image from "next/image";
import { SliderSectionLayout } from "@/components/sections/shared/SliderSectionLayout";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type StatPill = {
  value: string;
  lines: string[];
  accent: string;
};

type Story = {
  id: string;
  image: string;
  logo: string;
  logoClassName?: string;
  gradient: string;
  stats: StatPill[];
  headline: string;
  segment: string;
};

const stories: Story[] = [
  {
    id: "temple-webster",
    image: assets.customerStories.slides.templeWebster.image,
    logo: assets.customerStories.slides.templeWebster.logo,
    logoClassName: "h-11 w-[120px]",
    gradient: "from-[rgba(148,188,186,0)] from-[21%] to-[#94bcba] to-[76%]",
    stats: [
      { value: "200k", lines: ["Active", "products"], accent: "#408b88" },
      { value: "1094k", lines: ["Customer", "Orders in FY24"], accent: "#408b88" },
      { value: "$498m", lines: ["Revenue", "in FY24"], accent: "#408b88" },
    ],
    headline:
      "Australia's leading pure-play online retailer for furniture and homewares.",
    segment: "Enterprise",
  },
  {
    id: "magazine",
    image: assets.customerStories.slides.magazine.image,
    logo: assets.customerStories.slides.magazine.logo,
    logoClassName: "h-11 w-[76px]",
    gradient: "from-[rgba(226,204,255,0)] to-[rgba(71,0,164,0.4)]",
    stats: [
      { value: "3", lines: ["Verification", "methods"], accent: "#4600a0" },
      { value: "<30 days", lines: ["full", "deployment"], accent: "#4600a0" },
      { value: "100%", lines: ["API-DRiven", "integration"], accent: "#4600a0" },
    ],
    headline:
      "Australia's leading magazine publisher across entertainment, lifestyle...",
    segment: "Enterprise",
  },
  {
    id: "police",
    image: assets.customerStories.slides.police.image,
    logo: assets.customerStories.slides.police.logo,
    logoClassName: "h-11 w-[34px]",
    gradient: "from-[rgba(153,200,255,0)] to-[rgba(0,33,72,0.4)]",
    stats: [
      { value: "2", lines: ["validation", "methods"], accent: "#002148" },
      { value: ">60%", lines: ["digital", "adoption rate"], accent: "#002148" },
      { value: "900%", lines: ["Increase in", "Mobile users"], accent: "#002148" },
    ],
    headline:
      "Australia's state police service achieving digital transformation at scale.",
    segment: "Government",
  },
];

function StatPills({ stats }: { stats: StatPill[] }) {
  return (
    <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.value + stat.lines.join("-")}
          className="flex min-w-[77px] flex-col items-center justify-center rounded-md bg-[#f6f8fc] px-2.5 py-2.5"
        >
          <p
            className="text-[17px] leading-[24px] font-medium"
            style={{ color: stat.accent }}
          >
            {stat.value}
          </p>
          <div className="text-center text-[8px] leading-3 font-medium uppercase tracking-[0.85px] text-[#4d4e4c]">
            {stat.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CaseStudyCard({
  image,
  logo,
  logoClassName,
  gradient,
  stats,
  headline,
  segment,
}: Omit<Story, "id">) {
  return (
    <article className="flex w-full max-w-[425px] flex-col overflow-hidden rounded-[32px] border border-charcoal-200">
      <div className="relative h-[265px] overflow-hidden">
        <Image src={image} alt="" fill className="object-cover" sizes="425px" />
        <div className={cn("absolute inset-0 bg-gradient-to-b", gradient)} />
        <StatPills stats={stats} />
      </div>
      <div className="flex flex-col gap-4 bg-white p-8">
        <Image
          src={logo}
          alt=""
          width={120}
          height={44}
          className={cn("object-contain object-left", logoClassName)}
        />
        <h3 className="font-display text-2xl leading-[1.4] text-charcoal-700">
          {headline}
        </h3>
        <p className="text-lg font-semibold text-charcoal-500">{segment}</p>
      </div>
    </article>
  );
}

export function CustomerStoriesSection() {
  return (
    <SliderSectionLayout
      eyebrow="Customer Success Stories"
      title={
        <>
          See how our customers have
          <br />
          been using DataTools software.
        </>
      }
      prevButton={assets.customerStories.prevButton}
      nextButton={assets.customerStories.nextButton}
      slideKeys={stories.map((s) => s.id)}
      slidesPerView={{ mobile: 1, tablet: 1.1, desktop: 2.2 }}
      slides={stories.map((story) => (
        <CaseStudyCard key={story.id} {...story} />
      ))}
    />
  );
}
