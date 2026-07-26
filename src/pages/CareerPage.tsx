import {
  internshipCandidates,
  overseasCompanyCandidates,
  toyotaEcosystem,
} from "../data";
import {
  Badge,
  BulletList,
  Callout,
  Card,
  CardGrid,
  KeyValueList,
  Lead,
  Section,
  TupleTable,
  UpdateNotice,
} from "./PageKit";

const careerTracks = [
  {
    title: "企業AI・ロボティクス研究職",
    status: "予定",
    fit: "HRI、対話AI、マルチモーダル理解、ロボット行動を論文と実装の両方へつなげやすい。",
    evidence: "D1・D2の企業研究2回、国際論文、コード・デモ、共同研究の実績",
  },
  {
    title: "企業研究開発職",
    status: "候補",
    fit: "製品・サービスへの実装、データ・計算環境、長期的な社会実装を重視する道。",
    evidence: "研究成果に加え、チーム開発、再現性、知財・公開条件下での成果形成",
  },
  {
    title: "国立研究機関",
    status: "候補",
    fit: "中長期の基礎・応用研究と大学共同研究を続けやすい。",
    evidence: "博士論文の独自性、外部資金、研究計画、共同研究ネットワーク",
  },
  {
    title: "ポスドク・大学教員",
    status: "候補",
    fit: "研究テーマを自分で拡張し、教育と研究を両立する道。",
    evidence: "主著論文、研究計画、教育経験、国際共同研究、資金獲得可能性",
  },
  {
    title: "海外就職",
    status: "候補",
    fit: "国際共同研究と英語での研究遂行をキャリアへ直接接続する。",
    evidence: "英語CV・研究発表、海外受入先の推薦、ビザ・生活条件の確認",
  },
] as const;

const annualCareerPlan = [
  [
    "D1",
    "探索・準備",
    "職種と組織を調べ、応募先の評価軸と共通の応募資料を作る",
    "英日CV、1ページ研究概要、研究紹介スライド、公開実績",
  ],
  [
    "2028年4〜5月",
    "応募・面接",
    "D2開始と同時に本命候補へ応募し、書類選考と面接を進める",
    "応募先別の研究案、想定質問、推薦依頼",
  ],
  [
    "2028年6〜7月",
    "インターン・比較",
    "企業研究インターンを、研究文化・仕事内容・就職先を比べる材料にする",
    "研究成果、企業比較メモ、希望条件リスト",
  ],
  [
    "2028年8〜12月",
    "主要選考・内定比較",
    "主要選考を終え、内定・採用条件・研究環境を同じ軸で比較する",
    "研究発表、条件比較表、入社後研究案",
  ],
  [
    "2029年1〜3月",
    "承諾・進路確定",
    "最終候補を一つに決め、3月末までに承諾と進路確定を終える",
    "承諾条件、勤務地・住居、修了後の移行計画",
  ],
  [
    "D3",
    "博士論文・審査",
    "新規応募と選考を行わず、博士論文、予備審査、本審査へ集中する",
    "博士論文、審査資料、研究・生活の引き継ぎ",
  ],
] as const;

const decisionCriteria = [
  ["研究の自由度", "自分の中心テーマを3〜5年継続・発展できるか"],
  ["論文と知財", "国際発表、博士論文、オープンな成果をどこまで認めるか"],
  ["データ・設備", "実環境HRIに必要な人、ロボット、データ、計算資源があるか"],
  ["メンターとチーム", "研究を評価できる上司と、議論できる同僚がいるか"],
  ["評価制度", "短期製品成果だけでなく研究の蓄積が評価されるか"],
  ["生活", "勤務地、給与、働き方、パートナー・家族との生活を両立できるか"],
  ["将来性", "研究者としての市場価値、次の選択肢、国際性を育てられるか"],
] as const;

const portfolioItems = [
  "研究を5分・15分・30分で説明できる日本語／英語スライド",
  "主著論文、プレプリント、ポスター、動画デモへの一つの入口",
  "公開可能なコード、再現手順、データ説明、研究上の判断記録",
  "研究A〜Cと博士論文の章対応を示す一枚",
  "企業研究・国内滞在・海外研究で何が変わったかの振り返り",
  "応募先ごとの入社後研究案と、その企業で行う理由",
] as const;

export function CareerPage() {
  return (
    <>
      <Lead>
        D1で職種と応募資料を準備し、D2の2028年4月から応募・面接を始めます。
        6〜7月の企業研究インターンを比較材料にし、D2後半に主要選考と内定比較、
        2029年3月までに承諾と進路確定を終えます。D3は新規応募・選考を行わず、
        博士論文と審査に集中します。
      </Lead>

      <Callout title="現在の軸" badge="提案" tone="info" headingLevel={2}>
        <p>
          第一の探索軸は企業AI・ロボティクス研究職です。
          ただし国立研究機関、ポスドク、大学教員、海外就職を早期に除外せず、
          D2の選考期間中に共通の判断基準で比較し、2029年3月までに決めます。
        </p>
      </Callout>

      <Section
        id="directions"
        eyebrow="CAREER TRACKS"
        title="検討する進路"
        intro="候補を一つに決め打ちせず、博士課程で得たい証拠を進路ごとに整理します。"
      >
        <CardGrid columns={3}>
          {careerTracks.map((track) => (
            <Card key={track.title} title={track.title} badge={track.status}>
              <KeyValueList
                items={[
                  ["相性", track.fit],
                  ["博士課程で作る証拠", track.evidence],
                ]}
              />
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        id="schedule"
        eyebrow="D1 PREP → D2 DECISION"
        title="D2で完全に終える就活計画"
        intro="2029年3月31日までに承諾と進路確定を終え、D3へ選考を持ち越しません。"
      >
        <TupleTable
          headings={["時期", "段階", "行動", "準備するもの"]}
          rows={annualCareerPlan}
          caption="D1の準備からD2末の進路確定までのキャリア計画"
        />
      </Section>

      <Section
        id="internship-connection"
        eyebrow="INTERNSHIP CONNECTION"
        title="インターンと就職判断をつなぐ"
        intro="企業の制度情報はインターンページの共通データを参照し、ここではキャリア上の役割だけを表示します。"
      >
        <div className="rm-reference-list">
          {internshipCandidates.map((candidate, index) => (
            <article key={candidate.name}>
              <div>
                <span className="rm-index">{candidate.rank}</span>
                <div>
                  <h3>{candidate.name}</h3>
                  <p>{candidate.role}</p>
                </div>
              </div>
              <Badge>{index === 0 ? "予定" : "候補"}</Badge>
            </article>
          ))}
        </div>
        <p className="rm-inline-note">
          期間・待遇・論文化・知財・公式リンクは
          <a href="/roadmap/internship-details/#candidates">
            企業インターン候補
          </a>
          で一元管理しています。
        </p>
      </Section>

      <Section
        id="portfolio"
        eyebrow="EVIDENCE"
        title="ポートフォリオ・論文・面接準備"
        intro="応募ごとに資料を作り直さず、研究の中核資料を更新して使います。"
      >
        <CardGrid columns={2}>
          <Card title="ポートフォリオ" badge="予定">
            <BulletList items={portfolioItems} />
          </Card>
          <Card title="面接・研究発表" badge="提案">
            <BulletList
              items={[
                "中心研究質問と貢献を1分で説明",
                "失敗した実験、倫理・データ・知財の判断を具体的に説明",
                "企業研究で自分が担った範囲と共著者の貢献を分ける",
                "博士論文と入社後研究の連続性を示す",
                "勤務地・公開・評価制度・研究時間について逆質問を用意",
              ]}
            />
          </Card>
          <Card title="人脈形成" badge="予定">
            <BulletList
              items={[
                "D1で研究者・採用担当との面談8回",
                "学会では発表だけでなく候補研究者と短い面談",
                "国内・海外滞在先と月次で研究相談",
                "推薦を頼む直前ではなく、成果と進捗を定期共有",
              ]}
            />
          </Card>
          <Card title="応募管理" badge="提案">
            <BulletList
              items={[
                "募集開始・締切・面接・結果日をタイムラインへ登録",
                "企業ごとの応募目的と辞退条件を先に書く",
                "D2前半は5〜8件から始め、夏までに2〜3件へ絞る",
                "2028年12月までに主要選考を終え、2029年3月を承諾期限にする",
                "D3へ新規応募・面接・選考を持ち越さない",
              ]}
            />
          </Card>
        </CardGrid>
      </Section>

      <Section
        id="criteria"
        eyebrow="DECISION CRITERIA"
        title="キャリア判断基準"
        intro="年収や知名度だけでなく、研究を続けられる条件と生活を同じ表で比較します。"
      >
        <TupleTable
          headings={["評価軸", "確認する質問"]}
          rows={decisionCriteria}
          caption="就職先・進路の共通判断基準"
        />
      </Section>

      <Section
        id="options"
        eyebrow="EMPLOYMENT / ACADEMIA"
        title="企業就職案とアカデミア案"
        intro="どちらも仮説として残し、D2末までの成果と実際の環境を見て判断します。"
      >
        <CardGrid columns={2}>
          <Card title="企業就職案" badge="予定">
            <BulletList
              items={[
                "実環境HRI、対話AI、マルチモーダル理解を持つ研究所・R&D",
                "論文公開と知財の両立、博士研究の継続可能性を重視",
                "インターンでメンター、評価制度、日常の研究文化を確認",
                "2029年3月までに承諾と進路確定を終了",
              ]}
            />
          </Card>
          <Card title="アカデミア・研究機関案" badge="候補">
            <BulletList
              items={[
                "国内外のポスドク、国立研究機関、大学教員を比較",
                "研究計画、主著論文、外部資金、教育経験を準備",
                "海外研究先との共同研究継続と推薦可能性を確認",
                "任期・勤務地・次の職への移行リスクも評価",
              ]}
            />
          </Card>
        </CardGrid>
      </Section>

      <Section
        id="open-questions"
        eyebrow="OPEN QUESTIONS"
        title="まだ決めていないこと"
        intro="決めていないことを明示し、D1・D2で必要な証拠を集めます。"
      >
        <CardGrid columns={3}>
          <Card title="研究と製品の比率" badge="候補">
            <p>論文中心の研究所か、社会実装に近いR&Dか。D1・D2の企業経験で比較。</p>
          </Card>
          <Card title="国内か海外か" badge="候補">
            <p>研究環境、ビザ、生活、パートナー・家族との将来を含めて判断。</p>
          </Card>
          <Card title="就職かポスドクか" badge="候補">
            <p>2029年3月時点の論文、研究計画、資金、求人条件で再判定。</p>
          </Card>
        </CardGrid>
        <details className="rm-details rm-details--appendix">
          <summary>海外企業・トヨタグループ周辺の探索候補</summary>
          <CardGrid columns={2}>
            <Card title="海外企業候補" badge="候補">
              <BulletList
                items={overseasCompanyCandidates.map((item) => (
                  <span key={item.name}>
                    <strong>{item.name}：</strong>
                    {item.role}
                  </span>
                ))}
              />
            </Card>
            <Card title="トヨタグループ周辺" badge="候補">
              <BulletList
                items={toyotaEcosystem.map((item) => (
                  <span key={item.name}>
                    <strong>{item.name}：</strong>
                    {item.category}
                  </span>
                ))}
              />
            </Card>
          </CardGrid>
        </details>
        <UpdateNotice />
      </Section>
    </>
  );
}
