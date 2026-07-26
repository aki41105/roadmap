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
  ([item, estimate], index) => {
    const isOverseasStayTotal =
      item.includes("海外") && item.includes("総費用");

    return {
      id: `one-time-cost-${String(index + 1).padStart(2, "0")}`,
      item: isOverseasStayTotal ? "海外研究留学6か月の総費用（助成前）" : item,
      estimate: isOverseasStayTotal
        ? "受入国・都市・為替・二重家賃の確定後に要再試算"
        : estimate,
      status: "推定",
      certainty: "推定",
      sourceIds: ["roadmap-cost-estimates"],
    };
  },
);

export const overseasCostEstimates: CostEstimate[] = overseasCosts.map(
  ([item], index) => ({
    id: `overseas-cost-${String(index + 1).padStart(2, "0")}`,
    item,
    estimate: "6か月分を受入先決定後に要再試算",
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

export const overseasPrimaryFundingRoutes: FundingRoute[] = [
  {
    id: "overseas-primary-jaist-grant",
    label: "第一候補",
    title: "JAIST研究留学助成",
    body:
      "現行要項では派遣期間が3か月以上1年以内のため、6か月計画は期間条件の範囲内です。ただし採択、対象経費、併給条件は2028年度要項で確認します。",
    action:
      "指導教員と相談し、2028年度の申請締切、月額、渡航費、他の給付型助成との併給可否を学生・留学生支援課へ確認する。",
    eligibility: "石川キャンパスの博士後期課程学生・在学中1回。実施年度に要確認",
    caveat: "期間条件を満たしても採択や全額支援が保証されるわけではありません。",
    status: "要確認",
    certainty: "公式",
    sourceIds: ["jaist-research-stay-rules", "jaist-research-grants"],
  },
  {
    id: "overseas-primary-jasso-agreement",
    label: "第二候補",
    title: "JASSO海外留学支援制度（協定派遣）",
    body:
      "協定等に基づく8日以上1年以内の派遣が対象となり得る制度です。JAISTの対象協定、学内推薦枠、派遣計画、採用年度の資格を満たすか確認します。",
    action:
      "受入先を絞る前に、JAISTが対象プログラムを実施するか、個人の6か月研究留学が学内推薦の対象になるかを国際交流窓口へ確認する。",
    eligibility: "大学経由の協定派遣・学内推薦。個人応募として利用できるとは限らない",
    caveat: "制度期間に入ることと、JAISTから申請できることは別です。",
    status: "要確認",
    certainty: "公式",
    sourceIds: ["jasso-agreement-dispatch", "jaist-study-abroad"],
  },
  {
    id: "overseas-primary-host-support",
    label: "第三候補",
    title: "受入先の給与・フェローシップ・住居支援",
    body:
      "受入大学や研究室の給与、滞在費、住居、学費免除、渡航支援があれば、6か月分の自己負担を減らせます。",
    action:
      "受入交渉時に、支援額、支給期間、税・ビザへの影響、JAIST・JASSO等との併給可否を書面で確認する。",
    eligibility: "受入先・研究室・国・身分ごとに異なる",
    caveat: "募集がない場合もあるため、確定前は収入として予算へ入れません。",
    status: "候補",
    certainty: "本人計画",
    sourceIds: ["personal-integrated-plan"],
  },
];

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
    const isClosedProgram = route.label === "旧制度";
    const isPostdoctoralProgram = route.title.includes("海外特別研究員");

    return {
      id: `jsps-route-${String(index + 1).padStart(2, "0")}`,
      label: route.label,
      title: route.title,
      body: route.body,
      action: route.action,
      eligibility: route.status,
      status: isClosedProgram ? "中止" : "候補",
      certainty: "公式",
      sourceIds: sourceId ? [sourceId] : ["personal-integrated-plan"],
      caveat: isClosedProgram
        ? "若手研究者海外挑戦プログラムは募集終了済みで、2028年の資金候補には含めません。"
        : isPostdoctoralProgram
          ? "海外特別研究員は博士修了後2年間の制度であり、D2の6か月留学資金ではありません。"
          : "D2の6か月留学に利用できるか、採用年度の資格・手続・経費重複条件を最新要項で確認する。",
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
