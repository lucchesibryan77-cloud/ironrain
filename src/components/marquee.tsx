import { clients } from "@/lib/cases";

export function ClientWall() {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Selected clients" className="overflow-hidden border-y border-line bg-paper-2 py-8">
      <div className="mx-auto mb-6 max-w-7xl px-5 md:px-10">
        <p className="kicker text-mute">Trusted by New Mexico operators —</p>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-xl font-extrabold uppercase tracking-tight text-ink/35 transition-colors hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-2 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-2 to-transparent" />
      </div>
    </section>
  );
}
