"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./logo";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* utility strip — the civic header row */}
      <div className="bg-dusk text-paper/80">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 md:px-10">
          <p className="figcaption text-[10px]">
            Albuquerque, New Mexico · Est. {site.founded}
          </p>
          {site.phone === site.hotline ? (
            <p className="figcaption hidden text-[10px] sm:block">
              Office &amp; 24/7 line — {site.phone}
            </p>
          ) : (
            <p className="figcaption hidden text-[10px] sm:block">
              Office {site.phone} &nbsp;·&nbsp; 24/7 client line {site.hotline}
            </p>
          )}
          <p className="figcaption text-[10px] sm:hidden">{site.phone}</p>
        </div>
      </div>

      {/* main bar */}
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-signal ${
                  pathname.startsWith(item.href)
                    ? "text-signal underline decoration-signal underline-offset-8"
                    : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="figcaption border border-signal-deep bg-signal-deep px-5 py-3 text-[11px] text-[#fff6ec] transition-colors hover:bg-signal hover:border-signal"
            >
              Book an assessment
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center border border-line bg-paper text-ink lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M2 6h16M2 10h16M2 14h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-b border-line bg-paper px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-line py-4 font-serif text-xl font-semibold ${
                  pathname.startsWith(item.href) ? "text-signal" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="figcaption mt-5 border border-signal-deep bg-signal-deep px-5 py-4 text-center text-[11px] text-[#fff6ec]"
            >
              Book an assessment
            </Link>
            <p className="figcaption mt-5 text-[10px] text-mute">24/7 client line · {site.hotline}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
