import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import { joinClassNames, renderOptional } from "./utils";

type HeadingElement = "h1" | "h2" | "h3" | "h4";

export interface SectionHeaderProps {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  headingAs?: HeadingElement;
  className?: string;
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  actions,
  headingAs: Heading = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <header className={joinClassNames("rm-section-header", className)}>
      <div className="rm-section-header__copy">
        {eyebrow ? <p className="rm-section-header__eyebrow">{eyebrow}</p> : null}
        <Heading id={id} className="rm-section-header__title">
          {title}
        </Heading>
        {description ? (
          <div className="rm-section-header__description">{description}</div>
        ) : null}
      </div>
      {actions ? <div className="rm-section-header__actions">{actions}</div> : null}
    </header>
  );
}

export interface SummaryCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title: ReactNode;
  value?: ReactNode;
  eyebrow?: ReactNode;
  badge?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  as?: "article" | "section" | "div";
  headingAs?: HeadingElement;
}

export function SummaryCard({
  title,
  value,
  eyebrow,
  badge,
  children,
  footer,
  as: Root = "article",
  headingAs: Heading = "h3",
  className,
  ...props
}: SummaryCardProps) {
  return (
    <Root className={joinClassNames("rm-summary-card", className)} {...props}>
      <header className="rm-summary-card__header">
        <div className="rm-summary-card__heading">
          {eyebrow ? <p className="rm-summary-card__eyebrow">{eyebrow}</p> : null}
          <Heading className="rm-summary-card__title">{title}</Heading>
        </div>
        {badge ? <div className="rm-summary-card__badge">{badge}</div> : null}
      </header>
      {value !== undefined ? (
        <p className="rm-summary-card__value">{value}</p>
      ) : null}
      {children ? <div className="rm-summary-card__body">{children}</div> : null}
      {footer ? <footer className="rm-summary-card__footer">{footer}</footer> : null}
    </Root>
  );
}

export interface DetailCardProps
  extends Omit<HTMLAttributes<HTMLDetailsElement>, "children"> {
  summary: ReactNode;
  summaryMeta?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function DetailCard({
  summary,
  summaryMeta,
  children,
  defaultOpen,
  className,
  ...props
}: DetailCardProps) {
  return (
    <details
      className={joinClassNames("rm-detail-card", className)}
      open={defaultOpen || undefined}
      {...props}
    >
      <summary className="rm-detail-card__summary">
        <span className="rm-detail-card__summary-label">{summary}</span>
        {summaryMeta ? (
          <span className="rm-detail-card__summary-meta">{summaryMeta}</span>
        ) : null}
        <span className="rm-detail-card__disclosure" aria-hidden="true" />
      </summary>
      <div className="rm-detail-card__body">{children}</div>
    </details>
  );
}

export type CalloutTone =
  | "note"
  | "info"
  | "warning"
  | "success"
  | "critical";

export interface CalloutProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: ReactNode;
  tone?: CalloutTone;
  children: ReactNode;
  as?: "aside" | "section" | "div";
  headingAs?: Exclude<HeadingElement, "h1">;
}

export function Callout({
  title,
  tone = "note",
  children,
  as: Root = "aside",
  headingAs: Heading = "h3",
  className,
  ...props
}: CalloutProps) {
  return (
    <Root
      className={joinClassNames(
        "rm-callout",
        `rm-callout--${tone}`,
        className,
      )}
      {...props}
    >
      {title ? <Heading className="rm-callout__title">{title}</Heading> : null}
      <div className="rm-callout__body">{children}</div>
    </Root>
  );
}

export type WarningCalloutProps = Omit<CalloutProps, "tone">;

export function WarningCallout(props: WarningCalloutProps) {
  return <Callout tone="warning" {...props} />;
}

export interface LabeledListItem {
  id?: string;
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
}

export interface LabeledListProps {
  items: readonly LabeledListItem[];
  className?: string;
  emptyMessage?: ReactNode;
}

export function LabeledList({
  items,
  className,
  emptyMessage = "情報はまだありません。",
}: LabeledListProps) {
  if (items.length === 0) {
    return <p className="rm-empty-state">{emptyMessage}</p>;
  }

  return (
    <dl className={joinClassNames("rm-labeled-list", className)}>
      {items.map((item, index) => (
        <div
          className="rm-labeled-list__item"
          key={item.id ?? `${index}-${String(item.label)}`}
        >
          <dt className="rm-labeled-list__label">{item.label}</dt>
          <dd className="rm-labeled-list__value">
            {renderOptional(item.value)}
            {item.description ? (
              <span className="rm-labeled-list__description">
                {item.description}
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export interface TupleListProps {
  items: ReadonlyArray<readonly [ReactNode, ReactNode]>;
  className?: string;
  emptyMessage?: ReactNode;
}

export function TupleList({
  items,
  className,
  emptyMessage,
}: TupleListProps) {
  return (
    <LabeledList
      className={className}
      items={items.map(([label, value], index) => ({
        id: String(index),
        label,
        value,
      }))}
      emptyMessage={emptyMessage}
    />
  );
}

export interface BulletListItem {
  id?: string;
  content: ReactNode;
}

export interface BulletListProps {
  items: ReadonlyArray<ReactNode | BulletListItem>;
  ordered?: boolean;
  className?: string;
  emptyMessage?: ReactNode;
}

function isBulletListItem(item: ReactNode | BulletListItem): item is BulletListItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "content" in item
  );
}

export function BulletList({
  items,
  ordered = false,
  className,
  emptyMessage = "項目はまだありません。",
}: BulletListProps) {
  if (items.length === 0) {
    return <p className="rm-empty-state">{emptyMessage}</p>;
  }

  const Root: ElementType = ordered ? "ol" : "ul";

  return (
    <Root
      className={joinClassNames(
        "rm-bullet-list",
        ordered && "rm-bullet-list--ordered",
        className,
      )}
    >
      {items.map((item, index) => {
        const content = isBulletListItem(item) ? item.content : item;
        const key = isBulletListItem(item) ? item.id ?? index : index;
        return <li key={key}>{content}</li>;
      })}
    </Root>
  );
}
