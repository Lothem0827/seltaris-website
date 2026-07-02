import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { DevInspector } from "@/components/dev/DevInspector";
import { RevealRouteMemory } from "@/components/providers/RevealRouteMemory";
import { ScrollToHash } from "@/components/providers/ScrollToHash";
import { BfcacheRevealRestore } from "@/components/providers/BfcacheRevealRestore";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mintGrotesk = localFont({
  src: "../fonts/MintGrotesk-Bold.woff2",
  variable: "--font-mint-grotesk",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: "Seltaris | Bulk Data Enhancement",
  description:
    "High quality, secure, and powerful data quality platform for formatting, cleansing, repairing, and verifying your datasets.",
  icons: {
    icon: "/seltaris-logo.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${mintGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <BfcacheRevealRestore />
          <RevealRouteMemory />
          <ScrollToHash />
          {process.env.NODE_ENV === "development" ? <DevInspector /> : null}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
