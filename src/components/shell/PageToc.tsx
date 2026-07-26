import type { TocItem } from "../../app/types";

interface PageTocProps {
  items?: readonly TocItem[];
}

export function PageToc({ items }: PageTocProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <aside className="page-toc" aria-labelledby="page-toc-title">
      <p id="page-toc-title" className="page-toc__title">
        このページ
      </p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

