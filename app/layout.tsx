import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/footer";
import { Website } from "./components/globals";
import Navigation from "./components/nav";
import Analytics from "./components/reusable/GoogleAnalytics";
import HiringBanner from "./components/reusable/HiringBanner";
import "./fonts/font-aspira/font-aspira.css";
import "./fonts/font-pontiac/font-pontiac.css";
import "./fonts/font-poppins/font-poppins.css";

// import "./fonts/font-proxima-nova/font-proxima-nova.css";

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
  metadataBase: new URL("https://paintinnovators.com"),
  title:
    "Trusted Commercial, Industrial, & Residential Painting Experts - Paint Innovators",
  description:
    "Professional painting services for residential and commercial properties in Arkansas, Oklahoma, Colorado, Kansas and Missouri.",
  openGraph: {
    title:
      "Trusted Commercial, Industrial, & Residential Painting Experts - Paint Innovators",
    description:
      "Professional painting services for residential and commercial properties in Arkansas, Oklahoma, Colorado, Kansas and Missouri.",
    url: `${Website}/`, // Replace with actual URL
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`,
        width: 1200,
        height: 630,
        alt: "Paint Innovators - Commercial and Industrial Painting Services in Arkansas, Oklahoma, Colorado, Kansas and Missouri",
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
    <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTHJ4NT6');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-PTHJ4NT6"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    ></iframe>
  </noscript>
        <HiringBanner />
        <header>
          <Navigation />
        </header>
        {children}
        <Footer />
        <Analytics />
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8E7G8J49WF"
          strategy="beforeInteractive"
        />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8E7G8J49WF');
  `}
        </Script> */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
