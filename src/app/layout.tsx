import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./images/CODINGAASHRAM-preview-dark.png"
import "./images/CODINGAASHRAM-preview-light.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "codingaashram",
  description: "one stop solution for placement prep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen top-0 fixed z-10">
          <Header />
        </div>
        <div className="my-28">
          {children}
        </div>
        <div className="w-screen fixed bottom-0 left-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
