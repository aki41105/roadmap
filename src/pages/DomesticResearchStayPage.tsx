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
        M2末からD1開始にかけて、研究方法を深めて博士研究の土台を作る
        国内滞在研究を置きます。
      </Lead>

      <Section id="period" title="予定している期間">
        <details className="rm-details">
          <summary>
            <time dateTime="2027-02">2027.02–04</time>
            <span>国内滞在研究</span>
          </summary>
          <KeyValueList
            items={[
              [
                "目的",
                "研究方法と分析の根拠を深め、D1開始後の博士研究へ接続できる成果を作る。",
              ],
              ["期間", "約2〜3か月"],
              [
                "在籍上の注意",
                "M2と博士後期課程D1をまたぐため、期間ごとの受入身分、JAIST手続き、指導体制、資金の適用可否を開始前に確認する。",
              ],
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
