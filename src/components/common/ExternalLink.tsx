import type { AnchorHTMLAttributes, ReactNode } from "react";
import { joinClassNames } from "./utils";

export interface ExternalLinkProps
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "children" | "target"
  > {
  href: string;
  children: ReactNode;
  newWindowText?: string;
  showIcon?: boolean;
}

/**
 * External link with both a visible icon and explicit screen-reader text.
 * The accessible name always communicates that a new tab will be opened.
 */
export function ExternalLink({
  href,
  children,
  className,
  newWindowText = "新しいタブで開きます",
  showIcon = true,
  rel,
  ...props
}: ExternalLinkProps) {
  const safeRel = [...new Set(`${rel ?? ""} noopener noreferrer`.trim().split(/\s+/))]
    .join(" ");

  return (
    <a
      className={joinClassNames("rm-external-link", className)}
      href={href}
      target="_blank"
      rel={safeRel}
      {...props}
    >
      <span className="rm-external-link__label">{children}</span>
      {showIcon ? (
        <svg
          className="rm-external-link__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M14 5h5v5M19 5l-8 8M18 13v6H5V6h6" />
        </svg>
      ) : null}
      <span className="rm-visually-hidden">（{newWindowText}）</span>
    </a>
  );
}
