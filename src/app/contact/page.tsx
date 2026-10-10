import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Kicker } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute baseline call with an Iron Rain engineer. Office in Albuquerque, NM — 24/7 incident line for clients under agreement.",
};

export default function ContactPage() {
  return (
    <>
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">Contact</Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl uppercase text-paper md:text-7xl">
            Talk to an engineer this week.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/70">
            No sales funnel, no discovery-call theater. You describe what&apos;s happening, an
            engineer calls you back within one business day, and you get a straight answer about
            whether we can help and what it costs.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          {/* info column */}
          <div className="space-y-10">
            <div>
              <Kicker className="text-mute">Office</Kicker>
              <p className="mt-3 text-sm leading-6 text-ink/85">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p className="kicker mt-2 text-mute">{site.hours}</p>
            </div>
            <div>
              <Kicker className="text-mute">Direct</Kicker>
              <p className="mt-3 text-sm leading-6 text-ink/85">
                Office: <a className="underline decoration-signal underline-offset-4 hover:text-signal" href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}>{site.phone}</a>
                <br />
                Email: <a className="underline decoration-signal underline-offset-4 hover:text-signal" href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="border border-line bg-paper-2 px-6 py-6">
              <Kicker className="text-signal-deep">Active incident?</Kicker>
              <p className="mt-3 text-sm leading-6 text-ink/85">
                Clients under a RainWatch or StormCell agreement: call{" "}
                <span className="font-mono font-semibold">{site.hotline}</span> — it rings a person,
                24/7. Not a client yet? Call the office and say it&apos;s urgent; we triage
                emergencies ahead of everything else.
              </p>
            </div>
            <div>
              <Kicker className="text-mute">Service area</Kicker>
              <p className="mt-3 text-sm leading-6 text-ink/85">
                On-site across the Albuquerque–Santa Fe corridor. Remote operations for clients
                throughout New Mexico, Arizona, Colorado, and West Texas.
              </p>
            </div>
          </div>

          {/* form column */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
