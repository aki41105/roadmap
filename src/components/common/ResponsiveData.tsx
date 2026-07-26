import type { ReactNode } from "react";
import { joinClassNames } from "./utils";

export interface ResponsiveTableColumn<T> {
  key: string;
  header: ReactNode;
  render: (row: T, index: number) => ReactNode;
  mobileLabel?: string;
  rowHeader?: boolean;
  className?: string;
  headerClassName?: string;
  compactPriority?: "primary" | "secondary" | "tertiary";
}

export interface ResponsiveTableProps<T> {
  rows: readonly T[];
  columns: readonly ResponsiveTableColumn<T>[];
  getRowKey: (row: T, index: number) => string;
  caption: ReactNode;
  captionHidden?: boolean;
  className?: string;
  emptyMessage?: ReactNode;
}

export function ResponsiveTable<T>({
  rows,
  columns,
  getRowKey,
  caption,
  captionHidden = false,
  className,
  emptyMessage = "表示する項目がありません。",
}: ResponsiveTableProps<T>) {
  if (rows.length === 0) {
    return <p className="rm-empty-state">{emptyMessage}</p>;
  }

  return (
    <div
      className={joinClassNames("rm-responsive-table", className)}
      tabIndex={0}
      role="region"
      aria-label={typeof caption === "string" ? caption : "比較表"}
    >
      <table>
        <caption className={captionHidden ? "rm-visually-hidden" : undefined}>
          {caption}
        </caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className={column.headerClassName}
                data-compact-priority={column.compactPriority}
                key={column.key}
                scope="col"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={getRowKey(row, rowIndex)}>
              {columns.map((column) => {
                const cell = column.render(row, rowIndex);
                const shared = {
                  className: column.className,
                  "data-label":
                    column.mobileLabel ??
                    (typeof column.header === "string" ? column.header : undefined),
                  "data-compact-priority": column.compactPriority,
                };

                return column.rowHeader ? (
                  <th {...shared} key={column.key} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td {...shared} key={column.key}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface ComparisonField<T> {
  key: string;
  label: ReactNode;
  render: (item: T, index: number) => ReactNode;
  emphasis?: boolean;
}

export interface ComparisonGridProps<T> {
  items: readonly T[];
  fields: readonly ComparisonField<T>[];
  getItemKey: (item: T, index: number) => string;
  getItemTitle: (item: T, index: number) => ReactNode;
  getItemMeta?: (item: T, index: number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  emptyMessage?: ReactNode;
  titleAs?: "h2" | "h3" | "h4";
}

export function ComparisonGrid<T>({
  items,
  fields,
  getItemKey,
  getItemTitle,
  getItemMeta,
  ariaLabel = "候補の比較",
  className,
  emptyMessage = "比較する項目がありません。",
  titleAs: Heading = "h3",
}: ComparisonGridProps<T>) {
  if (items.length === 0) {
    return <p className="rm-empty-state">{emptyMessage}</p>;
  }

  return (
    <section
      className={joinClassNames("rm-comparison-grid", className)}
      aria-label={ariaLabel}
    >
      <ul className="rm-comparison-grid__items">
        {items.map((item, itemIndex) => (
          <li
            className="rm-comparison-grid__item"
            key={getItemKey(item, itemIndex)}
          >
            <article className="rm-comparison-card">
              <header className="rm-comparison-card__header">
                <Heading className="rm-comparison-card__title">
                  {getItemTitle(item, itemIndex)}
                </Heading>
                {getItemMeta ? (
                  <div className="rm-comparison-card__meta">
                    {getItemMeta(item, itemIndex)}
                  </div>
                ) : null}
              </header>
              <dl className="rm-comparison-card__fields">
                {fields.map((field) => (
                  <div
                    className={joinClassNames(
                      "rm-comparison-card__field",
                      field.emphasis &&
                        "rm-comparison-card__field--emphasis",
                    )}
                    key={field.key}
                  >
                    <dt>{field.label}</dt>
                    <dd>{field.render(item, itemIndex)}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
