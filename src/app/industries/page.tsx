import type { Metadata } from "next";
import { SectionHead, ArrowLink, Label } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "IT and security programs tuned for healthcare, legal, manufacturing, finance, retail, and nonprofit small businesses across New Mexico.",
};

const industries = [
  {
    name: "Healthcare & Dental",
    need: "HIPAA Security Rule",
    detail:
      "Imaging systems, e-prescribing, and scheduling platforms that can't go down — plus risk analyses, policies, and evidence your compliance officer and insurer will accept.",
  },
  {
    name: "Legal & Fiduciary",
    need: "Client trust protection",
    detail:
      "Trust accounts make you a wire-fraud target. We lock down email, enforce payment verification policy, and run phishing programs measured month over month.",
  },
  {
    name: "Manufacturing & Aerospace",
    need: "CMMC Levels 1–2",
    detail:
      "Flow-down clauses are arriving in New Mexico contracts now. We scope the enclave, close the gaps, and build the evidence binder your assessor expects.",
  },
  {
    name: "Financial Services",
    need: "Examiner-ready IT",
    detail:
      "Credit unions and advisors with vendor-management, access-control, and incident-response documentation maintained for you — examiners have commented on it, favorably.",
  },
  {
    name: "Construction & Trades",
    need: "Field-first IT",
    detail:
      "Crews on ladders don't file tickets. Offline-tolerant field workflows, protected estimating data, and a main office that stops being the bottleneck.",
  },
  {
    name: "Retail & Hospitality",
    need: "PCI DSS",
    detail:
      "POS systems segmented from everything else, guest Wi-Fi that can't see your back office, and payment flows configured the way the card brands actually require.",
  },
  {
    name: "Nonprofits & Associations",
    need: "Donor data duty of care",
    detail:
      "Grant budgets don't survive enterprise quotes. Donor databases, member platforms, and event systems secured and maintained at nonprofit-realistic pricing.",
  },
  {
    name: "Real Estate & Title",
    need: "Wire-fraud defense",
    detail:
      "The single most targeted sector for payment fraud in New Mexico. Out-of-band verification policies, hardened email, and staff training built around closing-day reality.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <h1 className="display max-w-4xl text-4xl md:text-6xl">Different trades. Same storm.</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-paper/75">
            A dental practice and a machine shop don&apos;t have the same problems — they have the
            same storm hitting different roofs. Programs below are tuned per sector, not copied
            across them.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="Where we work"
            note="Eight sectors, each with a written program — not a template with your logo pasted on."
          />
          <div className="border-t border-line">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="grid grid-cols-1 gap-3 border-b border-line py-8 md:grid-cols-[1fr_220px_1.4fr] md:items-baseline md:gap-10"
              >
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">{ind.name}</h2>
                <Label className="text-signal-deep">{ind.need}</Label>
                <p className="text-sm leading-7 text-ink/70">{ind.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-7 text-ink/70">
              Don&apos;t see your sector? If you have 10–250 people and systems that can&apos;t go
              down, the program transfers. Ask us — worst case you get a straight answer and a
              referral.
            </p>
            <ArrowLink href="/contact">Ask about your industry</ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
