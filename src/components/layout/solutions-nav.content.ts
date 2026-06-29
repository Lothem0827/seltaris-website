import { serviceCategoryPath } from "@/features/services/service-routes";
import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";

export type SolutionsNavItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
};

export type SolutionsNavColumn = {
  title: string;
  items: SolutionsNavItem[];
  footerLink?: { label: string; href: string };
};

export const solutionsNavColumns: SolutionsNavColumn[] = [
  {
    title: "Addressing",
    items: [
      {
        id: "bulk-address",
        title: "Bulk Address Data",
        description:
          "Format, clean, repair and verify addresses with 100% accuracy",
        href: "/address-validation",
      },
      {
        id: "bulk-geocode",
        title: "Bulk Geocode Data",
        description: "Add coordinates to every validated address.",
        href: serviceCategoryPath("geocode-data"),
        comingSoon: true,
      },
    ],
  },
  {
    title: "Phone & Email",
    items: [
      {
        id: "bulk-phone",
        title: "Bulk Phone Data",
        description: "Check and validate landline or mobile numbers.",
        href: serviceCategoryPath("phone-data"),
        comingSoon: true,
      },
      {
        id: "bulk-email",
        title: "Bulk Email Data",
        description: "Check and validate email addresses.",
        href: serviceCategoryPath("email-data"),
        comingSoon: true,
      },
    ],
  },
  {
    title: "Get Started",
    items: [
      {
        id: "get-started",
        title: "Get Started with Seltaris",
        description: "There's never been a better time to get started.",
        href: SELTARIS_LOGIN_URL,
      },
      {
        id: "loqate",
        title: "GBG Loqate API",
        description:
          "Integrate verification services directly into your workflow.",
        href: "https://www.loqate.com/anz/",
        external: true,
      },
    ],
    footerLink: {
      label: "View all Seltaris Services",
      href: "/services",
    },
  },
];
