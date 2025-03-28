import ContentBlock from "@/app/components/content-block";
import Sidebar from "@/app/components/reusable/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function PatioSocialsMarch() {
  const images = [
    "/news/Patio-Socials-March-01.jpg",
    "/news/Patio-Socials-March-02.jpg",
    "/news/Patio-Socials-March-03.jpg",
    "/news/Patio-Socials-March-04.jpg",
  ];

  return (
    <>
      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto p-10"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-wrap"
      >
        <div className="lg:w-3/4 w-full lg:pr-8">
          {/* <div className="divider"></div> */}
          <h1>Patio Socials March</h1>
          <p>
            Our team had the pleasure of attending{" "}
            <a
              href="https://www.instagram.com/patiocommunity/"
              target="_blank"
              className="text-accent"
            >
              @patiocommunity
            </a>{" "}
            Patio Socials March event. We loved connecting with our community,
            building relationships, and learning more about how we can support
            our community.
          </p>

          <p>
            Huge thanks to{" "}
            <a
              href="https://www.instagram.com/patiocommunity/"
              target="_blank"
              className="text-accent"
            >
              @patiocommunity
            </a>{" "}
            for the opportunity and{" "}
            <a
              href="https://www.instagram.com/thehubnwa/"
              target="_blank"
              className="text-accent"
            >
              @thehubnwa
            </a>{" "}
            for hosting.
          </p>

          <p>
            We&apos;re proud to serve the NWA community with top-quality
            commercial / residential painting solutions. Contact us today for a
            free, no-obligation estimate for your next project!
          </p>

          <p>
            📲:{" "}
            <Link href="tel:+1479-347-7521" className="text-accent">
              479.347.7521
            </Link>
          </p>
          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
            {images.map((src, i) => (
              <div key={i} className="relative w-full h-[300px]">
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
          <p className="text-gray-700">
            #nwapaint #commericalpainting #residentialpainting #nwacommunity
            #localbuisness #nwa
          </p>

          <Link href="/news" className="btn-main mb-8">
            Go Back
          </Link>
        </div>
        <Sidebar />
      </ContentBlock>
    </>
  );
}
