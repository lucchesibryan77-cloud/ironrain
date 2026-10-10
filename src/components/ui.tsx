import Link from "next/link";
import { ReactNode } from "react";

/**
 * Small meta label — for datelines, file references, record rows.
 * Never sits above a heading (headings carry their own weight).
 */
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`figcaption ${className}`}>{children}</p>;
}

export function SectionHead({
  title,
  note,
  dark = false,
  className = "",
}: {
  title: string;
  note?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-12 flex flex-col gap-6 border-b pb-8 md:mb-16 md:flex-row md:items-end md:justify-between ${
        dark ? "border-line-dark" : "border-line"
      } ${className}`}
    >
      <h2 className={`display max-w-2xl text-4xl md:text-5xl ${dark ? "text-paper" : "text-ink"}`}>{title}</h2>
      {note && <p className={`max-w-sm text-sm leading-6 ${dark ? "text-mute-dark" : "text-mute"}`}>{note}</p>}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  dark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal ${
        dark ? "text-paper" : "text-ink"
      } ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light" | "ink";
  className?: string;
}) {
  const styles = {
    primary:
      "border border-signal-deep bg-signal-deep text-[#fff6ec] hover:bg-signal hover:border-signal",
    ink: "border border-ink bg-ink text-paper hover:bg-dusk hover:border-dusk",
    "ghost-dark": "border border-paper/40 text-paper hover:bg-paper hover:text-ink",
    "ghost-light": "border border-ink/50 text-ink hover:bg-ink hover:text-paper",
  }[variant];
  return (
    <Link
      href={href}
      className={`figcaption inline-block px-6 py-4 text-[11px] transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
