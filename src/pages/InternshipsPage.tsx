import { useMemo, useState } from "react";
import {
  eightWeekPlan,
  internshipCandidates,
  internshipContractGroups,
  internshipFundingNotes,
  internshipGo,
  internshipOutputModels,
  internshipPrep,
  internshipProcedures,
  internshipReadiness,
  internshipReject,
  internshipRisks,
  internshipRules,
  internshipScoreRows,
  internshipStrategyOptions,
  internshipThemes,
  internshipThreeYearRules,
  internshipWindows,
  nttInternshipThemes,
  shortInternshipCandidates,
  toyotaEcosystem,
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

type InternshipPhase = "all" | "D1" | "D2" | "D3";
type InternshipPurpose = "all" | "publication" | "comparison" | "decision";

const candidateFacets = [
  { phase: ["D1"], purpose: "publication" },
  { phase: ["D2"], purpose: "publication" },
  { phase: ["D2"], purpose: "publication" },
  { phase: ["D2", "D3"], purpose: "publication" },
  { phase: ["D3"], purpose: "decision" },
  { phase: ["D2"], purpose: "comparison" },
  { phase: ["D2", "D3"], purpose: "comparison" },
] as const;

const purposeLabels: Record<Exclude<InternshipPurpose, "all">, string> = {
  publication: "論文を作る",
  comparison: "企業研究職を比較",
  decision: "就職先を最終判断",
};

const annualPlan = [
  {
    phase: "D1",
    time: "2027年7〜9月",
    title: "既存共同研究を論文へ",
    first: "CyberAgent AI Lab",
    duration: "6〜8週間",
    goal: "主要結果・図表・再現コード・原稿60〜80%",
    apply: "2027年度募集を確認し、2027年1〜6月に条件を確定",
    status: "予定",
  },
  {
    phase: "D2",
    time: "2028年6〜8月",
    title: "異なる企業で本格研究",
    first: "OMRON・Sony・NEC・日立・Woven等から条件で一社",
    duration: "2〜3か月",
    goal: "D1と異なる研究質問・企業文化・国際論文",
    apply: "2028年5月までに一社・契約・住居・海外までの余白を確定",
    status: "候補",
  },
  {
    phase: "D3",
    time: "2029年8〜9月",
    title: "学位優先の条件付き短期枠",
    first: "企業名を固定せず条件で一社",
    duration: "原則2〜4週間",
    goal: "既存テーマの小規模検証・研究所比較・就職判断",
    apply: "5月31日の学位ゲートと正式な骨子提出後だけ実施",
    status: "候補",
  },
] as const;

const candidateOperationMeta = [
  {
    duration: "2026年度実績は2か月。計画上は6〜8週間を相談",
    application: "2027年度募集を2027年1月から毎月確認",
    compensation: "2026年度実績は月50万円。2027年度は要確認",
    ip: "案件ごとに投稿、知財、博士論文利用、終了後執筆を確認",
  },
  {
    duration: "過年度実績は1.5〜3か月。D2の2〜3か月枠として比較",
    application: "2028年度テーマ・日程をD1後半から確認",
    compensation: "長期有給の実績。金額・交通・住居は要確認",
    ip: "公開、知財、博士論文利用、終了後アクセスを案件ごとに確認",
  },
  {
    duration: "原則3か月。D2の2〜3か月枠として比較",
    application: "2026年確認時点は通年募集。実施年度版を再確認",
    compensation: "2026年確認時点は月24〜48万円",
    ip: "公開・知財・博士論文利用を書面化",
  },
  {
    duration: "過年度は8〜9月中心、一部長期・日程相談",
    application: "D2・D3の当該年度テーマを確認",
    compensation: "給与・交通・住居は当該テーマで要確認",
    ip: "発明・著作権等はNEC帰属。投稿と博士論文利用を別途確認",
  },
  {
    duration: "2026年度実績は2〜6週間未満。D3では2〜4週間の候補として比較",
    application: "2029年度に既存テーマ・学位優先条件を満たす場合だけD3候補",
    compensation: "待遇・住居は2029年度要項で要確認",
    ip: "知財はNTT帰属。公開・博士論文利用・終了後アクセスの書面許可が必要",
  },
  {
    duration: "Sonyは3か月以上・週2日以上、Wovenは3か月・週5日が基準",
    application: "D2の2〜3か月と論文公開条件が両立する年度だけ",
    compensation: "有給実績あり。金額・住居・交通は実施年度要項で確認",
    ip: "企業・テーマごとに公開、知財、博士論文利用を確認",
  },
  {
    duration: "案件ごとの個別募集。D2・D3の希望期間に合う確定枠ではない",
    application: "東京の博士向け研究求人を通年監視",
    compensation: "有償研究枠を想定するが、個別求人で要確認",
    ip: "投稿・知財・博士論文利用・終了後アクセスを個別確認",
  },
] as const;

export function InternshipsPage() {
  const [phase, setPhase] = useState<InternshipPhase>("all");
  const [purpose, setPurpose] = useState<InternshipPurpose>("all");

  const filteredCandidates = useMemo(
    () =>
      internshipCandidates.filter((_, index) => {
        const facet = candidateFacets[index];
        const phaseMatch =
          phase === "all" || (facet?.phase as readonly string[]).includes(phase);
        const purposeMatch =
          purpose === "all" || facet?.purpose === purpose;
        return phaseMatch && purposeMatch;
      }),
    [phase, purpose],
  );

  return (
    <>
      <Lead>
        D1は6〜8週間の論文型、D2は2〜3か月の本格企業研究、
        D3は学位進捗を守れる場合だけ2〜4週間の条件付き枠として設計します。
        NTTを含め特定企業へ固定せず、期間、公開、知財、博士論文利用、
        終了後アクセスを満たすテーマで選びます。
      </Lead>

      <Callout
        title="年次ごとに期間と役割を変える"
        badge="予定"
        tone="success"
        headingLevel={2}
      >
        <p>
          D1・D2は開始前のベースラインと終了後2〜4週間の成果整理までを
          一つの論文工程として管理します。D3は主要実験、全章構成、主要図表、
          初稿70%以上、主要論文投稿、指導教員承認を満たす場合だけ実施します。
        </p>
      </Callout>

      <Section
        id="annual-plan"
        eyebrow="THREE SUMMERS"
        title="D1・D2・D3の年次計画"
        intro="三回とも同じ目的ではありません。D1は最初の論文、D2は本格企業研究、D3は学位を妨げない小規模検証と就職判断です。"
      >
        <CardGrid columns={3}>
          {annualPlan.map((plan) => (
            <Card
              key={plan.phase}
              title={`${plan.phase}夏：${plan.title}`}
              eyebrow={plan.time}
              badge={plan.status}
            >
              <dl className="rm-key-values">
                <div>
                  <dt>第一候補・選び方</dt>
                  <dd>{plan.first}</dd>
                </div>
                <div>
                  <dt>期間</dt>
                  <dd>{plan.duration}</dd>
                </div>
                <div>
                  <dt>成果目標</dt>
                  <dd>{plan.goal}</dd>
                </div>
                <div>
                  <dt>応募・確定</dt>
                  <dd>{plan.apply}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </CardGrid>
        <details className="rm-details rm-details--appendix">
          <summary>年次計画の原文と三年間共通ルール</summary>
          <RecordCards items={internshipWindows} status="予定" columns={3} />
          <Card title="三年間の運用ルール" badge="確定">
            <BulletList items={internshipThreeYearRules} />
          </Card>
        </details>
      </Section>

      <Section
        id="candidates"
        eyebrow="CANDIDATES"
        title="企業候補を同じ軸で探す"
        intro="表示はD1・D2・D3と目的で絞り込めます。2026年度情報は将来枠の証拠ではなく、期間や待遇を考える過年度参考です。"
      >
        <div
          className="rm-filter-bar"
          role="group"
          aria-label="企業候補の絞り込み"
        >
          <label htmlFor="internship-phase">
            年次
            <select
              id="internship-phase"
              value={phase}
              onChange={(event) =>
                setPhase(event.target.value as InternshipPhase)
              }
            >
              <option value="all">すべて</option>
              <option value="D1">D1</option>
              <option value="D2">D2</option>
              <option value="D3">D3</option>
            </select>
          </label>
          <label htmlFor="internship-purpose">
            目的
            <select
              id="internship-purpose"
              value={purpose}
              onChange={(event) =>
                setPurpose(event.target.value as InternshipPurpose)
              }
            >
              <option value="all">すべて</option>
              <option value="publication">論文を作る</option>
              <option value="comparison">企業研究職を比較</option>
              <option value="decision">就職先を最終判断</option>
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setPhase("all");
              setPurpose("all");
            }}
          >
            絞り込みを解除
          </button>
          <p aria-live="polite">
            {internshipCandidates.length}件中{filteredCandidates.length}件を表示
          </p>
        </div>

        <div className="rm-card-grid" data-columns="2" id="candidate-results">
          {filteredCandidates.map((candidate) => {
            const originalIndex = internshipCandidates.indexOf(candidate);
            const facet = candidateFacets[originalIndex];
            const purposeLabel = facet
              ? purposeLabels[facet.purpose]
              : "企業研究職を比較";
            const operation = candidateOperationMeta[originalIndex];
            return (
              <Card
                key={candidate.name}
                title={candidate.name}
                eyebrow={`優先順位 ${candidate.rank}`}
                badge={originalIndex === 0 ? "予定" : "候補"}
              >
                <p className="rm-purpose-tag">{purposeLabel}</p>
                <dl className="rm-key-values">
                  <div>
                    <dt>位置付け</dt>
                    <dd>{candidate.role}</dd>
                  </div>
                  <div>
                    <dt>確認できた情報</dt>
                    <dd>{candidate.facts}</dd>
                  </div>
                  <div>
                    <dt>研究との相性</dt>
                    <dd>{candidate.fit}</dd>
                  </div>
                </dl>
                <details className="rm-details">
                  <summary>期間・待遇・論文・知財・単位を確認</summary>
                  <dl className="rm-key-values">
                    <div>
                      <dt>想定期間</dt>
                      <dd>{operation?.duration ?? "実施年度の募集で要確認"}</dd>
                    </div>
                    <div>
                      <dt>募集・応募時期</dt>
                      <dd>{operation?.application ?? "要確認"}</dd>
                    </div>
                    <div>
                      <dt>給与・待遇</dt>
                      <dd>{operation?.compensation ?? "要確認"}</dd>
                    </div>
                    <div>
                      <dt>住居支援</dt>
                      <dd>募集年度・勤務地・契約ごとに要確認</dd>
                    </div>
                    <div>
                      <dt>論文化可能性</dt>
                      <dd>国際投稿、社内公開審査、帰任後の執筆担当を開始前に書面確認</dd>
                    </div>
                    <div>
                      <dt>知財条件</dt>
                      <dd>{operation?.ip ?? "要確認"}</dd>
                    </div>
                    <div>
                      <dt>博士論文への利用</dt>
                      <dd>利用範囲、公開、エンバーゴ、公聴会資料を開始前に書面確認</dd>
                    </div>
                    <div>
                      <dt>JAIST単位</dt>
                      <dd>
                        この計画の実施期間と単位認定は別。参加前に履修案内、
                        指導教員、学生支援課・教務担当へ申請要件を確認
                      </dd>
                    </div>
                    <div>
                      <dt>就職先としての関心</dt>
                      <dd>{candidate.role}</dd>
                    </div>
                    <div>
                      <dt>要確認</dt>
                      <dd>{candidate.caution}</dd>
                    </div>
                  </dl>
                </details>
                <a
                  className="rm-external-link"
                  href={candidate.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${candidate.name}の公式・参考ページ（新しいタブで開く）`}
                >
                  公式・参考ページ
                  <span aria-hidden="true"> ↗</span>
                </a>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        id="purpose"
        eyebrow="PURPOSE"
        title="インターンを何のために使うか"
        intro="会社名ではなく、博士論文とキャリアにおける役割で分類します。"
      >
        <RecordCards
          items={internshipStrategyOptions}
          status="予定"
          columns={3}
        />
        <RecordCards
          items={internshipOutputModels}
          status={(item) =>
            String(item.verdict ?? "").includes("第一") ? "予定" : "候補"
          }
          columns={3}
        />
      </Section>

      <Section
        id="research-design"
        eyebrow="RESEARCH DESIGN"
        title="企業研究を論文へつなぐ研究設計"
        intro="企業内でゼロからテーマを探さず、開始前に問い・データ・ベースラインを用意します。8週間モデルはD1と、D2を短縮する場合の基準です。"
      >
        <CardGrid columns={2}>
          <Card title="8週間の工程" badge="提案">
            <TupleTable
              headings={["週", "完了条件"]}
              rows={eightWeekPlan}
              caption="論文型企業研究の8週間モデル"
            />
          </Card>
          <Card title="開始前の準備度" badge="予定">
            <TupleTable
              headings={["確認項目", "完了条件", "期限"]}
              rows={internshipReadiness}
              caption="企業研究の準備度"
            />
          </Card>
        </CardGrid>
        <h3 className="rm-subheading">研究テーマ案</h3>
        <RecordCards items={internshipThemes} status="候補" columns={3} />
      </Section>

      <Section
        id="conditions"
        eyebrow="CONDITIONS"
        title="参加前に書面で確認する条件"
        intro="単位、雇用、公開、知財、データアクセスを別々に確認します。有給であることや研究相性だけでは選びません。"
      >
        <RecordCards items={internshipRules} status="要確認" columns={3} />
        <RecordCards items={internshipProcedures} status="要確認" columns={3} />
        <h3 className="rm-subheading">契約・成果・データの確認群</h3>
        <RecordCards
          items={internshipContractGroups}
          status="要確認"
          columns={2}
        />
        <h3 className="rm-subheading">候補を比較する採点軸</h3>
        <TupleTable
          headings={["優先順位", "評価項目"]}
          rows={internshipScoreRows.map((item, index) => [
            String(index + 1).padStart(2, "0"),
            item,
          ])}
          caption="企業研究候補の採点表"
        />
      </Section>

      <Section
        id="ntt-short"
        eyebrow="ALTERNATIVES"
        title="NTTと短期候補の正しい位置付け"
        intro="NTTはD3の固定先ではありません。確認済みの2026年度実績はテーマごとに2〜6週間未満で、D3の条件付き2〜4週間枠を比較するための過年度資料として扱います。"
      >
        <RecordCards items={nttInternshipThemes} status="要確認" columns={3} />
        <Callout title="D3の選び方" badge="条件付き" tone="warning">
          <p>
            2029年5月の学位ゲートを通過した場合だけ、既存研究を使える
            2〜4週間のテーマを一社選びます。論文公開、博士論文利用、知財、
            終了後アクセス、予備審査との両立を開始前に書面確認します。
            条件を満たさなければ研究所訪問へ縮小するか、D3企業研究を中止します。
          </p>
        </Callout>
        <details className="rm-details rm-details--appendix">
          <summary>短期の研究所訪問候補5件</summary>
          <RecordCards
            items={shortInternshipCandidates}
            status="候補"
            columns={2}
          />
        </details>
        <details className="rm-details rm-details--appendix">
          <summary>トヨタグループ周辺の候補と使い分け</summary>
          <RecordCards items={toyotaEcosystem} status="候補" columns={2} />
        </details>
      </Section>

      <Section
        id="funding"
        eyebrow="FUNDING & EMPLOYMENT"
        title="給与・資金・大学手続き"
        intro="企業ごとの給与は過年度情報であり、実施年度の募集要項、雇用契約、JSPS・SPRING・JAISTへの報告方法を再確認します。"
      >
        <RecordCards
          items={internshipFundingNotes}
          status="要確認"
          columns={3}
        />
      </Section>

      <Section
        id="gates"
        eyebrow="GO / NO-GO"
        title="実施・変更・中止の条件"
        intro="三回参加する目標より、2030年3月の博士修了と成果の公開可能性を優先します。"
      >
        <CardGrid columns={2}>
          <Card title="受諾する条件" badge="予定">
            <BulletList items={internshipGo} />
          </Card>
          <Card title="断る・入れ替える条件" badge="要確認">
            <BulletList items={internshipReject} />
          </Card>
        </CardGrid>
        <TupleTable
          headings={["リスク", "対策"]}
          rows={internshipRisks}
          caption="企業研究の主なリスク"
        />
      </Section>

      <Section
        id="preparation"
        eyebrow="PREPARATION"
        title="応募からD3までの準備"
        intro="共通の応募基盤を一度作り、年度ごとに企業名と条件だけを更新します。"
      >
        <RecordCards items={internshipPrep} status="予定" columns={2} />
        <UpdateNotice />
      </Section>
    </>
  );
}
