import CoreValuesBlock from "@/app/components/reusable/CoreValuesBlock";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../../components/content-block";

export default function ResidentialaintingProjects() {
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
              src={"/work/Paint-Innovators-NWA-Homes.jpg"}
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
          <h1 className="text-6xl uppercase font-aspira-light text-shadow">
            Residential Painting Projects
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            <span className="text-shadow">Interior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Exterior</span>{" "}
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Home</span>
            <span className="text-accent">&bull;</span>{" "}
            <span className="text-shadow">Shed</span>
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-wrap flex-col items-center"
        columnClassName="flex flex-wrap w-full"
      >
        <div className="w-full px-4 mb-4 relative">
          <Image
            src={"/gallery/Residential-Painting-01.jpg"}
            alt="Wall paper removal"
            className=""
            style={{}}
            width={2000}
            height={2000}
          />
        </div>
        <div className="w-1/3 px-4">
          <Image
            src={"/gallery/Residential-Painting-01.jpg"}
            alt="Wall paper removal"
            className=""
            style={{}}
            width={2000}
            height={2000}
          />
        </div>
        <div className="w-1/3 px-4">
          <Image
            src={"/gallery/Residential-Painting-02.jpg"}
            alt="Wall paper removal"
            className=""
            style={{}}
            width={2000}
            height={2000}
          />
        </div>
        <div className="w-1/3 px-4">
          <Image
            src={"/gallery/Residential-Painting-03.jpg"}
            alt="Wall paper removal"
            className=""
            style={{}}
            width={2000}
            height={2000}
          />
        </div>
      </ContentBlock>
      <CoreValuesBlock />
      <div className="spacer"></div>
    </>
  );
}
