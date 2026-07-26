import type { RouteDefinition } from "../../app/routes";

interface BreadcrumbsProps {
  route: RouteDefinition;
}

export function Breadcrumbs({ route }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="パンくずリスト">
      <ol>
        <li>
          {route.id === "timeline" ? (
            <span aria-current="page">全体タイムライン</span>
          ) : (
            <a href="/roadmap/timeline/">全体タイムライン</a>
          )}
        </li>
        {route.id !== "timeline" ? (
          <li>
            <span aria-current="page">{route.label}</span>
          </li>
        ) : null}
      </ol>
    </nav>
  );
}
