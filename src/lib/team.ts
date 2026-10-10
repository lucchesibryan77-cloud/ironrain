export type TeamMember = {
  name: string;
  role: string;
  since: number;
  certs: string[];
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Marcus Hale",
    role: "Founder & Principal Consultant",
    since: 2017,
    certs: ["GIAC GCIH", "CMMC RP"],
    bio: "Nine years running IT operations for national-lab contractors before founding Iron Rain. Writes the incident playbooks, chairs the quarterly reviews, and still takes the Tuesday on-call.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dana Whitfield",
    role: "Director of Security Operations",
    since: 2018,
    certs: ["CISSP", "CompTIA CySA+"],
    bio: "Leads the RainWatch SOC. Came up through Air Force cyber defense at Kirtland, then a decade in enterprise SOC work she describes as 'too far from the people it protected.'",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Priya Raman",
    role: "Lead Infrastructure Engineer",
    since: 2019,
    certs: ["Microsoft 365 Certified", "Azure Administrator"],
    bio: "Owns every standard build, backup job, and migration runbook. If your network diagram is beautiful and your restore test passes, that was Priya.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Tomás Herrera",
    role: "Web Practice Lead",
    since: 2020,
    certs: ["Google UX Design"],
    bio: "Designs and builds the sites. Born in Albuquerque, UNM grad, and stubbornly opposed to websites that take eleven seconds to load on a phone in a Nob Hill parking lot.",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Angela Yazzie",
    role: "Client Success Manager",
    since: 2021,
    certs: ["ITIL 4 Foundation"],
    bio: "The voice on the quarterly business reviews. Translates between engineers and owners, keeps the roadmap honest, and knows every client's office manager by name.",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Joey Kowalski",
    role: "SOC Analyst",
    since: 2023,
    certs: ["CompTIA Security+"],
    bio: "First eyes on the overnight shift. CNM Ingenuity cybersecurity program graduate — we hired him out of a cohort we helped teach, and the phishing stats improved.",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

export const values = [
  {
    name: "You own your documentation",
    detail:
      "Network diagrams, admin credentials, runbooks — written down, current, and in your hands from day one. If you ever leave us, your next provider inherits order, not archaeology.",
  },
  {
    name: "Plain English or it didn't happen",
    detail:
      "Every report, proposal, and invoice is written for the owner of a 40-person company, not a CISSP study group. If we can't explain the risk plainly, we don't bill for it.",
  },
  {
    name: "Tested beats promised",
    detail:
      "Backups get restored, playbooks get tabletop-tested, and restore times get measured. A control we haven't verified is a rumor, and we don't put rumors in writing.",
  },
  {
    name: "Local by design",
    detail:
      "Our clients are within an hour's drive and our on-site response is measured in minutes, not shipping labels. When it matters, somebody who knows your office walks through your door.",
  },
];
