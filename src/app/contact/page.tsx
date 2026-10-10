import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Label } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute baseline call with an Iron Rain engineer. Office in Albuquerque, NM — 24/7 incident line for clients under agreement.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <h1 className="display max-w-4xl text-4xl md:text-6xl">Talk to an engineer this week.</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-paper/75">
            No sales funnel, no discovery-call theater. You describe what&apos;s happening, an
            engineer calls you back within one business day, and you get a straight answer about
            whether we can help and what it costs.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          {/* info column */}
          <div className="space-y-10">
            <div>
              <Label className="text-mute">Office</Label>
              <p className="mt-3 text-[15px] leading-7 text-ink/85">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p className="figcaption mt-3 text-[10px] text-mute">{site.hours}</p>
            </div>
            <div>
              <Label className="text-mute">Direct</Label>
              <p className="mt-3 text-[15px] leading-7 text-ink/85">
                Office:{" "}
                <a
                  className="font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
                  href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                >
                  {site.phone}
                </a>
                <br />
                Email:{" "}
                <a
                  className="font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="border border-line bg-paper-2 px-6 py-6">
              <p className="font-serif text-xl font-semibold tracking-tight text-signal-deep">Active incident?</p>
              <p className="mt-3 text-sm leading-7 text-ink/80">
                Clients under a RainWatch or StormCell agreement: call{" "}
                <span className="font-mono font-semibold">{site.hotline}</span> — it rings a person,
                24/7. Not a client yet? Call the office and say it&apos;s urgent; we triage
                emergencies ahead of everything else.
              </p>
            </div>
            <div>
              <Label className="text-mute">Service area</Label>
              <p className="mt-3 text-[15px] leading-7 text-ink/85">
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
