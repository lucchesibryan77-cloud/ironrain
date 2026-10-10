import Link from "next/link";

/** Sun-over-mesa mark — crisp geometry, no illustration. */
export function LogoMark({ className = "h-8 w-8", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 7a7 7 0 0 1 7 7H9a7 7 0 0 1 7-7Z" className="fill-signal" />
      <rect x="5" y="17" width="22" height="2.4" className={light ? "fill-paper" : "fill-dusk"} />
      <rect x="9" y="22" width="14" height="2.4" className={light ? "fill-paper" : "fill-dusk"} opacity="0.55" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Iron Rain SecOps Solutions — home">
      <LogoMark light={dark} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl font-semibold tracking-tight ${dark ? "text-paper" : "text-ink"}`}>
          Iron Rain
        </span>
        <span
          className={`figcaption mt-1 text-[9px] ${dark ? "text-mute-dark" : "text-mute"} group-hover:text-signal transition-colors`}
        >
          SecOps Solutions
        </span>
      </span>
    </Link>
  );
}
