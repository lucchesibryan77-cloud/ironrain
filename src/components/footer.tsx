import Link from "next/link";
import { site, partners, certifications } from "@/lib/site";
import { LogoMark } from "./logo";

export function Footer() {
  return (
    <footer className="bg-dusk text-paper">
      {/* office + hotline band */}
      <div className="border-b border-line-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
          <div className="px-5 py-10 md:px-10">
            <p className="figcaption text-mute-dark">Headquarters</p>
            <p className="mt-3 text-sm leading-6 text-paper/85">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
          <div className="border-t border-line-dark px-5 py-10 md:border-l md:border-t-0 md:px-10">
            <p className="figcaption text-mute-dark">Talk to a person</p>
            <p className="mt-3 text-sm leading-6 text-paper/85">
              Office: {site.phone}
              <br />
              <Link href={`mailto:${site.email}`} className="underline decoration-signal underline-offset-4 hover:text-ember">
                {site.email}
              </Link>
            </p>
          </div>
          <div className="border-t border-line-dark px-5 py-10 md:border-l md:border-t-0 md:px-10">
            <p className="figcaption text-mute-dark">Client incident line</p>
            <p className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ember">{site.hotline}</p>
            <p className="mt-1 text-xs text-mute-dark">Answered 24/7 for clients under agreement</p>
          </div>
        </div>
      </div>

      {/* links */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-14 md:grid-cols-4 md:px-10">
        <div>
          <p className="figcaption text-mute-dark">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-ember" href="/services/managed-it">Managed IT Services</Link></li>
            <li><Link className="hover:text-ember" href="/services/cybersecurity">Security Operations</Link></li>
            <li><Link className="hover:text-ember" href="/services/compliance-risk">Compliance &amp; Risk</Link></li>
            <li><Link className="hover:text-ember" href="/services/web-development">Web Development &amp; Design</Link></li>
          </ul>
        </div>
        <div>
          <p className="figcaption text-mute-dark">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-ember" href="/about">About &amp; Team</Link></li>
            <li><Link className="hover:text-ember" href="/work">Case Studies</Link></li>
            <li><Link className="hover:text-ember" href="/industries">Industries</Link></li>
            <li><Link className="hover:text-ember" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="figcaption text-mute-dark">Resources</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-ember" href="/insights">Insights</Link></li>
            <li><Link className="hover:text-ember" href="/services">Productized Services</Link></li>
            <li><Link className="hover:text-ember" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-ember" href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="figcaption text-mute-dark">Credentials</p>
          <p className="mt-4 text-xs leading-6 text-mute-dark">{certifications.join(" · ")}</p>
          <p className="mt-3 text-xs leading-6 text-mute-dark">Partners: {partners.slice(0, 5).join(" · ")}</p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-3">
            <LogoMark className="h-5 w-5" light />
            <p className="text-xs text-mute-dark">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
          </div>
          <p className="figcaption text-[10px] text-mute-dark">
            Albuquerque, New Mexico · MST/MDT · Serving NM, AZ, CO, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
