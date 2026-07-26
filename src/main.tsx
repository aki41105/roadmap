import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  budgets,
  busyPeriods,
  careerSteps,
  decisionGates,
  degreeMilestones,
  degreeRequirements,
  eightWeekPlan,
  externalProjects,
  hostCandidates,
  internshipCandidates,
  internshipContractGroups,
  internshipFundingNotes,
  internshipGo,
  internshipOutputModels,
  internshipPrep,
  internshipProcedures,
  internshipReadiness,
  internshipReject,
  internshipRisks,
  internshipRules,
  internshipScoreRows,
  internshipStrategyOptions,
  internshipThemes,
  internshipThreeYearRules,
  internshipWindows,
  jaistOverseasGrant,
  jspsRoutes,
  lifeCards,
  nextTwelveMonths,
  nttInternshipThemes,
  oneTimeCosts,
  overseasChecks,
  overseasCompanyCandidates,
  overseasCosts,
  overseasDelay,
  overseasExecution,
  overseasExploration,
  overseasGo,
  overseasRoadmap,
  overseasThemes,
  recoveryWindows,
  researchArc,
  riskRows,
  roadmapItems,
  scenarioOptions,
  shortInternshipCandidates,
  sourceGroups,
  supportPrograms,
  toyotaEcosystem,
} from "./data";
import "./styles.css";

const navigation = [
  ["#overview", "全体像"],
  ["#timeline", "年表"],
  ["#research", "研究"],
  ["#internship", "企業インターン"],
  ["#overseas", "海外留学"],
  ["#degree", "学位・制度"],
  ["#career", "就活"],
  ["#life", "生活"],
  ["#decisions", "判断"],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  text,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-number" aria-hidden="true">
        {number}
      </div>
      <div className="section-title">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </header>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="ページの先頭へ">
          <span className="wordmark-mark">AS</span>
          <span>
            DOCTORAL ROADMAP
            <small>2026 — 2030</small>
          </span>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          {navigation.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">INTEGRATED PLAN · LAST UPDATED 2026.07.26</p>
              <h1 id="hero-title">
                博士修了までの
                <br />
                <em>統合ロードマップ</em>
              </h1>
              <p className="hero-lede">
                研究、留学、就活、暮らしを、ひとつの時間軸へ。
                <br />
                2030年3月の博士修了を守りながら、外で研究し、生活も育てるための意思決定の地図です。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#timeline">
                  年表を見る
                  <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#next-year">
                  直近12か月
                </a>
              </div>
            </div>

            <aside className="hero-summary" aria-label="計画の基本情報">
              <div className="summary-label">
                <span className="plan-badge">推奨</span>
                <strong>B・バランス案</strong>
              </div>
              <dl>
                <div>
                  <dt>現在地</dt>
                  <dd>M2 · JAIST</dd>
                </div>
                <div>
                  <dt>博士課程</dt>
                  <dd>2027.04 — 2030.03</dd>
                </div>
                <div>
                  <dt>研究領域</dt>
                  <dd>Human–Robot Interaction</dd>
                </div>
                <div>
                  <dt>外部研究</dt>
                  <dd>up to 3 major + 0–2 short</dd>
                </div>
              </dl>
              <p>
                このページの「公式」は2026年7月26日時点の公開情報、「計画」は本人の希望から作った内部目標です。
              </p>
            </aside>
          </div>
          <div className="hero-line" aria-hidden="true">
            <span>2026.07</span>
            <i />
            <span>2030.03</span>
          </div>
        </section>

        <section className="overview section" id="overview">
          <SectionHeading
            number="00"
            eyebrow="THE DECISION"
            title="大型は最大3件、短期は学位ゲート付き"
            text="D1のCyberAgent、条件付きのD1冬国内研究、D2の海外研究を最大3件の大型案件として配置します。NTTとD3企業枠も、直前の論文・学位条件を満たした場合だけ実施します。"
          />

          <div className="thesis-statement">
            <span>中心方針</span>
            <p>
              博士修了を最優先にしながら、
              <strong>D1長期企業・国内研究滞在・D2海外研究</strong>
              を大型案件として配置。企業インターン3回は目標ではなく上限とし、D2・D3の短期枠は未達なら中止する。
            </p>
          </div>
          <p className="cadence-note">
            <span>「年2回」の考え方</span>
            毎年2回の長期滞在は固定しません。D1だけは企業長期と国内研究を投稿ゲートでつなぎ、D2・D3の短期企業枠は追加ではなく条件付きです。
          </p>

          <div className="priority-layout">
            <div className="priority-intro">
              <p className="eyebrow">守る順番</p>
              <h3>増やす計画ではなく、守る計画。</h3>
            </div>
            <ol className="priority-list">
              {[
                "博士論文の中心研究と学位日程",
                "睡眠・食事・健康",
                "研究資金と生活の持続可能性",
                "論文化につながる外部研究",
                "早期のキャリア探索と就職活動",
                "住居・車・アルバイト・山小屋などの生活経験",
              ].map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="cut-rule">
            <p className="eyebrow">遅れたときに削る順番</p>
            <div>
              {[
                "一般バイト",
                "車",
                "任意の学会",
                "山小屋",
                "同年2回目の外部活動",
                "博士論文に入らない共同研究",
              ].map((item, index) => (
                <span key={item}>
                  <b>{index + 1}</b>
                  {item}
                </span>
              ))}
            </div>
            <p>睡眠・食事・中心研究・指導教員との連絡は削らない。</p>
          </div>

          <div className="scenario-heading">
            <p className="eyebrow">THREE SCENARIOS</p>
            <h3>迷ったらBへ戻る</h3>
            <p>安全案と挑戦案を両端に置き、研究の進捗・健康・資金で計画を縮めたり広げたりします。</p>
          </div>
          <div className="scenario-grid">
            {scenarioOptions.map((scenario) => (
              <article className={scenario.recommended ? "recommended" : ""} key={scenario.key}>
                <div>
                  <span>{scenario.key}</span>
                  {scenario.recommended && <b className="plan-badge">推奨</b>}
                </div>
                <h3>{scenario.title}</h3>
                <dl>
                  <div>
                    <dt>外部研究</dt>
                    <dd>{scenario.projects}</dd>
                  </div>
                  <div>
                    <dt>論文</dt>
                    <dd>{scenario.papers}</dd>
                  </div>
                  <div>
                    <dt>生活</dt>
                    <dd>{scenario.life}</dd>
                  </div>
                  <div>
                    <dt>主なリスク</dt>
                    <dd>{scenario.risk}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section" id="timeline">
          <SectionHeading
            number="01"
            eyebrow="MASTER TIMELINE"
            title="2026年7月 → 2030年3月"
            text="研究・外部活動・生活を四半期ごとに並べた基準線です。正確な学内締切や募集時期は、その年度の公式資料で更新します。"
          />

          <div className="timeline-legend" aria-label="年表の分類">
            <span>
              <i className="dot dot-research" /> 研究・学位
            </span>
            <span>
              <i className="dot dot-outside" /> 外部活動・キャリア
            </span>
            <span>
              <i className="dot dot-life" /> 生活・資金
            </span>
          </div>

          <div className="timeline-table" role="table" aria-label="四半期別マスタープラン">
            <div className="timeline-head" role="row">
              <span role="columnheader">時期</span>
              <span role="columnheader">研究・学位</span>
              <span role="columnheader">外部活動・キャリア</span>
              <span role="columnheader">生活・資金</span>
            </div>
            {roadmapItems.map((item) => (
              <article
                className={`timeline-row ${item.accent ? "is-current" : ""}`}
                role="row"
                key={item.period}
              >
                <div className="timeline-time" role="cell">
                  <span className="period">{item.period}</span>
                  <span>{item.stage}</span>
                  {item.accent && <b>NOW</b>}
                </div>
                <p className="timeline-research" role="cell">
                  <span className="cell-label">研究・学位</span>
                  {item.research}
                </p>
                <p className="timeline-outside" role="cell">
                  <span className="cell-label">外部活動・キャリア</span>
                  {item.outside}
                </p>
                <p className="timeline-life" role="cell">
                  <span className="cell-label">生活・資金</span>
                  {item.life}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section next-year" id="next-year">
          <SectionHeading
            number="02"
            eyebrow="THE NEXT 12 MONTHS"
            title="まず、次の一年を動かす"
            text="遠い予定を実行できる単位へ。各月を開くと、その月の具体的な行動を確認できます。"
          />
          <div className="month-grid">
            {nextTwelveMonths.map((month, index) => (
              <details className="month-card" open={index === 0} key={month.month}>
                <summary>
                  <span>{month.month}</span>
                  <strong>{month.title}</strong>
                  <i aria-hidden="true">＋</i>
                </summary>
                <ul>
                  {month.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <section className="section research-section" id="research">
          <SectionHeading
            number="03"
            eyebrow="RESEARCH STRATEGY"
            title="一つの問いを、3段階で深める"
            text="博士論文を単発のモデル比較にしないため、「推定 → 予測 → 適応」を一本の主張としてつなぎます。"
          />

          <div className="research-arc">
            {researchArc.map((item, index) => (
              <article key={item.key}>
                <div className="research-key">{item.key}</div>
                <p className="eyebrow">STEP {index + 1}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.role}</span>
              </article>
            ))}
          </div>

          <div className="publication-goals">
            <div>
              <p className="eyebrow">PUBLICATION GOALS</p>
              <h3>論文は数ではなく、章との接続で数える。</h3>
            </div>
            <ul>
              <li>
                <span>D1</span> CyberAgentまたは国内滞在の成果を1本投稿。冬の国内滞在はCyberAgent投稿後だけ
              </li>
              <li>
                <span>D2</span> 国内滞在成果と海外共同研究を投稿。NTTは論文本数に数えない
              </li>
              <li>
                <span>D3開始</span> 独立研究2本以上を投稿済み、3章分の主要結果を保有
              </li>
              <li>
                <span>修了時</span> 独立テーマ3本、うち2〜3本採択を内部目標に
              </li>
            </ul>
          </div>

          <div className="subsection-heading">
            <div>
              <p className="eyebrow">UP TO THREE MAJOR + TWO SHORT</p>
              <h3>大型は最大3件、短期は条件付き2件</h3>
            </div>
            <p>短期枠は博士論文の柱にせず、研究所比較と就職判断に限定します。</p>
          </div>

          <div className="project-grid">
            {externalProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span className="period">{project.time}</span>
                </div>
                <h3>{project.title}</h3>
                <div className="project-metrics">
                  <p>
                    <span>期間</span>
                    <strong>{project.duration}</strong>
                  </p>
                  <p>
                    <span>成果</span>
                    <strong>{project.result}</strong>
                  </p>
                </div>
                <p className="project-purpose">{project.purpose}</p>
                <div className="caution">
                  <span>要確認</span>
                  <p>{project.caution}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="execution-plan">
            <div className="execution-copy">
              <p className="eyebrow">8-WEEK EXECUTION</p>
              <h3>2か月を論文へ変える工程</h3>
              <p>
                出発前に研究質問、データ、倫理、ベースライン、知財、著者順、投稿先をそろえる。帰国時には原稿60〜80%を持ち帰る。
              </p>
            </div>
            <ol>
              {eightWeekPlan.map(([week, action]) => (
                <li key={week}>
                  <span>WEEK {week}</span>
                  <p>{action}</p>
                </li>
              ))}
            </ol>
          </div>

          <details className="candidate-panel">
            <summary>
              <span>
                <small>EXPLORATION LIST</small>
                暫定候補を見る
              </span>
              <i aria-hidden="true">＋</i>
            </summary>
            <p>
              研究テーマとの適合度から作った探索リストです。募集、受入教員、滞在制度、費用、知財、データ条件は未確定であり、公式情報と受入先の回答で確認します。
            </p>
            <div>
              {hostCandidates.map((group) => (
                <section key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </details>
        </section>

        <section className="section internship-section" id="internship">
          <SectionHeading
            number="04"
            eyebrow="ENTERPRISE RESEARCH INTERNSHIP · PRIMARY PLAN"
            title="企業は最大3回、役割は重ねない"
            text="D1は論文を作る長期枠、D2はNTTで研究所を比べる短期枠、D3は就職先を確かめる条件付き枠。3回参加は必達ではなく、学位進捗が許す上限です。"
          />

          <div className="internship-hero">
            <div className="internship-date">
              <span>PRIMARY · D1 PAPER SLOT</span>
              <strong>2027.07—10</strong>
              <p>
                CyberAgentを第一候補に6〜8週間〜2か月。2027年夏の実施は一つにし、採択時だけ国内滞在を投稿後のD1冬へ移す。
              </p>
            </div>
            <div className="internship-principle">
              <p className="eyebrow">ONE PAPER · ONE LAB · ONE CAREER</p>
              <h3>三回を、三つの違う目的で使う。</h3>
              <p>
                D1だけを論文本命にします。D2のNTTとD3の企業枠は研究所比較・キャリア判断に限定し、独立論文、JAISTの博士インターン単位、博士論文の必須章には数えません。
              </p>
            </div>
          </div>

          <div className="internship-windows" aria-label="企業研究インターンの時期">
            {internshipWindows.map((window) => (
              <article className={window.status === "入れない" ? "is-avoid" : ""} key={window.status}>
                <div>
                  <span>{window.status}</span>
                  <time>{window.time}</time>
                </div>
                <h3>{window.title}</h3>
                <p>{window.text}</p>
              </article>
            ))}
          </div>

          <div className="internship-score three-year-conditions">
            <div className="internship-score-copy">
              <p className="eyebrow">THREE-YEAR CONDITIONS</p>
              <h3>三回実施するための、八つの条件</h3>
              <p>短期枠は、直前の論文と学位ゲートを通過した回だけ実施します。条件を満たさない中止は失敗ではなく、計画どおりの判断です。</p>
              <div>
                <span><b>長期</b> D1に1回</span>
                <span><b>短期</b> D2・D3で0〜2回</span>
                <span><b>上限</b> 企業3回・合計約4か月相当</span>
              </div>
            </div>
            <ol>
              {internshipThreeYearRules.map((rule, index) => (
                <li key={rule}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{rule}</p>
                  <em>必須</em>
                </li>
              ))}
            </ol>
          </div>

          <div className="subsection-heading internship-subheading">
            <div>
              <p className="eyebrow">THREE DIFFERENT CLOCKS</p>
              <h3>2か月と3か月は、別の条件</h3>
            </div>
            <p>
              添付調査で混在していた期間を整理しました。2026年7月時点の公開情報であり、実施年度の履修案内と書面回答で確定します。
            </p>
          </div>

          <div className="internship-rule-grid">
            {internshipRules.map((rule) => (
              <article key={rule.label}>
                <span className="fact-badge">{rule.label}</span>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
                <ExternalLink href={rule.href} className="text-link">
                  公式情報を開く
                </ExternalLink>
              </article>
            ))}
          </div>

          <div className="internship-correction">
            <strong>この計画の扱い</strong>
            <p>
              6〜8週間〜2か月の企業インターンは、論文と就職判断のために実施する。JAISTの博士課程2単位を狙う場合は、
              <b>高度な内容・合計おおむね3か月・事前承認</b>
              を別途満たせるか、2027年度に教育支援課へ書面で確認する。
            </p>
          </div>

          <div className="internship-procedure-grid">
            {internshipProcedures.map((procedure) => (
              <article key={procedure.step}>
                <span>{procedure.step}</span>
                <h3>{procedure.title}</h3>
                <p>{procedure.text}</p>
              </article>
            ))}
          </div>

          <div className="subsection-heading internship-subheading">
            <div>
              <p className="eyebrow">LONG / PAPER CANDIDATES</p>
              <h3>D1長期とD3条件枠の候補</h3>
            </div>
            <p>
              報酬・期間は2026年度または2026年7月確認時点です。D1はCyberAgentを本命にし、OMRON・SonyはD3で実施条件が合う場合だけ再検討します。
            </p>
          </div>

          <div className="internship-candidate-grid">
            {internshipCandidates.map((candidate) => (
              <article key={candidate.name}>
                <div className="internship-candidate-top">
                  <span>{candidate.rank}</span>
                  <p>{candidate.role}</p>
                </div>
                <h3>{candidate.name}</h3>
                <dl>
                  <div>
                    <dt>公開情報</dt>
                    <dd>{candidate.facts}</dd>
                  </div>
                  <div>
                    <dt>研究との接続</dt>
                    <dd>{candidate.fit}</dd>
                  </div>
                  <div>
                    <dt>確認事項</dt>
                    <dd>{candidate.caution}</dd>
                  </div>
                </dl>
                <ExternalLink href={candidate.href} className="text-link">
                  公式ページ
                </ExternalLink>
              </article>
            ))}
          </div>

          <div className="internship-choice">
            <div>
              <span>D1 · 論文</span>
              <strong>CyberAgent AI Lab</strong>
              <p>既存共同研究を2か月で国際論文へ進める本命。2027年度の募集時期・テーマは再確認する。</p>
            </div>
            <div>
              <span>D2 · 研究所探索</span>
              <strong>NTT R&amp;D</strong>
              <p>海外論文を投稿後、2月に2〜3週間だけ。知財はNTT帰属のため論文本命にはしない。</p>
            </div>
            <div>
              <span>D3 · 条件付き</span>
              <strong>OMRON / Sony</strong>
              <p>OMRONの1か月可テーマが第一候補。Sonyの現行3か月・週2日以上は高リスクで、原則は面談候補。</p>
            </div>
          </div>

          <div className="subsection-heading internship-subheading">
            <div>
              <p className="eyebrow">D2 SHORT RESEARCH-LAB SLOT</p>
              <h3>NTT R&amp;Dは、D2の短期本命</h3>
            </div>
            <p>
              研究テーマとの相性と大企業研究所を比較する価値は高い一方、知財・期間から論文本命にはしません。海外成果を1月末までに投稿できた場合だけ、2029年2月に実施します。
            </p>
          </div>

          <div className="short-internship-focus">
            <div className="short-internship-window">
              <p className="eyebrow">CONDITIONAL · D2 WINTER</p>
              <strong>2029.02</strong>
              <span>2025年度冬期実績：2〜3週間程度</span>
            </div>
            <div className="short-internship-copy">
              <span className="fact-badge">NTT R&amp;D</span>
              <h3>対話・社会的信号・エージェントを、高密度に試す。</h3>
              <p>
                2025年度冬期は翌年1〜3月の2〜3週間、2026年度夏期は全体目安4週間でした。2026年度夏期実績では、日当9,000円、条件付きの交通・宿泊支援、指導教員承認、第5希望までのテーマ選択がありました。成果の知財はNTT帰属で、守秘・知財契約が必要です。
              </p>
              <ExternalLink
                href="https://www.ntt-labs.jp/saiyo/internship/recruitment1/"
                className="text-link"
              >
                冬期の公式募集要項
              </ExternalLink>
            </div>
          </div>

          <div className="internship-theme-grid short-theme-grid">
            {nttInternshipThemes.map((theme) => (
              <article key={theme.key}>
                <div>
                  <span>{theme.key}</span>
                  <small>{theme.label}</small>
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>

          <div className="internship-correction short-internship-rule">
            <strong>NTTを実施する条件</strong>
            <p>
              <b>海外論文を2029年1月末までに投稿済み・帰国後8週間・体調安定・2〜3週間の適合テーマ</b>
              をすべて満たした場合だけ実施します。4週間を超えるテーマ、公開条件が不明なテーマ、海外研究中の選考負荷が大きい場合は中止します。
            </p>
          </div>

          <div className="subsection-heading compact-subheading">
            <div>
              <p className="eyebrow">REPLACEMENT OPTIONS · NOT ADDITIONS</p>
              <h3>短期候補は、追加せず入れ替える</h3>
            </div>
            <p>
              豊田中央研究所などはCyberAgentまたはNTTが不成立のときの補欠です。企業4回目として追加せず、実施年度の募集・テーマ・待遇を再確認します。
            </p>
          </div>

          <div className="short-candidate-grid">
            {shortInternshipCandidates.map((candidate) => (
              <article key={candidate.name}>
                <div>
                  <span>{candidate.period}</span>
                  <small>{candidate.role}</small>
                </div>
                <h3>{candidate.name}</h3>
                <p>{candidate.facts}</p>
                <p className="short-candidate-caution">{candidate.caution}</p>
                <div className="short-candidate-links">
                  <ExternalLink href={candidate.href} className="text-link">
                    {candidate.secondaryHref ? "Panasonic公式" : "公式ページ"}
                  </ExternalLink>
                  {candidate.secondaryHref && (
                    <ExternalLink href={candidate.secondaryHref} className="text-link">
                      東芝公式
                    </ExternalLink>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="subsection-heading compact-subheading">
            <div>
              <p className="eyebrow">TOYOTA RESEARCH ECOSYSTEM</p>
              <h3>トヨタ系は、目的を分けて見る</h3>
            </div>
            <p>
              同じトヨタ系でも、研究所探索、車載応用、実装キャリア、海外研究では役割が異なります。一つの順位ではなく、博士計画上の用途で選びます。
            </p>
          </div>

          <div className="toyota-ecosystem-grid">
            {toyotaEcosystem.map((candidate) => (
              <article key={candidate.name}>
                <span>{candidate.category}</span>
                <h3>{candidate.name}</h3>
                <p>{candidate.value}</p>
                <strong>{candidate.rule}</strong>
                <ExternalLink href={candidate.href} className="text-link">
                  公式情報
                </ExternalLink>
              </article>
            ))}
          </div>

          <div className="internship-choice internship-strategy">
            {internshipStrategyOptions.map((option) => (
              <div key={option.label}>
                <span>{option.label}</span>
                <strong>{option.title}</strong>
                <p>{option.text}</p>
              </div>
            ))}
          </div>

          <div className="subsection-heading internship-subheading">
            <div>
              <p className="eyebrow">D1 LONG SLOT · RESEARCH QUESTION</p>
              <h3>D1の8週間で答える一問</h3>
            </div>
            <p>
              新しいテーマを探す期間にはしません。「推定 → 予測 → 適応」の博士研究から、企業環境でしか検証できない一問を切り出します。
            </p>
          </div>

          <div className="internship-theme-grid">
            {internshipThemes.map((theme) => (
              <article key={theme.key}>
                <div>
                  <span>{theme.key}</span>
                  <small>{theme.label}</small>
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>

          <div className="internship-output-grid">
            {internshipOutputModels.map((model) => (
              <article key={model.key}>
                <div>
                  <span>型 {model.key}</span>
                  <em>{model.verdict}</em>
                </div>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
              </article>
            ))}
          </div>

          <div className="subsection-heading internship-subheading">
            <div>
              <p className="eyebrow">D1 LONG SLOT · 8-WEEK EXECUTION</p>
              <h3>D1長期枠は、開始前に半分終わらせる</h3>
            </div>
            <p>
              企業内の8週間は実験に集中します。問い、許可、倫理、契約は100%完了し、終了時に原稿60〜80%と投稿までの担当を持ち帰ります。
            </p>
          </div>

          <div className="internship-execution">
            <div className="internship-readiness">
              <p className="eyebrow">DAY 0 READINESS</p>
              <h3>開始時の完成度</h3>
              <dl>
                {internshipReadiness.map(([item, target, detail]) => (
                  <div key={item}>
                    <dt>{item}</dt>
                    <dd>
                      <strong>{target}</strong>
                      <span>{detail}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <ol>
              {eightWeekPlan.map(([week, action]) => (
                <li key={week}>
                  <span>WEEK {week}</span>
                  <p>{action}</p>
                </li>
              ))}
            </ol>
          </div>

          <details className="internship-details">
            <summary>
              <span>
                <small>BEFORE SIGNING</small>
                契約前チェックリスト
              </span>
              <i aria-hidden="true">＋</i>
            </summary>
            <p>
              オファー受諾後ではなく、テーマ面談または契約確認時に書面でそろえます。特に「公開できる」と「博士論文へ使える」は別の質問です。
            </p>
            <div>
              {internshipContractGroups.map((group) => (
                <section key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </details>

          <div className="internship-score">
            <div className="internship-score-copy">
              <p className="eyebrow">ACCEPTANCE SCORE · 18 POINTS</p>
              <h3>雰囲気ではなく、9項目で受諾する</h3>
              <p>各項目0〜2点。論文公開または知財・博士論文利用が0点なら、総得点にかかわらず中核研究にはしません。</p>
              <div>
                <span><b>15–18</b> 博士論文の中心候補</span>
                <span><b>11–14</b> キャリア形成として実施</span>
                <span><b>0–10</b> 辞退または短期訪問</span>
              </div>
            </div>
            <ol>
              {internshipScoreRows.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                  <em>0 · 1 · 2</em>
                </li>
              ))}
            </ol>
          </div>

          <div className="internship-risk-list">
            <div>
              <p className="eyebrow">RISK CONTROL</p>
              <h3>論文にならない原因を、契約前に消す</h3>
            </div>
            <dl>
              {internshipRisks.map(([risk, response]) => (
                <div key={risk}>
                  <dt>{risk}</dt>
                  <dd>{response}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="subsection-heading internship-subheading">
            <div>
              <p className="eyebrow">APPLICATION PREPARATION</p>
              <h3>2026年から作る応募導線</h3>
            </div>
            <p>
              募集は年度ごとに変わります。CyberAgentはD1春、NTT冬期は過去実績を参考に前年10月頃から監視し、D3候補は2028年秋から期間条件を確認します。
            </p>
          </div>

          <div className="internship-prep">
            {internshipPrep.map((phase, index) => (
              <article key={phase.time}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{phase.time}</time>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </article>
            ))}
          </div>

          <div className="internship-funding">
            {internshipFundingNotes.map((note) => (
              <article key={note.label}>
                <span className="fact-badge">{note.label}</span>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>

          <div className="internship-gates">
            <div className="internship-go">
              <p className="eyebrow">GO</p>
              <h3>D1長期枠を受ける条件</h3>
              <ul>
                {internshipGo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="internship-reject">
              <p className="eyebrow">DECLINE / REDESIGN</p>
              <h3>D1長期枠を断る、または再設計する条件</h3>
              <ul>
                {internshipReject.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section overseas-section" id="overseas">
          <SectionHeading
            number="05"
            eyebrow="OVERSEAS RESEARCH · PRIMARY PLAN"
            title="D2の海外枠は、大学か企業の一つ"
            text="2028年9〜11月の3か月は、海外大学研究留学または海外企業研究インターンの一つだけを実施。D1で両方を探索し、D2の6月末までに条件の良い一枠へ決めます。"
          />

          <div className="overseas-hero">
            <div className="overseas-date">
              <span>D2 · 3 MONTHS</span>
              <strong>2028.09—11</strong>
              <p>
                Visiting PhD等または海外企業のResearch Intern ＋ JAISTの必要手続き。
                大学枠はJAIST助成・JSPS・受入先支援、企業枠は給与・ビザ・知財条件を比較する。
              </p>
            </div>
            <div className="overseas-why">
              <p className="eyebrow">WHY THIS WINDOW</p>
              <h3>研究を始めに行くのではなく、完成させに行く。</h3>
              <p>
                D1末までに博士研究の位置付けを決め、D2春〜夏に倫理・契約・実装・予備実験を終えます。大学か企業かに関係なく、D3前に投稿期間を残せる条件を優先します。
              </p>
            </div>
          </div>

          <div className="overseas-roadmap" aria-label="海外研究留学の準備工程">
            {overseasRoadmap.map((phase, index) => (
              <article key={phase.time}>
                <span className="phase-index">{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">{phase.label}</p>
                <time>{phase.time}</time>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </article>
            ))}
          </div>

          <div className="subsection-heading overseas-subheading">
            <div>
              <p className="eyebrow">RESEARCH QUESTION</p>
              <h3>海外へ行く必然性を、研究テーマにする</h3>
            </div>
            <p>
              受入先は知名度ではなく、固有のデータ・設備・方法、3か月での完結性、定期指導、投稿可否、帰国後の継続性で選びます。
            </p>
          </div>

          <div className="overseas-theme-grid">
            {overseasThemes.map((theme) => (
              <article key={theme.key}>
                <div>
                  <span>{theme.key}</span>
                  <small>{theme.label}</small>
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>

          <div className="subsection-heading overseas-subheading">
            <div>
              <p className="eyebrow">3-MONTH EXECUTION</p>
              <h3>出発前から帰国までの完成条件</h3>
            </div>
            <p>
              現地の3か月を探索期間にしません。研究質問と条件を先に固定し、毎月の出口を論文の完成度で測ります。
            </p>
          </div>

          <div className="overseas-execution">
            {overseasExecution.map((phase) => (
              <article key={phase.label}>
                <p className="eyebrow">{phase.label}</p>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <details className="overseas-operations" open>
            <summary>
              <span>
                <small>OPERATIONS CHECK</small>
                倫理・データ・知財・ビザの実務
              </span>
              <i aria-hidden="true">＋</i>
            </summary>
            <div>
              {overseasChecks.map((check) => (
                <section key={check.title}>
                  <h3>{check.title}</h3>
                  <ul>
                    {check.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p>
              倫理審査には8〜12週間の余裕を置きます。制度・手続き・ビザは年度と国・受入身分で変わるため、2028年度の公式資料と担当窓口で再確認します。
            </p>
          </details>

          <details className="overseas-operations overseas-exploration">
            <summary>
              <span>
                <small>OPTIONS &amp; EXPLORATION</small>
                留学形態・第二候補・外部資金・受入先の選び方
              </span>
              <i aria-hidden="true">＋</i>
            </summary>
            <div>
              {overseasExploration.map((group) => (
                <section key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p>
              第二候補や外部制度は本命計画を増やすためではなく、本命が成立しない場合の代替案です。募集・利用資格・受入条件は申請年度に公式情報で確認します。
            </p>
          </details>

          <div className="subsection-heading overseas-subheading">
            <div>
              <p className="eyebrow">OVERSEAS CORPORATE ALTERNATIVE</p>
              <h3>海外企業は、大学留学の追加ではなく代替</h3>
            </div>
            <p>
              MERL、HRI-USA、TRIは大学留学と同じ3か月級です。両方へ応募して構いませんが、実施は一つに絞り、同じ論文・知財・指導・資金の評価表で比較します。
            </p>
          </div>

          <div className="internship-candidate-grid overseas-company-grid">
            {overseasCompanyCandidates.map((candidate) => (
              <article key={candidate.name}>
                <div className="internship-candidate-top">
                  <span>{candidate.rank}</span>
                  <p>{candidate.role}</p>
                </div>
                <h3>{candidate.name}</h3>
                <dl>
                  <div>
                    <dt>2026公募</dt>
                    <dd>{candidate.facts}</dd>
                  </div>
                  <div>
                    <dt>研究との接続</dt>
                    <dd>{candidate.fit}</dd>
                  </div>
                  <div>
                    <dt>確認事項</dt>
                    <dd>{candidate.caution}</dd>
                  </div>
                </dl>
                <ExternalLink href={candidate.href} className="text-link">
                  公式ページ
                </ExternalLink>
              </article>
            ))}
          </div>

          <div className="internship-correction overseas-company-rule">
            <strong>判断期限：2028年6月末</strong>
            <p>
              大学と企業の採否が出たら、<b>国際論文の実現性、博士論文利用、知財、週次指導、終了後アクセス、ビザ、資金</b>
              を比較します。条件の良い一枠だけを受諾し、もう一方は辞退します。2026年の募集実績を2028年の確約とは扱いません。
            </p>
          </div>

          <div className="subsection-heading overseas-subheading">
            <div>
              <p className="eyebrow">FUNDING · JSPS</p>
              <h3>在学中の留学資金と、修了後の海外制度を分ける</h3>
            </div>
            <p>
              「JSPSの海外留学」は一つの制度ではありません。3か月留学に使える可能性がある枠、欧州限定の条件付き支援、修了後2年間の制度を区別します。
            </p>
          </div>

          <div className="jsps-grid">
            <article className="jaist-grant-card">
              <div className="jsps-card-top">
                <span className="fact-badge">{jaistOverseasGrant.label}</span>
                <small>2028年度に再確認</small>
              </div>
              <h3>{jaistOverseasGrant.title}</h3>
              <p>{jaistOverseasGrant.body}</p>
              <div className="jsps-action">
                <strong>この計画での扱い</strong>
                <p>{jaistOverseasGrant.action}</p>
              </div>
              <ExternalLink href={jaistOverseasGrant.href} className="text-link">
                JAIST現行実施要項
              </ExternalLink>
            </article>
            {jspsRoutes.map((route) => (
              <article key={route.title}>
                <div className="jsps-card-top">
                  <span className="fact-badge">{route.label}</span>
                  <small>{route.status}</small>
                </div>
                <h3>{route.title}</h3>
                <p>{route.body}</p>
                <div className="jsps-action">
                  <strong>この計画での扱い</strong>
                  <p>{route.action}</p>
                </div>
                <ExternalLink href={route.href} className="text-link">
                  JSPS公式情報
                </ExternalLink>
              </article>
            ))}
          </div>

          <div className="overseas-money">
            <div className="overseas-cost-total">
              <p className="eyebrow">GROSS COST · BEFORE FUNDING</p>
              <strong>76—190<small>万円</small></strong>
              <p>
                助成前の3か月総費用。JAISTの授業料、日本の住居・通信・車などの固定費は別に確認し、採択後に自己負担額を再計算します。
              </p>
            </div>
            <dl>
              {overseasCosts.map(([label, amount]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{amount}</dd>
                </div>
              ))}
            </dl>
            <div className="overseas-order">
              <p className="eyebrow">LIFE ORDER</p>
              <ol>
                <li>D1〜D2前半は寮</li>
                <li>車を買わない</li>
                <li>海外研究留学を実行</li>
                <li>帰国後に引っ越し・車を再判定</li>
              </ol>
            </div>
          </div>

          <div className="overseas-gates">
            <div className="overseas-go">
              <p className="eyebrow">GO · 2028.08</p>
              <h3>すべてそろえば出発</h3>
              <ul>
                {overseasGo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="overseas-delay">
              <p className="eyebrow">DELAY / REDESIGN</p>
              <h3>一つでも重大なら延期</h3>
              <ul>
                {overseasDelay.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section degree-section" id="degree">
          <SectionHeading
            number="06"
            eyebrow="DEGREE & SUPPORT"
            title="学位の公式要件と、申請候補の支援制度"
            text="修了要件は制度上の基準です。日程表はJAISTの標準月と個人の内部締切を分けて表示し、各年度に最新版へ差し替えます。"
          />

          <div className="official-note">
            <span className="fact-badge">公式情報</span>
            <p>
              2026年7月26日時点で確認できる公開情報を基準にしています。「内部目標」は余裕を持たせた個人の締切です。研究領域独自の条件や正確な提出日は、指導教員・教務・担当窓口へ確認します。
            </p>
          </div>

          <div className="degree-layout">
            <div className="requirements-card">
              <p className="eyebrow">2026年度 修了要件</p>
              <h3>20単位以上 ＋ 論文審査</h3>
              <dl>
                {degreeRequirements.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p>
                全学共通の「第一著者論文○本」という公開数値は確認できないため、D1開始時に研究領域の期待水準を確認する。
              </p>
            </div>

            <div className="milestone-list">
              <p className="eyebrow">2030年3月から逆算</p>
              {degreeMilestones.map((milestone) => (
                <div key={`${milestone.time}-${milestone.standard}`}>
                  <span className="period">{milestone.time}</span>
                  <p>
                    <span className="milestone-standard">
                      <b>標準月・公式確認</b>
                      {milestone.standard}
                    </span>
                    <span className="milestone-internal">
                      <b>内部目標</b>
                      {milestone.internal}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="subsection-heading support-heading">
            <div>
              <p className="eyebrow">JAIST SUPPORT</p>
              <h3>申請候補の支援制度</h3>
            </div>
            <p>対象者でも採択や利用が保証されるわけではありません。活動内容と申請年度の要項で確認します。</p>
          </div>

          <div className="support-grid">
            {supportPrograms.map((program) => (
              <article key={program.title}>
                <span className="fact-badge">{program.label}</span>
                <h3>{program.title}</h3>
                <p>{program.body}</p>
                <div>
                  <strong>この計画での確認</strong>
                  <p>{program.action}</p>
                </div>
                <ExternalLink href={program.href} className="text-link">
                  公式情報を開く
                </ExternalLink>
              </article>
            ))}
          </div>

          <div className="support-warning">
            <strong>制度を分けて確認</strong>
            <ul>
              <li>
                <b>国内研究滞在：</b>
                研究留学助成の期間・対象条件を学生支援課留学生係へ確認。
              </li>
              <li>
                <b>企業インターン：</b>
                インターンシップ助成の対象活動・経費をキャリア支援へ確認。
              </li>
              <li>
                <b>単位認定：</b>
                副テーマ・博士インターンの条件を、助成とは別に教務へ確認。
              </li>
            </ul>
          </div>
        </section>

        <section className="section career-section" id="career">
          <SectionHeading
            number="07"
            eyebrow="CAREER"
            title="就活は早く始め、D3前半で終える"
            text="D3後半に選考を残すと、学位論文骨子・予備審査・提出と衝突します。探索はD1、体験はD2、決定はD3前半へ。"
          />

          <div className="career-layout">
            <ol className="career-track">
              {careerSteps.map(([time, action], index) => (
                <li key={time}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="period">{time}</span>
                  <p>{action}</p>
                </li>
              ))}
            </ol>
            <aside className="career-decision">
              <p className="eyebrow">DECISION POINT</p>
              <h3>2029年3月までに、進路を仮決定。</h3>
              <p>
                企業AI・ロボティクス研究職、企業R&amp;D、国立研究機関、ポスドク、大学教員、海外就職を比較する。
              </p>
              <ul>
                <li>企業：2029年6月までの主要選考終了を目標</li>
                <li>アカデミア：2029年春から公募・JSPS PD等を確認</li>
                <li>着任遅延に備え、修了後3〜6か月分の生活費を確保</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section life-section" id="life">
          <SectionHeading
            number="08"
            eyebrow="LIFE & MONEY"
            title="暮らしも、博士課程の設計に入れる"
            text="引っ越し、車、山小屋、恋愛、健康は研究の外側ではありません。固定費と時間を先に見積もり、実行条件を明確にします。"
          />

          <div className="life-grid">
            {lifeCards.map((card, index) => (
              <article key={card.label}>
                <div className="life-index">{String(index + 1).padStart(2, "0")}</div>
                <p className="eyebrow">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="life-rule">
                  <span>実行条件</span>
                  <p>{card.rule}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="money-heading">
            <div>
              <p className="eyebrow">MONTHLY BUDGET</p>
              <h3>授業料の月割りを含む生活費</h3>
            </div>
            <p>金額は計画範囲。契約前に、実際の収入・為替・助成・物件条件で更新します。</p>
          </div>

          <div className="budget-grid">
            {budgets.map((budget, index) => (
              <article className={index === 0 ? "recommended" : ""} key={budget.name}>
                {index === 0 && <span className="plan-badge">基準</span>}
                <p className="eyebrow">{budget.name}</p>
                <strong>{budget.monthly}</strong>
                <span>{budget.annual}</span>
                <p>{budget.description}</p>
              </article>
            ))}
          </div>

          <div className="cost-layout">
            <div>
              <p className="eyebrow">ONE-TIME COSTS</p>
              <h3>一時費用の計画範囲</h3>
              <dl>
                {oneTimeCosts.map(([label, amount]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{amount}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="money-rules">
              <p className="eyebrow">MONEY RULES</p>
              <h3>大型支出の5原則</h3>
              <ol>
                <li>引っ越し・車・海外留学を同じ半年に重ねない</li>
                <li>授業料納付月を含む資金繰り表を作る</li>
                <li>生活防衛資金6か月を残す</li>
                <li>助成確定前に返金不能な契約をしない</li>
                <li>インターン収入は留学・引っ越し・予備費へ</li>
              </ol>
            </div>
          </div>

          <div className="funding-note">
            <p className="eyebrow">資金の優先順位</p>
            <p>
              <strong>DC1申請済みならJSPS DC1</strong>。未申請・不採用ならJAIST
              SPRING、申請可能であればDC2、次にUA・TA・RA、有給研究インターン。併給や有償業務の扱いは採用年度の手引きで確認します。
            </p>
          </div>
        </section>

        <section className="section decisions-section" id="decisions">
          <SectionHeading
            number="09"
            eyebrow="DECISION GATES"
            title="予定ではなく、条件で決める"
            text="その時点で条件がそろっていなければ、延期・縮小・中止できるようにします。"
          />

          <div className="gate-grid">
            {decisionGates.map((gate) => (
              <article key={`${gate.time}-${gate.title}`}>
                <div className="gate-title">
                  <span className="period">{gate.time}</span>
                  <h3>{gate.title}</h3>
                </div>
                <div className="gate-go">
                  <span>GO</span>
                  <p>{gate.go}</p>
                </div>
                <div className="gate-stop">
                  <span>ADJUST</span>
                  <p>{gate.stop}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="load-map">
            <div className="load-column busy">
              <p className="eyebrow">BUSY SEASONS</p>
              <h3>繁忙期</h3>
              <dl>
                {busyPeriods.map(([time, load]) => (
                  <div key={time}>
                    <dt>{time}</dt>
                    <dd>{load}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="load-column recovery">
              <p className="eyebrow">PROTECTED MARGIN</p>
              <h3>先に確保する余白</h3>
              <dl>
                {recoveryWindows.map(([time, margin]) => (
                  <div key={time}>
                    <dt>{time}</dt>
                    <dd>{margin}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="risk-block">
            <div className="risk-intro">
              <p className="eyebrow">EARLY WARNING</p>
              <h3>崩れる前に見つける</h3>
              <p>
                問題が起きてから頑張るのではなく、早期警戒のサインを月末レビューで確認します。
              </p>
            </div>
            <div className="risk-table">
              {riskRows.map(([risk, signal, response]) => (
                <div key={risk}>
                  <strong>{risk}</strong>
                  <p>
                    <span>警戒</span>
                    {signal}
                  </p>
                  <p>
                    <span>対応</span>
                    {response}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section sources-section" id="sources">
          <SectionHeading
            number="10"
            eyebrow="SOURCES & UPDATES"
            title="参考資料と更新ルール"
            text="制度・募集・学会締切は変わります。公式資料と個人の計画案を分け、定期的に差し替えます。"
          />

          <div className="source-grid">
            {sourceGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <ExternalLink href={link.href} className="source-link">
                        {link.label}
                      </ExternalLink>
                      {link.note && <p>{link.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="update-rules">
            <div>
              <span>毎月末</span>
              <p>研究・資金・健康・予定を60〜90分レビュー</p>
            </div>
            <div>
              <span>毎四半期</span>
              <p>ロードマップとリスク表を更新</p>
            </div>
            <div>
              <span>毎年4月</span>
              <p>履修案内・支援制度・締切・募集を最新版へ</p>
            </div>
            <div>
              <span>外部活動6か月前</span>
              <p>研究・倫理・データ・著者・知財・投稿先を再確認</p>
            </div>
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow">A LIVING PLAN</p>
          <blockquote>
            問いを深く。
            <br />
            成果を外へ。
            <br />
            生活を長く。
          </blockquote>
          <p>
            この計画は、達成項目を増やすための一覧ではありません。
            <br />
            博士号、研究者としての成長、生活の持続可能性を同時に守るための判断基準です。
          </p>
          <a href="#top">
            ページの先頭へ
            <span aria-hidden="true">↑</span>
          </a>
        </section>
      </main>

      <footer>
        <div>
          <strong>Akihiro Sakuramoto</strong>
          <span>Doctoral Roadmap · JAIST</span>
          <span>
            個人の計画であり、JAISTの公式案内ではありません。制度・金額・締切は毎年度確認します。
          </span>
        </div>
        <p>
          計画基準日 2026.07.26
          <br />
          次回更新：月末レビュー
        </p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
