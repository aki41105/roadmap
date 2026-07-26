import { useMemo, useState } from "react";
import {
  busyPeriods,
  nextTwelveMonths,
  recoveryWindows,
  roadmapItems,
} from "../data";
import {
  allScheduleEvents,
  DATA_AS_OF,
  degreeDeadlineEvents,
  type EventCategory,
  type Phase,
  type RoadmapStatus,
} from "../data/index";
import {
  Badge,
  Card,
  CardGrid,
  Lead,
  Section,
  TupleTable,
  UpdateNotice,
} from "./PageKit";

type GroupBy = "month" | "quarter" | "year" | "category" | "phase";
type PhaseFilter = "all" | "M2" | "D1" | "D2" | "D3";
type CategoryFilter = "all" | EventCategory;
type StatusFilter = "all" | RoadmapStatus;

function yearMonth(value: string) {
  return value.slice(0, 7);
}

function quarter(value: string) {
  const [year, monthText] = value.split("-");
  const month = Number(monthText ?? "1");
  return `${year} Q${Math.floor((month - 1) / 3) + 1}`;
}

function groupLabel(
  event: (typeof allScheduleEvents)[number],
  groupBy: GroupBy,
) {
  if (groupBy === "month") return yearMonth(event.date.start);
  if (groupBy === "quarter") return quarter(event.date.start);
  if (groupBy === "year") return event.date.start.slice(0, 4);
  if (groupBy === "category") return event.category;
  return event.phase;
}

const overlapWarnings = [
  {
    time: "2027年10〜12月",
    title: "D1企業論文と国内滞在準備",
    signal: "12月15日に企業論文が未投稿",
    response: "国内滞在を1〜2週間またはオンラインへ縮小",
  },
  {
    time: "2028年3〜7月",
    title: "国内成果の原稿化とD2企業研究",
    signal: "4月末に国内成果が投稿可能原稿へ届かない",
    response: "5月15日に新規実験を止め、D2企業準備を優先",
  },
  {
    time: "2028年6〜11月",
    title: "D2企業研究と海外留学",
    signal: "企業論文未投稿、または企業終了から海外開始まで8週間未満",
    response: "海外研究を延期・短縮",
  },
  {
    time: "2029年5〜10月",
    title: "D3企業研究と学位工程",
    signal: "5月31日に学位ゲート未達、骨子未提出、8月31日に残務",
    response: "D3企業研究を中止し、博士論文を優先",
  },
] as const;

const phaseOptions: PhaseFilter[] = ["all", "M2", "D1", "D2", "D3"];
const categories = Array.from(
  new Set(allScheduleEvents.map((event) => event.category)),
) as EventCategory[];
const statuses = Array.from(
  new Set(allScheduleEvents.map((event) => event.status)),
) as RoadmapStatus[];

export function TimelinePage() {
  const [groupBy, setGroupBy] = useState<GroupBy>("quarter");
  const [phase, setPhase] = useState<PhaseFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");

  const filteredEvents = useMemo(
    () =>
      allScheduleEvents.filter((event) => {
        const eventPhase = event.phase as Phase;
        const phaseMatch =
          phase === "all" ||
          eventPhase === phase ||
          (phase === "D1" && eventPhase === "D1→D2");
        return (
          phaseMatch &&
          (category === "all" || event.category === category) &&
          (status === "all" || event.status === status)
        );
      }),
    [category, phase, status],
  );

  const groups = useMemo(() => {
    const result = new Map<string, typeof filteredEvents>();
    filteredEvents.forEach((event) => {
      const label = groupLabel(event, groupBy);
      result.set(label, [...(result.get(label) ?? []), event]);
    });
    return Array.from(result.entries());
  }, [filteredEvents, groupBy]);

  return (
    <>
      <Lead>
        2026年7月から2030年3月までの研究・学位・外部活動・生活を、
        同じ時系列で確認します。正式締切、本人の計画、過年度からの推定を
        文字ラベルで区別し、準備と回復も予定に含めます。
      </Lead>

      <div className="rm-now-line" role="note" aria-label="現在日">
        <span>現在</span>
        <strong>
          <time dateTime={DATA_AS_OF}>2026年7月26日</time>・M2
        </strong>
        <i aria-hidden="true" />
        <p>修士研究の凍結、博士テーマ候補3案、外部候補の整理を進める時期。</p>
      </div>

      <Section
        id="controls"
        eyebrow="VIEW CONTROLS"
        title="表示を切り替える"
        intro="JavaScriptが無効な場合は、全イベントが四半期順で表示されます。"
      >
        <div className="rm-filter-bar rm-filter-bar--wide">
          <label htmlFor="timeline-group">
            まとめ方
            <select
              id="timeline-group"
              value={groupBy}
              onChange={(event) => setGroupBy(event.target.value as GroupBy)}
            >
              <option value="month">月</option>
              <option value="quarter">四半期</option>
              <option value="year">年</option>
              <option value="category">カテゴリ別</option>
              <option value="phase">D1・D2・D3別</option>
            </select>
          </label>
          <label htmlFor="timeline-phase">
            学年
            <select
              id="timeline-phase"
              value={phase}
              onChange={(event) =>
                setPhase(event.target.value as PhaseFilter)
              }
            >
              {phaseOptions.map((option) => (
                <option value={option} key={option}>
                  {option === "all" ? "すべて" : option}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="timeline-category">
            カテゴリ
            <select
              id="timeline-category"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as CategoryFilter)
              }
            >
              <option value="all">すべて</option>
              {categories.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="timeline-status">
            状態
            <select
              id="timeline-status"
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as StatusFilter)
              }
            >
              <option value="all">すべて</option>
              {statuses.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setGroupBy("quarter");
              setPhase("all");
              setCategory("all");
              setStatus("all");
            }}
          >
            初期表示へ
          </button>
          <p aria-live="polite">
            全{allScheduleEvents.length}件中{filteredEvents.length}件
          </p>
        </div>
      </Section>

      <Section
        id="timeline"
        eyebrow="2026.07 — 2030.03"
        title="全体タイムライン"
        intro="モバイルでは年次ごとの縦タイムラインとして表示します。横へ広いガント表は使いません。"
      >
        <div className="rm-timeline">
          {groups.map(([label, events]) => (
            <section className="rm-timeline-group" key={label}>
              <header>
                <h3>{label}</h3>
                <span>{events.length}件</span>
              </header>
              <div className="rm-timeline-group__events">
                {events.map((event) => {
                  const isDeadline = event.category === "学位";
                  return (
                    <article
                      className={`rm-event${isDeadline ? " rm-event--deadline" : ""}`}
                      key={event.id}
                    >
                      <div className="rm-event__rail" aria-hidden="true">
                        <i />
                      </div>
                      <div className="rm-event__content">
                        <div className="rm-event__meta">
                          <time dateTime={event.date.start}>
                            {event.date.display}
                          </time>
                          <Badge>{event.status}</Badge>
                          <span>{event.category}</span>
                          <span>{event.phase}</span>
                          {isDeadline ? (
                            <span className="rm-official-marker">
                              学位日程・年度確認
                            </span>
                          ) : null}
                        </div>
                        <h4>{event.title}</h4>
                        <p>{event.summary}</p>
                        {event.nextAction ? (
                          <p>
                            <strong>次の行動：</strong>
                            {event.nextAction}
                          </p>
                        ) : null}
                        {event.tracks ? (
                          <details className="rm-details">
                            <summary>研究・外部活動・生活を確認</summary>
                            <dl className="rm-key-values">
                              <div>
                                <dt>研究</dt>
                                <dd>{event.tracks.research}</dd>
                              </div>
                              <div>
                                <dt>外部活動</dt>
                                <dd>{event.tracks.outside}</dd>
                              </div>
                              <div>
                                <dt>生活</dt>
                                <dd>{event.tracks.life}</dd>
                              </div>
                            </dl>
                          </details>
                        ) : null}
                        {event.caveat ? (
                          <p className="rm-caveat">{event.caveat}</p>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section
        id="deadlines"
        eyebrow="DEGREE DEADLINES"
        title="学位の重要日程"
        intro="現在は多くが予定月・本人の内部目標です。正式日が公開されたら必ず置き換えます。"
      >
        <div className="rm-deadline-strip">
          {degreeDeadlineEvents.map((event) => (
            <article key={event.id}>
              <time dateTime={event.date.start}>{event.date.display}</time>
              <h3>{event.title}</h3>
              <Badge>{event.status}</Badge>
              {event.nextAction ? <p>{event.nextAction}</p> : null}
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="overlaps"
        eyebrow="OVERLAP WARNINGS"
        title="予定が重なる危険期間"
        intro="重なりをなくせない場合は、後から睡眠を削るのではなく、事前に縮小条件を適用します。"
      >
        <CardGrid columns={2}>
          {overlapWarnings.map((warning) => (
            <Card
              key={warning.time}
              title={warning.title}
              eyebrow={warning.time}
              badge="リスク"
            >
              <p>
                <strong>警戒：</strong>
                {warning.signal}
              </p>
              <p>
                <strong>対応：</strong>
                {warning.response}
              </p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="recovery"
        eyebrow="PREP & RECOVERY"
        title="準備・繁忙期・回復期間"
        intro="外部活動の前後に必要な作業と低負荷期間も、見えない余白ではなく正式な予定として扱います。"
      >
        <CardGrid columns={2}>
          <Card title="繁忙期" badge="要確認">
            <TupleTable
              headings={["時期", "重なる活動"]}
              rows={busyPeriods}
              caption="繁忙期"
            />
          </Card>
          <Card title="回復期間" badge="予定">
            <TupleTable
              headings={["時期", "回復・投稿期間"]}
              rows={recoveryWindows}
              caption="回復期間"
            />
          </Card>
        </CardGrid>
      </Section>

      <Section
        id="monthly"
        eyebrow="NEXT 12 MONTHS"
        title="直近12か月の月別行動"
        intro="2026年7月〜2027年6月のタスクを、長期タイムラインの下位計画として保持します。"
      >
        <div className="rm-month-grid">
          {nextTwelveMonths.map((month) => (
            <article key={month.month}>
              <span className="rm-time">{month.month}</span>
              <h3>{month.title}</h3>
              <ul>
                {month.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <details className="rm-details rm-details--appendix">
          <summary>旧ページの16期間ロードマップ原文</summary>
          <div className="rm-card-grid" data-columns="2">
            {roadmapItems.map((item) => (
              <Card
                key={item.period}
                title={`${item.period}・${item.stage}`}
                badge={item.accent ? "進行中" : "予定"}
              >
                <dl className="rm-key-values">
                  <div>
                    <dt>研究</dt>
                    <dd>{item.research}</dd>
                  </div>
                  <div>
                    <dt>外部活動</dt>
                    <dd>{item.outside}</dd>
                  </div>
                  <div>
                    <dt>生活</dt>
                    <dd>{item.life}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
        </details>
        <UpdateNotice />
      </Section>
    </>
  );
}
