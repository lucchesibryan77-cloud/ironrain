import type { Metadata } from "next";
import Link from "next/link";
import { services, products } from "@/lib/services";
import { SectionHead, ArrowLink, Kicker } from "@/components/ui";
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
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">Services &amp; packages</Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl uppercase text-paper md:text-7xl">
            Four practices. One accountable team.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/70">
            Everything we do rolls up to one promise: your business keeps running. Each practice below
            has a defined scope, a named lead, and reporting you can hold us to.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="01" label="Practice areas" title="The work" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col bg-paper p-8 transition-colors hover:bg-paper-2 md:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-mute">{s.index}</span>
                  <span className="kicker text-signal-deep opacity-0 transition-opacity group-hover:opacity-100">
                    Details →
                  </span>
                </div>
                <h3 className="display mt-4 text-3xl uppercase text-ink group-hover:text-signal md:text-4xl">
                  {s.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-mute">{s.short}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {s.included.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3 text-xs leading-5 text-ink/80">
                      <span className="mt-1.5 h-1 w-3 shrink-0 bg-signal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="02" label="Fixed-scope packages" title="Productized services" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.code} className="flex flex-col bg-paper">
                <div className="border-b border-line px-6 py-4">
                  <span className="kicker text-signal-deep">{p.kind}</span>
                </div>
                <div className="flex-1 px-6 py-8">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">{p.name}</h3>
                  <p className="mt-2 font-mono text-sm font-medium text-signal-deep">{p.price}</p>
                  <p className="mt-5 text-sm leading-6 text-mute">{p.blurb}</p>
                </div>
                <div className="border-t border-line px-6 py-4">
                  <ArrowLink href="/contact">Get this scoped</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="03" label="Common questions" title="Asked before signing" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="bg-paper px-6 py-8 md:px-8">
                <h3 className="text-lg font-extrabold uppercase tracking-tight">{f.q}</h3>
                <p className="mt-3 text-sm leading-6 text-mute">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
