export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  summary: string;
  included: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  relatedCase: string;
};

export const services: Service[] = [
  {
    slug: "managed-it",
    index: "01",
    name: "Managed IT Services",
    short:
      "Helpdesk, patching, Microsoft 365 and network administration — run as an operations discipline, not a ticket queue.",
    summary:
      "Most small businesses don't need a full-time IT hire. They need a team that keeps 15 to 150 seats patched, backed up, licensed, and supported — and answers the phone when something breaks. We run IT the way operations people run plants: standard builds, measured SLAs, and a named engineer who knows your environment.",
    included: [
      "Unlimited remote helpdesk, 8:00–18:00 MT, 15-minute response target",
      "Patch management and endpoint health reporting for every workstation and server",
      "Microsoft 365 and Google Workspace administration — tenants, licensing, mail flow",
      "Managed backup with quarterly restore tests (we prove restores, not just backups)",
      "Network and firewall management: SonicWall, Meraki, UniFi",
      "Vendor and procurement management — we argue with Dell and Comcast so you don't have to",
      "Quarterly business reviews with a written roadmap and budget forecast",
    ],
    deliverables: [
      "Documented network diagram and asset register from day one",
      "Written onboarding plan in the first two weeks",
      "Monthly service report: tickets, patch compliance, backup status",
      "Annual budget and hardware refresh plan",
    ],
    process: [
      { step: "Assess", detail: "Two-week discovery: every device, account, license, and vendor documented before we touch anything." },
      { step: "Stabilize", detail: "Backups verified, patching automated, admin accounts cleaned up, documentation handed to you — it belongs to you." },
      { step: "Operate", detail: "Day-to-day support with published SLAs and a named primary engineer." },
      { step: "Review", detail: "Quarterly roadmap sessions. You always know what we recommend next and what it costs." },
    ],
    relatedCase: "rio-grande-oral-surgery",
  },
  {
    slug: "cybersecurity",
    index: "02",
    name: "Security Operations",
    short:
      "24/7 monitoring, managed detection and response, phishing programs, and incident response — sized for companies without a security team.",
    summary:
      "Enterprise security tooling fails small businesses twice: once in the sticker price, and once in the staffing it assumes. Our security operations practice is built for the 20–200 person company — we run the watch floor so your office manager doesn't have to interpret EDR alerts at 10pm.",
    included: [
      "24/7/365 managed detection and response (RainWatch) across endpoints, identities, and email",
      "EDR deployment and tuning — SentinelOne and Huntress stacks",
      "Email security: DMARC/SPF/DKIM enforcement, advanced phishing filtering, banner rules",
      "Security awareness training with monthly phishing simulations and per-user reporting",
      "Vulnerability scanning and prioritized remediation lists — not 400-page CVE dumps",
      "Incident response retainer with a written playbook and a 1-hour remote response commitment",
      "Dark-web credential monitoring for all staff domains",
    ],
    deliverables: [
      "Incident response plan, tested annually with a tabletop exercise",
      "Monthly threat report in plain English — what we blocked, what it means, what changed",
      "Baseline risk assessment against the NIST Cybersecurity Framework",
      "Cyber-insurance application support (we fill out the questionnaires with you)",
    ],
    process: [
      { step: "Baseline", detail: "IronBaseline assessment: we score you against NIST CSF and hand you a 90-day priority plan." },
      { step: "Instrument", detail: "EDR, email security, and logging rolled out with zero-downtime scheduling." },
      { step: "Watch", detail: "Our SOC monitors around the clock. You get a monthly report and a phone call when it matters." },
      { step: "Respond", detail: "When something fires, we contain, eradicate, and document — with your insurance carrier looped in if needed." },
    ],
    relatedCase: "chamisa-legal-group",
  },
  {
    slug: "compliance-risk",
    index: "03",
    name: "Compliance & Risk",
    short:
      "NIST CSF, HIPAA, PCI DSS, and CMMC readiness — gap analysis, policies, evidence, and audit support without the Big Four invoice.",
    summary:
      "Compliance work is where small firms get quoted $80,000 by national consultancies and give up. We run focused readiness programs that produce the three things auditors actually ask for: current policies, working controls, and organized evidence.",
    included: [
      "Gap assessments against NIST CSF 2.0, HIPAA Security Rule, PCI DSS, and CMMC Level 1–2",
      "Policy and procedure drafting — real documents your staff can follow, not binder filler",
      "Evidence collection and organization for audits, assessments, and insurer renewals",
      "Risk register development and treatment plans with owners and dates",
      "Vendor risk reviews for your critical SaaS and suppliers",
      "Tabletop exercises and board/owner briefings",
      "Audit-day support: we sit in the room (or the Zoom) with you",
    ],
    deliverables: [
      "Written gap assessment with a prioritized, costed remediation roadmap",
      "Complete policy pack aligned to your chosen framework",
      "Evidence binder ready for assessor review",
      "Executive summary your leadership, board, or prime contractor can actually read",
    ],
    process: [
      { step: "Scope", detail: "We identify which framework actually applies to your contracts — not the one a vendor wants to sell you." },
      { step: "Gap", detail: "Two-to-four week assessment: interviews, technical validation, document review." },
      { step: "Remediate", detail: "We fix what's cheap and fast first, then plan the rest against your budget cycle." },
      { step: "Prove", detail: "Evidence organized, assessor supported, renewal calendar owned by us." },
    ],
    relatedCase: "high-desert-components",
  },
  {
    slug: "web-development",
    index: "04",
    name: "Web Development & Design",
    short:
      "Marketing sites, member platforms, and e-commerce — designed, built, hardened, and maintained by the same team that secures your network.",
    summary:
      "Your website is usually the first thing a customer, lender, or insurer sees. We build fast, credible sites on modern stacks — and because we're a security firm, hardening, patching, and backups are part of the build, not an upsell.",
    included: [
      "Marketing and brochure sites that load in under two seconds and read like a real company",
      "E-commerce and payment integration (Stripe, Square, Shopify) with PCI-aware configuration",
      "Web applications: portals, intake forms, scheduling, member directories",
      "Content management your office staff can actually use — training included",
      "Hosting, DNS, SSL, and domain management under one accountable roof",
      "Security hardening: WAF, form spam control, dependency patching, uptime monitoring",
      "Care plans with monthly updates, backups, and a same-business-day change window",
    ],
    deliverables: [
      "Design system and page designs approved before build starts",
      "A launched site with analytics, Search Console, and sitemap configured",
      "Admin training session and a written handover document",
      "30 days of post-launch fixes included in every build",
    ],
    process: [
      { step: "Discover", detail: "One working session on goals, content, and what 'success' means for the site — usually leads, not awards." },
      { step: "Design", detail: "Homepage and one interior page designed for approval. No surprise layouts at launch." },
      { step: "Build", detail: "Two-to-six week build depending on scope, with a staging link you can watch." },
      { step: "Run", detail: "Hosting, security, updates, and small changes under a flat monthly care plan." },
    ],
    relatedCase: "duke-city-commerce",
  },
];

export const products = [
  {
    code: "RW",
    name: "RainWatch MDR",
    kind: "24/7 Managed Detection & Response",
    price: "from $38 / endpoint / mo",
    blurb:
      "Our watch floor, your environment. EDR telemetry, identity monitoring, and email signals triaged by analysts around the clock — with containment actions taken before you're awake to read the alert.",
    points: ["SentinelOne + Huntress stack", "Identity & email signal coverage", "Monthly plain-English threat report"],
  },
  {
    code: "IB",
    name: "IronBaseline",
    kind: "Fixed-Fee Security Assessment",
    price: "$4,800 flat · under 50 seats",
    blurb:
      "A two-week, fixed-scope assessment against NIST CSF 2.0. You get a scored report, a 90-day priority roadmap, and documentation your insurer and customers will accept — no open-ended consulting meter.",
    points: ["NIST CSF 2.0 scored report", "90-day prioritized roadmap", "Insurance-ready documentation"],
  },
  {
    code: "SC",
    name: "StormCell IR Retainer",
    kind: "Incident Response Standby",
    price: "$2,500 / yr · 1-hr remote response",
    blurb:
      "When ransomware hits at 6:40 on a Friday, you call a number and a person who knows your environment answers. Guaranteed remote response inside one hour, pre-negotiated rates, and a playbook written before you need it.",
    points: ["1-hour remote response SLA", "Playbook & contacts written up front", "Carrier coordination included"],
  },
];
