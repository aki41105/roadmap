import type { RouteId } from "./types";

export const siteBasePath = "/roadmap/";
export const siteOrigin = "https://aki41105.github.io";

export interface RouteDefinition {
  id: RouteId;
  path: string;
  label: string;
  shortLabel: string;
}

export const routes: readonly RouteDefinition[] = [
  {
    id: "timeline",
    path: "/roadmap/timeline/",
    label: "全体タイムライン",
    shortLabel: "全体タイムライン",
  },
  {
    id: "internships",
    path: "/roadmap/internships/",
    label: "インターン・就活",
    shortLabel: "インターン・就活",
  },
  {
    id: "overseas",
    path: "/roadmap/overseas/",
    label: "留学",
    shortLabel: "留学",
  },
  {
    id: "domestic",
    path: "/roadmap/domestic/",
    label: "国内滞在研究",
    shortLabel: "国内滞在研究",
  },
  {
    id: "overview",
    path: "/roadmap/",
    label: "その他",
    shortLabel: "その他",
  },
  {
    id: "research",
    path: "/roadmap/research/",
    label: "研究・学位",
    shortLabel: "研究・学位",
  },
  {
    id: "research-stays",
    path: "/roadmap/research-stays/",
    label: "国内・海外研究滞在の詳細",
    shortLabel: "研究滞在の詳細",
  },
  {
    id: "internship-details",
    path: "/roadmap/internship-details/",
    label: "企業研究インターンの詳細",
    shortLabel: "インターンの詳細",
  },
  {
    id: "career",
    path: "/roadmap/career/",
    label: "就活・キャリアの詳細",
    shortLabel: "就活の詳細",
  },
  {
    id: "finance-life",
    path: "/roadmap/finance-life/",
    label: "お金・住居・車",
    shortLabel: "お金・住居・車",
  },
  {
    id: "wellbeing",
    path: "/roadmap/wellbeing/",
    label: "生活・健康・人間関係",
    shortLabel: "生活・健康",
  },
  {
    id: "decisions",
    path: "/roadmap/decisions/",
    label: "判断・リスク・資料",
    shortLabel: "判断・資料",
  },
] as const;

const primaryRouteIds: readonly RouteId[] = [
  "timeline",
  "internships",
  "overseas",
  "domestic",
  "overview",
];

export const primaryRoutes = primaryRouteIds.map(
  (id) => routes.find((route) => route.id === id) as RouteDefinition,
);

const primaryRouteByRoute: Record<RouteId, RouteId> = {
  timeline: "timeline",
  internships: "internships",
  overseas: "overseas",
  domestic: "domestic",
  overview: "overview",
  research: "overview",
  "research-stays": "overview",
  "internship-details": "internships",
  career: "internships",
  "finance-life": "overview",
  wellbeing: "overview",
  decisions: "overview",
};

const routeById = new Map(routes.map((route) => [route.id, route]));
const routeByPath = new Map(routes.map((route) => [route.path, route]));

export function normalizePathname(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || siteBasePath;
  let normalized = withoutQuery.startsWith("/")
    ? withoutQuery
    : `/${withoutQuery}`;

  if (normalized === "/roadmap" || normalized === "/roadmap/index.html") {
    return siteBasePath;
  }

  if (normalized.endsWith("/index.html")) {
    normalized = normalized.slice(0, -"index.html".length);
  }

  if (!normalized.endsWith("/")) {
    normalized += "/";
  }

  return normalized;
}

export function resolveRoute(pathname: string): RouteDefinition {
  return (
    routeByPath.get(normalizePathname(pathname)) ??
    routeById.get("timeline") ??
    routes[0]
  );
}

export function getRouteById(id: RouteId): RouteDefinition {
  return routeById.get(id) ?? routes[0];
}

export function getPrimaryRouteId(id: RouteId): RouteId {
  return primaryRouteByRoute[id];
}

export function getAdjacentRoutes(routeId: RouteId): {
  previous?: RouteDefinition;
  next?: RouteDefinition;
} {
  const index = primaryRoutes.findIndex((route) => route.id === routeId);
  if (index < 0) return {};

  return {
    previous: index > 0 ? primaryRoutes[index - 1] : undefined,
    next:
      index < primaryRoutes.length - 1 ? primaryRoutes[index + 1] : undefined,
  };
}

export function absoluteRouteUrl(path: string): string {
  return new URL(path, siteOrigin).toString();
}
