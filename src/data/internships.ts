import {
  eightWeekPlan,
  internshipContractGroups,
  internshipFundingNotes,
  internshipGo,
  internshipOutputModels,
  internshipPrep,
  internshipProcedures,
  internshipReadiness,
  internshipReject,
  internshipRisks,
  internshipRules,
  internshipScoreRows,
  internshipStrategyOptions,
  internshipThemes,
  internshipThreeYearRules,
  internshipWindows,
  nttInternshipThemes,
  shortInternshipCandidates,
  toyotaEcosystem,
} from "../data";
import { organizations } from "./organizations";
import { externalResearchProjects } from "./research";

export const internshipProgram = {
  id: "two-summer-enterprise-research",
  title: "D1・D2の論文型企業研究",
  status: "予定" as const,
  certainty: "本人計画" as const,
  windows: internshipWindows,
  strategyOptions: internshipStrategyOptions,
  threeYearRules: internshipThreeYearRules,
  eightWeekPlan,
  programRules: internshipRules,
  procedures: internshipProcedures,
  themes: internshipThemes,
  outputModels: internshipOutputModels,
  readiness: internshipReadiness,
  contractGroups: internshipContractGroups,
  scoreRows: internshipScoreRows,
  risks: internshipRisks,
  preparation: internshipPrep,
  fundingChecks: internshipFundingNotes,
  goConditions: internshipGo,
  rejectConditions: internshipReject,
  careerConnection:
    "D2の6〜7月インターンを就職先比較へ反映し、主要選考・内定比較・承諾を2029年3月までに終える。",
  d3Policy:
    "D3は新規インターン・応募・選考を行わず、博士論文と学位審査に集中する。",
  sourceIds: [
    "personal-integrated-plan",
    "roadmap-planning-proposal",
    "jaist-doctoral-internship",
    "jaist-minor-internship",
    "job-internship-faq",
  ],
};

export const summerEnterpriseProjects = externalResearchProjects.filter(
  (project) => project.category === "企業インターン",
);

export const longResearchInternshipCandidates = organizations.filter(
  (organization) =>
    organization.categoryFit.includes("企業インターン") &&
    ![
      "toyota-central-rd",
      "aisin",
      "kddi-research",
      "sharp",
      "panasonic-toshiba",
    ].includes(organization.id),
);

export const shortResearchInternshipCandidates = {
  status: "候補" as const,
  certainty: "本人計画" as const,
  candidates: shortInternshipCandidates,
  toyotaEcosystem,
};

export const nttReference = {
  status: "候補" as const,
  certainty: "公式" as const,
  role: "D2の比較候補。6〜8週間・論文化・就職先比較の条件を満たす場合だけ選ぶ",
  themes: nttInternshipThemes,
  sourceIds: [
    "personal-integrated-plan",
    "ntt-summer-recruitment-2026",
    "ntt-summer-themes-2026",
  ],
};
