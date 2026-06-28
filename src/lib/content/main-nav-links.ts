import { GBG_CUSTOMER_SUPPORT_URL } from "@/lib/site-assets";

export type MainNavLink =
  | {
      label: string;
      href: string;
      hasDropdown: true;
      dropdown: "solutions" | "features" | "enterprise";
    }
  | {
      label: string;
      href: string;
      hasDropdown?: false;
    };

export const mainNavLinks: MainNavLink[] = [
  { label: "Solutions", href: "#solutions", hasDropdown: true, dropdown: "solutions" },
  { label: "Features", href: "#features", hasDropdown: true, dropdown: "features" },
  { label: "Seltaris+", href: "/seltaris-plus" },
  {
    label: "Enterprise",
    href: "#enterprise",
    hasDropdown: true,
    dropdown: "enterprise",
  },
  { label: "Support", href: GBG_CUSTOMER_SUPPORT_URL },
];
