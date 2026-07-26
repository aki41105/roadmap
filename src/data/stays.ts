import {
  domesticAdjust,
  domesticDirections,
  domesticFunding,
  domesticGo,
  domesticReadiness,
  domesticRoadmap,
  domesticSixWeekPlan,
  jaistOverseasGrant,
  jspsRoutes,
  overseasChecks,
  overseasCompanyCandidates,
  overseasCosts,
  overseasDelay,
  overseasExecution,
  overseasExploration,
  overseasGo,
  overseasRoadmap,
  overseasThemes,
} from "../data";
import { organizations } from "./organizations";
import { externalResearchProjects } from "./research";

export const domesticResearchStay = {
  id: "d1-domestic-research-stay",
  project: externalResearchProjects.find(
    (project) => project.id === "d1-domestic-research-stay",
  ),
  status: "候補" as const,
  certainty: "本人計画" as const,
  directions: domesticDirections,
  roadmap: domesticRoadmap,
  readiness: domesticReadiness,
  sixWeekPlan: domesticSixWeekPlan,
  goConditions: domesticGo,
  adjustConditions: domesticAdjust,
  funding: domesticFunding,
  candidates: organizations.filter((organization) =>
    organization.categoryFit.includes("国内滞在"),
  ),
  sourceIds: [
    "personal-integrated-plan",
    "roadmap-planning-proposal",
    "nii-special-researcher",
    "kyoto-hri",
    "jaist-minor-internship",
    "jaist-research-stay-rules",
  ],
};

export const overseasResearchStay = {
  id: "d2-overseas-university-research",
  project: externalResearchProjects.find(
    (project) => project.id === "d2-overseas-university-research",
  ),
  status: "予定" as const,
  certainty: "本人計画" as const,
  roadmap: overseasRoadmap,
  themes: overseasThemes,
  execution: overseasExecution,
  checks: overseasChecks,
  exploration: overseasExploration,
  companyAlternatives: overseasCompanyCandidates,
  costs: overseasCosts,
  jaistGrant: jaistOverseasGrant,
  jspsRoutes,
  goConditions: overseasGo,
  delayConditions: overseasDelay,
  candidates: organizations.filter(
    (organization) =>
      organization.locationScope === "海外" &&
      organization.categoryFit.includes("海外研究"),
  ),
  sourceIds: [
    "personal-integrated-plan",
    "roadmap-planning-proposal",
    "jaist-research-grants",
    "jaist-research-stay-rules",
    "jsps-dc-guide",
    "jsps-erc-travel",
    "jsps-overseas-fellowship-reservation",
  ],
};

export const researchStays = [domesticResearchStay, overseasResearchStay];
