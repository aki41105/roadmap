import type { ReactNode } from "react";
import type { RoadmapEvent } from "../../data/types";
import { CertaintyBadge, StatusBadge } from "./Badges";
import { joinClassNames } from "./utils";

export interface EventCardProps {
  event: RoadmapEvent;
  className?: string;
  compact?: boolean;
  titleAs?: "h2" | "h3" | "h4";
  footer?: ReactNode;
}

export function EventCard({
  event,
  className,
  compact = false,
  titleAs: Heading = "h3",
  footer,
}: EventCardProps) {
  return (
    <article
      className={joinClassNames(
        "rm-event-card",
        compact && "rm-event-card--compact",
        className,
      )}
      data-category={event.category}
      data-phase={event.phase}
      data-priority={event.priority}
    >
      <header className="rm-event-card__header">
        <div className="rm-event-card__date">
          <time dateTime={event.date.start}>{event.date.display}</time>
          <span className="rm-event-card__phase">{event.phase}</span>
        </div>
        <div className="rm-event-card__badges">
          <StatusBadge status={event.status} />
          <CertaintyBadge certainty={event.certainty} />
        </div>
        <Heading className="rm-event-card__title">{event.title}</Heading>
        <p className="rm-event-card__summary">{event.summary}</p>
      </header>
      {!compact ? (
        <dl className="rm-event-card__facts">
          <div>
            <dt>分野</dt>
            <dd>{event.category}</dd>
          </div>
          <div>
            <dt>優先度</dt>
            <dd>{event.priority}</dd>
          </div>
          {event.nextAction ? (
            <div>
              <dt>次の行動</dt>
              <dd>{event.nextAction}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
      {!compact && event.tracks ? (
        <dl className="rm-event-card__tracks">
          {event.tracks.research ? (
            <div>
              <dt>研究</dt>
              <dd>{event.tracks.research}</dd>
            </div>
          ) : null}
          {event.tracks.outside ? (
            <div>
              <dt>外部活動</dt>
              <dd>{event.tracks.outside}</dd>
            </div>
          ) : null}
          {event.tracks.life ? (
            <div>
              <dt>生活</dt>
              <dd>{event.tracks.life}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
      {event.caveat ? (
        <p className="rm-event-card__caveat">
          <strong>注意：</strong>
          {event.caveat}
        </p>
      ) : null}
      {footer ? <footer className="rm-event-card__footer">{footer}</footer> : null}
    </article>
  );
}

export interface TimelineListProps {
  events: readonly RoadmapEvent[];
  className?: string;
  compact?: boolean;
  ariaLabel?: string;
  renderFooter?: (event: RoadmapEvent, index: number) => ReactNode;
  emptyMessage?: ReactNode;
}

export function TimelineList({
  events,
  className,
  compact = false,
  ariaLabel = "ロードマップの時系列",
  renderFooter,
  emptyMessage = "表示する予定はありません。",
}: TimelineListProps) {
  if (events.length === 0) {
    return <p className="rm-empty-state">{emptyMessage}</p>;
  }

  return (
    <ol
      className={joinClassNames("rm-timeline-list", className)}
      aria-label={ariaLabel}
    >
      {events.map((event, index) => (
        <li className="rm-timeline-list__item" key={event.id}>
          <EventCard
            event={event}
            compact={compact}
            footer={renderFooter?.(event, index)}
          />
        </li>
      ))}
    </ol>
  );
}
