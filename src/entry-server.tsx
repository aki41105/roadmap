import { renderToString } from "react-dom/server";
import { App } from "./App";
import { absoluteRouteUrl, resolveRoute, routes } from "./app/routes";
import { getPageContent } from "./pages";
import { validateRoadmapData } from "./data/validate";

export interface RenderedPage {
  html: string;
  head: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
}

export const prerenderPaths = routes.map((route) => route.path);

validateRoadmapData();

export function render(pathname: string): RenderedPage {
  const route = resolveRoute(pathname);
  const page = getPageContent(route.id);
  const title =
    route.id === "overview"
      ? `${page.title} | Akihiro Sakuramoto`
      : `${page.title} | 博士修了までの統合ロードマップ`;

  return {
    html: renderToString(<App pathname={route.path} />, {
      identifierPrefix: "roadmap-",
    }),
    head: {
      title,
      description: page.description,
      canonicalUrl: absoluteRouteUrl(route.path),
    },
  };
}
