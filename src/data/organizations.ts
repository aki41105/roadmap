import {
  domesticCandidates,
  domesticOtherCandidates,
  internshipCandidates,
  overseasCompanyCandidates,
  shortInternshipCandidates,
} from "../data";
import { sourceIdForUrl } from "./sources";
import type {
  EventCategory,
  OrganizationRecord,
  Phase,
  Priority,
} from "./types";

type OrganizationSeed = {
  id: string;
  index: number;
  priority: Priority;
  phaseFit: Phase[];
  categoryFit: EventCategory[];
};

const internshipSeeds: OrganizationSeed[] = [
  {
    id: "cyberagent-ai-lab",
    index: 0,
    priority: "高",
    phaseFit: ["D1"],
    categoryFit: ["企業インターン", "研究"],
  },
  {
    id: "hitachi-rd",
    index: 1,
    priority: "高",
    phaseFit: ["D2"],
    categoryFit: ["企業インターン", "研究", "キャリア"],
  },
  {
    id: "omron-sinic-x",
    index: 2,
    priority: "高",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "研究", "キャリア"],
  },
  {
    id: "nec-rd",
    index: 3,
    priority: "中",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "研究", "キャリア"],
  },
  {
    id: "ntt-rd",
    index: 4,
    priority: "中",
    phaseFit: ["D3"],
    categoryFit: ["企業インターン", "研究", "キャリア"],
  },
  {
    id: "sony-woven-alternative",
    index: 5,
    priority: "低",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "キャリア"],
  },
  {
    id: "ibm-research-tokyo",
    index: 6,
    priority: "低",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "研究", "キャリア"],
  },
];

const enterpriseOrganizations: OrganizationRecord[] = internshipSeeds.map((seed) => {
  const candidate = internshipCandidates[seed.index];
  const sourceId = sourceIdForUrl(candidate.href);

  return {
    id: seed.id,
    name: candidate.name,
    organizationType: "企業研究所",
    locationScope: "国内",
    role: candidate.role,
    fit: candidate.fit,
    facts: candidate.facts,
    caution: candidate.caution,
    status: "候補",
    certainty: "本人計画",
    priority: seed.priority,
    phaseFit: seed.phaseFit,
    categoryFit: seed.categoryFit,
    sourceIds: sourceId
      ? ["personal-integrated-plan", sourceId]
      : ["personal-integrated-plan"],
  };
});

const domesticPrimarySeeds: OrganizationSeed[] = [
  {
    id: "nii-bono-lab",
    index: 0,
    priority: "高",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
  {
    id: "kyoto-hri-lab",
    index: 1,
    priority: "中",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
];

const domesticPrimaryOrganizations: OrganizationRecord[] = domesticPrimarySeeds.map(
  (seed) => {
    const candidate = domesticCandidates[seed.index];
    const sourceId = sourceIdForUrl(candidate.href);

    return {
      id: seed.id,
      name: candidate.name,
      organizationType: "大学・研究機関",
      locationScope: "国内",
      role: candidate.role,
      fit: candidate.fit,
      facts: candidate.facts,
      caution: candidate.caution,
      status: "候補",
      certainty: "本人計画",
      priority: seed.priority,
      phaseFit: seed.phaseFit,
      categoryFit: seed.categoryFit,
      sourceIds: sourceId
        ? ["personal-integrated-plan", sourceId]
        : ["personal-integrated-plan"],
    };
  },
);

const domesticOtherSeeds: OrganizationSeed[] = [
  {
    id: "aist-technical-training",
    index: 0,
    priority: "中",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
  {
    id: "riken-guardian-robot",
    index: 1,
    priority: "低",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
  {
    id: "atr",
    index: 2,
    priority: "低",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
  {
    id: "tsukuba-tanaka-lab",
    index: 3,
    priority: "低",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
  {
    id: "osaka-ishiguro-lab",
    index: 4,
    priority: "低",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
  {
    id: "keio-imai-lab",
    index: 5,
    priority: "低",
    phaseFit: ["D1"],
    categoryFit: ["国内滞在", "研究"],
  },
];

const domesticOtherOrganizations: OrganizationRecord[] = domesticOtherSeeds.map(
  (seed) => {
    const candidate = domesticOtherCandidates[seed.index];
    const sourceId = sourceIdForUrl(candidate.href);

    return {
      id: seed.id,
      name: candidate.name,
      organizationType: "大学・研究機関",
      locationScope: "国内",
      role: candidate.role,
      fit: candidate.focus,
      caution: candidate.caution,
      status: "候補",
      certainty: "本人計画",
      priority: seed.priority,
      phaseFit: seed.phaseFit,
      categoryFit: seed.categoryFit,
      sourceIds: sourceId
        ? ["personal-integrated-plan", sourceId]
        : ["personal-integrated-plan"],
    };
  },
);

const shortEnterpriseSeeds: OrganizationSeed[] = [
  {
    id: "toyota-central-rd",
    index: 0,
    priority: "中",
    phaseFit: ["D1", "D2", "D3"],
    categoryFit: ["企業インターン", "キャリア"],
  },
  {
    id: "aisin",
    index: 1,
    priority: "低",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "キャリア"],
  },
  {
    id: "kddi-research",
    index: 2,
    priority: "低",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "キャリア"],
  },
  {
    id: "sharp",
    index: 3,
    priority: "低",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "キャリア"],
  },
  {
    id: "panasonic-toshiba",
    index: 4,
    priority: "低",
    phaseFit: ["D2", "D3"],
    categoryFit: ["企業インターン", "キャリア"],
  },
];

const shortEnterpriseOrganizations: OrganizationRecord[] = shortEnterpriseSeeds.map(
  (seed) => {
    const candidate = shortInternshipCandidates[seed.index];
    const sourceId = sourceIdForUrl(candidate.href);

    return {
      id: seed.id,
      name: candidate.name,
      organizationType: "企業研究所",
      locationScope: "国内",
      role: `${candidate.role}（${candidate.period}）`,
      facts: candidate.facts,
      caution: candidate.caution,
      status: "候補",
      certainty: "本人計画",
      priority: seed.priority,
      phaseFit: seed.phaseFit,
      categoryFit: seed.categoryFit,
      sourceIds: sourceId
        ? ["personal-integrated-plan", sourceId]
        : ["personal-integrated-plan"],
    };
  },
);

const overseasCompanySeeds: OrganizationSeed[] = [
  {
    id: "merl",
    index: 0,
    priority: "中",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "企業インターン", "研究"],
  },
  {
    id: "honda-research-institute-usa",
    index: 1,
    priority: "中",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "企業インターン", "研究"],
  },
  {
    id: "toyota-research-institute",
    index: 2,
    priority: "低",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "企業インターン", "研究"],
  },
];

const overseasCompanyOrganizations: OrganizationRecord[] = overseasCompanySeeds.map(
  (seed) => {
    const candidate = overseasCompanyCandidates[seed.index];
    const sourceId = sourceIdForUrl(candidate.href);

    return {
      id: seed.id,
      name: candidate.name,
      organizationType: "企業研究所",
      locationScope: "海外",
      role: candidate.role,
      fit: candidate.fit,
      facts: candidate.facts,
      caution: candidate.caution,
      status: "候補",
      certainty: "本人計画",
      priority: seed.priority,
      phaseFit: seed.phaseFit,
      categoryFit: seed.categoryFit,
      sourceIds: sourceId
        ? ["personal-integrated-plan", sourceId]
        : ["personal-integrated-plan"],
    };
  },
);

const overseasAcademicOrganizations: OrganizationRecord[] = [
  {
    id: "waterloo-sirrl",
    name: "University of Waterloo · SIRRL",
    organizationType: "大学・研究機関",
    locationScope: "海外",
    role: "海外大学研究の候補",
    status: "候補",
    certainty: "本人計画",
    priority: "中",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "研究"],
    sourceIds: [
      "personal-integrated-plan",
      "waterloo-visiting-graduate",
      "waterloo-sirrl",
    ],
  },
  {
    id: "heriot-watt-national-robotarium",
    name: "Heriot-Watt University · National Robotarium",
    organizationType: "大学・研究機関",
    locationScope: "海外",
    role: "海外大学研究の候補",
    status: "候補",
    certainty: "本人計画",
    priority: "中",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "研究"],
    sourceIds: ["personal-integrated-plan", "heriot-watt-national-robotarium"],
  },
  {
    id: "ghent-airo",
    name: "Ghent University · AIRO",
    organizationType: "大学・研究機関",
    locationScope: "海外",
    role: "海外大学研究の候補",
    status: "候補",
    certainty: "本人計画",
    priority: "中",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "研究"],
    sourceIds: ["personal-integrated-plan", "ghent-airo"],
  },
  {
    id: "usc-ict",
    name: "USC Institute for Creative Technologies",
    organizationType: "大学・研究機関",
    locationScope: "海外",
    role: "海外大学研究の候補",
    status: "候補",
    certainty: "本人計画",
    priority: "低",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "研究"],
    sourceIds: ["personal-integrated-plan", "usc-ict"],
  },
  {
    id: "ubc",
    name: "University of British Columbia",
    organizationType: "大学・研究機関",
    locationScope: "海外",
    role: "海外大学研究の候補",
    status: "候補",
    certainty: "本人計画",
    priority: "低",
    phaseFit: ["D2"],
    categoryFit: ["海外研究", "研究"],
    sourceIds: ["personal-integrated-plan", "ubc-visiting-research"],
  },
];

export const organizations: OrganizationRecord[] = [
  ...enterpriseOrganizations,
  ...domesticPrimaryOrganizations,
  ...domesticOtherOrganizations,
  ...shortEnterpriseOrganizations,
  ...overseasCompanyOrganizations,
  ...overseasAcademicOrganizations,
];

export const organizationById: Record<string, OrganizationRecord> = Object.fromEntries(
  organizations.map((organization) => [organization.id, organization]),
);
