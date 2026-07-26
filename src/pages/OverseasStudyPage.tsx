import { BulletList, KeyValueList, Lead, Section } from "./PageKit";

const deliverables = [
  "博士論文へ組み込める一章分の成果",
  "国際論文へ投稿できる原稿1本",
  "帰国後も続けられる共同研究計画",
] as const;

export function OverseasStudyPage() {
  return (
    <>
      <Lead>
        D2の2028年9月から2029年2月まで、海外の研究環境に腰を据えて
        共同研究を進める6か月を置きます。
      </Lead>

      <Section id="period" title="予定している期間">
        <details className="rm-details">
          <summary>
            <time dateTime="2028-09">2028.09–2029.02</time>
            <span>海外研究留学</span>
          </summary>
          <KeyValueList
            items={[
              [
                "目的",
                "D2までの成果を別の研究環境で深め、博士論文の一章と投稿原稿につながる共同研究にする。",
              ],
              ["期間", "約6か月"],
              ["修了を守る条件", "終了日は2029年2月末に固定し、D3へ延長しない。"],
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
