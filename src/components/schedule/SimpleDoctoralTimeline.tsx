import type { CSSProperties } from "react";
import {
  majorScheduleBlocks,
  type DoctoralScheduleCategory,
  type MajorScheduleBlock,
} from "../../data/doctoralSchedule";

const PRIMARY_BLOCK_IDS = [
  "d1-domestic-research-stay",
  "d1-corporate-internship",
  "d1-overseas-research-stay",
  "d2-corporate-internship",
  "d2-career-completion",
  "d3-thesis-completion",
  "d3-thesis-outline",
  "d3-preliminary-review",
  "d3-final-examination",
  "d3-completion-transition",
] as const;

type PrimaryBlockId = (typeof PRIMARY_BLOCK_IDS)[number];

interface TimelinePresentation {
  title: string;
  date: string;
  deliverables: readonly string[];
  isCompletion?: boolean;
}

const PRESENTATION: Record<PrimaryBlockId, TimelinePresentation> = {
  "d1-domestic-research-stay": {
    title: "国内滞在研究",
    date: "2027.02–04",
    deliverables: ["分析コードブック", "主要事例または実験結果", "論文図表"],
  },
  "d1-corporate-internship": {
    title: "企業研究インターン",
    date: "2027.07–08",
    deliverables: ["主結果", "再現可能なコード", "論文図表"],
  },
  "d1-overseas-research-stay": {
    title: "海外研究留学",
    date: "2027.10–2028.03",
    deliverables: ["博士論文の一章", "投稿原稿1本", "共同研究の継続計画"],
  },
  "d2-corporate-internship": {
    title: "企業研究インターン",
    date: "2028.06–07",
    deliverables: ["研究の主結果", "再現可能なコード", "投稿可能な原稿"],
  },
  "d2-career-completion": {
    title: "就職活動・進路確定",
    date: "2028.04–2029.03",
    deliverables: ["応募・選考の記録", "条件比較", "内定・受入オファーの承諾"],
  },
  "d3-thesis-completion": {
    title: "博士論文完成",
    date: "2029.04–09",
    deliverables: ["各章初稿", "主要結果・図表", "審査用の博士論文完全版"],
  },
  "d3-thesis-outline": {
    title: "博士論文骨子",
    date: "2029.07",
    deliverables: ["博士論文骨子", "全体構成の確認", "審査準備"],
  },
  "d3-preliminary-review": {
    title: "予備審査",
    date: "2029.10–12",
    deliverables: ["博士論文完全版", "予備審査", "指摘事項の修正計画"],
  },
  "d3-final-examination": {
    title: "論文提出・最終試験",
    date: "2030.01–02",
    deliverables: ["博士論文", "公聴会スライド", "本審査・最終試験"],
  },
  "d3-completion-transition": {
    title: "博士修了",
    date: "2030.03",
    deliverables: ["学位授与", "研究データ・コードの引き継ぎ", "休養期間"],
    isCompletion: true,
  },
};

interface TimelineSection {
  id: string;
  label: string;
  startMonth: string;
  endMonth: string;
  blockIds: readonly PrimaryBlockId[];
}

const TIMELINE_SECTIONS: readonly TimelineSection[] = [
  {
    id: "m2-to-d1",
    label: "M2末→D1",
    startMonth: "2027-02",
    endMonth: "2027-04",
    blockIds: ["d1-domestic-research-stay"],
  },
  {
    id: "d1",
    label: "D1",
    startMonth: "2027-04",
    endMonth: "2028-03",
    blockIds: ["d1-corporate-internship", "d1-overseas-research-stay"],
  },
  {
    id: "d2",
    label: "D2",
    startMonth: "2028-04",
    endMonth: "2029-03",
    blockIds: ["d2-career-completion", "d2-corporate-internship"],
  },
  {
    id: "d3",
    label: "D3",
    startMonth: "2029-04",
    endMonth: "2030-03",
    blockIds: [
      "d3-thesis-completion",
      "d3-thesis-outline",
      "d3-preliminary-review",
      "d3-final-examination",
      "d3-completion-transition",
    ],
  },
];

const CATEGORY_TONE: Partial<Record<DoctoralScheduleCategory, string>> = {
  企業インターン: "internship",
  国内滞在研究: "domestic",
  海外研究留学: "overseas",
  就職活動: "career",
  "学位・JAIST手続き": "degree",
  "住居・引っ越し": "completion",
};

type TimelineStyle = CSSProperties & {
  "--timeline-start": number;
  "--timeline-end": number;
  "--timeline-label-start": number;
  "--timeline-label-end": number;
  "--timeline-lane": number;
};

type TimelineChartStyle = CSSProperties & {
  "--timeline-columns": number;
};

function monthOffset(month: string, timelineStart: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  const [startYear, startMonth] = timelineStart.split("-").map(Number);

  return (year - startYear) * 12 + monthNumber - startMonth;
}

function inclusiveMonthCount(startMonth: string, endMonth: string) {
  return monthOffset(endMonth, startMonth) + 1;
}

function monthLabels(startMonth: string, count: number) {
  const [startYear, startMonthNumber] = startMonth.split("-").map(Number);

  return Array.from({ length: count }, (_, index) => {
    const absoluteMonth = startMonthNumber - 1 + index;
    const year = startYear + Math.floor(absoluteMonth / 12);
    const month = (absoluteMonth % 12) + 1;

    return {
      key: `${year}-${String(month).padStart(2, "0")}`,
      label: `${month}月`,
    };
  });
}

function eventStyle(
  block: MajorScheduleBlock,
  timelineStart: string,
  columnCount: number,
  lane: number,
): TimelineStyle {
  const trackEnd = columnCount + 1;
  const start = monthOffset(block.startMonth, timelineStart) + 1;
  const end = monthOffset(block.endMonth, timelineStart) + 2;
  const labelSpan = Math.max(Math.min(3, columnCount), end - start);
  const labelEnd = Math.min(trackEnd, start + labelSpan);
  const labelStart = Math.max(1, labelEnd - labelSpan);

  return {
    "--timeline-start": Math.max(1, Math.min(columnCount, start)),
    "--timeline-end": Math.max(2, Math.min(trackEnd, end)),
    "--timeline-label-start": labelStart,
    "--timeline-label-end": labelEnd,
    "--timeline-lane": lane,
  };
}

function categoryTone(block: MajorScheduleBlock) {
  return CATEGORY_TONE[block.category] ?? "degree";
}

function TimelineEvent({
  block,
  timelineStart,
  columnCount,
  lane,
}: {
  block: MajorScheduleBlock;
  timelineStart: string;
  columnCount: number;
  lane: number;
}) {
  const presentation = PRESENTATION[block.id as PrimaryBlockId];
  const tone = categoryTone(block);

  return (
    <li
      className={`rm-simple-timeline-event rm-simple-timeline-event--${tone}${
        presentation.isCompletion
          ? " rm-simple-timeline-event--completion-marker"
          : ""
      }`}
      style={eventStyle(block, timelineStart, columnCount, lane)}
    >
      <details>
        <summary>
          <time dateTime={block.startMonth}>{presentation.date}</time>
          <span className="rm-simple-timeline-event__title">
            {presentation.title}
          </span>
        </summary>
        <span className="rm-simple-timeline-event__range" aria-hidden="true" />
        <div className="rm-simple-timeline-event__detail">
          <p>
            <strong>目的</strong>
            <span>{block.objective}</span>
          </p>
          <p>
            <strong>期間</strong>
            <span>{block.duration}</span>
          </p>
          <div>
            <strong>主な成果物</strong>
            <ul>
              {presentation.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </li>
  );
}

export function SimpleDoctoralTimeline() {
  const primaryBlocks = new Map(
    majorScheduleBlocks
      .filter((block) =>
        PRIMARY_BLOCK_IDS.includes(block.id as PrimaryBlockId),
      )
      .map((block) => [block.id as PrimaryBlockId, block]),
  );

  return (
    <section
      id="timeline"
      className="rm-section rm-simple-timeline"
      aria-labelledby="simple-doctoral-timeline-title"
    >
      <header className="rm-section__header">
        <h2 id="simple-doctoral-timeline-title">
          M2末から博士修了までの主要タイムライン
        </h2>
        <div className="rm-section__intro">
          <p>期間だけを一覧表示しています。項目を押すと目的と成果が開きます。</p>
        </div>
      </header>

      <div className="rm-simple-timeline-years">
        {TIMELINE_SECTIONS.map((section) => {
          const columnCount = inclusiveMonthCount(
            section.startMonth,
            section.endMonth,
          );
          const months = monthLabels(section.startMonth, columnCount);
          const blocks = section.blockIds
            .map((blockId) => primaryBlocks.get(blockId))
            .filter((block): block is MajorScheduleBlock => Boolean(block));
          const sectionTitleId = `simple-timeline-${section.id}`;
          const chartStyle: TimelineChartStyle = {
            "--timeline-columns": columnCount,
          };

          return (
            <section
              className="rm-simple-timeline-year"
              aria-labelledby={sectionTitleId}
              key={section.id}
            >
              <header className="rm-simple-timeline-year__header">
                <h3 id={sectionTitleId}>{section.label}</h3>
                <p>
                  <time dateTime={section.startMonth}>
                    {section.startMonth.replace("-", ".")}
                  </time>
                  <span aria-hidden="true"> — </span>
                  <time dateTime={section.endMonth}>
                    {section.endMonth.replace("-", ".")}
                  </time>
                </p>
              </header>

              <div
                className="rm-simple-timeline-chart"
                style={chartStyle}
              >
                <div
                  className="rm-simple-timeline-months"
                  aria-hidden="true"
                >
                  {months.map((month) => (
                    <span key={month.key}>{month.label}</span>
                  ))}
                </div>
                <ol
                  className="rm-simple-timeline-events"
                  aria-label={`${section.label}の主要予定`}
                >
                  {blocks.map((block, index) => (
                    <TimelineEvent
                      block={block}
                      timelineStart={section.startMonth}
                      columnCount={columnCount}
                      lane={index + 1}
                      key={block.id}
                    />
                  ))}
                </ol>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
