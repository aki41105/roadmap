export const ROADMAP_STATUSES = [
  "確定",
  "予定",
  "候補",
  "要確認",
  "推定",
  "提案",
  "進行中",
  "完了",
  "延期",
  "中止",
] as const;

export type RoadmapStatus = (typeof ROADMAP_STATUSES)[number];

export const CERTAINTY_LEVELS = ["公式", "本人計画", "推定", "提案"] as const;

export type Certainty = (typeof CERTAINTY_LEVELS)[number];

export const SOURCE_KINDS = ["公式", "個人", "提案"] as const;

export type SourceKind = (typeof SOURCE_KINDS)[number];

export const CHANGE_LIKELIHOODS = ["低", "中", "高"] as const;

export type ChangeLikelihood = (typeof CHANGE_LIKELIHOODS)[number];

export const PHASES = ["M2", "D1", "D1→D2", "D2", "D3", "修了後"] as const;

export type Phase = (typeof PHASES)[number];

export const EVENT_CATEGORIES = [
  "研究",
  "国内滞在",
  "海外研究",
  "企業インターン",
  "学位",
  "キャリア",
  "資金・生活",
  "健康・人間関係",
] as const;

export type EventCategory = (typeof EVENT_CATEGORIES)[number];

export const PRIORITIES = ["最優先", "高", "中", "低"] as const;

export type Priority = (typeof PRIORITIES)[number];

/**
 * ISO 8601の暦日または月（YYYY-MM-DD / YYYY-MM）。
 * 正確な日が制度上未確定の場合は、無理に月末日を補わずYYYY-MMを使う。
 */
export type ISODate = string;

export type DatePrecision = "日" | "月" | "四半期";

export interface DateSpan {
  start: ISODate;
  end?: ISODate;
  precision: DatePrecision;
  display: string;
}

export interface SourceRecord {
  id: string;
  name: string;
  title: string;
  kind: SourceKind;
  year: number | "年次記載なし";
  verifiedAt: ISODate;
  url?: string;
  changeLikelihood: ChangeLikelihood;
  group: string;
  note?: string;
}

export interface RoadmapEvent {
  id: string;
  title: string;
  summary: string;
  date: DateSpan;
  phase: Phase;
  category: EventCategory;
  priority: Priority;
  status: RoadmapStatus;
  certainty: Certainty;
  sourceIds: string[];
  relatedResearchIds?: string[];
  relatedOrganizationIds?: string[];
  nextAction?: string;
  caveat?: string;
  tracks?: {
    research?: string;
    outside?: string;
    life?: string;
  };
}

export interface MonthlyAction {
  id: string;
  month: ISODate;
  groupTitle: string;
  action: string;
  category: EventCategory;
  phase: Phase;
  priority: Priority;
  status: RoadmapStatus;
  certainty: Certainty;
  sourceIds: string[];
}

export interface OrganizationRecord {
  id: string;
  name: string;
  organizationType: "大学・研究機関" | "企業研究所" | "企業";
  locationScope: "国内" | "海外";
  role: string;
  fit?: string;
  facts?: string;
  caution?: string;
  status: RoadmapStatus;
  certainty: Certainty;
  priority: Priority;
  phaseFit: Phase[];
  categoryFit: EventCategory[];
  sourceIds: string[];
  aliases?: string[];
}

export interface ResearchStep {
  id: string;
  order: number;
  key: string;
  title: string;
  question: string;
  thesisRole: string;
  phaseFit: Phase[];
  sourceIds: string[];
}

export interface ExternalResearchProject {
  id: string;
  number: string;
  title: string;
  date: DateSpan;
  phase: Phase;
  category: EventCategory;
  duration: string;
  result: string;
  purpose: string;
  caution: string;
  status: RoadmapStatus;
  certainty: Certainty;
  priority: Priority;
  relatedResearchIds: string[];
  relatedOrganizationIds: string[];
  sourceIds: string[];
}

export interface ThesisChapterRelation {
  id: string;
  label: string;
  target: string;
  thesisRole: string;
  status: RoadmapStatus;
  sourceIds: string[];
}

export interface BudgetScenario {
  id: string;
  name: string;
  monthly: string;
  annual: string;
  description: string;
  status: RoadmapStatus;
  certainty: Certainty;
  sourceIds: string[];
}

export interface CostEstimate {
  id: string;
  item: string;
  estimate: string;
  status: RoadmapStatus;
  certainty: Certainty;
  sourceIds: string[];
}

export interface FundingRoute {
  id: string;
  label: string;
  title: string;
  body: string;
  action: string;
  status: RoadmapStatus;
  certainty: Certainty;
  sourceIds: string[];
  eligibility?: string;
  caveat?: string;
}

export interface DecisionGateRecord {
  id: string;
  displayDate: string;
  sortDate: ISODate;
  title: string;
  go: string;
  adjust: string;
  status: RoadmapStatus;
  certainty: Certainty;
  priority: Priority;
  category: EventCategory;
  sourceIds: string[];
}

export interface RiskRecord {
  id: string;
  title: string;
  warning: string;
  response: string;
  category: EventCategory;
  priority: Priority;
  status: RoadmapStatus;
  sourceIds: string[];
}

export interface RouteDefinition {
  id: string;
  path: string;
  label: string;
  shortLabel: string;
  description: string;
  order: number;
}
