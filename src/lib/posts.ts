export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "dbir-20-person-business",
    title: "What the latest breach data actually means for a 20-person company",
    date: "2026-02-18",
    author: "Dana Whitfield",
    category: "Security Operations",
    readTime: "6 min",
    excerpt:
      "Every spring the big breach reports land and every vendor uses them to sell fear. Here's the three findings that matter if you run a small business — and the four controls that address them.",
    body: [
      "Every spring, the major breach reports come out, and every security vendor in your inbox converts them into the same sentence: 'Attacks are up 400%, buy our platform.' If you run a 20-person company, most of that data is not about you. Nation-state espionage and zero-day exploits make the headlines; they are not what closes small businesses.",
      "##What actually hits small firms",
      "Strip the reports down and three findings do most of the damage at our scale. First: stolen credentials remain the front door — not sophisticated malware, just passwords that worked somewhere else. Second: business email compromise — fraudulent invoices, changed routing numbers, spoofed vendors — costs small firms more than ransomware does, because there's nothing to restore from. The money is simply gone. Third: unpatched edge devices — the firewall, the VPN concentrator, the remote access tool — account for a disproportionate share of small-business ransomware entry points.",
      "##The four controls that answer them",
      "You don't need a platform. You need four boring things done completely: phishing-resistant MFA on email and remote access (not SMS — app or key based); a payment verification policy that treats any emailed banking change as hostile until confirmed by phone at a number you already had; automatic patching for your firewall and remote access tools on a schedule someone owns; and tested backups — restored, not scheduled. We say this to every client: a restore you have never run is a rumor.",
      "##The takeaway",
      "The firms we see get hurt are not the ones with small budgets. They're the ones where nobody owned the boring controls. Budget matters less than assignment. Put a name — a human's name — next to MFA, patching, backups, and payment verification, and you've addressed the majority of what the breach data says is coming for you.",
    ],
  },
  {
    slug: "cmmc-survival-guide-new-mexico",
    title: "CMMC is here: a survival guide for New Mexico manufacturers",
    date: "2025-11-04",
    author: "Marcus Hale",
    category: "Compliance",
    readTime: "8 min",
    excerpt:
      "Level 2 language is showing up in flow-down clauses across the state. Here's the realistic path — and the three mistakes that stall New Mexico shops for a year or more.",
    body: [
      "If you machine, print, coat, wire, or assemble anything that ends up in a defense program, you've probably already seen the letters CMMC in a flow-down clause. The defense industrial base in New Mexico — hundreds of small shops feeding the labs and the primes — is being asked to demonstrate 110 security practices most shops have never written down. Here's the path we run, and where it goes wrong.",
      "##First: figure out what level you actually need",
      "Most small manufacturers need Level 2. Some only handle FCI and need Level 1. The difference in cost is enormous, and we've seen shops spend a year preparing for Level 2 when their contracts only carried FCI clauses. Read the flow-downs, call your prime's compliance office, and get the answer in writing before you scope anything.",
      "##Mistake one: boiling the ocean",
      "The single biggest money-saver is enclave scoping. If controlled unclassified information touches your whole network, your whole network needs all 110 practices. If it lives on 14 hardened endpoints behind a segmented boundary, only those 14 do. Enclave design is usually the difference between a six-figure program and a five-figure one.",
      "##Mistake two: documentation that doesn't match reality",
      "Assessors interview your people. If the System Security Plan says access is reviewed quarterly and your shop foreman has never heard of an access review, that's a finding. Write policies your staff actually follow, then follow them for a few months before anyone assesses you. Evidence with dates beats prose every time.",
      "##Mistake three: waiting for the clause to say 'shall be certified'",
      "The realistic timeline from standing start to assessment-ready is nine to twelve months for a typical 50–100 person shop — we did it in nine for one Albuquerque manufacturer, and that was brisk. If CMMC shows up in a contract you must win next quarter, the honest answer is that you're late. Start on the gap assessment now, before the work requires it.",
      "##What 'good' looks like",
      "A scoped enclave, 110 practices mapped to dated evidence, an incident response plan that's been tabletop-tested at least once, and an owner inside your company for every practice. Do that and the assessment is a formality. Skip it and the assessment is a very expensive list of homework.",
    ],
  },
  {
    slug: "invoice-fraud-one-email",
    title: "The $4,500 invoice fraud that started with one email",
    date: "2025-08-12",
    author: "Dana Whitfield",
    category: "Threat Stories",
    readTime: "5 min",
    excerpt:
      "A real pattern we've stopped three times in the last year at client sites — anonymized, but step for step. It works because nothing in it looks like hacking.",
    body: [
      "This is an anonymized composite of three nearly identical cases we handled in the last twelve months. No malware. No brute force. Nothing tripped an alarm, because nothing was technically an attack until the money moved.",
      "##Step one: the read",
      "It starts with a compromised mailbox somewhere in your vendor's world — not yours. The attacker doesn't send anything at first. They read. They learn how your supplier formats invoices, who signs them, what your recurring amounts look like, and when your bookkeeper pays. In one case the attacker watched silently for five weeks.",
      "##Step two: the nudge",
      "Then comes one email, from the vendor's real address, replying in a real thread: 'Quick note — our bank is transitioning accounts, please use the attached updated remittance details for this month's invoice.' The attachment is a PDF with the right logo, the right invoice numbers, and a new routing number. Nothing in your email security flags it, because it came from a legitimate account in an existing conversation.",
      "##Step three: the cleanup",
      "Your bookkeeper pays the next invoice — say $4,500 — to the new account. The attacker mails the vendor from their own mailbox apologizing for a 'bank error' and asking them to reissue details, which muddies the timeline. You find out ten days later when the real vendor asks where the money is.",
      "##Why the policy beats the filter",
      "Every client we run now has the same rule: any change to payment instructions, no matter how credible the thread, gets verified out-of-band — a phone call to a number already on file, never a number from the email itself. One client caught a $214,000 wire this way last year. The control costs nothing and takes ninety seconds. The fraud works precisely because nothing in it looks like hacking.",
    ],
  },
  {
    slug: "uptime-not-it-support",
    title: "Why we stopped selling 'IT support' and started selling uptime",
    date: "2024-05-20",
    author: "Marcus Hale",
    category: "Operations",
    readTime: "4 min",
    excerpt:
      "Break/fix made us reactive and made our clients anxious. The managed model changed what we measure, what we report, and what clients actually pay for.",
    body: [
      "In our first year we sold what every small IT shop sells: call us when it breaks, we'll fix it fast, pay by the hour. It was honest work and a bad arrangement for everyone. The client's incentive was to never call us; ours, implicitly, was for things to break. Nobody planned anything, everything was an emergency, and every invoice arrived at the worst possible moment.",
      "##The shift",
      "We moved clients to a flat per-seat model where we own the outcome: your systems are patched, backed up, monitored, and supported for a known monthly number. That changed what we measure. Break/fix shops measure response time to failures. We measure the absence of failures — patch compliance, backup success, uptime, ticket volume trends. When the metrics move the wrong way, that's our cost, not the client's.",
      "##What clients actually buy",
      "After eight years the honest answer is: predictability. The office manager stops dreading the IT invoice. The owner gets a quarterly roadmap instead of a quarterly surprise. Insurance renewals go faster because the answers already exist in writing. The support tickets still happen — they just stop being the point.",
      "##The part nobody puts in the brochure",
      "This model only works if you fire clients who won't let you do it. We decline engagements where the owner wants us to keep a dying server alive on tape and hope. Hope-based IT is the one product we don't sell, because we're the ones who get the 2am call when it fails — and so do you.",
    ],
  },
];
