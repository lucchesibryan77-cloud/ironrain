import Link from "next/link";
import Image from "next/image";
import { site, stats, partners, certifications } from "@/lib/site";
import { services, products } from "@/lib/services";
import { cases, testimonials } from "@/lib/cases";
import { posts } from "@/lib/posts";
import { team } from "@/lib/team";
import { OpsPanel } from "@/components/ops-panel";
import { ClientWall } from "@/components/marquee";
import { CtaBand } from "@/components/cta";
import { SectionHead, ArrowLink, ButtonLink, Label } from "@/components/ui";

export default function Home() {
  const featured = cases[0];
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="display max-w-2xl text-[2.75rem] leading-[1.02] text-ink md:text-6xl lg:text-[4.4rem]">
              We keep New Mexico small business <span className="text-signal">running</span> — and
              keep the bad guys out.
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-8 text-ink/75">
              {site.name} is an Albuquerque firm handling IT, 24/7 security operations, compliance,
              and web development for businesses of 10 to 250 people. One accountable team — since{" "}
              {site.founded}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a baseline call</ButtonLink>
              <ButtonLink href="/services" variant="ghost-light">
                Services &amp; pricing
              </ButtonLink>
            </div>
            <div className="mt-12 border-t border-line pt-5">
              <p className="text-xs leading-6 text-mute">
                <span className="font-semibold text-ink">Certified:</span> {certifications.join(" · ")}
                <br />
                <span className="font-semibold text-ink">Partnered:</span> {partners.join(" · ")}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <OpsPanel />
            <p className="figcaption mt-3 text-right text-[10px] text-mute">
              Form IR-2026-Q3 · reviewed monthly by operations
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLIENT REGISTER ================= */}
      <ClientWall />

      {/* ================= SERVICES ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="What we run for you"
            note="Four practices, one accountable team, and reporting you can hold us to — in writing."
          />
          <div className="border-t border-line">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid grid-cols-1 gap-3 border-b border-line py-9 transition-colors hover:bg-paper-2/70 md:grid-cols-[1fr_1.3fr_auto] md:items-baseline md:gap-10"
              >
                <h3 className="font-serif text-3xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal">
                  {s.name}
                </h3>
                <p className="max-w-xl text-[15px] leading-7 text-ink/70">{s.short}</p>
                <span className="text-sm font-semibold text-signal-deep md:justify-self-end">
                  Details <span aria-hidden="true" className="transition-transform inline-block group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href="/services">All services &amp; fixed-scope packages</ArrowLink>
          </div>
        </div>
      </section>

      {/* ================= ON THE RECORD ================= */}
      <section className="border-b border-line bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="On the record"
            note="The figures we report to clients every month. Ask any of them — references under NDA."
            dark
          />
          <dl className="grid grid-cols-1 gap-px border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-6 bg-dusk px-6 py-7">
                <dt className="text-sm text-paper/70">{s.label}</dt>
                <dd className="shrink-0 font-mono text-lg font-semibold text-ember">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="figcaption mt-6 text-[10px] text-mute-dark">
            Iron Rain operating ledger · trailing 12 months · audited at each quarterly review
          </p>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="When it counted"
            note="Documented engagements, with permission. Anonymized where a client's exposure requires it."
          />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-5">
            <Link href={`/work/${featured.slug}`} className="group bg-dusk px-7 py-10 md:px-10 md:py-14 lg:col-span-3">
              <Label className="text-ember">Featured case · {featured.industry}</Label>
              <h3 className="display mt-5 text-3xl text-paper md:text-4xl">{featured.headline}</h3>
              <p className="mt-6 max-w-lg text-[15px] leading-7 text-paper/75">{featured.summary}</p>
              <div className="mt-8 text-sm font-semibold text-paper/80 group-hover:text-ember">
                Read the case study <span aria-hidden="true">→</span>
              </div>
            </Link>
            <div className="grid grid-rows-2 gap-px bg-line lg:col-span-2">
              {cases.slice(1, 3).map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group bg-paper px-7 py-9 transition-colors hover:bg-paper-2/70 md:px-8"
                >
                  <Label className="text-mute">
                    {c.client} · {c.year}
                  </Label>
                  <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink group-hover:text-signal">
                    {c.headline}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <ArrowLink href="/work">All case studies</ArrowLink>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTIZED ================= */}
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="Priced. Packaged. Fixed."
            note="Three fixed-scope offerings we run every week. Prices on the page because a real quote shouldn't require a sales call first."
          />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.code} className="flex flex-col bg-paper">
                <div className="border-b border-line px-7 py-4">
                  <Label className="text-signal-deep">{p.kind}</Label>
                </div>
                <div className="flex-1 px-7 py-8">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 font-mono text-sm font-semibold text-signal-deep">{p.price}</p>
                  <p className="mt-5 text-sm leading-7 text-ink/70">{p.blurb}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[13px] leading-6 text-ink/80">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-line px-7 py-5">
                  <ArrowLink href="/contact">Get this scoped</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FIRM ================= */}
      <section className="border-b border-line bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <h2 className="display max-w-lg text-4xl md:text-5xl">
                Local engineers, not a ticket queue.
              </h2>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-paper/75">
                Founded in {site.founded} by engineers who came up through national-lab contractors
                and military cyber units, Iron Rain exists because New Mexico small businesses were
                being sold fear or ignored entirely. We&apos;re the firm that answers the phone,
                writes things down in your name, and prices work before we start it.
              </p>
              <div className="mt-8">
                <ArrowLink href="/about" dark>
                  Meet the team &amp; our story
                </ArrowLink>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px border border-line-dark bg-line-dark">
              {team.map((m) => (
                <div key={m.name} className="bg-dusk p-3">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(max-width: 768px) 33vw, 200px"
                      className="photo object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[13px] font-semibold text-paper">{m.name}</p>
                  <p className="figcaption mt-1 text-[9px] text-mute-dark">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead title="What clients tell their peers" />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t-2 border-signal pt-6">
                <blockquote className="font-serif text-[17px] font-medium leading-8 text-ink/85">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="figcaption mt-1 text-[10px] text-mute">
                    {t.title} · {t.org}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 border-t border-line pt-6 text-xs leading-6 text-mute">
            References available on request under NDA · Partner ecosystem: {partners.join(" · ")}
          </p>
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="From the watch floor"
            note="Written by our engineers between tickets and incidents — no marketing agency involved."
          />
          <div className="border-t border-line">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group grid grid-cols-1 gap-2 border-b border-line py-8 transition-colors hover:bg-paper-2/70 md:grid-cols-[140px_1fr] md:gap-10"
              >
                <span className="figcaption pt-1 text-[10px] text-mute">
                  {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
                </span>
                <span>
                  <span className="font-serif text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal">
                    {p.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-6 text-ink/65">{p.excerpt}</span>
                  <span className="figcaption mt-3 block text-[10px] text-signal-deep">
                    {p.category} · {p.author} · {p.readTime}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href="/insights">All insights</ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
