import type { PageContent, RouteId } from "../app/types";
import { CareerPage } from "./CareerPage";
import { DecisionsPage } from "./DecisionsPage";
import { FinanceLifePage } from "./FinanceLifePage";
import { InternshipsPage } from "./InternshipsPage";
import { OverviewPage } from "./OverviewPage";
import { ResearchPage } from "./ResearchPage";
import { ResearchStaysPage } from "./ResearchStaysPage";
import { TimelinePage } from "./TimelinePage";
import { WellbeingPage } from "./WellbeingPage";

const updatedAt = "2026-07-26";

const pages: Record<RouteId, PageContent> = {
  overview: {
    title: "博士修了までの統合ロードマップ",
    description:
      "2026年7月から2030年3月までの現在地、次の90日、重要締切、判断待ち、リスクを30秒で確認できる博士課程ダッシュボード。",
    eyebrow: "OVERVIEW · 2026—2030",
    updatedAt,
    toc: [
      { id: "current", label: "現在地" },
      { id: "next-90", label: "次の90日" },
      { id: "quarter", label: "今四半期" },
      { id: "deadlines", label: "重要締切" },
      { id: "decisions", label: "判断待ち" },
      { id: "risks", label: "重大リスク" },
      { id: "principles", label: "守る順番" },
      { id: "update", label: "更新方法" },
    ],
    Component: OverviewPage,
  },
  research: {
    title: "研究・学位",
    description:
      "博士論文の中心テーマ、研究A〜C、論文・章対応、JAISTの修了要件と学位工程を整理したページ。",
    eyebrow: "RESEARCH & DEGREE",
    updatedAt,
    toc: [
      { id: "themes", label: "研究テーマ" },
      { id: "thesis-map", label: "博士論文章構成" },
      { id: "papers", label: "論文計画" },
      { id: "degree", label: "修了要件・学位工程" },
      { id: "support", label: "支援制度" },
      { id: "next-actions", label: "次の行動" },
    ],
    Component: ResearchPage,
  },
  "research-stays": {
    title: "国内・海外研究滞在",
    description:
      "D1冬の国内滞在研究とD2冬の海外研究留学について、候補、資金、手続き、実施条件を比較するページ。",
    eyebrow: "RESEARCH STAYS",
    updatedAt,
    toc: [
      { id: "domestic", label: "国内滞在研究" },
      { id: "overseas", label: "海外研究留学" },
      { id: "comparison", label: "国内・海外比較" },
      { id: "procedures", label: "共通手続き" },
    ],
    Component: ResearchStaysPage,
  },
  internships: {
    title: "企業研究インターン",
    description:
      "D1は6〜8週間、D2は2〜3か月、D3は学位優先の条件付き2〜4週間とする企業研究インターン計画と候補比較。",
    eyebrow: "ENTERPRISE RESEARCH",
    updatedAt,
    toc: [
      { id: "annual-plan", label: "三年間の計画" },
      { id: "candidates", label: "企業候補" },
      { id: "purpose", label: "目的分類" },
      { id: "research-design", label: "8週間の研究設計" },
      { id: "conditions", label: "参加条件" },
      { id: "ntt-short", label: "NTT・短期候補" },
      { id: "funding", label: "給与・資金" },
      { id: "gates", label: "実施・中止条件" },
      { id: "preparation", label: "準備工程" },
    ],
    Component: InternshipsPage,
  },
  career: {
    title: "就職・キャリア",
    description:
      "企業研究職、国立研究機関、ポスドク、大学教員、海外就職をD1から比較し、D3前半で決めるキャリア計画。",
    eyebrow: "CAREER",
    updatedAt,
    toc: [
      { id: "directions", label: "進路候補" },
      { id: "schedule", label: "D1〜D3計画" },
      { id: "internship-connection", label: "インターンとの接続" },
      { id: "portfolio", label: "ポートフォリオ" },
      { id: "criteria", label: "判断基準" },
      { id: "options", label: "企業・アカデミア" },
      { id: "open-questions", label: "未決定事項" },
    ],
    Component: CareerPage,
  },
  "finance-life": {
    title: "お金・住居・車",
    description:
      "博士課程中の収入、支出、三つの予算、研究滞在費、住居と車の判断条件を整理したページ。",
    eyebrow: "FINANCE & LIVING",
    updatedAt,
    toc: [
      { id: "income", label: "収入・資金" },
      { id: "expenses", label: "支出" },
      { id: "budgets", label: "予算シナリオ" },
      { id: "stays", label: "研究滞在費" },
      { id: "housing", label: "住居" },
      { id: "car", label: "車" },
      { id: "reviews", label: "月次更新" },
    ],
    Component: FinanceLifePage,
  },
  wellbeing: {
    title: "生活・健康・人間関係",
    description:
      "睡眠、食事、運動、休暇、メンタルヘルス、友人・恋愛、山小屋、アルバイト、回復期間の生活計画。",
    eyebrow: "WELLBEING",
    updatedAt,
    toc: [
      { id: "baseline", label: "生活基準" },
      { id: "mental-health", label: "メンタル・孤立防止" },
      { id: "review", label: "面談・レビュー" },
      { id: "relationships", label: "人間関係" },
      { id: "work-experience", label: "山小屋・バイト" },
      { id: "recovery", label: "繁忙・回復" },
      { id: "life-areas", label: "生活全体" },
    ],
    Component: WellbeingPage,
  },
  timeline: {
    title: "D1〜D3スケジュール",
    description:
      "2027年4月から2030年3月までの36か月を、D1・D2・D3、月別、四半期、全体、判断、余白で確認。",
    eyebrow: "DOCTORAL SCHEDULE · 2027.04—2030.03",
    updatedAt,
    toc: [
      { id: "year-goals", label: "年次目標" },
      { id: "doctoral-schedule", label: "月別・四半期" },
      { id: "overall", label: "3年間全体" },
      { id: "schedule-decisions", label: "判断ポイント" },
      { id: "reality-checks", label: "現実性チェック" },
      { id: "deadlines", label: "学位日程" },
      { id: "operating-rules", label: "余白・削減ルール" },
      { id: "appendix", label: "補助タイムライン" },
    ],
    Component: TimelinePage,
  },
  decisions: {
    title: "判断・リスク・資料",
    description:
      "未決定事項、17件の判断ゲート、12件のリスク、公式資料・個人記事・提案を一元管理するページ。",
    eyebrow: "DECISIONS & SOURCES",
    updatedAt,
    toc: [
      { id: "pending", label: "判断待ち" },
      { id: "gates", label: "判断ゲート" },
      { id: "risks", label: "リスク" },
      { id: "domain-rules", label: "外部研究条件" },
      { id: "sources", label: "資料・出典" },
      { id: "maintenance", label: "更新ルール" },
    ],
    Component: DecisionsPage,
  },
};

export function getPageContent(routeId: RouteId): PageContent {
  return pages[routeId] ?? pages.overview;
}
