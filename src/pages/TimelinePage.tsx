import { SimpleDoctoralTimeline } from "../components/schedule/SimpleDoctoralTimeline";
import { Section } from "./PageKit";

export function TimelinePage() {
  return (
    <>
      <SimpleDoctoralTimeline />

      <Section
        id="details"
        eyebrow="DETAIL PAGES"
        title="必要なときだけ詳しく見る"
        intro="候補先、制度、資金、判断条件は、それぞれの専用ページに分けています。"
      >
        <nav className="rm-section-switcher" aria-label="詳しい計画">
          <a href="/roadmap/internships/">企業インターン</a>
          <a href="/roadmap/research-stays/">国内・海外研究滞在</a>
          <a href="/roadmap/research/">研究・学位</a>
          <a href="/roadmap/decisions/">判断・リスク</a>
        </nav>
        <p className="rm-timeline-note">
          学位日程は2030年3月修了を想定した標準モデルです。正式日は実施年度に確認します。
        </p>
      </Section>
    </>
  );
}
