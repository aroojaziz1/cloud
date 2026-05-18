import type { Metadata } from "next";
import { Jost, EB_Garamond } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "../components/WhatsAppButton";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

// Next.js Font Optimization
const jost = Jost({ 
  subsets: ["latin"], 
  variable: "--font-jost",
  display: 'swap' 
});

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-garamond",
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "Arooj Aziz | Defined by Detail",
  description: "Experience the pinnacle of Pakistani craftsmanship with Arooj Aziz. Specialized in Bespoke Bridal ensembles and Luxury Pret, where heritage meets modern elegance.",
  keywords: "Arooj Aziz, Luxury Couture, Pakistani Bridal, Bespoke Fashion, Luxury Pret, Wedding Dresses Pakistan, Designer Formals",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${ebGaramond.variable}`}>
      <body className="font-jost">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}