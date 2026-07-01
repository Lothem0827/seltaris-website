export const SERVICE_CATEGORY_IDS = [
  "address-data",
  "email-data",
  "phone-data",
  "geocode-data",
] as const;

export type ServiceCategoryId = (typeof SERVICE_CATEGORY_IDS)[number];

export function serviceCategoryPath(id: ServiceCategoryId) {
  return `/services/${id}`;
}

/** In-page anchor on /services — scrolls to the category section via ScrollToHash */
export function serviceCategoryAnchor(id: ServiceCategoryId) {
  return `/services#${id}`;
}

export function isServiceCategoryId(value: string): value is ServiceCategoryId {
  return SERVICE_CATEGORY_IDS.includes(value as ServiceCategoryId);
}

export function parseServiceSectionFromPath(
  pathname: string,
): ServiceCategoryId | null {
  const match = pathname.match(/^\/services\/([^/]+)$/);
  if (!match) return null;
  const section = match[1];
  return isServiceCategoryId(section) ? section : null;
}
