import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clarachen.dev"),
  title: "Clara Chen — A quiet place for loud ideas",
  description:
    "Clara Chen's living index for work, notes, and ideas still finding their form.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Clara Chen",
    title: "Clara Chen — A quiet place for loud ideas",
    description:
      "A living index for work, notes, and ideas still finding their form.",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Clara Chen — A quiet place for loud ideas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clara Chen — A quiet place for loud ideas",
    description:
      "A living index for work, notes, and ideas still finding their form.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
