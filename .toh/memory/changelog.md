# Changelog

## 2026-10-03 — Initial build (/toh-vibe)
- Scaffolded Next.js 16 + TS strict + Tailwind v4 + zod (hand-written configs, no create-next-app).
- Built 21 content routes, all SSG; `next build` green first try (Next 16.3.8, Turbopack).
- Smoke test: 23/23 routes correct (200s + 404 handling) via `next start` + curl.
- Visual QA: Playwright screenshots desktop 1440px + mobile 390px across 10 pages → approved, no defects fixed needed.
- Design: anti-AI-slop system (ink/paper/signal-red, Archivo+IBM Plex Mono, hairline grids, no gradients).
- Note: all business facts (team, clients, numbers, address, phone) are realistic placeholders pending user verification.
