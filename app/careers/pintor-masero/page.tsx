// import ContactForm from "../components/contactForm";
// import ContactFormPainterDrywallFinisher from "@/app/components/forms/ContactFormPainterDrywallFinisher";
"use client";
// import CareerSpanish from "@/app/components/forms/CareerSpanish";
import CareerEnglish from "@/app/components/forms/CareerEnglish";
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
        <div className="text-center md:w-3/4 w-full mx-auto pb-[50px]">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Pinto / Masero
          </h1>
          <h2 className="text-xl">Solicitud de empleo</h2>
          <p className="my-2 text-sm">
            Los pintores trabajan en obras diariamente. Están directamente
            involucrados en proyectos de pintura tanto residenciales como
            comerciales. Son detallistas, se enorgullecen de su trabajo y
            brindan experiencias extraordinarias a los clientes. Los
            instaladores de paneles de yeso fijan paneles prefabricados en el
            interior de las habitaciones, terminando o encintando las juntas
            para preparar las superficies para el acabado final.
          </p>
        </div>
        <CareerEnglish />
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
