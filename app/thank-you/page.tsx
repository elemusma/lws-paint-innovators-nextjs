import Image from "next/image";
// import ContactForm from "../components/contactForm";
import ContentBlock from "../components/content-block";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "../components/globals";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";
import SwiperCarouselProjects from "../components/swiperCarouselProjects";

export default function ThankYou() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative"
        containerClassName="w-full absolute top-1/2 left-0 w-full transform -translate-y-1/2"
        rowClassName="flex flex-col justify-center items-center"
        columnClassName="w-full text-center text-white relative bg-[rgba(0,0,0,0.5)] py-5 px-2"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
              src={"/team/Team-Photo.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "top" }}
              fill
            /> */}
            <Image
              src={"/team/Team.jpg"}
              alt="Contact Paint Innovators"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "top" }}
              width={2000}
              height={2000}
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <h1 className="text-4xl font-aspira-thin uppercase">Thank You</h1>
        <p className="px-[50px]">
          Thank you for reaching out to us at Paint Innovators. We will reach
          back out to you within 24 - 48 hours.
        </p>
      </ContentBlock>
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
    </>
  );
}
