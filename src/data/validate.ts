import { normalizedDecisionGates, risks } from "./decisions";
import {
  doctoralDecisionPoints,
  doctoralMonthPlans,
  doctoralQuarterPlans,
  doctoralScheduleMeta,
  doctoralYearPlans,
  majorScheduleBlocks,
  monthlyHealthCheck,
  SCHEDULE_CATEGORIES,
  SCHEDULE_PROGRESS_STATUSES,
} from "./doctoralSchedule";
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
  doctoralMonthCount: number;
}

export function validateRoadmapData(): DataValidationReport {
  assertUniqueIds("出典", sources);
  assertUniqueIds("組織", organizations);
  assertUniqueIds("研究", researchSteps);
  assertUniqueIds("外部研究", externalResearchProjects);
  assertUniqueIds("予定", allScheduleEvents);
  assertUniqueIds("判断", normalizedDecisionGates);
  assertUniqueIds("リスク", risks);
  assertUniqueIds("博士課程主要ブロック", majorScheduleBlocks);
  assertUniqueIds("博士課程四半期", doctoralQuarterPlans);
  assertUniqueIds("博士課程判断", doctoralDecisionPoints);

  const doctoralScheduleItems = doctoralMonthPlans.flatMap((month) => [
    ...month.majorItems,
    ...month.deadlines,
  ]);
  assertUniqueIds("博士課程月別予定", doctoralScheduleItems);

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
  assertSourceReferences(
    "博士課程年次計画",
    doctoralYearPlans.map((plan) => ({
      id: `doctoral-year-${plan.year}`,
      sourceIds: plan.sourceIds,
    })),
    sourceIds,
  );
  assertSourceReferences("博士課程主要ブロック", majorScheduleBlocks, sourceIds);
  assertSourceReferences("博士課程月別予定", doctoralScheduleItems, sourceIds);
  assertSourceReferences("博士課程判断", doctoralDecisionPoints, sourceIds);
  assertSourceReferences("博士課程健康基準", [monthlyHealthCheck], sourceIds);

  assertValidStatuses("組織", organizations);
  assertValidStatuses("外部研究", externalResearchProjects);
  assertValidStatuses("予定", allScheduleEvents);
  assertValidStatuses("判断", normalizedDecisionGates);
  assertValidStatuses("リスク", risks);
  assertValidStatuses(
    "博士課程年次計画",
    doctoralYearPlans.map((plan) => ({
      id: `doctoral-year-${plan.year}`,
      status: plan.status,
    })),
  );
  assertValidStatuses(
    "博士課程主要ブロック",
    majorScheduleBlocks.map((block) => ({
      id: block.id,
      status: block.roadmapStatus,
    })),
  );
  assertValidStatuses(
    "博士課程月別予定",
    doctoralScheduleItems.map((item) => ({
      id: item.id,
      status: item.roadmapStatus,
    })),
  );

  const expectedMonths = Array.from({ length: 36 }, (_, index) => {
    const absoluteMonth = 3 + index;
    const year = 2027 + Math.floor(absoluteMonth / 12);
    const month = (absoluteMonth % 12) + 1;
    return `${year}-${String(month).padStart(2, "0")}`;
  });
  const actualMonths = doctoralMonthPlans.map((month) => month.month);
  if (
    actualMonths.length !== doctoralScheduleMeta.monthCount ||
    actualMonths.some((month, index) => month !== expectedMonths[index])
  ) {
    throw new Error(
      `博士課程月別予定は2027-04〜2030-03の連続36か月である必要があります: ${actualMonths.join(", ")}`,
    );
  }
  if (doctoralQuarterPlans.length !== 12) {
    throw new Error(
      `博士課程四半期計画は12件である必要があります: ${doctoralQuarterPlans.length}`,
    );
  }
  for (const yearPlan of doctoralYearPlans) {
    const monthsInYear = doctoralMonthPlans.filter(
      (month) => month.year === yearPlan.year,
    );
    const quartersInYear = doctoralQuarterPlans.filter(
      (quarter) => quarter.year === yearPlan.year,
    );
    if (
      monthsInYear.length !== 12 ||
      monthsInYear[0]?.month !== yearPlan.startMonth ||
      monthsInYear.at(-1)?.month !== yearPlan.endMonth
    ) {
      throw new Error(
        `${yearPlan.year} は ${yearPlan.startMonth}〜${yearPlan.endMonth} の12か月である必要があります`,
      );
    }
    if (quartersInYear.length !== 4) {
      throw new Error(
        `${yearPlan.year} の四半期計画は4件である必要があります: ${quartersInYear.length}`,
      );
    }
  }
  if (doctoralDecisionPoints.length !== 7) {
    throw new Error(
      `博士課程判断ポイントは7件である必要があります: ${doctoralDecisionPoints.length}`,
    );
  }

  const blockIds = new Set(majorScheduleBlocks.map((block) => block.id));
  const scheduleCategories = new Set<string>(SCHEDULE_CATEGORIES);
  const scheduleProgressStatuses = new Set<string>(
    SCHEDULE_PROGRESS_STATUSES,
  );
  for (const block of majorScheduleBlocks) {
    if (!scheduleCategories.has(block.category)) {
      throw new Error(
        `博士課程主要ブロック ${block.id} のカテゴリが不正です: ${block.category}`,
      );
    }
    if (!scheduleProgressStatuses.has(block.progress)) {
      throw new Error(
        `博士課程主要ブロック ${block.id} の進捗状態が不正です: ${block.progress}`,
      );
    }
    if (block.startMonth > block.endMonth) {
      throw new Error(
        `博士課程主要ブロック ${block.id} の開始月が終了月より後です`,
      );
    }
  }
  for (const item of doctoralScheduleItems) {
    if (!scheduleCategories.has(item.category)) {
      throw new Error(
        `博士課程月別予定 ${item.id} のカテゴリが不正です: ${item.category}`,
      );
    }
    if (!scheduleProgressStatuses.has(item.progress)) {
      throw new Error(
        `博士課程月別予定 ${item.id} の進捗状態が不正です: ${item.progress}`,
      );
    }
  }
  for (const month of doctoralMonthPlans) {
    for (const blockId of month.blockIds) {
      if (!blockIds.has(blockId)) {
        throw new Error(
          `博士課程月別予定 ${month.month} が存在しない主要ブロックを参照しています: ${blockId}`,
        );
      }
    }
  }

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
    doctoralMonthCount: doctoralMonthPlans.length,
  };
}
