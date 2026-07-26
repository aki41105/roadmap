import { useMemo, useState } from "react";
import {
  domesticAdjust,
  domesticGo,
  internshipGo,
  internshipReject,
  overseasDelay,
  overseasGo,
} from "../data";
import {
  normalizedDecisionGates,
  risks,
} from "../data/decisions";
import { sources } from "../data/sources";
import type { SourceKind } from "../data/types";
import {
  Badge,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Lead,
  Section,
  SourceAnchor,
  UpdateNotice,
} from "./PageKit";

type SourceKindFilter = "all" | SourceKind;

const keyDecisionDetails = [
  {
    title: "国内滞在先",
    due: "2027年10月",
    options: ["NIIで相互行為分析", "京都大学HRI（適応行動へ進む場合）", "短期訪問・オンラインへ縮小"],
    criteria: ["博士論文との接続", "受入教員と正式手続き", "D1企業論文の投稿", "倫理・データ・住居・資金"],
    provisional: "NII本命、京都大学HRIは条件付き",
    contact: "指導教員、JAIST関係窓口、候補教員",
    next: "最近の論文を読み、D1開始後に1〜2ページの個別提案",
  },
  {
    title: "海外研究先",
    due: "2028年9月30日",
    options: ["海外大学で3か月の検証", "時期を延期", "短縮・国内から共同解析"],
    criteria: ["企業論文投稿済み", "8週間の間隔", "受入・資金", "倫理・データ移転・知財・ビザ"],
    provisional: "2028年11月〜2029年1月の大学研究",
    contact: "指導教員、国際交流・学生支援窓口、受入候補教員",
    next: "海外でしかできない検証1ページと英語CVを作る",
  },
  {
    title: "D2企業インターン先",
    due: "2028年4月30日",
    options: ["日立を含む6〜8週間企業", "8週間合意のOMRON", "公開条件の合うNEC等"],
    criteria: ["別の研究質問", "6〜8週間", "公開・知財・博士論文利用", "終了後アクセス", "海外まで8週間"],
    provisional: "企業名より条件で一社を選ぶ",
    contact: "指導教員、JAIST窓口、企業メンター・契約担当",
    next: "D1後半から候補を比較し、2028年3月末に本命を選ぶ",
  },
  {
    title: "引っ越し",
    due: "海外留学終了後・2029年2月目安",
    options: ["寮を継続", "JAIST周辺", "鶴来・白山", "金沢"],
    criteria: ["1年以上住む見込み", "固定費35%以内", "生活防衛資金6か月", "就職先・人間関係・通学"],
    provisional: "海外留学までは寮を基準",
    contact: "学生支援窓口、住居候補、不動産、生活上の関係者",
    next: "候補地域の家賃・交通・車の必要性を記録",
  },
  {
    title: "車の購入",
    due: "D2海外留学後に再判定",
    options: ["買わない", "カーシェア・レンタカー", "中古軽自動車"],
    criteria: ["月8〜10日以上利用", "9か月以内に長期留学なし", "購入後も生活費6か月", "維持費全体"],
    provisional: "博士修了後へ延期",
    contact: "保険・販売店・駐車場、必要に応じ家族等",
    next: "シャトル・カーシェア・レンタカーの利用日数と費用を記録",
  },
  {
    title: "企業就職かアカデミアか",
    due: "2029年3〜6月",
    options: ["企業AI・ロボティクス研究職", "国立研究機関", "ポスドク", "大学教員", "海外就職"],
    criteria: ["研究の自由度", "論文・知財", "メンター・設備", "評価制度", "勤務地・生活", "将来性"],
    provisional: "企業研究職を軸に比較し、早期に他案を除外しない",
    contact: "指導教員、共同研究者、候補組織の研究者・採用担当",
    next: "D1で20組織調査・8面談を行い、D2で候補を絞る",
  },
] as const;

const riskLikelihood = [
  "中",
  "中",
  "高",
  "中",
  "中",
  "中",
  "高",
  "中",
  "中",
  "中",
  "中",
  "中",
] as const;

export function DecisionsPage() {
  const [sourceKind, setSourceKind] = useState<SourceKindFilter>("all");
  const [sourceGroup, setSourceGroup] = useState("all");

  const sourceGroups = useMemo(
    () => Array.from(new Set(sources.map((source) => source.group))).sort(),
    [],
  );

  const filteredSources = useMemo(
    () =>
      sources.filter(
        (source) =>
          (sourceKind === "all" || source.kind === sourceKind) &&
          (sourceGroup === "all" || source.group === sourceGroup),
      ),
    [sourceGroup, sourceKind],
  );

  return (
    <>
      <Lead>
        未決定事項、判断期限、GO／縮小条件、リスク、出典を一か所に集めます。
        「公式」「個人記事」「本人計画・提案」を分け、
        年度で変わる制度や募集は最終確認日と変更可能性を表示します。
      </Lead>

      <Callout
        title="判断の原則"
        badge="確定"
        tone="success"
        headingLevel={2}
      >
        <p>
          企業名や活動回数を守るのではなく、2030年3月修了、博士論文との接続、
          健康、資金、公開可能性を守ります。条件が一つでも欠けた場合は、
          返金不能な契約をせず、短縮・延期・中止を選びます。
        </p>
      </Callout>

      <Section
        id="pending"
        eyebrow="PENDING DECISIONS"
        title="判断待ち"
        intro="重要な六つの判断について、選択肢・判断基準・暫定案・次の確認先を明示します。"
      >
        <CardGrid columns={2}>
          {keyDecisionDetails.map((decision) => (
            <Card
              key={decision.title}
              title={decision.title}
              eyebrow={`判断目安：${decision.due}`}
              badge="候補"
            >
              <dl className="rm-key-values">
                <div>
                  <dt>選択肢</dt>
                  <dd><BulletList items={decision.options} /></dd>
                </div>
                <div>
                  <dt>判断基準</dt>
                  <dd><BulletList items={decision.criteria} /></dd>
                </div>
                <div>
                  <dt>現在の暫定案</dt>
                  <dd>{decision.provisional}</dd>
                </div>
                <div>
                  <dt>次の確認先</dt>
                  <dd>{decision.contact}</dd>
                </div>
                <div>
                  <dt>次の行動</dt>
                  <dd>{decision.next}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="gates"
        eyebrow="DECISION GATES"
        title="全17件の判断ゲート"
        intro="日付は公式締切だけではなく、本人が早めに判断するための内部目標を含みます。"
      >
        <div className="rm-gate-list">
          {normalizedDecisionGates.map((gate) => (
            <article key={gate.id}>
              <div className="rm-gate-list__date">
                <time dateTime={gate.sortDate}>{gate.displayDate}</time>
                <Badge>{gate.status}</Badge>
                <span>{gate.category}</span>
              </div>
              <div>
                <h3>{gate.title}</h3>
                <p>
                  <strong>GO：</strong>
                  {gate.go}
                </p>
                <p>
                  <strong>縮小・中止：</strong>
                  {gate.adjust}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="risks"
        eyebrow="RISK REGISTER"
        title="リスク登録簿"
        intro="発生可能性と影響は計画上の暫定評価です。早期警戒指標に達したら、対策と停止条件を機械的に適用します。"
      >
        <div className="rm-risk-register">
          {risks.map((risk, index) => (
            <article key={risk.id}>
              <header>
                <div>
                  <p className="rm-eyebrow">{risk.category}</p>
                  <h3>{risk.title}</h3>
                </div>
                <Badge>要確認</Badge>
              </header>
              <dl className="rm-key-values">
                <div>
                  <dt>発生可能性</dt>
                  <dd>{riskLikelihood[index] ?? "中"}（提案）</dd>
                </div>
                <div>
                  <dt>影響</dt>
                  <dd>{risk.priority === "最優先" ? "重大" : "高"}（提案）</dd>
                </div>
                <div>
                  <dt>早期警戒指標</dt>
                  <dd>{risk.warning}</dd>
                </div>
                <div>
                  <dt>対策</dt>
                  <dd>{risk.response}</dd>
                </div>
                <div>
                  <dt>中止条件</dt>
                  <dd>警戒指標に達した時点で新規契約・追加実験を止め、対策へ切り替える。</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="domain-rules"
        eyebrow="GO / ADJUST"
        title="外部研究ごとの実施・縮小条件"
        intro="国内滞在、企業研究、海外研究で使っている原文条件を一か所から確認できます。"
      >
        <CardGrid columns={3}>
          <Card title="国内滞在研究" badge="予定">
            <h4>実施</h4>
            <BulletList items={domesticGo} />
            <h4>縮小・オンライン</h4>
            <BulletList items={domesticAdjust} />
          </Card>
          <Card title="企業インターン" badge="予定">
            <h4>受諾</h4>
            <BulletList items={internshipGo} />
            <h4>断る・入れ替える</h4>
            <BulletList items={internshipReject} />
          </Card>
          <Card title="海外研究留学" badge="予定">
            <h4>実施</h4>
            <BulletList items={overseasGo} />
            <h4>延期・中止</h4>
            <BulletList items={overseasDelay} />
          </Card>
        </CardGrid>
      </Section>

      <Section
        id="sources"
        eyebrow="SOURCES"
        title="公式資料・個人記事・提案"
        intro="すべての出典を共通レジストリで管理しています。募集年度や制度金額は変更可能性が高いため、利用直前に再確認します。"
      >
        <div
          className="rm-filter-bar"
          role="group"
          aria-label="資料の絞り込み"
        >
          <label htmlFor="source-kind">
            区分
            <select
              id="source-kind"
              value={sourceKind}
              onChange={(event) =>
                setSourceKind(event.target.value as SourceKindFilter)
              }
            >
              <option value="all">すべて</option>
              <option value="公式">公式</option>
              <option value="個人">個人記事・本人計画</option>
              <option value="提案">提案・試算</option>
            </select>
          </label>
          <label htmlFor="source-group">
            分野
            <select
              id="source-group"
              value={sourceGroup}
              onChange={(event) => setSourceGroup(event.target.value)}
            >
              <option value="all">すべて</option>
              {sourceGroups.map((group) => (
                <option value={group} key={group}>
                  {group}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setSourceKind("all");
              setSourceGroup("all");
            }}
          >
            絞り込みを解除
          </button>
          <p aria-live="polite">
            全{sources.length}件中{filteredSources.length}件
          </p>
        </div>

        <div className="rm-source-grid">
          {filteredSources.map((source) => (
            <article key={source.id}>
              <header>
                <Badge>{source.kind === "公式" ? "確定" : source.kind === "提案" ? "提案" : "要確認"}</Badge>
                <span>{source.group}</span>
              </header>
              <h3>{source.title}</h3>
              <dl>
                <div>
                  <dt>区分</dt>
                  <dd>{source.kind}</dd>
                </div>
                <div>
                  <dt>対象年度</dt>
                  <dd>{source.year}</dd>
                </div>
                <div>
                  <dt>最終確認</dt>
                  <dd><time dateTime={source.verifiedAt}>{source.verifiedAt}</time></dd>
                </div>
                <div>
                  <dt>変更可能性</dt>
                  <dd>{source.changeLikelihood}</dd>
                </div>
              </dl>
              {source.note ? <p>{source.note}</p> : null}
              {source.url ? (
                <SourceAnchor href={source.url}>
                  {source.title}を開く
                </SourceAnchor>
              ) : (
                <p className="rm-muted">内部資料・外部URLなし</p>
              )}
            </article>
          ))}
        </div>

        <Callout title="リンク確認メモ" badge="要確認" tone="warning">
          <p>
            2026年7月26日の自動確認では、79件の固有URLに404はありませんでした。
            OMRONとSonyは自動アクセスへ403を返したため、リンク切れとは断定せず、
            実施年度にブラウザで手動確認します。2026年度の企業募集は将来年度の
            確定情報ではなく、過年度参考として扱います。
          </p>
        </Callout>
      </Section>

      <Section
        id="maintenance"
        eyebrow="MAINTENANCE"
        title="資料と判断の更新ルール"
        intro="変更履歴を残し、確定していないものを確定へ変えないことを最優先にします。"
      >
        <CardGrid columns={4}>
          <Card title="毎月末" badge="予定">
            <p>状態、次の行動、警戒指標、期限を更新。</p>
          </Card>
          <Card title="四半期" badge="予定">
            <p>候補順位、GO条件、重複、削る順番を再評価。</p>
          </Card>
          <Card title="毎年4月" badge="予定">
            <p>JAIST・JSPS・JST・企業募集・金額・リンクを更新。</p>
          </Card>
          <Card title="実施6か月前" badge="予定">
            <p>受入、資金、倫理、契約、住居、保険を最新資料で確認。</p>
          </Card>
        </CardGrid>
        <UpdateNotice />
      </Section>
    </>
  );
}
