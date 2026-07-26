import type { HTMLAttributes } from "react";
import { joinClassNames } from "./utils";

export interface MoneyProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  value: number | string;
  currency?: string;
  locale?: string;
  unit?: string;
  period?: string;
  approximate?: boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function Money({
  value,
  currency = "JPY",
  locale = "ja-JP",
  unit,
  period,
  approximate = false,
  minimumFractionDigits,
  maximumFractionDigits,
  className,
  ...props
}: MoneyProps) {
  const formatted =
    typeof value === "number"
      ? new Intl.NumberFormat(locale, {
          style: "currency",
          currency,
          minimumFractionDigits:
            minimumFractionDigits ?? (currency === "JPY" ? 0 : undefined),
          maximumFractionDigits:
            maximumFractionDigits ?? (currency === "JPY" ? 0 : undefined),
        }).format(value)
      : value;

  return (
    <span className={joinClassNames("rm-money", className)} {...props}>
      {approximate ? (
        <>
          <span aria-hidden="true">約</span>
          <span className="rm-visually-hidden">概算 </span>
        </>
      ) : null}
      <span className="rm-money__value">{formatted}</span>
      {unit ? <span className="rm-money__unit">{unit}</span> : null}
      {period ? <span className="rm-money__period">／{period}</span> : null}
    </span>
  );
}
