export type MainNavLink =
  | {
      label: string;
      href: string;
      hasDropdown: true;
      dropdown: "solutions" | "features";
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
  { label: "Support", href: "#support" },
];
