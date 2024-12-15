import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";


export const metadata: Metadata = {
  title: "Goalpredict - AI powered football predictions",
  description:
    "Goalpredict is a AI driven platform for football analysis and predictions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body className="layout-background">
        <Navbar />
        <main className="layout-background"> {children}</main>
        <Footer />
      </body>
    </html>
    </ThemeProvider>
  );
}
