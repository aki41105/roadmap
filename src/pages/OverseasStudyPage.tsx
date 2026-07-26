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
        D1の2027年10月から2028年3月まで、海外の研究環境に腰を据えて
        共同研究を進める6か月を置きます。
      </Lead>

      <Section id="period" title="予定している期間">
        <details className="rm-details">
          <summary>
            <time dateTime="2027-10">2027.10–2028.03</time>
            <span>海外研究留学</span>
          </summary>
          <KeyValueList
            items={[
              [
                "目的",
                "D1夏までの成果を別の研究環境で深め、博士論文の一章と投稿原稿につながる共同研究にする。",
              ],
              ["期間", "約6か月"],
              [
                "出発前",
                "2027年9月はインターン成果の整理、回復、渡航準備だけに使う。",
              ],
              [
                "在籍・制度",
                "2027年度のD1として利用できる受入身分、JAIST手続き、資金制度を開始前に確認する。",
              ],
              ["D2を守る条件", "終了日は2028年3月末に固定し、D2へ延長しない。"],
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
