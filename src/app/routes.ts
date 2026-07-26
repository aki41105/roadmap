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
    id: "overview",
    path: "/roadmap/",
    label: "概要ダッシュボード",
    shortLabel: "概要",
  },
  {
    id: "research",
    path: "/roadmap/research/",
    label: "研究計画",
    shortLabel: "研究",
  },
  {
    id: "research-stays",
    path: "/roadmap/research-stays/",
    label: "国内・海外研究滞在",
    shortLabel: "研究滞在",
  },
  {
    id: "internships",
    path: "/roadmap/internships/",
    label: "企業研究インターン",
    shortLabel: "インターン",
  },
  {
    id: "career",
    path: "/roadmap/career/",
    label: "就職・キャリア",
    shortLabel: "キャリア",
  },
  {
    id: "finance-life",
    path: "/roadmap/finance-life/",
    label: "資金・住居・暮らし",
    shortLabel: "お金・暮らし",
  },
  {
    id: "wellbeing",
    path: "/roadmap/wellbeing/",
    label: "健康・人間関係",
    shortLabel: "ウェルビーイング",
  },
  {
    id: "timeline",
    path: "/roadmap/timeline/",
    label: "全期間タイムライン",
    shortLabel: "タイムライン",
  },
  {
    id: "decisions",
    path: "/roadmap/decisions/",
    label: "判断・リスク・出典",
    shortLabel: "判断・出典",
  },
] as const;

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
    routeById.get("overview") ??
    routes[0]
  );
}

export function getRouteById(id: RouteId): RouteDefinition {
  return routeById.get(id) ?? routes[0];
}

export function getAdjacentRoutes(routeId: RouteId): {
  previous?: RouteDefinition;
  next?: RouteDefinition;
} {
  const index = routes.findIndex((route) => route.id === routeId);
  return {
    previous: index > 0 ? routes[index - 1] : undefined,
    next: index >= 0 && index < routes.length - 1 ? routes[index + 1] : undefined,
  };
}

export function absoluteRouteUrl(path: string): string {
  return new URL(path, siteOrigin).toString();
}

