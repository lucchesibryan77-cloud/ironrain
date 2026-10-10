# Decisions

## 2026-10-03 — D1: No create-next-app
Hand-scaffolded configs for speed + no interactive prompts on Windows.

## 2026-10-03 — D2: Tailwind v4 CSS-first (no tailwind.config)
Tokens in globals.css @theme; migrating to v3 config would require rewriting tokens.

## 2026-10-03 — D3: mailto contact form (no backend)
Static-only hosting readiness; zod validates before opening email client. Defer real delivery (Resend/Formspree) until user picks an email provider.

## 2026-10-03 — D4: randomuser.me hotlinked portraits
Chosen over AI-slop-style abstract avatars; duotone CSS treatment unifies them. MUST be replaced with real/local photos before production launch (next.config remotePatterns already scoped to that one host).

## 2026-10-03 — D5: Signal red single-accent, no gradients
Explicit anti-slop requirement from user: "bite the style of real businesses". Reference set: Palantir / Arctic Wolf / regional MSP editorial style.
