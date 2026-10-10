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
import { SectionHead, ArrowLink, ButtonLink, Kicker } from "@/components/ui";

export default function Home() {
  const featured = cases[0];
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <Kicker className="text-mute-dark">
              Albuquerque, NM · Est. {site.founded} · IT — SecOps — Web
            </Kicker>
            <h1 className="display mt-6 text-[13vw] uppercase text-paper sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              We keep small business <span className="text-signal">running</span> — and keep the bad
              guys <span className="text-outline">out</span>.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-paper/75">
              {site.name} is an Albuquerque-based IT, cybersecurity, and web engineering firm. We run
              networks, watch them around the clock, get you through compliance audits, and build the
              websites your customers judge you by. One accountable team — since {site.founded}.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a baseline call</ButtonLink>
              <ButtonLink href="/services" variant="ghost-dark">
                Services &amp; pricing
              </ButtonLink>
            </div>
            <div className="mt-12 border-t border-line-dark pt-6">
              <p className="kicker text-mute-dark">{certifications.slice(0, 4).join(" · ")}</p>
            </div>
          </div>
          <div className="lg:pt-2">
            <OpsPanel />
            <p className="kicker mt-4 text-right text-mute-dark">
              Figures are trailing-90-day operations data
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLIENT WALL ================= */}
      <ClientWall />

      {/* ================= SERVICES ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="01" label="Practice areas" title="What we run for you" />
          <div className="border-t border-line">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-line py-8 transition-colors hover:bg-paper-2 md:grid-cols-[80px_1fr_1.2fr_auto] md:gap-8 md:px-6"
              >
                <span className="font-mono text-sm text-mute">{s.index}</span>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-ink transition-colors group-hover:text-signal md:text-3xl">
                  {s.name}
                </h3>
                <p className="col-span-2 mt-2 text-sm leading-6 text-mute md:col-span-1 md:mt-0">
                  {s.short}
                </p>
                <span className="kicker hidden text-signal opacity-0 transition-opacity group-hover:opacity-100 md:block">
                  Details →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href="/services">All services &amp; productized packages</ArrowLink>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <SectionHead index="02" label="Proof of work" title="The numbers we report on" dark />
          <div className="grid grid-cols-2 gap-px border border-line-dark bg-line-dark md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-5 py-8">
                <p className="display text-3xl text-paper md:text-4xl">{s.value}</p>
                <p className="kicker mt-3 text-mute-dark">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED CASE ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="03" label="Selected work" title="When it counted" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-2">
            <Link
              href={`/work/${featured.slug}`}
              className="group bg-ink px-6 py-10 md:px-10 md:py-14"
            >
              <Kicker className="text-signal">Featured case · {featured.industry}</Kicker>
              <h3 className="display mt-5 text-3xl uppercase leading-none text-paper md:text-4xl">
                {featured.headline}
              </h3>
              <p className="mt-6 max-w-lg text-sm leading-6 text-paper/70">{featured.summary}</p>
              <div className="kicker mt-8 text-paper/60 group-hover:text-signal">
                Read the case study →
              </div>
            </Link>
            <div className="grid grid-rows-2 gap-px bg-line">
              {cases.slice(1, 3).map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group bg-paper px-6 py-8 transition-colors hover:bg-paper-2 md:px-10"
                >
                  <Kicker className="text-mute">{c.client} · {c.year}</Kicker>
                  <h3 className="mt-3 text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal md:text-2xl">
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

      {/* ================= PRODUCTS ================= */}
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <SectionHead index="04" label="Productized services" title="Priced. Packaged. Fixed." className="mb-0 md:mb-0" />
            <p className="max-w-sm text-sm leading-6 text-mute">
              Three fixed-scope offerings we run every week. Prices on the page because a real quote
              shouldn&apos;t require a sales call first.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.code} className="flex flex-col bg-paper transition-colors hover:bg-white">
                <div className="flex items-center justify-between border-b border-line px-6 py-4">
                  <span className="font-mono text-xs font-semibold text-mute">{p.code}</span>
                  <span className="kicker text-signal-deep">{p.kind}</span>
                </div>
                <div className="flex-1 px-6 py-8">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">{p.name}</h3>
                  <p className="mt-2 font-mono text-sm font-medium text-signal-deep">{p.price}</p>
                  <p className="mt-5 text-sm leading-6 text-mute">{p.blurb}</p>
                  <ul className="mt-6 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-xs leading-5 text-ink/80">
                        <span className="mt-1.5 h-1 w-3 shrink-0 bg-signal" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-line px-6 py-4">
                  <ArrowLink href="/contact">Start here</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT TEASER ================= */}
      <section className="border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionHead index="05" label="The firm" title="Local engineers, not a ticket queue" dark />
              <p className="max-w-lg text-sm leading-7 text-paper/70">
                Founded in {site.founded} by engineers who came up through national-lab contractors and
                military cyber units, Iron Rain exists because New Mexico small businesses were being
                sold fear or ignored entirely. We&apos;re the firm that answers the phone, writes
                things down in your name, and prices work before we start it.
              </p>
              <div className="mt-8">
                <ArrowLink href="/about" dark>
                  Meet the team &amp; our story
                </ArrowLink>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px border border-line-dark bg-line-dark">
              {team.map((m) => (
                <div key={m.name} className="group bg-panel p-3">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(max-width: 768px) 33vw, 200px"
                      className="photo object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-tight text-paper">{m.name}</p>
                  <p className="kicker mt-1 text-[9px] text-mute-dark">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="06" label="References" title="What clients tell their peers" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col bg-paper px-6 py-10 md:px-8">
                <blockquote className="flex-1 text-base leading-7 text-ink/85">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-4">
                  <p className="text-sm font-bold uppercase tracking-tight">{t.name}</p>
                  <p className="kicker mt-1 text-mute">
                    {t.title} · {t.org}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="kicker mt-8 text-mute">
            References available on request under NDA · Partner ecosystem: {partners.join(" · ")}
          </p>
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="07" label="Field notes" title="From the watch floor" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group flex flex-col bg-paper px-6 py-8 transition-colors hover:bg-paper-2"
              >
                <Kicker className="text-mute">
                  {p.category} · {p.readTime}
                </Kicker>
                <h3 className="mt-4 flex-1 text-xl font-extrabold uppercase tracking-tight text-ink group-hover:text-signal">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-mute">{p.excerpt}</p>
                <p className="kicker mt-6 text-signal-deep">
                  {new Date(p.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  — {p.author}
                </p>
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
