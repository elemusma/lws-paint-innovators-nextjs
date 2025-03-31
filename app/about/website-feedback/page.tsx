import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormWebsiteFeedback from "../../components/forms/ContactFormWebsiteFeedback";

export const metadata: Metadata = {
  title:
    "Website Feedback - Share Your Thoughts & Report Issues - Paint Innovators",
  description:
    "Have feedback about our website? Let us know your thoughts or report any issues you encountered. We value your input to improve your experience - Paint Innovators.",
  openGraph: {
    title:
      "Website Feedback - Share Your Thoughts & Report Issues - Paint Innovators",
    description:
      "Have feedback about our website? Let us know your thoughts or report any issues you encountered. We value your input to improve your experience - Paint Innovators.",
    url: `${Website}/about/website-feedback`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-Commercial-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Website Feedback - Share Your Thoughts & Report Issues - Paint Innovators",
      },
    ],
  },
};
export default function WebsiteFeedback() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-Commercial-01.jpg"}
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
            Website Feedback
          </h1>
          <p className="text-shadow">
            Use the form below to send us your comments or report any problems
            you experienced finding information on our website. We read all
            feedback carefully, but please note that we cannot respond to the
            comments you submit.
          </p>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative bg-[rgba(0,0,0,0.5)] pt-10 px-5"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-2025-04.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <h2 className="text-4xl font-aspira-thin uppercase text-center text-white">
          Have a Question?
        </h2>
        <ContactFormWebsiteFeedback />
      </ContentBlock>
      <div className="spacer"></div>
    </>
  );
}
