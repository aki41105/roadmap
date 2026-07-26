import { careerSteps } from "../data";
import { organizations } from "./organizations";
import type { DateSpan, Phase, RoadmapStatus } from "./types";

type CareerNormalization = {
  date: DateSpan;
  phase: Phase;
  status: RoadmapStatus;
};

const careerNormalization: CareerNormalization[] = [
  {
    date: {
      start: "2027-04",
      end: "2027-09",
      precision: "月",
      display: careerSteps[0][0],
    },
    phase: "D1",
    status: "予定",
  },
  {
    date: {
      start: "2027-10",
      end: "2028-03",
      precision: "月",
      display: careerSteps[1][0],
    },
    phase: "D1",
    status: "予定",
  },
  {
    date: {
      start: "2028-04",
      end: "2028-06",
      precision: "月",
      display: careerSteps[2][0],
    },
    phase: "D2",
    status: "予定",
  },
  {
    date: {
      start: "2028-06",
      end: "2028-10",
      precision: "月",
      display: careerSteps[3][0],
    },
    phase: "D2",
    status: "予定",
  },
  {
    date: {
      start: "2028-11",
      end: "2029-06",
      precision: "月",
      display: careerSteps[4][0],
    },
    phase: "D2",
    status: "予定",
  },
  {
    date: {
      start: "2029-04",
      end: "2029-06",
      precision: "月",
      display: careerSteps[5][0],
    },
    phase: "D3",
    status: "予定",
  },
];

export const careerMilestones = careerSteps.map(([label, action], index) => ({
  id: `career-${String(index + 1).padStart(2, "0")}`,
  label,
  action,
  date: careerNormalization[index].date,
  phase: careerNormalization[index].phase,
  status: careerNormalization[index].status,
  certainty: "本人計画" as const,
  priority: "高" as const,
  sourceIds: ["personal-integrated-plan"],
}));

export const careerCandidateOrganizations = organizations.filter((organization) =>
  organization.categoryFit.includes("キャリア"),
);

export const careerDecisionPolicy = {
  target:
    "主要な就職先の比較と選考は早めに始め、2029年6月までの仮決定を目標にする。",
  safeguard:
    "企業研究インターンはD1・D2で終え、D3は博士論文と就職先の決定に集中する。",
  status: "予定" as const,
  certainty: "本人計画" as const,
  sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
};
