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

type InternshipPhase = "all" | "D1" | "D2";
type InternshipPurpose = "all" | "publication" | "comparison";

const candidateFacets = [
  { phase: ["D1"], purpose: "publication" },
  { phase: ["D2"], purpose: "publication" },
  { phase: ["D2"], purpose: "publication" },
  { phase: ["D2"], purpose: "publication" },
  { phase: ["D2"], purpose: "comparison" },
  { phase: ["D2"], purpose: "comparison" },
  { phase: ["D2"], purpose: "comparison" },
] as const;

const purposeLabels: Record<Exclude<InternshipPurpose, "all">, string> = {
  publication: "論文を作る",
  comparison: "企業研究職を比較",
};

const annualPlan = [
  {
    phase: "D1",
    time: "2027年7〜8月",
    title: "既存共同研究を論文へ",
    first: "CyberAgent AI Lab",
    duration: "6〜8週間",
    goal: "主結果・再現コード・投稿可能な論文1本",
    apply: "2027年度募集を確認し、2027年1〜6月に条件を確定",
    status: "予定",
  },
  {
    phase: "D2",
    time: "2028年6〜7月",
    title: "異なる企業で論文研究",
    first: "OMRON・Sony・NEC・日立・Woven・NTT等から条件で一社",
    duration: "6〜8週間",
    goal: "投稿可能な論文1本と、就職先を比較する実地情報",
    apply: "D2前半の応募・面接と並行し、2028年5月までに実施条件を確定",
    status: "候補",
  },
] as const;

const candidateOperationMeta = [
  {
    duration: "2026年度実績は2か月。D1の6〜8週間として相談",
    application: "2027年度募集を2027年1月から毎月確認",
    compensation: "2026年度実績は月50万円。2027年度は要確認",
    ip: "案件ごとに投稿、知財、博士論文利用、終了後執筆を確認",
  },
  {
    duration: "過年度実績は1.5〜3か月。D2の6〜8週間で実施可能か確認",
    application: "2028年度テーマ・日程をD1後半から確認",
    compensation: "長期有給の実績。金額・交通・住居は要確認",
    ip: "公開、知財、博士論文利用、終了後アクセスを案件ごとに確認",
  },
  {
    duration: "原則3か月。D2の6〜8週間へ調整可能な場合だけ比較",
    application: "2026年確認時点は通年募集。実施年度版を再確認",
    compensation: "2026年確認時点は月24〜48万円",
    ip: "公開・知財・博士論文利用を書面化",
  },
  {
    duration: "過年度は8〜9月中心、一部長期・日程相談。D2は6〜8週間を確認",
    application: "D2の当該年度テーマを確認",
    compensation: "給与・交通・住居は当該テーマで要確認",
    ip: "発明・著作権等はNEC帰属。投稿と博士論文利用を別途確認",
  },
  {
    duration: "2026年度実績は2〜6週間未満。D2の6〜8週間に届くテーマだけ比較",
    application: "2028年度に6〜8週間・論文化可能なテーマがあるか確認",
    compensation: "待遇・住居は2028年度要項で要確認",
    ip: "知財はNTT帰属。公開・博士論文利用・終了後アクセスの書面許可が必要",
  },
  {
    duration: "Sonyは3か月以上、Wovenは3か月が過年度の基準。6〜8週間への調整可否を確認",
    application: "D2の6〜8週間と論文公開条件が両立する年度だけ",
    compensation: "有給実績あり。金額・住居・交通は実施年度要項で確認",
    ip: "企業・テーマごとに公開、知財、博士論文利用を確認",
  },
  {
    duration: "案件ごとの個別募集。D2の6〜8週間に合う確定枠ではない",
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
        企業研究インターンはD1・D2に一回ずつ、各6〜8週間だけ行います。
        各回で投稿可能な論文1本を残し、D2の6〜7月は就職先を比較する
        実地材料にもします。就活は2029年3月までに承諾まで終え、
        D3は新しいインターン・応募・選考を入れず、博士論文と審査に集中します。
        特定企業へ固定せず、期間、公開、知財、博士論文利用、
        終了後アクセスを満たすテーマで選びます。
      </Lead>

      <Callout
        title="二回とも6〜8週間で論文を残す"
        badge="予定"
        tone="success"
        headingLevel={2}
      >
        <p>
          D1・D2は開始前のベースラインと終了後の成果整理までを
          一つの論文工程として管理します。D3には企業研究を追加せず、
          D2末までに決めた進路を前提に、二本の企業研究論文を博士論文へ統合します。
        </p>
      </Callout>

      <Section
        id="annual-plan"
        eyebrow="TWO RESEARCH INTERNSHIPS"
        title="D1・D2の年次計画"
        intro="D1は既存共同研究から一論文、D2は異なる企業・研究質問から一論文を完成させ、就職先比較にも使います。"
      >
        <CardGrid columns={2}>
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
          <summary>年次計画の原文とD1・D2共通ルール</summary>
          <RecordCards items={internshipWindows} status="予定" columns={2} />
          <Card title="D1・D2の運用ルール" badge="確定">
            <BulletList items={internshipThreeYearRules} />
          </Card>
        </details>
      </Section>

      <Section
        id="candidates"
        eyebrow="CANDIDATES"
        title="企業候補を同じ軸で探す"
        intro="表示はD1・D2と目的で絞り込めます。2026年度情報は将来枠の証拠ではなく、期間や待遇を考える過年度参考です。"
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
        title="NTTと短期候補のD2での位置付け"
        intro="NTTの確認済み2026年度実績はテーマごとに2〜6週間未満です。D2の6〜8週間と論文化条件を満たすテーマが出た場合だけ、比較候補として扱います。"
      >
        <RecordCards items={nttInternshipThemes} status="要確認" columns={3} />
        <Callout title="D2の選び方" badge="候補" tone="warning">
          <p>
            NTTを含む候補から、2028年6〜7月に6〜8週間取り組める
            一社を選びます。投稿可能な論文1本、博士論文利用、知財、
            終了後アクセスを開始前に書面確認します。期間や公開条件を
            満たさない短期テーマは、研究所訪問の参考に留めます。
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
        intro="二回参加すること自体より、各回から論文を残すことと2030年3月の博士修了を優先します。"
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
        title="応募からD2末の進路確定まで"
        intro="共通の応募基盤を一度作り、D2インターンの経験を内定比較へ反映し、2029年3月までに承諾します。"
      >
        <RecordCards items={internshipPrep} status="予定" columns={2} />
        <UpdateNotice />
      </Section>
    </>
  );
}
