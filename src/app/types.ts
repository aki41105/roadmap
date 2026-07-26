import type { ComponentType } from "react";

export type RouteId =
  | "overview"
  | "research"
  | "research-stays"
  | "internships"
  | "career"
  | "finance-life"
  | "wellbeing"
  | "timeline"
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

