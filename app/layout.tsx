import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"]
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Find Your Element — A GrindCTRL Concept for Element Real Estate",
  description:
    "An art-directed outreach concept reimagining Element Real Estate: North Coast, New Cairo, Sheikh Zayed and Dubai through one expert consultant network. Independent demo by GrindCTRL.",
  metadataBase: new URL("https://element.grindctrl.cloud"),
  openGraph: {
    title: "Find Your Element — Element Real Estate, re-art-directed",
    description:
      "Coast to Cairo to Dubai. One network, one consultant who knows your compound. Concept demo by GrindCTRL.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#f6f1e8",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
