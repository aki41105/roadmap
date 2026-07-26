import { lifeCards } from "../data";
import {
  budgetScenarios,
  domesticStayFunding,
  fundingPriority,
  internshipFundingChecks,
  jspsFundingRoutes,
  moneyRules,
  oneTimeCostEstimates,
  overseasCostEstimates,
  overseasPrimaryFundingRoutes,
  universityAndExternalFunding,
} from "../data/finances";
import {
  Badge,
  BulletList,
  Callout,
  Card,
  CardGrid,
  KeyValueList,
  Lead,
  RecordCards,
  Section,
  TupleTable,
  UpdateNotice,
} from "./PageKit";

const incomeRoutes = [
  ["JSPS DC", "研究奨励金", "応募・採否・実施年度要項を確認", "要確認", "公式金額は最新要項で更新"],
  ["JAIST SPRING", "研究専念支援", "採用条件・併給・有償活動を確認", "候補", "公式金額は最新要項で更新"],
  ["RA", "研究補助", "研究室・プロジェクトの募集と雇用条件を確認", "候補", "未確認"],
  ["TA", "教育補助", "担当科目、時間、給与、研究への負荷を確認", "候補", "未確認"],
  ["UA", "大学業務補助", "業務内容、時間、給与、併給を確認", "候補", "未確認"],
  ["奨学金", "給付・貸与", "返済、併給、所得条件を確認", "候補", "未確認"],
  ["企業インターン給与", "有給研究", "企業・年度・契約ごとに確認", "候補", "過年度参考・将来変更あり"],
  ["一般アルバイト", "生活費補助", "週4〜8時間を上限。D3は新規停止", "候補", "時給・税・交通費は未確認"],
  ["山小屋アルバイト", "経験＋収入", "D1は見送り。3日〜2週間を基本", "候補", "募集ごとに未確認"],
] as const;

const recurringExpenses = [
  ["授業料", "公式金額", "JAIST最新年度の納入額・免除を確認"],
  ["JAIST学生寄宿舎", "公式金額", "D1の基準住居。寮費・光熱・退去条件を更新"],
  ["民間賃貸", "概算", "家賃、共益費、駐車場、更新、初期費用を合算"],
  ["食費・日用品", "概算", "月次支出記録から本人実績へ置換"],
  ["学会費・研究費", "概算", "参加費、交通、宿泊、投稿費、予備費"],
  ["国内滞在費", "概算", "短期住居、往復交通、食費、寮との二重負担"],
  ["海外留学費", "要再試算", "6か月分の渡航、住居、保険、ビザ、現地交通、二重家賃"],
  ["車の維持費", "概算", "保険、税、車検、冬タイヤ、燃料、駐車場、償却"],
] as const;

const housingOptions = [
  {
    title: "JAIST学生寄宿舎",
    timing: "D1〜海外留学終了までの基準",
    value: "固定費を抑え、国内滞在中も維持して短期住居を別管理できる。",
    caution: "居住期限・寮費・申請条件は年度ごとに確認。",
    status: "予定",
  },
  {
    title: "JAIST周辺",
    timing: "D2後半以降の候補",
    value: "通学時間を短く保ちつつ、寮より生活の自由度を上げる。",
    caution: "車の必要性、冬季交通、初期費用を含める。",
    status: "候補",
  },
  {
    title: "鶴来・白山方面",
    timing: "1年以上住む見込みが出た後",
    value: "JAISTへのアクセスと生活圏の広がりを比較できる。",
    caution: "公共交通・車・積雪・駐車場を現地確認。",
    status: "候補",
  },
  {
    title: "金沢方面",
    timing: "就職先・人間関係・生活を含め再判定",
    value: "コミュニティや都市生活へのアクセスを得やすい。",
    caution: "通学時間、交通費、車、留学中の二重家賃が増える。",
    status: "候補",
  },
] as const;

const carDecision = [
  ["利用頻度", "月8〜10日以上使う記録がある"],
  ["留学", "購入後9か月以内に長期留学がない"],
  ["資金", "購入後も生活費6か月分が残る"],
  ["総費用", "本体だけでなく保険・税・車検・冬タイヤ・燃料・駐車場を含める"],
  ["代替", "シャトル・カーシェア・レンタカーの実績費用と比較"],
  ["判断時期", "D2海外留学終了後、就職先・居住地が見えてから再判定"],
] as const;

export function FinanceLifePage() {
  const housingCard = lifeCards.find((card) => card.label === "住居");
  const carCard = lifeCards.find((card) => card.label === "車");

  return (
    <>
      <Lead>
        住居・車・留学を同じ半年に重ねず、生活防衛資金6か月を残します。
        金額は「公式」「概算」「未確認」「将来変更あり」を分け、
        助成や収入が確定する前に固定費を増やしません。
      </Lead>

      <Callout
        title="基準となるお金のルール"
        badge="確定"
        tone="success"
        headingLevel={2}
      >
        <BulletList items={moneyRules} />
      </Callout>

      <Section
        id="income"
        eyebrow="INCOME"
        title="収入・資金ルート"
        intro="採用・雇用・併給条件が未確定のものは、収入として先に予算へ入れません。"
      >
        <div className="rm-table-wrap">
          <table className="rm-table">
            <caption>博士課程中に検討する収入</caption>
            <thead>
              <tr>
                <th scope="col">収入</th>
                <th scope="col">位置付け</th>
                <th scope="col">確認事項</th>
                <th scope="col">状態</th>
                <th scope="col">金額区分</th>
              </tr>
            </thead>
            <tbody>
              {incomeRoutes.map(([name, role, check, status, moneyClass]) => (
                <tr key={name}>
                  <th scope="row" data-label="収入">{name}</th>
                  <td data-label="位置付け">{role}</td>
                  <td data-label="確認事項">{check}</td>
                  <td data-label="状態"><Badge>{status}</Badge></td>
                  <td data-label="金額区分">{moneyClass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Card title="資金の優先順位" badge="要確認">
          <p>{fundingPriority.summary}</p>
          <p>
            <strong>注意：</strong>
            {fundingPriority.caveat}
          </p>
        </Card>

        <details className="rm-details rm-details--appendix">
          <summary>大学・外部資金とJSPS海外関係の詳細</summary>
          <RecordCards
            items={universityAndExternalFunding}
            status={(item) => String(item.status ?? "要確認")}
            columns={2}
          />
          <h3 className="rm-subheading">
            JSPS制度の位置付け（主なD2留学資金とは分ける）
          </h3>
          <RecordCards
            items={jspsFundingRoutes}
            status={(item) => String(item.status ?? "候補")}
            columns={2}
          />
          <h3 className="rm-subheading">企業インターン給与との関係</h3>
          <RecordCards
            items={internshipFundingChecks}
            status="要確認"
            columns={3}
          />
        </details>
      </Section>

      <Section
        id="expenses"
        eyebrow="EXPENSES"
        title="支出と一時費用"
        intro="月次費用と一時費用を分け、留学・国内滞在・引っ越し・車は予備費込みで見積もります。"
      >
        <TupleTable
          headings={["支出", "金額区分", "更新方法"]}
          rows={recurringExpenses}
          caption="継続的な支出の管理"
        />
        <h3 className="rm-subheading">一時費用の概算</h3>
        <CardGrid columns={4}>
          {oneTimeCostEstimates.map((cost) => (
            <Card key={cost.id} title={cost.item} badge="推定">
              <p className="rm-money">{cost.estimate}</p>
              <p className="rm-muted">概算・将来変更の可能性あり</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="budgets"
        eyebrow="BUDGET SCENARIOS"
        title="三つの予算シナリオ"
        intro="現時点の概算です。月次支出の本人実績が貯まったら、項目別の数値へ置き換えます。"
      >
        <CardGrid columns={3}>
          {budgetScenarios.map((budget) => (
            <Card
              key={budget.id}
              title={budget.name}
              badge={budget.status}
            >
              <p className="rm-money">{budget.monthly}</p>
              <p>{budget.annual}</p>
              <p>{budget.description}</p>
              <p className="rm-muted">概算・将来変更の可能性あり</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="stays"
        eyebrow="RESEARCH STAY COSTS"
        title="国内滞在・海外留学の資金"
        intro="国内で在学中一回の海外向け助成候補を消費しないこと、海外6か月は二重家賃を含めて再試算することを基本にします。"
      >
        <Card title={domesticStayFunding.title} badge="要確認">
          <p>{domesticStayFunding.body}</p>
          <KeyValueList
            items={[
              ["概算", domesticStayFunding.estimate],
              ["次の行動", domesticStayFunding.action],
            ]}
          />
        </Card>

        <h3 className="rm-subheading">海外6か月の主な資金候補</h3>
        <RecordCards
          items={overseasPrimaryFundingRoutes}
          status={(item) => String(item.status ?? "要確認")}
          columns={3}
        />

        <Callout
          title="6か月の総費用は受入先決定後に再試算"
          badge="要再試算"
          tone="warning"
        >
          <p>
            国・都市・為替・住居条件・日本側の二重家賃で大きく変わります。
            現時点では費目を確認するための一覧とし、返金不能な契約前に
            6か月分の月別資金繰りを作ります。
          </p>
        </Callout>

        <CardGrid columns={3}>
          {overseasCostEstimates.map((cost) => (
            <Card key={cost.id} title={cost.item} badge="推定">
              <p className="rm-money">{cost.estimate}</p>
              <p className="rm-muted">助成前の概算・将来変更あり</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="housing"
        eyebrow="HOUSING"
        title="住居と引っ越し"
        intro="D1はJAIST学生寄宿舎を基準にし、D1冬の国内滞在を引っ越し扱いにしません。海外留学後に1年以上住む見込みが出てから再判定します。"
      >
        <CardGrid columns={2}>
          {housingOptions.map((option) => (
            <Card
              key={option.title}
              title={option.title}
              eyebrow={option.timing}
              badge={option.status}
            >
              <p>{option.value}</p>
              <p>
                <strong>注意：</strong>
                {option.caution}
              </p>
            </Card>
          ))}
        </CardGrid>
        {housingCard ? (
          <Card title={housingCard.title} badge="予定">
            <p>{housingCard.text}</p>
            <p>
              <strong>判断条件：</strong>
              {housingCard.rule}
            </p>
          </Card>
        ) : null}
      </Section>

      <Section
        id="car"
        eyebrow="CAR"
        title="車を買う条件"
        intro="欲しいという希望は残しつつ、利用日数と留学・資金・居住地の条件で決めます。"
      >
        <TupleTable
          headings={["判断軸", "購入条件・比較"]}
          rows={carDecision}
          caption="車の購入判断"
        />
        {carCard ? (
          <Callout title={carCard.title} badge="候補" tone="warning">
            <p>{carCard.text}</p>
            <p>
              <strong>ルール：</strong>
              {carCard.rule}
            </p>
          </Callout>
        ) : null}
      </Section>

      <Section
        id="reviews"
        eyebrow="MONTHLY REVIEW"
        title="毎月更新する数字"
        intro="計画上の概算を、本人の実績へ少しずつ置き換えます。"
      >
        <CardGrid columns={3}>
          <Card title="月次" badge="予定">
            <p>収入、固定費、変動費、研究費、交通、車の利用日数。</p>
          </Card>
          <Card title="四半期" badge="予定">
            <p>生活防衛資金、授業料、外部活動費、引っ越し・車の判断。</p>
          </Card>
          <Card title="年度更新" badge="予定">
            <p>制度金額、企業給与、寮費、助成条件、税・社会保険。</p>
          </Card>
        </CardGrid>
        <UpdateNotice />
      </Section>
    </>
  );
}
