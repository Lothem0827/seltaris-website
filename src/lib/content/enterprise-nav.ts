export type EnterpriseStory = {
  id: string;
  category: "B2C" | "B2B" | "GOVERNMENT";
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  external: true;
};

export type EnterpriseIndustry = {
  id: string;
  title: string;
  description: string;
  href: string;
  external: true;
};

export const enterpriseStories: EnterpriseStory[] = [
  {
    id: "temple-webster",
    category: "B2C",
    title: "Temple & Webster",
    description:
      "Australia's leading pure-play online retailer for furniture and homewares.",
    imageSrc: "/images/enterprise/temple-webster.png",
    href: "https://datatools.com.au/temple-webster/",
    external: true,
  },
  {
    id: "bauer-media-group",
    category: "B2B",
    title: "Bauer Media Group",
    description:
      "Australia's leading magazine publisher across entertainment, lifestyle, fashion, food, parenting, and more.",
    imageSrc: "/images/enterprise/bauer-media-group.png",
    href: "https://datatools.com.au/bauer-media-group/",
    external: true,
  },
  {
    id: "queensland-police",
    category: "GOVERNMENT",
    title: "Queensland Police",
    description:
      "Australia's state police service achieving digital transformation at scale.",
    imageSrc: "/images/enterprise/queensland-police.png",
    href: "https://datatools.com.au/queensland-police/",
    external: true,
  },
];

export const enterpriseIndustries: EnterpriseIndustry[] = [
  {
    id: "b2c",
    title: "B2C",
    description: "Clean data powering every customer touchpoint.",
    href: "https://datatools.com.au/datatools-enterprise/",
    external: true,
  },
  {
    id: "b2b",
    title: "B2B",
    description:
      "Manage large datasets efficiently so you can focus on scaling.",
    href: "https://datatools.com.au/datatools-enterprise/",
    external: true,
  },
  {
    id: "government",
    title: "Government",
    description:
      "Helping agencies serve the public with confidence and transparency.",
    href: "https://datatools.com.au/datatools-government/",
    external: true,
  },
];
