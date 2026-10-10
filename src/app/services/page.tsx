import type { Metadata } from "next";
import Link from "next/link";
import { services, products } from "@/lib/services";
import { SectionHead, ArrowLink, Label } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed IT, 24/7 security operations, NIST/HIPAA/CMMC compliance programs, and web development — plus fixed-price productized packages with real numbers on the page.",
};

const faqs = [
  {
    q: "How fast do you actually respond?",
    a: "Helpdesk tickets get a human response inside 15 minutes during business hours. Clients under a RainWatch or StormCell agreement get a 1-hour remote response commitment on security incidents, 24/7/365 — and our trailing-90-day median is under 15 minutes.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "Managed agreements run 12 months with a 60-day out clause — if we miss SLAs, you can leave. Assessments and web projects are fixed-fee, fixed-scope, no meter running.",
  },
  {
    q: "We already have an IT person. Does that work?",
    a: "That's about a third of our engagements. We cover the 24/7 watch floor, escalations, security, and projects, and your internal person keeps the day-to-day and the institutional knowledge. It works well when roles are written down — we write them down.",
  },
  {
    q: "What if we have to leave you?",
    a: "You take everything: documentation, diagrams, credentials, runbooks, and evidence binders. It's written in your name from day one. Offboarding is a two-page runbook we hand over, not a hostage negotiation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <h1 className="display max-w-4xl text-4xl md:text-6xl">Four practices. One accountable team.</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-paper/75">
            Everything we do rolls up to one promise: your business keeps running. Each practice has a
            defined scope, a named lead, and reporting you can hold us to.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead title="The work" note="Every practice, scoped in plain English with the artifacts you'll own at the end." />
          <div className="border-t border-line">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid grid-cols-1 gap-4 border-b border-line py-10 transition-colors hover:bg-paper-2/70 md:grid-cols-[1fr_1.4fr_auto] md:gap-10"
              >
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal">
                  {s.name}
                </h2>
                <div>
                  <p className="max-w-2xl text-[15px] leading-7 text-ink/70">{s.short}</p>
                  <p className="figcaption mt-4 text-[10px] text-mute">
                    {s.included[0]} · plus {s.included.length - 1} more line items
                  </p>
                </div>
                <span className="text-sm font-semibold text-signal-deep md:self-start md:pt-1">
                  Details <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="Fixed-scope packages"
            note="Three productized services with the price printed. Scoped in a week, delivered on a schedule."
          />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.code} className="flex flex-col bg-paper">
                <div className="border-b border-line px-7 py-4">
                  <Label className="text-signal-deep">{p.kind}</Label>
                </div>
                <div className="flex-1 px-7 py-8">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 font-mono text-sm font-semibold text-signal-deep">{p.price}</p>
                  <p className="mt-5 text-sm leading-7 text-ink/70">{p.blurb}</p>
                </div>
                <div className="border-t border-line px-7 py-5">
                  <ArrowLink href="/contact">Get this scoped</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead title="Asked before signing" />
          <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-line py-8">
                <h3 className="font-serif text-xl font-semibold tracking-tight">{f.q}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-ink/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
