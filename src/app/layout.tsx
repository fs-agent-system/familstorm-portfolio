import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./tokens.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Familstorm — AI-Driven Development",
  description:
    "Enterprise Software & Complex Systems Engineered via Multi-Agent AI Pipelines",
  openGraph: {
    title: "Familstorm — AI-Driven Development",
    description:
      "Enterprise Software & Complex Systems Engineered via Multi-Agent AI Pipelines",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Familstorm — AI-Driven Development",
    description:
      "Enterprise Software & Complex Systems Engineered via Multi-Agent AI Pipelines",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
