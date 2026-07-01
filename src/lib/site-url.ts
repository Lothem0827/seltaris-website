/** Production origin — override with NEXT_PUBLIC_SITE_URL when deploying elsewhere. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://seltaris.com";

/** Path with leading slash and trailing slash (matches `trailingSlash: true`). */
export function sitePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export function absoluteUrl(pathname: string): string {
  return new URL(sitePathname(pathname), `${SITE_URL}/`).href;
}
