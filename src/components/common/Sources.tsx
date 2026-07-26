import type { ReactNode } from "react";
import type { SourceRecord } from "../../data/types";
import { ExternalLink } from "./ExternalLink";
import { joinClassNames } from "./utils";

export interface SourceMetadataProps {
  source: SourceRecord;
  className?: string;
  showNote?: boolean;
  headingAs?: "h3" | "h4" | "h5";
}

export function SourceMetadata({
  source,
  className,
  showNote = true,
  headingAs: Heading = "h4",
}: SourceMetadataProps) {
  return (
    <article
      className={joinClassNames("rm-source-metadata", className)}
      data-source-kind={source.kind}
    >
      <header className="rm-source-metadata__header">
        <Heading className="rm-source-metadata__title">
          {source.url ? (
            <ExternalLink href={source.url}>{source.title}</ExternalLink>
          ) : (
            source.title
          )}
        </Heading>
        <span className="rm-source-metadata__kind">{source.kind}</span>
      </header>
      <dl className="rm-source-metadata__facts">
        <div>
          <dt>提供元</dt>
          <dd>{source.name}</dd>
        </div>
        <div>
          <dt>対象年</dt>
          <dd>{source.year}</dd>
        </div>
        <div>
          <dt>確認日</dt>
          <dd>
            <time dateTime={source.verifiedAt}>{source.verifiedAt}</time>
          </dd>
        </div>
        <div>
          <dt>変更可能性</dt>
          <dd>{source.changeLikelihood}</dd>
        </div>
      </dl>
      {showNote && source.note ? (
        <p className="rm-source-metadata__note">{source.note}</p>
      ) : null}
    </article>
  );
}

export interface SourceListProps {
  sources: readonly SourceRecord[];
  title?: ReactNode;
  className?: string;
  showNotes?: boolean;
  emptyMessage?: ReactNode;
}

export function SourceList({
  sources,
  title = "出典・確認情報",
  className,
  showNotes = true,
  emptyMessage = "この項目に紐づく出典はありません。",
}: SourceListProps) {
  if (sources.length === 0) {
    return <p className="rm-empty-state">{emptyMessage}</p>;
  }

  return (
    <section className={joinClassNames("rm-source-list", className)}>
      {title ? <h3 className="rm-source-list__title">{title}</h3> : null}
      <ul className="rm-source-list__items">
        {sources.map((source) => (
          <li key={source.id}>
            <SourceMetadata source={source} showNote={showNotes} />
          </li>
        ))}
      </ul>
    </section>
  );
}
