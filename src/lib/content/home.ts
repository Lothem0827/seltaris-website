export const navLinks = [
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Features", href: "#features", hasDropdown: true },
  { label: "Seltaris+", href: "#seltaris-plus" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Support", href: "#support" },
] as const;

export const featureSliderSlides = [
  {
    id: "easy-to-start",
    title: "Easy to start.",
    description:
      "Seltaris makes it incredibly simple to import your data and uncover any deficiencies. With Advanced Health Check Reports, you'll quickly see exactly which aspects of your data need attention. And with built-in services to repair these issues in seconds, maintaining your data at its highest quality has never been simpler.",
    imageIndex: 0,
  },
  {
    id: "built-for-scale",
    title: "Built for Scale.",
    description:
      "The possibilities are limitless with Seltaris. Whether you're a growing business looking to clean your database or an enterprise organisation preparing for a data migration, Seltaris delivers the capacity to handle large scale computational loads of addressing data at industry-leading speeds.",
    imageIndex: 1,
  },
  {
    id: "enterprise-first",
    title: "Enterprise first design.",
    description:
      "Built with the infrastructure and security credentials today's enterprise demands. Seltaris is designed to let organisations share data with absolute confidence. Security measures that ensure your data remains yours and is inaccessible to anyone else.",
    imageIndex: 2,
  },
] as const;

export const services = [
  {
    id: "address",
    title: "Address data",
    description: "Format, clean, repair and verify addresses with 100% accuracy.",
    comingSoon: false,
    iconKey: "address" as const,
  },
  {
    id: "email",
    title: "Email address data",
    description: "Check and validate email addresses.",
    comingSoon: true,
    iconKey: "email" as const,
  },
  {
    id: "phone",
    title: "Phone number data",
    description: "Check and validate landline or mobile numbers.",
    comingSoon: true,
    iconKey: "phone" as const,
  },
  {
    id: "geocode",
    title: "Appending geocode data",
    description: "Add coordinates to every validated address.",
    comingSoon: true,
    iconKey: "geocode" as const,
  },
] as const;
