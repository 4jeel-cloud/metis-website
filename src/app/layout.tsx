import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Metis — Open-Source Business Software",
  description:
    "ERP, CRM, POS, and custom business software. Open-source solutions for SMEs and enterprises.",
  icons: [{ rel: "icon", url: "black-font.png", type: "image/png" }],
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`} style={{ colorScheme: "light" }}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){document.documentElement.style.colorScheme="light";try{document.querySelector('meta[name="color-scheme"]')||document.head.insertAdjacentHTML('beforeend','<meta name="color-scheme" content="light">')}catch(e){}})()` }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <div className="grain" />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
