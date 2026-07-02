const visitedRoutes = new Set<string>();

export function markRouteVisited(pathname: string) {
  visitedRoutes.add(pathname);
}

export function hasVisitedRoute(pathname: string) {
  return visitedRoutes.has(pathname);
}
