import type { Priority, RoadmapStatus } from "./types";

/**
 * 2027年4月〜2030年3月の運用用スケジュール。
 *
 * `progress` は応募・実施・投稿までの実務上の進捗を表すため、
 * サイト全体の `RoadmapStatus` より細かい表示用状態をこのファイルで定義する。
 * `roadmapStatus` は既存の絞り込みや状態色へ接続するときに利用する。
 */
export const SCHEDULE_PROGRESS_STATUSES = [
  "候補",
  "応募準備",
  "応募済み",
  "面接中",
  "採用",
  "実施予定",
  "進行中",
  "成果整理中",
  "投稿準備中",
  "完了",
  "延期",
  "中止",
] as const;

export type ScheduleProgressStatus =
  (typeof SCHEDULE_PROGRESS_STATUSES)[number];

export const SCHEDULE_EVIDENCE_KINDS = [
  "事実",
  "本人計画",
  "提案",
  "要確認",
] as const;

export type ScheduleEvidenceKind =
  (typeof SCHEDULE_EVIDENCE_KINDS)[number];

export const SCHEDULE_CATEGORIES = [
  "研究",
  "論文",
  "学会",
  "学位・JAIST手続き",
  "企業インターン",
  "国内滞在研究",
  "海外研究留学",
  "就職活動",
  "資金・奨学金",
  "授業・単位",
  "住居・引っ越し",
  "車",
  "一般アルバイト",
  "山小屋",
  "健康・休養",
  "人間関係・私生活",
  "判断・見直し",
] as const;

export type DoctoralScheduleCategory =
  (typeof SCHEDULE_CATEGORIES)[number];

export type DoctoralYear = "D1" | "D2" | "D3";
export type QuarterKey = "4〜6月" | "7〜9月" | "10〜12月" | "1〜3月";
export type QuarterDomain = "研究" | "キャリア" | "外部活動" | "生活";

export interface ScheduleItem {
  id: string;
  title: string;
  category: DoctoralScheduleCategory;
  progress: ScheduleProgressStatus;
  roadmapStatus: RoadmapStatus;
  evidence: ScheduleEvidenceKind;
  priority: Priority;
  detail?: string;
  nextAction?: string;
  candidates?: string[];
  conditions?: string[];
  sourceIds: string[];
}

export interface DoctoralMonthPlan {
  month: string;
  label: string;
  year: DoctoralYear;
  focus: string;
  blockIds: string[];
  majorItems: ScheduleItem[];
  deadlines: ScheduleItem[];
  nextActions: string[];
  risks: string[];
  buffers: string[];
  decisions: string[];
  healthCheckId: "doctoral-monthly-health-baseline";
}

export interface DoctoralYearPlan {
  year: DoctoralYear;
  startMonth: string;
  endMonth: string;
  purpose: string;
  outcomes: string[];
  guardrail: string;
  status: RoadmapStatus;
  evidence: ScheduleEvidenceKind;
  sourceIds: string[];
}

export interface MajorScheduleBlock {
  id: string;
  title: string;
  year: DoctoralYear;
  category: DoctoralScheduleCategory;
  startMonth: string;
  endMonth: string;
  dateDisplay: string;
  duration: string;
  progress: ScheduleProgressStatus;
  roadmapStatus: RoadmapStatus;
  evidence: ScheduleEvidenceKind;
  priority: Priority;
  objective: string;
  candidates?: string[];
  deliverables: string[];
  prerequisites: string[];
  fallback: string;
  nextAction: string;
  sourceIds: string[];
}

export interface DoctoralQuarterPlan {
  id: string;
  year: DoctoralYear;
  quarter: QuarterKey;
  startMonth: string;
  endMonth: string;
  focus: string;
  domains: Record<QuarterDomain, string[]>;
  largeExternalActivityCount: number;
  buffer: string;
}

export interface DoctoralDecisionPoint {
  id: string;
  deadline: string;
  year: DoctoralYear;
  title: string;
  options: string[];
  criteria: string[];
  provisionalChoice: string;
  confirmations: string[];
  defaultAction: string;
  evidence: ScheduleEvidenceKind;
  priority: Priority;
  sourceIds: string[];
}

export interface MonthlyHealthCheck {
  id: "doctoral-monthly-health-baseline";
  title: string;
  checks: string[];
  relationshipRule: string;
  escalationSignal: string;
  escalationAction: string;
  sourceIds: string[];
}

export interface BufferRule {
  id: string;
  after: string;
  minimum: string;
  rule: string;
}

export interface ConflictRule {
  id: string;
  combination: string[];
  response: string;
}

export interface ScheduleWarningRule {
  id: string;
  condition: string;
  message: string;
  reduction: string;
  priority: Priority;
}

export const doctoralScheduleMeta = {
  id: "doctoral-schedule-2027-2030",
  title: "D1〜D3 博士課程運用スケジュール",
  startMonth: "2027-04",
  endMonth: "2030-03",
  monthCount: 36,
  primaryGoal: "外部活動を活かしつつ、2030年3月の博士修了を守る",
  status: "予定" as const satisfies RoadmapStatus,
  evidence: "本人計画" as const satisfies ScheduleEvidenceKind,
  formalDateCaveat:
    "JAISTの学位・履修・申請日程は実施年度の履修案内、教務通知、担当窓口で必ず再確認する。",
  updatedAt: "2026-07-26",
  sourceIds: [
    "personal-integrated-plan",
    "roadmap-planning-proposal",
    "jaist-degree-guide",
    "jaist-doctoral-schedule",
  ],
};

export const doctoralYearPlans: DoctoralYearPlan[] = [
  {
    year: "D1",
    startMonth: "2027-04",
    endMonth: "2028-03",
    purpose: "研究軸を決め、企業と国内研究の両方で最初の成果を作る。",
    outcomes: [
      "博士論文の中心的な研究質問が確定している",
      "博士論文の想定章構成がある",
      "D1企業インターン成果が投稿済み、または投稿直前",
      "4〜6週間の国内滞在研究が完了している",
      "副テーマ研究の方向が決まっている",
      "海外留学の受入候補とD2企業インターン候補が決まっている",
      "資金計画が安定している",
    ],
    guardrail:
      "夏の企業インターン中は通常研究を夜間・休日に並行せず、その成果を博士研究の一部として扱う。",
    status: "予定",
    evidence: "本人計画",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    year: "D2",
    startMonth: "2028-04",
    endMonth: "2029-03",
    purpose: "企業研究と海外研究を行い、博士論文の主要成果を揃える。",
    outcomes: [
      "博士論文の主要研究が3件程度揃っている",
      "D1企業インターン成果と国内滞在成果が投稿済み",
      "D2企業インターン成果と海外留学成果が投稿可能",
      "博士論文の章構成がほぼ確定している",
      "企業就職かアカデミアかの方向性が決まっている",
      "就職候補が絞られている",
    ],
    guardrail:
      "D2企業インターンは6〜7月の6〜8週間で閉じ、8月を成果整理・回復・渡航準備に使う。海外留学は2029年2月末を終了期限とする。",
    status: "予定",
    evidence: "本人計画",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    year: "D3",
    startMonth: "2029-04",
    endMonth: "2030-03",
    purpose: "研究を増やさず、博士論文、審査、就職を完了する。",
    outcomes: [
      "博士論文を提出し、公聴会・最終試験に合格する",
      "就職先または次の研究先が決定している",
      "研究データ・コード・引き継ぎ資料が整理されている",
      "引っ越し・就業準備と博士課程後の生活計画が完了している",
    ],
    guardrail:
      "博士論文、学位日程、就職活動を最優先し、新規大型研究と企業インターンを追加しない。",
    status: "予定",
    evidence: "本人計画",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "jaist-doctoral-schedule",
    ],
  },
];

export const majorScheduleBlocks: MajorScheduleBlock[] = [
  {
    id: "d1-research-axis",
    title: "博士研究軸・履修・学位計画の確立",
    year: "D1",
    category: "研究",
    startMonth: "2027-04",
    endMonth: "2027-06",
    dateDisplay: "2027年4〜6月",
    duration: "3か月",
    progress: "実施予定",
    roadmapStatus: "予定",
    evidence: "本人計画",
    priority: "最優先",
    objective: "中心的な研究質問と博士論文の仮章構成を定める",
    deliverables: [
      "研究質問1〜2案",
      "想定章構成",
      "必要単位・学位日程一覧",
      "インターン前ベースライン",
    ],
    prerequisites: [
      "主指導・副指導教員との面談",
      "2027年度履修案内の確認",
      "倫理審査・データ利用範囲の確認",
    ],
    fallback: "研究質問を一つに固定せず、6月末まで比較実験を継続する",
    nextAction: "入学後2週間以内に研究計画面談を設定する",
    sourceIds: [
      "personal-integrated-plan",
      "jaist-degree-guide",
      "jaist-doctoral-schedule",
    ],
  },
  {
    id: "d1-corporate-internship",
    title: "D1企業長期インターン",
    year: "D1",
    category: "企業インターン",
    startMonth: "2027-07",
    endMonth: "2027-08",
    dateDisplay: "2027年7〜8月の6〜8週間",
    duration: "6〜8週間（最大2か月程度）",
    progress: "候補",
    roadmapStatus: "候補",
    evidence: "提案",
    priority: "高",
    objective: "博士論文へ接続する成果を作り、国際会議またはジャーナル投稿を目指す",
    candidates: [
      "CyberAgent AI Lab（第一候補）",
      "OMRON SINIC X",
      "NEC",
      "Sony",
      "日立",
      "その他、論文化可能な博士研究インターン",
    ],
    deliverables: [
      "主結果",
      "再現可能なコード",
      "論文図表",
      "論文原稿60〜80%",
      "著者別タスクと投稿予定日",
      "知財・公開審査予定",
    ],
    prerequisites: [
      "指導教員承認",
      "論文化・知財条件の書面確認",
      "ベースライン1本以上",
      "TA・RA負担の調整",
    ],
    fallback: "6週間へ短縮するか、論文化可能な別企業または通常のJAIST研究へ切り替える",
    nextAction: "2027年5月までに応募資料を完成し、候補企業へ応募する",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "cyberagent-internship-2026",
      "omron-sinicx-internship",
      "nec-research-internship",
      "sony-doctoral-internship",
      "hitachi-doctoral-internship",
    ],
  },
  {
    id: "d1-internship-paper",
    title: "D1企業成果の論文化",
    year: "D1",
    category: "論文",
    startMonth: "2027-10",
    endMonth: "2027-12",
    dateDisplay: "2027年10〜12月",
    duration: "3か月",
    progress: "実施予定",
    roadmapStatus: "予定",
    evidence: "本人計画",
    priority: "最優先",
    objective: "インターン成果を追加実験・社内公開審査後に投稿する",
    deliverables: ["追加実験", "投稿原稿", "公開・知財確認", "投稿記録"],
    prerequisites: ["企業側著者との役割分担", "必要な結果・コードへのアクセス"],
    fallback: "投稿先を変更し、博士論文へ利用できる検証結果を優先して残す",
    nextAction: "終了時点で著者別タスクと投稿予定日を確定する",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "d1-domestic-research-stay",
    title: "D1国内滞在研究",
    year: "D1",
    category: "国内滞在研究",
    startMonth: "2028-01",
    endMonth: "2028-02",
    dateDisplay: "2028年1〜2月のうち4〜6週間",
    duration: "4〜6週間",
    progress: "候補",
    roadmapStatus: "候補",
    evidence: "提案",
    priority: "高",
    objective: "相互行為分析またはロボット適応行動の副軸を作り、博士論文へ接続する",
    candidates: [
      "NII・坊農研究室",
      "京都大学HRI研究室",
      "RIKEN Guardian Robot Project",
      "ATR",
      "筑波大学",
      "大阪大学",
      "産総研",
    ],
    deliverables: [
      "分析コードブック",
      "主要事例または実験結果",
      "論文図表",
      "原稿50〜70%",
      "帰還後の定量検証計画",
      "博士論文との対応関係",
    ],
    prerequisites: [
      "テーマ・期間・著者・成果物の合意",
      "JAIST側の学外研究手続き確認",
      "倫理・データ利用条件の確認",
    ],
    fallback: "滞在を4週間へ短縮し、オンライン共同研究と帰還後の検証へ分割する",
    nextAction: "2027年10月までにNII系とロボット適応系を比較して受入先を決める",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "jaist-research-stay-rules",
      "nii-bono-profile",
      "nii-bono-internship",
      "kyoto-hri",
      "riken-guardian-robot",
      "atr",
    ],
  },
  {
    id: "d2-enterprise-and-overseas-prep",
    title: "D2企業研究・海外留学準備",
    year: "D2",
    category: "判断・見直し",
    startMonth: "2028-04",
    endMonth: "2028-05",
    dateDisplay: "2028年4〜5月",
    duration: "2か月",
    progress: "応募準備",
    roadmapStatus: "予定",
    evidence: "本人計画",
    priority: "最優先",
    objective: "企業インターンと海外留学の契約・研究・資金条件を出発前に固定する",
    deliverables: [
      "企業応募・面接",
      "海外受入交渉・招へい状",
      "資金申請",
      "研究質問・データ・著者順の合意",
      "引っ越し判断",
    ],
    prerequisites: ["D1成果の投稿見通し", "D2研究計画", "倫理審査開始"],
    fallback: "両立条件を満たせなければ博士論文への寄与が大きい方を優先する",
    nextAction: "2028年5月に両活動を実施できるか判断する",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "jaist-study-abroad",
      "jaist-research-grants",
    ],
  },
  {
    id: "d2-corporate-internship",
    title: "D2企業長期インターン",
    year: "D2",
    category: "企業インターン",
    startMonth: "2028-06",
    endMonth: "2028-07",
    dateDisplay: "2028年6〜7月のうち6〜8週間",
    duration: "6〜8週間",
    progress: "候補",
    roadmapStatus: "候補",
    evidence: "提案",
    priority: "高",
    objective: "D1とは異なる企業研究文化を経験し、博士論文と就職判断へつながる成果を作る",
    candidates: [
      "OMRON SINIC X",
      "Sony",
      "NEC",
      "日立",
      "Woven by Toyota",
      "条件が合う長期のNTT系テーマ",
      "その他、D1と異なる研究文化を持つ企業",
    ],
    deliverables: [
      "ロボット適応・Physical AI・マルチモーダル理解等の主結果",
      "再現可能なコード",
      "論文図表",
      "投稿可能な原稿",
      "企業研究職の適性評価",
    ],
    prerequisites: [
      "論文公開可否が明確",
      "知財条件が確認済み",
      "博士論文へ利用可能",
      "海外留学準備を妨げない",
      "終了後も必要な結果へアクセス可能",
      "メンターが決まっている",
    ],
    fallback: "渡航準備を圧迫する場合は6週間へ短縮し、博士論文との接続が弱ければ辞退する",
    nextAction: "D1冬から制度更新を確認し、2028年4月までに応募する",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "omron-sinicx-internship",
      "sony-doctoral-internship",
      "nec-research-internship",
      "hitachi-doctoral-internship",
      "woven-internship",
      "ntt-summer-recruitment-2026",
    ],
  },
  {
    id: "d2-transition-to-overseas",
    title: "D2企業成果整理・休養・渡航準備",
    year: "D2",
    category: "健康・休養",
    startMonth: "2028-08",
    endMonth: "2028-08",
    dateDisplay: "2028年8月",
    duration: "1か月",
    progress: "実施予定",
    roadmapStatus: "予定",
    evidence: "提案",
    priority: "最優先",
    objective: "企業成果の原稿化、疲労回復、渡航準備を一か月で終え、9月から海外研究を始める",
    deliverables: [
      "企業成果原稿",
      "ビザ・保険・住居・航空券",
      "JAIST学外研究手続き",
      "データ移転・輸出管理確認",
    ],
    prerequisites: ["7月末までの企業インターン終了", "海外研究の受入・資金・倫理・データ条件の確定"],
    fallback: "8月を確保できない場合は企業インターンを6週間へ短縮する。留学開始が遅れる場合も終了日は2029年2月末から延ばさない",
    nextAction: "2028年8月末に出発可否の最終ゲートを通す",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "jaist-study-abroad",
      "jaist-research-stay-rules",
    ],
  },
  {
    id: "d2-overseas-research-stay",
    title: "D2海外研究留学",
    year: "D2",
    category: "海外研究留学",
    startMonth: "2028-09",
    endMonth: "2029-02",
    dateDisplay: "2028年9月〜2029年2月",
    duration: "6か月",
    progress: "候補",
    roadmapStatus: "候補",
    evidence: "提案",
    priority: "高",
    objective: "ラポール・対話品質推定やロボット適応の外的妥当性を国際共同研究で検証する",
    candidates: [
      "University of Waterloo",
      "Ghent University",
      "Heriot-Watt University",
      "TU Dresden",
      "その他、研究テーマに合うVisiting PhD受入先",
    ],
    deliverables: [
      "主結果",
      "再現可能なコード",
      "論文図表",
      "原稿60〜80%",
      "博士論文の一章",
      "投稿予定日",
      "帰国後のタスク割当て",
    ],
    prerequisites: [
      "研究質問・倫理・契約・データ計画が100%",
      "ベースライン完了",
      "論文アウトライン作成済み",
      "著者順・投稿先の暫定合意",
      "資金源の確定",
    ],
    fallback: "出発条件が未完なら開始を10月または11月へ遅らせて4〜5か月へ短縮する。2029年2月末を越えて延長しない",
    nextAction: "2027年中に候補を3研究室へ絞り、2028年春に正式交渉する",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "jaist-study-abroad",
      "jaist-research-grants",
      "jsps-erc-travel",
      "waterloo-visiting-graduate",
      "waterloo-sirrl",
      "ghent-airo",
      "heriot-watt-national-robotarium",
    ],
  },
  {
    id: "d2-publication-and-review",
    title: "帰国・回復・D2成果統合",
    year: "D2",
    category: "健康・休養",
    startMonth: "2029-03",
    endMonth: "2029-03",
    dateDisplay: "2029年3月",
    duration: "1か月",
    progress: "実施予定",
    roadmapStatus: "予定",
    evidence: "本人計画",
    priority: "最優先",
    objective: "帰国後の生活と体調を整え、企業・海外成果を博士論文の全章構成へ統合する",
    deliverables: [
      "帰国後の回復",
      "D2企業成果の投稿準備",
      "海外留学成果の投稿準備",
      "全章アウトライン",
      "論文と章の対応表",
      "D3就職活動計画",
    ],
    prerequisites: ["2029年2月末までの帰国", "海外留学成果の引き継ぎ", "1〜2週間の帰国後低負荷期間"],
    fallback: "新規研究を止め、投稿と博士論文構成を優先する",
    nextAction: "2029年3月に大型研究テーマの追加停止を宣言する",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "d3-thesis-and-career",
    title: "D3博士論文・就職活動",
    year: "D3",
    category: "学位・JAIST手続き",
    startMonth: "2029-04",
    endMonth: "2029-09",
    dateDisplay: "2029年4〜9月",
    duration: "6か月",
    progress: "実施予定",
    roadmapStatus: "予定",
    evidence: "本人計画",
    priority: "最優先",
    objective: "6月末までに博士論文初稿80%と就職先の見通しを作り、9月末までに審査用の完全版へ進める",
    deliverables: [
      "各章初稿",
      "主要結果・図表",
      "学位論文骨子",
      "企業・ポスドク応募結果",
      "予備審査へ進める博士論文完全版",
    ],
    prerequisites: ["D2全章アウトライン", "主要論文の投稿見通し"],
    fallback: "就活候補を絞り、新規研究と任意活動を止めて博士論文へ集中する",
    nextAction: "2029年5月末に博士論文進捗と指導教員承認を確認する",
    sourceIds: [
      "personal-integrated-plan",
      "roadmap-planning-proposal",
      "jaist-doctoral-schedule",
    ],
  },
  {
    id: "d3-thesis-outline",
    title: "JAIST学位論文骨子",
    year: "D3",
    category: "学位・JAIST手続き",
    startMonth: "2029-07",
    endMonth: "2029-07",
    dateDisplay: "2029年7月（正式日は要確認）",
    duration: "1か月",
    progress: "実施予定",
    roadmapStatus: "要確認",
    evidence: "要確認",
    priority: "最優先",
    objective: "博士論文全体の論理構成を審査準備へ移せる状態にする",
    deliverables: ["博士論文骨子", "全体構成確認", "審査委員候補との調整"],
    prerequisites: ["主要実験完了", "主要図表完成", "各章初稿"],
    fallback: "外部活動を全面停止し、骨子と博士論文初稿を優先する",
    nextAction: "2030年3月修了者向けの年度案内で正式締切を再確認する",
    sourceIds: [
      "personal-integrated-plan",
      "jaist-degree-guide",
      "jaist-doctoral-schedule",
    ],
  },
  {
    id: "d3-preliminary-review",
    title: "予備審査願・予備審査",
    year: "D3",
    category: "学位・JAIST手続き",
    startMonth: "2029-10",
    endMonth: "2029-12",
    dateDisplay: "2029年10〜12月（正式日は要確認）",
    duration: "3か月",
    progress: "実施予定",
    roadmapStatus: "要確認",
    evidence: "要確認",
    priority: "最優先",
    objective: "博士論文完全版を整え、予備審査と指摘対応を完了する",
    deliverables: [
      "予備審査願",
      "博士論文完全版",
      "模擬発表",
      "予備審査",
      "指摘事項と修正計画",
    ],
    prerequisites: ["外部活動・一般アルバイト停止", "企業成果の公開可否整理"],
    fallback: "任意活動をすべて止め、指導教員との週次レビューへ切り替える",
    nextAction: "実施年度の教務通知で願書・予備審査の正式日を確認する",
    sourceIds: [
      "personal-integrated-plan",
      "jaist-degree-guide",
      "jaist-doctoral-schedule",
    ],
  },
  {
    id: "d3-final-examination",
    title: "博士論文提出・公聴会・最終試験",
    year: "D3",
    category: "学位・JAIST手続き",
    startMonth: "2030-01",
    endMonth: "2030-02",
    dateDisplay: "2030年1〜2月（正式日は要確認）",
    duration: "2か月",
    progress: "実施予定",
    roadmapStatus: "要確認",
    evidence: "要確認",
    priority: "最優先",
    objective: "博士論文と関連書類を提出し、公聴会・本審査・最終試験を完了する",
    deliverables: [
      "学位申請書",
      "博士論文",
      "関連書類",
      "公聴会スライド",
      "本審査・最終試験",
      "最終修正",
    ],
    prerequisites: ["予備審査指摘への対応", "提出書類の担当窓口確認"],
    fallback: "就職準備を必要最小限にし、学位提出と審査対応を最優先する",
    nextAction: "正式締切の2か月前までに全提出物を完成状態へ近づける",
    sourceIds: [
      "personal-integrated-plan",
      "jaist-degree-guide",
      "jaist-doctoral-schedule",
    ],
  },
  {
    id: "d3-completion-transition",
    title: "博士修了・次の生活への移行",
    year: "D3",
    category: "住居・引っ越し",
    startMonth: "2030-03",
    endMonth: "2030-03",
    dateDisplay: "2030年3月",
    duration: "1か月",
    progress: "実施予定",
    roadmapStatus: "予定",
    evidence: "本人計画",
    priority: "高",
    objective: "学位授与後の就業・研究・生活へ無理なく移行する",
    deliverables: [
      "学位授与",
      "研究データ・コードの引き継ぎ",
      "引っ越し",
      "就業・ポスドク開始準備",
      "車購入の最終判断",
      "休養期間",
    ],
    prerequisites: ["公聴会・最終試験完了", "引き継ぎ先の確認"],
    fallback: "車購入など延期可能な生活決定を就業後へ送る",
    nextAction: "修了後の休養日と新生活開始日を先に確保する",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
];

export const monthlyHealthCheck: MonthlyHealthCheck = {
  id: "doctoral-monthly-health-baseline",
  title: "毎月の健康・生活チェック",
  checks: [
    "平均睡眠7時間以上を維持できている",
    "週3回程度の運動ができている",
    "週1日の完全休養がある",
    "平日2夜程度、研究をしない時間がある",
    "研究室外の人と会う時間がある",
    "月1回、生活費・支出をレビューしている",
    "月1回、研究計画を指導教員とレビューしている",
    "長期滞在中も友人・家族へ定期的に連絡している",
    "インターン・留学後の回復期間を予定から削っていない",
  ],
  relationshipRule:
    "恋愛・結婚・人間関係を締切付きの成果目標にせず、時間的・精神的余白と人に会える生活を確認する。",
  escalationSignal: "睡眠・食欲・研究室回避の悪化が2週間続く",
  escalationAction:
    "一般アルバイトと任意活動を止め、指導教員および学内の相談先へ早めに連絡する。",
  sourceIds: ["personal-integrated-plan", "jaist-healthcare"],
};

const monthItem = (
  id: string,
  title: string,
  category: DoctoralScheduleCategory,
  evidence: ScheduleEvidenceKind = "本人計画",
  priority: Priority = "高",
  nextAction?: string,
  sourceIds: string[] = ["personal-integrated-plan"],
): ScheduleItem => ({
  id,
  title,
  category,
  progress: "実施予定",
  roadmapStatus: evidence === "要確認" ? "要確認" : "予定",
  evidence,
  priority,
  nextAction,
  sourceIds,
});

export const doctoralMonthPlans: DoctoralMonthPlan[] = [
  {
    month: "2027-04",
    label: "2027年4月",
    year: "D1",
    focus: "博士課程の制度と研究軸を同時に立ち上げる",
    blockIds: ["d1-research-axis"],
    majorItems: [
      monthItem("2027-04-admission", "博士後期課程へ入学", "学位・JAIST手続き"),
      monthItem(
        "2027-04-course-guide",
        "履修案内、必要単位、学位日程を一覧化",
        "授業・単位",
        "要確認",
        "最優先",
        "2027年度の公式資料を確認する",
        ["jaist-course-guide-2026", "jaist-doctoral-schedule"],
      ),
      monthItem("2027-04-research-meeting", "主・副指導教員との研究計画面談", "研究"),
      monthItem("2027-04-funding", "JSPS DC・SPRING・RA・TA・UAの状況確認", "資金・奨学金"),
    ],
    deadlines: [
      monthItem(
        "2027-04-intern-materials",
        "企業インターン応募資料を完成",
        "企業インターン",
        "本人計画",
        "高",
      ),
    ],
    nextActions: [
      "中心テーマ候補を3案から1〜2案へ絞る",
      "週次・月次レビューを予定表へ登録する",
    ],
    risks: ["履修・学位条件の確認が遅れ、研究計画だけが先行する"],
    buffers: ["週1日の完全休養を最初から固定する"],
    decisions: ["研究テーマの比較基準を指導教員と合意する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-05",
    label: "2027年5月",
    year: "D1",
    focus: "研究質問を仮固定し、D1外部活動へ応募する",
    blockIds: ["d1-research-axis", "d1-corporate-internship"],
    majorItems: [
      monthItem("2027-05-question", "博士論文の研究質問を仮確定", "研究", "本人計画", "最優先"),
      monthItem("2027-05-intern-apply", "D1企業インターンへ応募", "企業インターン"),
      monthItem("2027-05-domestic-contact", "国内滞在候補の教員へ最初の連絡", "国内滞在研究"),
      monthItem("2027-05-ethics", "研究データ・倫理審査の利用範囲確認", "研究"),
    ],
    deadlines: [
      monthItem("2027-05-applications", "企業候補への初回応募", "企業インターン", "提案"),
    ],
    nextActions: [
      "CyberAgent AI Labを第一候補とし、OMRON・NEC・Sony等の代替条件も比較する",
      "NII・京都大学・RIKEN・ATR・筑波大学等の研究適合性を比較する",
    ],
    risks: ["企業名だけで選び、論文化・博士論文利用条件の確認が後回しになる"],
    buffers: ["応募対応を週内の決まった時間へ集約する"],
    decisions: ["D1企業候補の優先順位を仮決定する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-06",
    label: "2027年6月",
    year: "D1",
    focus: "D1インターンを実行可能な論文プロジェクトへする",
    blockIds: ["d1-research-axis", "d1-corporate-internship"],
    majorItems: [
      monthItem("2027-06-interview", "企業面接・テーマ調整", "企業インターン"),
      monthItem("2027-06-venue", "インターン成果の投稿先候補を決定", "論文"),
      monthItem("2027-06-baseline", "インターン前ベースラインを1本以上完成", "研究", "本人計画", "最優先"),
      monthItem("2027-06-domestic-proposal", "国内滞在研究の提案を1〜2ページで作成", "国内滞在研究"),
      monthItem("2027-06-overseas-shortlist", "海外留学候補を5研究室程度へ絞る", "海外研究留学"),
    ],
    deadlines: [
      monthItem("2027-06-go-gate", "D1企業インターン実施可否を判断", "判断・見直し", "提案", "最優先"),
    ],
    nextActions: ["TA・RA負担を調整し、インターン期間と通常業務を重ねない"],
    risks: ["ベースライン未完成のまま企業内で研究設計から始める"],
    buffers: ["インターン開始前に少なくとも3日間の低負荷期間を置く"],
    decisions: ["実施・6週間へ短縮・別企業・通常研究のいずれかを選ぶ"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-07",
    label: "2027年7月",
    year: "D1",
    focus: "D1企業研究を開始し、主結果へ集中する",
    blockIds: ["d1-corporate-internship"],
    majorItems: [
      monthItem("2027-07-intern-start", "D1企業長期インターン開始", "企業インターン", "提案", "高"),
      monthItem("2027-07-research", "研究設計・実装・初期実験", "研究"),
      monthItem("2027-07-ip", "著者・知財・公開審査手順を再確認", "論文", "要確認"),
    ],
    deadlines: [],
    nextActions: ["毎週、主結果・論文図表・再現性の三点をメンターと確認する"],
    risks: ["JAIST通常研究、TA・RA、アルバイトを夜間・休日に並行する"],
    buffers: ["一般アルバイトを停止し、週1日の完全休養を守る"],
    decisions: ["4週目に残り期間の研究範囲を固定する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-08",
    label: "2027年8月",
    year: "D1",
    focus: "インターンの主結果と論文骨格を作る",
    blockIds: ["d1-corporate-internship"],
    majorItems: [
      monthItem("2027-08-main-result", "主実験・追加検証", "研究"),
      monthItem("2027-08-paper", "論文図表と原稿を並行作成", "論文"),
      monthItem("2027-08-reproducibility", "コードと実験条件を再現可能に整理", "研究"),
    ],
    deadlines: [],
    nextActions: ["原稿60%へ向け、未実験より不足図表を優先する"],
    risks: ["結果が出ないため新しい研究質問を増やす"],
    buffers: ["週1日の完全休養と平日2夜の非研究時間を確保する"],
    decisions: ["投稿先を維持するか、成果に合う投稿先へ切り替える"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-09",
    label: "2027年9月",
    year: "D1",
    focus: "インターンを論文化可能な状態で閉じる",
    blockIds: ["d1-corporate-internship"],
    majorItems: [
      monthItem("2027-09-close", "D1企業インターン終了", "企業インターン"),
      monthItem("2027-09-draft", "原稿60〜80%・論文図表を完成", "論文"),
      monthItem("2027-09-handover", "著者別タスク・投稿日・公開審査日を合意", "論文"),
    ],
    deadlines: [
      monthItem("2027-09-access", "終了後の結果・コードへのアクセス条件を確認", "企業インターン", "要確認"),
    ],
    nextActions: ["未完実験を優先度順に整理し、10月の作業量を限定する"],
    risks: ["終了後の役割分担が曖昧で原稿が止まる"],
    buffers: ["終了直後に2〜4週間の回復・成果整理枠を開始する"],
    decisions: ["追加実験の上限と投稿予定日を固定する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-10",
    label: "2027年10月",
    year: "D1",
    focus: "D1企業成果を整理し、国内滞在の方向を決める",
    blockIds: ["d1-internship-paper", "d1-domestic-research-stay"],
    majorItems: [
      monthItem("2027-10-extra", "投稿に必要な追加実験", "研究"),
      monthItem("2027-10-paper", "企業インターン原稿の整理", "論文"),
      monthItem("2027-10-domestic-choice", "国内滞在先を最終決定", "国内滞在研究"),
      monthItem("2027-10-overseas-contact", "海外留学候補へ正式連絡を開始", "海外研究留学"),
    ],
    deadlines: [
      monthItem("2027-10-decision", "NII系かロボット適応系かを判断", "判断・見直し", "提案", "最優先"),
    ],
    nextActions: ["NII案と京都・RIKEN案を成果物・方法・博士論文接続で比較する"],
    risks: ["疲労回復前に国内・海外の交渉を同時に詰め込む"],
    buffers: ["月前半は外部予定を減らし、インターン後の回復を優先する"],
    decisions: ["国内滞在研究の方法軸と第一候補を決める"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-11",
    label: "2027年11月",
    year: "D1",
    focus: "D1企業成果を投稿し、国内滞在条件を合意する",
    blockIds: ["d1-internship-paper", "d1-domestic-research-stay"],
    majorItems: [
      monthItem("2027-11-submit", "D1企業インターン成果を投稿", "論文", "本人計画", "最優先"),
      monthItem("2027-11-domestic-agreement", "国内滞在のテーマ・期間・著者・成果物を合意", "国内滞在研究"),
      monthItem("2027-11-procedure", "JAIST側の副テーマ・学外研究手続きを確認", "学位・JAIST手続き", "要確認"),
      monthItem("2027-11-d2-scan", "D2企業インターン候補調査を開始", "企業インターン"),
    ],
    deadlines: [
      monthItem("2027-11-domestic-paperwork", "国内滞在先の受入手続きを開始", "国内滞在研究", "要確認"),
    ],
    nextActions: ["国内滞在用のデータ・動画・コードを整理する"],
    risks: ["企業側公開審査で投稿が遅れ、国内滞在準備と競合する"],
    buffers: ["投稿後に2〜3日の完全休養を置く"],
    decisions: ["投稿遅延時も国内滞在準備へ影響させない作業分担を決める"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2027-12",
    label: "2027年12月",
    year: "D1",
    focus: "国内滞在の出発条件を揃え、D1を中間レビューする",
    blockIds: ["d1-internship-paper", "d1-domestic-research-stay"],
    majorItems: [
      monthItem("2027-12-domestic-ready", "国内滞在研究の準備完了", "国内滞在研究"),
      monthItem("2027-12-ethics", "倫理・データ利用条件を確認", "研究", "要確認"),
      monthItem("2027-12-question", "分析対象・研究質問・投稿先を確定", "研究"),
      monthItem("2027-12-review", "D1中間レビュー", "判断・見直し"),
      monthItem("2027-12-overseas-three", "海外候補を3研究室程度へ絞る", "海外研究留学"),
    ],
    deadlines: [],
    nextActions: ["1月開始前に滞在先とのキックオフと成果物定義を再確認する"],
    risks: ["年末も作業を続け、国内滞在開始時に疲労を持ち越す"],
    buffers: ["年末に3〜5日の完全休養を確保する"],
    decisions: ["国内滞在を予定通り開始できるか最終確認する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-01",
    label: "2028年1月",
    year: "D1",
    focus: "国内滞在研究へ集中し、分析の主結果を作る",
    blockIds: ["d1-domestic-research-stay"],
    majorItems: [
      monthItem("2028-01-stay-start", "国内滞在研究を開始", "国内滞在研究", "提案"),
      monthItem("2028-01-codebook", "分析コードブックを作成", "研究"),
      monthItem("2028-01-cases", "主要事例または実験結果を抽出", "研究"),
    ],
    deadlines: [],
    nextActions: ["週ごとに成果物と博士論文との対応を受入教員と確認する"],
    risks: ["滞在先の活動とJAIST通常研究を二重に進める"],
    buffers: ["一般アルバイトを停止し、週1日の完全休養を守る"],
    decisions: ["2月までに完了できる分析範囲へ固定する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-02",
    label: "2028年2月",
    year: "D1",
    focus: "国内滞在成果を論文原稿へ変換して帰還する",
    blockIds: ["d1-domestic-research-stay"],
    majorItems: [
      monthItem("2028-02-figures", "国内滞在成果の論文図表を作成", "論文"),
      monthItem("2028-02-draft", "原稿50〜70%を作成", "論文"),
      monthItem("2028-02-return-plan", "帰還後の定量検証計画を合意", "研究"),
      monthItem("2028-02-stay-end", "国内滞在研究を終了", "国内滞在研究"),
    ],
    deadlines: [
      monthItem("2028-02-thesis-map", "博士論文との対応関係を文書化", "研究", "本人計画", "最優先"),
    ],
    nextActions: ["未完タスクをJAIST側・滞在先・本人へ割り当てる"],
    risks: ["帰還日まで実験を増やし、原稿と引き継ぎが残る"],
    buffers: ["帰還後2週間は新しい大型活動を入れない"],
    decisions: ["追加滞在ではなく帰還後検証で補えるか判断する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-03",
    label: "2028年3月",
    year: "D1",
    focus: "D1成果を統合し、D2の企業・海外計画を確定する",
    blockIds: ["d1-domestic-research-stay", "d2-enterprise-and-overseas-prep"],
    majorItems: [
      monthItem("2028-03-domestic-paper", "国内滞在成果を論文化", "論文", "本人計画", "最優先"),
      monthItem("2028-03-research-plan", "博士研究計画書を完成", "研究"),
      monthItem("2028-03-review", "D1年間レビュー", "判断・見直し"),
      monthItem("2028-03-d2-prep", "D2企業応募と海外第一候補を確定", "判断・見直し"),
    ],
    deadlines: [
      monthItem("2028-03-life-decision", "引っ越し・車購入の実施可否を判断", "判断・見直し", "提案"),
    ],
    nextActions: ["副テーマ関係の手続きとD2応募資料を完成する"],
    risks: ["引っ越し・車・応募・論文化を同月に同時実行する"],
    buffers: ["国内滞在後の2週間を成果整理・回復へ使う"],
    decisions: ["住居は研究活動の動線、車は資金余力を基準に別々に判断する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-04",
    label: "2028年4月",
    year: "D2",
    focus: "D2企業研究と海外留学の正式準備を開始する",
    blockIds: ["d2-enterprise-and-overseas-prep", "d2-corporate-internship"],
    majorItems: [
      monthItem("2028-04-plan", "D2研究計画を確定", "研究", "本人計画", "最優先"),
      monthItem("2028-04-intern-apply", "D2夏の企業インターンへ応募", "企業インターン"),
      monthItem("2028-04-overseas-negotiate", "海外留学の正式受入交渉", "海外研究留学"),
      monthItem(
        "2028-04-funding",
        "JAIST研究留学助成・JSPS等の海外資金を最新年度で確認・申請",
        "資金・奨学金",
        "要確認",
        "高",
        "DC採用状況、奨励費、JSPS–ERC、修了後の海外特別研究員採用予約を別制度として確認する",
        [
          "jaist-research-grants",
          "jaist-research-stay-rules",
          "jsps-dc-guide",
          "jsps-erc-travel",
          "jsps-overseas-fellowship-reservation",
        ],
      ),
      monthItem("2028-04-contracts", "倫理審査・データ利用契約を開始", "研究", "要確認"),
    ],
    deadlines: [
      monthItem("2028-04-move", "引っ越す場合はこの時期までに完了", "住居・引っ越し", "提案", "中"),
    ],
    nextActions: ["企業応募と海外受入交渉の担当・期限を一枚にまとめる"],
    risks: ["引っ越しと二つの外部活動準備を同時に抱える"],
    buffers: ["引っ越し実施時は一般アルバイトを一時停止する"],
    decisions: ["海外留学資金ルートの第一・第二候補を決める"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-05",
    label: "2028年5月",
    year: "D2",
    focus: "企業・海外の両立条件を確定し、無理なら片方を調整する",
    blockIds: ["d2-enterprise-and-overseas-prep", "d2-corporate-internship"],
    majorItems: [
      monthItem("2028-05-interview", "D2企業インターン面接", "企業インターン"),
      monthItem("2028-05-invitation", "海外の招へい状・受入許可を準備", "海外研究留学", "要確認"),
      monthItem("2028-05-research-agreement", "海外研究の質問・データ・著者順を確定", "海外研究留学"),
      monthItem("2028-05-baseline", "D2企業インターン前のベースライン完成", "研究", "本人計画", "最優先"),
      monthItem("2028-05-career-scan", "企業就職候補の調査開始", "就職活動"),
    ],
    deadlines: [
      monthItem("2028-05-dual-gate", "企業インターンと海外留学を両方実施できるか判断", "判断・見直し", "提案", "最優先"),
    ],
    nextActions: ["公開・知財・博士論文利用・メンター・結果アクセスを受諾前に確認する"],
    risks: ["活動の魅力だけで両方を受諾し、移行期間が不足する"],
    buffers: ["6月開始前に3日以上の低負荷期間を置く"],
    decisions: ["企業6〜8週間＋海外6か月・企業6週間＋海外6か月・海外4〜5か月・一方を中止のいずれかを選ぶ"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-06",
    label: "2028年6月",
    year: "D2",
    focus: "6〜8週間のD2企業研究を開始し、D1とは異なる研究文化を学ぶ",
    blockIds: ["d2-corporate-internship"],
    majorItems: [
      monthItem("2028-06-intern-start", "D2企業長期インターン開始", "企業インターン", "提案"),
      monthItem("2028-06-design", "主実験の設計・実装", "研究"),
      monthItem("2028-06-career-observe", "研究所の意思決定・働き方を記録", "就職活動"),
    ],
    deadlines: [],
    nextActions: ["4週目までに主結果と論文アウトラインをレビューし、7月終了へ研究範囲を固定する"],
    risks: ["フルタイム研究とTA・RA・一般アルバイトが重なる"],
    buffers: ["TA・RA・一般アルバイトを重ねず、週1日の完全休養を確保する"],
    decisions: ["博士論文接続が弱い場合は期間または研究範囲を縮小する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-07",
    label: "2028年7月",
    year: "D2",
    focus: "D2企業研究の主結果と再現性を固め、6〜8週間で終了する",
    blockIds: ["d2-corporate-internship"],
    majorItems: [
      monthItem("2028-07-main-result", "D2企業研究の主実験", "研究"),
      monthItem("2028-07-figures", "論文図表と原稿骨格を作成", "論文"),
      monthItem("2028-07-repro", "コード・データ条件を再現可能に整理", "研究"),
      monthItem("2028-07-intern-end", "D2企業インターンを終了", "企業インターン"),
    ],
    deadlines: [],
    nextActions: ["終了前に結果アクセス、公開審査、著者別タスク、投稿日を企業側と確認する"],
    risks: ["成果を増やすためインターンを8月まで延長する"],
    buffers: ["海外手続きは週1枠へ限定し、8月を成果整理・休養・渡航準備として保護する"],
    decisions: ["未完実験の上限を決め、7月末で企業研究を閉じる"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-08",
    label: "2028年8月",
    year: "D2",
    focus: "企業成果の論文化、休養、9月からの渡航準備を完了する",
    blockIds: ["d2-transition-to-overseas"],
    majorItems: [
      monthItem("2028-08-draft", "D2企業成果の図表・原稿を整理", "論文", "本人計画", "最優先"),
      monthItem("2028-08-ip", "知財・公開審査と著者別タスクを確定", "論文", "要確認"),
      monthItem("2028-08-rest", "インターン後の回復期間", "健康・休養"),
      monthItem("2028-08-travel", "ビザ・保険・住居・航空券・学外研究手続きを確定", "海外研究留学", "要確認"),
    ],
    deadlines: [
      monthItem("2028-08-overseas-gate", "6か月の海外研究留学へ出発できるか最終判断", "判断・見直し", "提案", "最優先"),
    ],
    nextActions: ["研究・倫理・契約・データ・資金の出発条件を月末までに100%確認する"],
    risks: ["企業の追加実験や引っ越しを入れ、移行・回復期間を失う"],
    buffers: ["8月は新しい大型研究、企業勤務、本格就活を入れない"],
    decisions: ["9月出発・10月出発で5か月・11月出発で4か月・中止のいずれかを選ぶ"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-09",
    label: "2028年9月",
    year: "D2",
    focus: "6か月の海外研究留学を開始し、生活と研究環境を立ち上げる",
    blockIds: ["d2-overseas-research-stay"],
    majorItems: [
      monthItem("2028-09-overseas-start", "海外研究留学を開始", "海外研究留学", "提案"),
      monthItem("2028-09-life", "現地の住居・生活・連絡環境を整える", "健康・休養"),
      monthItem("2028-09-reproduce", "現地環境でベースラインを再現", "研究"),
      monthItem("2028-09-scope", "半年で扱う研究範囲を固定", "研究"),
    ],
    deadlines: [],
    nextActions: ["週次で主結果、博士論文の一章、投稿原稿の進捗を受入教員と確認する"],
    risks: ["生活立ち上げと研究開始を同時に最大化して睡眠を削る"],
    buffers: ["到着後数日は生活基盤整備を優先し、一般アルバイトと本格就活を行わない"],
    decisions: ["1か月目の結果で研究範囲を増やさず固定する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-10",
    label: "2028年10月",
    year: "D2",
    focus: "海外研究のデータ収集と主要実験を軌道へ乗せる",
    blockIds: ["d2-overseas-research-stay"],
    majorItems: [
      monthItem("2028-10-data", "海外研究のデータ収集を開始", "研究"),
      monthItem("2028-10-experiment", "主要実験・分析を実行", "研究"),
      monthItem("2028-10-method", "方法と評価指標を固定", "論文"),
    ],
    deadlines: [],
    nextActions: ["論文アウトラインと必要図表を受入先と共有する"],
    risks: ["共同研究の機会を増やしすぎ、中心テーマがぼやける"],
    buffers: ["週1日の完全休養と研究しない夜を維持する"],
    decisions: ["博士論文へ入らない追加テーマは受けない"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-11",
    label: "2028年11月",
    year: "D2",
    focus: "海外研究の主結果を作り、論文図表へ変換する",
    blockIds: ["d2-overseas-research-stay"],
    majorItems: [
      monthItem("2028-11-main-result", "海外研究の主実験・分析", "研究"),
      monthItem("2028-11-figures", "主要図表を作成", "論文"),
      monthItem("2028-11-repro", "コード・実験条件を再現可能に整理", "研究"),
    ],
    deadlines: [],
    nextActions: ["12月の中間レビューに必要な主結果と不足検証を整理する"],
    risks: ["結果不足を理由に研究質問そのものを増やす"],
    buffers: ["追加実験の上限を週次レビューで管理する"],
    decisions: ["主結果を深掘りし、新テーマへ広げない"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2028-12",
    label: "2028年12月",
    year: "D2",
    focus: "留学中間レビューを行い、残り2か月の成果目標を絞る",
    blockIds: ["d2-overseas-research-stay"],
    majorItems: [
      monthItem("2028-12-mid-review", "海外研究留学の中間レビュー", "判断・見直し"),
      monthItem("2028-12-draft", "論文原稿と博士論文章の骨格を作成", "論文"),
      monthItem("2028-12-network", "共同研究者との関係と次の研究計画を整理", "海外研究留学"),
    ],
    deadlines: [],
    nextActions: ["帰国時の最低成果から逆算し、追加テーマを増やさない"],
    risks: ["年末も連続稼働し、孤立や疲労を見落とす"],
    buffers: ["友人・家族との連絡と年末の休養日を確保する"],
    decisions: ["成果不足なら新テーマではなく既存実験の深掘りを選び、終了日は延ばさない"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-01",
    label: "2029年1月",
    year: "D2",
    focus: "海外研究の追加検証を終え、原稿と博士論文章を完成へ近づける",
    blockIds: ["d2-overseas-research-stay"],
    majorItems: [
      monthItem("2029-01-validation", "必要な追加検証を完了", "研究"),
      monthItem("2029-01-result", "主結果・コード・図表を整理", "研究"),
      monthItem("2029-01-draft", "投稿原稿と博士論文章を執筆", "論文"),
    ],
    deadlines: [],
    nextActions: ["2月の引き継ぎに必要なデータ、コード、著者別タスクを一覧化する"],
    risks: ["留学終盤に新しい共同研究を始める"],
    buffers: ["本格就活は行わず、必要なオンライン情報収集だけに限定する"],
    decisions: ["2月末までに閉じられない実験は帰国後タスクへ分割する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-02",
    label: "2029年2月",
    year: "D2",
    focus: "半年の海外研究を成果と引き継ぎが残る形で閉じ、帰国する",
    blockIds: ["d2-overseas-research-stay"],
    majorItems: [
      monthItem("2029-02-result", "海外研究の主結果・コード・図表を完成", "研究"),
      monthItem("2029-02-draft", "投稿原稿を60〜80%まで作成", "論文"),
      monthItem("2029-02-handover", "著者別タスク・投稿日・定例継続期間を合意", "論文"),
      monthItem("2029-02-return", "海外研究留学を終了・帰国", "海外研究留学"),
    ],
    deadlines: [],
    nextActions: ["帰国後に残す作業を現地側・本人へ割り当てる"],
    risks: ["未完実験を理由に滞在を3月以降へ延長する"],
    buffers: ["帰国後1〜2週間を低負荷期間として保護する"],
    decisions: ["終了日を延ばさず、未完実験をオンライン共同研究へ切り替える"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-03",
    label: "2029年3月",
    year: "D2",
    focus: "帰国後の体調と生活を整え、企業・海外成果を博士論文へ統合する",
    blockIds: ["d2-publication-and-review"],
    majorItems: [
      monthItem("2029-03-rest", "帰国後の回復と生活再構築", "健康・休養", "本人計画", "最優先"),
      monthItem("2029-03-review", "D2年間レビュー", "判断・見直し"),
      monthItem("2029-03-outline", "博士論文の全章アウトラインを作成", "学位・JAIST手続き", "本人計画", "最優先"),
      monthItem("2029-03-paper-map", "各論文と博士論文章の対応を確定", "論文"),
      monthItem("2029-03-d3-plan", "D3の博士論文執筆・就職活動計画を確定", "判断・見直し"),
    ],
    deadlines: [
      monthItem("2029-03-career-choice", "企業就職かアカデミアかを仮決定", "就職活動", "提案", "高"),
    ],
    nextActions: ["新しい大型研究テーマの追加を停止する"],
    risks: ["帰国直後に二本の論文、就活、博士論文を同時に最大化する"],
    buffers: ["帰国後1〜2週間と年度末2〜3日を低負荷期間として保護する"],
    decisions: ["D3は博士論文と就職活動だけに集中する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-04",
    label: "2029年4月",
    year: "D3",
    focus: "博士論文執筆と就職活動を最終段階へ進める",
    blockIds: ["d3-thesis-and-career"],
    majorItems: [
      monthItem("2029-04-writing", "博士論文執筆を本格開始", "学位・JAIST手続き", "本人計画", "最優先"),
      monthItem("2029-04-applications", "企業就職・ポスドクへ応募", "就職活動"),
      monthItem("2029-04-chapters", "博士論文各章の初稿を作成", "論文"),
      monthItem("2029-04-gap", "主要実験の不足を確認", "研究"),
    ],
    deadlines: [],
    nextActions: ["不足を『必須修正』『あれば良い』『追加しない』へ分類する"],
    risks: ["不足確認から新規大型実験を開始する"],
    buffers: ["週1日の完全休養と執筆しない夜を維持する"],
    decisions: ["新規大型研究を始めず、博士論文に必要な最小限の補足だけを行う"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-05",
    label: "2029年5月",
    year: "D3",
    focus: "主要結果と就職先の見通しを固め、博士論文執筆を進める",
    blockIds: ["d3-thesis-and-career"],
    majorItems: [
      monthItem("2029-05-results", "博士論文の主要結果を確定", "研究", "本人計画", "最優先"),
      monthItem("2029-05-interviews", "就職面接", "就職活動"),
      monthItem("2029-05-draft-check", "全章構成・図表・初稿70%を確認", "学位・JAIST手続き"),
    ],
    deadlines: [],
    nextActions: ["就活候補を絞り、6月末の初稿80%へ章別の週次目標を置く"],
    risks: ["就活の応募先を増やし続け、博士論文の執筆時間を失う"],
    buffers: ["面接日をまとめ、週1日の完全休養と連続した執筆時間を守る"],
    decisions: ["就活と論文が競合したら応募先を絞り、学位進捗を優先する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-06",
    label: "2029年6月",
    year: "D3",
    focus: "就職活動を原則終え、博士論文初稿80%と骨子を完成する",
    blockIds: ["d3-thesis-and-career", "d3-thesis-outline"],
    majorItems: [
      monthItem("2029-06-career-close", "就職活動を原則終了", "就職活動"),
      monthItem("2029-06-draft-80", "博士論文初稿80%を目標", "学位・JAIST手続き", "本人計画", "最優先"),
      monthItem("2029-06-outline", "学位論文骨子を完成", "学位・JAIST手続き"),
      monthItem("2029-06-experiment-stop", "新規実験を原則終了", "研究"),
    ],
    deadlines: [],
    nextActions: ["7月の正式手続き資料を確認し、提出逆算表を更新する"],
    risks: ["就活が長引き、初稿・骨子の完成が遅れる"],
    buffers: ["就活候補を追加せず、執筆時間と休養を保護する"],
    decisions: ["就活未完または初稿不足なら応募先を追加せず、執筆時間を保護する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-07",
    label: "2029年7月",
    year: "D3",
    focus: "学位論文骨子を提出し、博士論文の論理構成を固める",
    blockIds: ["d3-thesis-and-career", "d3-thesis-outline"],
    majorItems: [
      monthItem(
        "2029-07-outline-submit",
        "博士論文骨子を提出",
        "学位・JAIST手続き",
        "要確認",
        "最優先",
        "2030年3月修了者向け公式日程で期限を再確認する",
        ["jaist-doctoral-schedule"],
      ),
      monthItem("2029-07-logic", "博士論文全体の論理構成を確認", "論文"),
      monthItem("2029-07-committee", "審査委員候補と調整", "学位・JAIST手続き", "要確認"),
    ],
    deadlines: [
      monthItem("2029-07-formal-date", "骨子の正式締切を再確認", "学位・JAIST手続き", "要確認", "最優先"),
    ],
    nextActions: ["骨子への指摘を8月以降の章別修正計画へ反映する"],
    risks: ["骨子提出と就活の追加選考を重ね、論文修正が遅れる"],
    buffers: ["骨子提出後に2〜3日の低負荷期間を置く"],
    decisions: ["骨子と博士論文を最優先する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-08",
    label: "2029年8月",
    year: "D3",
    focus: "博士論文の章別修正と統合へ集中する",
    blockIds: ["d3-thesis-and-career"],
    majorItems: [
      monthItem("2029-08-thesis", "博士論文の章別修正を継続", "論文", "本人計画", "最優先"),
      monthItem("2029-08-full-draft", "博士論文の全章初稿を完成", "学位・JAIST手続き", "本人計画", "最優先"),
      monthItem("2029-08-career", "就職先・次の研究先の選考を最終化", "就職活動"),
    ],
    deadlines: [],
    nextActions: ["毎週、章別の未完箇所と予備審査準備への影響を指導教員と確認する"],
    risks: ["論文の不足を埋めるため新規の大規模実験を始める"],
    buffers: ["外部活動を入れず、執筆と休養の時間を保護する"],
    decisions: ["不足は既存データの分析、論理、記述の改善で補う"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-09",
    label: "2029年9月",
    year: "D3",
    focus: "博士論文を完全版へ統合し、学位審査へ移行する",
    blockIds: ["d3-thesis-and-career", "d3-preliminary-review"],
    majorItems: [
      monthItem("2029-09-thesis-complete", "博士論文完全版へ向けた統合", "論文", "本人計画", "最優先"),
      monthItem("2029-09-pre-review", "予備審査願・審査資料の準備", "学位・JAIST手続き", "要確認", "最優先"),
      monthItem("2029-09-career-close", "就職活動を原則終了", "就職活動"),
    ],
    deadlines: [
      monthItem("2029-09-thesis-gate", "予備審査へ進める完成度か確認", "判断・見直し", "提案", "最優先"),
    ],
    nextActions: ["未投稿論文・未完章・教務手続きを一覧化する"],
    risks: ["就活の追加応募や新規分析で、予備審査準備が遅れる"],
    buffers: ["一般アルバイトと任意活動を停止し、博士論文へ集中する"],
    decisions: ["未達が一つでもあれば任意就活・一般アルバイトを全面停止する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-10",
    label: "2029年10月",
    year: "D3",
    focus: "予備審査願を提出し、博士論文完全版を作る",
    blockIds: ["d3-preliminary-review"],
    majorItems: [
      monthItem(
        "2029-10-application",
        "予備審査願を提出",
        "学位・JAIST手続き",
        "要確認",
        "最優先",
        "実施年度の正式締切を確認する",
        ["jaist-doctoral-schedule"],
      ),
      monthItem("2029-10-full-draft", "博士論文の完全版を作成", "論文", "本人計画", "最優先"),
      monthItem("2029-10-weakness", "研究成果の不足・論理の弱点を修正", "研究"),
    ],
    deadlines: [
      monthItem("2029-10-formal", "予備審査願の正式締切", "学位・JAIST手続き", "要確認", "最優先"),
    ],
    nextActions: ["指導教員との週次レビューと章別修正期限を設定する"],
    risks: ["一般アルバイト・留学・インターン・継続就活が残る"],
    buffers: ["外部活動と一般アルバイトを停止する"],
    decisions: ["任意活動を再開しない"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-11",
    label: "2029年11月",
    year: "D3",
    focus: "予備審査用博士論文と発表を完成する",
    blockIds: ["d3-preliminary-review"],
    majorItems: [
      monthItem("2029-11-thesis", "予備審査用博士論文を完成", "論文", "本人計画", "最優先"),
      monthItem("2029-11-rehearsal", "模擬発表・研究室内レビュー", "学位・JAIST手続き"),
      monthItem("2029-11-format", "図表・参考文献・付録を整理", "論文"),
      monthItem("2029-11-company-results", "公開できない企業成果の扱いを確認", "論文", "要確認"),
    ],
    deadlines: [],
    nextActions: ["指摘を内容・論理・形式・公開制約へ分類して修正する"],
    risks: ["完成度を上げるために新しい実験を始める"],
    buffers: ["週1日の完全休養を維持し、模擬発表後に半日休む"],
    decisions: ["新規実験ではなく論理・記述・既存分析で補えるか判断する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2029-12",
    label: "2029年12月",
    year: "D3",
    focus: "予備審査を通過し、指摘を提出版へ反映する",
    blockIds: ["d3-preliminary-review", "d3-final-examination"],
    majorItems: [
      monthItem(
        "2029-12-pre-review",
        "予備審査",
        "学位・JAIST手続き",
        "要確認",
        "最優先",
        "正式日程を確認する",
        ["jaist-doctoral-schedule"],
      ),
      monthItem("2029-12-feedback", "指摘事項を整理し博士論文を修正", "論文", "本人計画", "最優先"),
    ],
    deadlines: [
      monthItem("2029-12-formal-date", "予備審査の正式日", "学位・JAIST手続き", "要確認", "最優先"),
    ],
    nextActions: ["1月提出物を一覧にし、担当窓口へ不足書類を確認する"],
    risks: ["大きな旅行・引っ越し・外部活動を入れる"],
    buffers: ["年末の休養を短くても確保する"],
    decisions: ["指摘への対応順と提出前のレビュー回数を決める"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2030-01",
    label: "2030年1月",
    year: "D3",
    focus: "博士論文と学位申請書類を提出し、公聴会へ備える",
    blockIds: ["d3-final-examination"],
    majorItems: [
      monthItem(
        "2030-01-submit",
        "博士論文・学位申請書・関連書類を提出",
        "学位・JAIST手続き",
        "要確認",
        "最優先",
        "正式な提出物・締切を担当窓口で確認する",
        ["jaist-degree-guide", "jaist-doctoral-schedule"],
      ),
      monthItem("2030-01-slides", "公聴会スライド・最終試験を準備", "学位・JAIST手続き"),
      monthItem("2030-01-employer", "就職先への必要書類を準備", "就職活動"),
    ],
    deadlines: [
      monthItem("2030-01-formal-submit", "博士論文の正式提出期限", "学位・JAIST手続き", "要確認", "最優先"),
    ],
    nextActions: ["公聴会の質疑候補を章ごとに整理する"],
    risks: ["就業・引っ越し準備が提出作業を圧迫する"],
    buffers: ["生活準備は締切のないものを2月以降へ送る"],
    decisions: ["車購入など延期可能な支出判断を修了後へ送る"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2030-02",
    label: "2030年2月",
    year: "D3",
    focus: "公聴会・本審査・最終試験と最終修正を完了する",
    blockIds: ["d3-final-examination"],
    majorItems: [
      monthItem(
        "2030-02-defense",
        "公聴会・本審査・最終試験",
        "学位・JAIST手続き",
        "要確認",
        "最優先",
        "正式日程と会場を確認する",
        ["jaist-doctoral-schedule"],
      ),
      monthItem("2030-02-final-revision", "博士論文の最終修正", "論文", "本人計画", "最優先"),
      monthItem("2030-02-handover", "研究データ・コード・引き継ぎを整理", "研究"),
    ],
    deadlines: [
      monthItem("2030-02-final-deadline", "最終修正・提出の正式期限", "学位・JAIST手続き", "要確認", "最優先"),
    ],
    nextActions: ["修了後に再現できるREADME・データ辞書・連絡先を残す"],
    risks: ["公聴会直後から引っ越し作業を始め、最終修正を圧迫する"],
    buffers: ["公聴会後に1週間程度の回復期間を確保する"],
    decisions: ["引っ越し開始日を最終修正完了後に設定する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
  {
    month: "2030-03",
    label: "2030年3月",
    year: "D3",
    focus: "博士修了と新生活への安全な移行を完了する",
    blockIds: ["d3-completion-transition"],
    majorItems: [
      monthItem("2030-03-completion", "博士修了・学位授与", "学位・JAIST手続き", "要確認", "最優先"),
      monthItem("2030-03-move", "引っ越し", "住居・引っ越し"),
      monthItem("2030-03-car", "車購入の最終判断", "車", "提案", "低"),
      monthItem("2030-03-next-role", "就業・ポスドク開始準備", "就職活動"),
      monthItem("2030-03-rest", "博士課程後の休養期間", "健康・休養", "本人計画", "高"),
    ],
    deadlines: [],
    nextActions: ["学位・研究・住居・就業の引き継ぎチェックリストを閉じる"],
    risks: ["修了直後から予定を埋め、回復期間がなくなる"],
    buffers: ["新しい仕事の開始前に可能な範囲で連続休養を置く"],
    decisions: ["車は勤務地・住居・収入が確定してから購入する"],
    healthCheckId: "doctoral-monthly-health-baseline",
  },
];

export const doctoralQuarterPlans: DoctoralQuarterPlan[] = [
  {
    id: "d1-q1",
    year: "D1",
    quarter: "4〜6月",
    startMonth: "2027-04",
    endMonth: "2027-06",
    focus: "研究と制度の基盤を作り、夏の企業研究を実行可能にする",
    domains: {
      研究: ["中心的な研究質問を仮確定", "ベースライン1本", "倫理・データ範囲確認"],
      キャリア: ["企業応募資料・面接", "企業研究職の評価軸を作る"],
      外部活動: ["D1企業インターン応募", "国内候補へ初回連絡", "海外候補を5研究室へ絞る"],
      生活: ["資金源確認", "TA・RA負担調整", "週次・月次レビュー開始"],
    },
    largeExternalActivityCount: 0,
    buffer: "インターン開始前に3日以上の低負荷期間",
  },
  {
    id: "d1-q2",
    year: "D1",
    quarter: "7〜9月",
    startMonth: "2027-07",
    endMonth: "2027-09",
    focus: "6〜8週間の企業研究を論文原稿まで進める",
    domains: {
      研究: ["主結果", "再現可能なコード", "論文図表"],
      キャリア: ["企業研究文化・研究職適性を観察"],
      外部活動: ["D1企業長期インターン1件のみ"],
      生活: ["TA・RA・一般アルバイトを重ねない", "終了後2〜4週間の回復を予約"],
    },
    largeExternalActivityCount: 1,
    buffer: "9月終了後から2〜4週間",
  },
  {
    id: "d1-q3",
    year: "D1",
    quarter: "10〜12月",
    startMonth: "2027-10",
    endMonth: "2027-12",
    focus: "企業成果を投稿し、国内滞在と海外候補を確定する",
    domains: {
      研究: ["追加実験", "企業成果投稿", "国内滞在の分析計画"],
      キャリア: ["D2企業候補調査を開始"],
      外部活動: ["国内滞在先・条件の合意", "海外候補へ正式連絡"],
      生活: ["インターン後の回復", "年末3〜5日の完全休養"],
    },
    largeExternalActivityCount: 0,
    buffer: "10月前半の回復と年末休養",
  },
  {
    id: "d1-q4",
    year: "D1",
    quarter: "1〜3月",
    startMonth: "2028-01",
    endMonth: "2028-03",
    focus: "4〜6週間の国内滞在研究を成果化し、D2へ接続する",
    domains: {
      研究: ["分析コードブック", "原稿50〜70%", "帰還後の定量検証"],
      キャリア: ["D2企業応募準備"],
      外部活動: ["国内滞在研究1件"],
      生活: ["帰還後2週間の余白", "引っ越し・車を別々に判断"],
    },
    largeExternalActivityCount: 1,
    buffer: "国内滞在後2週間",
  },
  {
    id: "d2-q1",
    year: "D2",
    quarter: "4〜6月",
    startMonth: "2028-04",
    endMonth: "2028-06",
    focus: "企業研究と海外留学の条件を確定し、企業研究を開始する",
    domains: {
      研究: ["D2計画", "企業前ベースライン", "海外研究質問・データ合意"],
      キャリア: ["企業候補調査・面接", "就職候補の調査開始"],
      外部活動: ["企業応募・開始", "海外受入・資金・契約準備"],
      生活: ["引っ越しは4月まで", "TA・RAと企業研究を重ねない"],
    },
    largeExternalActivityCount: 1,
    buffer: "6月開始前に3日以上",
  },
  {
    id: "d2-q2",
    year: "D2",
    quarter: "7〜9月",
    startMonth: "2028-07",
    endMonth: "2028-09",
    focus: "企業研究を7月で閉じ、8月の移行期間を経て海外研究を開始する",
    domains: {
      研究: ["企業主結果・図表・原稿", "海外ベースライン再現"],
      キャリア: ["企業研究文化と就職適性を評価"],
      外部活動: ["6〜7月のD2企業インターン", "8月の成果整理・休養・渡航準備", "9月から海外研究留学"],
      生活: ["8月を完全な移行月として保護", "出発条件未達なら留学期間を短縮"],
    },
    largeExternalActivityCount: 2,
    buffer: "8月の1か月を企業終了後から海外出発までの移行期間として保護",
  },
  {
    id: "d2-q3",
    year: "D2",
    quarter: "10〜12月",
    startMonth: "2028-10",
    endMonth: "2028-12",
    focus: "6か月留学の中心期間として海外研究の主結果を作る",
    domains: {
      研究: ["海外の主実験", "論文図表", "博士論文章の骨格"],
      キャリア: ["本格就活は行わず、必要な情報収集だけにする"],
      外部活動: ["海外研究留学を継続"],
      生活: ["現地生活・連絡・年末休養", "週1日の完全休養"],
    },
    largeExternalActivityCount: 1,
    buffer: "年末の休養日と研究しない夜を確保",
  },
  {
    id: "d2-q4",
    year: "D2",
    quarter: "1〜3月",
    startMonth: "2029-01",
    endMonth: "2029-03",
    focus: "2月末までに海外研究を閉じ、3月に回復・成果統合を行う",
    domains: {
      研究: ["海外原稿60〜80%", "企業成果の投稿準備", "全章アウトライン"],
      キャリア: ["3月に就活計画を確定", "企業かアカデミアか仮決定"],
      外部活動: ["2月末に海外滞在終了", "3月は新しい大型活動を入れない"],
      生活: ["帰国後1〜2週間の低負荷", "生活再構築と時差回復"],
    },
    largeExternalActivityCount: 1,
    buffer: "3月前半の1〜2週間と年度末2〜3日",
  },
  {
    id: "d3-q1",
    year: "D3",
    quarter: "4〜6月",
    startMonth: "2029-04",
    endMonth: "2029-06",
    focus: "博士論文初稿80%と就職活動の原則終了を達成する",
    domains: {
      研究: ["主要結果確定", "新規実験を原則終了", "全章初稿"],
      キャリア: ["企業・ポスドク応募と面接", "6月までに原則終了"],
      外部活動: ["新規大型研究を追加しない"],
      生活: ["執筆時間と睡眠を保護", "未達なら応募先と任意活動を絞る"],
    },
    largeExternalActivityCount: 0,
    buffer: "7月骨子前に追加活動を入れない",
  },
  {
    id: "d3-q2",
    year: "D3",
    quarter: "7〜9月",
    startMonth: "2029-07",
    endMonth: "2029-09",
    focus: "骨子・博士論文・就職先決定へ集中し、予備審査へ移行する",
    domains: {
      研究: ["骨子・論理構成", "全章初稿", "博士論文完全版への統合"],
      キャリア: ["就職先比較を最終化", "9月までに原則終了"],
      外部活動: ["外部活動を追加しない"],
      生活: ["骨子後2〜3日休養", "執筆と睡眠を保護"],
    },
    largeExternalActivityCount: 0,
    buffer: "骨子提出後2〜3日と、予備審査準備へ入る前の余白",
  },
  {
    id: "d3-q3",
    year: "D3",
    quarter: "10〜12月",
    startMonth: "2029-10",
    endMonth: "2029-12",
    focus: "予備審査願・完全版・予備審査へ集中する",
    domains: {
      研究: ["不足と論理の修正", "企業成果の公開制約整理"],
      キャリア: ["就活を原則停止"],
      外部活動: ["インターン・留学・一般アルバイトを停止"],
      生活: ["週1日休養", "年末も短い休養を確保"],
    },
    largeExternalActivityCount: 0,
    buffer: "模擬発表後の半日と年末休養",
  },
  {
    id: "d3-q4",
    year: "D3",
    quarter: "1〜3月",
    startMonth: "2030-01",
    endMonth: "2030-03",
    focus: "提出・公聴会・最終試験・修了と次の生活への移行",
    domains: {
      研究: ["博士論文最終修正", "研究データ・コード・引き継ぎ"],
      キャリア: ["就業・ポスドク開始準備"],
      外部活動: ["新しい外部活動は入れない"],
      生活: ["公聴会後1週間", "引っ越し", "車は条件確定後", "修了後休養"],
    },
    largeExternalActivityCount: 0,
    buffer: "公聴会後1週間と新生活前の連続休養",
  },
];

export const doctoralDecisionPoints: DoctoralDecisionPoint[] = [
  {
    id: "decision-2027-06-d1-internship",
    deadline: "2027-06",
    year: "D1",
    title: "D1企業インターンを実施するか",
    options: ["6〜8週間で実施", "6週間へ短縮", "別企業へ切替", "通常のJAIST研究へ変更"],
    criteria: ["博士論文との接続", "論文化・知財条件", "ベースライン", "指導教員承認", "TA・RA調整"],
    provisionalChoice: "CyberAgent AI Labを第一候補として6〜8週間",
    confirmations: ["採否", "テーマ", "公開条件", "成果アクセス", "メンター"],
    defaultAction: "条件が未確定なら受諾せず、通常研究または別候補へ切り替える",
    evidence: "提案",
    priority: "最優先",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "decision-2027-10-domestic-track",
    deadline: "2027-10",
    year: "D1",
    title: "国内滞在を相互行為分析系かロボット適応系か",
    options: ["NII・坊農研究室系", "京都大学・RIKEN・ATR系", "滞在短縮＋オンライン共同研究"],
    criteria: ["博士論文の不足章", "利用可能データ", "4〜6週間での成果", "著者・投稿合意", "受入可否"],
    provisionalChoice: "NII案と京都・RIKEN案を比較して決定",
    confirmations: ["受入教員", "期間", "研究質問", "成果物", "学外研究手続き"],
    defaultAction: "合意ができなければ4週間へ短縮し、JAISTで副テーマ検証を行う",
    evidence: "提案",
    priority: "高",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "decision-2028-03-housing-car",
    deadline: "2028-03",
    year: "D1",
    title: "引っ越し・車購入を行うか",
    options: ["引っ越しのみ", "車のみ", "両方", "どちらも延期"],
    criteria: ["D2外部活動の動線", "月次収支", "初期費用", "維持費", "研究時間", "勤務地見通し"],
    provisionalChoice: "引っ越しと車を別々に判断し、車は延期を基本とする",
    confirmations: ["D2収入", "寮期限", "住居費", "駐車場", "保険・維持費"],
    defaultAction: "資金またはD2予定が未確定なら車購入を延期する",
    evidence: "提案",
    priority: "中",
    sourceIds: ["personal-integrated-plan", "roadmap-cost-estimates"],
  },
  {
    id: "decision-2028-05-dual-external",
    deadline: "2028-05",
    year: "D2",
    title: "D2企業インターンと海外留学を両方実施できるか",
    options: ["企業6〜8週間＋海外6か月", "企業を6週間へ短縮", "海外を4〜5か月へ短縮", "博士論文への寄与が大きい一方のみ"],
    criteria: ["8月を移行月として確保", "公開・知財条件", "受入・資金・倫理", "博士論文接続", "2029年2月末帰国"],
    provisionalChoice: "企業は2028年6〜7月の6〜8週間、8月は移行、海外は2028年9月〜2029年2月の6か月",
    confirmations: ["企業の7月末終了", "海外の9月開始", "2029年2月末帰国", "資金源", "ビザ", "データ契約"],
    defaultAction: "両立条件が一つでも未達なら企業を6週間へ短縮し、それでも無理なら海外の開始を遅らせて終了日は2月末に固定する",
    evidence: "提案",
    priority: "最優先",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "decision-2028-08-overseas-go",
    deadline: "2028-08",
    year: "D2",
    title: "海外留学を予定通り行うか",
    options: ["9月出発・6か月", "10月出発・5か月", "11月出発・4か月", "中止・国内/オンラインへ変更"],
    criteria: ["研究質問・倫理・契約・データ・資金100%", "ベースライン", "8月の移行期間", "健康状態", "2月末帰国"],
    provisionalChoice: "2028年9月〜2029年2月の6か月",
    confirmations: ["受入許可", "資金", "ビザ・保険", "住居", "著者順・投稿先"],
    defaultAction: "出発条件が100%でなければ開始を遅らせて期間を短縮し、2029年2月末の終了日は延ばさない",
    evidence: "提案",
    priority: "最優先",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal", "jaist-study-abroad"],
  },
  {
    id: "decision-2029-03-career-track",
    deadline: "2029-03",
    year: "D2",
    title: "企業就職かアカデミアかを仮決定する",
    options: ["企業研究職中心", "ポスドク・アカデミア中心", "期限付きで併願"],
    criteria: ["研究自由度", "待遇・勤務地", "共同研究環境", "選考時期", "生活との相性"],
    provisionalChoice: "企業研究職とポスドクを比較し、D3前半の応募先を絞る",
    confirmations: ["求人・公募時期", "推薦・応募書類", "勤務地", "研究テーマ継続性"],
    defaultAction: "未決定なら応募数を限定した併願とし、6月までに終了する",
    evidence: "提案",
    priority: "高",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal"],
  },
  {
    id: "decision-2029-09-thesis-gate",
    deadline: "2029-09",
    year: "D3",
    title: "博士論文を予備審査準備へ移せるか",
    options: ["予備審査準備へ移行", "未完章だけに集中", "就活・任意活動を全面停止"],
    criteria: ["完全版の進捗", "未投稿論文", "予備審査願準備", "指導教員評価", "健康状態"],
    provisionalChoice: "9月末までに博士論文を完全版へ統合し、予備審査準備へ移る",
    confirmations: ["10月正式締切", "博士論文完全版", "審査資料", "企業成果の扱い"],
    defaultAction: "判断がつかなければ就活・一般アルバイト・任意活動を全面停止し、博士論文へ集中する",
    evidence: "提案",
    priority: "最優先",
    sourceIds: ["personal-integrated-plan", "roadmap-planning-proposal", "jaist-doctoral-schedule"],
  },
];

export const scheduleBufferRules: BufferRule[] = [
  {
    id: "buffer-after-internship",
    after: "企業インターン",
    minimum: "2〜4週間",
    rule: "成果整理と疲労回復を優先し、新しい大型活動を開始しない。",
  },
  {
    id: "buffer-after-domestic-stay",
    after: "国内滞在研究",
    minimum: "2週間",
    rule: "帰還後の論文化・引き継ぎ・生活復帰へ使う。",
  },
  {
    id: "buffer-before-overseas",
    after: "海外留学前",
    minimum: "2028年8月の1か月",
    rule: "企業成果整理、回復、ビザ・住居・保険・契約を終え、新しい大型活動を入れない。",
  },
  {
    id: "buffer-after-overseas",
    after: "海外留学後",
    minimum: "1〜2週間",
    rule: "2029年3月前半を帰国後の低負荷期間として保護し、本格就活や締切を置かない。",
  },
  {
    id: "buffer-after-submission",
    after: "国際会議投稿",
    minimum: "2〜3日",
    rule: "完全休養または低負荷作業にする。",
  },
  {
    id: "buffer-after-conference",
    after: "学会参加",
    minimum: "1〜2日",
    rule: "移動疲労と生活復帰のために予定を軽くする。",
  },
  {
    id: "buffer-after-outline",
    after: "D3骨子提出",
    minimum: "2〜3日",
    rule: "低負荷期間を置いてから章別修正へ入る。",
  },
  {
    id: "buffer-after-defense",
    after: "公聴会",
    minimum: "1週間程度",
    rule: "最終修正以外の新規活動を避け、回復を優先する。",
  },
];

export const scheduleConflictRules: ConflictRule[] = [
  {
    id: "conflict-intern-ra",
    combination: ["長期企業インターン", "通常のTA・RA"],
    response: "TA・RAを事前に調整し、インターン期間中は重ねない。",
  },
  {
    id: "conflict-intern-overseas",
    combination: ["企業インターン直後", "海外留学"],
    response: "企業を7月末までに終え、8月の一か月を空ける。確保できなければ企業を6週間へ短縮し、留学は終了日を延ばさず期間を短縮する。",
  },
  {
    id: "conflict-overseas-jobhunt",
    combination: ["海外留学", "本格的な就職活動"],
    response: "渡航前に候補を絞り、滞在中は必要なオンライン情報収集だけに限定する。本格選考は帰国後からD3前半へ移す。",
  },
  {
    id: "conflict-pre-review-job",
    combination: ["予備審査準備", "一般アルバイト"],
    response: "2029年10月以降は一般アルバイトを停止する。",
  },
  {
    id: "conflict-two-large-external",
    combination: ["同一四半期", "大型外部活動2件以上"],
    response: "一件を次の四半期へ移すか、短期・オンラインへ縮小する。",
  },
];

export const scheduleWarningRules: ScheduleWarningRule[] = [
  {
    id: "warning-two-external",
    condition: "大型外部活動2件の間に一か月の移行期間がない",
    message: "企業インターンと海外研究留学の間に、成果整理・回復・渡航準備の一か月がありません。",
    reduction: "企業インターンを6週間へ短縮して8月を空ける。留学開始が遅れる場合も終了日は2029年2月末に固定する。",
    priority: "最優先",
  },
  {
    id: "warning-short-gap",
    condition: "長期活動の間隔が4週間未満",
    message: "長期活動間の移行・回復・手続き期間が不足しています。",
    reduction: "企業インターンを6週間へ短縮する。海外留学の開始を遅らせる場合は滞在期間を短縮し、D3へ延長しない。",
    priority: "最優先",
  },
  {
    id: "warning-d3-long-external",
    condition: "D3に長期外部活動が追加されている",
    message: "D3の博士論文・学位審査・就職活動と外部活動が競合します。",
    reduction: "D3の長期外部活動を削除し、博士論文と就職活動へ集中する。",
    priority: "最優先",
  },
  {
    id: "warning-no-paper-window",
    condition: "外部活動後の論文化期間がない",
    message: "外部活動の成果が博士論文や投稿へ残らない可能性があります。",
    reduction: "次の活動を後ろへ移し、最低2〜4週間の原稿化期間を確保する。",
    priority: "高",
  },
  {
    id: "warning-triple-overlap",
    condition: "企業インターン、海外留学、TA・RAが重なる",
    message: "三つの高負荷活動が重なっています。",
    reduction: "TA・RAを停止し、企業を7月末までに終えて8月の移行期間を保護する。",
    priority: "最優先",
  },
  {
    id: "warning-no-monthly-recovery",
    condition: "1か月以上、完全休養日が存在しない",
    message: "回復期間がなく、研究・生活の継続性が損なわれます。",
    reduction: "一般アルバイトと任意予定を削り、週1日の完全休養を先に確保する。",
    priority: "最優先",
  },
  {
    id: "warning-formal-deadline",
    condition: "正式締切の2か月前に未完了の重要タスクがある",
    message: "学位の正式締切に対する安全余裕が不足しています。",
    reduction: "外部活動・一般アルバイト・任意就活を止め、週次レビューへ切り替える。",
    priority: "最優先",
  },
  {
    id: "warning-unfunded-activity",
    condition: "資金源が未確定の長期活動がある",
    message: "住居・渡航・生活費を確保できないまま長期活動を予定しています。",
    reduction: "資金決定まで受諾・出発を保留し、期間短縮または別の助成ルートを検討する。",
    priority: "高",
  },
];

export const scheduleReductionOrder = [
  "一般アルバイト",
  "任意のイベント・学会参加",
  "車購入",
  "山小屋勤務",
  "D2企業インターンを8週間から6週間へ短縮",
  "同一年の2回目の外部活動",
  "博士論文に直接入らない共同研究",
  "国内滞在または海外留学の短縮（海外留学は2029年2月末終了を固定）",
] as const;

export const scheduleProtectedItems = [
  "睡眠",
  "食事",
  "健康管理",
  "博士論文の中心研究",
  "JAISTの正式な学位手続き",
  "指導教員との定期面談",
] as const;

export const doctoralScheduleData = {
  meta: doctoralScheduleMeta,
  yearPlans: doctoralYearPlans,
  majorBlocks: majorScheduleBlocks,
  months: doctoralMonthPlans,
  quarters: doctoralQuarterPlans,
  decisions: doctoralDecisionPoints,
  healthCheck: monthlyHealthCheck,
  bufferRules: scheduleBufferRules,
  conflictRules: scheduleConflictRules,
  warningRules: scheduleWarningRules,
  reductionOrder: scheduleReductionOrder,
  protectedItems: scheduleProtectedItems,
};
