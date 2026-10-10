import { site } from "@/lib/site";

const rows = [
  { k: "ENDPOINTS UNDER WATCH", v: "3,412" },
  { k: "MEDIAN IR RESPONSE", v: "14m 52s" },
  { k: "CLIENT UPTIME / 12MO", v: "99.98%" },
  { k: "PHISHING SIM CLICK RATE", v: "1.8%" },
];

const bars = [42, 58, 37, 64, 49, 71, 55, 78, 62, 84, 73, 91];

export function OpsPanel() {
  return (
    <div className="border border-line-dark bg-panel">
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3">
        <p className="kicker text-mute-dark">RainWatch SOC — Live Posture</p>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" />
          <span className="kicker text-emerald-400">Operational</span>
        </span>
      </div>
      <dl className="divide-y divide-line-dark">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between px-5 py-3.5">
            <dt className="kicker text-mute-dark">{r.k}</dt>
            <dd className="font-mono text-sm text-paper">{r.v}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-line-dark px-5 py-4">
        <p className="kicker mb-3 text-mute-dark">Threats contained / trailing 12 wks</p>
        <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 ${i === bars.length - 1 ? "bg-signal" : "bg-line-dark"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="border-t border-line-dark px-5 py-3">
        <p className="kicker text-mute-dark">
          Client line <span className="text-signal">{site.hotline}</span> — answered 24/7
        </p>
      </div>
    </div>
  );
}
