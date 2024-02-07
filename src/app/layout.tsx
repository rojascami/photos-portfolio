import '../styles/styles.css'
import type { Metadata } from "next";
import { Inter, Roboto  } from "next/font/google";
import Header from "@/components/header";
import MobileHeader from "@/components/mobile-header";
import SideNav from "@/components/side-nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto  = Roboto({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Camila Rojas Fotografía",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${roboto.className}`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1 flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen" >
        <Header />
        <MobileHeader />
          {children}
          </main>
        </div>
        </body>
    </html>
  );
}
