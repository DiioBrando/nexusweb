import { Geist, Geist_Mono } from "next/font/google";
import AppProviders from "@/app/providers";
import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/widgets/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusWeb",
  description: "nexusweb - create by next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
      <AppProviders>
          <Header/>
          {children}
      </AppProviders>
      </body>
    </html>
  );
}
