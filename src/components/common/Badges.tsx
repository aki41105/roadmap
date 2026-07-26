import type { HTMLAttributes } from "react";
import type { Certainty, RoadmapStatus } from "../../data/types";
import { joinClassNames } from "./utils";

const statusTokens: Record<RoadmapStatus, string> = {
  確定: "confirmed",
  予定: "planned",
  候補: "candidate",
  要確認: "needs-check",
  推定: "estimated",
  提案: "proposal",
  進行中: "in-progress",
  完了: "completed",
  延期: "postponed",
  中止: "cancelled",
};

const certaintyTokens: Record<Certainty, string> = {
  公式: "official",
  本人計画: "personal-plan",
  推定: "estimated",
  提案: "proposal",
};

export interface StatusBadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  status: RoadmapStatus;
  labelPrefix?: string;
}

export function StatusBadge({
  status,
  labelPrefix = "状態",
  className,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={joinClassNames(
        "rm-badge",
        "rm-status-badge",
        `rm-status-badge--${statusTokens[status]}`,
        className,
      )}
      data-status={status}
      {...props}
    >
      <span className="rm-visually-hidden">{labelPrefix}：</span>
      {status}
    </span>
  );
}

export interface CertaintyBadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  certainty: Certainty;
  labelPrefix?: string;
}

export function CertaintyBadge({
  certainty,
  labelPrefix = "情報区分",
  className,
  ...props
}: CertaintyBadgeProps) {
  return (
    <span
      className={joinClassNames(
        "rm-badge",
        "rm-certainty-badge",
        `rm-certainty-badge--${certaintyTokens[certainty]}`,
        className,
      )}
      data-certainty={certainty}
      {...props}
    >
      <span className="rm-visually-hidden">{labelPrefix}：</span>
      {certainty}
    </span>
  );
}
