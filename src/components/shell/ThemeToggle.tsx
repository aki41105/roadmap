import { useEffect, useState } from "react";
import {
  applyTheme,
  currentTheme,
  storedTheme,
  systemTheme,
  type Theme,
} from "../../app/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initial = currentTheme();
    setTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (storedTheme() !== null) {
        return;
      }
      const next = systemTheme();
      applyTheme(next, false);
      setTheme(next);
    };

    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  const toggle = () => {
    const next = (theme ?? currentTheme()) === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  const currentLabel =
    theme === "dark" ? "ダーク" : theme === "light" ? "ライト" : "表示";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`${currentLabel}テーマ。表示テーマを切り替える`}
      aria-pressed={theme === "dark"}
      title="ライト／ダークテーマを切り替える"
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className="theme-toggle__label">{currentLabel}</span>
    </button>
  );
}
