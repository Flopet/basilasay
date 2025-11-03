import React from "react";
import type { Metadata } from "next";
import {config} from "@/app/CONFIG";
import {Zalando_Sans_SemiExpanded} from "next/font/google";
import "./globals.css";




// Zalando Sans SemiExpanded for headers
// ** Ignore unused constant warning **
const headerFont = Zalando_Sans_SemiExpanded({
  variable: "--header-font",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.site_title,
  description: config.site_description,
};

export default function RootLayout({children} : Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
