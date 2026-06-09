import { NavLink } from "@/components/molecules/NavLink";
import { FeatureNavDropdown } from "@/components/molecules/FeatureNavDropdown";
import { navLinks } from "@/lib/content/home";

export function MainNav() {
  return (
    <nav className="hidden items-center gap-4 lg:flex">
      {navLinks.map((link) =>
        link.label === "Features" && link.hasDropdown ? (
          <FeatureNavDropdown key={link.label} />
        ) : (
          <NavLink key={link.label} {...link} />
        ),
      )}
    </nav>
  );
}
