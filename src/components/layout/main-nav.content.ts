import { GBG_CUSTOMER_SUPPORT_URL } from "@/lib/site-assets";

export type MainNavLink =
  | {
      label: string;
      hasDropdown: true;
      dropdown: "solutions" | "features" | "enterprise";
    }
  | {
      label: string;
      href: string;
      hasDropdown?: false;
    };

export const mainNavLinks: MainNavLink[] = [
  { label: "Solutions", hasDropdown: true, dropdown: "solutions" },
  { label: "Features", hasDropdown: true, dropdown: "features" },
  { label: "Plans", href: "/seltaris-plus" },
  { label: "Enterprise", hasDropdown: true, dropdown: "enterprise" },
  { label: "Support", href: GBG_CUSTOMER_SUPPORT_URL },
];
