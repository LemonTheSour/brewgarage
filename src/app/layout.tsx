import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroPreloader from "@/components/layout/hero-preloader";
import { site, siteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/layout/structured-data";
import { khand } from "@/lib/fonts";

export const metadata: Metadata = {
  // Makes canonical URLs and share-image links absolute.
  metadataBase: siteUrl,
  ...pageMetadata({ description: site.description, path: "/" }),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e0e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU" className={khand.variable}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        {/* Hidden until focused: lets keyboard users jump past the navigation. */}
        <a
          href="#main"
          className="sr-only z-[70] rounded-sm bg-brand px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <Header />
        {/* Phone header is fixed (48px), so push content below it. */}
        <main id="main" tabIndex={-1} className="flex-1 pt-12 outline-none md:pt-0">
          {children}
        </main>
        <Footer />
        <HeroPreloader />
        <StructuredData />
      </body>
    </html>
  );
}
