import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import Sidebar from "@/app/components/reusable/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Merry Christmas! | Paint Innovators",
  description:
    "Wishing you a Merry Christmas from all of us at Paint Innovators! Thank you for your support this year. We hope your holiday season is filled with joy, love, and color.",
  openGraph: {
    title: "Merry Christmas! | Paint Innovators",
    description:
      "Wishing you a Merry Christmas from all of us at Paint Innovators! Thank you for your support this year. We hope your holiday season is filled with joy, love, and color.",
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
          <h1>Happy Thanksgiving</h1>
          <p>
            Happy Thanksgiving from the Paint Innovators team! We have lots to
            be thankful for here, and are excited to spend some time celebrating
            with our families. Here&apos;s to wishing you and your family a
            Happy Thanksgiving.
          </p>
          <Image
            src="/news/Happy-Thanksgiving-2022.jpg"
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
