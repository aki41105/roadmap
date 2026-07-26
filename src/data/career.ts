import { organizations } from "./organizations";
import type { DateSpan, Phase, RoadmapStatus } from "./types";

type CareerPlanItem = {
  label: string;
  action: string;
  date: DateSpan;
  phase: Phase;
  status: RoadmapStatus;
};

const careerPlan: CareerPlanItem[] = [
  {
    label: "D1前半",
    action: "職種・組織を探索し、応募先の評価軸と共通資料を作る",
    date: {
      start: "2027-04",
      end: "2027-09",
      precision: "月",
      display: "D1前半",
    },
    phase: "D1",
    status: "予定",
  },
  {
    label: "D1後半",
    action: "研究者・採用担当との接点を作り、D2開始時に応募できる状態へ進める",
    date: {
      start: "2027-10",
      end: "2028-03",
      precision: "月",
      display: "D1後半",
    },
    phase: "D1",
    status: "予定",
  },
  {
    label: "2028年4〜5月",
    action: "本命候補へ応募し、書類選考・面接・研究発表を進める",
    date: {
      start: "2028-04",
      end: "2028-05",
      precision: "月",
      display: "2028年4〜5月",
    },
    phase: "D2",
    status: "予定",
  },
  {
    label: "2028年6〜7月",
    action: "企業研究インターンの経験と成果を就職先比較へ反映する",
    date: {
      start: "2028-06",
      end: "2028-07",
      precision: "月",
      display: "2028年6〜7月",
    },
    phase: "D2",
    status: "予定",
  },
  {
    label: "2028年8〜12月",
    action: "主要選考を終え、内定・採用条件・研究環境を比較する",
    date: {
      start: "2028-08",
      end: "2028-12",
      precision: "月",
      display: "2028年8〜12月",
    },
    phase: "D2",
    status: "予定",
  },
  {
    label: "2029年1〜3月",
    action: "最終候補を選び、承諾と進路確定を3月末までに終える",
    date: {
      start: "2029-01",
      end: "2029-03",
      precision: "月",
      display: "2029年1〜3月",
    },
    phase: "D2",
    status: "予定",
  },
];

export const careerMilestones = careerPlan.map((item, index) => ({
  id: `career-${String(index + 1).padStart(2, "0")}`,
  label: item.label,
  action: item.action,
  date: item.date,
  phase: item.phase,
  status: item.status,
  certainty: "本人計画" as const,
  priority: "高" as const,
  sourceIds: ["personal-integrated-plan"],
}));

export const careerCandidateOrganizations = organizations.filter((organization) =>
  organization.categoryFit.includes("キャリア"),
);

export const careerDecisionPolicy = {
  target:
    "D2の2028年4月に応募・面接を始め、2029年3月までに承諾と進路確定を終える。",
  safeguard:
    "D3は新規応募・選考・企業研究インターンを行わず、博士論文と学位審査に集中する。",
  status: "予定" as const,
  certainty: "本人計画" as const,
  sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
};
