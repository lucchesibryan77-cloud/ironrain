import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { ArrowLink, ButtonLink, Label } from "@/components/ui";
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
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <Label className="text-mute-dark">
            <Link href="/services" className="underline decoration-ember underline-offset-4 hover:text-ember">
              Services
            </Link>{" "}
            — full scope below
          </Label>
          <h1 className="display mt-5 max-w-4xl text-4xl md:text-6xl">{service.name}</h1>
          <p className="mt-7 max-w-2xl text-[15px] leading-8 text-paper/75">{service.summary}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Talk to an engineer</ButtonLink>
            <ButtonLink href="/services" variant="ghost-dark">
              All services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="display mb-10 text-3xl md:text-4xl">What&apos;s included</h2>
            <ul className="border-t border-line">
              {service.included.map((item) => (
                <li key={item} className="flex gap-4 border-b border-line py-4 text-[15px] leading-7 text-ink/85">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display mb-10 text-3xl md:text-4xl">What you hold in your hands</h2>
            <div className="border-t border-line">
              {service.deliverables.map((d) => (
                <div key={d} className="flex gap-5 border-b border-line py-5">
                  <span className="mt-0.5 h-3 w-3 shrink-0 border-2 border-signal" aria-hidden="true" />
                  <p className="text-[15px] leading-7 text-ink/85">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-mute">
              Every artifact is delivered in your name, in a shared folder you own. Documentation is a
              deliverable here — not a hostage.
            </p>
          </div>
        </div>
      </section>

      {/* engagement model — the stations an engagement moves through */}
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <h2 className="display mb-12 max-w-2xl text-3xl md:text-5xl">How the engagement runs</h2>
          <ol className="grid grid-cols-1 gap-px border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <li key={p.step} className="bg-dusk px-6 py-8">
                <p className="figcaption text-[10px] text-mute-dark">Station {i + 1} of {service.process.length}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-paper">{p.step}</h3>
                <p className="mt-3 text-sm leading-7 text-paper/70">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related && (
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
            <h2 className="display mb-12 max-w-2xl text-3xl md:text-5xl">Seen in the field</h2>
            <Link
              href={`/work/${related.slug}`}
              className="group grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-[1fr_2fr]"
            >
              <div className="bg-dusk px-7 py-10 text-paper md:px-10">
                <Label className="text-ember">{related.client}</Label>
                <p className="mt-2 text-sm text-paper/60">
                  {related.industry} · {related.year}
                </p>
                <div className="mt-8 space-y-4">
                  {related.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label} className="flex items-baseline justify-between gap-4 border-t border-line-dark pt-4">
                      <span className="text-[13px] text-paper/70">{o.label}</span>
                      <span className="font-mono text-lg font-semibold text-ember">{o.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-paper px-7 py-10 transition-colors group-hover:bg-paper-2/70 md:px-10">
                <h3 className="font-serif text-2xl font-semibold tracking-tight text-ink group-hover:text-signal md:text-3xl">
                  {related.headline}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink/70">{related.summary}</p>
                <p className="mt-6 text-sm font-semibold text-signal-deep">Read the full case study →</p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
