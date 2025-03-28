import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import Sidebar from "@/app/components/reusable/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Happy New Year! | Paint Innovators",
  description:
    "Happy New Year from all of us at Paint Innovators! We hope you had a great holiday season. Here's to an even brighter and more colorful 2023!",
  openGraph: {
    title: "Happy New Year! | Paint Innovators",
    description:
      "Happy New Year from all of us at Paint Innovators! We hope you had a great holiday season. Here's to an even brighter and more colorful 2023!",
    url: `${Website}/news/happy-new-year-2023`,
    type: "article",
    images: [
      {
        url: `${Website}/news/Happy-New-Year-2023.jpg`,
        width: 1200,
        height: 630,
        alt: "Happy New Year",
      },
    ],
  },
};

export default function HappyNewYear() {
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
          <h1>Happy New Year! (Bye 2022)</h1>
          <p>
            Happy New Year from all of us at Paint Innovators! We hope you all
            had a wonderful holiday season and are ready to tackle the new year
            with us. Thank you for your continued support and loyalty.
            Here&apos;s to an even brighter and more colorful 2023! 🎉🎊
          </p>
          <Image
            src="/news/Happy-New-Year-2023.jpg"
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
