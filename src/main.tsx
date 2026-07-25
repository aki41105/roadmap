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
  lifeCards,
  nextTwelveMonths,
  oneTimeCosts,
  recoveryWindows,
  researchArc,
  riskRows,
  roadmapItems,
  scenarioOptions,
  sourceGroups,
  supportPrograms,
} from "./data";
import "./styles.css";

const navigation = [
  ["#overview", "全体像"],
  ["#timeline", "年表"],
  ["#research", "研究"],
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
              <p className="eyebrow">INTEGRATED PLAN · LAST UPDATED 2026.07.25</p>
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
                  <dt>大型外部研究</dt>
                  <dd>3 projects / D1–D2</dd>
                </div>
              </dl>
              <p>
                このページの「公式」は2026年7月25日時点の公開情報、「計画」は本人の希望から作った内部目標です。
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
            title="毎年2回ではなく、D1〜D2で3つ"
            text="外部研究を回数で埋めると、D2が過密になり論文化と回復の時間がなくなります。国内・企業・海外を一度ずつ、すべて博士論文へ接続する案を基準にします。"
          />

          <div className="thesis-statement">
            <span>中心方針</span>
            <p>
              博士修了を最優先にしながら、
              <strong>国内研究滞在・企業研究インターン・海外研究留学</strong>
              をD1〜D2へ配置。D3は学位論文と進路確定に集中する。
            </p>
          </div>
          <p className="cadence-note">
            <span>「年2回」の考え方</span>
            毎年2回の長期滞在を固定せず、「大型外部研究1回＋短期訪問または国際学会1回」を基本の探索ペースにします。
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
                <span>D1</span> 修士研究または国内滞在成果を国際会議へ1本投稿
              </li>
              <li>
                <span>D2</span> 企業研究成果1本、海外共同研究1本を投稿
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
              <p className="eyebrow">THREE EXTERNAL PROJECTS</p>
              <h3>外に出る3つの大型案件</h3>
            </div>
            <p>現地でテーマを探すのではなく、準備済みの共同研究を完成させに行く。</p>
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

        <section className="section degree-section" id="degree">
          <SectionHeading
            number="04"
            eyebrow="DEGREE & SUPPORT"
            title="学位の公式要件と、申請候補の支援制度"
            text="修了要件は制度上の基準です。日程表はJAISTの標準月と個人の内部締切を分けて表示し、各年度に最新版へ差し替えます。"
          />

          <div className="official-note">
            <span className="fact-badge">公式情報</span>
            <p>
              2026年7月25日時点で確認できる公開情報を基準にしています。「内部目標」は余裕を持たせた個人の締切です。研究領域独自の条件や正確な提出日は、指導教員・教務・担当窓口へ確認します。
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
            number="05"
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
            number="06"
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
            number="07"
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
            number="08"
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
          計画基準日 2026.07.25
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
