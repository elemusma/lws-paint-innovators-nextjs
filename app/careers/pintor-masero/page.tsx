import CareerEnglish from "@/app/components/forms/CareerEnglish";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import type { Metadata } from "next";
import ContentBlock from "../../components/content-block";
import { Website } from "../../components/globals";
import SwiperCarouselNewService from "../../components/swiperCarouselNewService";
export const metadata: Metadata = {
  title: "Pintor / Masero - Solicitud de Empleo - Paint Innovators",
  description:
    "Únete a nuestro equipo como Pintor / Masero en Paint Innovators. Trabaja en proyectos de pintura residenciales y comerciales. ¡Aplica hoy y marca la diferencia.",
  openGraph: {
    title: "Pintor / Masero - Solicitud de Empleo - Paint Innovators",
    description:
      "Únete a nuestro equipo como Pintor / Masero en Paint Innovators. Trabaja en proyectos de pintura residenciales y comerciales. ¡Aplica hoy y marca la diferencia.",
    url: `${Website}/careers/pintor-masero`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/home/Paint-Innovators-2025-01.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Pintor / Masero - Solicitud de Empleo - Paint Innovators",
      },
    ],
  },
};
export default function CareersPintorMasero() {
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
            Pintor / Masero
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
      <CompletedProjects />
      <div className="spacer"></div>
    </>
  );
}
