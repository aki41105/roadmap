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
    id: "overview",
    path: "/roadmap/",
    label: "概要ダッシュボード",
    shortLabel: "概要",
    description: "現在地、次の90日、締切、判断、リスクを30秒で確認する。",
    order: 1,
  },
  {
    id: "research",
    path: "/roadmap/research/",
    label: "研究・博士論文",
    shortLabel: "研究",
    description: "推定・予測・適応の研究軸と、各外部研究の博士論文章への接続。",
    order: 2,
  },
  {
    id: "research-stays",
    path: "/roadmap/research-stays/",
    label: "国内・海外研究滞在",
    shortLabel: "研究滞在",
    description: "D1冬の国内滞在とD2冬の海外大学研究を、受入条件と出口から比較する。",
    order: 3,
  },
  {
    id: "internships",
    path: "/roadmap/internships/",
    label: "企業研究インターン",
    shortLabel: "インターン",
    description:
      "D1の6〜8週間、D2の2〜3か月、D3の条件付き2〜4週間の企業研究と、候補・契約・中止条件。",
    order: 4,
  },
  {
    id: "career",
    path: "/roadmap/career/",
    label: "キャリア・就職",
    shortLabel: "キャリア",
    description: "研究職の探索、面談、応募、就職先の比較を博士研究と並行して進める。",
    order: 5,
  },
  {
    id: "finance-life",
    path: "/roadmap/finance-life/",
    label: "資金・住居・生活",
    shortLabel: "資金・生活",
    description: "生活費、助成、住居、車、アルバイトを同じ資金制約で判断する。",
    order: 6,
  },
  {
    id: "wellbeing",
    path: "/roadmap/wellbeing/",
    label: "健康・人間関係",
    shortLabel: "健康・関係",
    description: "睡眠、回復、人とのつながりを研究計画と同じ優先度で守る。",
    order: 7,
  },
  {
    id: "timeline",
    path: "/roadmap/timeline/",
    label: "全期間タイムライン",
    shortLabel: "タイムライン",
    description: "2026年7月から2030年3月までを、時期・年次・カテゴリで追う。",
    order: 8,
  },
  {
    id: "decisions",
    path: "/roadmap/decisions/",
    label: "判断・リスク・資料",
    shortLabel: "判断・資料",
    description: "GO/調整条件、早期警戒、出典、更新履歴を確認する。",
    order: 9,
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
