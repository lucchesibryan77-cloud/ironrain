import type { Metadata } from "next";
import Image from "next/image";
import { site, certifications, partners } from "@/lib/site";
import { team, values } from "@/lib/team";
import { SectionHead } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = {
  title: "About — Team & Story",
  description:
    "Founded in Albuquerque in 2017 by engineers from national-lab and military cyber backgrounds. Meet the Iron Rain team, our values, certifications, and community work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <h1 className="display max-w-4xl text-4xl md:text-6xl">Built in Albuquerque. On purpose.</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-paper/75">
            A New Mexico firm, run by people who answer their own phones. Est. {site.founded} — and
            planning to still be here when your grandkids inherit the books.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="display text-3xl md:text-5xl">Why we exist</h2>
          <div className="space-y-6 text-[15px] leading-8 text-ink/80">
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
              customers, lenders, and insurers every single day. We&apos;re still in Albuquerque. Our
              on-site response is measured in minutes. That&apos;s the whole point.
            </p>
            <p className="border-l-2 border-signal pl-6 font-serif text-lg font-medium leading-8 text-ink">
              The name is the job: threats fall like rain — constant, unglamorous, inevitable. Our
              work is the roof that holds and the gutters that channel it somewhere harmless.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="How we work"
            note="Four rules, printed on the wall of our office and honored on every invoice."
          />
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {values.map((v) => (
              <div key={v.name} className="bg-paper px-7 py-10 md:px-10">
                <h3 className="font-serif text-2xl font-semibold tracking-tight">{v.name}</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-ink/70">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <SectionHead
            title="The team on your account"
            note="Six people deep on purpose — the person who answers your call knows your office."
          />
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="group bg-paper">
                <div className="relative aspect-[4/4.2] overflow-hidden border-b border-line">
                  <Image
                    src={m.photo}
                    alt={`Portrait of ${m.name}, ${m.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="photo object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="figcaption absolute bottom-3 left-3 bg-dusk px-2.5 py-1.5 text-[9px] text-paper">
                    Since {m.since}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-serif text-xl font-semibold tracking-tight">{m.name}</h3>
                  <p className="figcaption mt-1.5 text-[10px] text-signal-deep">{m.role}</p>
                  <p className="mt-4 text-sm leading-7 text-ink/70">{m.bio}</p>
                  <p className="figcaption mt-4 text-[10px] text-mute">{m.certs.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs leading-6 text-mute">
            Careers — we hire analysts once or twice a year, usually from CNM and UNM programs.
            talent@ironrainsecops.com
          </p>
        </div>
      </section>

      <section className="border-b border-line-dark bg-dusk text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <h2 className="display mb-12 max-w-2xl text-3xl md:text-5xl">On the record</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="border-t border-line-dark pt-8">
              <p className="figcaption text-[10px] text-mute-dark">Team certifications</p>
              <p className="mt-4 text-sm leading-8 text-paper/80">{certifications.join(" · ")}</p>
              <p className="figcaption mt-10 text-[10px] text-mute-dark">Partner ecosystem</p>
              <p className="mt-4 text-sm leading-8 text-paper/80">{partners.join(" · ")}</p>
            </div>
            <div className="border-t border-line-dark pt-8">
              <p className="figcaption text-[10px] text-mute-dark">In the community</p>
              <ul className="mt-4 space-y-5 text-sm leading-7 text-paper/80">
                <li className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden="true" />
                  Quarterly free security workshops for small businesses with the Small Business
                  Development Center at CNM Ingenuity.
                </li>
                <li className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden="true" />
                  Member, New Mexico Tech Council; sponsor of the Albuquerque Cybersecurity
                  Professionals meetup.
                </li>
                <li className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden="true" />
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
