import { NavLink } from "@/components/layout/NavLink";
import { EnterpriseNavDropdown } from "@/components/layout/EnterpriseNavDropdown";
import { FeatureNavDropdown } from "@/components/layout/FeatureNavDropdown";
import { SolutionsNavDropdown } from "@/components/layout/SolutionsNavDropdown";
import { mainNavLinks } from "@/components/layout/main-nav.content";

export function MainNav() {
  return (
    <nav className="flex items-center gap-4 lg:hidden">
      {mainNavLinks.map((link) => {
        if (link.hasDropdown && link.dropdown === "solutions") {
          return <SolutionsNavDropdown key={link.label} />;
        }
        if (link.hasDropdown && link.dropdown === "features") {
          return <FeatureNavDropdown key={link.label} />;
        }
        if (link.hasDropdown && link.dropdown === "enterprise") {
          return <EnterpriseNavDropdown key={link.label} />;
        }
        return <NavLink key={link.label} label={link.label} href={link.href} />;
      })}
    </nav>
  );
}
