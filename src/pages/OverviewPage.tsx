import {
  decisionGates,
  riskRows,
  scenarioOptions,
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
  UpdateNotice,
} from "./PageKit";

const nextNinetyDays = [
  {
    date: "2026年7月末",
    title: "博士3年間について指導教員と90分面談",
    category: "研究",
    status: "予定",
    action: "面談用に中心テーマ候補3案と質問事項を1枚へ整理する",
    href: "/roadmap/research/",
  },
  {
    date: "2026年8月",
    title: "修士研究のデータ・解析仕様を凍結",
    category: "研究",
    status: "予定",
    action: "変更点と再現手順を研究記録へ残す",
    href: "/roadmap/research/",
  },
  {
    date: "2026年8月",
    title: "海外研究の1ページ案と英語CVを作成",
    category: "海外留学",
    status: "予定",
    action: "海外でしかできない検証条件を明文化する",
    href: "/roadmap/research-stays/#overseas",
  },
  {
    date: "2026年8月",
    title: "国内・海外・企業候補を一覧化",
    category: "外部活動",
    status: "進行中",
    action: "海外10件、国内・企業各5件から比較を始める",
    href: "/roadmap/research-stays/",
  },
  {
    date: "2026年9月",
    title: "修士研究の投稿可否を判断",
    category: "論文",
    status: "予定",
    action: "本文80%・結果100%を満たすか確認し、投稿先を決める",
    href: "/roadmap/research/",
  },
  {
    date: "2026年10月",
    title: "博士論文の背骨を1ページにする",
    category: "学位",
    status: "提案",
    action: "中心研究質問、論文候補3本、章との対応を固定する",
    href: "/roadmap/research/#thesis-map",
  },
] as const;

const quarterFocus = [
  {
    title: "研究",
    items: [
      "修士研究のデータと解析仕様を凍結",
      "博士論文の中心テーマ候補を3案へ",
      "9月投稿のGO／延期を判断",
    ],
  },
  {
    title: "キャリア",
    items: [
      "企業研究所・国立研究機関の候補リストを作る",
      "D1夏の論文型インターン条件を言語化",
    ],
  },
  {
    title: "外部活動",
    items: [
      "国内・企業候補を各5件へ整理",
      "海外候補10件と資金制度を確認",
    ],
  },
  {
    title: "生活・お金",
    items: [
      "睡眠と支出の記録を開始",
      "D1の資金分岐表を作る",
      "寮を基準に固定費を増やさない",
    ],
  },
] as const;

const criticalDeadlines = [
  {
    dateTime: "2027-12-15",
    date: "2027年12月15日",
    title: "D1企業論文の投稿目標",
    status: "予定",
  },
  {
    dateTime: "2028-02-29",
    date: "2028年2月29日",
    title: "副テーマ研究題目届・国内滞在の終了",
    status: "要確認",
  },
  {
    dateTime: "2028-04-30",
    date: "2028年4月30日",
    title: "D2夏企業の条件確定",
    status: "提案",
  },
  {
    dateTime: "2028-05-31",
    date: "2028年5月31日",
    title: "海外研究留学の最終GO",
    status: "提案",
  },
  {
    dateTime: "2029-05-31",
    date: "2029年5月31日",
    title: "D3博士論文の進捗確認",
    status: "提案",
  },
  {
    dateTime: "2029-07",
    date: "2029年7月",
    title: "博士論文骨子",
    status: "推定",
  },
  {
    dateTime: "2030-01",
    date: "2030年1月",
    title: "博士論文提出",
    status: "推定",
  },
] as const;

const pendingDecisions = [
  {
    title: "博士論文の中心問い",
    due: "2026年12月",
    provisional: "ラポールの推定・転換予測・適応行動を一本化",
    next: "中心テーマ候補3案を指導教員と比較",
    href: "/roadmap/research/",
  },
  {
    title: "D1冬の国内滞在先",
    due: "2027年10月",
    provisional: "NII本命、京都大学HRIは研究が適応行動へ進む場合",
    next: "最近の論文を読み、D1開始後に個別提案",
    href: "/roadmap/research-stays/#domestic",
  },
  {
    title: "D2夏の企業研究先",
    due: "2028年3〜4月",
    provisional: "6〜8週間・論文公開可能で、7月中に終わる一社",
    next: "期間、知財、博士論文利用、終了後アクセス、8月の移行月を比較",
    href: "/roadmap/internships/",
  },
  {
    title: "海外研究先と資金",
    due: "2028年5月31日",
    provisional: "2028年9月〜2029年2月の6か月共同研究枠",
    next: "受入・資金・倫理・データ移転を順に確定",
    href: "/roadmap/research-stays/#overseas",
  },
  {
    title: "引っ越しと車",
    due: "海外留学後に再判定",
    provisional: "寮継続、車は博士修了後が基準",
    next: "利用日数、固定費、生活防衛資金を記録",
    href: "/roadmap/finance-life/",
  },
  {
    title: "企業就職かアカデミアか",
    due: "2029年3〜6月",
    provisional: "企業AI・ロボティクス研究職を軸に比較",
    next: "D1から研究者面談とポートフォリオを積む",
    href: "/roadmap/career/",
  },
] as const;

export function OverviewPage() {
  return (
    <>
      <Lead>
        2030年3月の博士修了を最優先に、D1・D2夏は一社で企業研究、
        D3は博士論文と就職の完成に集中します。
        D1冬は国内で方法論、D2は海外で6か月の共同研究を行います。今はM2で、
        修士研究を凍結しながら博士論文の中心問いを決める段階です。
      </Lead>

      <Callout
        title="今いちばん大切なこと"
        badge="進行中"
        tone="success"
        headingLevel={2}
      >
        <p>
          2026年9月までに修士研究の投稿可否を決め、10月までに博士論文の
          中心研究質問と3本の論文候補を一枚へまとめます。外部活動の数を
          増やす前に、すべてを同じ博士研究へ接続できるかを確認します。
        </p>
      </Callout>

      <Section
        id="current"
        eyebrow="CURRENT POSITION"
        title="現在地"
        intro="この欄だけで、計画の前提と今の優先順位を確認できます。"
      >
        <CardGrid columns={3}>
          <Card title="M2・JAIST" eyebrow="現在の段階" badge="進行中">
            <KeyValueList
              items={[
                ["基準日", <time dateTime="2026-07-26">2026年7月26日</time>],
                ["博士進学予定", <time dateTime="2027-04">2027年4月</time>],
                ["博士修了目標", <time dateTime="2030-03">2030年3月</time>],
              ]}
            />
          </Card>
          <Card title="Human–Robot Interaction" eyebrow="研究の中心" badge="提案">
            <p>
              音声・視線・表情・姿勢・対話履歴から社会的状態を推定し、
              離脱や転換を予測してロボットの適応行動へ接続する。
            </p>
          </Card>
          <Card title="B・バランス案" eyebrow="基準シナリオ" badge="予定">
            <p>
              外部研究5枠を役割分担し、博士論文・健康・資金のゲートを
              通過したものだけ実施します。
            </p>
          </Card>
        </CardGrid>
      </Section>

      <Section
        id="next-90"
        eyebrow="NEXT 90 DAYS"
        title="次の90日"
        intro="基準日からおよそ90日以内に動かす項目を6件へ絞っています。"
      >
        <ol className="rm-action-list">
          {nextNinetyDays.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <div className="rm-action-list__date">{item.date}</div>
              <div className="rm-action-list__content">
                <div className="rm-action-list__meta">
                  <Badge>{item.status}</Badge>
                  <span>{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>
                  <strong>次の行動：</strong>
                  {item.action}
                </p>
              </div>
              <a href={item.href} aria-label={`${item.title}の詳細を見る`}>
                詳細
                <span aria-hidden="true"> →</span>
              </a>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="quarter"
        eyebrow="THIS QUARTER"
        title="今四半期の重点"
        intro="2026年7〜9月。各分野で増やしすぎず、完了条件を明確にします。"
      >
        <CardGrid columns={4}>
          {quarterFocus.map((focus) => (
            <Card key={focus.title} title={focus.title} badge="進行中">
              <BulletList items={focus.items} />
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="deadlines"
        eyebrow="CRITICAL PATH"
        title="修了に影響する重要締切"
        intro="正式日程と内部目標を分けています。「推定」「要確認」は必ず年度ごとの公式情報で更新します。"
      >
        <div className="rm-deadline-strip">
          {criticalDeadlines.map((deadline) => (
            <article key={`${deadline.date}-${deadline.title}`}>
              <time dateTime={deadline.dateTime}>{deadline.date}</time>
              <h3>{deadline.title}</h3>
              <Badge>{deadline.status}</Badge>
            </article>
          ))}
        </div>
        <p className="rm-inline-note">
          学位日程の詳細は
          <a href="/roadmap/research/#degree">研究・学位ページ</a>
          で確認できます。
        </p>
      </Section>

      <Section
        id="decisions"
        eyebrow="OPEN DECISIONS"
        title="判断待ち"
        intro="未決定のまま進めず、期限・暫定案・次の確認を並べます。"
      >
        <CardGrid columns={3}>
          {pendingDecisions.map((decision) => (
            <Card
              key={decision.title}
              title={decision.title}
              eyebrow={`判断目安：${decision.due}`}
              badge="候補"
              href={decision.href}
              linkLabel="判断材料を見る"
            >
              <KeyValueList
                items={[
                  ["現在の暫定案", decision.provisional],
                  ["次の確認", decision.next],
                ]}
              />
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="risks"
        eyebrow="EARLY WARNING"
        title="重大リスク"
        intro="早期警戒指標に触れたら、外部活動を縮小して博士論文と健康を守ります。"
      >
        <div className="rm-risk-list">
          {riskRows
            .filter((_, index) => [0, 1, 2, 6, 7, 8, 9].includes(index))
            .map(([risk, warning, response]) => (
              <article key={risk}>
                <Badge tone="cancelled">リスク</Badge>
                <div>
                  <h3>{risk}</h3>
                  <p>
                    <strong>警戒：</strong>
                    {warning}
                  </p>
                  <p>
                    <strong>対策：</strong>
                    {response}
                  </p>
                </div>
              </article>
            ))}
        </div>
        <p className="rm-inline-note">
          全12件のリスクと判断ゲートは
          <a href="/roadmap/decisions/">判断・リスク・資料ページ</a>
          にまとめています。
        </p>
      </Section>

      <Section
        id="principles"
        eyebrow="OPERATING RULES"
        title="この計画を守る順番"
        intro="外部活動を多く行うこと自体を成果にせず、研究と生活の持続性で判断します。"
      >
        <CardGrid columns={2}>
          <Card title="守るもの" badge="確定">
            <ol className="rm-ranked-list">
              <li>2030年3月の博士修了</li>
              <li>博士論文へ接続する研究成果</li>
              <li>睡眠・食事・回復期間</li>
              <li>資金と生活防衛資金</li>
              <li>外部研究とキャリア判断</li>
              <li>人間関係を育てられる余白</li>
            </ol>
          </Card>
          <Card title="過密時に削る順番" badge="提案">
            <ol className="rm-ranked-list">
              <li>一般アルバイト</li>
              <li>車の購入</li>
              <li>任意参加の学会</li>
              <li>山小屋の長期バイト</li>
              <li>予定外の追加外部活動</li>
              <li>博士論文と無関係な共同研究</li>
            </ol>
          </Card>
        </CardGrid>
        <h3 className="rm-subheading">計画シナリオ</h3>
        <RecordCards
          items={scenarioOptions}
          status={(item) => (item.recommended ? "予定" : "候補")}
          columns={3}
        />
      </Section>

      <Section
        id="update"
        eyebrow="MAINTENANCE"
        title="更新のしかた"
        intro="予定が変わることを前提に、定期的に状態と出典を更新します。"
      >
        <CardGrid columns={4}>
          <Card title="毎月末" badge="予定">
            <p>進捗、睡眠、支出、次の90日、判断待ちを更新。</p>
          </Card>
          <Card title="四半期ごと" badge="予定">
            <p>D1〜D3の重なり、研究成果、外部活動の負荷を再評価。</p>
          </Card>
          <Card title="毎年4月" badge="予定">
            <p>JAIST制度、助成、企業募集、金額、公式リンクを確認。</p>
          </Card>
          <Card title="外部活動6か月前" badge="予定">
            <p>受入、倫理、知財、データ、住居、保険、回復期間を確認。</p>
          </Card>
        </CardGrid>
        <UpdateNotice />
      </Section>

      <details className="rm-details rm-details--appendix">
        <summary>判断ゲート原文を確認する（全17件）</summary>
        <RecordCards items={decisionGates} status="提案" columns={2} />
      </details>
    </>
  );
}
