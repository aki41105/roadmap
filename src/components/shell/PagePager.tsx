import type { RouteDefinition } from "../../app/routes";

interface PagePagerProps {
  previous?: RouteDefinition;
  next?: RouteDefinition;
}

export function PagePager({ previous, next }: PagePagerProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="page-pager" aria-label="前後のページ">
      {previous ? (
        <a className="page-pager__link page-pager__link--previous" href={previous.path}>
          <span aria-hidden="true">←</span>
          <span>
            <small>前のページ</small>
            <strong>{previous.label}</strong>
          </span>
        </a>
      ) : (
        <span aria-hidden="true" />
      )}
      {next ? (
        <a className="page-pager__link page-pager__link--next" href={next.path}>
          <span>
            <small>次のページ</small>
            <strong>{next.label}</strong>
          </span>
          <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </nav>
  );
}

