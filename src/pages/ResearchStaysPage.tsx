import {
  domesticAdjust,
  domesticDirections,
  domesticFunding,
  domesticGo,
  domesticReadiness,
  domesticRoadmap,
  domesticSixWeekPlan,
  hostCandidates,
  jspsRoutes,
  overseasChecks,
  overseasCompanyCandidates,
  overseasDelay,
  overseasExecution,
  overseasExploration,
  overseasGo,
  overseasRoadmap,
  overseasThemes,
} from "../data";
import {
  overseasCostEstimates,
  overseasPrimaryFundingRoutes,
} from "../data/finances";
import { organizations } from "../data/organizations";
import { sourceById } from "../data/sources";
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
  SourceAnchor,
  TupleTable,
  UpdateNotice,
} from "./PageKit";

const stayComparison = [
  [
    "D1冬・国内滞在研究",
    "4〜6週間",
    "短期住居・交通・二重住居費",
    "国内は別予算を基本。JAIST研究留学助成を海外用に残す",
    "高い：方法論・コードブック・原稿50〜70%",
    "研究Bの推定根拠と相互行為分析",
    "中：受入教員、所属大学申請、受入機関承認、倫理・データ",
    "中：寮を維持し短期住居",
    "2028年1月中旬〜2月末",
    "第1優先。ただしD1企業論文投稿が条件",
  ],
  [
    "D2後半・海外大学研究",
    "6か月",
    "渡航・住居・保険・ビザ・二重家賃",
    "JAIST研究留学助成、JASSO協定派遣、受入先支援を最新年度で確認",
    "高い：既存成果の一般化・外的妥当性",
    "研究C・統合章の検証",
    "高：受入、資金、倫理、データ移転、知財、著者順、ビザ",
    "高：海外生活と帰国後の回復",
    "2028年9月〜2029年2月",
    "最重要の海外枠。D2企業は6〜8週間に抑え、8月を移行月として保護",
  ],
] as const;

function StringChecklist({
  title,
  items,
  badge,
}: {
  title: string;
  items: readonly string[];
  badge: string;
}) {
  return (
    <Card title={title} badge={badge}>
      <BulletList items={items} />
    </Card>
  );
}

const domesticOrganizations = organizations.filter((organization) =>
  organization.categoryFit.includes("国内滞在"),
);

const overseasAcademicOrganizations = organizations.filter(
  (organization) =>
    organization.locationScope === "海外" &&
    organization.categoryFit.includes("海外研究") &&
    organization.organizationType === "大学・研究機関",
);

function StayOrganizationCards({
  items,
  scope,
}: {
  items: typeof organizations;
  scope: "domestic" | "overseas";
}) {
  const isDomestic = scope === "domestic";
  return (
    <CardGrid columns={2}>
      {items.map((organization) => {
        const linkedSource = organization.sourceIds
          .map((sourceId) => sourceById[sourceId])
          .find((source) => source?.url);
        return (
          <Card
            key={organization.id}
            title={organization.name}
            eyebrow={organization.role}
            badge={organization.status}
          >
            <KeyValueList
              items={[
                [
                  "研究テーマとの相性",
                  organization.fit ??
                    "候補研究室の最近の論文を読み、研究A〜Cとの接続を面談で確認する。",
                ],
                ["想定期間", isDomestic ? "4〜6週間" : "6か月"],
                [
                  "推奨時期",
                  isDomestic
                    ? "D1冬・2028年1月中旬〜2月末"
                    : "D2後半・2028年9月〜2029年2月",
                ],
              ]}
            />
            <details className="rm-details">
              <summary>制度・資金・準備・論文・リスクを確認</summary>
              <KeyValueList
                items={[
                  [
                    "受入制度",
                    organization.facts ??
                      "Visiting PhD／Visiting Graduate Student等の制度と個別受入の可否を要確認。",
                  ],
                  [
                    "資金",
                    isDomestic
                      ? "国内は別予算を基本とし、短期住居・交通・二重住居費を確認。"
                      : "JAIST研究留学助成、JASSO協定派遣、受入先支援を主候補として実施年度に確認。",
                  ],
                  [
                    "事前準備",
                    "研究提案、受入教員、JAIST手続き、倫理・データ、公開・知財、住居・保険を確定。",
                  ],
                  [
                    "論文への接続",
                    isDomestic
                      ? "相互行為コードブックと方法論を研究B・博士論文へ接続。"
                      : "既存成果の一般化・外的妥当性を研究C・統合章へ接続。",
                  ],
                  ["メリット", organization.role],
                  [
                    "リスク",
                    organization.caution ??
                      "受入制度、6か月の継続指導、論文公開、データ移転、生活条件が未確認。",
                  ],
                ]}
              />
            </details>
            {linkedSource?.url ? (
              <SourceAnchor href={linkedSource.url}>
                {organization.name}の公式情報
              </SourceAnchor>
            ) : null}
          </Card>
        );
      })}
    </CardGrid>
  );
}

export function ResearchStaysPage() {
  return (
    <>
      <Lead>
        国内滞在はD1冬に一度、海外研究はD2後半に一度だけ置きます。
        国内は「推定の根拠を深める方法論」、海外は「既存成果の一般化・外的妥当性」
        と役割を分け、企業研究と同じ成果を繰り返しません。
      </Lead>

      <nav className="rm-section-switcher" aria-label="外部研究ページ内の移動">
        <a href="#domestic">国内滞在研究</a>
        <a href="#overseas">海外研究留学</a>
        <a href="#comparison">国内・海外比較</a>
        <a href="#procedures">共通手続き</a>
      </nav>

      <Callout
        title="公開済みの固定プログラムではない"
        badge="要確認"
        tone="warning"
        headingLevel={2}
      >
        <p>
          D1冬の4〜6週間、D2後半の6か月はいずれも本人の計画です。
          受入教員の同意、JAIST側手続き、受入機関の正式承認、資金、倫理、
          データ・知財条件が揃うまで、返金不能な契約はしません。
        </p>
      </Callout>

      <Section
        id="domestic"
        eyebrow="DOMESTIC RESEARCH STAY"
        title="D1冬の国内滞在研究"
        intro="本命はNII。研究がロボット適応へ進んだ場合のみ京都大学HRIを条件付き候補とし、RIKEN・ATR等は制度と所属を混同しないよう個別に確認します。"
      >
        <CardGrid columns={2}>
          {domesticDirections.map((direction) => (
            <Card
              key={direction.label}
              title={direction.title}
              eyebrow={direction.label}
              badge={direction.label.includes("本命") ? "予定" : "候補"}
            >
              <p>{direction.text}</p>
            </Card>
          ))}
        </CardGrid>

        <h3 className="rm-subheading">候補8件の共通比較項目</h3>
        <StayOrganizationCards
          items={domesticOrganizations}
          scope="domestic"
        />

        <h3 className="rm-subheading">準備から帰還後まで</h3>
        <div className="rm-milestone-list">
          {domesticRoadmap.map((item) => (
            <article key={`${item.time}-${item.title}`}>
              <div>
                <span className="rm-time">{item.time}</span>
                <Badge>予定</Badge>
              </div>
              <div>
                <p className="rm-eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <CardGrid columns={2}>
          <Card title="実施前の準備度" badge="予定">
            <TupleTable
              headings={["確認項目", "完了条件", "目安"]}
              rows={domesticReadiness}
              caption="国内滞在の準備度"
            />
          </Card>
          <Card title="4〜6週間の現地計画" badge="提案">
            <TupleTable
              headings={["期間", "作業"]}
              rows={domesticSixWeekPlan}
              caption="国内滞在の6週間モデル"
            />
          </Card>
        </CardGrid>

        <CardGrid columns={2}>
          <StringChecklist title="実施する条件" items={domesticGo} badge="予定" />
          <StringChecklist
            title="縮小・オンラインへ変える条件"
            items={domesticAdjust}
            badge="要確認"
          />
        </CardGrid>

        <Card
          title={domesticFunding.title}
          eyebrow="国内滞在の資金"
          badge="要確認"
        >
          <p>{domesticFunding.body}</p>
          <KeyValueList
            items={[
              ["次の行動", domesticFunding.action],
              ["予算", domesticFunding.budget],
              [
                "公式情報",
                <SourceAnchor href={domesticFunding.href}>
                  {domesticFunding.title}
                </SourceAnchor>,
              ],
            ]}
          />
        </Card>
      </Section>

      <Section
        id="overseas"
        eyebrow="OVERSEAS RESEARCH"
        title="D2後半の海外研究留学"
        intro="2028年9月〜2029年2月の6か月を本命とし、D2企業研究で作った成果を別環境で検証し、共同研究を深めます。探索だけで終わらせず、博士論文へ統合できる成果を残します。"
      >
        <Callout title="海外枠の位置付け" badge="予定" tone="success">
          <p>
            D2企業研究は2028年6〜7月の6〜8週間に抑え、
            8月を成果整理・回復・渡航準備の専用月として保護します。
            9月からの海外研究は企業インターンを追加する枠ではなく、
            大学・研究機関で外的妥当性を検証する6か月の共同研究枠です。
          </p>
        </Callout>

        <Callout title="6か月は制度上も検討できる長さ" badge="公式情報" tone="info">
          <p>
            JAISTのOverseas Research Challenge Cは2か月超を対象とし、
            JASSOの協定派遣は8日以上1年以内を対象範囲としています。
            したがって6か月は期間だけで除外されませんが、受入形態・学内推薦・
            単位・資金の適用は2028年度に個別確認します。
          </p>
          <p>
            <SourceAnchor href="https://www.jaist.ac.jp/english/education/courses/ts-d-internship.html">
              JAISTの科目区分
            </SourceAnchor>
            {" ／ "}
            <SourceAnchor href="https://www.jasso.go.jp/ryugaku/scholarship_a/haken/index.html">
              JASSO協定派遣
            </SourceAnchor>
          </p>
        </Callout>

        <h3 className="rm-subheading">海外大学・研究機関候補</h3>
        <p className="rm-inline-note">
          候補名は探索リストです。6か月の受入、継続的な指導、資金、テーマ、
          論文化が確定しているという意味ではありません。
        </p>
        <StayOrganizationCards
          items={overseasAcademicOrganizations}
          scope="overseas"
        />

        <h3 className="rm-subheading">時期別ロードマップ</h3>
        <div className="rm-milestone-list">
          {overseasRoadmap.map((item) => (
            <article key={`${item.time}-${item.title}`}>
              <div>
                <span className="rm-time">{item.time}</span>
                <Badge>予定</Badge>
              </div>
              <div>
                <p className="rm-eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="rm-subheading">海外で扱う研究テーマ</h3>
        <RecordCards items={overseasThemes} status="候補" columns={3} />

        <h3 className="rm-subheading">出発前・滞在中・帰国後</h3>
        <RecordCards items={overseasExecution} status="予定" columns={2} />

        <h3 className="rm-subheading">受入・法務・生活の確認</h3>
        <RecordCards items={overseasChecks} status="要確認" columns={2} />

        <details className="rm-details rm-details--appendix">
          <summary>候補探索の観点と企業系の代替候補</summary>
          <RecordCards items={overseasExploration} status="候補" columns={2} />
          <h4 className="rm-minor-heading">企業系の代替候補</h4>
          <RecordCards
            items={overseasCompanyCandidates}
            status="候補"
            columns={3}
          />
        </details>

        <h3 className="rm-subheading">6か月留学の主な資金候補</h3>
        <RecordCards
          items={overseasPrimaryFundingRoutes}
          status={(item) => String(item.status ?? "要確認")}
          columns={3}
        />

        <Card title="海外滞在費の見積項目" badge="要再試算">
          <p>
            6か月分は国・都市・為替・二重家賃で大きく変わるため、
            受入先決定後に月別で再試算します。
          </p>
          <RecordCards
            items={overseasCostEstimates}
            status="推定"
            columns={3}
          />
        </Card>

        <h3 className="rm-subheading">
          JSPS制度の位置付け（主なD2留学資金とは分ける）
        </h3>
        <p className="rm-inline-note">
          若手研究者海外挑戦プログラムは募集終了済みです。
          海外特別研究員は博士修了後2年間の制度で、D2の留学資金ではありません。
        </p>
        <RecordCards
          items={jspsRoutes}
          status={(item) => item.label === "旧制度" ? "中止" : "候補"}
          columns={2}
        />

        <CardGrid columns={2}>
          <StringChecklist title="海外へ行く条件" items={overseasGo} badge="予定" />
          <StringChecklist
            title="延期・中止する条件"
            items={overseasDelay}
            badge="要確認"
          />
        </CardGrid>
      </Section>

      <Section
        id="comparison"
        eyebrow="COMPARISON"
        title="国内・海外の役割を比較"
        intro="同じ評価軸で比べることで、期間だけでなく博士論文への貢献と生活負担を判断します。"
      >
        <TupleTable
          headings={[
            "枠",
            "期間",
            "費用",
            "資金制度",
            "論文化",
            "博士論文との接続",
            "手続き負担",
            "生活負担",
            "推奨時期",
            "優先順位",
          ]}
          rows={stayComparison}
          caption="国内滞在研究と海外研究留学の比較"
        />
      </Section>

      <Section
        id="procedures"
        eyebrow="COMMON PROCEDURES"
        title="共通の確認項目"
        intro="外部研究は、研究内容だけでなく受入身分と成果利用条件を開始前に書面化します。"
      >
        <CardGrid columns={3}>
          <Card title="研究・倫理" badge="要確認">
            <BulletList
              items={[
                "研究質問、データ、評価指標、終了条件",
                "倫理審査の要否と申請主体",
                "個人情報・データ移転・保存・削除",
              ]}
            />
          </Card>
          <Card title="成果・知財" badge="要確認">
            <BulletList
              items={[
                "投稿可否と社内・学内公開審査",
                "著者順、知的財産、博士論文への利用",
                "終了後のコード・データ・計算環境へのアクセス",
              ]}
            />
          </Card>
          <Card title="生活・安全" badge="要確認">
            <BulletList
              items={[
                "住居、保険、ビザ、緊急連絡先",
                "二重家賃と生活防衛資金",
                "終了後3〜7日の回復期間",
              ]}
            />
          </Card>
        </CardGrid>
        <details className="rm-details rm-details--appendix">
          <summary>旧ページの受入先カテゴリ一覧</summary>
          <RecordCards items={hostCandidates} status="候補" columns={3} />
        </details>
        <UpdateNotice />
      </Section>
    </>
  );
}
