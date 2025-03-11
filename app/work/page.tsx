import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "../components/globals";
import CTA from "../components/reusable/cta";
import ProjectsWorkedOn from "../components/reusable/projects-worked-on";
import ServingTagline from "../components/reusable/serving-tagline";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";
import SwiperCarouselProjects from "../components/swiperCarouselProjects";

export default function Work() {
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
              src={"/services/Services-Wallpaper-Removal-Paint-Innovators.jpg"}
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
            Our Work
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <div className="pt-[50px]"></div>
      <ProjectsWorkedOn />

      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>

      <ContentBlock
        sectionClassName="bg-black text-white completed-projects py-[30px]"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-aspira-thin mb-4">COMPLETED PROJECTS</h2>
        <div className="relative swiper-carousel-container">
          <SwiperCarouselProjects
            slides={ResidentialProjectsImages}
            sliderId="completed-projects-residential"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            RESIDENTIAL
          </h2>
        </div>
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={CommercialProjectsImages}
            sliderId="completed-projects-commercial"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            COMMERCIAL
          </h2>
        </div>
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={IndustrialProjectsImages}
            sliderId="completed-projects-industrial"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            INDUSTRIAL
          </h2>
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
