export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  size: string;
  location: string;
  services: string[];
  headline: string;
  summary: string;
  challenge: string;
  approach: { phase: string; detail: string }[];
  outcomes: { value: string; label: string }[];
  quote: { text: string; name: string; title: string };
  year: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "rio-grande-oral-surgery",
    client: "Rio Grande Oral Surgery",
    industry: "Healthcare / Dental",
    size: "34 staff · 2 locations",
    location: "Albuquerque & Rio Rancho, NM",
    services: ["Managed IT", "Security Operations", "HIPAA Compliance"],
    headline: "Ransomware contained in 22 minutes — zero patient data lost, zero ransom paid.",
    summary:
      "A two-location oral surgery practice running legacy imaging software and shared logins. We rebuilt their IT operations, then proved it worked the night a phishing-driven ransomware attempt hit a front-desk workstation.",
    challenge:
      "The practice ran on a server installed in 2014, shared Windows logins for imaging workstations, and backups nobody had ever test-restored. HIPAA documentation was a binder last opened in 2019. Then, at 19:12 on a Tuesday, a scheduling coordinator opened an attachment labeled 'insurance_preauth.pdf.exe'.",
    approach: [
      { phase: "Contain", detail: "RainWatch EDR isolated the workstation off the network 22 minutes after execution — before lateral movement. Our on-call analyst confirmed scope by 19:50." },
      { phase: "Recover", detail: "Workstation reimaged from a clean standard build overnight. Front desk operated normally the next morning on a loaner unit." },
      { phase: "Rebuild", detail: "Six-month program: named accounts everywhere, imaging server migrated, tested nightly backups, MFA on all remote access." },
      { phase: "Document", detail: "Full HIPAA Security Rule risk analysis, updated policies, and an incident report the practice's cyber insurer accepted without follow-up questions." },
    ],
    outcomes: [
      { value: "22 min", label: "Detection to containment" },
      { value: "0 records", label: "Patient data accessed or lost" },
      { value: "$0", label: "Ransom, downtime, or breach-notification cost" },
      { value: "100%", label: "Staff on named accounts + MFA" },
    ],
    quote: {
      text: "Our old IT guy wrote passwords on a whiteboard. Iron Rain wrote an incident report our insurance company accepted the same week. That's the difference.",
      name: "Dr. Elena Vasquez, DDS",
      title: "Practice Owner",
    },
    year: "2025",
  },
  {
    slug: "high-desert-components",
    client: "High Desert Components",
    industry: "Precision Manufacturing",
    size: "85 employees · 1 plant",
    location: "Albuquerque, NM",
    services: ["Compliance & Risk", "Security Operations"],
    headline: "CMMC Level 2 readiness in nine months — and a defense subcontract that required it.",
    summary:
      "A machine shop doing aerospace work found the words 'CMMC Level 2' in a prime contractor's flow-down clauses. We took them from a standing start to assessment-ready — and they won the work.",
    challenge:
      "High Desert makes flight-hardware components. Winning a multi-year subcontract required demonstrable CMMC Level 2 progress: 110 practices across access control, incident response, and system integrity. Their IT was one overworked generalist and a part-time break/fix vendor. The gap assessment found 58 practices unmet.",
    approach: [
      { phase: "Scope", detail: "Mapped exactly where controlled unclassified information lived — then shrank that enclave from 'the whole network' to 14 hardened endpoints." },
      { phase: "Build", detail: "Segmented enclave network, Managed M365 GCC-High adjacent workflows, FIPS-validated encryption for data at rest, and a documentation system assessors recognize." },
      { phase: "Drill", detail: "Quarterly tabletop exercises with the plant manager and ownership. Incident response plan tested twice before the assessor ever called." },
      { phase: "Prove", detail: "Evidence binder with mapped artifacts for all 110 practices, plus a staffed SSP ownership model so it survives our departure." },
    ],
    outcomes: [
      { value: "58 → 0", label: "Unmet CMMC practices at mock assessment" },
      { value: "9 mo", label: "Kickoff to assessment-ready" },
      { value: "$1.9M", label: "Subcontract won requiring CMMC L2" },
      { value: "62%", label: "Lower cost than national-firm quote" },
    ],
    quote: {
      text: "The national firms quoted us six figures and a two-year timeline. Iron Rain did it in nine months and taught our people to run it ourselves.",
      name: "Greg Sandoval",
      title: "VP Operations",
    },
    year: "2024",
  },
  {
    slug: "chamisa-legal-group",
    client: "Chamisa Legal Group",
    industry: "Legal Services",
    size: "19 attorneys & staff",
    location: "Santa Fe, NM",
    services: ["Security Operations", "Managed IT"],
    headline: "Phishing click rate from 14% to 1.8% — and a wire-fraud attempt stopped at the mailbox.",
    summary:
      "A litigation firm handling settlement trusts was getting spear-phished weekly. We rebuilt email security end to end and trained the humans — measurably.",
    challenge:
      "Law firms hold client money in trust, which makes them wire-fraud targets. Chamisa's Microsoft 365 tenant had default settings, no DMARC enforcement, and attorneys traveling on hotel Wi-Fi with unencrypted laptops. A spoofed 'title company' email nearly moved $214,000 before a paralegal got suspicious.",
    approach: [
      { phase: "Lock the mailbox", detail: "DMARC enforced at p=reject, external-sender banners, attachment sandboxing, and impossible-travel sign-in alerts across the tenant." },
      { phase: "Lock the endpoints", detail: "Full-disk encryption, conditional access policies, and EDR on every laptop — including the partners', especially the partners'." },
      { phase: "Train the humans", detail: "Monthly simulated phishing with per-person reporting and a 15-minute micro-training for anyone who clicks." },
      { phase: "Verify the money", detail: "Wrote an out-of-band payment-verification policy: no wire instruction changes by email, ever. The next spoof died on arrival." },
    ],
    outcomes: [
      { value: "14% → 1.8%", label: "Simulated phishing click rate, 6 months" },
      { value: "$214K", label: "Wire fraud attempt blocked by policy" },
      { value: "100%", label: "Laptops encrypted + EDR covered" },
      { value: "4.2/5", label: "Staff satisfaction with new IT support" },
    ],
    quote: {
      text: "They didn't sell us fear. They showed us a click-rate graph every month until the number behaved. Our malpractice carrier noticed at renewal.",
      name: "Margaret Okafor",
      title: "Managing Partner",
    },
    year: "2025",
  },
  {
    slug: "duke-city-commerce",
    client: "Duke City Commerce Association",
    industry: "Economic Development",
    size: "6 staff · 400 member businesses",
    location: "Albuquerque, NM",
    services: ["Web Development", "Hosting & Care Plan"],
    headline: "A member platform rebuild that lifted qualified inquiries 38% in one quarter.",
    summary:
      "Their 2016-era site was losing members and embarrassing staff at events. We rebuilt it as a fast, searchable member platform — with a care plan so it stays that way.",
    challenge:
    "The association's old WordPress site took 11 seconds to load on mobile, hadn't been patched in two years (we counted 41 vulnerable plugins), and the member directory was a PDF. Staff spent six hours a week answering directory questions by phone. Event registration required mailing a check.",
    approach: [
      { phase: "Discover", detail: "Two working sessions with staff and members: the directory and events were the product; everything else was noise." },
      { phase: "Design", detail: "A fast, civic-looking design system — searchable directory, self-serve member profiles, online dues and event payment." },
      { phase: "Build", detail: "Six-week build on a modern stack with Stripe dues collection and a CMS the staff actually updates. Staging link from week one." },
      { phase: "Run", detail: "Hardened hosting, nightly backups, uptime monitoring, and a monthly care plan with same-business-day changes." },
    ],
    outcomes: [
      { value: "+38%", label: "Qualified membership inquiries, first quarter" },
      { value: "0.9s", label: "Mobile page load (was 11.2s)" },
      { value: "6 hrs/wk", label: "Staff phone time handed back" },
      { value: "18 mo", label: "Zero downtime, zero incidents on care plan" },
    ],
    quote: {
      text: "Our board treasurer approved the invoice in one meeting because the proposal had a price, a timeline, and a maintenance plan — not an hourly meter.",
      name: "Renee Yazzie",
      title: "Executive Director",
    },
    year: "2023",
  },
];

export const clients = [
  "Rio Grande Oral Surgery",
  "High Desert Components",
  "Chamisa Legal Group",
  "Cibola Credit Union",
  "Mesa Verde BioSciences",
  "Duke City Roofing",
  "Turquoise Trail Outfitters",
  "Sandia Peak Physical Therapy",
  "Adobe Flour Foods",
  "Route 66 RV Network",
];

export const testimonials = [
  {
    text: "Iron Rain is the first IT provider that has ever handed us documentation we own, with our name on it. When our landlord asked for our disaster recovery plan, we emailed a PDF in four minutes.",
    name: "Tom Begay",
    title: "Owner",
    org: "Duke City Roofing",
  },
  {
    text: "Our credit union examiners commented on the quality of our vendor-management evidence. We just showed them the binder Iron Rain maintains for us.",
    name: "Lisa Henderson",
    title: "CFO",
    org: "Cibola Credit Union",
  },
  {
    text: "They answer the phone. I don't know what else to tell you. Something breaks at 7:55 on a Monday and a person who knows our office answers the phone.",
    name: "Dr. Sarah Kim",
    title: "Clinical Director",
    org: "Sandia Peak Physical Therapy",
  },
];
