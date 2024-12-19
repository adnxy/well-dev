import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "ModUI - Development & Design Inspiration and UI Resources",
  description:
    "ModUI is a UI/UX Design & Frontend Development Inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('children is', children)

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
