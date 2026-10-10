import Link from "next/link";
import { ReactNode } from "react";

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`kicker ${className}`}>{children}</p>;
}

export function SectionHead({
  index,
  label,
  title,
  dark = false,
  className = "",
}: {
  index?: string;
  label: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 max-w-3xl md:mb-16 ${className}`}>
      <Kicker className={dark ? "text-signal" : "text-signal-deep"}>
        {index ? `${index} / ` : ""}
        {label}
      </Kicker>
      <h2
        className={`display mt-4 text-4xl uppercase md:text-6xl ${dark ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
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
      className={`kicker group inline-flex items-center gap-2 underline decoration-signal underline-offset-8 transition-colors hover:text-signal ${
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
  variant?: "primary" | "ghost-dark" | "ghost-light";
  className?: string;
}) {
  const styles = {
    primary:
      "border border-signal bg-signal text-white hover:bg-signal-deep hover:border-signal-deep",
    "ghost-dark": "border border-line-dark text-paper hover:border-signal hover:text-signal",
    "ghost-light": "border border-ink text-ink hover:bg-ink hover:text-paper",
  }[variant];
  return (
    <Link href={href} className={`kicker inline-block px-5 py-3.5 transition-colors ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Stat({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className="px-5 py-8 md:px-8 md:py-10">
      <p className={`display text-4xl md:text-5xl ${dark ? "text-paper" : "text-ink"}`}>{value}</p>
      <p className={`kicker mt-3 ${dark ? "text-mute-dark" : "text-mute"}`}>{label}</p>
    </div>
  );
}
