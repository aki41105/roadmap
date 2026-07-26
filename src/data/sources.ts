import { sourceGroups } from "../data";
import type { ChangeLikelihood, SourceKind, SourceRecord } from "./types";

export const SOURCE_VERIFIED_AT = "2026-07-26";

const knownSourceIds: Record<string, string> = {
  "https://www.jaist.ac.jp/education/courses/guide.html": "jaist-degree-guide",
  "https://www.jaist.ac.jp/education/data/risyu-annai_2026.pdf": "jaist-course-guide-2026",
  "https://www.jaist.ac.jp/education/publish/d-schedule.html": "jaist-doctoral-schedule",
  "https://www.jaist.ac.jp/education/courses/minor.html": "jaist-minor-internship",
  "https://www.jaist.ac.jp/careersupport/doctor/": "jaist-doctoral-internship",
  "https://www.jaist.ac.jp/studentlife/support/grant.html": "jaist-research-grants",
  "https://www.jaist.ac.jp/studentlife/data/off-campus_research_youkou_J.pdf":
    "jaist-research-stay-rules",
  "https://www.jaist.ac.jp/studentlife/support/scholarships.html": "jaist-scholarships",
  "https://www.jaist.ac.jp/international/abroad/": "jaist-study-abroad",
  "https://www.jaist.ac.jp/jisedai/": "jaist-spring",
  "https://www.jsps.go.jp/j-pd/pd_tebiki.html": "jsps-dc-guide",
  "https://www.jsps.go.jp/j-grantsinaid/20_tokushourei/index.html": "jsps-research-grant",
  "https://www.jsps.go.jp/j-pd/pd_user-haken.html": "jsps-erc-travel",
  "https://www.jsps.go.jp/j-ab/ab_gaiyo2.html": "jsps-overseas-fellowship-reservation",
  "https://www.jsps.go.jp/j-abc/": "jsps-overseas-challenge-closed",
  "https://www.jst.go.jp/jisedai/spring/": "jst-spring",
  "https://coopj-intern.com/faq": "job-internship-faq",
  "https://www.jasso.go.jp/ryugaku/study_a/index.html": "jasso-study-abroad",
  "https://www.nii.ac.jp/research/kenkyou/tokubetsukenkyuin/": "nii-special-researcher",
  "https://www.nii.ac.jp/en/faculty/society/bono_mayumi/": "nii-bono-profile",
  "https://research.nii.ac.jp/~bono/en/aboutus/internship.html": "nii-bono-internship",
  "https://www.robot.soc.i.kyoto-u.ac.jp/en/": "kyoto-hri",
  "https://grp.riken.jp/": "riken-guardian-robot",
  "https://www.atr.jp/": "atr",
  "https://www.aist.go.jp/aist_j/business/alliance/gijutsukenshu/index.html":
    "aist-technical-training",
  "https://www.ftl.iit.tsukuba.ac.jp/en/": "tsukuba-tanaka-lab",
  "https://eng.irl.sys.es.osaka-u.ac.jp/": "osaka-ishiguro-lab",
  "https://showcase.kgri.keio.ac.jp/en/researcher/?researcher_id=eeaa06d87ba911ff45082f4726df67ec":
    "keio-imai-lab",
  "https://www.cyberagent.co.jp/news/detail/id%3D33182": "cyberagent-internship-2026",
  "https://www.hitachi.co.jp/recruit/doctor/": "hitachi-doctoral-internship",
  "https://www.omron.com/sinicx/internship/": "omron-sinicx-internship",
  "https://jpn.nec.com/rd/rdcareer/internship/guideline/": "nec-research-internship",
  "https://www.ntt-labs.jp/saiyo/internship/recruitment2/": "ntt-summer-recruitment-2026",
  "https://www.ntt-labs.jp/saiyo/internship/theme2/": "ntt-summer-themes-2026",
  "https://www.sony.com/ja/SonyInfo/Jobs/sgc-recruit/newgrads/internship/master-doctor-internship/":
    "sony-doctoral-internship",
  "https://woven.toyota/en/careers/internship/": "woven-internship",
  "https://www.tytlabs.co.jp/recruit/recruit/05_requirements.html":
    "toyota-central-rd-internship",
  "https://www.aisin.com/jp/recruit/summerinternship/": "aisin-internship",
  "https://www.kddi-research.jp/internship.html": "kddi-research-internship",
  "https://research.ibm.com/projects/ai-in-tokyo": "ibm-research-tokyo",
  "https://d-itlab.co.jp/recruit/": "denso-itlab-recruit",
  "https://uwaterloo.ca/current-graduate-students/international-visiting-graduate-students":
    "waterloo-visiting-graduate",
  "https://uwaterloo.ca/social-intelligent-robotics-research-lab/research-themes":
    "waterloo-sirrl",
  "https://www.hw.ac.uk/research-enterprise/global/driving-ai-and-robotics/the-national-robotarium/human-robot-interaction-hri":
    "heriot-watt-national-robotarium",
  "https://airo.ugent.be/": "ghent-airo",
  "https://ict.usc.edu/research/": "usc-ict",
  "https://global.ubc.ca/visiting-international-research-students": "ubc-visiting-research",
  "https://www.merl.com/employment/internship-openings.php?ai=on#SA0191":
    "merl-internship",
  "https://usa.honda-ri.com/intern-positions": "hri-usa-internship",
  "https://jobs.lever.co/tri": "tri-open-roles",
  "https://note.com/riko200702/n/n9c41f7b0ac4a": "reference-note-doctoral-life",
  "https://www.jaist.ac.jp/studentlife/institution/": "jaist-housing",
  "https://www.jaist.ac.jp/studentlife/institution/carsharing.html": "jaist-carsharing",
  "https://www.jaist.ac.jp/studentlife/institution/healthcare.html": "jaist-healthcare",
};

function sourceYear(label: string, note?: string): number | "年次記載なし" {
  const match = `${label} ${note ?? ""}`.match(/\b(20\d{2})\b/);
  return match ? Number(match[1]) : "年次記載なし";
}

function sourceKind(url: string): SourceKind {
  return url.includes("note.com/") ? "個人" : "公式";
}

function changeLikelihood(group: string, label: string): ChangeLikelihood {
  if (
    /インターン|募集|支援|助成|奨学|手引|履修案内|FAQ|Open Roles/i.test(label)
  ) {
    return "高";
  }
  if (group === "JAIST・学位" || group === "資金・キャリア") {
    return "中";
  }
  if (group === "参考・生活" && label.includes("参考note")) {
    return "低";
  }
  return "中";
}

const officialAndReferenceSources: SourceRecord[] = sourceGroups.flatMap(
  (group, groupIndex) =>
    group.links.map((link, linkIndex) => ({
      id:
        knownSourceIds[link.href] ??
        `source-${String(groupIndex + 1).padStart(2, "0")}-${String(linkIndex + 1).padStart(2, "0")}`,
      name: link.label,
      title: link.label,
      kind: sourceKind(link.href),
      year: sourceYear(link.label, link.note),
      verifiedAt: SOURCE_VERIFIED_AT,
      url: link.href,
      changeLikelihood: changeLikelihood(group.title, link.label),
      group: group.title,
      note: link.note,
    })),
);

const internalSources: SourceRecord[] = [
  {
    id: "personal-integrated-plan",
    name: "博士修了までの統合計画",
    title: "博士修了までの統合計画",
    kind: "個人",
    year: 2026,
    verifiedAt: SOURCE_VERIFIED_AT,
    changeLikelihood: "高",
    group: "本人計画",
    note:
      "2026年7月から2030年3月までの本人の希望・内部目標。制度上の確定事項ではなく、月末・四半期レビューで更新する。",
  },
  {
    id: "roadmap-planning-proposal",
    name: "ロードマップの提案・判断基準",
    title: "ロードマップの提案・判断基準",
    kind: "提案",
    year: 2026,
    verifiedAt: SOURCE_VERIFIED_AT,
    changeLikelihood: "高",
    group: "計画上の提案",
    note:
      "活動の配置、GO/調整条件、候補順位、6〜8週間の設計など。受入先や大学の公式決定ではない。",
  },
  {
    id: "roadmap-cost-estimates",
    name: "生活費・滞在費の計画用試算",
    title: "生活費・滞在費の計画用試算",
    kind: "提案",
    year: 2026,
    verifiedAt: SOURCE_VERIFIED_AT,
    changeLikelihood: "高",
    group: "計画上の試算",
    note:
      "契約前に実収入、物価、為替、助成、住居条件で更新する概算。支給額や実費の確約ではない。",
  },
];

export const sources: SourceRecord[] = [
  ...internalSources,
  ...officialAndReferenceSources,
];

export const sourceById: Record<string, SourceRecord> = Object.fromEntries(
  sources.map((source) => [source.id, source]),
);

const sourceIdByUrlMap: Record<string, string> = Object.fromEntries(
  sources
    .filter((source): source is SourceRecord & { url: string } => Boolean(source.url))
    .map((source) => [source.url, source.id]),
);

export function sourceIdForUrl(url: string): string | undefined {
  return sourceIdByUrlMap[url];
}

export function sourceIdsForUrls(urls: string[]): string[] {
  return urls
    .map((url) => sourceIdForUrl(url))
    .filter((id): id is string => Boolean(id));
}
