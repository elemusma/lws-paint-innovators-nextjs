import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import Sidebar from "@/app/components/reusable/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Thank You Veterans | Paint Innovators",
  description:
    "Honoring all veterans for their sacrifice, bravery, and service. Thank you for setting an inspiring example. Happy Veterans Day from Paint Innovators.",
  openGraph: {
    title: "Thank You Veterans | Paint Innovators",
    description:
      "Honoring all veterans for their sacrifice, bravery, and service. Thank you for setting an inspiring example. Happy Veterans Day from Paint Innovators.",
    url: `${Website}/news/thank-you-veterans-2022`,
    type: "article",
    images: [
      {
        url: `${Website}/news/Thank-You-Veterans.jpg`,
        width: 1200,
        height: 630,
        alt: "Happy New Year",
      },
    ],
  },
};

export default function HappyThanksgiving2022() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto lg:px-0 p-10"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-wrap"
      >
        <div className="lg:w-3/4 w-full lg:pr-8">
          {/* <div className="divider"></div> */}
          <h1>Thank You Veterans</h1>
          <p>
            To all veterans of all branches: Thank you for your sacrifice, your
            bravery, and the example you set for us all. To all those who have
            served, and those who continue to serve… Happy Veterans Day!
          </p>
          <Image
            src="/news/Thank-You-Veterans.jpg"
            alt="Happy New Year"
            width={500}
            height={500}
          />

          <Link href="/news" className="btn-main my-8">
            Go Back
          </Link>
        </div>
        <Sidebar />
      </ContentBlock>
    </>
  );
}
