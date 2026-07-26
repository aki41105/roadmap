import { ROADMAP_STATUSES } from "./types";
import type { RoadmapStatus, RouteDefinition } from "./types";

export const appMeta = {
  title: "博士修了までのロードマップ",
  shortTitle: "PhD Roadmap",
  period: {
    start: "2026-07",
    end: "2030-03",
    display: "2026年7月 — 2030年3月",
  },
  doctoralPeriod: {
    start: "2027-04",
    end: "2030-03",
    display: "2027年4月 — 2030年3月",
  },
  updatedAt: "2026-07-26",
  basePath: "/roadmap/",
  legacyPath: "/roadmap/legacy/",
  description:
    "2030年3月の博士修了を守りながら、研究・外部活動・キャリア・生活を条件で判断する統合計画。",
} as const;

export const routes: RouteDefinition[] = [
  {
    id: "timeline",
    path: "/roadmap/timeline/",
    label: "全体タイムライン",
    shortLabel: "全体タイムライン",
    description: "インターン、研究滞在、留学、博士論文・審査の期間を確認する。",
    order: 1,
  },
  {
    id: "internships",
    path: "/roadmap/internships/",
    label: "インターン・就活",
    shortLabel: "インターン・就活",
    description: "D1〜D3のインターンと就活の大きな時期を確認する。",
    order: 2,
  },
  {
    id: "overseas",
    path: "/roadmap/overseas/",
    label: "留学",
    shortLabel: "留学",
    description: "D2冬の約3か月の海外研究留学を確認する。",
    order: 3,
  },
  {
    id: "domestic",
    path: "/roadmap/domestic/",
    label: "国内滞在研究",
    shortLabel: "国内滞在研究",
    description: "D1冬の4〜6週間の国内滞在研究を確認する。",
    order: 4,
  },
  {
    id: "overview",
    path: "/roadmap/",
    label: "その他",
    shortLabel: "その他",
    description: "研究・学位、暮らし、お金、判断資料への入口。",
    order: 5,
  },
  {
    id: "research",
    path: "/roadmap/research/",
    label: "研究・学位",
    shortLabel: "研究・学位",
    description: "研究テーマ、論文計画、学位要件の詳細。",
    order: 6,
  },
  {
    id: "research-stays",
    path: "/roadmap/research-stays/",
    label: "国内・海外研究滞在の詳細",
    shortLabel: "研究滞在の詳細",
    description: "国内・海外研究滞在の候補、制度、条件の詳細。",
    order: 7,
  },
  {
    id: "internship-details",
    path: "/roadmap/internship-details/",
    label: "企業研究インターンの詳細",
    shortLabel: "インターンの詳細",
    description: "企業候補、研究設計、条件、資金の詳細。",
    order: 8,
  },
  {
    id: "career",
    path: "/roadmap/career/",
    label: "就活・キャリアの詳細",
    shortLabel: "就活の詳細",
    description: "進路候補、判断基準、ポートフォリオの詳細。",
    order: 9,
  },
  {
    id: "finance-life",
    path: "/roadmap/finance-life/",
    label: "お金・住居・車",
    shortLabel: "お金・住居・車",
    description: "生活費、助成、住居、車の詳細。",
    order: 10,
  },
  {
    id: "wellbeing",
    path: "/roadmap/wellbeing/",
    label: "生活・健康・人間関係",
    shortLabel: "生活・健康",
    description: "健康、人間関係、山小屋、アルバイトの詳細。",
    order: 11,
  },
  {
    id: "decisions",
    path: "/roadmap/decisions/",
    label: "判断・リスク・資料",
    shortLabel: "判断・資料",
    description: "未決定事項、リスク、出典、更新履歴の詳細。",
    order: 12,
  },
];

export const routeById: Record<string, RouteDefinition> = Object.fromEntries(
  routes.map((route) => [route.id, route]),
);

export const routeByPath: Record<string, RouteDefinition> = Object.fromEntries(
  routes.map((route) => [route.path, route]),
);

export const currentPosition = {
  asOf: "2026-07-26",
  phase: "M2" as const,
  label: "M2 · 博士テーマを絞る期間",
  summary:
    "MIRUの議論を修士研究へ反映し、博士テーマ候補を3案へ絞る。国内・海外・企業の候補整理と資金制度の確認を並行する。",
  status: "進行中" as const,
  sourceIds: ["personal-integrated-plan"],
};

export const currentQuarterPriorities = [
  {
    id: "quarter-priority-research",
    label: "研究",
    text: "修士研究のデータ・解析仕様を凍結し、博士論文の中心テーマ候補を3案にする。",
    status: "進行中" as const,
    sourceIds: ["personal-integrated-plan"],
  },
  {
    id: "quarter-priority-external",
    label: "外部研究",
    text: "海外候補10件、国内・企業候補各5件を一覧化し、海外研究の1ページ計画と英語CVを作る。",
    status: "進行中" as const,
    sourceIds: ["personal-integrated-plan"],
  },
  {
    id: "quarter-priority-life",
    label: "資金・健康",
    text: "資金制度の分岐表を作り、睡眠と支出の記録を始める。",
    status: "進行中" as const,
    sourceIds: ["personal-integrated-plan"],
  },
];

export const updateCadence = [
  {
    id: "update-monthly",
    frequency: "毎月末",
    action: "研究・資金・健康・予定を60〜90分レビュー",
  },
  {
    id: "update-quarterly",
    frequency: "毎四半期",
    action: "ロードマップとリスク表を更新",
  },
  {
    id: "update-april",
    frequency: "毎年4月",
    action: "履修案内・支援制度・締切・募集を最新版へ更新",
  },
  {
    id: "update-external",
    frequency: "外部活動6か月前",
    action: "研究・倫理・データ・著者・知財・投稿先を再確認",
  },
];

export const informationPolicy = {
  official:
    "「公式」は2026年7月26日時点で確認した公開情報。実施年度の要項・募集・学内通知で再確認する。",
  personal:
    "「本人計画」は希望と内部目標を日程へ配置したもの。受入先や大学による確定事項ではない。",
  proposal:
    "「提案」はGO/調整条件、候補順位、期間設計などの意思決定案。進捗・健康・資金で変更する。",
} as const;

export const statusDescriptions: Record<RoadmapStatus, string> = {
  確定: "公式決定または当事者間の合意が完了",
  予定: "本人計画として配置済み",
  候補: "比較・応募・打診の対象",
  要確認: "当該年度の公式情報または書面回答が必要",
  推定: "概算・見込みで、実額や条件は未確定",
  提案: "判断のための案",
  進行中: "現在取り組んでいる",
  完了: "必要な作業と確認が終了",
  延期: "条件未達などにより後ろへ移動",
  中止: "実施しないと決定",
};

export const statusOrder = [...ROADMAP_STATUSES];
