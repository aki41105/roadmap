import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Phase = {
  id: string;
  period: string;
  label: string;
  title: string;
  theme: string;
  status?: string;
  goals: string[];
  checkpoint: string;
};

const phases: Phase[] = [
  {
    id: "m2",
    period: "2026.07 — 2027.03",
    label: "NOW · MASTER'S 2",
    title: "修士研究を、博士研究の出発点にする",
    theme: "問いを絞る / 研究の型をつくる",
    status: "現在地",
    goals: [
      "MIRU 2026で発表し、議論を次の実験設計に反映する",
      "実環境HRIにおける対話品質・ラポール推定を修士論文としてまとめる",
      "博士後期課程で追う中心的な研究問いと3年間の検証計画を定める",
      "進学手続き、奨学金・研究費、研究倫理の準備を完了する",
    ],
    checkpoint: "修士論文提出・博士後期課程への進学",
  },
  {
    id: "d1",
    period: "2027.04 — 2028.03",
    label: "DOCTORAL 1",
    title: "博士研究の土台を固める",
    theme: "基盤構築 / 最初の国際発信",
    goals: [
      "関連領域の体系的レビューを行い、研究の位置づけを明確にする",
      "再現可能なデータ処理・評価パイプラインを整備する",
      "博士研究の基盤となるデータ収集と第一段階の実験を完了する",
      "国際会議への初投稿と、研究コミュニティでの継続的な発信を行う",
    ],
    checkpoint: "研究基盤・評価方法・最初の国際会議投稿",
  },
  {
    id: "d2",
    period: "2028.04 — 2029.03",
    label: "DOCTORAL 2",
    title: "研究を広げ、外で鍛える",
    theme: "発展 / 国際連携 / 論文化",
    goals: [
      "異なる状況・対象への展開を行い、モデルの一般性を検証する",
      "実環境での長期的・多地点な評価に挑戦する",
      "国際共同研究、研究滞在、またはインターンシップを実現する",
      "中核成果をジャーナル論文として投稿し、中間審査に備える",
    ],
    checkpoint: "中間審査・中核となる査読論文の投稿",
  },
  {
    id: "d3",
    period: "2029.04 — 2030.03",
    label: "DOCTORAL 3",
    title: "成果を統合し、次の場所へつなぐ",
    theme: "統合 / 学位論文 / キャリア",
    goals: [
      "残る検証実験を完了し、博士研究全体の主張を確定する",
      "主要成果の論文化と博士論文の執筆を計画的に進める",
      "公開可能なデータ・コード・資料を整理し、研究を次へ渡せる形にする",
      "学位審査と並行して、博士後の研究・開発キャリアを具体化する",
    ],
    checkpoint: "博士論文提出・最終審査・博士号取得",
  },
];

const focusAreas = [
  {
    no: "01",
    title: "Research",
    ja: "研究",
    text: "実環境HRIにおける対話の質を、マルチモーダルな社会的信号から理解し評価する。",
  },
  {
    no: "02",
    title: "Publication",
    ja: "発信",
    text: "毎年ひとつ以上の明確な成果を外へ出し、議論と査読を研究の改善に使う。",
  },
  {
    no: "03",
    title: "Network",
    ja: "つながり",
    text: "国内外の研究者との対話、共同研究、研究滞在を通して視野と方法を広げる。",
  },
  {
    no: "04",
    title: "Sustainability",
    ja: "継続",
    text: "集中できる生活、記録の習慣、心身の余白を守り、長い研究を続けられる状態をつくる。",
  },
];

const currentActions = [
  "修士論文の研究問いを一文で説明できる形にする",
  "MIRU 2026のフィードバックを実験計画へ反映する",
  "博士3年間で検証する仮説を、必須・発展・挑戦に分ける",
  "月末に計画を見直し、完了・継続・保留を記録する",
];

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  return (
    <article className={`phase-card ${phase.status ? "is-current" : ""}`}>
      <div className="phase-rail" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="phase-main">
        <header className="phase-header">
          <div>
            <p className="eyebrow">{phase.label}</p>
            <p className="phase-period">{phase.period}</p>
          </div>
          {phase.status && <span className="status">{phase.status}</span>}
        </header>
        <h3>{phase.title}</h3>
        <p className="phase-theme">{phase.theme}</p>
        <ul>
          {phase.goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
        <div className="checkpoint">
          <span>CHECKPOINT</span>
          <strong>{phase.checkpoint}</strong>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <div className="progress-line" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="ページの先頭へ">
          <span>AS</span>
          <span>DOCTORAL ROADMAP</span>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#route">航路</a>
          <a href="#focus">大切にすること</a>
          <a href="#now">今やること</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">RESEARCH LOG · 2026—2030</p>
            <h1 id="hero-title">
              博士修了までの
              <br />
              <em>研究航路</em>
            </h1>
            <p className="hero-lede">
              今の研究を博士研究へ育て、問いを深め、成果を外へ届ける。
              <br />
              2030年3月の博士修了までを見渡す、更新し続ける計画です。
            </p>
          </div>
          <aside className="hero-facts" aria-label="計画の基本情報">
            <div>
              <span>START</span>
              <strong>2026.07</strong>
            </div>
            <div>
              <span>TARGET</span>
              <strong>2030.03</strong>
            </div>
            <div>
              <span>FIELD</span>
              <strong>Human–Robot Interaction</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong>Master's 2 / JAIST</strong>
            </div>
          </aside>
        </section>

        <section className="statement">
          <p>
            「人とロボットの関係の質」を、
            <span>実環境の相互行為から捉えられる研究者になる。</span>
          </p>
        </section>

        <section className="section roadmap" id="route">
          <header className="section-heading">
            <div>
              <p className="eyebrow">01 · THE ROUTE</p>
              <h2>4つの段階</h2>
            </div>
            <p>
              修士研究の仕上げから博士論文まで。各年にひとつ、次の段階へ進むための明確な到達点を置きます。
            </p>
          </header>
          <div className="phase-list">
            {phases.map((phase, index) => (
              <PhaseCard phase={phase} index={index} key={phase.id} />
            ))}
          </div>
        </section>

        <section className="section" id="focus">
          <header className="section-heading">
            <div>
              <p className="eyebrow">02 · PRINCIPLES</p>
              <h2>大切にすること</h2>
            </div>
            <p>論文の本数だけではなく、どんな研究者になりたいかを判断の軸にします。</p>
          </header>
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article className="focus-card" key={item.no}>
                <span className="focus-no">{item.no}</span>
                <p className="eyebrow">{item.title}</p>
                <h3>{item.ja}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section now-section" id="now">
          <div className="now-copy">
            <p className="eyebrow">03 · NEXT 90 DAYS</p>
            <h2>まず、今やること</h2>
            <p>
              遠い目標は、次の90日で動かせる単位まで小さくする。完璧な計画より、毎月更新される計画を選びます。
            </p>
          </div>
          <ol className="action-list">
            {currentActions.map((action, index) => (
              <li key={action}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{action}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="closing">
          <p className="eyebrow">A LIVING PLAN</p>
          <blockquote>問いを深く。成果を外へ。研究を長く。</blockquote>
          <p>
            このページは、研究の進展と選択に合わせて更新します。
            <br />
            計画は約束ではなく、現在地を確かめるための地図です。
          </p>
        </section>
      </main>

      <footer>
        <p>Akihiro Sakuramoto · Doctoral Roadmap</p>
        <p>Last updated · July 2026</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
