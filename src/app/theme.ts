export type Theme = "light" | "dark";

export const themeStorageKey = "roadmap-theme";

export function systemTheme(): Theme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export function storedTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(themeStorageKey);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function currentTheme(): Theme {
  if (typeof document !== "undefined") {
    const value = document.documentElement.dataset.theme;
    if (value === "light" || value === "dark") {
      return value;
    }
  }
  return storedTheme() ?? systemTheme();
}

export function applyTheme(theme: Theme, persist = true): void {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#171915" : "#f3efe6");
  }

  if (persist && typeof window !== "undefined") {
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Storage can be disabled. The visible theme still changes for this page.
    }
  }
}
