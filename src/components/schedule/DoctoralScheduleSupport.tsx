import {
  doctoralDecisionPoints,
  doctoralMonthPlans,
  doctoralQuarterPlans,
  doctoralScheduleMeta,
  doctoralYearPlans,
  majorScheduleBlocks,
  monthlyHealthCheck,
  scheduleBufferRules,
  scheduleConflictRules,
  scheduleProtectedItems,
  scheduleReductionOrder,
  scheduleWarningRules,
  type DoctoralYear,
  type MajorScheduleBlock,
  type ScheduleWarningRule,
} from "../../data/doctoralSchedule";
import { BulletList, StatusBadge } from "../common";

const DOCTORAL_YEARS: readonly DoctoralYear[] = ["D1", "D2", "D3"];

const EXTERNAL_ACTIVITY_CATEGORIES = new Set([
  "企業インターン",
  "国内滞在研究",
  "海外研究留学",
]);

function EvidenceLabel({ children }: { children: string }) {
  return (
    <span className="rm-doctoral-evidence">
      <span className="rm-visually-hidden">情報区分：</span>
      {children}
    </span>
  );
}

function PriorityLabel({ children }: { children: string }) {
  return (
    <span className="rm-doctoral-priority">
      <span className="rm-visually-hidden">優先度：</span>
      {children}
    </span>
  );
}

function BlockDetails({ block }: { block: MajorScheduleBlock }) {
  return (
    <div className="rm-doctoral-block__details">
      <dl className="rm-key-values rm-doctoral-block__summary">
        <div>
          <dt>目的</dt>
          <dd>{block.objective}</dd>
        </div>
        <div>
          <dt>期間</dt>
          <dd>{block.duration}</dd>
        </div>
        {block.candidates?.length ? (
          <div>
            <dt>候補</dt>
            <dd>
              <BulletList items={block.candidates} />
            </dd>
          </div>
        ) : null}
        <div>
          <dt>成果物</dt>
          <dd>
            <BulletList items={block.deliverables} />
          </dd>
        </div>
        <div>
          <dt>開始条件</dt>
          <dd>
            <BulletList items={block.prerequisites} />
          </dd>
        </div>
        <div>
          <dt>縮小・代替</dt>
          <dd>{block.fallback}</dd>
        </div>
        <div>
          <dt>次の行動</dt>
          <dd>{block.nextAction}</dd>
        </div>
      </dl>
    </div>
  );
}

/**
 * D1〜D3の目的と主要ブロックを横並びで比較するための概要。
 * 詳細はネイティブのdetailsで段階表示するため、JavaScriptなしでも閲覧できる。
 */
export function DoctoralOverallView() {
  return (
    <section
      className="rm-section rm-doctoral-overall"
      id="overall"
      aria-labelledby="doctoral-overall-title"
    >
      <header className="rm-section__header rm-doctoral-overall__header">
        <p className="rm-eyebrow">D1–D3 OVERVIEW</p>
        <h2 id="doctoral-overall-title">3年間の全体像</h2>
        <p>
          各年の役割と主要ブロックを比較します。活動名を開くと、
          成果物・開始条件・縮小案まで確認できます。
        </p>
      </header>

      <aside
        className="rm-callout rm-callout--info rm-doctoral-overall__goal"
        aria-label="3年間の最優先目標"
      >
        <h3>{doctoralScheduleMeta.primaryGoal}</h3>
        <p>{doctoralScheduleMeta.formalDateCaveat}</p>
      </aside>

      <div
        className="rm-card-grid rm-doctoral-overall__years"
        data-columns="3"
        role="list"
        aria-label="D1からD3までの年次比較"
      >
        {DOCTORAL_YEARS.map((year) => {
          const plan = doctoralYearPlans.find((item) => item.year === year);
          const blocks = majorScheduleBlocks.filter(
            (block) => block.year === year,
          );

          if (!plan) {
            return null;
          }

          return (
            <article
              className="rm-card rm-doctoral-year"
              data-year={year}
              key={year}
              role="listitem"
            >
              <header className="rm-card__header rm-doctoral-year__header">
                <div>
                  <p className="rm-eyebrow">
                    <time dateTime={plan.startMonth}>{plan.startMonth}</time>
                    {" — "}
                    <time dateTime={plan.endMonth}>{plan.endMonth}</time>
                  </p>
                  <h3>{year}</h3>
                </div>
                <StatusBadge status={plan.status} />
              </header>

              <p className="rm-doctoral-year__purpose">{plan.purpose}</p>

              <details className="rm-detail-card rm-doctoral-year__outcomes">
                <summary className="rm-detail-card__summary">
                  <span className="rm-detail-card__summary-label">
                    年末までに残すもの
                  </span>
                  <span
                    className="rm-detail-card__disclosure"
                    aria-hidden="true"
                  />
                </summary>
                <div className="rm-detail-card__body">
                  <BulletList items={plan.outcomes} />
                  <p>
                    <strong>ガードレール：</strong>
                    {plan.guardrail}
                  </p>
                </div>
              </details>

              <ol className="rm-doctoral-year__blocks">
                {blocks.map((block) => (
                  <li className="rm-doctoral-block" key={block.id}>
                    <details className="rm-detail-card rm-doctoral-block__disclosure">
                      <summary className="rm-detail-card__summary">
                        <span className="rm-doctoral-block__heading">
                          <time dateTime={block.startMonth}>
                            {block.dateDisplay}
                          </time>
                          <strong>{block.title}</strong>
                        </span>
                        <span className="rm-doctoral-block__badges">
                          <StatusBadge status={block.roadmapStatus} />
                          <PriorityLabel>{block.priority}</PriorityLabel>
                        </span>
                        <span
                          className="rm-detail-card__disclosure"
                          aria-hidden="true"
                        />
                      </summary>
                      <BlockDetails block={block} />
                    </details>
                  </li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/**
 * 8つの判断点を、期限・暫定案・未確認項目まで含めて一覧化する。
 */
export function DoctoralDecisionGrid() {
  return (
    <section
      className="rm-section rm-doctoral-decisions"
      id="schedule-decisions"
      aria-labelledby="doctoral-decisions-title"
    >
      <header className="rm-section__header rm-doctoral-decisions__header">
        <p className="rm-eyebrow">DECISION POINTS</p>
        <h2 id="doctoral-decisions-title">8つの判断点</h2>
        <p>
          暫定案は結論ではありません。期限までに確認項目を埋め、
          条件不足なら既定の縮小・延期案を適用します。
        </p>
      </header>

      <div
        className="rm-card-grid rm-doctoral-decisions__grid"
        data-columns="2"
        role="list"
      >
        {doctoralDecisionPoints.map((decision, index) => (
          <article
            className="rm-card rm-doctoral-decision"
            key={decision.id}
            role="listitem"
          >
            <header className="rm-card__header rm-doctoral-decision__header">
              <div>
                <p className="rm-eyebrow">
                  判断 {index + 1} / {doctoralDecisionPoints.length}
                </p>
                <h3>{decision.title}</h3>
              </div>
              <PriorityLabel>{decision.priority}</PriorityLabel>
            </header>

            <dl className="rm-key-values rm-doctoral-decision__essentials">
              <div>
                <dt>判断期限</dt>
                <dd>
                  <time dateTime={decision.deadline}>{decision.deadline}</time>
                  <span>（{decision.year}）</span>
                </dd>
              </div>
              <div>
                <dt>現在の暫定案</dt>
                <dd>{decision.provisionalChoice}</dd>
              </div>
              <div>
                <dt>条件不足時の既定動作</dt>
                <dd>{decision.defaultAction}</dd>
              </div>
            </dl>

            <details className="rm-detail-card rm-doctoral-decision__details">
              <summary className="rm-detail-card__summary">
                <span className="rm-detail-card__summary-label">
                  選択肢・判断基準・確認項目
                </span>
                <span
                  className="rm-detail-card__disclosure"
                  aria-hidden="true"
                />
              </summary>
              <div className="rm-detail-card__body">
                <dl className="rm-key-values">
                  <div>
                    <dt>選択肢</dt>
                    <dd>
                      <BulletList items={decision.options} />
                    </dd>
                  </div>
                  <div>
                    <dt>判断基準</dt>
                    <dd>
                      <BulletList items={decision.criteria} />
                    </dd>
                  </div>
                  <div>
                    <dt>期限までに確認すること</dt>
                    <dd>
                      <BulletList items={decision.confirmations} />
                    </dd>
                  </div>
                </dl>
              </div>
            </details>

            <footer className="rm-doctoral-decision__footer">
              <EvidenceLabel>{decision.evidence}</EvidenceLabel>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

type RealityState = "plan-clear" | "attention" | "verify";

interface RealityAssessment {
  state: RealityState;
  label: string;
  summary: string;
  evidence: string[];
}

function monthIndex(month: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  return year * 12 + monthNumber;
}

function isExternalActivity(block: MajorScheduleBlock) {
  return (
    EXTERNAL_ACTIVITY_CATEGORIES.has(block.category) &&
    block.id !== "d2-transition-to-overseas"
  );
}

function isLongActivity(block: MajorScheduleBlock) {
  const weekValues = Array.from(block.duration.matchAll(/(\d+)週間/g)).map(
    (match) => Number(match[1]),
  );

  if (weekValues.length) {
    return Math.max(...weekValues) > 4;
  }

  const monthValues = Array.from(block.duration.matchAll(/(\d+)か月/g)).map(
    (match) => Number(match[1]),
  );
  return monthValues.some((value) => value > 1);
}

function hasPaperWindowAfter(block: MajorScheduleBlock) {
  const end = monthIndex(block.endMonth);
  return doctoralMonthPlans.some(
    (month) =>
      monthIndex(month.month) > end &&
      monthIndex(month.month) <= end + 3 &&
      month.majorItems.some((item) => item.category === "論文"),
  );
}

function assessWarning(rule: ScheduleWarningRule): RealityAssessment {
  const externalActivities = majorScheduleBlocks
    .filter(isExternalActivity)
    .sort(
      (left, right) =>
        monthIndex(left.startMonth) - monthIndex(right.startMonth),
    );
  const longActivities = externalActivities.filter(isLongActivity);

  switch (rule.id) {
    case "warning-two-external": {
      const overloaded = doctoralQuarterPlans.filter(
        (quarter) => quarter.largeExternalActivityCount >= 2,
      );
      return overloaded.length
        ? {
            state: "attention",
            label: "要調整",
            summary: "大型外部活動が2件以上の四半期があります。",
            evidence: overloaded.map(
              (quarter) => `${quarter.year} ${quarter.quarter}：${quarter.focus}`,
            ),
          }
        : {
            state: "plan-clear",
            label: "計画上クリア",
            summary: "大型外部活動は各四半期1件以下です。",
            evidence: ["全12四半期のlargeExternalActivityCountを確認"],
          };
    }

    case "warning-short-gap": {
      const tightPairs = longActivities.slice(1).flatMap((block, index) => {
        const previous = longActivities[index];
        const freeMonths =
          monthIndex(block.startMonth) - monthIndex(previous.endMonth) - 1;
        return freeMonths < 1
          ? [`${previous.title} → ${block.title}`]
          : [];
      });
      return tightPairs.length
        ? {
            state: "attention",
            label: "要調整",
            summary: "長期活動間に4週間相当の空きがない組合せがあります。",
            evidence: tightPairs,
          }
        : {
            state: "plan-clear",
            label: "計画上クリア",
            summary: "長期活動間には少なくとも1暦月の空きがあります。",
            evidence: ["D2企業終了後は9〜10月を移行・回復期間として確保"],
          };
    }

    case "warning-d3-long-external": {
      const conflicts = externalActivities.filter(
        (block) =>
          block.year === "D3" &&
          monthIndex(block.startMonth) >= monthIndex("2029-07") &&
          isLongActivity(block),
      );
      return conflicts.length
        ? {
            state: "attention",
            label: "要調整",
            summary: "D3後半に1か月超の外部活動があります。",
            evidence: conflicts.map((block) => block.title),
          }
        : {
            state: "plan-clear",
            label: "計画上クリア",
            summary: "D3夏の任意枠は最大4週間に制限されています。",
            evidence: ["D3条件付き企業研究インターン：原則2〜4週間"],
          };
    }

    case "warning-d3-before-draft":
      return {
        state: "verify",
        label: "2029年5月に判定",
        summary: "初稿70%以上などは将来の実績で判定します。",
        evidence: [
          "主要実験完了",
          "全章構成・主要図表完成",
          "主要論文投稿済み",
          "指導教員承認",
        ],
      };

    case "warning-no-paper-window": {
      const missing = externalActivities.filter(
        (block) => !hasPaperWindowAfter(block),
      );
      return missing.length
        ? {
            state: "attention",
            label: "注意",
            summary:
              "独立した論文化期間を置いていない外部活動があります。D3枠は既存成果の小規模検証に限定します。",
            evidence: missing.map((block) => block.title),
          }
        : {
            state: "plan-clear",
            label: "計画上クリア",
            summary: "各外部活動後3か月以内に論文作業があります。",
            evidence: ["月次計画の論文カテゴリを確認"],
          };
    }

    case "warning-triple-overlap":
      return {
        state: "verify",
        label: "契約前に確認",
        summary:
          "TA・RAの実際の担当期間はこの計画データだけでは確定できません。",
        evidence: ["企業インターン中はTA・RAを重ねない運用ルールあり"],
      };

    case "warning-no-monthly-recovery": {
      const monthsWithoutBuffer = doctoralMonthPlans.filter(
        (month) => month.buffers.length === 0,
      );
      return monthsWithoutBuffer.length
        ? {
            state: "attention",
            label: "要追加",
            summary: "回復・余白の記載がない月があります。",
            evidence: monthsWithoutBuffer.map((month) => month.label),
          }
        : {
            state: "plan-clear",
            label: "計画上クリア・実績確認",
            summary:
              "36か月すべてに余白があります。完全休養を実際に取れたかは毎月確認します。",
            evidence: [`${doctoralMonthPlans.length}か月すべてにbuffersを設定`],
          };
    }

    case "warning-formal-deadline":
      return {
        state: "verify",
        label: "年度ごとに確認",
        summary:
          "正式締切と実際の完了率は年度の履修案内・教務通知で更新します。",
        evidence: [doctoralScheduleMeta.formalDateCaveat],
      };

    case "warning-unfunded-activity": {
      const unfixed = externalActivities.filter(
        (block) =>
          block.progress === "候補" &&
          block.prerequisites.some((item) => item.includes("資金")),
      );
      return {
        state: unfixed.length ? "verify" : "plan-clear",
        label: unfixed.length ? "資金確定待ち" : "計画上クリア",
        summary: unfixed.length
          ? "候補段階で、資金確定を開始条件にしている長期活動があります。"
          : "資金確定待ちの長期活動はありません。",
        evidence: unfixed.length
          ? unfixed.map((block) => block.title)
          : ["開始条件を確認"],
      };
    }

    default:
      return {
        state: "verify",
        label: "要確認",
        summary: "実際の予定・進捗と照合して判定します。",
        evidence: [rule.condition],
      };
  }
}

/**
 * 警告ルールを現行スケジュールへ機械的に当てた、計画時点の現実性チェック。
 * 「計画上クリア」は実施実績の保証ではないため、根拠も併記する。
 */
export function ScheduleRealityChecks() {
  const assessments = scheduleWarningRules.map((rule) => ({
    rule,
    assessment: assessWarning(rule),
  }));
  const attentionCount = assessments.filter(
    ({ assessment }) => assessment.state === "attention",
  ).length;
  const verifyCount = assessments.filter(
    ({ assessment }) => assessment.state === "verify",
  ).length;

  return (
    <section
      className="rm-section rm-doctoral-reality"
      id="reality-checks"
      aria-labelledby="doctoral-reality-checks-title"
    >
      <header className="rm-section__header rm-doctoral-reality__header">
        <p className="rm-eyebrow">REALITY CHECK</p>
        <h2 id="doctoral-reality-checks-title">現実性チェック</h2>
        <p>
          現在の計画データに警告条件を当てた暫定判定です。
          「計画上クリア」も、実施時の健康・契約・進捗確認を省略するものではありません。
        </p>
      </header>

      <aside
        className="rm-callout rm-callout--warning rm-doctoral-reality__summary"
        aria-label="現実性チェックの集計"
      >
        <h3>今の計画で先に扱うこと</h3>
        <p>
          具体的な注意 {attentionCount}件、将来の実績・契約確認{" "}
          {verifyCount}件です。警告が成立したら、各項目の縮小案をそのまま適用します。
        </p>
      </aside>

      <div
        className="rm-doctoral-reality__list"
        role="list"
        aria-label="警告条件と現在の判定"
      >
        {assessments.map(({ rule, assessment }) => (
          <article
            className="rm-card rm-doctoral-reality__item"
            data-reality-state={assessment.state}
            key={rule.id}
            role="listitem"
          >
            <header className="rm-card__header">
              <div>
                <p className="rm-eyebrow">条件：{rule.condition}</p>
                <h3>{rule.message}</h3>
              </div>
              <span
                className={`rm-doctoral-reality__status rm-doctoral-reality__status--${assessment.state}`}
              >
                {assessment.label}
              </span>
            </header>

            <p className="rm-doctoral-reality__assessment">
              <strong>現在の判定：</strong>
              {assessment.summary}
            </p>

            <details className="rm-detail-card rm-doctoral-reality__details">
              <summary className="rm-detail-card__summary">
                <span className="rm-detail-card__summary-label">
                  根拠と具体的な縮小案
                </span>
                <span
                  className="rm-detail-card__disclosure"
                  aria-hidden="true"
                />
              </summary>
              <div className="rm-detail-card__body">
                <h4>判定根拠</h4>
                <BulletList items={assessment.evidence} />
                <h4>条件に該当したとき</h4>
                <p>{rule.reduction}</p>
                <p>
                  <PriorityLabel>{rule.priority}</PriorityLabel>
                </p>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * 健康、活動間の余白、重複禁止、削減順を一つにまとめた運用規約。
 */
export function ScheduleOperatingRules() {
  return (
    <section
      className="rm-section rm-doctoral-operating"
      id="operating-rules"
      aria-labelledby="doctoral-operating-rules-title"
    >
      <header className="rm-section__header rm-doctoral-operating__header">
        <p className="rm-eyebrow">OPERATING RULES</p>
        <h2 id="doctoral-operating-rules-title">スケジュールの運用ルール</h2>
        <p>
          活動を増やす前に、健康・学位・回復期間を守れているか確認します。
          過密時は削減順を上から機械的に適用します。
        </p>
      </header>

      <aside className="rm-callout rm-callout--critical rm-doctoral-operating__principle">
        <h3>保護項目は削減対象にしない</h3>
        <p>
          睡眠や博士論文を削って予定を成立させず、任意活動の側を短縮・延期・中止します。
        </p>
      </aside>

      <div className="rm-card-grid rm-doctoral-operating__primary" data-columns="2">
        <article className="rm-card rm-doctoral-operating__health">
          <header className="rm-card__header">
            <div>
              <p className="rm-eyebrow">MONTHLY CHECK</p>
              <h3>{monthlyHealthCheck.title}</h3>
            </div>
          </header>
          <BulletList items={monthlyHealthCheck.checks} />
          <dl className="rm-key-values">
            <div>
              <dt>人間関係のルール</dt>
              <dd>{monthlyHealthCheck.relationshipRule}</dd>
            </div>
            <div>
              <dt>早期警戒</dt>
              <dd>{monthlyHealthCheck.escalationSignal}</dd>
            </div>
            <div>
              <dt>警戒時の行動</dt>
              <dd>{monthlyHealthCheck.escalationAction}</dd>
            </div>
          </dl>
        </article>

        <article className="rm-card rm-doctoral-operating__priorities">
          <header className="rm-card__header">
            <div>
              <p className="rm-eyebrow">CUT / PROTECT</p>
              <h3>削減順と保護項目</h3>
            </div>
          </header>
          <div className="rm-doctoral-operating__priority-lists">
            <section aria-labelledby="doctoral-reduction-order-title">
              <h4 id="doctoral-reduction-order-title">過密時の削減順</h4>
              <ol className="rm-list rm-doctoral-operating__reduction-order">
                {scheduleReductionOrder.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="doctoral-protected-items-title">
              <h4 id="doctoral-protected-items-title">最後まで守るもの</h4>
              <BulletList items={scheduleProtectedItems} />
            </section>
          </div>
        </article>
      </div>

      <section
        className="rm-doctoral-operating__buffers"
        aria-labelledby="doctoral-buffer-rules-title"
      >
        <header>
          <h3 id="doctoral-buffer-rules-title">活動後に確保する余白</h3>
          <p>余白は空き時間ではなく、成果整理・回復・移行の正式な予定です。</p>
        </header>
        <div className="rm-card-grid" data-columns="2" role="list">
          {scheduleBufferRules.map((buffer) => (
            <article
              className="rm-card rm-doctoral-buffer"
              key={buffer.id}
              role="listitem"
            >
              <h4>{buffer.after}</h4>
              <p className="rm-doctoral-buffer__minimum">
                <strong>最低：</strong>
                {buffer.minimum}
              </p>
              <p>{buffer.rule}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rm-doctoral-operating__conflicts"
        aria-labelledby="doctoral-conflict-rules-title"
      >
        <header>
          <h3 id="doctoral-conflict-rules-title">重複させない組合せ</h3>
          <p>該当する二つを同時に入れず、次の対応を先に予定へ反映します。</p>
        </header>
        <div className="rm-doctoral-conflicts" role="list">
          {scheduleConflictRules.map((conflict) => (
            <article
              className="rm-card rm-doctoral-conflict"
              key={conflict.id}
              role="listitem"
            >
              <h4>{conflict.combination.join(" ＋ ")}</h4>
              <p>{conflict.response}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
