import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Def Bezos | Corporate & Event DJ — Portland",
  description:
    "Def Bezos is Portland-based DJ and house music specialist Keagen Edwards, bringing high-energy, crowd-driven performances to corporate events, brand activations, and private entertainment.",
  openGraph: {
    title: "Def Bezos | Corporate & Event DJ — Portland",
    description:
      "Festival-caliber DJ energy for corporate events, brand activations, and private entertainment. Credits include Amazon, Ring, Adidas, EA Sports, Breakaway SF, and more.",
    url: "https://defbezosdj.com",
    siteName: "Def Bezos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Def Bezos | Corporate & Event DJ — Portland",
    description:
      "Festival-caliber DJ energy for corporate events, brand activations, and private entertainment.",
  },
  metadataBase: new URL("https://defbezosdj.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
