import { lifeCards } from "../data";
import { normalizedRecoveryWindows } from "./decisions";
import type { EventCategory, Priority, RoadmapStatus } from "./types";

type LifeNormalization = {
  id: string;
  category: EventCategory;
  priority: Priority;
  status: RoadmapStatus;
};

const lifeNormalization: Record<string, LifeNormalization> = {
  住居: {
    id: "housing",
    category: "資金・生活",
    priority: "中",
    status: "予定",
  },
  車: {
    id: "car",
    category: "資金・生活",
    priority: "低",
    status: "候補",
  },
  "山小屋・バイト": {
    id: "part-time-and-mountain-hut",
    category: "資金・生活",
    priority: "低",
    status: "候補",
  },
  "恋愛・人間関係": {
    id: "relationships",
    category: "健康・人間関係",
    priority: "高",
    status: "予定",
  },
  健康: {
    id: "health",
    category: "健康・人間関係",
    priority: "最優先",
    status: "予定",
  },
};

export const lifeAndWellbeingAreas = lifeCards.map((card) => {
  const normalized = lifeNormalization[card.label];

  return {
    id: normalized.id,
    label: card.label,
    title: card.title,
    summary: card.text,
    rule: card.rule,
    category: normalized.category,
    priority: normalized.priority,
    status: normalized.status,
    certainty: "本人計画" as const,
    sourceIds: ["personal-integrated-plan"],
  };
});

export const wellbeingAreas = lifeAndWellbeingAreas.filter(
  (area) => area.category === "健康・人間関係",
);

export const financeAndLifeAreas = lifeAndWellbeingAreas.filter(
  (area) => area.category === "資金・生活",
);

export const recoveryWindows = normalizedRecoveryWindows;

export const healthEscalationRule = {
  signal: "睡眠・食欲・研究室回避の悪化が2週間続く",
  response: "アルバイトを止め、学内の相談先へ早めに連絡する",
  status: "要確認" as const,
  priority: "最優先" as const,
  sourceIds: ["personal-integrated-plan", "jaist-healthcare"],
};
