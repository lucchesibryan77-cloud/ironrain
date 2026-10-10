import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { Label, SectionHead } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes from the Iron Rain watch floor: breach data translated for small business, CMMC guidance for New Mexico manufacturers, and anonymized threat stories.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <h1 className="display max-w-4xl text-4xl md:text-6xl">Written by the people on call.</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-paper/75">
            No content marketing agency, no ghostwriters. These notes are written by our engineers
            between tickets, assessments, and the occasional 2am incident.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead title="Latest notes" />
          <div className="border-t border-line">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group grid grid-cols-1 gap-3 border-b border-line py-10 transition-colors hover:bg-paper-2/70 md:grid-cols-[150px_1fr_170px] md:gap-10"
              >
                <span className="figcaption pt-1 text-[10px] text-mute">
                  {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
                </span>
                <span>
                  <Label className="text-signal-deep">{p.category}</Label>
                  <span className="mt-2 block font-serif text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal md:text-[1.7rem]">
                    {p.title}
                  </span>
                  <span className="mt-3 block max-w-2xl text-sm leading-7 text-ink/65">{p.excerpt}</span>
                </span>
                <span className="md:text-right">
                  <span className="block text-sm font-medium text-ink">{p.author}</span>
                  <span className="figcaption mt-1.5 block text-[10px] text-mute">{p.readTime} read</span>
                  <span className="mt-4 inline-block text-sm font-semibold text-signal-deep opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-xs leading-6 text-mute">
            Subscribe by email — one note a month, no marketing: subscribe@ironrainsecops.com
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
