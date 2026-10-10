import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-line-dark bg-signal text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:px-10 md:py-20">
        <div>
          <p className="kicker text-white/70">No obligation · 30 minutes · straight answers</p>
          <h2 className="display mt-4 max-w-2xl text-4xl uppercase md:text-6xl">
            Find out where you stand.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/85">
            A free baseline call with an engineer — not a salesperson. We&apos;ll tell you what&apos;s
            actually urgent, what can wait, and what it costs. If we&apos;re not the right fit,
            we&apos;ll say so and point you at someone who is.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="kicker border border-ink bg-ink px-6 py-4 text-center text-paper transition-colors hover:bg-panel"
          >
            Book a baseline call
          </Link>
          <a
            href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            className="kicker border border-white/40 px-6 py-4 text-center transition-colors hover:bg-white hover:text-signal"
          >
            or call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
