import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clarachen.dev"),
  title: "Clara Chen — Researcher, Designer, Builder",
  description:
    "Clara Chen explores the intersection of mathematics, artificial intelligence, finance, art, and design.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Clara Chen",
    title: "Clara Chen — Researcher, Designer, Builder",
    description:
      "Exploring the intersection of mathematics, artificial intelligence, finance, art, and design.",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 908,
        alt: "Clara Chen — Researcher, Designer, Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clara Chen — Researcher, Designer, Builder",
    description:
      "Exploring the intersection of mathematics, artificial intelligence, finance, art, and design.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.variable} ${cormorant.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
