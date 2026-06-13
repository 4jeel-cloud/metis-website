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
  title: "Metis — Design & Technology Studio",
  description:
    "We build the invisible infrastructure. A design & technology studio crafting products that feel inevitable.",
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23f9f6ee'/%3E%3Crect x='4' y='4' width='24' height='24' fill='%23ff0000'/%3E%3Crect x='8' y='8' width='16' height='16' fill='%23f9f6ee'/%3E%3Crect x='12' y='12' width='8' height='8' fill='%23ff0000'/%3E%3C/svg%3E",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <div className="grain" />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
