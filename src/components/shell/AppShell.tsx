import type { ReactNode } from "react";
import { getAdjacentRoutes, type RouteDefinition } from "../../app/routes";
import type { PageContent } from "../../app/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { PagePager } from "./PagePager";
import { PageToc } from "./PageToc";
import { SiteHeader } from "./SiteHeader";
import { SiteNav } from "./SiteNav";

interface AppShellProps {
  route: RouteDefinition;
  page: PageContent;
  children: ReactNode;
}

export function AppShell({ route, page, children }: AppShellProps) {
  const adjacent = getAdjacentRoutes(route.id);

  return (
    <div id="top" className="roadmap-app">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <SiteHeader currentRouteId={route.id} />

      <div className="app-frame">
        <aside className="app-sidebar">
          <p className="app-sidebar__label">博士修了までの計画</p>
          <SiteNav currentRouteId={route.id} />
        </aside>

        <main id="main-content" className="app-main" tabIndex={-1}>
          <Breadcrumbs route={route} />

          <header className="page-intro">
            {page.eyebrow ? <p className="page-intro__eyebrow">{page.eyebrow}</p> : null}
            <h1>{page.title}</h1>
            <p className="page-intro__description">{page.description}</p>
            {page.updatedAt ? (
              <p className="page-intro__updated">
                <span>最終確認</span>
                <time dateTime={page.updatedAt}>{page.updatedAt.replaceAll("-", ".")}</time>
              </p>
            ) : null}
          </header>

          <div className="page-layout">
            <PageToc items={page.toc} />
            <div className="page-content">{children}</div>
          </div>

          <PagePager previous={adjacent.previous} next={adjacent.next} />

          <footer className="site-footer">
            <p>
              この計画は、公式情報・本人の計画・推定・提案を区別して更新します。
            </p>
            <p>© 2026 Akihiro Sakuramoto</p>
          </footer>
        </main>
      </div>

      <a className="back-to-top" href="#top" aria-label="ページ上部へ戻る">
        <span aria-hidden="true">↑</span>
        <span>上へ</span>
      </a>
    </div>
  );
}
