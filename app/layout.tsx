import type { Metadata } from "next";
import localFont from "next/font/local";
import { assetPath, SITE_URL } from "@/lib/site-config";
import "./globals.css";

const inter = localFont({ src: "../public/assets/InterVariable.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Marilaura Alvarado Navarro | Project Manager & Business Analytics",
  description: "Turning complex ideas into meaningful outcomes. Explore Marilaura Alvarado Navarro’s work in project management, business analytics, and AI-driven delivery.",
  openGraph: {
    title: "Marilaura Alvarado Navarro — Clarity in complexity.",
    description: "Project management, business analytics, and AI. Connecting people, data, and delivery.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: { card: "summary", title: "Marilaura Alvarado Navarro | Project Manager" },
  robots: { index: true, follow: true },
  icons: { icon: assetPath("/favicon.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body>{children}</body></html>;
}
