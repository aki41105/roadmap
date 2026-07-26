import { BulletList, KeyValueList, Lead, Section } from "./PageKit";

const deliverables = [
  "相互行為分析のコードブック",
  "研究方法を説明する主要な図表",
  "論文原稿の50〜70%に相当する草稿",
] as const;

export function DomesticResearchStayPage() {
  return (
    <>
      <Lead>
        D1冬に、研究方法を深めて論文の土台を作る国内滞在研究を置きます。
      </Lead>

      <Section id="period" title="予定している期間">
        <details className="rm-details">
          <summary>
            <time dateTime="2028-01">2028.01–02</time>
            <span>国内滞在研究</span>
          </summary>
          <KeyValueList
            items={[
              [
                "目的",
                "研究方法と分析の根拠を深め、D1の研究成果を論文へまとめる。",
              ],
              ["期間", "4〜6週間"],
              ["残す成果", <BulletList items={deliverables} />],
            ]}
          />
        </details>
      </Section>

      <Section id="details" title="詳しい情報">
        <a className="rm-text-link" href="/roadmap/research-stays/#domestic">
          国内滞在研究の候補と条件を見る
          <span aria-hidden="true"> →</span>
        </a>
      </Section>
    </>
  );
}
