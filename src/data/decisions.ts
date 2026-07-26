import {
  busyPeriods,
  decisionGates,
  recoveryWindows,
  riskRows,
} from "../data";
import type {
  DecisionGateRecord,
  EventCategory,
  Priority,
  RiskRecord,
  RoadmapStatus,
} from "./types";

type GateNormalization = {
  sortDate: string;
  category: EventCategory;
  priority: Priority;
  status?: RoadmapStatus;
  sourceIds?: string[];
};

const gateNormalization: Record<string, GateNormalization> = {
  博士テーマ: {
    sortDate: "2026-12",
    category: "研究",
    priority: "最優先",
  },
  D1夏の企業研究: {
    sortDate: "2027-06",
    category: "企業インターン",
    priority: "高",
    sourceIds: ["cyberagent-internship-2026"],
  },
  国内滞在の方向: {
    sortDate: "2027-10",
    category: "国内滞在",
    priority: "高",
    sourceIds: ["nii-special-researcher", "kyoto-hri"],
  },
  D1企業論文: {
    sortDate: "2027-12",
    category: "研究",
    priority: "最優先",
  },
  国内滞在の最終実施: {
    sortDate: "2027-12",
    category: "国内滞在",
    priority: "高",
    sourceIds: ["nii-special-researcher", "jaist-minor-internship"],
  },
  国内滞在の終了: {
    sortDate: "2028-02-29",
    category: "国内滞在",
    priority: "高",
  },
  国内成果の凍結: {
    sortDate: "2028-05-15",
    category: "研究",
    priority: "最優先",
  },
  車: {
    sortDate: "2028-04",
    category: "資金・生活",
    priority: "低",
  },
  D2夏の企業研究: {
    sortDate: "2028-04-30",
    category: "企業インターン",
    priority: "高",
  },
  海外研究留学・最終GO: {
    sortDate: "2028-05-31",
    category: "海外研究",
    priority: "高",
    sourceIds: ["jaist-research-stay-rules", "jaist-research-grants"],
  },
  引っ越し: {
    sortDate: "2029-02",
    category: "資金・生活",
    priority: "中",
  },
  D3博士論文の進捗確認: {
    sortDate: "2029-05-31",
    category: "学位",
    priority: "最優先",
    sourceIds: ["jaist-doctoral-schedule"],
  },
  就活: {
    sortDate: "2029-06",
    category: "キャリア",
    priority: "高",
  },
  博士論文骨子後の再確認: {
    sortDate: "2029-07",
    category: "学位",
    priority: "高",
  },
  予備審査願: {
    sortDate: "2029-10",
    category: "学位",
    priority: "最優先",
    status: "要確認",
    sourceIds: ["jaist-doctoral-schedule"],
  },
};

export const normalizedDecisionGates: DecisionGateRecord[] = decisionGates.map(
  (gate, index) => {
    const normalized = gateNormalization[gate.title];

    return {
      id: `decision-${String(index + 1).padStart(2, "0")}`,
      displayDate: gate.time,
      sortDate: normalized.sortDate,
      title: gate.title,
      go: gate.go,
      adjust: gate.stop,
      status: normalized.status ?? "予定",
      certainty: "提案",
      priority: normalized.priority,
      category: normalized.category,
      sourceIds: [
        "personal-integrated-plan",
        "roadmap-planning-proposal",
        ...(normalized.sourceIds ?? []),
      ],
    };
  },
);

type RiskNormalization = {
  category: EventCategory;
  priority: Priority;
};

const riskNormalization: Record<string, RiskNormalization> = {
  企業研究が論文にならない: {
    category: "企業インターン",
    priority: "高",
  },
  倫理審査が間に合わない: {
    category: "研究",
    priority: "高",
  },
  D1企業論文と国内滞在が衝突: {
    category: "国内滞在",
    priority: "高",
  },
  国内の受入れが成立しない: {
    category: "国内滞在",
    priority: "高",
  },
  国内成果がD2準備を圧迫: {
    category: "研究",
    priority: "高",
  },
  海外の助成候補を国内で消費する: {
    category: "資金・生活",
    priority: "高",
  },
  D2が過密: {
    category: "海外研究",
    priority: "高",
  },
  D3学位が遅れる: {
    category: "学位",
    priority: "最優先",
  },
  資金不足: {
    category: "資金・生活",
    priority: "高",
  },
  睡眠悪化: {
    category: "健康・人間関係",
    priority: "最優先",
  },
  孤立: {
    category: "健康・人間関係",
    priority: "中",
  },
};

export const risks: RiskRecord[] = riskRows.map(
  ([title, warning, response], index) => {
    const normalized = riskNormalization[title];

    return {
      id: `risk-${String(index + 1).padStart(2, "0")}`,
      title,
      warning,
      response,
      category: normalized.category,
      priority: normalized.priority,
      status: "要確認",
      sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
    };
  },
);

export const majorRisks = risks.filter(
  (risk) => risk.priority === "最優先" || risk.priority === "高",
);

export const protectedPriorities = [
  "博士論文の中心研究と学位日程",
  "睡眠・食事・健康",
  "研究資金と生活の持続可能性",
  "論文化につながる外部研究",
  "早期のキャリア探索と就職活動",
  "住居・車・アルバイト・山小屋などの生活経験",
] as const;

export const reductionOrder = [
  "一般バイト",
  "車",
  "任意の学会",
  "山小屋",
  "計画外の追加外部活動",
  "博士論文に入らない共同研究",
] as const;

export const nonNegotiables = [
  "睡眠",
  "食事",
  "博士論文の中心研究",
  "指導教員との連絡",
] as const;

export const normalizedBusyPeriods = busyPeriods.map(([period, load], index) => ({
  id: `busy-${String(index + 1).padStart(2, "0")}`,
  period,
  load,
  status: "要確認" as const,
  sourceIds: ["personal-integrated-plan"],
}));

export const normalizedRecoveryWindows = recoveryWindows.map(
  ([period, margin], index) => ({
    id: `recovery-${String(index + 1).padStart(2, "0")}`,
    period,
    margin,
    status: "予定" as const,
    sourceIds: ["personal-integrated-plan"],
  }),
);
