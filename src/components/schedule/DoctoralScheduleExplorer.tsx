import {
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  doctoralScheduleData,
  type DoctoralMonthPlan,
  type DoctoralQuarterPlan,
  type DoctoralYear,
  type DoctoralYearPlan,
  type QuarterDomain,
  type ScheduleItem,
} from "../../data/doctoralSchedule";
import { Badge } from "../../pages/PageKit";

const DOCTORAL_YEARS: readonly DoctoralYear[] = ["D1", "D2", "D3"];
const QUARTER_DOMAINS: readonly QuarterDomain[] = [
  "研究",
  "キャリア",
  "外部活動",
  "生活",
];

type ScheduleView = "monthly" | "quarterly";

const VIEW_OPTIONS: readonly {
  id: ScheduleView;
  label: string;
  description: string;
}[] = [
  {
    id: "monthly",
    label: "月別",
    description: "毎月の重点、予定、締切、次の行動と余白を確認する",
  },
  {
    id: "quarterly",
    label: "四半期",
    description: "3か月単位で研究・キャリア・外部活動・生活を俯瞰する",
  },
];

const NO_SCRIPT_CONTENT = `
  <style>
    .rm-doctoral-year-panel[hidden],
    .rm-doctoral-view-panel[hidden] {
      display: block !important;
    }

    .rm-doctoral-controls {
      display: none !important;
    }
  </style>
  <p class="rm-doctoral-noscript">
    JavaScriptが無効なため、D1・D2・D3の月別計画と四半期計画をすべて続けて表示しています。
  </p>
`;

function getYearTabId(year: DoctoralYear) {
  return `doctoral-schedule-tab-${year.toLowerCase()}`;
}

function getYearPanelId(year: DoctoralYear) {
  return `doctoral-schedule-panel-${year.toLowerCase()}`;
}

function getViewPanelId(year: DoctoralYear, view: ScheduleView) {
  return `doctoral-schedule-${year.toLowerCase()}-${view}`;
}

function ItemList({
  items,
  emptyMessage,
}: {
  items: readonly string[];
  emptyMessage: string;
}) {
  if (items.length === 0) {
    return <p className="rm-doctoral-empty">{emptyMessage}</p>;
  }

  return (
    <ul className="rm-doctoral-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ScheduleItemDetails({ item }: { item: ScheduleItem }) {
  const hasExtendedDetails =
    Boolean(item.detail) ||
    Boolean(item.nextAction) ||
    Boolean(item.candidates?.length) ||
    Boolean(item.conditions?.length);

  return (
    <li className="rm-doctoral-schedule-item">
      <div className="rm-doctoral-schedule-item__summary">
        <span>{item.title}</span>
        <span className="rm-doctoral-badges">
          <Badge>{item.progress}</Badge>
          <Badge tone="neutral">{item.priority}</Badge>
        </span>
      </div>
      <dl className="rm-doctoral-schedule-item__facts">
        <div>
          <dt>分野</dt>
          <dd>{item.category}</dd>
        </div>
        <div>
          <dt>情報区分</dt>
          <dd>{item.evidence}</dd>
        </div>
      </dl>
      {hasExtendedDetails ? (
        <details className="rm-doctoral-item-details">
          <summary>この予定の詳細を見る</summary>
          <div className="rm-doctoral-item-details__body">
            {item.detail ? <p>{item.detail}</p> : null}
            {item.nextAction ? (
              <div>
                <h6>次の行動</h6>
                <p>{item.nextAction}</p>
              </div>
            ) : null}
            {item.candidates?.length ? (
              <div>
                <h6>候補</h6>
                <ItemList
                  items={item.candidates}
                  emptyMessage="候補はまだありません。"
                />
              </div>
            ) : null}
            {item.conditions?.length ? (
              <div>
                <h6>実施条件</h6>
                <ItemList
                  items={item.conditions}
                  emptyMessage="追加条件はありません。"
                />
              </div>
            ) : null}
          </div>
        </details>
      ) : null}
    </li>
  );
}

function MonthDetailGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rm-doctoral-month-detail-group">
      <h5>{title}</h5>
      {children}
    </section>
  );
}

function MonthCard({ month }: { month: DoctoralMonthPlan }) {
  const cardTitleId = `doctoral-month-${month.month}-title`;

  return (
    <li className="rm-doctoral-month-card">
      <article aria-labelledby={cardTitleId}>
        <header className="rm-doctoral-month-card__header">
          <h5 id={cardTitleId} className="rm-doctoral-month-card__date">
            <time dateTime={month.month}>{month.label}</time>
          </h5>
        </header>

        <div className="rm-doctoral-month-card__focus">
          <strong>重点</strong>
          <p>{month.focus}</p>
        </div>

        <section
          className="rm-doctoral-month-card__major"
          aria-labelledby={`${cardTitleId}-major`}
        >
          <h6 id={`${cardTitleId}-major`}>主要予定</h6>
          <ul className="rm-doctoral-major-list">
            {month.majorItems.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <Badge>{item.progress}</Badge>
              </li>
            ))}
          </ul>
        </section>

        <dl className="rm-doctoral-month-card__counts">
          <div>
            <dt>締切</dt>
            <dd>{month.deadlines.length}件</dd>
          </div>
          <div>
            <dt>次の行動</dt>
            <dd>{month.nextActions.length}件</dd>
          </div>
          <div>
            <dt>リスク</dt>
            <dd>{month.risks.length}件</dd>
          </div>
          <div>
            <dt>余白</dt>
            <dd>{month.buffers.length}件</dd>
          </div>
          <div>
            <dt>判断</dt>
            <dd>{month.decisions.length}件</dd>
          </div>
        </dl>

        <details className="rm-doctoral-month-card__details">
          <summary>{month.label}の詳細をすべて見る</summary>
          <div className="rm-doctoral-month-card__details-body">
            <MonthDetailGroup title="主要予定の詳細">
              <ul className="rm-doctoral-schedule-items">
                {month.majorItems.map((item) => (
                  <ScheduleItemDetails item={item} key={item.id} />
                ))}
              </ul>
            </MonthDetailGroup>

            <MonthDetailGroup title="締切">
              {month.deadlines.length ? (
                <ul className="rm-doctoral-schedule-items">
                  {month.deadlines.map((deadline) => (
                    <ScheduleItemDetails item={deadline} key={deadline.id} />
                  ))}
                </ul>
              ) : (
                <p className="rm-doctoral-empty">
                  現時点で登録された締切はありません。
                </p>
              )}
            </MonthDetailGroup>

            <MonthDetailGroup title="次の行動">
              <ItemList
                items={month.nextActions}
                emptyMessage="次の行動はまだ登録されていません。"
              />
            </MonthDetailGroup>

            <MonthDetailGroup title="リスク">
              <ItemList
                items={month.risks}
                emptyMessage="個別のリスクは登録されていません。"
              />
            </MonthDetailGroup>

            <MonthDetailGroup title="余白・回復">
              <ItemList
                items={month.buffers}
                emptyMessage="余白はまだ登録されていません。"
              />
            </MonthDetailGroup>

            <MonthDetailGroup title="判断">
              <ItemList
                items={month.decisions}
                emptyMessage="今月の判断事項はありません。"
              />
            </MonthDetailGroup>
          </div>
        </details>
      </article>
    </li>
  );
}

function MonthlyView({
  year,
  months,
  hidden,
}: {
  year: DoctoralYear;
  months: readonly DoctoralMonthPlan[];
  hidden: boolean;
}) {
  const panelId = getViewPanelId(year, "monthly");
  const titleId = `${panelId}-title`;

  return (
    <section
      className="rm-doctoral-view-panel rm-doctoral-monthly-view"
      id={panelId}
      aria-labelledby={titleId}
      hidden={hidden}
    >
      <header className="rm-doctoral-view-panel__header">
        <h4 id={titleId}>{year} 月別スケジュール</h4>
        <p>
          重点と主要予定を先に確認し、必要な月だけ詳細を開いてください。
        </p>
      </header>
      <ol className="rm-doctoral-month-grid">
        {months.map((month) => (
          <MonthCard month={month} key={month.month} />
        ))}
      </ol>
    </section>
  );
}

function QuarterCard({ quarter }: { quarter: DoctoralQuarterPlan }) {
  const titleId = `doctoral-quarter-${quarter.id}-title`;

  return (
    <li className="rm-doctoral-quarter-card">
      <article aria-labelledby={titleId}>
        <header className="rm-doctoral-quarter-card__header">
          <div>
            <p className="rm-doctoral-quarter-card__date">
              <time dateTime={quarter.startMonth}>
                {quarter.year}・{quarter.quarter}
              </time>
            </p>
            <h5 id={titleId}>{quarter.focus}</h5>
          </div>
          <Badge tone={quarter.largeExternalActivityCount > 1 ? "verify" : "neutral"}>
            大型外部活動 {quarter.largeExternalActivityCount}件
          </Badge>
        </header>

        <div className="rm-doctoral-quarter-domains">
          {QUARTER_DOMAINS.map((domain) => (
            <section className="rm-doctoral-quarter-domain" key={domain}>
              <h6>{domain}</h6>
              <ItemList
                items={quarter.domains[domain]}
                emptyMessage={`${domain}の予定はまだありません。`}
              />
            </section>
          ))}
        </div>

        <aside className="rm-doctoral-quarter-card__buffer">
          <strong>確保する余白</strong>
          <p>{quarter.buffer}</p>
        </aside>
      </article>
    </li>
  );
}

function QuarterlyView({
  year,
  quarters,
  hidden,
}: {
  year: DoctoralYear;
  quarters: readonly DoctoralQuarterPlan[];
  hidden: boolean;
}) {
  const panelId = getViewPanelId(year, "quarterly");
  const titleId = `${panelId}-title`;

  return (
    <section
      className="rm-doctoral-view-panel rm-doctoral-quarterly-view"
      id={panelId}
      aria-labelledby={titleId}
      hidden={hidden}
    >
      <header className="rm-doctoral-view-panel__header">
        <h4 id={titleId}>{year} 四半期スケジュール</h4>
        <p>
          研究・キャリア・外部活動・生活の4分野を同じ時間軸で確認できます。
        </p>
      </header>
      <ol className="rm-doctoral-quarter-grid">
        {quarters.map((quarter) => (
          <QuarterCard quarter={quarter} key={quarter.id} />
        ))}
      </ol>
    </section>
  );
}

function YearGoals({ plan }: { plan: DoctoralYearPlan }) {
  const titleId = `doctoral-year-goals-${plan.year.toLowerCase()}`;

  return (
    <section className="rm-doctoral-year-goals" aria-labelledby={titleId}>
      <header className="rm-doctoral-year-goals__header">
        <div>
          <p className="rm-doctoral-year-goals__period">
            <time dateTime={plan.startMonth}>{plan.startMonth}</time>
            <span aria-hidden="true">〜</span>
            <span className="rm-visually-hidden">から</span>
            <time dateTime={plan.endMonth}>{plan.endMonth}</time>
          </p>
          <h3 id={titleId}>{plan.year}の年次目標</h3>
        </div>
        <div className="rm-doctoral-badges">
          <Badge>{plan.status}</Badge>
          <Badge tone="neutral">{plan.evidence}</Badge>
        </div>
      </header>
      <p className="rm-doctoral-year-goals__purpose">{plan.purpose}</p>
      <div className="rm-doctoral-year-goals__body">
        <section>
          <h4>年度末までに残す成果</h4>
          <ItemList
            items={plan.outcomes}
            emptyMessage="年次成果はまだ登録されていません。"
          />
        </section>
        <aside className="rm-doctoral-year-goals__guardrail">
          <h4>この年の守る線</h4>
          <p>{plan.guardrail}</p>
        </aside>
      </div>
    </section>
  );
}

export function DoctoralScheduleExplorer() {
  const [activeYear, setActiveYear] = useState<DoctoralYear>("D1");
  const [activeView, setActiveView] = useState<ScheduleView>("monthly");
  const yearTabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function activateYear(year: DoctoralYear, index: number) {
    setActiveYear(year);
    yearTabRefs.current[index]?.focus();
  }

  function handleYearTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % DOCTORAL_YEARS.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex =
          (index - 1 + DOCTORAL_YEARS.length) % DOCTORAL_YEARS.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = DOCTORAL_YEARS.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activateYear(DOCTORAL_YEARS[nextIndex], nextIndex);
  }

  return (
    <section
      className="rm-doctoral-explorer"
      id="doctoral-schedule"
      aria-labelledby="doctoral-schedule-explorer-title"
    >
      <header className="rm-doctoral-explorer__header">
        <p className="rm-doctoral-explorer__eyebrow">
          {doctoralScheduleData.meta.startMonth}〜
          {doctoralScheduleData.meta.endMonth}
        </p>
        <h2 id="doctoral-schedule-explorer-title">
          {doctoralScheduleData.meta.title}
        </h2>
        <p className="rm-doctoral-explorer__goal">
          {doctoralScheduleData.meta.primaryGoal}
        </p>
        <p className="rm-doctoral-explorer__caveat">
          <strong>正式日程：</strong>
          {doctoralScheduleData.meta.formalDateCaveat}
        </p>
      </header>

      <div className="rm-doctoral-controls">
        <div
          className="rm-doctoral-year-tabs"
          role="tablist"
          aria-label="表示する博士課程の年次"
          aria-orientation="horizontal"
        >
          {DOCTORAL_YEARS.map((year, index) => (
            <button
              className="rm-doctoral-year-tab"
              id={getYearTabId(year)}
              key={year}
              type="button"
              role="tab"
              aria-controls={getYearPanelId(year)}
              aria-selected={activeYear === year}
              tabIndex={activeYear === year ? 0 : -1}
              ref={(element) => {
                yearTabRefs.current[index] = element;
              }}
              onClick={() => setActiveYear(year)}
              onKeyDown={(event) => handleYearTabKeyDown(event, index)}
            >
              {year}
            </button>
          ))}
        </div>

        <div
          className="rm-doctoral-view-switch"
          role="group"
          aria-label="スケジュールの表示単位"
        >
          {VIEW_OPTIONS.map((option) => (
            <button
              className="rm-doctoral-view-switch__button"
              key={option.id}
              type="button"
              aria-pressed={activeView === option.id}
              aria-controls={getViewPanelId(activeYear, option.id)}
              title={option.description}
              onClick={() => setActiveView(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {doctoralScheduleData.yearPlans.map((plan) => {
        const months = doctoralScheduleData.months.filter(
          (month) => month.year === plan.year,
        );
        const quarters = doctoralScheduleData.quarters.filter(
          (quarter) => quarter.year === plan.year,
        );

        return (
          <div
            className="rm-doctoral-year-panel"
            id={getYearPanelId(plan.year)}
            key={plan.year}
            role="tabpanel"
            aria-labelledby={getYearTabId(plan.year)}
            hidden={activeYear !== plan.year}
          >
            <YearGoals plan={plan} />
            <MonthlyView
              year={plan.year}
              months={months}
              hidden={activeView !== "monthly"}
            />
            <QuarterlyView
              year={plan.year}
              quarters={quarters}
              hidden={activeView !== "quarterly"}
            />
          </div>
        );
      })}

      <noscript dangerouslySetInnerHTML={{ __html: NO_SCRIPT_CONTENT }} />
    </section>
  );
}
