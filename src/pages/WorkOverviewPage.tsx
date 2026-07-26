import { Lead, Section } from "./PageKit";

const workPeriods = [
  {
    period: "D1 · 2027.04–2028.03",
    dateTime: "2027-04",
    label: "就活の探索・準備",
    purpose:
      "職種と候補組織を調べ、D2開始時に応募できる共通資料を揃えます。",
    outputs: ["候補組織リスト", "英日CV・研究概要", "応募先の判断基準"],
  },
  {
    period: "2027.07–08",
    dateTime: "2027-07",
    label: "D1 企業研究インターン",
    purpose:
      "共同研究を短期間で前進させ、博士研究につながる最初の成果を作ります。",
    outputs: ["主な実験結果", "再現可能なコード", "投稿原稿の土台"],
  },
  {
    period: "2028.04–05",
    dateTime: "2028-04",
    label: "D2 応募・面接",
    purpose:
      "D2開始と同時に本命候補へ応募し、書類選考と面接を進めます。",
    outputs: ["応募完了", "面接・研究発表", "候補先の絞り込み"],
  },
  {
    period: "2028.06–07",
    dateTime: "2028-06",
    label: "D2 企業研究インターン",
    purpose:
      "異なる研究環境を経験し、研究成果と就職先を比べる材料を作ります。",
    outputs: ["研究の主結果", "投稿可能な原稿", "企業比較メモ"],
  },
  {
    period: "2028.08–2029.03",
    dateTime: "2028-08",
    label: "D2 主要選考・内定比較・承諾",
    purpose:
      "主要選考と内定条件の比較を終え、2029年3月までに進路を確定します。",
    outputs: ["主要選考の完了", "内定・条件比較", "承諾・進路確定"],
  },
  {
    period: "D3 · 2029.04–2030.03",
    dateTime: "2029-04",
    label: "博士論文・審査",
    purpose:
      "新しい応募・選考・インターンは入れず、博士論文と学位審査に集中します。",
    outputs: ["博士論文", "予備審査・本審査", "修了後の移行準備"],
  },
] as const;

export function WorkOverviewPage() {
  return (
    <div className="rm-work-overview">
      <Lead>
        就活はD2の2028年4月に始め、2029年3月までに承諾まで終えます。
        D3へ新しい応募・選考を持ち越しません。項目を押すと目的と成果が開きます。
      </Lead>

      <Section id="schedule" title="インターン・就活の流れ">
        <div>
          {workPeriods.map((item) => (
            <details className="rm-details" key={`${item.period}-${item.label}`}>
              <summary>
                <time dateTime={item.dateTime}>{item.period}</time>
                <span>{item.label}</span>
              </summary>
              <p>{item.purpose}</p>
              <ul className="rm-list">
                {item.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </Section>

      <Section id="details" title="詳しい情報">
        <nav className="rm-section-switcher" aria-label="インターンと就活の詳細">
          <a href="/roadmap/internship-details/">インターンの詳細</a>
          <a href="/roadmap/career/">就活・キャリアの詳細</a>
        </nav>
      </Section>
    </div>
  );
}
