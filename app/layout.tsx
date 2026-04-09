import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import JsonLd from "@/components/seo/JsonLd";
import { BASE_URL, ORG_DESCRIPTION, ORG_SHORT } from "@/lib/constants";

// Self-hosts Inter — zero external DNS requests, CSP-safe
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Kreisjugendfeuerwehr Starnberg`,
    template: `%s | ${ORG_SHORT}`,
  },
  description: ORG_DESCRIPTION,
  keywords: [
    "Jugendfeuerwehr",
    "Starnberg",
    "Feuerwehr",
    "Bayern",
    "Jugendpokal",
    "Kinderfeuerwehr",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: `Kreisjugendfeuerwehr Starnberg`,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? "";

  return (
    <html lang="de" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd nonce={nonce} />
      </body>
    </html>
  );
}
