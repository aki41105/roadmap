import {
  degreeMilestones,
  nextTwelveMonths,
  roadmapItems,
} from "../data";
import { externalResearchProjects } from "./research";
import type {
  DateSpan,
  EventCategory,
  MonthlyAction,
  Phase,
  Priority,
  RoadmapEvent,
  RoadmapStatus,
} from "./types";

export const DATA_AS_OF = "2026-07-26";

type TimelineNormalization = {
  date: DateSpan;
  phase: Phase;
  category: EventCategory;
  title: string;
  priority: Priority;
};

const d2InternshipTimeline = {
  date: {
    start: "2028-06",
    end: "2028-07",
    precision: "月",
    display: "2028.06–07",
  },
  phase: "D2",
  category: "企業インターン",
  title: "D2夏の論文型企業研究（6〜8週間）",
  priority: "高",
} satisfies TimelineNormalization;

const d2TransitionTimeline = {
  date: {
    start: "2028-08",
    end: "2028-08",
    precision: "月",
    display: "2028.08",
  },
  phase: "D2",
  category: "海外研究",
  title: "企業成果の整理・回復・海外研究の最終準備",
  priority: "最優先",
} satisfies TimelineNormalization;

const d2OverseasTimeline = {
  date: {
    start: "2028-09",
    end: "2029-02",
    precision: "月",
    display: "2028.09–2029.02",
  },
  phase: "D2",
  category: "海外研究",
  title: "6か月の海外共同研究で外的妥当性を検証",
  priority: "高",
} satisfies TimelineNormalization;

const d2ReturnTimeline = {
  date: {
    start: "2029-03",
    end: "2029-03",
    precision: "月",
    display: "2029.03",
  },
  phase: "D2",
  category: "研究",
  title: "帰国・回復・海外成果の統合",
  priority: "最優先",
} satisfies TimelineNormalization;

const timelineNormalization: Record<string, TimelineNormalization> = {
  "2026 Q3": {
    date: {
      start: "2026-07",
      end: "2026-09",
      precision: "四半期",
      display: "2026 Q3",
    },
    phase: "M2",
    category: "研究",
    title: "修士研究を博士テーマ候補へ接続",
    priority: "最優先",
  },
  "2026 Q4": {
    date: {
      start: "2026-10",
      end: "2026-12",
      precision: "四半期",
      display: "2026 Q4",
    },
    phase: "M2",
    category: "研究",
    title: "修士論文初稿と博士論文の中心問い",
    priority: "最優先",
  },
  "2027 Q1": {
    date: {
      start: "2027-01",
      end: "2027-03",
      precision: "四半期",
      display: "2027 Q1",
    },
    phase: "M2",
    category: "学位",
    title: "修士論文審査とD1への移行",
    priority: "最優先",
  },
  "2027 Q2": {
    date: {
      start: "2027-04",
      end: "2027-06",
      precision: "四半期",
      display: "2027 Q2",
    },
    phase: "D1",
    category: "研究",
    title: "博士研究・履修・外部研究の基盤を作る",
    priority: "最優先",
  },
  "2027 Q3": {
    date: {
      start: "2027-07",
      end: "2027-09",
      precision: "四半期",
      display: "2027 Q3",
    },
    phase: "D1",
    category: "企業インターン",
    title: "D1夏の論文型企業研究",
    priority: "高",
  },
  "2027 Q4": {
    date: {
      start: "2027-10",
      end: "2027-12",
      precision: "四半期",
      display: "2027 Q4",
    },
    phase: "D1",
    category: "研究",
    title: "D1企業論文の投稿と国内滞在の確定",
    priority: "最優先",
  },
  "2028.01–02": {
    date: {
      start: "2028-01",
      end: "2028-02",
      precision: "月",
      display: "2028.01–02",
    },
    phase: "D1",
    category: "国内滞在",
    title: "D1冬の国内滞在研究",
    priority: "高",
  },
  "2028.03–05": {
    date: {
      start: "2028-03",
      end: "2028-05",
      precision: "月",
      display: "2028.03–05",
    },
    phase: "D1→D2",
    category: "研究",
    title: "国内成果の原稿化とD2企業研究の準備",
    priority: "最優先",
  },
  "2028.06–07": d2InternshipTimeline,
  "2028.08": d2TransitionTimeline,
  "2028.09–2029.02": d2OverseasTimeline,
  "2029.03": d2ReturnTimeline,
  "2029 Q2": {
    date: {
      start: "2029-04",
      end: "2029-06",
      precision: "四半期",
      display: "2029 Q2",
    },
    phase: "D3",
    category: "学位",
    title: "博士論文初稿と就職先の決定",
    priority: "最優先",
  },
  "2029 Q3": {
    date: {
      start: "2029-07",
      end: "2029-09",
      precision: "四半期",
      display: "2029 Q3",
    },
    phase: "D3",
    category: "学位",
    title: "学位論文骨子と博士論文全体初稿",
    priority: "最優先",
  },
  "2029 Q4": {
    date: {
      start: "2029-10",
      end: "2029-12",
      precision: "四半期",
      display: "2029 Q4",
    },
    phase: "D3",
    category: "学位",
    title: "予備審査願と予備審査",
    priority: "最優先",
  },
  "2030 Q1": {
    date: {
      start: "2030-01",
      end: "2030-03",
      precision: "四半期",
      display: "2030 Q1",
    },
    phase: "D3",
    category: "学位",
    title: "博士論文提出・公聴会・学位授与",
    priority: "最優先",
  },
};

function timelineStatus(period: string): RoadmapStatus {
  return period === "2026 Q3" ? "進行中" : "予定";
}

function timelineSourceIds(category: EventCategory): string[] {
  if (category === "学位") {
    return [
      "personal-integrated-plan",
      "jaist-degree-guide",
      "jaist-doctoral-schedule",
    ];
  }
  return ["personal-integrated-plan"];
}

export const timelineEvents: RoadmapEvent[] = roadmapItems.map((item, index) => {
  const normalized = timelineNormalization[item.period];

  return {
    id: `timeline-${String(index + 1).padStart(2, "0")}`,
    title: normalized.title,
    summary: item.research,
    date: normalized.date,
    phase: normalized.phase,
    category: normalized.category,
    priority: normalized.priority,
    status: timelineStatus(item.period),
    certainty: "本人計画",
    sourceIds: timelineSourceIds(normalized.category),
    tracks: {
      research: item.research,
      outside: item.outside,
      life: item.life,
    },
  };
});

const monthlyActionCategories: EventCategory[][] = [
  ["研究", "研究", "海外研究"],
  ["研究", "海外研究", "国内滞在"],
  ["研究", "研究", "健康・人間関係"],
  ["研究", "研究", "研究"],
  ["研究", "海外研究", "国内滞在"],
  ["研究", "企業インターン", "健康・人間関係"],
  ["学位", "資金・生活", "資金・生活"],
  ["学位", "企業インターン", "資金・生活"],
  ["学位", "研究", "企業インターン"],
  ["学位", "企業インターン", "研究"],
  ["企業インターン", "企業インターン", "研究", "国内滞在"],
  ["企業インターン", "企業インターン", "企業インターン", "国内滞在"],
];

function phaseForMonth(month: string): Phase {
  return month <= "2027.03" ? "M2" : "D1";
}

function actionPriority(category: EventCategory, action: string): Priority {
  if (
    category === "学位" ||
    /修士|博士論文|データ・解析仕様|投稿|研究質問/.test(action)
  ) {
    return "最優先";
  }
  if (
    category === "研究" ||
    category === "企業インターン" ||
    category === "海外研究"
  ) {
    return "高";
  }
  return "中";
}

export const monthlyActions: MonthlyAction[] = nextTwelveMonths.flatMap(
  (monthGroup, monthIndex) =>
    monthGroup.tasks.map((action, taskIndex) => {
      const category =
        monthlyActionCategories[monthIndex]?.[taskIndex] ?? "研究";

      return {
        id: `action-${monthGroup.month.replace(".", "-")}-${taskIndex + 1}`,
        month: monthGroup.month.replace(".", "-"),
        groupTitle: monthGroup.title,
        action,
        category,
        phase: phaseForMonth(monthGroup.month),
        priority: actionPriority(category, action),
        status:
          monthGroup.month === "2026.07"
            ? ("進行中" as const)
            : ("予定" as const),
        certainty: "本人計画" as const,
        sourceIds: ["personal-integrated-plan"],
      };
    }),
);

/**
 * 2026-07-26時点の「次の90日」で、ダッシュボードに出す最大8件。
 * 元の月別タスクを参照しており、独立した締切を作ってはいない。
 */
export const nextNinetyDayActions = monthlyActions
  .filter((action) => action.month >= "2026-07" && action.month <= "2026-10")
  .slice(0, 8);

const degreeDateNormalization: Record<
  string,
  { sort: string; phase: Phase; status: RoadmapStatus }
> = {
  "2027.04": { sort: "2027-04", phase: "D1", status: "予定" },
  "2027.06": { sort: "2027-06", phase: "D1", status: "要確認" },
  "2027.10": { sort: "2027-10", phase: "D1", status: "予定" },
  "2027.12": { sort: "2027-12", phase: "D1", status: "要確認" },
  "2028.01–02": { sort: "2028-01", phase: "D1", status: "要確認" },
  "2028.02末": { sort: "2028-02", phase: "D1", status: "要確認" },
  "2028.03–04": { sort: "2028-03", phase: "D1→D2", status: "要確認" },
  "2028年度": { sort: "2028-04", phase: "D2", status: "要確認" },
  "2029.07": { sort: "2029-07", phase: "D3", status: "要確認" },
  "2029.10": { sort: "2029-10", phase: "D3", status: "要確認" },
  "2029.12": { sort: "2029-12", phase: "D3", status: "要確認" },
  "2030.01": { sort: "2030-01", phase: "D3", status: "要確認" },
  "2030.02": { sort: "2030-02", phase: "D3", status: "要確認" },
  "2030.03": { sort: "2030-03", phase: "D3", status: "要確認" },
};

export const degreeDeadlineEvents: RoadmapEvent[] = degreeMilestones.map(
  (milestone, index) => {
    const normalized = degreeDateNormalization[milestone.time];

    return {
      id: `degree-${String(index + 1).padStart(2, "0")}`,
      title: milestone.standard,
      summary: milestone.standard,
      date: {
        start: normalized.sort,
        precision: "月",
        display: milestone.time,
      },
      phase: normalized.phase,
      category: "学位",
      priority: "最優先",
      status: normalized.status,
      certainty: "本人計画",
      sourceIds: [
        "personal-integrated-plan",
        "jaist-degree-guide",
        "jaist-doctoral-schedule",
        "jaist-minor-internship",
      ],
      nextAction: milestone.internal,
      caveat:
        "正確な提出日・適用条件は当該年度の履修案内、教務通知、担当窓口で再確認する。",
    };
  },
);

export const externalProjectEvents: RoadmapEvent[] =
  externalResearchProjects.map((project) => ({
    id: `event-${project.id}`,
    title: project.title,
    summary: project.purpose,
    date: project.date,
    phase: project.phase,
    category: project.category,
    priority: project.priority,
    status: project.status,
    certainty: project.certainty,
    sourceIds: project.sourceIds,
    relatedResearchIds: project.relatedResearchIds,
    relatedOrganizationIds: project.relatedOrganizationIds,
    nextAction: project.result,
    caveat: project.caution,
  }));

export const allScheduleEvents: RoadmapEvent[] = [
  ...timelineEvents,
  ...degreeDeadlineEvents,
  ...externalProjectEvents,
].sort((a, b) => a.date.start.localeCompare(b.date.start));
