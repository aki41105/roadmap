import {
  degreeMilestones,
  degreeRequirements,
  externalProjects,
  researchArc,
  supportPrograms,
} from "../data";
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

const researchThemes = [
  {
    key: "A",
    title: "社会的状態を推定する",
    objective:
      "実環境HRIにおける対話品質とラポールを、音声・視線・表情・姿勢・対話履歴から説明可能に推定する。",
    chapter: "第2〜3章：評価枠組み・ベースライン",
    status: "進行中",
    data: ["修士研究・既存共同研究の対話データ", "マルチモーダル時系列"],
    collaborator: "CyberAgentとの既存共同研究を軸に検討",
    venue: "HRI、IUI、ICMI、RO-MAN等を候補として比較",
    next: "修士研究のデータ・解析仕様を凍結し、博士研究との差分を定義",
    risk: "単発の精度競争になり、博士論文の中心問いから離れること",
  },
  {
    key: "B",
    title: "関係の転換を予測する",
    objective:
      "社会的状態の時間変化から、離脱・継続・クロージング・関係悪化を予測し、実用性を検証する。",
    chapter: "第4章：時系列予測・転換点",
    status: "提案",
    data: ["研究Aの時系列特徴", "相互行為コードブック", "離脱・継続ラベル"],
    collaborator: "D1冬の国内滞在候補と方法論を検討",
    venue: "HRI、ICMI、IUI等を候補として比較",
    next: "予測対象と時間窓を1ページで定義し、国内滞在の提案へ接続",
    risk: "ラベルの妥当性とデータ量が不足すること",
  },
  {
    key: "C",
    title: "ロボットを適応させる",
    objective:
      "推定・予測した状態をロボットの行動や対話戦略へ接続し、実環境で効果を評価する。",
    chapter: "第5〜6章：適応行動・外的妥当性",
    status: "候補",
    data: ["研究A・Bの推定結果", "実ロボットまたは対話システムの介入ログ"],
    collaborator: "企業研究・京都大学HRI・海外大学を条件に応じて検討",
    venue: "HRI、RO-MAN、IUI等を候補として比較",
    next: "適応行動の最小実験と、海外でしか検証できない条件を定義",
    risk: "倫理審査、実装量、外部活動の日程が学位工程と衝突すること",
  },
] as const;

const thesisChapters = [
  ["第1章", "背景・中心研究質問", "A〜Cを一つの問いへ接続", "2026年10〜12月に骨格"],
  ["第2章", "関連研究・評価設計", "共通の概念・データ・評価指標", "D1前半"],
  ["第3章", "研究A：推定", "D1企業研究・既存共同研究", "D1投稿"],
  ["第4章", "研究B：予測", "国内滞在の方法論＋D2企業研究", "D2投稿"],
  ["第5章", "研究C：適応", "D2海外検証、必要なら企業研究", "D2〜D3投稿"],
  ["第6章", "統合評価・限界", "複数環境での一般化と設計原則", "D3前半"],
  ["第7章", "結論", "博士論文全体の貢献と今後", "D3"],
] as const;

const publicationPlan = [
  ["M2", "修士研究", "2026年9月に投稿可否を判断", "本文80%・結果100%"],
  ["D1", "企業研究論文", "2027年12月15日までの投稿を内部目標", "国内滞在より優先"],
  ["D1", "国内滞在成果", "2028年4月末までに投稿または投稿可能原稿", "5月15日に新規実験停止"],
  ["D2", "企業研究論文", "2028年9月末までの投稿を内部目標", "海外まで最低4週間、計画上は8週間"],
  ["D2", "海外共同研究論文", "2029年2〜3月に投稿", "外的妥当性・一般化"],
  ["D3", "企業研究の追加検証", "2029年8〜9月のうち2〜4週間", "既存テーマ限定・学位ゲート通過時のみ"],
] as const;

export function ResearchPage() {
  return (
    <>
      <Lead>
        博士論文の中心は、実環境HRIにおける社会的状態を「推定する→予測する→
        適応させる」の三段階です。各外部研究を独立した経験にせず、
        章・論文・データ・次の研究へ明示的に接続します。
      </Lead>

      <Callout
        title="博士論文の中心問い（暫定）"
        badge="提案"
        tone="info"
        headingLevel={2}
      >
        <p>
          人とロボットの相互作用において、対話品質やラポールの変化を
          マルチモーダル情報からどのように推定・予測し、その結果を
          ロボットの適応行動へ安全かつ有効に接続できるか。
        </p>
      </Callout>

      <Section
        id="themes"
        eyebrow="RESEARCH THEMES"
        title="三つの研究テーマ"
        intro="状態ラベルは計画上の現在地です。投稿先・共同研究先は確定ではありません。"
      >
        <CardGrid columns={3}>
          {researchThemes.map((theme) => (
            <Card
              key={theme.key}
              title={`${theme.key}. ${theme.title}`}
              eyebrow={theme.chapter}
              badge={theme.status}
            >
              <p>{theme.objective}</p>
              <details className="rm-details">
                <summary>データ・共同研究・投稿先・リスク</summary>
                <KeyValueList
                  items={[
                    ["使用データ", <BulletList items={theme.data} />],
                    ["共同研究先", theme.collaborator],
                    ["想定投稿先", theme.venue],
                    ["次の行動", theme.next],
                    ["主なリスク", theme.risk],
                  ]}
                />
              </details>
            </Card>
          ))}
        </CardGrid>
        <details className="rm-details rm-details--appendix">
          <summary>現行計画にある研究A〜Cの原文</summary>
          <RecordCards items={researchArc} status="提案" columns={3} />
        </details>
      </Section>

      <Section
        id="thesis-map"
        eyebrow="THESIS MAP"
        title="論文と博士論文の対応"
        intro="章構成は計画上の提案です。研究結果と指導教員の確認に応じて更新します。"
      >
        <TupleTable
          headings={["章", "役割", "主な研究・成果", "作業時期"]}
          rows={thesisChapters}
          caption="博士論文の想定章構成"
        />
        <Callout title="論文数より接続を優先" badge="確定" tone="success">
          <p>
            毎夏一社・一原稿を目標にしますが、投稿本数を増やすことより、
            博士論文の中心問いへ貢献すること、公開・博士論文利用・終了後アクセスを
            書面で確認できることを優先します。
          </p>
        </Callout>
      </Section>

      <Section
        id="papers"
        eyebrow="PUBLICATION PLAN"
        title="論文計画"
        intro="日付の多くは内部目標です。正式締切ではないものを「確定」と表示しません。"
      >
        <TupleTable
          headings={["段階", "成果", "内部目標", "判断ルール"]}
          rows={publicationPlan}
          caption="2026年7月〜2030年3月の投稿計画"
        />
        <h3 className="rm-subheading">五つの外部研究と成果</h3>
        <RecordCards items={externalProjects} status="予定" columns={2} />
      </Section>

      <Section
        id="degree"
        eyebrow="JAIST DEGREE"
        title="修了要件と学位工程"
        intro="公開情報を2026年7月26日に確認した記録と、本人の内部目標を分けて表示します。年度ごとの履修案内・教務通知で再確認が必要です。"
      >
        <CardGrid columns={2}>
          <Card title="修了要件の確認項目" badge="要確認">
            <BulletList
              items={degreeRequirements.map(([term, detail]) => (
                <span key={term}>
                  <strong>{term}：</strong>
                  {detail}
                </span>
              ))}
            />
          </Card>
          <Card title="学位工程を守る条件" badge="予定">
            <BulletList
              items={[
                "D3夏の企業研究は、主要実験・全章構成・主要図表・初稿70〜80%・主要投稿・指導教員承認が揃った場合だけ。",
                "2029年7月の骨子、10月の予備審査願、12月の予備審査、2030年1月の論文提出を最優先。",
                "正式日程が公開されたら、推定月を実日付へ置き換える。",
              ]}
            />
          </Card>
        </CardGrid>
        <div className="rm-milestone-list">
          {degreeMilestones.map((item) => (
            <article key={`${item.time}-${item.standard}`}>
              <div>
                <span className="rm-time">{item.time}</span>
                <Badge>
                  {item.standard.includes("予定") ||
                  item.standard.includes("個人計画") ||
                  item.standard.includes("公式締切ではなく")
                    ? "推定"
                    : "要確認"}
                </Badge>
              </div>
              <div>
                <h3>{item.standard}</h3>
                <p>
                  <strong>内部目標：</strong>
                  {item.internal}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="support"
        eyebrow="SUPPORT PROGRAMS"
        title="学位と研究を支える制度"
        intro="対象年度、申請条件、併給、単位認定、在学中の利用回数は必ず窓口と最新要項で確認します。"
      >
        <RecordCards items={supportPrograms} status="要確認" columns={2} />
      </Section>

      <Section
        id="next-actions"
        eyebrow="NEXT ACTIONS"
        title="研究ページの次の行動"
        intro="2026年内は、新しい実験を増やすより博士論文の背骨を作ります。"
      >
        <CardGrid columns={3}>
          <Card title="2026年8月" badge="予定">
            <p>修士研究のデータ・解析仕様を凍結し、再現手順を残す。</p>
          </Card>
          <Card title="2026年9月" badge="予定">
            <p>本文80%・結果100%を基準に投稿可否と投稿先を決める。</p>
          </Card>
          <Card title="2026年10〜12月" badge="提案">
            <p>中心研究質問、論文候補3本、章対応、共通データを一枚にする。</p>
          </Card>
        </CardGrid>
        <UpdateNotice />
      </Section>
    </>
  );
}
