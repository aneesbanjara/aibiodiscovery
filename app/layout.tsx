import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Poppins for main font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Lato for secondary font
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AI Bio Discovery",
  description: "AI Bio Discovery",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/officialLogo.ico",
    apple: "/officialLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
