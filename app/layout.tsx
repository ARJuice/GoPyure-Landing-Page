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

const BASE_URL = "https://gopyure.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GoPyure — Pure Probiotic Yogurt, Kerala",
    template: "%s | GoPyure",
  },
  description:
    "GoPyure makes fresh, preservative-free probiotic yogurts in Kerala — Mango, Blueberry, and Plain. Made from A2 dairy with live cultures. No artificial additives, cold-chain delivered.",
  keywords: [
    "probiotic yogurt Kerala",
    "organic yogurt India",
    "preservative free yogurt",
    "A2 milk yogurt",
    "GoPyure",
    "gut health yogurt",
    "fresh dairy Kerala",
    "mango yogurt",
    "blueberry yogurt",
    "healthy yogurt Thrissur",
    "clean label dairy",
    "live culture yogurt",
  ],
  authors: [{ name: "GoPyure Food Products" }],
  creator: "GoPyure Food Products",
  publisher: "GoPyure Food Products",
  category: "Food & Beverage",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "GoPyure — Pure Probiotic Yogurt, Kerala",
    description:
      "Fresh, preservative-free probiotic yogurts made from A2 dairy in Kerala. Mango, Blueberry & Plain — with live cultures, zero artificial additives.",
    url: BASE_URL,
    siteName: "GoPyure",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/hero-products.webp`,
        width: 1200,
        height: 630,
        alt: "GoPyure Mango, Blueberry and Plain Probiotic Yogurts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoPyure — Pure Probiotic Yogurt, Kerala",
    description:
      "Fresh, preservative-free probiotic yogurts made from A2 dairy. Gut-healthy, clean-label, Kerala made.",
    images: [`${BASE_URL}/hero-products.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─── Structured Data (JSON-LD) ─────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* 1. Organisation */
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "GoPyure Food Products",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/green%20logo%20-%20with%20tag%20line.svg`,
        caption: "GoPyure — The Goodness You Can Trust",
      },
      description:
        "GoPyure makes fresh, preservative-free probiotic yogurts in Kerala using A2 dairy and live probiotic cultures. No artificial additives, no preservatives.",
      email: "hello@gopyure.in",
      telephone: "+91-98765-43210",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Bldg No-12/175, Grama Panchayat, near Pooram Foods, West Vellanikara",
        addressLocality: "Madakkathara",
        addressRegion: "Kerala",
        postalCode: "680651",
        addressCountry: "IN",
      },
      sameAs: [
        "https://instagram.com/gopyure",
        "https://facebook.com/gopyure",
      ],
    },

    /* 2. WebSite (enables Sitelinks search box if eligible) */
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "GoPyure",
      description: "Pure probiotic yogurt made in Kerala, India.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
    },

    /* 3. Local Business (critical for Google Maps / local SEO) */
    {
      "@type": ["LocalBusiness", "FoodEstablishment"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: "GoPyure Food Products",
      image: `${BASE_URL}/hero-products.webp`,
      url: BASE_URL,
      telephone: "+91-98765-43210",
      email: "hello@gopyure.in",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Bldg No-12/175, Grama Panchayat, near Pooram Foods, West Vellanikara",
        addressLocality: "Madakkathara",
        addressRegion: "Kerala",
        postalCode: "680651",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "10.549543798934988",
        longitude: "76.25172577484439",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "10:00",
          closes: "16:00",
        },
      ],
      priceRange: "₹₹",
      servesCuisine: "Dairy",
      hasMap: "https://maps.app.goo.gl/2YUXEBkpa3ugVMZ36",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Bank Transfer",
    },

    /* 4. Product list (three yogurt SKUs) */
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/#products`,
      name: "GoPyure Probiotic Yogurt Range",
      description:
        "Fresh, preservative-free probiotic yogurts made from A2 dairy with live cultures.",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "GoPyure Mango Yogurt",
            description:
              "A smooth blend of signature probiotic yogurt and mango fruit preparation. Clean, refreshing, and naturally flavored. 100g, no preservatives.",
            image: `${BASE_URL}/Mango_Yogurt.webp`,
            brand: { "@type": "Brand", name: "GoPyure" },
            category: "Probiotic Yogurt",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              seller: { "@id": `${BASE_URL}/#organization` },
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "GoPyure Blueberry Yogurt",
            description:
              "Classic probiotic yogurt combined with blueberry fruit preparation. Smooth texture with a delicious berry taste. 100g, no preservatives.",
            image: `${BASE_URL}/Blueberry_Yogurt.webp`,
            brand: { "@type": "Brand", name: "GoPyure" },
            category: "Probiotic Yogurt",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              seller: { "@id": `${BASE_URL}/#organization` },
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Product",
            name: "GoPyure Plain Yogurt",
            description:
              "Pure, unsweetened probiotic yogurt made with organically sourced dairy and active live cultures. 100g, no preservatives, no additives.",
            image: `${BASE_URL}/Plain_Yogurt.webp`,
            brand: { "@type": "Brand", name: "GoPyure" },
            category: "Probiotic Yogurt",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              seller: { "@id": `${BASE_URL}/#organization` },
            },
          },
        },
      ],
    },

    /* 5. FAQPage (mirrors the FAQ accordion — great for rich results & GEO) */
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes GoPyure different from regular supermarket yogurt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GoPyure yogurts are made from A2 beta-casein dairy sourced from organic, grass-fed cows. We use zero preservatives, stabilisers, or synthetic additives. Every batch is freshly made and cold-chain delivered — so what you get is as close to homemade as a packaged product can be.",
          },
        },
        {
          "@type": "Question",
          name: "Are GoPyure products completely preservative-free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. GoPyure uses no chemical preservatives whatsoever. Natural freshness is maintained through strict cold-chain logistics and hygienic manufacturing. Our shelf life is shorter than commercial brands — and that's intentional.",
          },
        },
        {
          "@type": "Question",
          name: "What is A2 milk and why does it matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A2 milk comes from cows that produce only the A2 beta-casein protein, which many people find easier to digest compared to conventional A1 milk. GoPyure sources exclusively from A2 herds to ensure our yogurts are gentle on the stomach, especially for children and sensitive individuals.",
          },
        },
        {
          "@type": "Question",
          name: "How can I order GoPyure yogurt or find it near me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GoPyure currently operates through direct orders and select local stockists in Kerala. You can reach us via phone, WhatsApp, or email at hello@gopyure.in and we will guide you to the nearest available option or arrange home delivery where possible.",
          },
        },
        {
          "@type": "Question",
          name: "Does GoPyure offer bulk or wholesale orders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — GoPyure works with restaurants, cafés, and health stores. Please reach out directly via email with your requirements and we will arrange a tasting and supply discussion.",
          },
        },
        {
          "@type": "Question",
          name: "How should I store GoPyure yogurt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All GoPyure yogurts must be refrigerated at all times (2–6°C). Once opened, consume within 2 days. Do not freeze. The lack of preservatives means freshness depends on proper cold storage.",
          },
        },
      ],
    },
  ],
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
