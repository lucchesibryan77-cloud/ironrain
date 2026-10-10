import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/lib/cases";
import { ButtonLink, Label } from "@/components/ui";
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
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <Label className="text-mute-dark">
            <Link href="/work" className="underline decoration-ember underline-offset-4 hover:text-ember">
              Case studies
            </Link>{" "}
            · {c.year}
          </Label>
          <h1 className="display mt-5 max-w-5xl text-3xl md:text-5xl">{c.headline}</h1>
          <dl className="mt-10 grid grid-cols-2 gap-px border border-line-dark bg-line-dark md:grid-cols-4">
            {[
              ["Client", c.client],
              ["Industry", c.industry],
              ["Size", c.size],
              ["Location", c.location],
            ].map(([k, v]) => (
              <div key={k} className="bg-dusk px-4 py-5">
                <dt className="figcaption text-[10px] text-mute-dark">{k}</dt>
                <dd className="mt-2 text-sm font-semibold text-paper">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="figcaption mt-6 text-[10px] text-mute-dark">Engagement: {c.services.join(" · ")}</p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="display mb-8 text-3xl md:text-4xl">The situation</h2>
            <p className="max-w-xl text-[15px] leading-8 text-ink/80">{c.challenge}</p>
          </div>
          <div>
            <h2 className="display mb-8 text-3xl md:text-4xl">What we did</h2>
            <ol className="border-t border-line">
              {c.approach.map((a, i) => (
                <li key={a.phase} className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center bg-ink font-mono text-[11px] font-semibold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold tracking-tight">{a.phase}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/70">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <h2 className="display mb-12 max-w-2xl text-3xl md:text-5xl">The outcomes</h2>
          <dl className="grid grid-cols-1 gap-px border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
            {c.outcomes.map((o) => (
              <div key={o.label} className="bg-dusk px-6 py-8">
                <dd className="font-mono text-2xl font-semibold text-ember">{o.value}</dd>
                <dt className="figcaption mt-3 text-[10px] leading-5 text-mute-dark">{o.label}</dt>
              </div>
            ))}
          </dl>
          <figure className="mt-16 max-w-4xl border-t-2 border-ember pt-8">
            <blockquote className="font-serif text-2xl font-medium leading-snug tracking-tight text-paper md:text-[1.75rem]">
              &ldquo;{c.quote.text}&rdquo;
            </blockquote>
            <figcaption className="figcaption mt-6 text-[10px] text-mute-dark">
              {c.quote.name} — {c.quote.title}, {c.client}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display text-3xl text-ink md:text-4xl">More from the field</h2>
            <ButtonLink href="/work" variant="ghost-light">
              All case studies
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                className="group bg-paper px-7 py-8 transition-colors hover:bg-paper-2/70"
              >
                <Label className="text-mute">
                  {o.client} · {o.year}
                </Label>
                <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-ink group-hover:text-signal">
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
