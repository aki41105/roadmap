import type { RouteId } from "../../app/types";
import { routes } from "../../app/routes";

interface SiteNavProps {
  currentRouteId: RouteId;
  compact?: boolean;
}

export function SiteNav({ currentRouteId, compact = false }: SiteNavProps) {
  return (
    <nav
      className={compact ? "site-nav site-nav--compact" : "site-nav"}
      aria-label={compact ? "モバイル用メインメニュー" : "メインメニュー"}
    >
      <ol className="site-nav__list">
        {routes.map((route, index) => (
          <li key={route.id}>
            <a
              className="site-nav__link"
              href={route.path}
              aria-current={route.id === currentRouteId ? "page" : undefined}
            >
              <span className="site-nav__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{compact ? route.label : route.shortLabel}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

