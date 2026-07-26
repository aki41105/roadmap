import {
  budgets,
  domesticFunding,
  internshipFundingNotes,
  jaistOverseasGrant,
  jspsRoutes,
  oneTimeCosts,
  overseasCosts,
  supportPrograms,
} from "../data";
import { sourceIdForUrl } from "./sources";
import type {
  BudgetScenario,
  CostEstimate,
  FundingRoute,
  RoadmapStatus,
} from "./types";

export const budgetScenarios: BudgetScenario[] = budgets.map(
  (budget, index) => ({
    id: `budget-${String(index + 1).padStart(2, "0")}`,
    name: budget.name,
    monthly: budget.monthly,
    annual: budget.annual,
    description: budget.description,
    status: "推定",
    certainty: "推定",
    sourceIds: ["roadmap-cost-estimates"],
  }),
);

export const oneTimeCostEstimates: CostEstimate[] = oneTimeCosts.map(
  ([item, estimate], index) => ({
    id: `one-time-cost-${String(index + 1).padStart(2, "0")}`,
    item,
    estimate,
    status: "推定",
    certainty: "推定",
    sourceIds: ["roadmap-cost-estimates"],
  }),
);

export const overseasCostEstimates: CostEstimate[] = overseasCosts.map(
  ([item, estimate], index) => ({
    id: `overseas-cost-${String(index + 1).padStart(2, "0")}`,
    item,
    estimate,
    status: "推定",
    certainty: "推定",
    sourceIds: ["roadmap-cost-estimates"],
  }),
);

export const domesticStayFunding = {
  id: "domestic-stay-funding",
  title: domesticFunding.title,
  body: domesticFunding.body,
  action: domesticFunding.action,
  estimate: domesticFunding.budget,
  status: "要確認" as const,
  certainty: "本人計画" as const,
  sourceIds: [
    "personal-integrated-plan",
    "roadmap-cost-estimates",
    "jaist-research-stay-rules",
  ],
};

export const overseasStayFunding = {
  id: "jaist-overseas-research-grant",
  label: jaistOverseasGrant.label,
  title: jaistOverseasGrant.title,
  body: jaistOverseasGrant.body,
  action: jaistOverseasGrant.action,
  status: "要確認" as const,
  certainty: "公式" as const,
  sourceIds: ["jaist-research-stay-rules", "jaist-research-grants"],
};

function supportStatus(label: string): RoadmapStatus {
  return label.startsWith("公式") ? "要確認" : "候補";
}

export const universityAndExternalFunding: FundingRoute[] = supportPrograms.map(
  (program, index) => {
    const sourceId = sourceIdForUrl(program.href);

    return {
      id: `support-${String(index + 1).padStart(2, "0")}`,
      label: program.label,
      title: program.title,
      body: program.body,
      action: program.action,
      status: supportStatus(program.label),
      certainty: program.label.startsWith("公式") ? "公式" : "本人計画",
      sourceIds: sourceId ? [sourceId] : ["personal-integrated-plan"],
    };
  },
);

export const jspsFundingRoutes: FundingRoute[] = jspsRoutes.map(
  (route, index) => {
    const sourceId = sourceIdForUrl(route.href);

    return {
      id: `jsps-route-${String(index + 1).padStart(2, "0")}`,
      label: route.label,
      title: route.title,
      body: route.body,
      action: route.action,
      eligibility: route.status,
      status: route.label === "旧制度" ? "中止" : "候補",
      certainty: "公式",
      sourceIds: sourceId ? [sourceId] : ["personal-integrated-plan"],
      caveat:
        "D2の3か月留学に利用できるか、採用年度の資格・手続・経費重複条件を最新要項で確認する。",
    };
  },
);

const internshipFundingSourceIds: Record<string, string[]> = {
  "JSPS DC": ["jsps-dc-guide", "jsps-research-grant"],
  "JAIST SPRING": ["jaist-spring", "jst-spring"],
  "雇用・税": ["personal-integrated-plan"],
};

export const internshipFundingChecks = internshipFundingNotes.map(
  (note, index) => ({
    id: `internship-funding-${String(index + 1).padStart(2, "0")}`,
    label: note.label,
    title: note.title,
    body: note.text,
    status: "要確認" as const,
    certainty: note.label === "雇用・税" ? ("本人計画" as const) : ("公式" as const),
    sourceIds:
      internshipFundingSourceIds[note.label] ?? ["personal-integrated-plan"],
  }),
);

export const moneyRules = [
  "引っ越し・車・海外留学を同じ半年に重ねない",
  "授業料納付月を含む資金繰り表を作る",
  "生活防衛資金6か月を残す",
  "助成確定前に返金不能な契約をしない",
  "インターン収入は留学・引っ越し・予備費へ",
] as const;

export const fundingPriority = {
  summary:
    "DC1申請済みならJSPS DC1。未申請・不採用ならJAIST SPRING、申請可能であればDC2、次にUA・TA・RA、有給研究インターン。",
  caveat:
    "併給や有償業務の扱いは採用年度の手引きと大学窓口で確認する。",
  status: "要確認" as const,
  sourceIds: [
    "personal-integrated-plan",
    "jsps-dc-guide",
    "jaist-spring",
    "jst-spring",
  ],
};
