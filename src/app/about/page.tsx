import type { Metadata } from "next";
import Image from "next/image";
import { site, certifications, partners } from "@/lib/site";
import { team, values } from "@/lib/team";
import { SectionHead, Kicker } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "About — Team & Story",
  description:
    "Founded in Albuquerque in 2017 by engineers from national-lab and military cyber backgrounds. Meet the Iron Rain team, our values, certifications, and community work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Kicker className="text-mute-dark">The firm · Est. {site.founded}</Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl uppercase text-paper md:text-7xl">
            Built in Albuquerque. On purpose.
          </h1>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHead index="01" label="Origin" title="Why we exist" />
          </div>
          <div className="space-y-6 text-base leading-8 text-ink/85">
            <p>
              Iron Rain started in {site.founded} in a rented desk off San Mateo, after our founder
              spent nine years watching national-lab contractors get world-class security while the
              dental office next door got a guy who showed up &ldquo;when he could.&rdquo; The gap
              wasn&apos;t talent — New Mexico has plenty. The gap was that nobody packaged serious
              operations discipline at a price a 30-person company could pay.
            </p>
            <p>
              Eight years later we run a 24/7 watch floor, a compliance practice that has taken
              manufacturers through CMMC readiness, and a web studio whose work gets judged by
              customers, lenders, and insurers every single day. We&apos;re still in Albuquerque.
              Our on-site response is measured in minutes. That&apos;s the whole point.
            </p>
            <p className="border-l-2 border-signal pl-6 font-medium text-ink">
              The name is the job: threats fall like rain — constant, unglamorous, inevitable. Our
              work is the roof that holds and the gutters that channel it somewhere harmless.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="02" label="Operating values" title="How we work" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.name} className="bg-paper px-6 py-10 md:px-10">
                <p className="font-mono text-sm text-signal-deep">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight">{v.name}</h3>
                <p className="mt-4 text-sm leading-6 text-mute">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead index="03" label="People" title="The team on your account" />
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="group bg-paper">
                <div className="relative aspect-[4/4.4] overflow-hidden border-b border-line">
                  <Image
                    src={m.photo}
                    alt={`Portrait of ${m.name}, ${m.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="photo object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 bg-ink px-2 py-1 font-mono text-[10px] text-paper">
                    SINCE {m.since}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight">{m.name}</h3>
                  <p className="kicker mt-1 text-signal-deep">{m.role}</p>
                  <p className="mt-4 text-sm leading-6 text-mute">{m.bio}</p>
                  <p className="kicker mt-4 text-mute">{m.certs.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="kicker mt-8 text-mute">
            Careers — we hire analysts once or twice a year, usually from CNM and UNM programs.
            talent@ironrainsecops.com
          </p>
        </div>
      </section>

      <section className="rainlines border-b border-line-dark bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <SectionHead index="04" label="Credentials & community" title="On the record" dark />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Kicker className="text-mute-dark">Team certifications</Kicker>
              <p className="mt-4 text-sm leading-7 text-paper/80">{certifications.join(" · ")}</p>
              <Kicker className="mt-8 text-mute-dark">Partner ecosystem</Kicker>
              <p className="mt-4 text-sm leading-7 text-paper/80">{partners.join(" · ")}</p>
            </div>
            <div>
              <Kicker className="text-mute-dark">In the community</Kicker>
              <ul className="mt-4 space-y-4 text-sm leading-6 text-paper/80">
                <li className="flex gap-4">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-signal" aria-hidden="true" />
                  Quarterly free security workshops for small businesses with the Small Business
                  Development Center at CNM Ingenuity.
                </li>
                <li className="flex gap-4">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-signal" aria-hidden="true" />
                  Member, New Mexico Tech Council; sponsor of the Albuquerque Cybersecurity
                  Professionals meetup.
                </li>
                <li className="flex gap-4">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-signal" aria-hidden="true" />
                  Guest instructors in the CNM Ingenuity cybersecurity bootcamp — two of our analysts
                  came through that program.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
