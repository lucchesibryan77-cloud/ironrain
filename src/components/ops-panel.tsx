import { site } from "@/lib/site";

const rows = [
  { k: "Endpoints under 24/7 watch", v: "3,412" },
  { k: "Median incident response", v: "14 min 52 sec" },
  { k: "Client uptime, trailing 12 months", v: "99.98%" },
  { k: "Ransom paid by clients, ever", v: "$0" },
];

/** The "Operating Record" — proof presented like a filed document. */
export function OpsPanel() {
  return (
    <div className="border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <p className="figcaption text-mute">Operating record — Q3 2026</p>
        <p className="figcaption text-signal-deep">On file</p>
      </div>

      {/* sun-over-mesa mark — geometry only */}
      <div className="border-b border-line px-5 py-6">
        <svg viewBox="0 0 260 70" className="h-14 w-full" aria-hidden="true">
          <path d="M130 12a26 26 0 0 1 26 26H104a26 26 0 0 1 26-26Z" className="fill-signal" />
          <rect x="10" y="42" width="240" height="2" className="fill-dusk" />
          <rect x="34" y="50" width="192" height="2" className="fill-dusk" opacity="0.5" />
          <rect x="70" y="58" width="120" height="2" className="fill-dusk" opacity="0.25" />
        </svg>
      </div>

      <dl className="divide-y divide-line">
        {rows.map((r) => (
          <div key={r.k} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
            <dt className="text-sm text-ink/75">{r.k}</dt>
            <dd className="font-mono text-sm font-semibold text-ink">{r.v}</dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line px-5 py-3.5">
        <p className="text-xs leading-5 text-mute">
          Client line <span className="font-semibold text-signal-deep">{site.hotline}</span> — answered
          24/7. Figures reviewed monthly by the operations lead.
        </p>
      </div>
    </div>
  );
}
