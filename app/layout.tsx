import React from "react";
import type { Metadata } from "next";
import {siteMetadata} from "@/lib/config";
import {Zalando_Sans_SemiExpanded} from "next/font/google";
import {Zalando_Sans} from "next/font/google";
import {Source_Code_Pro} from "next/font/google";
import "./globals.css";

// Zalando Sans SemiExpanded for headers
const headingFont = Zalando_Sans_SemiExpanded({
  variable: "--heading-font",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
});

const bodyFont = Zalando_Sans({
  variable: "--body-font",
  weight: ["400", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
})

const codeFont = Source_Code_Pro({
  variable: "--code-font",
  weight: ["200", "400", "700"],
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({children} : Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
    <head>
        <title>{siteMetadata.title}</title>
    </head>
        <body className={`${headingFont.variable} ${bodyFont.variable} ${codeFont.variable}`}>
        {children}
        <footer>By: Basil Asay&copy;</footer>
        </body>

    </html>
  );
}
