import type { Metadata } from "next";
import "@fontsource/bodoni-moda/latin-400.css";
import "@fontsource/bodoni-moda/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clarachen.dev"),
  title: "Clara Chen",
  description: "Clara Chen",
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
    title: "Clara Chen",
    description: "Clara Chen",
  },
  twitter: {
    card: "summary",
    title: "Clara Chen",
    description: "Clara Chen",
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
