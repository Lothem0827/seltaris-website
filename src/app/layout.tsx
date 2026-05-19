import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const mintGrotesk = localFont({
  src: "../lib/fonts/MintGrotesk-Bold.woff",
  variable: "--font-mint-grotesk",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataTools Seltaris | Bulk Data Enhancement Tool",
  description:
    "High quality, secure, and powerful data quality platform for formatting, cleansing, repairing, and verifying your datasets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${mintGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-charcoal-700">
        {children}
      </body>
    </html>
  );
}
