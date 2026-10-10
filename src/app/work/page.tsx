import type { Metadata } from "next";
import Link from "next/link";
import { cases, clients } from "@/lib/cases";
import { ArrowLink, Kicker } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description:
    "Documented outcomes for New Mexico small businesses: ransomware contained, CMMC readiness achieved, phishing rates measurably reduced, and platforms rebuilt.",
};

export default function WorkPage() {
  return (
    <>
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">Case studies</Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl uppercase text-paper md:text-7xl">
            Receipts, not promises.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/70">
            Every engagement below is documented with the client&apos;s permission and anonymized
            where their exposure requires it. References available under NDA.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="space-y-px border border-line bg-line">
            {cases.map((c, i) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="group grid grid-cols-1 gap-6 bg-paper px-6 py-10 transition-colors hover:bg-paper-2 md:grid-cols-[100px_1fr_1fr_200px] md:items-center md:px-10"
              >
                <span className="font-mono text-sm text-mute">{String(i + 1).padStart(2, "0")} / {c.year}</span>
                <div>
                  <Kicker className="text-mute">{c.client} — {c.industry}</Kicker>
                  <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal md:text-3xl">
                    {c.headline}
                  </h2>
                </div>
                <p className="text-sm leading-6 text-mute">{c.summary}</p>
                <div>
                  <p className="display text-3xl text-signal">{c.outcomes[0].value}</p>
                  <p className="kicker mt-2 text-mute">{c.outcomes[0].label}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 border-t border-line pt-10">
            <p className="kicker text-mute">Selected client roster</p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-mute">{clients.join(" · ")}</p>
            <div className="mt-8">
              <ArrowLink href="/contact">Become case study number five</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
