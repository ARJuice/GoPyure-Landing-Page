import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Konkhmer+Sleokchher&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          backgroundColor: "#F9F1E6",
          color: "#282827",
        }}
      >
        {children}
      </body>
    </html>
  );
}
