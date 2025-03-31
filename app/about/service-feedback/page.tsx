import ContentBlock from "@/app/components/content-block";
import ContactFormServiceFeedback from "@/app/components/forms/ContactFormServiceFeedback";
import { Website } from "@/app/components/globals";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title:
    "Service Feedback - Share Your Experience & Suggestions - Paint Innovators",
  description:
    "We value your feedback! Share your experience with Paint Innovators and help us improve. Submit your comments and suggestions about our services today - Paint Innovators.",
  openGraph: {
    title:
      "Service Feedback - Share Your Experience & Suggestions - Paint Innovators",
    description:
      "We value your feedback! Share your experience with Paint Innovators and help us improve. Submit your comments and suggestions about our services today - Paint Innovators.",
    url: `${Website}/about/service-feedback`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-06.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Service Feedback - Share Your Experience & Suggestions - Paint Innovators",
      },
    ],
  },
};
export default function ServiceFeedback() {
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
              src={"/home/Paint-Innovators-2025-06.jpg"}
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
            Service Feedback
          </h1>
          <p className="text-shadow">
            Use the form below to send us your comments or suggestions regarding
            the work we completed for you or the process leading up to the
            project. We read all feedback carefully, but please note that we
            cannot respond to the comments you submit.
          </p>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      {/* <div className="spacer"></div> */}

      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-5"
      >
        <div className="text-center md:w-3/4 w-full mx-auto pb-[50px]"></div>
        <ContactFormServiceFeedback />
      </ContentBlock>
      <div className="spacer"></div>
    </>
  );
}
