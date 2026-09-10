import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { Footer } from "@/components/footer"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#050914",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://greybridgeattorney.com"),
  title: {
    default: "Greybridge Attorneys | Legal Practitioners & Advisors in Abuja",
    template: "%s | Greybridge Attorneys",
  },
  description:
    "Premier legal practitioners and advisors based in Abuja, Nigeria. Specializing in Corporate & Commercial Law, Tech & AI Law, Superior Court Litigation, Intellectual Property, Real Estate, and Private Advisory.",
  applicationName: "Greybridge Attorneys",
  authors: [{ name: "Greybridge Attorneys", url: "https://greybridgeattorney.com" }],
  creator: "Greybridge Attorneys",
  publisher: "Greybridge Attorneys",
  category: "Legal Services",
  keywords: [
    "Greybridge Attorneys",
    "Law Firm Abuja",
    "Lawyers in Abuja",
    "Legal practitioners Abuja",
    "Corporate law firm Nigeria",
    "Commercial law lawyers Abuja",
    "Tech and AI law Nigeria",
    "Superior court litigation Abuja",
    "Dispute resolution Nigeria",
    "Intellectual property lawyers Nigeria",
    "Real estate lawyers Abuja",
    "Land title verification Abuja",
    "CAC company incorporation Nigeria",
    "Abdulsamad Opeyemi Ishola",
    "Fatiu Bolakale Lawal",
    "Kamaldeen Abdulhameed",
    "Comfort Oluwabiyi",
  ],
  alternates: {
    canonical: "https://greybridgeattorney.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://greybridgeattorney.com",
    siteName: "Greybridge Attorneys",
    title: "Greybridge Attorneys | Legal Practitioners & Corporate Counsel in Abuja",
    description:
      "Bridging the gap between complex legal challenges and clear, accessible outcomes for businesses, startups, and individuals in Abuja & beyond.",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Greybridge Attorneys - Premier Legal Counsel in Abuja & Beyond",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greybridge Attorneys | Legal Practitioners & Corporate Counsel in Abuja",
    description:
      "Premier legal practitioners and advisors in Abuja. Corporate Law, Tech & AI Law, Superior Court Litigation, Real Estate, and IP.",
    images: ["/images/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

// Schema.org LegalService Structured Data for Google Rich Snippets
const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Greybridge Attorneys",
  alternateName: "Greybridge Legal Practitioners & Advisors",
  url: "https://greybridgeattorney.com",
  logo: "https://greybridgeattorney.com/images/greybridge-logo-horizontal.png",
  image: "https://greybridgeattorney.com/images/og-preview.png",
  description:
    "Greybridge Attorneys provides premier legal counsel and representation in Corporate Law, Tech & AI Law, Superior Court Litigation, Real Estate, and Intellectual Property in Abuja, Nigeria.",
  telephone: "+2348107814879",
  email: "info@greybridgeattorney.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressRegion: "Federal Capital Territory",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.0765",
    longitude: "7.3986",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
  founder: [
    {
      "@type": "Person",
      name: "Abdulsamad Opeyemi Ishola, Esq.",
      jobTitle: "Managing Partner",
    },
    {
      "@type": "Person",
      name: "Fatiu Bolakale Lawal, Esq.",
      jobTitle: "Partner",
    },
    {
      "@type": "Person",
      name: "Kamaldeen Abdulhameed, Esq.",
      jobTitle: "Partner",
    },
    {
      "@type": "Person",
      name: "Comfort Oluwabiyi, Esq.",
      jobTitle: "Associate",
    },
  ],
  sameAs: ["https://wa.me/2348107814879"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
