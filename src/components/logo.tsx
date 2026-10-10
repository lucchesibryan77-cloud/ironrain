import Link from "next/link";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" className="fill-ink" />
      {/* rain streaks falling into a line */}
      <g className="stroke-paper" strokeWidth="2.4" strokeLinecap="square">
        <line x1="9" y1="7" x2="7" y2="15" />
        <line x1="16" y1="5" x2="14" y2="17" />
        <line x1="23" y1="7" x2="21" y2="15" />
      </g>
      <line x1="6" y1="24" x2="26" y2="24" className="stroke-signal" strokeWidth="2.8" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Iron Rain SecOps Solutions — home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans text-[15px] font-extrabold tracking-tight uppercase ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          Iron<span className="text-signal">/</span>Rain
        </span>
        <span className="kicker mt-1 text-[9px] text-mute-dark group-hover:text-signal transition-colors">
          SecOps Solutions
        </span>
      </span>
    </Link>
  );
}
