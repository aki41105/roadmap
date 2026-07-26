import type { ReactNode } from "react";

export function joinClassNames(
  ...classNames: Array<string | false | null | undefined>
) {
  return classNames.filter(Boolean).join(" ");
}

export function renderOptional(value: ReactNode, fallback = "—") {
  return value === null || value === undefined || value === "" ? fallback : value;
}
