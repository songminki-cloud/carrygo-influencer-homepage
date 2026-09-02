import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://songminki-cloud.github.io/carrygo-influencer-homepage/"),
  title: "CarryGo | Carry wears Seoul",
  description: "CarryGo is an AI K-fashion curator linking Carry's Instagram, Pinterest, and YouTube feeds.",
  openGraph: {
    title: "CarryGo | Carry wears Seoul",
    description: "K-fashion looks, styled by Carry and published across Instagram, Pinterest, and YouTube.",
    images: ["/images/carry-cafe-mirror.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
