import { externalProjects, researchArc, scenarioOptions } from "../data";
import { organizationById } from "./organizations";
import type {
  DateSpan,
  EventCategory,
  ExternalResearchProject,
  Phase,
  ResearchStep,
  RoadmapStatus,
  ThesisChapterRelation,
} from "./types";

const phaseByResearchKey: Record<string, Phase[]> = {
  A: ["M2", "D1"],
  B: ["D1", "D2"],
  C: ["D2", "D3"],
};

export const researchSteps: ResearchStep[] = researchArc.map((step, index) => ({
  id: `research-${step.key.toLowerCase()}`,
  order: index + 1,
  key: step.key,
  title: step.title,
  question: step.text,
  thesisRole: step.role,
  phaseFit: phaseByResearchKey[step.key] ?? [],
  sourceIds: ["personal-integrated-plan"],
}));

type ProjectNormalization = {
  id: string;
  date: DateSpan;
  phase: Phase;
  category: EventCategory;
  status: RoadmapStatus;
  relatedResearchIds: string[];
  relatedOrganizationIds: string[];
};

const projectNormalization: ProjectNormalization[] = [
  {
    id: "d1-enterprise-research",
    date: {
      start: "2027-07",
      end: "2027-09",
      precision: "月",
      display: externalProjects[0].time,
    },
    phase: "D1",
    category: "企業インターン",
    status: "予定",
    relatedResearchIds: ["research-a", "research-b"],
    relatedOrganizationIds: ["cyberagent-ai-lab"],
  },
  {
    id: "d1-domestic-research-stay",
    date: {
      start: "2028-01",
      end: "2028-02",
      precision: "月",
      display: externalProjects[1].time,
    },
    phase: "D1",
    category: "国内滞在",
    status: "候補",
    relatedResearchIds: ["research-a", "research-b"],
    relatedOrganizationIds: ["nii-bono-lab", "kyoto-hri-lab"],
  },
  {
    id: "d2-enterprise-research",
    date: {
      start: "2028-06",
      end: "2028-07",
      precision: "月",
      display: externalProjects[2].time,
    },
    phase: "D2",
    category: "企業インターン",
    status: "予定",
    relatedResearchIds: ["research-b", "research-c"],
    relatedOrganizationIds: ["hitachi-rd", "omron-sinic-x", "nec-rd"],
  },
  {
    id: "d2-overseas-university-research",
    date: {
      start: "2028-11",
      end: "2029-01",
      precision: "月",
      display: externalProjects[3].time,
    },
    phase: "D2",
    category: "海外研究",
    status: "予定",
    relatedResearchIds: ["research-a", "research-b", "research-c"],
    relatedOrganizationIds: [
      "waterloo-sirrl",
      "heriot-watt-national-robotarium",
      "ghent-airo",
      "usc-ict",
      "ubc",
    ],
  },
  {
    id: "d3-enterprise-additional-paper",
    date: {
      start: "2029-07",
      end: "2029-08",
      precision: "月",
      display: externalProjects[4].time,
    },
    phase: "D3",
    category: "企業インターン",
    status: "候補",
    relatedResearchIds: ["research-c"],
    relatedOrganizationIds: ["ntt-rd", "omron-sinic-x", "nec-rd"],
  },
];

export const externalResearchProjects: ExternalResearchProject[] =
  externalProjects.map((project, index) => {
    const normalized = projectNormalization[index];
    const organizationSourceIds = normalized.relatedOrganizationIds.flatMap(
      (organizationId) => organizationById[organizationId]?.sourceIds ?? [],
    );

    return {
      id: normalized.id,
      number: project.number,
      title: project.title,
      date: normalized.date,
      phase: normalized.phase,
      category: normalized.category,
      duration: project.duration,
      result: project.result,
      purpose: project.purpose,
      caution: project.caution,
      status: normalized.status,
      certainty: "本人計画",
      priority: index < 4 ? "高" : "中",
      relatedResearchIds: normalized.relatedResearchIds,
      relatedOrganizationIds: normalized.relatedOrganizationIds,
      sourceIds: [
        "personal-integrated-plan",
        ...new Set(organizationSourceIds),
      ],
    };
  });

export const thesisChapterRelations: ThesisChapterRelation[] = [
  {
    id: "chapter-d1-enterprise",
    label: "D1夏",
    target: "CyberAgentを第一候補に、企業成果を2027年12月15日までに投稿",
    thesisRole: "博士論文の中核となる研究1",
    status: "予定",
    sourceIds: ["personal-integrated-plan", "cyberagent-internship-2026"],
  },
  {
    id: "chapter-d1-domestic",
    label: "D1冬",
    target: "国内滞在で理論・方法を補強し、副テーマ候補の原稿を50〜70%まで進める",
    thesisRole: "推定根拠またはロボット適応を補う副テーマ候補",
    status: "候補",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "chapter-d2-enterprise",
    label: "D2夏",
    target: "別企業で博士論文の第二研究を進める",
    thesisRole: "博士論文の中核となる研究2",
    status: "予定",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "chapter-d2-overseas",
    label: "D2冬",
    target: "海外大学で既存成果の外的妥当性を検証する",
    thesisRole: "企業研究とは異なる外部検証",
    status: "予定",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "chapter-d3-enterprise",
    label: "D3夏",
    target: "5月末時点で学位が成立する場合だけ、追加論文として企業研究を行う",
    thesisRole: "学位非依存の追加成果",
    status: "候補",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
];

export const planningScenarios = scenarioOptions.map((scenario) => ({
  ...scenario,
  id: `scenario-${scenario.key.toLowerCase()}`,
  status: scenario.recommended ? ("予定" as const) : ("提案" as const),
  certainty: "提案" as const,
  sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
}));

export const recommendedScenario =
  planningScenarios.find((scenario) => scenario.recommended) ??
  planningScenarios[0];
