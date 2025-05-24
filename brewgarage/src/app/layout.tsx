"use client";

import "./globals.css";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("../../components/navbar"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicNavbar />
        {children}
      </body>
    </html>
  );
}
