import type { RouteId } from "../../app/types";
import { SiteNav } from "./SiteNav";
import { ThemeToggle } from "./ThemeToggle";

interface SiteHeaderProps {
  currentRouteId: RouteId;
}

export function SiteHeader({ currentRouteId }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a
        className="site-brand"
        href="/roadmap/timeline/"
        aria-label="博士ロードマップの全体タイムラインへ"
      >
        <span className="site-brand__mark" aria-hidden="true">
          AR
        </span>
        <span className="site-brand__text">
          <strong>Doctoral Roadmap</strong>
          <small>2026.07–2030.03</small>
        </span>
      </a>

      <div className="site-header__actions">
        <ThemeToggle />
        <details className="mobile-menu">
          <summary aria-label="メニューを開く">
            <span aria-hidden="true">☰</span>
            <span>メニュー</span>
          </summary>
          <div className="mobile-menu__panel">
            <SiteNav currentRouteId={currentRouteId} compact />
          </div>
        </details>
      </div>
    </header>
  );
}
