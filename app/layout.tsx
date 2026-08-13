import type { Metadata } from "next";
import "@fontsource/bodoni-moda/latin-400.css";
import "@fontsource/bodoni-moda/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clarachen.dev"),
  title: "Clara Chen — Researcher, Designer, Builder",
  description:
    "Clara Chen explores the intersection of mathematics, artificial intelligence, finance, art, and design.",
  icons: {
    icon: "/favicon.svg",
  },
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
      <body>{children}</body>
    </html>
  );
}
