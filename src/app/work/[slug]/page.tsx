import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/lib/cases";
import { SectionHead, ButtonLink, Kicker } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.client} — Case Study`, description: c.summary };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = cases.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">
            <Link href="/work" className="hover:text-signal">Work</Link> / Case study · {c.year}
          </Kicker>
          <h1 className="display mt-4 max-w-5xl text-4xl uppercase text-paper md:text-6xl">
            {c.headline}
          </h1>
          <div className="mt-10 grid grid-cols-2 gap-px border border-line-dark bg-line-dark md:grid-cols-4">
            {[
              ["Client", c.client],
              ["Industry", c.industry],
              ["Size", c.size],
              ["Location", c.location],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink px-4 py-5">
                <p className="kicker text-mute-dark">{k}</p>
                <p className="mt-2 text-sm font-bold text-paper">{v}</p>
              </div>
            ))}
          </div>
          <p className="kicker mt-6 text-mute-dark">Engagement: {c.services.join(" · ")}</p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead index="01" label="Situation" title="The challenge" />
            <p className="text-base leading-8 text-ink/85">{c.challenge}</p>
          </div>
          <div>
            <SectionHead index="02" label="Execution" title="What we did" />
            <div className="border-t border-line">
              {c.approach.map((a, i) => (
                <div key={a.phase} className="grid grid-cols-[40px_1fr] gap-5 border-b border-line py-6">
                  <span className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-extrabold uppercase tracking-tight">{a.phase}</h3>
                    <p className="mt-2 text-sm leading-6 text-mute">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <SectionHead index="03" label="Measured" title="The outcomes" dark />
          <div className="grid grid-cols-2 gap-px border border-line-dark bg-line-dark lg:grid-cols-4">
            {c.outcomes.map((o) => (
              <div key={o.label} className="bg-ink px-6 py-10">
                <p className="display text-3xl text-signal md:text-4xl">{o.value}</p>
                <p className="kicker mt-3 text-mute-dark">{o.label}</p>
              </div>
            ))}
          </div>
          <figure className="mt-16 max-w-4xl">
            <blockquote className="text-2xl font-bold leading-snug tracking-tight text-paper md:text-3xl">
              &ldquo;{c.quote.text}&rdquo;
            </blockquote>
            <figcaption className="kicker mt-6 text-mute-dark">
              {c.quote.name} — {c.quote.title}, {c.client}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display text-3xl uppercase text-ink md:text-4xl">More from the field</h2>
            <ButtonLink href="/work" variant="ghost-light">All case studies</ButtonLink>
          </div>
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                className="group bg-paper px-6 py-8 transition-colors hover:bg-paper-2"
              >
                <Kicker className="text-mute">{o.client} · {o.year}</Kicker>
                <h3 className="mt-3 text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal">
                  {o.headline}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
