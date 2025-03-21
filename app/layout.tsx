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
    "Experienced Professional Painter in Arkansas and Oklahoma | Commercial and Residential Painting",
  description: "Professional painting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Professional web and software engineering services for iOS, Android, and web applications. Tailored solutions for businesses seeking high-quality, efficient app development from Latino Web Studio."
        />
        <meta property="og:image" content="/assets/Latino-Web-Studio.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        /> */}
      </head>
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
