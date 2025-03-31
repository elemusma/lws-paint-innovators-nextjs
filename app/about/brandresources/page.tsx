import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../../components/content-block";
import ContactFormPermission from "../../components/forms/ContactFormPermission";
import Logo from "../../components/logo";
import CTA from "../../components/reusable/cta";
import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
export const metadata: Metadata = {
  title:
    "Brand Resources - Guidelines, Assets, and Permission Requests - Paint Innovators",
  description:
    "Access Paint Innovators' brand guidelines, download logos, wordmarks, and other assets, and submit permission requests for usage. Stay aligned with our branding standards.",
  openGraph: {
    title:
      "Brand Resources - Guidelines, Assets, and Permission Requests - Paint Innovators",
    description:
      "Access Paint Innovators' brand guidelines, download logos, wordmarks, and other assets, and submit permission requests for usage. Stay aligned with our branding standards.",
    url: `${Website}/about/brandresources`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-12.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Brand Resources - Guidelines, Assets, and Permission Requests - Paint Innovators",
      },
    ],
  },
};
export default function BrandResources() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-2025-12.jpg"}
              alt="Wall paper removal"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            <div
              className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
              }}
            ></div>
          </>
        }
      >
        <div className="relative">
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold text-shadow">
            Brand Resources
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            We Get the Job Done Right!
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-5"
      >
        <div className="text-center md:w-3/4 w-full mx-auto pb-[50px]">
          <p className="my-2 text-3xl">
            Browse our{" "}
            <Link
              href="/assets/Paint-Innovators-Inc-Branding.pdf"
              target="_blank"
              className="text-accent"
            >
              guidelines
            </Link>
            , find the{" "}
            <Link
              href="/assets/Paint-Innovators-Logo.zip"
              target="_blank"
              className="text-accent"
            >
              assets
            </Link>{" "}
            you need, download files and submit a request for permission.
          </p>
        </div>
        <h2 className="text-3xl">Guidelines:</h2>
        <p>
          ANYONE USING PAINT INNOVATORS&apos; ASSETS SHOULD ONLY USE THE LOGOS
          AND SCREENSHOTS FOUND ON OUR BRAND RESOURCES SITE AND FOLLOW THESE
          GUIDELINES. ONLY THOSE PLANNING TO USE PAINT INNOVATORS&apos; ASSETS
          IN ANY BROADCAST, RADIO, OUT-OF-HOME ADVERTISING OR PRINT LARGER THAN
          8.5 X 11 INCHES (A4 SIZE) NEED TO REQUEST PERMISSION. REQUESTS MUST BE
          IN ENGLISH AND INCLUDE A MOCK OF HOW YOU&apos;RE PLANNING TO USE THE
          INSTAGRAM LOGO.
        </p>
        <h3 className="text-xl">
          I. BALANCE THE PAINT INNOVATORS BRAND WITH YOUR BRAND
        </h3>
        <p>Avoid representing the Paint Innovators brand in a way that:</p>
        <ul className="list-disc pl-10">
          <li>
            Makes the Paint Innovators brand the most distinctive or prominent
            feature.
          </li>
          <li>Implies partnership, sponsorship, or endorsement.</li>
          <li>
            Puts the brand in a negative context as part of a script of
            storyline. You must comply with our Terms of Use and Community
            Guidelines.
          </li>
        </ul>
        <h3 className="text-xl">
          II. KEEP THE WORDS PAINT INNOVATORS CONSISTENT
        </h3>
        <ul className="list-disc pl-10">
          <li>
            Keep the letter &quot;P&quot; in Paint and the letter &quot;I&quot;
            in Innovators capitalized and in the same font size and style as the
            content surrounding it.
          </li>
          <li>
            If you offer an app, website, product, or service that uses the
            Paint Innovators APIs of its otherwise compatible with or related to
            Paint Innovators, you may only use Paint Innovators to say that your
            app is &quot;for Paint Innovators&quot; or that the name of your
            campaign is on &quot;Paint Innovators&quot; in a descriptive manner.
          </li>
          <li>
            Do not modify, abbreviate or translate the word Paint Innovators to
            a different language or by using non-English characters, or use any
            of our logos to replace it.
          </li>
          <li>
            Do not combine any part of the Paint Innovators brand with a company
            name, other trademarks, or generic terms.
          </li>
        </ul>
        <h3 className="text-xl">
          III. DISTANCE PAINT INNOVATORS FROM OTHER PAINTING/ DRYWALL FINISHING
          CONTRACTORS
        </h3>
        <ul className="list-disc pl-10">
          <li>
            Paint Innovators may be mentioned in television commercials alone or
            in relation to authorized partner companies.
          </li>
          <li>
            Do not mention other painting/drywall contractors in the same place
            as Paint Innovators unless in regards to a general call to action.
          </li>
          <li>
            If you create a hashtag that uses the word Paint Innovators, it
            shouldn&apos;t try to acquire or enforce rights over the hashtag or
            brand IP.
          </li>
        </ul>
      </ContentBlock>
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-5"
      >
        <div className="text-center pb-8">
          <h2 className="text-3xl">
            Submit Requests for Permission to Use Assets
          </h2>
        </div>
        <ContactFormPermission />
      </ContentBlock>
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName=""
        columnClassName=""
      >
        <div className="text-center pb-8">
          <h2 className="text-3xl">Assets and Branding:</h2>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-1/2">
            <Logo />
          </div>
          <div className="block">
            <Link
              href="assets/Paint-Innovators-Logo.zip"
              target="_blank"
              className="text-4xl text-accent block py-4"
            >
              Color Logo
            </Link>
            <Link
              href="assets/Paint-Innovators-Wordmark.zip"
              target="_blank"
              className="text-4xl text-accent block py-4"
            >
              Wordmark
            </Link>
            <Link
              href="assets/Paint-Innovators-Inc-Branding.pdf"
              target="_blank"
              className="text-4xl text-accent block py-4"
            >
              Branding
            </Link>
          </div>
        </div>
      </ContentBlock>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
