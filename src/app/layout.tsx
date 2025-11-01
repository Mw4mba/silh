import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sustainable Engineering | Architecture & Structural Design",
  description: "We craft sustainable spaces that breathe with the planet. Sustainable architecture, structural engineering, and BIM-based workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Asimovian&family=Days+One&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-[#F5F5DC]`}
      >
        {children}
      </body>
    </html>
  );
}
