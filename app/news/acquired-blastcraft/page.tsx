import ContentBlock from "@/app/components/content-block";
import { Website } from "@/app/components/globals";
import Sidebar from "@/app/components/reusable/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Define metadata specific to this page
export const metadata: Metadata = {
  title:
    "Paint Innovators Acquires Blastcraft – Expanding Surface Preparation Excellence",
  description:
    "Paint Innovators proudly announces its August 2024 acquisition of Blastcraft. The merger unifies two trusted brands in industrial painting and abrasive blasting under one name, expanding services for hospitals, schools, and processing plants.",
  openGraph: {
    title:
      "Paint Innovators Acquires Blastcraft – Expanding Surface Preparation Excellence",
    description:
      "Paint Innovators proudly announces its August 2024 acquisition of Blastcraft. The merger unifies two trusted brands in industrial painting and abrasive blasting under one name, expanding services for hospitals, schools, and processing plants.",
    url: `${Website}/news/acquired-blastcraft`,
    type: "article",
    images: [
      {
        url: `${Website}/news/Blastcraft-Rodney-Barnes-Tadeo.jpg`,
        width: 1200,
        height: 630,
        alt: "Happy New Year",
      },
    ],
  },
};

export default function PatioSocialsMarch() {
  const images = [
    "/news/Blastcraft-Rodney-Barnes-Tadeo.jpg",
    "/news/Blastcraft-Our-Work-01.jpg",
    "/news/Blastcraft-Our-Work-04.jpg",
    "/news/Blastcraft-Truck-Improve.jpg",
    "/news/Blastcraft-Jackson-Hole-Wyoming-Mountains.jpg",
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
          <h1>Paint Innovators Acquired Blastcraft</h1>
          <p>
            <strong>Denver, CO</strong> - Paint Innovators, Inc., a leader in
            industrial painting and surface preparation, is excited to announce
            the acquisition of <strong>Blastcraft</strong> as of{" "}
            <strong>August 2024</strong>. This strategic move brings together
            two trusted names in the industry under a single, unified brand
            known for its commitment to quality, safety, and innovation.
          </p>

          <p>
            As part of the acquisition,{" "}
            <strong>Blastcraft&apos;s services will continue to operate</strong>{" "}
            with the same expertise and quality clients have come to expect, but
            under the <strong>Paint Innovators</strong> name. While the
            <strong>Blastcraft name will still appear</strong> in select areas,
            the company&apos;s main branding, communications, and future
            development will fall under the Paint Innovators identity.
          </p>
          <p>
            In addition to the branding update, clients and partners will notice
            website enhancements that reflect the company&apos;s broadened
            service structure and refined industry focus. The service categories
            now emphasize{" "}
            <strong>architectural coatings, abrasive blasting</strong> (formerly
            referred to as sandblasting), and maintenance, tailored for a range
            of sectors including <strong>hospitals, processing plants</strong>,
            and <strong>schools</strong>.
          </p>
          <p>
            The acquisition reinforces Paint Innovators&apos; mission to deliver
            best-in-class surface stripping, painting, and coating services
            using advanced wet and dry abrasive technologies across a wide
            variety of applications.
          </p>
          <p>
            For more information, please explore the updated services and
            industries section on our website, or contact our team directly with
            any questions.
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
