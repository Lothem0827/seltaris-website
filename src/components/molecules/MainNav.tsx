import { NavLink } from "@/components/molecules/NavLink";
import { FeatureNavDropdown } from "@/components/molecules/FeatureNavDropdown";
import { SolutionsNavDropdown } from "@/components/molecules/SolutionsNavDropdown";
import { navLinks } from "@/lib/content/home";

export function MainNav() {
  return (
    <nav className="hidden items-center gap-4 lg:flex">
      {navLinks.map((link) => {
        if (link.label === "Solutions" && link.hasDropdown) {
          return <SolutionsNavDropdown key={link.label} />;
        }
        if (link.label === "Features" && link.hasDropdown) {
          return <FeatureNavDropdown key={link.label} />;
        }
        return <NavLink key={link.label} {...link} />;
      })}
    </nav>
  );
}
