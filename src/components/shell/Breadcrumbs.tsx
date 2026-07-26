import type { RouteDefinition } from "../../app/routes";

interface BreadcrumbsProps {
  route: RouteDefinition;
}

export function Breadcrumbs({ route }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="パンくずリスト">
      <ol>
        <li>
          {route.id === "overview" ? (
            <span aria-current="page">概要</span>
          ) : (
            <a href="/roadmap/">概要</a>
          )}
        </li>
        {route.id !== "overview" ? (
          <li>
            <span aria-current="page">{route.label}</span>
          </li>
        ) : null}
      </ol>
    </nav>
  );
}

