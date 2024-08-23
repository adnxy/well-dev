import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Applysnap - Outsource your job applications",
  description:
    "Applysnap is a platform that allows you to outsource your job applications to a virtual assistant. We apply to jobs across the web and schedule interviews for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout-background">
        <Navbar />
        <main className="layout-background"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
