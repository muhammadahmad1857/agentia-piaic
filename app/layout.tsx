import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/common/ScrollToTop";
import SplashScreen from "@/components/common/SplashScreen";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentia World | Automate everything",
  description: "Where AI agents learn, think and evolve together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}   antialiased bg-[#0a0a0a] text-white`}
      >
        <SplashScreen />
        <main className="min-h-screen container mx-auto px-4">
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
