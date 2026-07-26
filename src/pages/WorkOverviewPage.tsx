import { Lead, Section } from "./PageKit";

const workPeriods = [
  {
    period: "2027.07–09",
    dateTime: "2027-07",
    label: "D1 企業研究インターン",
    purpose:
      "共同研究を短期間で前進させ、博士研究につながる最初の成果を作ります。",
    outputs: ["主な実験結果", "再現可能なコード", "投稿原稿の土台"],
  },
  {
    period: "2028.06–08",
    dateTime: "2028-06",
    label: "D2 企業研究インターン",
    purpose:
      "異なる研究環境を経験し、研究成果と就職先を比べる材料を作ります。",
    outputs: ["研究の主結果", "投稿可能な原稿", "企業比較メモ"],
  },
  {
    period: "D1–D2",
    dateTime: "2027-04",
    label: "早めの就活・比較",
    purpose:
      "企業研究職とアカデミアを早くから比較し、D3まで選択肢を残します。",
    outputs: ["候補分野の短いリスト", "研究実績の整理", "判断基準"],
  },
  {
    period: "2029.04–09",
    dateTime: "2029-04",
    label: "D3 就職決定・条件付きインターン",
    purpose:
      "博士論文を最優先にしながら就職先を決め、余裕がある場合だけ短期インターンを行います。",
    outputs: ["進路決定", "博士論文との両立判断", "必要な場合の就職先比較メモ"],
  },
] as const;

export function WorkOverviewPage() {
  return (
    <div className="rm-work-overview">
      <Lead>
        インターンと就活の大きな時期だけを確認できます。項目を押すと目的と成果が開きます。
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
