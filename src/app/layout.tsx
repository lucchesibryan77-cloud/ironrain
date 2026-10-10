import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Iron Rain SecOps Solutions — IT, Cybersecurity & Web Development in Albuquerque, NM",
    template: "%s — Iron Rain SecOps Solutions",
  },
  description:
    "Iron Rain SecOps Solutions provides managed IT, 24/7 security operations, compliance readiness (NIST, HIPAA, CMMC), and web development for small businesses across New Mexico. Albuquerque-based since 2017.",
  keywords: [
    "managed IT Albuquerque",
    "cybersecurity consulting New Mexico",
    "CMMC consultant Albuquerque",
    "HIPAA compliance IT",
    "web development Albuquerque",
    "small business IT support NM",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Iron Rain SecOps Solutions",
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  foundingDate: `${site.founded}`,
  description: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: ["Albuquerque NM", "Santa Fe NM", "Rio Rancho NM", "New Mexico", "Arizona", "Colorado", "Texas"],
  sameAs: [site.linkedin],
  knowsAbout: [
    "Managed IT Services",
    "Cybersecurity",
    "Security Operations",
    "CMMC Compliance",
    "HIPAA Compliance",
    "Web Development",
    "Web Design",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
