import Link from "next/link";
import { site } from "@/lib/site";

/** The closing band — clay committed at page scale. */
export function CtaBand() {
  return (
    <section className="bg-signal text-[#fff6ec]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-5 py-16 md:grid-cols-[1fr_auto] md:px-10 md:py-24">
        <div>
          <h2 className="display max-w-2xl text-4xl md:text-6xl">Find out where you stand.</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#fff6ec]/85">
            A free 30-minute baseline call with an engineer — not a salesperson. We&apos;ll tell you
            what&apos;s actually urgent, what can wait, and what it costs. If we&apos;re not the right
            fit, we&apos;ll say so and point you at someone who is.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Link
            href="/contact"
            className="figcaption border border-ink bg-ink px-7 py-4 text-center text-[11px] text-paper transition-colors hover:bg-dusk hover:border-dusk"
          >
            Book a baseline call
          </Link>
          <a
            href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            className="figcaption border border-[#fff6ec]/50 px-7 py-4 text-center text-[11px] transition-colors hover:bg-[#fff6ec] hover:text-signal-deep"
          >
            Or call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
