import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/lib/site";
import { khand } from "@/lib/fonts";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={khand.variable}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Header />
        {/* Phone header is fixed (48px), so push content below it. */}
        <main className="flex-1 pt-12 md:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
