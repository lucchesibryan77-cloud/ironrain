import type { Metadata } from "next";
import Link from "next/link";
import { cases, clients } from "@/lib/cases";
import { ArrowLink, Label } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description:
    "Documented outcomes for New Mexico small businesses: ransomware contained, CMMC readiness achieved, phishing rates measurably reduced, and platforms rebuilt.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <h1 className="display max-w-4xl text-4xl md:text-6xl">Receipts, not promises.</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-paper/75">
            Every engagement below is documented with the client&apos;s permission and anonymized
            where their exposure requires it. References available under NDA.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="border-t border-line">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="group grid grid-cols-1 gap-4 border-b border-line py-10 transition-colors hover:bg-paper-2/70 md:grid-cols-[200px_1.4fr_1fr] md:gap-10"
              >
                <div>
                  <Label className="text-mute">{c.year}</Label>
                  <p className="mt-2 font-serif text-3xl font-semibold text-signal-deep">{c.outcomes[0].value}</p>
                  <p className="figcaption mt-1 text-[10px] text-mute">{c.outcomes[0].label}</p>
                </div>
                <div>
                  <Label className="text-signal-deep">{c.client} — {c.industry}</Label>
                  <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal md:text-3xl">
                    {c.headline}
                  </h2>
                </div>
                <p className="text-sm leading-7 text-ink/65">{c.summary}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">Selected client roster</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-ink/70">{clients.join(" · ")}</p>
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
