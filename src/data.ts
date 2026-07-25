export type RoadmapItem = {
  period: string;
  stage: string;
  research: string;
  outside: string;
  life: string;
  accent?: boolean;
};

export type LinkItem = {
  label: string;
  href: string;
  note?: string;
};

export const roadmapItems: RoadmapItem[] = [
  {
    period: "2026 Q3",
    stage: "M2",
    research: "MIRUの議論を修士研究へ反映。博士テーマ候補を3案に絞る。",
    outside: "国内・海外・企業の候補を各5件に整理する。",
    life: "資金制度の分岐表を作り、睡眠・支出の記録を始める。",
    accent: true,
  },
  {
    period: "2026 Q4",
    stage: "M2",
    research: "修士論文初稿。博士論文の中心問いを1文で定義する。",
    outside: "国内2名・海外2名と情報交換。D1夏の候補を1つへ。",
    life: "新規の大型案件を止め、年末に3〜5日休む。",
  },
  {
    period: "2027 Q1",
    stage: "M2",
    research: "修士論文・審査。データ、コード、研究記録を整理する。",
    outside: "大型外部活動は入れず、D1の90日計画を準備する。",
    life: "修了後7〜10日休養。D1はJAIST学生寄宿舎を継続する。",
  },
  {
    period: "2027 Q2",
    stage: "D1",
    research: "20単位の取得表、博士研究計画、倫理テンプレートを作る。",
    outside: "国内滞在先と研究課題・著者・知財・投稿先を正式合意。",
    life: "資金を確定し、週次または隔週の指導面談を固定する。",
  },
  {
    period: "2027 Q3",
    stage: "D1",
    research: "国内研究滞在6〜8週間。研究1の実験と主要図を完成。",
    outside: "副テーマ候補として国内HRIネットワークを作る。単位化は事前確認。",
    life: "山小屋は3日〜2週間まで。帰還後2〜3日は低負荷にする。",
  },
  {
    period: "2027 Q4",
    stage: "D1",
    research: "国内滞在の成果を執筆・投稿する。",
    outside: "海外ホストへ連絡し、企業インターン候補を選ぶ。",
    life: "引っ越し候補を調べるが、まだ固定費は増やさない。",
  },
  {
    period: "2028 Q1",
    stage: "D1",
    research: "副テーマ研究計画書と、正式な手続きを進める。",
    outside: "企業研究インターンへ応募。海外テーマを6か月前に確定。",
    life: "引っ越しと車は、海外留学後の負担まで含めて判定する。",
  },
  {
    period: "2028 Q2",
    stage: "D2",
    research: "企業共同研究で研究2を進める。",
    outside: "企業研究インターン6〜8週間。公開・知財条件を先に合意。",
    life: "寮を基本に固定費を抑える。一般バイトは減らす。",
  },
  {
    period: "2028.07–08",
    stage: "D2",
    research: "企業成果を論文化。海外研究の倫理・データ・ベースラインを完了。",
    outside: "企業案件との間を8週間以上空け、受入・住居・保険・ビザを確定。",
    life: "睡眠・人間関係・生活を回復し、留学資金を確定する。",
  },
  {
    period: "2028.09–11",
    stage: "D2",
    research: "海外共同研究で研究3を進め、主要結果を持ち帰る。",
    outside: "海外研究留学3か月。帰国時に原稿60〜80%と投稿日を持ち帰る。",
    life: "助成と二重家賃を管理。車は原則として修了後へ延期する。",
  },
  {
    period: "2028.12–2029.03",
    stage: "D2",
    research: "海外成果を投稿し、博士論文の全体構成を作る。",
    outside: "帰国後に企業応募・面接を本格化。進路を仮決定する。",
    life: "海外留学後に住居を再判定。生活防衛資金を確認する。",
  },
  {
    period: "2029 Q2",
    stage: "D3",
    research: "最終実験と論文統合。5月に全章アウトラインを完成。",
    outside: "企業就活は6月終了目標。外部訪問は最大2週間。",
    life: "新規バイトと高額支出を止める。",
  },
  {
    period: "2029 Q3",
    stage: "D3",
    research: "7月に学位論文骨子。博士論文を70〜80%まで進める。",
    outside: "長期滞在と新規共同研究は入れない。",
    life: "引っ越しをせず、週1日の完全休養を守る。",
  },
  {
    period: "2029 Q4",
    stage: "D3",
    research: "10月に予備審査願、12月に予備審査。",
    outside: "就活・インターン・山小屋を入れない。",
    life: "睡眠と食事を最優先し、予定外の仕事を受けない。",
  },
  {
    period: "2030 Q1",
    stage: "D3",
    research: "1月に博士論文提出、2月に公聴会・最終試験。",
    outside: "就業・次の研究環境への移行準備。",
    life: "審査後に1週間休み、3月の学位授与と引っ越しへ。",
  },
];

export const researchArc = [
  {
    key: "A",
    title: "推定する",
    text: "音声・視線・表情・姿勢・対話履歴から、実環境HRIの対話品質とラポールを推定する。",
    role: "評価枠組みとベースライン",
  },
  {
    key: "B",
    title: "予測する",
    text: "社会的状態の時間変化から、離脱・継続・クロージング・関係悪化などの転換を予測する。",
    role: "時系列予測と実用性",
  },
  {
    key: "C",
    title: "適応させる",
    text: "推定・予測した状態をロボットの行動や対話戦略へ接続し、実環境で効果を評価する。",
    role: "統合貢献と外的妥当性",
  },
];

export const scenarioOptions = [
  {
    key: "A",
    title: "安全重視",
    projects: "大型外部研究 2回",
    papers: "独立研究2本＋博士論文",
    life: "山小屋3〜6日、車は修了後",
    risk: "学位は守りやすいが、外部経験が少ない",
  },
  {
    key: "B",
    title: "バランス",
    projects: "大型外部研究 3回",
    papers: "独立研究3本、2〜3本採択目標",
    life: "山小屋3日〜2週間、車は条件判断",
    risk: "D2の過密化を、8週間の間隔で防ぐ",
    recommended: true,
  },
  {
    key: "C",
    title: "挑戦",
    projects: "大型外部研究 4回＋短期1回",
    papers: "独立研究4〜5本",
    life: "山小屋1か月、D2で車購入",
    risk: "学位遅延と健康悪化の可能性が高い",
  },
];

export const externalProjects = [
  {
    number: "01",
    time: "D1 · 2027 夏",
    title: "国内研究滞在",
    duration: "6〜8週間",
    result: "研究1・国際会議投稿",
    purpose: "HRI方法論を強化し、国内の共同研究ネットワークをつくる。",
    caution:
      "JAIST研究留学助成の期間を含む対象条件と、副テーマとして単位化できる条件を事前確認する。利用できない場合の別財源も準備する。",
  },
  {
    number: "02",
    time: "D2 · 2028 春〜初夏",
    title: "企業研究インターン",
    duration: "6〜8週間",
    result: "研究2・企業研究との適性確認",
    purpose: "実世界データと現場課題に触れ、研究職の仕事内容を確かめる。",
    caution:
      "単独では博士インターンシップの単位要件を満たさない可能性がある。公開審査、知財、著者順を契約前に確認する。",
  },
  {
    number: "03",
    time: "D2 · 2028.09–11",
    title: "海外研究留学",
    duration: "3か月",
    result: "研究3・国際共同論文",
    purpose: "研究3を国際共同研究として完成させ、海外の研究環境とキャリアも探索する。",
    caution:
      "JAISTの研究留学助成を受けられるのは在学中1回。資金、倫理、データ持ち出し、輸出管理を出発前に完了する。",
  },
];

export const hostCandidates = [
  {
    label: "国内・研究機関",
    items: [
      "RIKEN Guardian Robot Project",
      "京都大学など国内HRI研究室",
      "AIST Research Assistant",
      "RIKEN Student Researcher",
    ],
  },
  {
    label: "企業",
    items: [
      "CyberAgent AI Lab",
      "Sony R&D",
      "Preferred Networks",
      "ジョブ型研究インターンシップ",
    ],
  },
  {
    label: "海外",
    items: [
      "University of Waterloo SIRRL",
      "Heriot-Watt / National Robotarium",
      "Ghent University AIRO",
      "TU Dresden",
      "USC Institute for Creative Technologies",
      "King’s College London",
      "University of British Columbia",
    ],
  },
];

export const eightWeekPlan = [
  ["1", "環境構築、データ確認、既存結果の再現"],
  ["2", "ベースラインと実験計画を凍結"],
  ["3–4", "主実験"],
  ["5", "追加実験とエラー分析"],
  ["6", "統計解析と図表"],
  ["7", "論文本文と関連研究"],
  ["8", "内部発表、結果凍結、帰国後計画"],
];

export const overseasRoadmap = [
  {
    time: "2026.07–2027.03",
    label: "M2 · 探索",
    title: "海外でしかできない問いをつくる",
    text: "研究計画1ページ、英語CV、候補研究室10件を用意。候補を4〜5件へ絞り、オンライン面談と小規模共同解析へ進む。",
  },
  {
    time: "2027.04–2028.03",
    label: "D1 · 固定",
    title: "テーマ・受入先・資金を固める",
    text: "博士論文のどの章にするか、Visiting PhD等の身分、指導体制、投稿先を合意。必要なら1〜2週間の事前訪問を行う。",
  },
  {
    time: "2028.04–08",
    label: "D2 · 準備",
    title: "出発前に研究を走らせる",
    text: "倫理、データ契約、ベースライン、予備実験、住居、保険、ビザ、JAIST手続きを完了。企業案件との間を8週間以上空ける。",
  },
  {
    time: "2028.09–11",
    label: "D2 · 実施",
    title: "3か月で主要結果まで持ち帰る",
    text: "現地でテーマを探さず、準備済みの共同研究を完成。帰国時に再現コード、主要図表、原稿60〜80%、投稿日を確定する。",
  },
  {
    time: "2028.12–2029 春",
    label: "D2 · 投稿",
    title: "6〜8週間で投稿し、論文へ統合",
    text: "残実験と執筆を分担して投稿。D3は博士論文と就活を優先し、海外再訪は必要な場合も1〜2週間までにする。",
  },
];

export const overseasThemes = [
  {
    key: "01",
    label: "第一候補",
    title: "異文化一般化",
    text: "日本語環境で学習したラポール・対話品質推定を海外データへ適用し、言語・非言語特徴が文化を越えて一般化するかを検証する。",
  },
  {
    key: "02",
    label: "第二候補",
    title: "推定からロボット適応へ",
    text: "推定結果から、話題変更、終了前置き、対話終了、距離、視線などの行動を適応させ、実環境で評価する。",
  },
  {
    key: "03",
    label: "受入先依存",
    title: "新しいモダリティ",
    text: "視線、生理指標、近接、身体同期、韻律など、JAISTだけでは使いにくい設備・データを研究へ加える。",
  },
];

export const overseasExecution = [
  {
    label: "出発時点",
    title: "研究を始められる状態",
    items: [
      "研究質問・仮説・倫理・契約・データ計画を完了",
      "実装70〜80%、ベースライン1本以上",
      "関連研究80%、論文構成30〜40%",
      "暫定の投稿先・著者順・責任著者を合意",
    ],
  },
  {
    label: "MONTH 1",
    title: "再現と条件固定",
    items: ["環境とデータを再現", "パイロット実験", "評価条件を凍結", "受入先固有の方法を導入"],
  },
  {
    label: "MONTH 2",
    title: "主実験と解析",
    items: ["主実験", "統計解析", "エラー分析", "追加条件と主要図表"],
  },
  {
    label: "MONTH 3",
    title: "論文化と引き継ぎ",
    items: ["追加実験と執筆", "研究室発表", "知財・公開確認", "残実験と帰国後タスクを分担"],
  },
];

export const overseasChecks = [
  {
    title: "身分・JAIST手続き",
    items: [
      "Visiting PhD等の受入身分と指導体制",
      "学外機関への指導委託の要否（現行案内は開始2か月以上前が目安）",
      "授業・ゼミ・TA・RAとの調整",
      "申請年度の助成・提出期限・併給条件",
    ],
  },
  {
    title: "倫理・データ",
    items: [
      "海外共同研究・二次利用・国外移転の同意範囲",
      "JAISTと受入先双方の倫理手続き",
      "映像・音声、クラウド、GPU、保存期間",
      "移転不可ならリモート解析・コードのみ共有",
    ],
  },
  {
    title: "知財・著者",
    items: [
      "データ・コード・モデル重みの所有",
      "特許、投稿先、著者順、責任著者",
      "公開前審査の期間",
      "帰国後の残実験・執筆担当と締切",
    ],
  },
  {
    title: "ビザ・安全・生活",
    items: [
      "滞在日数・受入身分・給与に合う在留資格",
      "海外渡航届、保険、緊急連絡網",
      "たびレジ・在留届の対象確認",
      "住居、医療機関、薬、二重家賃",
    ],
  },
];

export const overseasExploration = [
  {
    title: "留学形態を比較",
    items: [
      "Visiting PhD / Visiting Graduate Student",
      "大学間・部局間の交換留学",
      "JAISTの学外機関への指導委託",
      "海外研究インターンシップ",
      "共同・ダブルディグリー",
      "1〜2週間の短期訪問",
    ],
  },
  {
    title: "時期の代替案",
    items: [
      "本命は2028年9〜11月の3か月",
      "投稿時期が合う場合のみ2028年5〜7月を第二候補",
      "企業インターンと必ず8週間以上空ける",
      "D1は必要なら1〜2週間の事前訪問",
      "D3は新規3か月滞在をせず、再訪も1〜2週間まで",
    ],
  },
  {
    title: "外部資金を探索",
    items: [
      "JASSO協定派遣は大学経由の対象可否を確認",
      "トビタテ！留学JAPAN",
      "DAAD・Erasmus+等の地域別制度",
      "受入先の給与・フェローシップ・滞在支援",
      "採択年度の資格・締切・併給可否を個別確認",
    ],
  },
  {
    title: "受入先の選定基準",
    items: [
      "固有のデータ・設備・方法がある",
      "3か月で主要結果まで完結できる",
      "定期指導を受けられる",
      "論文公開とデータ移転が可能",
      "倫理・知財の責任分担が明確",
      "帰国後も共同研究を継続できる",
    ],
  },
];

export const overseasCosts = [
  ["航空券", "15〜30万円"],
  ["住居", "30〜75万円"],
  ["食費・日用品", "18〜45万円"],
  ["現地交通", "3〜10万円"],
  ["保険・ビザ・登録", "5〜15万円"],
  ["予備費", "5〜15万円"],
];

export const jaistOverseasGrant = {
  label: "JAIST · 現行要項",
  title: "研究留学助成制度",
  body: "現行の実施要項では、派遣期間は3か月以上1年以内。国外留学は滞在費月額10万円、往復渡航費1回分、大学が認める査証等の旅行雑費が対象で、利用は在学中1回限り。",
  action:
    "3Dプログラムは大学指定日までに申請。同じ研究留学に関する他の給付型助成との併給は現行要項では不可のため、JSPS・受入先支援と比較して一つの資金表に整理し、2028年度要項を学生・留学生支援課へ確認する。",
  href: "https://www.jaist.ac.jp/studentlife/data/off-campus_research_youkou_J.pdf",
};

export const jspsRoutes = [
  {
    label: "在学中 · 採用者",
    status: "DC採用者・奨励費の計画と残額次第",
    title: "JSPS特別研究員-DC＋特別研究員奨励費",
    body: "DC採用中の研究目的の海外渡航は可能。特別研究員奨励費の研究計画に位置付けた旅費を使える可能性があるが、DC採用だけで渡航費が自動支給されるわけではない。",
    action: "28日以上の渡航手続、国内受入研究者の承認、帰国後の報告、他助成との経費重複を採用年度の手引きで確認。",
    href: "https://www.jsps.go.jp/j-pd/pd_tebiki.html",
  },
  {
    label: "欧州 · 条件付き",
    status: "JSPS提示のERC受入希望者に候補があれば",
    title: "JSPS–ERC 海外渡航支援",
    body: "JSPS特別研究員が、JSPSから提示される欧州のERC受入希望研究者候補へ連絡し、合意できた場合の選択肢。JSPSから追加旅費が一律支給される制度ではない。",
    action: "2028年度の実施有無、JSPSが提示する候補リスト、受入条件、申込期限を年度初めに確認。",
    href: "https://www.jsps.go.jp/j-pd/pd_user-haken.html",
  },
  {
    label: "博士修了後",
    status: "2年間の海外キャリア",
    title: "海外特別研究員（採用予約）",
    body: "博士課程在学中に採用予約へ応募し、学位取得後に2年間海外で研究する制度。D2の3か月留学とは別の、2030年3月修了後の進路候補。",
    action: "D2春に、2030年3月修了見込みで応募できる募集年度・資格・開始時期を最新要項で確認。",
    href: "https://www.jsps.go.jp/j-ab/ab_gaiyo2.html",
  },
  {
    label: "旧制度",
    status: "現在は新規募集なし",
    title: "若手研究者海外挑戦プログラム",
    body: "博士課程学生の3か月〜1年の海外研究に近い制度だったが、2024年度第2回採用分で新規募集を終了。2028年の資金候補には数えない。",
    action: "名称が似た古い紹介記事を、現在利用できる制度と取り違えない。",
    href: "https://www.jsps.go.jp/j-abc/",
  },
];

export const overseasGo = [
  "博士論文のどの章になるかを説明できる",
  "受入教員・身分・定期指導が確定",
  "資金、住居、保険、ビザが確定",
  "倫理・データ移転・公開可否が確定",
  "ベースラインと予備実験が完了",
  "投稿先・著者順と帰国後6〜8週間を確保",
];

export const overseasDelay = [
  "現地でテーマを決める予定",
  "受入先と2か月以上連絡がない",
  "使えるデータや倫理責任機関が不明",
  "論文公開・知財・著者条件が不明",
  "資金不足を現地アルバイトで補う前提",
  "前案件が未投稿、または睡眠・体調が不安定",
];

export const degreeRequirements = [
  ["修得単位", "20単位以上"],
  ["博士論文・研究論文", "6単位"],
  ["人間力・創出力イノベーション論", "1単位"],
  ["副テーマ研究 または インターンシップ", "2単位"],
  ["選択科目群", "11単位以上"],
  ["うち先端科目", "4単位以上"],
];

export const degreeMilestones = [
  {
    time: "2027.04",
    standard: "履修・指導体制の開始",
    internal: "4月中に20単位の取得表を作成",
  },
  {
    time: "2027.12",
    standard: "—",
    internal: "副テーマ候補の受入承諾",
  },
  {
    time: "2028.02",
    standard: "副テーマ指導教員の決定時期を確認",
    internal: "候補を確定",
  },
  {
    time: "2028.03",
    standard: "副テーマ研究計画書の提出予定月",
    internal: "1月までに初稿を完成",
  },
  {
    time: "2028年度",
    standard: "副テーマ／インターンの単位認定",
    internal: "報告と認定を年度内に完了",
  },
  {
    time: "2029.07",
    standard: "学位論文骨子の提出予定月",
    internal: "5月に全章アウトライン",
  },
  {
    time: "2029.10",
    standard: "予備審査願の提出予定月",
    internal: "9月に論文全体80%",
  },
  {
    time: "2029.12",
    standard: "予備審査の予定月",
    internal: "11月に完全版と模擬審査",
  },
  {
    time: "2030.01",
    standard: "学位申請・博士論文提出の予定月",
    internal: "2029年末に提出可能版",
  },
  {
    time: "2030.02",
    standard: "公聴会・本審査・最終試験の予定月",
    internal: "1月中に発表練習を3回",
  },
  {
    time: "2030.03",
    standard: "学位授与の予定月",
    internal: "修正・休養・就業準備",
  },
];

export const supportPrograms = [
  {
    label: "公式・要申請",
    title: "研究留学助成制度",
    body: "石川キャンパスの博士後期課程学生が対象。指導教員と相談し、指定締切までに学生支援課留学生係へ申請する。在学期間中に助成を受けられるのは1回限り。",
    action: "期間・金額・他助成との重複条件を、申請年度の要項と留学生係で確認する。",
    href: "https://www.jaist.ac.jp/studentlife/support/grant.html",
  },
  {
    label: "公式・要申請",
    title: "国際会議研究発表支援",
    body: "JAIST支援財団による、博士後期課程学生向けの制度。国際会議での研究発表にかかる経費を支援する。",
    action: "2026–2027年版の手引きで対象経費・申請時期・採否条件を確認する。",
    href: "https://www.jaist.ac.jp/studentlife/data/Application2026-2027.zip",
  },
  {
    label: "公式・要申請",
    title: "インターンシップ助成",
    body: "インターンシップにかかる経費を助成。高度な科学者・技術者に必要な企画・遂行能力の育成を目的とする。",
    action: "単位化、申請時期、対象となる活動と経費をキャリア支援情報で確認する。",
    href: "https://www.jaist.ac.jp/careersupport/student-private/internship-help.html",
  },
  {
    label: "外部情報",
    title: "JASSO 海外留学情報",
    body: "海外留学の基本情報や外部の支援制度を調べるための情報入口。JAISTの助成制度ではなく、掲載制度の利用を保証するものではない。",
    action: "希望国・期間・留学形態に合う制度を探し、JAIST側の手続きと併給条件も別途確認する。",
    href: "https://www.jasso.go.jp/ryugaku/study_a/index.html",
  },
];

export const nextTwelveMonths = [
  {
    month: "2026.07",
    title: "全体を一枚にする",
    tasks: [
      "指導教員と博士3年間について90分面談",
      "博士論文の中心テーマ候補を3案作る",
      "海外研究の位置付けを相談し、国際交流窓口と資金制度を確認",
    ],
  },
  {
    month: "2026.08",
    title: "研究と候補を絞る",
    tasks: [
      "修士研究のデータ・解析仕様を凍結",
      "「海外でしかできない研究」1ページと英語CVを作る",
      "海外候補10件、国内・企業候補各5件を一覧化",
    ],
  },
  {
    month: "2026.09",
    title: "投稿可否を判断",
    tasks: [
      "本文80%・結果100%なら9月締切へ投稿",
      "未達なら翌春またはジャーナルへ移す",
      "投稿後2〜3日は低負荷にする",
    ],
  },
  {
    month: "2026.10",
    title: "博士論文の背骨",
    tasks: [
      "仮タイトルと中心研究質問を決める",
      "論文候補3本を定義",
      "各論文と博士論文章の対応を1ページへ",
    ],
  },
  {
    month: "2026.11",
    title: "共同研究の準備",
    tasks: [
      "計画・著者・データ・知財のテンプレートを作る",
      "海外候補を4〜5件へ絞り、30分のオンライン面談",
      "国内候補2名とも面談",
    ],
  },
  {
    month: "2026.12",
    title: "修論とD1夏を確定",
    tasks: [
      "修士論文初稿",
      "2027年夏の国内候補を1つへ",
      "新規案件を止め、年末に3〜5日休む",
    ],
  },
  {
    month: "2027.01",
    title: "審査へ集中",
    tasks: [
      "修士論文最終化と発表練習",
      "D1収入が未確定なら寮を継続",
      "山小屋の短期募集時期を調べる",
    ],
  },
  {
    month: "2027.02",
    title: "国内滞在を仮合意",
    tasks: [
      "修士審査と修正",
      "滞在先と研究課題を仮合意",
      "引っ越し・車は契約しない",
    ],
  },
  {
    month: "2027.03",
    title: "修士から博士へ",
    tasks: [
      "修士修了",
      "データ・コード・研究記録を整理",
      "7〜10日休み、D1最初の90日を設計",
    ],
  },
  {
    month: "2027.04",
    title: "制度を最新版へ",
    tasks: [
      "履修案内・学位要件・単位表を確認",
      "指導面談を週次または隔週で固定",
      "資金採否に応じて生活計画を確定",
    ],
  },
  {
    month: "2027.05",
    title: "滞在準備を完了",
    tasks: [
      "対象資金へ申請",
      "倫理・データ・著者・知財を合意",
      "ベースラインを再現",
    ],
  },
  {
    month: "2027.06",
    title: "実施ゲート",
    tasks: [
      "受入・指導教員・倫理・投稿先を最終確認",
      "滞在費と帰国後6週間の執筆時間を確保",
      "未完なら短期訪問へ縮小または延期",
    ],
  },
];

export const careerSteps = [
  ["D1 前半", "AI・ロボティクス研究職、企業研究所、国立研究機関を20組織調べる"],
  ["D1 後半", "研究者・採用担当との面談を8回行う"],
  ["D2 前半", "研究インターンで仕事・文化・研究公開条件を確かめる"],
  ["D2 秋", "応募先を5〜8社へ絞る"],
  ["D2 冬", "海外滞在中は情報収集とオンライン対応に限定"],
  ["2029.01–06", "帰国後に主要応募と面接。企業選考は6月終了を目標"],
];

export const lifeCards = [
  {
    label: "住居",
    title: "海外留学までは寮を基準に",
    text: "D1はJAIST学生寄宿舎。B案では2028年Q4の海外留学が終わるまで寮を継続し、2029年1〜3月に引っ越しを再判定する。",
    rule: "早く引っ越すなら、二重家賃込みで固定費が手取り35%以内・生活防衛資金6か月が条件。",
  },
  {
    label: "車",
    title: "欲しさではなく利用頻度で判断",
    text: "D1冬はシャトル・カーシェア・レンタカーで利用日数を記録。B案の海外留学を行うなら購入は原則として博士修了後。",
    rule: "月8〜10日以上使い、9か月以内に長期留学がなく、購入後も生活費6か月が残る場合だけ候補。",
  },
  {
    label: "山小屋・バイト",
    title: "生活経験は小さく試す",
    text: "山小屋は3日〜2週間の体験を基本とする。1か月働くなら挑戦案として、同年の投稿または外部活動を一つ減らす。",
    rule: "一般バイトは週4〜8時間まで。山小屋の年は減らし、D3では新規バイトを停止。",
  },
  {
    label: "恋愛・人間関係",
    title: "期限ではなく、育つ余白を守る",
    text: "恋愛や結婚を達成項目にしない。週1回は研究以外の人と会う夜を置き、定期コミュニティを一つ持つ。",
    rule: "月2回はJAIST外へ。平日2夜は研究を入れず、留学前に連絡頻度と将来の居住地を話す。",
  },
  {
    label: "健康",
    title: "健康は研究計画の一部",
    text: "睡眠7〜8時間、週1日の完全休養、週3回30分以上の運動、月末60〜90分のレビューを基準にする。",
    rule: "睡眠・食欲・研究室回避の悪化が2週間続けば、バイトを止めて学内の相談先へ早めに連絡。",
  },
];

export const budgets = [
  {
    name: "節約型",
    monthly: "13.6〜16.8万円",
    annual: "約163〜202万円 / 年",
    description: "学生寄宿舎を活用し、車を持たず、固定費を抑える基準案。",
  },
  {
    name: "標準型",
    monthly: "19.9〜25.7万円",
    annual: "約238〜308万円 / 年",
    description: "民間住居、交流・趣味、交通費を含む。留学との二重家賃に注意。",
  },
  {
    name: "車所有型",
    monthly: "23.4〜32.4万円",
    annual: "約280〜389万円 / 年",
    description: "購入償却、保険、税、車検、冬タイヤ、燃料を含めて見積もる。",
  },
];

export const oneTimeCosts = [
  ["入学料予備費", "最大28.2万円程度"],
  ["引っ越し", "20〜45万円"],
  ["中古軽自動車", "80〜180万円"],
  ["国内2か月滞在の追加費", "16〜36万円程度"],
  ["海外3か月の総費用（助成前）", "76〜190万円程度"],
  ["国内学会1回", "5〜12万円"],
  ["海外学会1回", "25〜50万円"],
];

export const decisionGates = [
  {
    time: "2026.12",
    title: "博士テーマ",
    go: "中心問いを1文で説明でき、3本の研究が同じ問いへ接続",
    stop: "単発の精度競争なら構成を変更",
  },
  {
    time: "2027.06",
    title: "国内研究滞在",
    go: "受入・倫理・データ・資金・著者・投稿先・帰国後の執筆時間が確定",
    stop: "未完なら短期訪問へ縮小または延期",
  },
  {
    time: "2028.02",
    title: "引っ越し",
    go: "1年以上住む見込み、固定費35%以内、生活防衛資金6か月",
    stop: "秋に長期留学、または資金未確定なら延期",
  },
  {
    time: "2028 春",
    title: "車",
    go: "月8〜10日以上利用し、購入後も生活費6か月が残る",
    stop: "Q4に海外留学するB案なら原則見送り",
  },
  {
    time: "2028.08",
    title: "海外研究留学",
    go: "博士論文章、受入、資金、倫理、データ、住居・保険・ビザ、ベースライン、著者・投稿先が揃う",
    stop: "前案件未投稿、連絡空白2か月、公開条件不明、案件間隔8週未満、健康不安のいずれかで延期",
  },
  {
    time: "2029.03",
    title: "D3移行",
    go: "3章分の主要結果、独立研究2本以上の投稿、全体構成がある",
    stop: "不足なら新規共同研究・バイト・長期訪問を停止",
  },
  {
    time: "2029.06",
    title: "就活",
    go: "企業選考を終了し、7月の論文骨子へ集中",
    stop: "未終了でも応募先を2〜3件へ絞る",
  },
  {
    time: "2029.10",
    title: "予備審査",
    go: "博士論文以外の大型活動を全面停止",
    stop: "新規インターン・山小屋・アルバイトは入れない",
  },
];

export const riskRows = [
  ["外部滞在が論文にならない", "出発1か月前にベースライン未完成", "延期または短期訪問へ"],
  ["倫理審査が間に合わない", "出発8週間前に未申請", "利用範囲を倫理担当へ再確認"],
  ["D2が過密", "大型案件の間隔が8週未満", "一方を延期・中止"],
  ["D3論文が遅れる", "2029年5月に章立て・主要図なし", "新規実験と任意就活を停止"],
  ["資金不足", "生活防衛資金3か月未満", "寮継続・車中止・契約延期"],
  ["睡眠悪化", "平均7時間未満が2週間", "バイトと任意活動を停止"],
  ["孤立", "研究室外の対面交流が月1回未満", "定期コミュニティを予定化"],
  ["就活と論文が衝突", "2029年7月以降も複数社選考", "応募先を2〜3件へ絞る"],
];

export const busyPeriods = [
  ["3〜4月", "春投稿、研究計画、年度切替"],
  ["5〜6月", "研究費申請、授業料、外部研究準備"],
  ["7〜9月", "主要投稿、夏インターン、学会、山小屋"],
  ["10〜12月", "海外滞在、投稿結果、年度後半研究"],
  ["D3・7月", "博士論文骨子"],
  ["D3・10〜2月", "予備審査、論文提出、公聴会"],
];

export const recoveryWindows = [
  ["2027.03", "修士修了後7〜10日"],
  ["毎年12月末", "3〜5日の完全休養"],
  ["2028 夏", "企業と海外の間を最低8週間"],
  ["外部研究後", "短期は2〜3日、長期留学後は1週間"],
  ["2029.08", "骨子提出後2〜3日"],
  ["2030.02", "公聴会後1週間"],
];

export const sourceGroups: { title: string; links: LinkItem[] }[] = [
  {
    title: "JAIST・学位",
    links: [
      {
        label: "履修案内・Degree Completion Guide",
        href: "https://www.jaist.ac.jp/education/courses/guide.html",
      },
      {
        label: "2026年度履修案内",
        href: "https://www.jaist.ac.jp/education/data/risyu-annai_2026.pdf",
      },
      {
        label: "博士後期課程・標準スケジュール",
        href: "https://www.jaist.ac.jp/education/publish/d-schedule.html",
      },
      {
        label: "副テーマ研究／インターンシップ",
        href: "https://www.jaist.ac.jp/education/courses/minor.html",
      },
      {
        label: "研究留学・国際会議・インターン助成",
        href: "https://www.jaist.ac.jp/studentlife/support/grant.html",
      },
      {
        label: "研究留学助成制度 実施要項",
        href: "https://www.jaist.ac.jp/studentlife/data/off-campus_research_youkou_J.pdf",
      },
      {
        label: "奨学制度・経済支援",
        href: "https://www.jaist.ac.jp/studentlife/support/scholarships.html",
      },
      {
        label: "JAIST 海外留学情報",
        href: "https://www.jaist.ac.jp/international/abroad/",
      },
    ],
  },
  {
    title: "資金・キャリア",
    links: [
      {
        label: "JAIST SPRING",
        href: "https://www.jaist.ac.jp/jisedai/",
      },
      {
        label: "JSPS特別研究員・採用中の手引",
        href: "https://www.jsps.go.jp/j-pd/pd_tebiki.html",
      },
      {
        label: "JSPS 特別研究員奨励費",
        href: "https://www.jsps.go.jp/j-grantsinaid/20_tokushourei/index.html",
      },
      {
        label: "JSPS–ERC 海外渡航支援",
        href: "https://www.jsps.go.jp/j-pd/pd_user-haken.html",
      },
      {
        label: "JSPS 海外特別研究員（採用予約）",
        href: "https://www.jsps.go.jp/j-ab/ab_gaiyo2.html",
      },
      {
        label: "JSPS 若手研究者海外挑戦プログラム（募集終了）",
        href: "https://www.jsps.go.jp/j-abc/",
      },
      {
        label: "JST SPRING",
        href: "https://www.jst.go.jp/jisedai/spring/",
      },
      {
        label: "JREC-IN Portal",
        href: "https://jrecin.jst.go.jp/seek/SeekTop",
      },
      {
        label: "JASSO 海外留学情報",
        href: "https://www.jasso.go.jp/ryugaku/study_a/index.html",
      },
    ],
  },
  {
    title: "国内・企業候補",
    links: [
      {
        label: "CyberAgent AI Lab 博士研究インターン",
        href: "https://www.cyberagent.co.jp/news/detail/id%3D33182",
      },
      {
        label: "Preferred Networks Internship",
        href: "https://www.preferred.jp/en/careers/internship",
      },
      {
        label: "RIKEN Student Researcher",
        href: "https://www.riken.jp/en/careers/programs/rsr/",
      },
      {
        label: "AIST Research Assistant",
        href: "https://www.aist.go.jp/aist_e/collab/ra/index.html",
      },
    ],
  },
  {
    title: "海外研究候補",
    links: [
      {
        label: "University of Waterloo IVGS",
        href: "https://uwaterloo.ca/current-graduate-students/international-visiting-graduate-students",
      },
      {
        label: "Waterloo SIRRL",
        href: "https://uwaterloo.ca/social-intelligent-robotics-research-lab/research-themes",
      },
      {
        label: "Heriot-Watt / National Robotarium",
        href: "https://www.hw.ac.uk/research-enterprise/global/driving-ai-and-robotics/the-national-robotarium/human-robot-interaction-hri",
      },
      {
        label: "Ghent University AIRO",
        href: "https://airo.ugent.be/",
      },
      {
        label: "USC Institute for Creative Technologies",
        href: "https://ict.usc.edu/research/",
      },
      {
        label: "UBC Visiting International Research Students",
        href: "https://global.ubc.ca/visiting-international-research-students",
      },
    ],
  },
  {
    title: "参考・生活",
    links: [
      {
        label: "参考note「博士課程1年4月」",
        href: "https://note.com/riko200702/n/n9c41f7b0ac4a",
        note: "博士生活の具体像を考えるための重要な参考",
      },
      {
        label: "JAIST 学生寄宿舎等",
        href: "https://www.jaist.ac.jp/studentlife/institution/",
      },
      {
        label: "JAIST カーシェアリング",
        href: "https://www.jaist.ac.jp/studentlife/institution/carsharing.html",
      },
      {
        label: "JAIST 保健管理センター・学生相談室",
        href: "https://www.jaist.ac.jp/studentlife/institution/healthcare.html",
      },
      {
        label: "槍ヶ岳山荘グループ求人",
        href: "https://www.yarigatake.co.jp/recruit/",
      },
    ],
  },
];
