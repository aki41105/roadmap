import type { ReactNode } from "react";

type UnknownRecord = Record<string, unknown>;

const fieldLabels: Record<string, string> = {
  action: "次の行動",
  accent: "現在",
  annual: "年額",
  body: "内容",
  budget: "予算の考え方",
  caution: "注意点",
  caveat: "注意点",
  category: "区分",
  certainty: "情報の確度",
  description: "説明",
  eligibility: "対象・資格",
  estimate: "概算",
  duration: "想定期間",
  facts: "確認できた情報",
  fit: "研究との相性",
  go: "実施条件",
  href: "公式・参考リンク",
  secondaryHref: "関連する公式リンク",
  internal: "この計画での目標",
  items: "確認項目",
  label: "区分",
  monthly: "月額",
  name: "名称",
  number: "番号",
  period: "期間",
  projects: "外部研究",
  papers: "論文",
  purpose: "目的",
  rank: "優先順位",
  recommended: "推奨",
  result: "出口",
  risk: "リスク",
  role: "位置付け",
  rule: "運用ルール",
  stage: "段階",
  standard: "制度・標準日程",
  status: "状態",
  step: "手順",
  stop: "縮小・中止条件",
  text: "詳細",
  time: "時期",
  title: "項目",
  value: "得られる価値",
  verdict: "この計画での扱い",
};

export const statusClass: Record<string, string> = {
  確定: "confirmed",
  予定: "planned",
  候補: "candidate",
  要確認: "verify",
  推定: "estimated",
  提案: "proposal",
  進行中: "progress",
  完了: "complete",
  延期: "postponed",
  中止: "cancelled",
  リスク: "cancelled",
  概算: "estimated",
  公式: "confirmed",
};

export function Badge({
  children,
  tone,
}: {
  children: ReactNode;
  tone?: string;
}) {
  const label = typeof children === "string" ? children : "";
  const className = tone ?? statusClass[label] ?? "neutral";
  return <span className={`rm-badge rm-badge--${className}`}>{children}</span>;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rm-section" id={id} aria-labelledby={`${id}-title`}>
      <header className="rm-section__header">
        {eyebrow ? <p className="rm-eyebrow">{eyebrow}</p> : null}
        <h2 id={`${id}-title`}>{title}</h2>
        {intro ? <div className="rm-section__intro">{intro}</div> : null}
      </header>
      {children}
    </section>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="rm-lead">{children}</p>;
}

export function Callout({
  title,
  children,
  tone = "info",
  badge,
  headingLevel = 3,
}: {
  title: string;
  children: ReactNode;
  tone?: "info" | "warning" | "critical" | "success";
  badge?: string;
  headingLevel?: 2 | 3 | 4;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  return (
    <aside className={`rm-callout rm-callout--${tone}`}>
      <div>
        {badge ? <Badge>{badge}</Badge> : null}
        <Heading>{title}</Heading>
      </div>
      <div>{children}</div>
    </aside>
  );
}

export function CardGrid({
  children,
  columns = 3,
}: {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className="rm-card-grid" data-columns={columns}>
      {children}
    </div>
  );
}

export function Card({
  title,
  eyebrow,
  badge,
  children,
  href,
  linkLabel = "詳しく見る",
  className = "",
}: {
  title: string;
  eyebrow?: string;
  badge?: string;
  children: ReactNode;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  return (
    <article className={`rm-card ${className}`.trim()}>
      <header className="rm-card__header">
        <div>
          {eyebrow ? <p className="rm-eyebrow">{eyebrow}</p> : null}
          <h3>{title}</h3>
        </div>
        {badge ? <Badge>{badge}</Badge> : null}
      </header>
      <div className="rm-card__body">{children}</div>
      {href ? (
        <a className="rm-text-link" href={href}>
          {linkLabel}
          <span aria-hidden="true"> →</span>
        </a>
      ) : null}
    </article>
  );
}

export function KeyValueList({
  items,
}: {
  items: readonly (readonly [ReactNode, ReactNode])[];
}) {
  return (
    <dl className="rm-key-values">
      {items.map(([term, value], index) => (
        <div key={index}>
          <dt>{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BulletList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="rm-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function isRecord(value: unknown): value is UnknownRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function valueNode(
  value: unknown,
  key: string,
  contextTitle?: string,
): ReactNode {
  if (value === null || value === undefined || value === "") {
    return <span className="rm-muted">記載なし</span>;
  }
  if (typeof value === "boolean") {
    return value ? "はい" : "いいえ";
  }
  if (typeof value === "string") {
    if (key === "href" || /^https?:\/\//.test(value)) {
      return (
        <a
          className="rm-external-link"
          href={value}
          target="_blank"
          rel="noreferrer"
          aria-label={`${contextTitle ? `${contextTitle}の` : ""}${fieldLabels[key] ?? "参照先"}（新しいタブで開く）`}
        >
          公式・参考ページ
          <span aria-hidden="true"> ↗</span>
        </a>
      );
    }
    return value;
  }
  if (typeof value === "number") {
    return value.toLocaleString("ja-JP");
  }
  if (Array.isArray(value)) {
    if (value.every((entry) => typeof entry === "string")) {
      return <BulletList items={value as string[]} />;
    }
    return (
      <div className="rm-nested-list">
        {value.map((entry, index) =>
          isRecord(entry) ? (
            <KeyValueList
              key={index}
              items={Object.entries(entry).map(([nestedKey, nestedValue]) => [
                fieldLabels[nestedKey] ?? nestedKey,
                valueNode(nestedValue, nestedKey, contextTitle),
              ])}
            />
          ) : (
            <div key={index}>{String(entry)}</div>
          ),
        )}
      </div>
    );
  }
  if (isRecord(value)) {
    return (
      <KeyValueList
        items={Object.entries(value).map(([nestedKey, nestedValue]) => [
          fieldLabels[nestedKey] ?? nestedKey,
          valueNode(nestedValue, nestedKey, contextTitle),
        ])}
      />
    );
  }
  return String(value);
}

function recordTitle(item: UnknownRecord, index: number) {
  const title =
    item.title ??
    item.name ??
    item.label ??
    item.time ??
    item.period ??
    item.key ??
    `項目 ${index + 1}`;
  return String(title);
}

function recordEyebrow(item: UnknownRecord) {
  const value = item.rank ?? item.number ?? item.time ?? item.period ?? item.label;
  return value === undefined ? undefined : String(value);
}

export function RecordCards({
  items,
  status = "候補",
  columns = 2,
  detailLabel = "詳細を開く",
}: {
  items: readonly unknown[];
  status?: string | ((item: UnknownRecord, index: number) => string);
  columns?: 2 | 3 | 4;
  detailLabel?: string;
}) {
  return (
    <CardGrid columns={columns}>
      {items.map((raw, index) => {
        if (!isRecord(raw)) {
          return (
            <Card
              key={index}
              title={`項目 ${index + 1}`}
              badge={typeof status === "string" ? status : "候補"}
            >
              <p>{String(raw)}</p>
            </Card>
          );
        }
        const title = recordTitle(raw, index);
        const eyebrow = recordEyebrow(raw);
        const displayedStatus =
          typeof status === "function" ? status(raw, index) : status;
        const hiddenKeys = new Set([
          "id",
          "title",
          "name",
          "key",
          "rank",
          "number",
          "label",
          "period",
          "time",
          "status",
          "certainty",
          "priority",
          "sourceIds",
          "relatedResearchIds",
          "relatedOrganizationIds",
        ]);
        const entries = Object.entries(raw).filter(
          ([key]) => !hiddenKeys.has(key),
        );
        const quick = entries.slice(0, 2);
        const rest = entries.slice(2);
        return (
          <Card
            key={`${title}-${index}`}
            title={title}
            eyebrow={eyebrow}
            badge={displayedStatus}
          >
            <KeyValueList
              items={quick.map(([key, value]) => [
                fieldLabels[key] ?? key,
                valueNode(value, key, title),
              ])}
            />
            {rest.length ? (
              <details className="rm-details">
                <summary>{detailLabel}</summary>
                <KeyValueList
                  items={rest.map(([key, value]) => [
                    fieldLabels[key] ?? key,
                    valueNode(value, key, title),
                  ])}
                />
              </details>
            ) : null}
          </Card>
        );
      })}
    </CardGrid>
  );
}

export function TupleTable({
  headings,
  rows,
  caption,
}: {
  headings: readonly string[];
  rows: readonly (readonly unknown[])[];
  caption?: string;
}) {
  return (
    <div className="rm-table-wrap">
      <table className="rm-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {headings.map((heading) => (
              <th scope="col" key={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th scope="row" key={cellIndex} data-label={headings[cellIndex]}>
                    {valueNode(cell, "")}
                  </th>
                ) : (
                  <td key={cellIndex} data-label={headings[cellIndex]}>
                    {valueNode(cell, "")}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SourceAnchor({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rm-source-anchor"
    >
      {children}
      <span className="rm-visually-hidden">（新しいタブで開く）</span>
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

export function UpdateNotice() {
  return (
    <p className="rm-update-notice">
      <strong>最終更新：2026年7月26日</strong>
      <span>公式制度・募集内容・金額は年度ごとに変わる可能性があります。</span>
    </p>
  );
}
