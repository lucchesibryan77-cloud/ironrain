# Architecture

```
src/
  app/
    layout.tsx            # fonts (next/font: Archivo + IBM Plex Mono), JSON-LD, Nav/Footer
    page.tsx              # home: hero+OpsPanel, ClientWall, services index, stats, featured case, products, about teaser, testimonials, insights, CtaBand
    globals.css           # Tailwind v4 @theme tokens + .kicker/.display/.rainlines/.gridlines/.photo/.article-body
    services/page.tsx + [slug]/page.tsx      # index+FAQ; detail = included/deliverables/process/related case
    work/page.tsx + [slug]/page.tsx          # case index; detail = facts grid/challenge/approach/outcomes/quote
    insights/page.tsx + [slug]/page.tsx      # index; article body renderer (## → h2)
    about/page.tsx industries/page.tsx contact/page.tsx
    privacy/page.tsx terms/page.tsx          # article-body legal pages
    sitemap.ts robots.ts icon.svg not-found.tsx
  components/
    logo.tsx nav.tsx (client, mobile menu) footer.tsx
    ui.tsx                # Kicker, SectionHead, ArrowLink, ButtonLink, Stat
    ops-panel.tsx marquee.tsx cta.tsx contact-form.tsx (client, zod)
  lib/
    site.ts               # identity/contact/stats/partners/certifications
    services.ts           # Service[] + products[]
    cases.ts              # CaseStudy[] + clients[] + testimonials[]
    team.ts               # TeamMember[] + values[]
    posts.ts              # Post[] (body blocks, '##' prefix = h2)
scripts/shots.mjs         # Playwright: desktop+mobile screenshots → .shots/
```

**Rules for edits:** content ONLY in `src/lib/*`; all detail pages are data-driven (generateStaticParams). Contact form is mailto-based (no backend yet) — swap onSubmit for a server action when wiring email delivery. Team photos hotlink randomuser.me (remotePatterns in next.config.ts); replace with local files in `public/team/` when real photos exist.
