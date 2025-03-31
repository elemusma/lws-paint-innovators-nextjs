import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/footer";
import Navigation from "./components/nav";
// import OwlCarouselComponent from "./components/owlCarousel";
// import { default as Carousel } from "./components/reactCarousel";
// const OwlCarousel = dynamic(() => import("./components/owlCarousel"), {
//   ssr: false, // Disable server-side rendering
// });

import { Website } from "./components/globals";
import "./fonts/font-aspira/font-aspira.css";
import "./fonts/font-pontiac/font-pontiac.css";
import "./fonts/font-poppins/font-poppins.css";
import "./fonts/font-proxima-nova/font-proxima-nova.css";
import "./globals.css";
import "./styles/button.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/popup.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Trusted Commercial, Industrial, & Residential Painting Experts - Paint Innovators",
  description:
    "Professional painting services for residential and commercial properties in Arkansas, Oklahoma and Colorado.",
  openGraph: {
    title:
      "Trusted Commercial, Industrial, & Residential Painting Experts - Paint Innovators",
    description:
      "Professional painting services for residential and commercial properties in Arkansas, Oklahoma and Colorado.",
    url: `${Website}/`, // Replace with actual URL
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`,
        width: 1200,
        height: 630,
        alt: "Paint Innovators - Commercial and Industrial Painting Services in Arkansas, Oklahoma and Colorado",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navigation />
        </header>
        {/* <p>hello app/layout.tsx/64</p> */}
        {/* <div>
          <OwlCarouselHeader />
        </div> */}
        <div>{/* <OwlCarouselComponent /> */}</div>
        <div>{/* <Carousel /> */}</div>
        {children}
        <Footer />
        {/* <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
