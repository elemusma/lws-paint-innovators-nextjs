import ContentBlock from "@/app/components/content-block";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import CTA from "@/app/components/reusable/cta";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import Image from "next/image";
import Link from "next/link";

export default function Reviews() {
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
              src={"/home/Paint-Innovators-2025-07.jpg"}
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
          <h1 className="text-6xl uppercase font-proxima-bold text-shadow">
            Reviews
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <CTA />
      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
    </>
  );
}
