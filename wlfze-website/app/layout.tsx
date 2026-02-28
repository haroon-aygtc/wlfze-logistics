import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WLFZE - World Link Logistics Services FZE | Dubai Logistics",
  description: "World Link Logistics Services FZE - Premium freight forwarding, air cargo, sea freight, land transport, warehousing, and courier services based in DAFZA, Dubai.",
  keywords: "logistics Dubai, freight forwarding UAE, air freight, sea freight, warehousing DAFZA, courier services Dubai",
  openGraph: {
    title: "WLFZE - World Link Logistics Services FZE",
    description: "Connecting Dubai to the World - Precision Logistics, Every Mile",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-inter bg-neutral-light text-neutral-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
