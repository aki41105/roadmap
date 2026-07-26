import type { CSSProperties } from "react";
import {
  doctoralYearPlans,
  majorScheduleBlocks,
  type DoctoralScheduleCategory,
  type DoctoralYear,
  type MajorScheduleBlock,
} from "../../data/doctoralSchedule";

const YEARS: readonly DoctoralYear[] = ["D1", "D2", "D3"];
const MONTHS = [
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
] as const;

const PRIMARY_BLOCK_IDS = [
  "d1-corporate-internship",
  "d1-domestic-research-stay",
  "d2-corporate-internship",
  "d2-overseas-research-stay",
  "d3-thesis-and-career",
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
  conditions?: readonly string[];
  isCompletion?: boolean;
}

const PRESENTATION: Record<PrimaryBlockId, TimelinePresentation> = {
  "d1-corporate-internship": {
    title: "企業研究インターン",
    date: "2027.07–08",
    deliverables: ["主結果", "再現可能なコード", "論文図表"],
  },
  "d1-domestic-research-stay": {
    title: "国内滞在研究",
    date: "2028.01–02",
    deliverables: ["分析コードブック", "主要事例または実験結果", "論文図表"],
  },
  "d2-corporate-internship": {
    title: "企業研究インターン",
    date: "2028.06–07",
    deliverables: ["研究の主結果", "再現可能なコード", "投稿可能な原稿"],
  },
  "d2-overseas-research-stay": {
    title: "海外研究留学",
    date: "2028.09–2029.02",
    deliverables: ["博士論文の一章", "投稿原稿1本", "共同研究の継続計画"],
  },
  "d3-thesis-and-career": {
    title: "博士論文・就職",
    date: "2029.04–09",
    deliverables: ["各章初稿", "主要結果・図表", "博士論文の全体初稿"],
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

const CATEGORY_TONE: Partial<Record<DoctoralScheduleCategory, string>> = {
  企業インターン: "internship",
  国内滞在研究: "domestic",
  海外研究留学: "overseas",
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

function monthOffset(month: string, yearStart: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  const [startYear, startMonth] = yearStart.split("-").map(Number);

  return (year - startYear) * 12 + monthNumber - startMonth;
}

function eventStyle(
  block: MajorScheduleBlock,
  yearStart: string,
  lane: number,
): TimelineStyle {
  const start = monthOffset(block.startMonth, yearStart) + 1;
  const end = monthOffset(block.endMonth, yearStart) + 2;
  const labelSpan = Math.max(3, end - start);
  const labelEnd = Math.min(13, start + labelSpan);
  const labelStart = Math.max(1, labelEnd - labelSpan);

  return {
    "--timeline-start": Math.max(1, Math.min(12, start)),
    "--timeline-end": Math.max(2, Math.min(13, end)),
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
  yearStart,
  lane,
}: {
  block: MajorScheduleBlock;
  yearStart: string;
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
      style={eventStyle(block, yearStart, lane)}
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
          {presentation.conditions ? (
            <>
              <div>
                <strong>実施条件</strong>
                <ul>
                  {presentation.conditions.map((condition) => (
                    <li key={condition}>{condition}</li>
                  ))}
                </ul>
              </div>
              <p>
                <strong>条件未達の場合</strong>
                <span>{block.fallback}</span>
              </p>
            </>
          ) : null}
        </div>
      </details>
    </li>
  );
}

export function SimpleDoctoralTimeline() {
  const primaryBlocks = majorScheduleBlocks.filter((block) =>
    PRIMARY_BLOCK_IDS.includes(block.id as PrimaryBlockId),
  );

  return (
    <section
      id="timeline"
      className="rm-section rm-simple-timeline"
      aria-labelledby="simple-doctoral-timeline-title"
    >
      <header className="rm-section__header">
        <h2 id="simple-doctoral-timeline-title">
          博士3年間の主要タイムライン
        </h2>
        <div className="rm-section__intro">
          <p>項目を押すと、目的と成果だけが開きます。</p>
        </div>
      </header>

      <div className="rm-simple-timeline-years">
        {YEARS.map((year) => {
          const yearPlan = doctoralYearPlans.find(
            (plan) => plan.year === year,
          );
          const blocks = primaryBlocks.filter((block) => block.year === year);

          if (!yearPlan) return null;

          return (
            <section
              className="rm-simple-timeline-year"
              aria-labelledby={`simple-timeline-${year.toLowerCase()}`}
              key={year}
            >
              <header className="rm-simple-timeline-year__header">
                <h3 id={`simple-timeline-${year.toLowerCase()}`}>{year}</h3>
                <p>
                  <time dateTime={yearPlan.startMonth}>
                    {yearPlan.startMonth.replace("-", ".")}
                  </time>
                  <span aria-hidden="true"> — </span>
                  <time dateTime={yearPlan.endMonth}>
                    {yearPlan.endMonth.replace("-", ".")}
                  </time>
                </p>
              </header>

              <div className="rm-simple-timeline-chart">
                <div
                  className="rm-simple-timeline-months"
                  aria-hidden="true"
                >
                  {MONTHS.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
                <ol
                  className="rm-simple-timeline-events"
                  aria-label={`${year}の主要予定`}
                >
                  {blocks.map((block, index) => (
                    <TimelineEvent
                      block={block}
                      yearStart={yearPlan.startMonth}
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
