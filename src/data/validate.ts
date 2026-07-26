import { normalizedDecisionGates, risks } from "./decisions";
import { allScheduleEvents } from "./events";
import { organizations } from "./organizations";
import { externalResearchProjects, researchSteps } from "./research";
import { sources } from "./sources";
import { ROADMAP_STATUSES, type RoadmapStatus } from "./types";

type Identified = { id: string };
type Sourced = { id: string; sourceIds?: readonly string[] };

function assertUniqueIds(label: string, records: readonly Identified[]) {
  const seen = new Set<string>();
  for (const record of records) {
    if (seen.has(record.id)) {
      throw new Error(`${label} に重複IDがあります: ${record.id}`);
    }
    seen.add(record.id);
  }
}

function assertValidStatuses(
  label: string,
  records: readonly (Identified & { status: RoadmapStatus })[],
) {
  const allowed = new Set<string>(ROADMAP_STATUSES);
  for (const record of records) {
    if (!allowed.has(record.status)) {
      throw new Error(
        `${label} ${record.id} の状態が不正です: ${record.status}`,
      );
    }
  }
}

function assertSourceReferences(
  label: string,
  records: readonly Sourced[],
  knownSourceIds: ReadonlySet<string>,
) {
  for (const record of records) {
    for (const sourceId of record.sourceIds ?? []) {
      if (!knownSourceIds.has(sourceId)) {
        throw new Error(
          `${label} ${record.id} が存在しない出典を参照しています: ${sourceId}`,
        );
      }
    }
  }
}

export interface DataValidationReport {
  sourceCount: number;
  organizationCount: number;
  eventCount: number;
  decisionCount: number;
  riskCount: number;
}

export function validateRoadmapData(): DataValidationReport {
  assertUniqueIds("出典", sources);
  assertUniqueIds("組織", organizations);
  assertUniqueIds("研究", researchSteps);
  assertUniqueIds("外部研究", externalResearchProjects);
  assertUniqueIds("予定", allScheduleEvents);
  assertUniqueIds("判断", normalizedDecisionGates);
  assertUniqueIds("リスク", risks);

  const sourceUrls = new Set<string>();
  for (const source of sources) {
    if (!source.url) continue;
    if (sourceUrls.has(source.url)) {
      throw new Error(`出典URLが重複しています: ${source.url}`);
    }
    sourceUrls.add(source.url);
  }

  const sourceIds = new Set(sources.map((source) => source.id));
  assertSourceReferences("組織", organizations, sourceIds);
  assertSourceReferences("研究", researchSteps, sourceIds);
  assertSourceReferences("外部研究", externalResearchProjects, sourceIds);
  assertSourceReferences("予定", allScheduleEvents, sourceIds);
  assertSourceReferences("判断", normalizedDecisionGates, sourceIds);
  assertSourceReferences("リスク", risks, sourceIds);

  assertValidStatuses("組織", organizations);
  assertValidStatuses("外部研究", externalResearchProjects);
  assertValidStatuses("予定", allScheduleEvents);
  assertValidStatuses("判断", normalizedDecisionGates);
  assertValidStatuses("リスク", risks);

  for (const event of allScheduleEvents) {
    if (event.date.end && event.date.start > event.date.end) {
      throw new Error(
        `予定 ${event.id} の開始日が終了日より後です: ${event.date.start} > ${event.date.end}`,
      );
    }
  }

  return {
    sourceCount: sources.length,
    organizationCount: organizations.length,
    eventCount: allScheduleEvents.length,
    decisionCount: normalizedDecisionGates.length,
    riskCount: risks.length,
  };
}
