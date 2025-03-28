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

export default function MerryChristmas2022() {
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
          <h1>Merry Christmas</h1>
          <p>
            Merry Christmas to all of our valued customers! We couldn&apos;t
            have made it through this year without your support and loyalty.
            Thank you for choosing Paint Innovators for all of your painting
            needs. We hope you have a wonderful holiday season surrounded by
            loved ones. Here&apos;s to a bright and colorful new year! ❤️⁠
          </p>
          <Image
            src="/news/Merry-Christmas-2022.jpg"
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
