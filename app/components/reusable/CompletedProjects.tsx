import SwiperCarouselProjects from "../../components/swiperCarouselProjects";
import ContentBlock from "../content-block";
import {
  CommercialProjectsImages,
  IndustrialProjectsImages,
  ResidentialProjectsImages,
} from "../globals";

export default function CompletedProjects() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-black text-white completed-projects py-[30px]"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-aspira-thin mb-4">COMPLETED PROJECTS</h2>

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
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={ResidentialProjectsImages}
            sliderId="completed-projects-residential"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            RESIDENTIAL
          </h2>
        </div>
      </ContentBlock>
    </>
  );
}
