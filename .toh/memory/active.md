# Active Work

## Last completed: /toh-vibe — full marketing site (2026-10-03)
- Built complete 21-route Next.js 16 site for Iron Rain SecOps Solutions (IT/cybersecurity/web consulting, Albuquerque NM).
- Status: DONE — `npm run build` green, all 23 routes smoke-tested 200/404-correct, visual pass via Playwright screenshots (`.shots/`) approved.

## Next steps (if user returns)
1. Swap placeholder facts: phone `(505) 487-2114`, address, team names/photos (randomuser.me placeholders), client names, stats (`src/lib/*`).
2. Wire contact form to a real backend (currently mailto + zod validation) — e.g. Resend/Formspree server action.
3. Deploy to Vercel; set `site.url` already points to `ironrainsecops.com` → update if domain differs.
4. Optional: real OG image (`app/opengraph-image.tsx` via next/og).
