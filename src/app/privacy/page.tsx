import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Iron Rain SecOps Solutions collects, uses, and protects information.",
};

const sections = [
  {
    h: "1. Who we are",
    b: `${site.legalName} ("Iron Rain", "we", "us") is an IT, cybersecurity, and web development consulting firm headquartered at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}. You can reach us at ${site.email} or ${site.phone}.`,
  },
  {
    h: "2. What we collect",
    b: "When you contact us through this website we collect the information you choose to send: your name, company, email address, team size, topic, and the contents of your message. We also collect standard server logs (IP address, browser type, pages visited) for security monitoring — we are a security company; we monitor our own infrastructure the way we monitor clients'.",
  },
  {
    h: "3. How we use it",
    b: "We use contact information solely to respond to your inquiry and, if you become a client, to deliver services. We do not sell personal information, share it with advertisers, or add you to marketing lists without your explicit consent. Our insights digest is opt-in only.",
  },
  {
    h: "4. Cookies and analytics",
    b: "This site uses privacy-respecting, cookieless analytics. We do not use advertising trackers, cross-site cookies, or session-recording tools.",
  },
  {
    h: "5. Data security",
    b: "Information you send us is stored in systems protected by the same controls we deliver to clients: phishing-resistant MFA, encryption at rest and in transit, least-privilege access, and 24/7 monitoring of our own environment.",
  },
  {
    h: "6. Retention",
    b: "Inquiry records are retained for up to 24 months unless an engagement follows, in which case contractual retention terms apply. You may request deletion of your records at any time by emailing privacy@ironrainsecops.com.",
  },
  {
    h: "7. Your rights",
    b: "You may request access to, correction of, or deletion of your personal information at any time. New Mexico residents: we comply with applicable state privacy requirements. Contact privacy@ironrainsecops.com and we will respond within 30 days.",
  },
  {
    h: "8. Changes",
    b: "If this policy changes we will update the date below. Material changes affecting clients are communicated directly under the terms of your service agreement.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <p className="kicker text-signal-deep">Legal</p>
        <h1 className="display mt-4 text-4xl uppercase text-ink md:text-6xl">Privacy Policy</h1>
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
