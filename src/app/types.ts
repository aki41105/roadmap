import type { ComponentType } from "react";

export type RouteId =
  | "overview"
  | "timeline"
  | "internships"
  | "overseas"
  | "domestic"
  | "research"
  | "research-stays"
  | "internship-details"
  | "career"
  | "finance-life"
  | "wellbeing"
  | "decisions";

export interface TocItem {
  id: string;
  label: string;
}

export interface PageContent {
  title: string;
  description: string;
  eyebrow?: string;
  updatedAt?: string;
  toc?: readonly TocItem[];
  Component: ComponentType;
}
