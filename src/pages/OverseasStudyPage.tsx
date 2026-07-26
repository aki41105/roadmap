import { BulletList, KeyValueList, Lead, Section } from "./PageKit";

const deliverables = [
  "既存成果を別環境で検証した結果",
  "国際論文へつなげる主要な図表",
  "博士論文へ組み込める研究記録",
] as const;

export function OverseasStudyPage() {
  return (
    <>
      <Lead>
        D2冬に、既存の研究成果を海外の研究環境で検証する期間を置きます。
      </Lead>

      <Section id="period" title="予定している期間">
        <details className="rm-details">
          <summary>
            <time dateTime="2028-11">2028.11–2029.01</time>
            <span>海外研究留学</span>
          </summary>
          <KeyValueList
            items={[
              [
                "目的",
                "D2までの成果を別の研究環境で検証し、博士論文へつながる共同研究にする。",
              ],
              ["期間", "約3か月"],
              ["残す成果", <BulletList items={deliverables} />],
            ]}
          />
        </details>
      </Section>

      <Section id="details" title="詳しい情報">
        <a className="rm-text-link" href="/roadmap/research-stays/#overseas">
          海外研究留学の候補と条件を見る
          <span aria-hidden="true"> →</span>
        </a>
      </Section>
    </>
  );
}
