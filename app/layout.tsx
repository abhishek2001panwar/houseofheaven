import type { Metadata } from "next";
import { Cormorant_Garamond  ,Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/sections/footer";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "House of Heaven",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Footer /></body>
    </html>
  );
}
