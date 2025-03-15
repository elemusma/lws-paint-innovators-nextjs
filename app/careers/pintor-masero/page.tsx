// import ContactForm from "../components/contactForm";
// import ContactFormPainterDrywallFinisher from "@/app/components/forms/ContactFormPainterDrywallFinisher";
"use client";
import CareerPintorMasero from "@/app/components/forms/CareerPintorMasero";
import ContentBlock from "../../components/content-block";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "../../components/globals";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
import SwiperCarouselProjects from "../../components/swiperCarouselProjects";

export default function Contact() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative py-[35px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative pt-10 px-5"
      >
        <div className="text-center md:w-3/4 w-full mx-auto">
          <h1 className="text-4xl font-aspira-thin uppercase">Pinto Masero</h1>
          <h2 className="text-2xl">Solicitud de empleo</h2>
          <p className="mb-2">
            Es importante que NO ACTUALICE la página web mientras completa esta
            solicitud de empleo.
          </p>
        </div>
        <CareerPintorMasero />
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
