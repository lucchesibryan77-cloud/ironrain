import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Iron Rain SecOps Solutions website.",
};

const sections = [
  {
    h: "1. Scope",
    b: `These terms govern use of the website operated by ${site.legalName} ("Iron Rain", "we", "us") at ironrainsecops.com. Consulting, managed services, and security operations are governed by separate written agreements — this page covers the website itself.`,
  },
  {
    h: "2. Informational content",
    b: "Content on this site — including insights articles, case studies, and service descriptions — is general information, not advice for your specific environment. Case study figures describe specific engagements under specific conditions and are not a guarantee of identical outcomes.",
  },
  {
    h: "3. Acceptable use",
    b: "You agree not to probe, scan, or test the vulnerability of this website or its infrastructure without our prior written authorization. We appreciate the irony of needing this clause. Report suspected vulnerabilities to security@ironrainsecops.com — we respond and we thank researchers.",
  },
  {
    h: "4. Intellectual property",
    b: "The Iron Rain name, mark, and site content are the property of Iron Rain SecOps Solutions, LLC. Client names and quotes appear with written permission.",
  },
  {
    h: "5. Third-party references",
    b: "References to Microsoft, Cisco, SentinelOne, and other vendors describe our partner relationships and toolset expertise. Those marks belong to their respective owners; no endorsement of us by them is implied.",
  },
  {
    h: "6. Limitation of liability",
    b: "This website is provided 'as is'. To the maximum extent permitted by law, Iron Rain's liability arising from use of this site is limited to the amount you paid us to use it, which is zero.",
  },
  {
    h: "7. Governing law",
    b: "These terms are governed by the laws of the State of New Mexico. Venue for any dispute is Bernalillo County, New Mexico.",
  },
];

export default function TermsPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <p className="kicker text-signal-deep">Legal</p>
        <h1 className="display mt-4 text-4xl uppercase text-ink md:text-6xl">Terms of Service</h1>
        <p className="kicker mt-4 text-mute">Last updated: January 5, 2026</p>
        <div className="article-body mt-12 border-t border-line pt-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
