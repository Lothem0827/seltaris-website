export const SUCCESS_STORY_SLUGS = [
  "temple-webster",
  "bauer-media-group",
  "queensland-police",
] as const;

export type SuccessStorySlug = (typeof SUCCESS_STORY_SLUGS)[number];

export type SuccessStoryStat = {
  value: string;
  label: string;
};

export type SuccessStoryQuote = {
  paragraphs: string[];
  author: string;
  role?: string;
};

export type SuccessStorySection = {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: SuccessStoryQuote;
};

export type SuccessStory = {
  slug: SuccessStorySlug;
  title: string;
  metaDescription: string;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  heroImageSrc: string;
  heroImageAlt: string;
  midImageSrc: string;
  midImageAlt: string;
  midImageAfterId: string;
  stats: SuccessStoryStat[];
  intro?: string;
  toc: { id: string; label: string }[];
  sections: SuccessStorySection[];
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    slug: "temple-webster",
    title: "Temple & Webster",
    metaDescription:
      "Australia's leading pure-play online retailer for furniture and homewares.",
    logoSrc: "/images/success-stories/temple-logo.svg",
    logoWidth: 219,
    logoHeight: 80,
    heroImageSrc: "/images/success-stories/temple-hero.webp",
    heroImageAlt: "Temple & Webster living room setting",
    midImageSrc: "/images/success-stories/temple-mid.webp",
    midImageAlt: "Temple & Webster homewares styled on a bench",
    midImageAfterId: "about-the-client",
    stats: [
      { value: "200k", label: "Active products" },
      { value: "1094k", label: "Customer orders in FY24" },
      { value: "$498m", label: "Revenue in FY24" },
    ],
    intro:
      "DataTools is transforming delivery operations for Australia’s leading pure-play online retailer for furniture and homewares.",
    toc: [
      { id: "about-the-client", label: "About the Client" },
      { id: "the-challenge", label: "The Challenge" },
      { id: "the-solution", label: "The Solution" },
      { id: "the-impact", label: "The Impact" },
      { id: "conclusion", label: "Conclusion" },
    ],
    sections: [
      {
        id: "about-the-client",
        title: "About the Client",
        paragraphs: [
          "Founded in 2011, Temple & Webster has become Australia’s leading online retailer for furniture and homewares. As the largest pure play online retailer in Australia, Temple & Webster offers over 200,000 products from hundreds of suppliers. The brand remains committed to providing a seamless shopping experience. With a focus on quality, style, and exceptional customer service.",
        ],
      },
      {
        id: "the-challenge",
        title: "The Challenge",
        paragraphs: [
          "Before DataTools, Temple & Webster grappled with common eCommerce challenges, particularly around address accuracy. Parcels were often delivered to incorrect or unrecognised addresses due to customer input errors and inaccuracies. This led to an inaccurate database, resulting in costly returns, logistical inefficiencies, and delays for customers. While the company had manual address verification processes, these consumed considerable time and labour-intensive resources, diverting focus from more strategic tasks. Couriers struggled with delivering items to the correct addresses, leading to returned parcels, additional costs, and a poor customer experience.",
        ],
      },
      {
        id: "the-solution",
        title: "The Solution",
        paragraphs: [
          "Temple & Webster conducted a thorough review and selected DataTools Kleber as their solution.",
        ],
        quote: {
          paragraphs: [
            "“We chose DataTools after a thorough industry review because they emerged as the top performer. Their database offers superior accuracy compared to competitors, ensuring reliable customer address validation.",
            "DataTools’ robust product stood out for its efficiency and precision, crucial for optimising our ecommerce operations.”",
          ],
          author: "Rebecca Barnett",
          role: "Digital Product Manager, Temple & Webster",
        },
      },
      {
        id: "the-impact",
        title: "The Impact",
        paragraphs: [
          "Since implementing DataTools Kleber, Temple & Webster have experienced significant improvements across their business: First, DataTools Kleber’s address validation capabilities minimised Temple & Webster’s delivery and address issues. This, in turn, led to a substantial reduction in costly returns and missed deliveries, because they could give their courier accurate and reliable address information, right from the start. Second, we helped reduce the time and resources spent on manual address verification. This saved heaps of Temple & Webster’s employee resources to focus on more strategic initiatives. Thirdly, fewer delivery errors. Their customers are now reported to be enjoying a smoother, more reliable shopping experience. With DataTools Kleber’s quick lookup capabilities have streamlined the checkout process, reducing transaction times and improving the overall user experience.",
        ],
        quote: {
          paragraphs: [
            "“This has not only enhanced our operational efficiency but also boosted customer satisfaction.",
            "As a result, we’ve achieved higher success rates in order fulfillment, which positively contributes to our overall customer experience and high NPS scores.”",
          ],
          author: "Rebecca Barnett",
          role: "Digital Product Manager, Temple & Webster",
        },
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "Since investing in DataTools Kleber, Temple & Webster has successfully transformed their eCommerce operations. The integration of DataTools Kleber has not only enhanced operational efficiency but also significantly improved the customer experience. At DataTools, we’re proud to have played a role in helping Temple & Webster achieve their goals, and we’re confident that our solutions can do the same for other businesses facing similar challenges.",
        ],
      },
    ],
  },
  {
    slug: "bauer-media-group",
    title: "Bauer Media Group",
    metaDescription:
      "Australia's leading magazine publisher across entertainment, lifestyle, fashion, food, parenting, and more.",
    logoSrc: "/images/success-stories/bauer-logo.png",
    logoWidth: 173,
    logoHeight: 100,
    heroImageSrc: "/images/success-stories/bauer-hero.webp",
    heroImageAlt: "Bauer Media Group outdoor billboard",
    midImageSrc: "/images/success-stories/bauer-mid.webp",
    midImageAlt: "Bauer Media magazine covers",
    midImageAfterId: "the-client",
    stats: [
      { value: "3", label: "Verification methods" },
      { value: "<30 days", label: "Full deployment" },
      { value: "100%", label: "API-driven integration" },
    ],
    toc: [
      { id: "at-a-glance", label: "At a Glance" },
      { id: "the-client", label: "The Client" },
      { id: "the-problem", label: "The Problem / The Challenge" },
      { id: "the-process", label: "The Process" },
      { id: "the-impact", label: "The Impact" },
      { id: "benefits", label: "Benefits" },
      { id: "implementation", label: "Implementation" },
    ],
    sections: [
      {
        id: "at-a-glance",
        title: "At a Glance",
        paragraphs: [
          "Change can be tough—and for a while, Bauer Media had to buckle down for a series of acquisitions. Once the dust started to settle, they realised that they needed someone who could help them set their records straight.",
        ],
      },
      {
        id: "the-client",
        title: "The Client",
        paragraphs: [
          "Bauer Media is an Australian media company that was formed after a series of acquisitions. They own and manage several magazine brands across entertainment, home & lifestyle, fashion & beauty, food, parenting, and more.",
        ],
      },
      {
        id: "the-problem",
        title: "The Problem / The Challenge",
        paragraphs: [
          "Companies going through acquisitions often find it challenging to clean and consolidate multiple customer databases from different brands. As a media organisation, Bauer Media needed to know that their database was duplicate- and error-free so they could: mail out magazines to the right addresses at the right time, send emails to the right subscribers, with working email addresses, segment audiences based on geographical location and provide personalised marketing for magazine brands across different niches, significantly reduce expenses incurred for returned and re-sent parcels, implement targeted cross-selling strategies with accurate address data.",
          "When Bauer Media first approached us, they revealed that they were already subscribed to another address validation software. Based on their previous experiences, they were looking for a future provider that offers: Flexible Payment Structures and Adaptable Contracts. Allowing for easier financial planning without the burden of hefty prepayments or rigid long-term commitments. Automated Address Data Updates. To eliminate the need for manual updates and free up valuable time and resources. Fully Managed Infrastructure. So they don’t have to bear the costs and responsibilities of managing and maintaining the address validation software themselves. Advanced API-Driven, Cloud-Hosted Services. Providing more options for modernizing their processes with cloud-based, vendor-managed solutions. Responsive and Supportive Account Management. Ensuring better communication, service, and overall satisfaction with the provider.",
          "In short, they were ready for a service that would save their time, resources, and energy. It was time for a fresh start with a solution as dynamic and forward-thinking as they are.",
        ],
      },
      {
        id: "the-process",
        title: "The Process",
        paragraphs: [
          "In 2013, they found us online and looked through our website. They were about to renew their subscription with the address validation service provider they worked with at the time but was interested enough to book a meeting with us.",
          "We discussed our products, conducted test runs, and compared our performance with their then-provider. As we conversed, we discovered that they also had issues with their websites.",
          "Unfortunately, they could not decide before their renewal date and chose to renew their subscription.",
          "We stayed in touch the following year and continued to showcase our products. We highlighted our cloud and API capabilities, which would help improve their site and user experience, and the fact that we would host and maintain these services for them.",
          "They also wanted to know if we could do batch cleaning, which we confirmed is one of the services we provide.",
        ],
      },
      {
        id: "the-impact",
        title: "The Impact",
        paragraphs: [
          "Bauer Media chose Kleber because they appreciated: The simple cost structure, the flexible API interface, and our dedication to providing support.",
        ],
      },
      {
        id: "benefits",
        title: "Benefits",
        paragraphs: [
          "DataTools Kleber provided: Simple per-API call pricing, flexible monthly plans that include generous bonus credit, flexible implementation across the business, easy and intuitive online account management, with the freedom to change packages month to month and reports on usage.",
          "They frequently handled large volumes of online transactional address-checking requests from their eCommerce platform, which our product managed with ease. They also highlighted their appreciation of how DataTools Kleber allowed them to push all these transactions through a single account and API interface.",
        ],
      },
      {
        id: "implementation",
        title: "Implementation",
        paragraphs: [
          "We developed three different ways DataTools Kleber would help their business: Real-time address and email verification when customers would proceed to check-out products in their e-commerce store, on-the-spot address checks while on the phone with customers, and batch file processing for bulk orders received from third parties.",
          "These developments were made within an incredibly tight time frame, as the team needed everything in place before the date of contract renewal with the incumbent vendor. Full development and implementation were completed in less than a month!",
        ],
        quote: {
          paragraphs: [
            "After investigating alternatives, we found the DataTools Kleber product offering and it was clear that the simple cost structure, flexible API interface and support made moving from our incumbent a no brainer",
          ],
          author: "Bauer Media Representative",
        },
      },
    ],
  },
  {
    slug: "queensland-police",
    title: "Queensland Police",
    metaDescription:
      "Australia's state police service achieving digital transformation at scale.",
    logoSrc: "/images/success-stories/queensland-police-logo.png",
    logoWidth: 77,
    logoHeight: 100,
    heroImageSrc: "/images/success-stories/queensland-police-hero.webp",
    heroImageAlt: "Queensland Police headquarters",
    midImageSrc: "/images/success-stories/queensland-police-mid.webp",
    midImageAlt: "Queensland Police officer beside a patrol car",
    midImageAfterId: "about-queensland-police",
    stats: [
      { value: "2", label: "Validation methods" },
      { value: ">60%", label: "Digital adoption rate" },
      { value: "900%", label: "Mobile app users" },
    ],
    toc: [
      { id: "at-a-glance", label: "At a Glance" },
      { id: "about-queensland-police", label: "About Queensland Police" },
      { id: "the-challenge", label: "The Challenge" },
      { id: "the-process", label: "The Process" },
      { id: "the-impact", label: "The Impact" },
      {
        id: "serving-legal-documents",
        label: "Serving Legal Documents Efficiently",
      },
      {
        id: "data-management",
        label: "Data Management, Community Policing, and Public Safety",
      },
    ],
    sections: [
      {
        id: "at-a-glance",
        title: "At a Glance",
        paragraphs: [
          "The Queensland Police needed software that could verify phone numbers and email addresses in real time.",
        ],
      },
      {
        id: "about-queensland-police",
        title: "About Queensland Police",
        paragraphs: [
          "The Queensland Police is comprised of highly trained professionals who work tirelessly to maintain public safety, prevent crime, and uphold the rule of law. Through rigorous training, advanced technology, and community engagement, they strive to protect residents and visitors while fostering a secure environment.",
          "Part of their commitment to advanced technology was the creation of their Mobile Capacity Centre (MCC). This initiative introduced mobile technology in frontline policing on the roads, for issuing tickets and notices to people who agreed to use an online service.",
        ],
      },
      {
        id: "the-challenge",
        title: "The Challenge",
        paragraphs: [
          "QLD Police Service’s Mobile Capacity Centre needed help validating and verifying mobile numbers. They were working on a service that could send infringements and notices to the public.",
          "This was a challenge because the numbers and email addresses submitted by people were in various or incorrect formats.",
          "Additionally, being at the frontlines meant that they needed a service that could validate accurately and quickly.",
        ],
      },
      {
        id: "the-process",
        title: "The Process",
        paragraphs: [
          "This client started using our services in 2017. At this point, they were wrapping up the dissolution of a government agency and working on transferring ownership of Kleber to the main agency.",
          "Kleber was being used to help with law enforcement efforts. Officers could issue infringements through the traditional post, or electronic means. Unfortunately, they were not meeting the target percentage for electronic use. If usage improved, they were hoping to roll out the program.",
          "Before the end of 2017, they wanted to enhance their app and create a display where verified mobile numbers would also indicate the carrier. We helped them create this solution and let them know that if they would be interested in discovering a number’s carrier in real time, we could also help them develop that service.",
          "Around mid-2018, we reconnected to discuss the rates of increased rollout.",
          "In 2021, we discussed their experiences with Kleber. By this time, they had about 7,000 devices in use, with the government agreeing to roll it out to 5,000 additional devices over the next three years.",
          "Kleber’s role was to help officers validate the email or phone number provided by civilians in real time. The person receiving the infringement notice can choose to get it electronically or through the post.",
          "Of all the infringements sent out in that year, 60 percent were sent electronically, and the remaining 40 percent were sent through the post.",
          "At this point, our contact said that Kleber had “lived up to expectations”, and that he “never gets any complaints about issues with it”. This was a new venture, and they were unsure about how much it would be used, but they did note that more than half of the infringements were sent this way.",
          "Finally, we collaborated on new ways for users to view their reports and credit balances, as part of our commitment to providing an enhanced user experience.",
        ],
      },
      {
        id: "the-impact",
        title: "The Impact",
        paragraphs: [
          "QLD Police’s mobile app started off with only 700 users. We’re honoured to have been one of the reasons they could effectively scale up to 7,000. That’s a 900% increase!",
          "Kleber’s main use in this scenario involved letting the police know that the contact information people provided was accurate. We helped make their mobile tech more reliable for police frontliners on the streets.",
        ],
      },
      {
        id: "serving-legal-documents",
        title: "Serving Legal Documents Efficiently",
        paragraphs: [
          "Officers are responsible for serving legal documents and notices. Kleber helped them ensure that these documents are delivered to the correct person and the correct address, maintaining the integrity of the legal process while serving the information needed in real time.",
        ],
      },
      {
        id: "data-management",
        title: "Data Management, Community Policing, and Public Safety",
        paragraphs: [
          "Aside from validating and verifying addresses, Kleber helped maintain the accuracy and consistency of sensitive information inside the police database. Our software helped prevent errors, duplicates, and rectify incomplete information. As a result, this improved the quality and reliability of the data used for various purposes in the pursuit of justice and maintenance of order.",
        ],
      },
    ],
  },
];

export function isSuccessStorySlug(value: string): value is SuccessStorySlug {
  return (SUCCESS_STORY_SLUGS as readonly string[]).includes(value);
}

export function getSuccessStory(slug: SuccessStorySlug): SuccessStory {
  const story = SUCCESS_STORIES.find((item) => item.slug === slug);

  if (!story) {
    throw new Error(`Unknown success story: ${slug}`);
  }

  return story;
}

export function getRelatedStories(slug: SuccessStorySlug): SuccessStory[] {
  return SUCCESS_STORIES.filter((item) => item.slug !== slug);
}
