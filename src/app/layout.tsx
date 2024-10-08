import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Header from "./ui/home/header/header";
import Footer from "./ui/home/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DMR Arquitectura",
  description: "DMR Arquitectura 3D - Sitio Web Oficial",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon-base.png",
        href: "/images/icon-base.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon-base.png",
        href: "/images/icon-base.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
