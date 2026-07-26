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
    outside: "CyberAgentの長期・論文型へ応募。6〜8週間・投稿可能な代替企業も同時に準備する。",
    life: "資金を確定し、週次または隔週の指導面談を固定する。",
  },
  {
    period: "2027 Q3",
    stage: "D1",
    research: "CyberAgentを本命に6〜8週間の主実験を行い、研究1の主要結果と原稿60〜80%を作る。",
    outside: "D1夏の企業研究は一社だけ。期間・公開・知財・終了後アクセスがそろう代替企業へは入れ替え可。",
    life: "夏インターンの年は山小屋を見送り、終了後3〜5日の回復日を置く。",
  },
  {
    period: "2027 Q4",
    stage: "D1",
    research: "D1企業研究の残実験・公開審査・執筆を6〜8週間で完了し、年内投稿を目標にする。",
    outside: "D2夏の候補を日立・OMRON・NECから絞り、海外大学の受入候補とも面談する。",
    life: "引っ越し候補を調べるが、まだ固定費は増やさない。",
  },
  {
    period: "2028.01–03",
    stage: "D1",
    research: "D1企業論文を投稿し、D2企業研究と海外大学研究を博士論文の別の問いへ割り当てる。",
    outside: "D2夏企業へ応募し、2028年11月〜2029年1月の海外大学訪問について受入・資金・倫理を仮合意する。",
    life: "引っ越しと車は、海外留学後の負担まで含めて判定する。",
  },
  {
    period: "2028.04–05",
    stage: "D2",
    research: "D2企業研究の質問・ベースライン・投稿先を固定し、海外共同研究の倫理・データ契約も完成。",
    outside: "日立を第一候補に、明示的な8週間合意が取れるOMRON、NECを比較して一社へ決める。",
    life: "寮を基本に固定費を抑える。一般バイトは減らす。",
  },
  {
    period: "2028.06–07",
    stage: "D2",
    research: "別企業で6〜8週間の研究2を実施し、主要結果・図表・原稿60〜80%を持ち帰る。",
    outside: "D2夏の企業研究は一社だけ。終了日、社内公開審査、帰任後の執筆担当を開始前に固定する。",
    life: "終了後3〜5日休み、海外渡航まで固定費と体調を安定させる。",
  },
  {
    period: "2028.08–10",
    stage: "D2",
    research: "D2企業論文を投稿し、海外大学で検証する条件・実装・予備実験を完成する。",
    outside: "企業終了から海外開始まで8週間を確保し、受入・住居・保険・ビザを確定する。",
    life: "投稿、休養、渡航準備を重ねすぎない。車は原則として修了後へ延期する。",
  },
  {
    period: "2028.11–2029.01",
    stage: "D2",
    research: "海外大学で既存成果の一般化・外的妥当性を検証し、主要結果と原稿60〜80%を持ち帰る。",
    outside: "海外大学研究を検証枠として実施。企業インターンを追加せず、企業論文とは別の役割にする。",
    life: "助成と二重家賃を管理し、帰国後に住居と生活防衛資金を再判定する。",
  },
  {
    period: "2029.02–03",
    stage: "D2",
    research: "海外成果を投稿し、博士論文の主要章・図表・全体構成を固定する。",
    outside: "D3夏の企業候補を期間・投稿・知財・終了後アクセスで比較し、NTTを候補の一つとして監視する。",
    life: "帰国後1週間は低負荷にし、就活とD3準備を同時に増やしすぎない。",
  },
  {
    period: "2029 Q2",
    stage: "D3",
    research: "学位の主要実験と全章構成を固定し、5月31日までに博士論文初稿を70〜80%へ進める。",
    outside: "D3夏は学位ゲート通過時だけ。6〜8週間・論文公開可能な一社を選び、就活の主要判断は6月までに終える。",
    life: "新規バイトと高額支出を止める。",
  },
  {
    period: "2029 Q3",
    stage: "D3",
    research: "7月に学位論文骨子を提出し、D3企業研究を学位非依存の追加論文として進める。",
    outside: "骨子提出直後から8月末まで6〜8週間。NTTを含め、期間・公開・知財・終了後アクセスを満たす一社だけ。",
    life: "引っ越しをせず、週1日の完全休養を守る。",
  },
  {
    period: "2029 Q4",
    stage: "D3",
    research: "D3企業論文は追加実験をせず投稿工程だけに限定し、10月に予備審査願、12月に予備審査。",
    outside: "9月は企業成果の投稿準備だけ。新規企業活動・就活・山小屋を入れない。",
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
    projects: "D1・D2夏の企業2回 ＋ 海外大学",
    papers: "企業論文2本＋海外検証＋博士論文",
    life: "山小屋3〜6日、車は修了後",
    risk: "D3夏は使わず、学位日程を守る",
  },
  {
    key: "B",
    title: "バランス",
    projects: "毎夏の企業3回 ＋ D2海外大学",
    papers: "企業論文3本＋海外検証、D3論文は追加扱い",
    life: "山小屋は見送り、車は修了後",
    risk: "D3夏は5月31日の学位ゲート未達なら中止",
    recommended: true,
  },
  {
    key: "C",
    title: "挑戦",
    projects: "D2企業を3か月化し、毎夏3回を固定",
    papers: "企業論文3本＋海外共同論文",
    life: "山小屋1か月、D2で車購入",
    risk: "D2海外との余白とD3学位ゲートを圧迫するため非推奨",
  },
];

export const externalProjects = [
  {
    number: "01",
    time: "D1 · 2027.07–09",
    title: "CyberAgent · 論文型",
    duration: "6〜8週間",
    result: "国際会議論文・博士論文の一章",
    purpose: "既存の共同研究、実環境HRIデータ、ラポール・離脱研究を使い、研究1を国際論文へ進める。",
    caution:
      "2027年度募集と実施時期は未公表。6〜8週間、投稿、博士論文利用、終了後アクセスを受諾前に書面化する。",
  },
  {
    number: "02",
    time: "D2 · 2028.06–07",
    title: "別企業 · 論文型",
    duration: "6〜8週間",
    result: "企業研究論文・異なる研究文化",
    purpose: "日立を第一候補に、CyberAgentと異なる研究環境で研究2を完成し、就職先としての適合も確かめる。",
    caution:
      "日立の実施年度条件を再確認。OMRONは明示的な8週間合意がある場合だけ、NECは公開・知財条件が合う場合に選ぶ。",
  },
  {
    number: "03",
    time: "D2 · 2028.11–2029.01",
    title: "海外大学研究 · 検証",
    duration: "3か月",
    result: "国際共同研究・外的妥当性",
    purpose: "D2企業論文とは役割を分け、海外大学のデータ・設備・方法で既存成果を検証する。",
    caution:
      "D2企業終了から8週間を確保。企業インターンを追加する第四の必須論文枠にはせず、資金・倫理・データ移転を確認する。",
  },
  {
    number: "04",
    time: "D3 · 2029.07–08",
    title: "企業研究 · 追加論文",
    duration: "6〜8週間",
    result: "追加論文・研究所比較",
    purpose: "NTTを候補の一つとして、期間・公開・知財・終了後アクセスを満たす一社で学位非依存の研究を完成する。",
    caution:
      "5月31日に学位ゲートを通過した場合だけ実施。7月の骨子提出直後に開始し、原則8月31日までに終え、博士論文の成立をこの結果へ依存させない。",
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
      "CyberAgent AI Lab（D1第一候補）",
      "日立 博士向け長期インターン（D2第一候補）",
      "OMRON SINIC X（明示的な8週間合意が条件）",
      "NEC 研究インターン（D2・D3候補）",
      "NTT R&D（D3候補の一つ）",
      "豊田中央研究所（短期訪問・縮小案）",
      "アイシン（短期探索）",
      "Honda Research Institute Japan（個別提案）",
      "日立・Sony 長期有給インターン",
      "IBM Research Tokyo（個別募集を監視）",
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
      "MERL（海外企業・大学留学の代替）",
      "Honda Research Institute USA（同上）",
      "Toyota Research Institute（テーマ監視）",
    ],
  },
];

export const eightWeekPlan = [
  ["1", "環境構築、データ確認、既存結果の再現"],
  ["2", "ベースラインと実験計画を凍結"],
  ["3–5", "主実験、比較、アブレーション"],
  ["6", "統計解析、追加実験、エラー分析"],
  ["7", "図表と原稿、社内公開審査の開始"],
  ["8", "内部発表、結果凍結、帰任後6週間の分担確定"],
];

export const internshipWindows = [
  {
    status: "D1 · 論文",
    time: "2027.07–09",
    title: "CyberAgentで6〜8週間",
    text: "既存共同研究を研究1の国際論文へ進める。期間・公開・博士論文利用・終了後アクセスを開始前に確定する。",
  },
  {
    status: "D2 · 論文",
    time: "2028.06–07",
    title: "別企業で6〜8週間",
    text: "日立を第一候補に、8週間合意のOMRON、公開条件の合うNECを比較。8〜9月に投稿し、海外開始まで8週間空ける。",
  },
  {
    status: "D3 · 追加論文",
    time: "2029.07–08",
    title: "条件を満たす一社で6〜8週間",
    text: "NTT固定ではない。5月31日の学位ゲートを通過し、骨子提出後から8月末までに終わる論文型テーマだけを実施する。",
  },
];

export const internshipThreeYearRules = [
  "D1・D2・D3の各夏は一社だけ、いずれも6〜8週間の論文型として設計する",
  "開始前に研究質問・データ・倫理・ベースライン・投稿先を固定する",
  "論文公開・博士論文利用・著者・知財・終了後アクセスを受諾前に書面化する",
  "終了時に主要結果・再現コード・図表・原稿60〜80%を持ち帰る",
  "前年の企業論文を、次年度夏の企業研究開始前までに投稿する",
  "D2企業終了から海外大学研究の開始まで8週間を空ける",
  "D3企業論文は学位非依存の追加成果とし、博士論文の成立条件にしない",
  "D3は5月31日の学位ゲートを通過し、骨子提出後から原則8月31日までに完全終了できる場合だけ実施する",
];

export const internshipRules = [
  {
    label: "ジョブ型",
    title: "標準2か月以上",
    text: "博士学生向けの有給・雇用型。実際の案件は約1〜6か月で、指導教員の承認と終了時評価がある。",
    href: "https://coopj-intern.com/faq",
  },
  {
    label: "JAISTの単位",
    title: "高度 ＋ 合計おおむね3か月",
    text: "博士後期課程の選択必修として認定する公開条件。事前計画、担当教員、終了報告も必要になる。",
    href: "https://www.jaist.ac.jp/careersupport/doctor/",
  },
  {
    label: "この計画",
    title: "論文目的は6〜8週間",
    text: "開始前に問いとデータを固定し、主要実験と原稿60〜80%を持ち帰る設計。単位取得とは別に扱う。",
    href: "https://www.jaist.ac.jp/education/courses/minor.html",
  },
];

export const internshipProcedures = [
  {
    step: "01",
    title: "参加申請",
    text: "単位の有無や大学紹介かどうかに関係なく申請する。国内・オンラインは開始2週間前、海外は1か月前が公開上の期限。",
  },
  {
    step: "02",
    title: "単位の事前計画",
    text: "博士後期課程は開始2週間前までに計画提案書と概要資料を提出。主・副指導教員はインターン指導教員を兼ねられない。",
  },
  {
    step: "03",
    title: "終了後の報告",
    text: "成果報告書を指導教員と教務へ提出する。企業への勤務状況確認により、成績登録・最終承認に時間がかかる場合がある。",
  },
];

export const internshipCandidates = [
  {
    rank: "01",
    name: "CyberAgent AI Lab",
    role: "論文・研究相性の総合本命",
    facts: "2026年度は7〜10月内の2か月、月50万円。時期と勤務形態は個別相談。",
    fit: "実環境インタラクション、ユーザ理解、店舗ロボット、マルチモーダル行動理解が研究テーマへ直結。",
    caution: "2027年度の募集・実施時期は未公表。国際会議投稿、博士論文利用、知財、終了後の執筆条件を案件ごとに確認。",
    href: "https://www.cyberagent.co.jp/news/detail/id%3D33182",
  },
  {
    rank: "02",
    name: "日立",
    role: "D2第一候補・期間適合",
    facts: "博士向け長期有給インターンとして1.5〜3か月の募集実績があり、6〜8週間の計画と合わせやすい。",
    fit: "人間モデリング、AI、ロボティクス、社会実装を、CyberAgentとは異なる大企業研究環境で検証できる。",
    caution: "2028年度のテーマ、期間、論文公開、知財、博士論文利用、終了後アクセスを案件ごとに確認する。",
    href: "https://www.hitachi.co.jp/recruit/doctor/",
  },
  {
    rank: "03",
    name: "OMRON SINIC X",
    role: "D2候補・8週間合意が条件",
    facts: "2026年7月確認時点で通年募集。原則3か月、月24〜48万円で、開始・終了日や働き方は相談可能。",
    fit: "Robotics、HCI、Interaction、機械学習。複数メンターとロボット・センサ等の研究環境がある。",
    caution: "実際のテーマで6〜8週間のフルタイム相当を明示合意できる場合だけ選ぶ。公開・知財条件も書面化する。",
    href: "https://www.omron.com/sinicx/internship/",
  },
  {
    rank: "04",
    name: "NEC",
    role: "D2・D3の論文型候補",
    facts: "2026年度は8〜9月中心で、一部長期・日程相談。共同論文へ進んだ公式事例もある。",
    fit: "人間モデリング、マルチモーダル認識、Agent AI、Physical AIが研究テーマに近い。",
    caution: "インターン中の発明・著作権等はNEC帰属。6〜8週間、博士論文利用、投稿可否を別途書面化する。",
    href: "https://jpn.nec.com/rd/rdcareer/internship/guideline/",
  },
  {
    rank: "05",
    name: "NTT R&D",
    role: "D3候補の一つ・固定しない",
    facts: "確認済みの2026年度夏期テーマは2〜4週未満または4〜6週未満で、6〜8週間の実施例は確認できない。対話LLMやマルチモーダル解析の関連テーマはあった。",
    fit: "対話・音声・言語、コミュニケーション科学、視線・動作、LLMエージェント、人間行動予測と接続できる。",
    caution: "2029年度に新たな6〜8週テーマが出た場合だけ期間候補にする。知財はNTT帰属のため、論文公開・博士論文利用・終了後アクセスの書面許可がない場合も選ばない。",
    href: "https://www.ntt-labs.jp/saiyo/internship/recruitment2/",
  },
  {
    rank: "06",
    name: "Sony / Woven",
    role: "期間を変更できる場合の候補",
    facts: "Sonyは3か月以上・週2日以上、Wovenの公開枠は3か月・週5日が基準。",
    fit: "マルチモーダルAI、音声・映像理解、モビリティAI、大規模ソフトウェアの研究文化を比較できる。",
    caution: "現行標準は6〜8週間固定と合わない。期間短縮と論文公開の双方を明示合意できない限り、毎夏の本枠には選ばない。",
    href: "https://www.sony.com/ja/SonyInfo/Jobs/sgc-recruit/newgrads/internship/master-doctor-internship/",
  },
  {
    rank: "07",
    name: "IBM Research Tokyo",
    role: "有償研究枠を個別に監視",
    facts: "Speech / NLP、Neuro-symbolic AI、AutoAI、Offline RL、Safe Policy Evaluation、Multi-agent等の研究領域があり、研究インターンは通年で機会が生じ得る。",
    fit: "対話理解、方策評価、複数主体の相互作用を博士研究へ接続できる可能性がある。",
    caution: "東京での具体的な長期博士枠、期間、募集時期、論文化条件は案件次第。長期・論文型の確定枠とはせず、個別求人を監視する。",
    href: "https://research.ibm.com/projects/ai-in-tokyo",
  },
];

export const nttInternshipThemes = [
  {
    key: "01",
    label: "2025 WINTER",
    title: "長期的な対話シナリオ × LLM",
    text: "NTTw25034。長期的な対話シナリオにおけるLLMシステムの改善検討。2週間以上1か月未満で、博士学生も対象だった。",
  },
  {
    key: "02",
    label: "2026 SUMMER",
    title: "視線・動作 × 触診インタラクション",
    text: "NTTs26064。視線・動作データに基づく触診インタラクションのマルチモーダル解析。4週間以上6週間未満で、D3の6〜8週条件にはそのまま合わない。",
  },
  {
    key: "03",
    label: "RELATED THEMES",
    title: "パーソナルAI・行動予測・不確実性",
    text: "NTTs26044・46・48。LLMプロンプト最適化、歩行者の危険行動予測、移動エージェントの状況認識を扱った。2029年に同等テーマが出る保証はない。",
  },
];

export const shortInternshipCandidates = [
  {
    name: "豊田中央研究所",
    period: "2026実績 · 平日10日",
    role: "論文枠を中止した場合の短期訪問",
    facts: "ID 65の人―人相互作用の状態推定・介入、ID 11の屋内人行動理解など、研究適合の高いテーマがあった。",
    caution: "10日間は6〜8週間の論文型を直接置換しない。学位や公開条件で本枠を中止した年の研究所訪問として扱う。",
    href: "https://www.tytlabs.co.jp/recruit/recruit/05_requirements.html",
  },
  {
    name: "アイシン",
    period: "2026実績 · 10日間",
    role: "車載対話AIの短期訪問",
    facts: "LLM-as-a-Judgeによる車載エージェント評価、リアルタイム音声AI、行動認識AI等のテーマを公開。無給、交通費・条件付き宿泊支援。",
    caution: "論文投稿、博士論文利用、終了後の共同研究は保証されない。正式テーマ名で応募し、架空のテーマIDは使わない。",
    href: "https://www.aisin.com/jp/recruit/summerinternship/theme/",
  },
  {
    name: "KDDI総合研究所",
    period: "2026実績 · 10営業日",
    role: "人中心AI・Physical AIの短期探索",
    facts: "ロボット・ドローンの映像やセンサを用いるPhysical AI、人に寄り添うAIエージェント等を、調査から実験・報告まで経験する。",
    caution: "短期の研究プロセス体験。論文や継続共同研究の確約とは扱わない。",
    href: "https://www.kddi-research.jp/internship.html",
  },
  {
    name: "シャープ",
    period: "2026実績 · 5日または10日",
    role: "音声対話システムの実装探索",
    facts: "LLMを活用した音声対話システム開発など、音声処理・エージェント実装・評価に近い博士対象テーマがある。",
    caution: "テーマは年度で変わる。合致テーマがある年だけ短期探索として応募する。",
    href: "https://corporate.jp.sharp/recruit/newgraduate/internship/theme.html",
  },
  {
    name: "Panasonic / 東芝",
    period: "2026実績 · 約1〜2週間",
    role: "年度テーマが合う場合の予備候補",
    facts: "両社とも研究開発を含む短期テーマを多数公開し、博士学生が応募できるテーマがある。",
    caution: "公開・論文条件はテーマごとに確認。豊田中央研究所、アイシン、KDDI、シャープより優先度は下げる。",
    href: "https://recruit.jpn.panasonic.com/internship/courses/ojt/",
    secondaryHref: "https://www.global.toshiba/jp/recruit/corporate/internship.html",
  },
];

export const toyotaEcosystem = [
  {
    name: "豊田中央研究所",
    category: "短期 · 研究所探索",
    value: "基礎・先端研究の文化と、人の行動・認知テーマとの相性を2週間で確かめる。",
    rule: "6〜8週間の論文型の直接代替にはしない。本枠を中止した場合の短期訪問として扱う。",
    href: "https://www.tytlabs.co.jp/recruit/recruit/05_rdinternship.html",
  },
  {
    name: "アイシン",
    category: "短期 · 車載応用AI",
    value: "LLM評価、音声AI、行動認識を車載エージェントへ落とす実装を経験する。",
    rule: "既存接点があれば、実習応募と研究者面談・共同研究相談を比較する。",
    href: "https://www.aisin.com/jp/recruit/summerinternship/",
  },
  {
    name: "Woven by Toyota",
    category: "長期 · 実装／キャリア",
    value: "3か月・週5日の有給枠で、大規模モビリティソフトウェアの開発現場を知る。",
    rule: "現行3か月は6〜8週間計画と合わない。期間と論文公開を明示合意できる場合だけD2候補にする。",
    href: "https://woven.toyota/en/careers/internship/",
  },
  {
    name: "Toyota Research Institute",
    category: "海外 · テーマ監視",
    value: "博士向け12週間級の研究枠が出る。World Models、Multi-agent、Sim-to-real等の募集実績がある。",
    rule: "HRI・対話に直接合うテーマが出た年だけ、海外大学留学の代替として検討する。",
    href: "https://jobs.lever.co/tri",
  },
  {
    name: "DENSO IT Laboratory",
    category: "個別打診 · 公募未確認",
    value: "機械学習研究、学会発表、大学連携の文化との相性を研究者ベースで確認する。",
    rule: "標準的な学生インターン制度は未確認。指導教員経由の面談・共同研究打診に留める。",
    href: "https://d-itlab.co.jp/recruit/",
  },
];

export const internshipStrategyOptions = [
  {
    label: "D1 · 論文1",
    title: "CyberAgentで既存研究を完成",
    text: "2027年夏に一社だけ。既存共同研究を使い、6〜8週間で主要結果と原稿60〜80%を完成する。",
  },
  {
    label: "D2 · 論文2",
    title: "別企業で研究文化を比較",
    text: "日立を第一候補に6〜8週間。8〜9月に投稿し、8週間の余白を置いて11月から海外大学へ行く。",
  },
  {
    label: "D3 · 追加論文",
    title: "受入先は条件で選ぶ",
    text: "NTT固定ではない。5月31日の学位ゲートを通り、骨子提出後から6〜8週間・投稿可能・8月末終了を満たす一社だけ。",
  },
];

export const internshipThemes = [
  {
    key: "A",
    label: "PRIMARY",
    title: "ラポールからロボット行動へ",
    text: "対話品質・離脱予兆を使い、「継続・話題変更・終了前置き・対話終了」の選択を8週間で検証する。",
  },
  {
    key: "B",
    label: "MULTIMODAL",
    title: "実環境の人間状態を理解する",
    text: "発話、音声、視線、姿勢、時間変化、ロボット行動をマルチモーダルLLMで統合し、対話品質を評価する。",
  },
  {
    key: "C",
    label: "TRANSFER",
    title: "環境を越えて一般化する",
    text: "JAISTのドラッグストアデータと企業側環境の差を分析し、ドメイン一般化・適応の方法を検証する。",
  },
];

export const internshipOutputModels = [
  {
    key: "A",
    title: "論文優先型",
    text: "公開可能なJAIST・公開データに企業の技術・計算環境を組み合わせる。投稿先と共著者を開始前に固定する。",
    verdict: "第一選択",
  },
  {
    key: "B",
    title: "二層成果型",
    text: "企業内は機密データ、公開論文はJAIST・公開・匿名化データで構成する。企業内成果と論文を分離する。",
    verdict: "機密案件の現実解",
  },
  {
    key: "C",
    title: "キャリア経験型",
    text: "製品実装や企業文化の理解を目的にし、公開論文を約束しない。博士論文の独立成果には数えない。",
    verdict: "就職判断として実施",
  },
];

export const internshipReadiness = [
  ["研究質問", "100%", "8週間で答える一問と主評価指標を固定"],
  ["データ・倫理・契約", "100%", "持込み、利用、公開、保管、終了後アクセスを承認済み"],
  ["ベースライン", "1本以上", "開始初日に企業環境で再現できる状態"],
  ["関連研究", "70〜80%", "主要引用と差分を整理"],
  ["論文構成", "30〜40%", "仮題、主張、必要図表、投稿先を用意"],
];

export const internshipContractGroups = [
  {
    title: "投稿",
    items: ["国際会議投稿の可否", "投稿先の制限", "社内審査に必要な週数", "特許判断と公開延期の期限"],
  },
  {
    title: "博士論文",
    items: ["章への利用可否", "機関リポジトリ公開", "エンバーゴ期間", "公聴会・審査資料での利用"],
  },
  {
    title: "データ・コード",
    items: ["JAIST資産の持込み", "終了後アクセス", "コード・重みの帰属", "持帰れる図表・集計値"],
  },
  {
    title: "知財・著者",
    items: ["発明・著作権の帰属", "第一著者と著者順", "企業共著者の条件", "JAIST側の責任著者"],
  },
  {
    title: "継続",
    items: ["週次メンター", "帰任後の担当者", "残実験と執筆の契約", "社内審査・投稿の期限"],
  },
];

export const internshipScoreRows = [
  "博士論文との連続性",
  "論文公開の条件",
  "週次メンター",
  "独自データ・設備",
  "8週間での実現性",
  "知財・博士論文利用",
  "終了後アクセス",
  "報酬・住居・交通",
  "就職先としての関心",
];

export const internshipRisks = [
  ["機密データで投稿できない", "公開データを使う二層成果型へ切り替える"],
  ["終了後に環境へ入れない", "終了前に結果・図表・許可範囲を凍結する"],
  ["社内公開審査が遅れる", "投稿締切の6〜8週間前に審査へ出す"],
  ["特許出願で公開が止まる", "契約時に特許判断の期限を決める"],
  ["採用説明と研究現場が違う", "研究メンターと契約担当の双方から書面回答を取る"],
  ["夜・週末まで研究が続く", "JAIST研究との二重稼働を前提にせず、一方を止める"],
];

export const internshipPrep = [
  {
    time: "2026.08–12",
    title: "共通の応募基盤を作る",
    text: "JAIST窓口を確認し、日英CV、1ページ研究概要、研究紹介、公開可能なコード・デモを作る。",
  },
  {
    time: "2027.01–06",
    title: "D1長期枠を確定",
    text: "CyberAgentの募集を毎月確認し、6〜8週間・投稿・博士論文利用・終了後アクセスを満たす一社へ決める。",
  },
  {
    time: "2027.07–12",
    title: "実施し、年内に投稿",
    text: "6〜8週間の主実験を進め、終了後6〜8週間で投稿。D2候補の日立・OMRON・NECも並行して調べる。",
  },
  {
    time: "2028.01–10",
    title: "D2企業と海外をつなぐ",
    text: "5月までに企業を確定し、6〜7月に実施、8〜9月に投稿。8週間の余白を確保して11月から海外大学へ行く。",
  },
  {
    time: "2028.10–2029.08",
    title: "D3は学位後ろ盾付き",
    text: "NTTを含む候補を監視し、5月31日に学位進捗で判定。通過時だけ骨子提出直後〜8月末に一社で6〜8週間実施する。",
  },
];

export const internshipFundingNotes = [
  {
    label: "JSPS DC",
    title: "2026年度ルールを基準に、各実施年度版を再確認",
    text: "研究に資するトレーニング、研究への支障なし、受入研究者の承諾が前提で、参加は原則通算6か月以内。報酬受給の報告も含め、実施年度の手引を確認する。",
  },
  {
    label: "JAIST SPRING",
    title: "有給だから直ちに対象外ではない",
    text: "現行JST FAQは有給インターンを推奨する一方、研究・育成活動への支障を見ます。高額・長期・継続雇用は事務局へ書面確認する。",
  },
  {
    label: "雇用・税",
    title: "契約形態で扱いが変わる",
    text: "給与か謝金か、源泉徴収票、社会保険、雇用保険、交通・宿泊費の課税、DC・SPRINGへの報告方法を確認する。",
  },
];

export const internshipGo = [
  "論文・博士論文への利用条件が書面で明確",
  "週次メンターと8週間の実験計画がある",
  "終了時に原稿60〜80%と再現可能な結果を持ち帰れる",
  "終了後6週間の執筆担当と投稿日が決まる",
  "次の外部滞在まで8週間以上空けられ、D3は原則8月31日までに終えられる",
];

export const internshipReject = [
  "論文公開または知財条件が0点",
  "D1・D2で博士論文の章との接続を説明できない、またはD3で独立論文としての新規性を説明できない",
  "終了後にデータ・計算環境・図表へアクセスできない",
  "研究メンターと契約担当の説明が一致しない",
  "夜・週末にJAIST研究を並行しないと成立しない、またはD3の学位進捗へ依存する",
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
    title: "海外大学の検証先を絞る",
    text: "博士論文で検証する問い、受入身分、指導体制、投稿先を合意。D2夏企業とは異なる役割の大学候補を1〜2件へ絞る。",
  },
  {
    time: "2028.04–07",
    label: "D2 · 準備",
    title: "夏企業の前に主要手続きを終える",
    text: "海外大学の受入、論文・博士論文利用、倫理、データ、ビザ、資金を確定。夏企業終了後に残すのは最終確認だけにする。",
  },
  {
    time: "2028.08–10",
    label: "D2 · 投稿と余白",
    title: "企業論文を投稿してから出発",
    text: "夏企業の残実験・公開審査・投稿を終え、企業終了から海外開始まで8週間を確保。渡航・住居・保険を最終確認する。",
  },
  {
    time: "2028.11–2029.01",
    label: "D2 · 実施",
    title: "海外大学で外的妥当性を検証",
    text: "現地で新規テーマを探さず、既存研究を異文化・異環境へ適用。主要図表、再現コード、原稿60〜80%を持ち帰る。",
  },
  {
    time: "2029.02–03",
    label: "D2 · 投稿",
    title: "6〜8週間で投稿し、論文へ統合",
    text: "残実験と執筆を分担して投稿。D3夏の追加企業研究へ進む前に、博士論文の主要章と全体構成を固定する。",
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
    items: ["追加実験と執筆", "受入先で成果発表", "知財・公開確認", "残実験と帰国後タスクを分担"],
  },
];

export const overseasChecks = [
  {
    title: "身分・JAIST手続き",
    items: [
      "Visiting PhD等またはResearch Internの受入身分・契約",
      "受入教員または企業研究メンターの定期指導",
      "学外機関への指導委託の要否（現行案内は開始2か月以上前が目安）",
      "大学枠はJAIST助成、企業枠は対象可否・給与との併給を確認",
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
      "本命は2028年11月〜2029年1月の3か月",
      "D2企業を2028年6〜7月に実施し、8〜9月を投稿・回復に使う",
      "企業終了から海外開始まで必ず8週間以上空ける",
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

export const overseasCompanyCandidates = [
  {
    rank: "01",
    name: "MERL",
    role: "D2夏企業と置き換える場合の海外候補",
    facts: "2026年公募のSA0191は、マルチモーダル場面理解、自然言語によるロボット対話、LLMを用いた屋内監視を扱い、通常3〜6か月。成果公開と博士研究への接続可能性を明記している。",
    fit: "人の状態推定、マルチモーダル理解、ロボット対話へ直結。OR0299のHRI・Robot Learning・Shared Autonomyも年度テーマとして監視する。",
    caution: "海外大学研究へ追加する第四の企業枠にはしない。選ぶ場合はD2夏企業と置換し、期間・知財・ビザ・終了後アクセスを確認する。",
    href: "https://www.merl.com/employment/internship-openings.php?ai=on#SA0191",
  },
  {
    rank: "02",
    name: "Honda Research Institute USA",
    role: "D2夏企業と置換する場合の高適合候補",
    facts: "2026年はAffective ComputingとHuman-AI Group Interactionの3か月枠を公開。研究インターンの学術発表を奨励している。",
    fit: "会話・時系列・映像から集団状態を推定し、信頼、介入タイミング、参加バランスを扱う点がラポール研究に近い。",
    caution: "給与、博士論文利用、終了後データアクセスは公開情報にない。海外大学訪問への追加ではなく、D2企業枠と置換する場合だけ受諾する。",
    href: "https://usa.honda-ri.com/intern-positions",
  },
  {
    rank: "03",
    name: "Toyota Research Institute",
    role: "D2企業枠を海外へ移す場合だけ応募",
    facts: "Fall 2026のWorld Models枠は、有給12週間の博士向け研究インターン。Multi-agent Interaction、World Models、強化学習、知覚、Sim-to-realを扱い、トップ会議投稿を目指す。",
    fit: "複数主体の相互作用やロボット学習へ展開する場合に有力。トヨタ系の海外研究文化も確認できる。",
    caution: "現在の公開枠にはラポール・対話品質へ直接合うHuman-Centered AI枠を確認できない。海外大学研究へ追加せず、2028年度テーマが合う場合にD2企業枠との置換だけを検討する。",
    href: "https://jobs.lever.co/tri",
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
    "大学研究留学では本命の資金候補。海外企業のResearch Internが対象になるか、給与との併給が可能かは個別確認する。同じ研究留学に関する他の給付型助成との併給は現行要項では不可のため、2028年度要項を学生・留学生支援課へ確認する。",
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
  "D1・D2は博士論文の章、D3は独立論文としての新規性を説明できる",
  "受入教員または企業研究メンター・身分・定期指導が確定",
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
  "D2企業論文が未投稿、企業終了から8週間未満、または睡眠・体調が不安定",
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
    internal: "3月末に全章アウトライン、5月31日に初稿70〜80%",
  },
  {
    time: "2029.10",
    standard: "予備審査願の提出予定月",
    internal: "9月に論文全体90〜95%、D3企業は投稿作業だけ",
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
      "2027年夏はCyberAgentを本命に、論文条件を満たす一社へ",
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
    title: "D1外部枠を仮合意",
    tasks: [
      "修士審査と修正",
      "CyberAgent提案と論文型企業の代替案を用意",
      "引っ越し・車は契約しない",
    ],
  },
  {
    month: "2027.03",
    title: "修士から博士へ",
    tasks: [
      "修士修了",
      "データ・コード・研究記録を整理",
      "CyberAgent向け1ページ提案を完成",
    ],
  },
  {
    month: "2027.04",
    title: "D1長期へ応募",
    tasks: [
      "履修案内・学位要件・単位表を確認",
      "CyberAgentの募集を確認し、公式導線で応募",
      "指導面談を週次または隔週で固定",
    ],
  },
  {
    month: "2027.05",
    title: "成果条件を詰める",
    tasks: [
      "研究質問・メンター・投稿先を仮合意",
      "博士論文利用・知財・終了後アクセスを確認",
      "ベースラインを再現",
    ],
  },
  {
    month: "2027.06",
    title: "D1の一枠を選ぶ",
    tasks: [
      "CyberAgent採択・条件がそろえば夏の本命へ",
      "不成立なら6〜8週間・投稿可能な代替企業へ入れ替え",
      "二つを同じ夏に実施しない",
    ],
  },
];

export const careerSteps = [
  ["D1 前半", "AI・ロボティクス研究職、企業研究所、国立研究機関を20組織調べる"],
  ["D1 後半", "研究者・採用担当との面談を8回行う"],
  ["D2 前半", "夏の論文型企業を一社へ絞り、海外大学の受入も確定"],
  ["D2 夏〜秋", "企業研究を実施・投稿し、企業終了から8週間後に海外へ"],
  ["D2 冬〜D3春", "海外研究を進めつつ、NTTを含むD3夏候補と主要就職先を比較"],
  ["2029.05–09", "5月31日の学位ゲート後だけD3企業を実施。主要選考は6月までに仮決定"],
];

export const lifeCards = [
  {
    label: "住居",
    title: "海外留学までは寮を基準に",
    text: "D1はJAIST学生寄宿舎。B案では2029年1月の海外大学研究終了まで寮を継続し、帰国後に引っ越しを再判定する。",
    rule: "早く引っ越すなら、二重家賃込みで固定費が手取り35%以内・生活防衛資金6か月が条件。",
  },
  {
    label: "車",
    title: "欲しさではなく利用頻度で判断",
    text: "D1からシャトル・カーシェア・レンタカーで利用日数を記録。D2夏企業と秋冬の海外大学研究を行うなら購入は原則として博士修了後。",
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
  ["国内企業研究2か月の住居・交通自己負担", "16〜36万円程度"],
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
    title: "D1夏の企業研究",
    go: "6〜8週間、研究質問、メンター、公開・博士論文利用、終了後アクセス、帰任後6週間が確定",
    stop: "CyberAgentが不成立なら条件を満たす代替企業へ入れ替え、短期訪問は論文枠に数えない",
  },
  {
    time: "2027.12",
    title: "D1企業論文",
    go: "主要結果・公開審査・原稿が完成し、投稿日と帰任後の分担が確定",
    stop: "未投稿なら新規長期活動を入れず、D2夏開始前までの投稿を優先",
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
    time: "2028.05",
    title: "D2夏の企業研究",
    go: "日立等の一社で6〜8週間、別の研究質問、公開・知財、終了後アクセス、9月までの投稿日が確定",
    stop: "期間が3か月固定、公開不可、または海外まで8週間空けられない場合は別企業へ変更",
  },
  {
    time: "2028.09",
    title: "海外研究留学",
    go: "D2企業論文が投稿済みで、企業終了から8週間、受入、資金、倫理、データ、住居・保険・ビザが揃う",
    stop: "企業論文未投稿、案件間隔8週未満、連絡空白、公開条件不明、健康不安のいずれかで延期",
  },
  {
    time: "2029.05.31",
    title: "D3夏の学位ゲート",
    go: "主要実験完了、全章構成・主要図表完成、初稿70〜80%、主要論文投稿、指導教員承認がすべて揃う",
    stop: "一つでも未達なら企業研究を中止し、研究者面談または1週間以内の訪問へ縮小",
  },
  {
    time: "2029.06",
    title: "就活",
    go: "企業選考を終了し、7月の論文骨子へ集中",
    stop: "未終了でも応募先を2〜3件へ絞る",
  },
  {
    time: "2029.07",
    title: "D3夏の最終受諾",
    go: "学位論文骨子を提出し、6〜8週間・投稿可能・知財・終了後アクセス・原則8月31日終了を満たす一社が確定",
    stop: "NTTを含め条件を満たすテーマがなければ、企業名にこだわらず中止",
  },
  {
    time: "2029.08.31",
    title: "D3企業活動の終了",
    go: "主要結果・再現コード・図表・原稿60〜80%を凍結し、以後は投稿作業だけ",
    stop: "追加実験や現地作業が残る場合は既存結果で打ち切り、博士論文を優先",
  },
  {
    time: "2029.10",
    title: "予備審査願",
    go: "博士論文以外の大型活動を全面停止",
    stop: "新規インターン・山小屋・アルバイトは入れない",
  },
];

export const riskRows = [
  ["企業研究が論文にならない", "出発1か月前にベースライン未完成、または公開条件が未確定", "別テーマ・別企業または短期訪問へ"],
  ["倫理審査が間に合わない", "出発8週間前に未申請", "利用範囲を倫理担当へ再確認"],
  ["D2が過密", "企業論文未投稿、または企業終了から海外開始まで8週未満", "海外大学研究を延期・短縮"],
  ["D3学位が遅れる", "5月31日に主要実験・初稿70〜80%・主要投稿が不足", "D3企業研究を中止"],
  ["資金不足", "生活防衛資金3か月未満", "寮継続・車中止・契約延期"],
  ["睡眠悪化", "平均7時間未満が2週間", "バイトと任意活動を停止"],
  ["孤立", "研究室外の対面交流が月1回未満", "定期コミュニティを予定化"],
  ["D3企業の残務が続く", "8月31日に追加実験・現地作業が残る", "既存結果で凍結し、投稿と博士論文だけにする"],
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
  ["2027 D1企業後", "3〜5日＋投稿期間6〜8週間"],
  ["毎年12月末", "3〜5日の完全休養"],
  ["2028 D2企業後", "3〜5日＋海外開始まで最低8週間"],
  ["2029.01", "海外大学研究後1週間"],
  ["2029.07", "骨子提出後2〜3日"],
  ["2029.08.31", "D3企業終了後3〜5日、以後は投稿作業だけ"],
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
        label: "博士後期課程・インターンシップの単位化",
        href: "https://www.jaist.ac.jp/careersupport/doctor/",
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
        label: "ジョブ型研究インターンシップ FAQ",
        href: "https://coopj-intern.com/faq",
      },
      {
        label: "ジョブ型研究インターンシップ 参加機関",
        href: "https://coopj-intern.com/membership",
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
        label: "NTT R&D 2026年度夏期募集要項",
        href: "https://www.ntt-labs.jp/saiyo/internship/recruitment2/",
        note: "D3夏候補の参考実績。2029年度の期間・テーマ・論文条件は未確定",
      },
      {
        label: "NTT R&D 2026年度夏期テーマ",
        href: "https://www.ntt-labs.jp/saiyo/internship/theme2/",
        note: "確認できるテーマは2〜4週未満または4〜6週未満。2029年度に新たな6〜8週テーマが出る場合だけD3候補にする",
      },
      {
        label: "NTT R&D 2025年度冬期募集要項",
        href: "https://www.ntt-labs.jp/saiyo/internship/recruitment1/",
        note: "2〜3週間の過去実績。新しいD3夏の本計画には直接用いない",
      },
      {
        label: "NTT R&D 2025年度冬期テーマ",
        href: "https://www.ntt-labs.jp/saiyo/internship/theme1/",
      },
      {
        label: "OMRON SINIC X Internship",
        href: "https://www.omron.com/sinicx/internship/",
      },
      {
        label: "NEC 研究インターンシップ",
        href: "https://jpn.nec.com/rd/rdcareer/internship/guideline/",
      },
      {
        label: "Honda Research Institute Japan",
        href: "https://www.jp.honda-ri.com/recruit/",
      },
      {
        label: "Sony 長期有給インターンシップ",
        href: "https://www.sony.com/ja/SonyInfo/Jobs/sgc-recruit/newgrads/internship/master-doctor-internship/",
      },
      {
        label: "日立 博士向けインターンシップ",
        href: "https://www.hitachi.co.jp/recruit/doctor/",
      },
      {
        label: "Preferred Networks Internship",
        href: "https://www.preferred.jp/ja/careers/internship",
      },
      {
        label: "Woven by Toyota Internship",
        href: "https://woven.toyota/en/careers/internship/",
      },
      {
        label: "豊田中央研究所 研究職インターン",
        href: "https://www.tytlabs.co.jp/recruit/recruit/05_requirements.html",
        note: "2026年度は平日10日間。2027年度の日程・テーマは再確認",
      },
      {
        label: "豊田中央研究所 2026年度テーマ一覧",
        href: "https://www.tytlabs.co.jp/recruit/images/internship/intern_theme.pdf",
      },
      {
        label: "アイシン 夏季インターン",
        href: "https://www.aisin.com/jp/recruit/summerinternship/",
        note: "2026年度は10日間。論文型ではなく短期探索として扱う",
      },
      {
        label: "KDDI総合研究所 インターンシップ",
        href: "https://www.kddi-research.jp/internship.html",
      },
      {
        label: "シャープ インターンテーマ",
        href: "https://corporate.jp.sharp/recruit/newgraduate/internship/theme.html",
      },
      {
        label: "Panasonic OJTインターン",
        href: "https://recruit.jpn.panasonic.com/internship/courses/ojt/",
      },
      {
        label: "東芝 インターンシップ",
        href: "https://www.global.toshiba/jp/recruit/corporate/internship.html",
      },
      {
        label: "IBM Research Tokyo · AI",
        href: "https://research.ibm.com/projects/ai-in-tokyo",
      },
      {
        label: "IBM Japan · Internship",
        href: "https://www.ibm.com/jp-ja/careers/internships",
      },
      {
        label: "DENSO IT Laboratory · Recruit",
        href: "https://d-itlab.co.jp/recruit/",
        note: "標準的な学生インターン公募は未確認。個別打診候補",
      },
      {
        label: "DENSO IT Laboratory · Research",
        href: "https://d-itlab.co.jp/research/",
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
      {
        label: "MERL Internship Openings",
        href: "https://www.merl.com/employment/internship-openings.php?ai=on#SA0191",
        note: "海外大学研究への追加ではなく、D2夏企業枠との置換候補",
      },
      {
        label: "Honda Research Institute USA · Intern Positions",
        href: "https://usa.honda-ri.com/intern-positions",
      },
      {
        label: "HRI-USA · Affective Computing",
        href: "https://usa.honda-ri.com/-/research-intern-affective-computing-for-collective-intelligence",
      },
      {
        label: "HRI-USA · Human-AI Group Interaction",
        href: "https://usa.honda-ri.com/-/research-intern-human-ai-group-interaction",
      },
      {
        label: "Toyota Research Institute · Open Roles",
        href: "https://jobs.lever.co/tri",
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
