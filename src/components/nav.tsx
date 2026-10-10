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
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`kicker transition-colors hover:text-signal ${
                pathname.startsWith(item.href) ? "text-signal" : "text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="kicker border border-signal bg-signal px-4 py-2.5 text-white transition-colors hover:bg-signal-deep hover:border-signal-deep"
          >
            Book an assessment
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center border border-line-dark text-paper lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M2 6h16M2 10h16M2 14h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-line-dark bg-ink px-5 pb-6 pt-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-line-dark py-3 text-lg font-bold uppercase tracking-tight ${
                  pathname.startsWith(item.href) ? "text-signal" : "text-paper"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="kicker mt-4 border border-signal bg-signal px-4 py-3 text-center text-white"
            >
              Book an assessment
            </Link>
            <p className="kicker mt-4 text-mute-dark">24/7 client line · {site.hotline}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
