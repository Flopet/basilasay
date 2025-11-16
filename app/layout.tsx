import React from "react";
import type { Metadata } from "next";
import {siteMetadata} from "@/lib/config";
import {Zalando_Sans_SemiExpanded} from "next/font/google";
import {Zalando_Sans} from "next/font/google";
import "./globals.css";

// Zalando Sans SemiExpanded for headers
// ** Ignore unused constant warning **
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const headingFont = Zalando_Sans_SemiExpanded({
  variable: "--heading-font",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bodyFont = Zalando_Sans({
  variable: "--body-font",
  weight: ["400", "700"],
  subsets: ["latin"]
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
        <body>
        {children}
        <footer>By Basil Asay&copy;</footer>
        </body>

    </html>
  );
}
