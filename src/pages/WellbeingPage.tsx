import {
  busyPeriods,
  lifeCards,
  recoveryWindows,
  riskRows,
} from "../data";
import {
  BulletList,
  Callout,
  Card,
  CardGrid,
  Lead,
  RecordCards,
  Section,
  TupleTable,
  UpdateNotice,
} from "./PageKit";

const weeklyBaseline = [
  ["睡眠", "7〜8時間を基準。平均7時間未満が2週間続けば任意活動を停止"],
  ["食事", "欠食と食欲の変化を確認。外部活動中も食事時間を先に確保"],
  ["運動", "週3回・30分以上を基準。移動や散歩でも継続を優先"],
  ["完全休養", "週1日は研究・就活・アルバイトを入れない"],
  ["研究以外の夜", "平日2夜は研究を入れず、人間関係と生活に残す"],
  ["執筆", "週の固定枠を置き、外部活動後も新規実験より原稿化を優先"],
] as const;

const reviewRhythm = [
  ["週次または隔週", "指導教員面談", "研究質問、実験、投稿、外部活動の衝突を早期確認"],
  ["毎週", "個人レビュー", "睡眠、食事、運動、執筆、予定外の仕事を確認"],
  ["毎月末・60〜90分", "統合レビュー", "進捗、支出、次の90日、判断待ち、リスクを更新"],
  ["四半期", "負荷レビュー", "外部活動の重なりと回復期間、博士論文への接続を再評価"],
  ["外部活動前", "実施判定", "研究・資金・倫理・住居・健康の全条件を確認"],
] as const;

const relationshipPrinciples = [
  "恋愛や結婚を博士課程中の達成期限・KPIにしない",
  "週1回は研究以外の人と会う夜を置く",
  "月2回はJAIST外へ出て、定期コミュニティを一つ持つ",
  "友人、研究室外の人、家族との連絡を外部活動期にも途切れさせない",
  "留学・引っ越し前は、連絡頻度、遠距離、将来の居住地を率直に話す",
  "関係を急いで決めるのではなく、育てられる時間と心身の余白を守る",
] as const;

const activityLimits = [
  ["企業研究", "各夏一社、6〜8週間。並行して別の企業研究を入れない"],
  ["国内滞在", "D1冬に4〜6週間を一回。企業論文未投稿なら縮小"],
  ["海外研究", "D2冬に3か月を一回。D2企業終了から最低8週間"],
  ["一般アルバイト", "週4〜8時間まで。外部活動・投稿期は停止、D3は新規停止"],
  ["山小屋", "3日〜2週間の体験が基本。D1は見送り、1か月なら別活動を一つ削る"],
  ["学会・任意活動", "博士論文・投稿・回復と衝突するものから削る"],
] as const;

const isolationAndHealthRisks = riskRows.filter(([risk]) =>
  ["睡眠悪化", "孤立"].includes(risk),
);

export function WellbeingPage() {
  const relationship = lifeCards.find(
    (card) => card.label === "恋愛・人間関係",
  );
  const health = lifeCards.find((card) => card.label === "健康");
  const work = lifeCards.find((card) => card.label === "山小屋・バイト");

  return (
    <>
      <Lead>
        健康、人間関係、休養は研究の外側ではなく、2030年3月まで研究を続けるための
        前提条件です。恋愛や結婚には締切を置かず、
        「人間関係を育てられる余白を維持する」ことを生活条件にします。
      </Lead>

      <Callout
        title="最優先の停止ルール"
        badge="確定"
        tone="critical"
        headingLevel={2}
      >
        <p>
          睡眠・食欲・研究室回避の悪化が2週間続いたら、
          一般アルバイトと任意の外部活動を止め、指導教員や学内の相談先へ早めに連絡します。
          予定を守るために健康を削るのではなく、健康を守るために予定を縮小します。
        </p>
      </Callout>

      <Section
        id="baseline"
        eyebrow="WEEKLY BASELINE"
        title="睡眠・食事・運動・休養"
        intro="完璧な達成ではなく、悪化を早く見つけるための基準として使います。"
      >
        <TupleTable
          headings={["領域", "基準と警戒線"]}
          rows={weeklyBaseline}
          caption="毎週の生活基準"
        />
        {health ? (
          <Card title={health.title} badge="予定">
            <p>{health.text}</p>
            <p>
              <strong>運用ルール：</strong>
              {health.rule}
            </p>
          </Card>
        ) : null}
      </Section>

      <Section
        id="mental-health"
        eyebrow="MENTAL HEALTH"
        title="メンタルヘルスと孤立防止"
        intro="研究が進まないときに一人で抱え込まず、相談と生活の変化を早期警戒として扱います。"
      >
        <CardGrid columns={3}>
          <Card title="早期警戒" badge="要確認">
            <BulletList
              items={[
                "平均睡眠が7時間未満の状態が2週間",
                "食欲低下、欠食、朝起きられない状態",
                "研究室・指導面談・人との連絡を避ける",
                "研究室外の対面交流が月1回未満",
              ]}
            />
          </Card>
          <Card title="最初の対応" badge="予定">
            <BulletList
              items={[
                "アルバイトと任意活動を止める",
                "実験・応募・会議を最小限へ",
                "指導教員へ負荷と遅れを共有",
                "学内の相談・医療窓口へ早めに連絡",
              ]}
            />
          </Card>
          <Card title="孤立を防ぐ予定" badge="予定">
            <BulletList
              items={[
                "週1回は研究以外の人と会う",
                "定期コミュニティを一つ持つ",
                "月2回はJAIST外へ出る",
                "外部活動後の低負荷期間に人と再接続",
              ]}
            />
          </Card>
        </CardGrid>
        <TupleTable
          headings={["リスク", "早期警戒", "対策"]}
          rows={isolationAndHealthRisks}
          caption="健康・孤立の早期警戒"
        />
      </Section>

      <Section
        id="review"
        eyebrow="REVIEW RHYTHM"
        title="指導面談・月次レビュー・執筆習慣"
        intro="研究と生活を別々に振り返らず、同じ周期で負荷と進捗を確認します。"
      >
        <TupleTable
          headings={["頻度", "レビュー", "確認すること"]}
          rows={reviewRhythm}
          caption="継続するレビュー周期"
        />
      </Section>

      <Section
        id="relationships"
        eyebrow="RELATIONSHIPS"
        title="友人・コミュニティ・恋愛・パートナーシップ"
        intro="達成期限ではなく、関係を築き続けられる生活設計として扱います。"
      >
        <CardGrid columns={2}>
          <Card title="人間関係を育てる条件" badge="予定">
            <BulletList items={relationshipPrinciples} />
          </Card>
          <Card title="遠距離・留学・引っ越し" badge="候補">
            <BulletList
              items={[
                "海外留学前に連絡頻度と時差の運用を話す",
                "長期の意思決定を一方的に決めず、居住地の希望を共有",
                "留学・就活・引っ越しを同時期に重ねない",
                "遠距離を続けること自体を義務にせず、双方の生活と意思を尊重",
              ]}
            />
          </Card>
        </CardGrid>
        {relationship ? (
          <Callout title={relationship.title} badge="確定" tone="success">
            <p>{relationship.text}</p>
            <p>
              <strong>生活ルール：</strong>
              {relationship.rule}
            </p>
          </Callout>
        ) : null}
      </Section>

      <Section
        id="work-experience"
        eyebrow="WORK & MOUNTAIN HUT"
        title="山小屋経験と一般アルバイト"
        intro="生活経験の希望は残しつつ、博士論文と回復期間を圧迫しない小さな試行から始めます。"
      >
        <TupleTable
          headings={["活動", "上限・運用ルール"]}
          rows={activityLimits}
          caption="外部活動の上限"
        />
        {work ? (
          <Card title={work.title} badge="候補">
            <p>{work.text}</p>
            <p>
              <strong>ルール：</strong>
              {work.rule}
            </p>
          </Card>
        ) : null}
      </Section>

      <Section
        id="recovery"
        eyebrow="RECOVERY WINDOWS"
        title="繁忙期と回復期間"
        intro="外部活動の終了日だけでなく、投稿・帰還・睡眠回復までを予定として先に確保します。"
      >
        <CardGrid columns={2}>
          <Card title="繁忙期" badge="要確認">
            <TupleTable
              headings={["時期", "重なる活動"]}
              rows={busyPeriods}
              caption="博士課程の繁忙期"
            />
          </Card>
          <Card title="先に確保する回復期間" badge="予定">
            <TupleTable
              headings={["時期", "回復・低負荷期間"]}
              rows={recoveryWindows}
              caption="回復期間"
            />
          </Card>
        </CardGrid>
      </Section>

      <Section
        id="life-areas"
        eyebrow="LIFE AREAS"
        title="生活全体の原文"
        intro="住居・車を含む生活方針の詳細は、お金・住居ページと共通データで管理します。"
      >
        <details className="rm-details rm-details--appendix">
          <summary>生活5領域の計画をすべて確認する</summary>
          <RecordCards
            items={lifeCards}
            status={(item) =>
              String(item.label).includes("車") ||
              String(item.label).includes("山小屋")
                ? "候補"
                : "予定"
            }
            columns={2}
          />
        </details>
        <UpdateNotice />
      </Section>
    </>
  );
}
