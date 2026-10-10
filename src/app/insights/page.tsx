import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { Kicker, SectionHead } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes from the Iron Rain watch floor: breach data translated for small business, CMMC guidance for New Mexico manufacturers, and anonymized threat stories.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">Insights &amp; field notes</Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl uppercase text-paper md:text-7xl">
            Written by the people on call.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/70">
            No content marketing agency, no ghostwriters. These notes are written by our engineers
            between tickets, assessments, and the occasional 2am incident.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="01" label="Index" title="Latest notes" />
          <div className="border-t border-line">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group grid grid-cols-1 gap-4 border-b border-line py-10 transition-colors hover:bg-paper-2 md:grid-cols-[140px_1fr_220px] md:gap-10 md:px-6"
              >
                <span className="font-mono text-sm text-mute">
                  {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
                </span>
                <div>
                  <Kicker className="text-signal-deep">{p.category}</Kicker>
                  <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-mute">{p.excerpt}</p>
                </div>
                <div className="md:text-right">
                  <p className="kicker text-mute">{p.author}</p>
                  <p className="kicker mt-2 text-mute">{p.readTime} read</p>
                  <p className="kicker mt-4 text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="kicker mt-10 text-mute">
            Subscribe by email — one note a month, no marketing: subscribe@ironrainsecops.com
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
