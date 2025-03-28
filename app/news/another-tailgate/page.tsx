import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import Sidebar from "@/app/components/reusable/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Patio Socials March - Building Connections - Paint Innovators",
  description:
    "We loved connecting with our community, building relationships, and learning how we can support everyone at Paint Innovators' Patio Socials this March.",
  openGraph: {
    title: "Patio Socials March - Building Connections - Paint Innovators",
    description:
      "We loved connecting with our community, building relationships, and learning how we can support everyone at Paint Innovators' Patio Socials this March.",
    url: `${Website}/news/another-tailgate`,
    type: "article",
    images: [
      {
        url: `${Website}/news/Tailgate-Time-01.jpg`,
        width: 1200,
        height: 630,
        alt: "Happy New Year",
      },
    ],
  },
};

export default function PatioSocialsMarch() {
  const images = [
    "/news/Tailgate-Time-01.jpg",
    "/news/Tailgate-Time-02.jpg",
    "/news/Tailgate-Time-03.jpg",
    "/news/Tailgate-Time-04.jpg",
    "/news/Tailgate-Time-05.jpg",
  ];

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
          <h1>Tailgate Time!</h1>
          <p>
            Calling all Paint Innovators employees, GCs, friends, family, and
            fans! Join us at Donald W Reynolds Stadium THIS MORNING as the
            Razorbacks take on the South Carolina Gamecocks. We&apos;ll have the
            tailgate set up and rocking by 9:00, and we&apos;ll keep it open
            through the end of the game. Join us for free breakfast and lunch,
            and let&apos;s cheer the Razorbacks to victory together!
          </p>

          <p>
            Our tailgate is set up in Lot 76 on Razorback Rd, just south of the
            Alumni house. See the second picture for a pin near the location.
          </p>

          <p>We hope to see you there!</p>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {images.map((src, i) => (
              <div key={i} className="relative w-full h-[200px]">
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>

          <Link href="/news" className="btn-main my-8">
            Go Back
          </Link>
        </div>
        <Sidebar />
      </ContentBlock>
    </>
  );
}
