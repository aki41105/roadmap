import { degreeRequirements, supportPrograms } from "../data";
import { degreeDeadlineEvents } from "./events";

export const degreePlan = {
  id: "jaist-doctoral-degree-plan",
  title: "2030年3月の博士修了",
  status: "予定" as const,
  certainty: "本人計画" as const,
  requirements: degreeRequirements,
  milestones: degreeDeadlineEvents,
  supportPrograms,
  caveat:
    "修了要件・学位日程・提出締切は、実施年度の履修案内、研究領域の案内、教務通知、担当窓口で更新する。",
  sourceIds: [
    "personal-integrated-plan",
    "jaist-degree-guide",
    "jaist-course-guide-2026",
    "jaist-doctoral-schedule",
    "jaist-minor-internship",
  ],
};
