import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { SectionHead, ArrowLink, ButtonLink, Kicker } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const related = cases.find((c) => c.slug === service.relatedCase);

  return (
    <>
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">
            <Link href="/services" className="hover:text-signal">Services</Link> / {service.index}
          </Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl uppercase text-paper md:text-7xl">
            {service.name}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-paper/75">{service.summary}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Talk to an engineer</ButtonLink>
            <ButtonLink href="/services" variant="ghost-dark">
              All services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead index="A" label="Scope" title="What's included" />
            <ul className="border-t border-line">
              {service.included.map((item) => (
                <li key={item} className="flex gap-4 border-b border-line py-4 text-sm leading-6 text-ink/85">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-signal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead index="B" label="Artifacts" title="What you hold in your hands" />
            <div className="grid grid-cols-1 gap-px border border-line bg-line">
              {service.deliverables.map((d, i) => (
                <div key={d} className="flex gap-5 bg-paper px-6 py-6">
                  <span className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-ink/85">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="C" label="Engagement model" title="How it runs" dark />
          <div className="grid grid-cols-1 gap-px border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div key={p.step} className="bg-ink px-6 py-8">
                <p className="font-mono text-xs text-mute-dark">PHASE {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-extrabold uppercase tracking-tight text-paper">{p.step}</h3>
                <p className="mt-3 text-sm leading-6 text-mute-dark">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related && (
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
            <SectionHead index="D" label="Evidence" title="Seen in the field" />
            <Link
              href={`/work/${related.slug}`}
              className="group grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-[1fr_2fr]"
            >
              <div className="bg-ink px-6 py-10 md:px-10">
                <Kicker className="text-signal">{related.client}</Kicker>
                <p className="mt-2 text-sm text-paper/60">{related.industry} · {related.year}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {related.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label}>
                      <p className="display text-2xl text-signal md:text-3xl">{o.value}</p>
                      <p className="kicker mt-2 text-[9px] text-mute-dark">{o.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-paper px-6 py-10 transition-colors group-hover:bg-paper-2 md:px-10">
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal md:text-3xl">
                  {related.headline}
                </h3>
                <p className="mt-4 text-sm leading-6 text-mute">{related.summary}</p>
                <p className="kicker mt-6 text-signal-deep">Read the full case study →</p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
