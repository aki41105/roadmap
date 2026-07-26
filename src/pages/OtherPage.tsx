import { Lead, Section } from "./PageKit";

export function OtherPage() {
  return (
    <>
      <Lead>
        研究・学位、暮らし、健康、判断資料は、必要になったときだけここから確認できます。
      </Lead>

      <Section id="topics" title="必要な項目を選ぶ">
        <nav className="rm-section-switcher" aria-label="その他の計画">
          <a href="/roadmap/research/">研究・学位</a>
          <a href="/roadmap/finance-life/">お金・住居・車</a>
          <a href="/roadmap/wellbeing/">生活・健康・人間関係</a>
          <a href="/roadmap/decisions/">判断・資料</a>
        </nav>
      </Section>
    </>
  );
}
