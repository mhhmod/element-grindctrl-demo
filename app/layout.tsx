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
  title: "Element Real Estate — Find Your Element",
  description:
    "Marassi to Soul to West Cairo to Dubai — through the consultant who knows your compound. An independent digital concept by GrindCTRL.",
  metadataBase: new URL("https://element.grindctrl.cloud"),
  openGraph: {
    title: "Element Real Estate — Find Your Element",
    description:
      "Coast to Cairo to Dubai. One network, one consultant who knows your compound.",
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
