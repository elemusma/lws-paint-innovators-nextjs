import Image from "next/image";
// import ContactForm from "../components/contactForm";
import ContentBlock from "../components/content-block";
import ContactFormRequestQuote from "../components/forms/ContactFormRequestQuote";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "../components/globals";
import Testimonials from "../components/reusable/Testimonials";
import SwiperCarouselNewService from "../components/swiperCarouselNewService";
import SwiperCarouselProjects from "../components/swiperCarouselProjects";

export default function Contact() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative py-[35px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative bg-[rgba(0,0,0,0.5)] pt-10 px-5"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/photos/Free-Estimate.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <div className="text-center text-white md:w-3/4 w-full mx-auto">
          <h1 className="text-4xl text-shadow font-aspira-thin uppercase">
            Get a Free Estimate
          </h1>
          <p>
            Fill out what you can below and a dedicated project estimator will
            be in touch with you shortly to discuss your commercial painting
            project or home painting needs.
          </p>
        </div>
        <ContactFormRequestQuote />
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
      <Testimonials />
      <div className="spacer"></div>
    </>
  );
}
