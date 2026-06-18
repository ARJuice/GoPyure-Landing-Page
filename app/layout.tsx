import type { Metadata } from "next";
import "./globals.css";
import { Konkhmer_Sleokchher, Hanken_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const konkhmer = Konkhmer_Sleokchher({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GoPyure — The Goodness You Can Trust",
  description:
    "GoPyure delivers pure, preservative-free organic dairy products made with care. Discover our range of fresh yogurts — Mango, Blueberry, and Plain.",
  keywords: "organic yogurt, pure dairy, preservative free, GoPyure, healthy food",
  openGraph: {
    title: "GoPyure — The Goodness You Can Trust",
    description: "Pure organic dairy, made with care. Fresh yogurts with zero preservatives.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gopyure.com/#organization",
      "name": "GoPyure",
      "url": "https://gopyure.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://gopyure.com/#logo",
        "url": "https://gopyure.com/green%20logo%20-%20Icon%20Only.svg",
        "caption": "GoPyure Logo"
      },
      "description": "GoPyure delivers pure, preservative-free organic dairy products made with care. Fresh, healthy yogurts made with active live probiotic cultures."
    },
    {
      "@type": "WebSite",
      "@id": "https://gopyure.com/#website",
      "url": "https://gopyure.com",
      "name": "GoPyure",
      "publisher": {
        "@id": "https://gopyure.com/#organization"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gopyure.com/#localbusiness",
      "name": "GoPyure Dairy",
      "image": "https://gopyure.com/Mango_Yogurt.webp",
      "url": "https://gopyure.com",
      "telephone": "+91-9999999999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      },
      "priceRange": "$$"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", konkhmer.variable, hanken.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
