import ContentBlock from "@/app/components/content-block";
import CompletedProjects from "@/app/components/reusable/CompletedProjects";
import IndustriesServed from "@/app/components/reusable/core-values";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ProjectsWorkedOn from "@/app/components/reusable/projects-worked-on";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import type { Metadata } from "next";
import Link from "next/link";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
  description: "Professional painting.",
  openGraph: {
    title: "Wall Paper Removal in Arkansas and Oklahoma - Professional Painter",
    description: "Professional painting.",
    url: `{Website}/wallpaper-removal`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: "/services/Services-Wallpaper-Removal.jpg", // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Wallpaper Removal Services",
      },
    ],
  },
};
export default function CommercialPainting() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px] bg-[url('/services/Services-Deck-Coating.jpg')] bg-fixed-custom bg-cover bg-center overflow-hidden"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            {/* <Image
              src={"/services/Services-Wallpaper-Removal.jpg"}
              alt="Wall paper removal"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            /> */}
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
            Deck Coating
          </h1>
          <h2 className="font-aspira-bold text-2xl text-shadow">
            Get the Job Done Right!
          </h2>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />

      {/* <div className="spacer"></div> */}
      <IndustriesServed />

      <ContentBlock
        sectionClassName="bg-white text-black"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <div className="divider"></div>
        <p className="text-gray-700 text-2xl pt-8 mb-4 font-aspira-bold">
          There are many reasons you should add deck coating to your outdoor
          deck. Safety is a major reason and also to protect the wood making it
          last longer.
        </p>
      </ContentBlock>

      <ProjectsWorkedOn />

      <ContentBlock
        sectionClassName="bg-white text-black pb-8"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <div className="divider"></div>
        <h2 className="text-4xl font-aspira-light pt-4">DECK COATING</h2>
      </ContentBlock>

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Residential-Painting-29.jpg"
        imageAlt="Wallpaper"
        overlayText="PREVENT SPLINTERS AND CRACKS"
        heading="Transform a Room"
        content="When you coat the wood, it helps keep the wood fibers from water penetration. The wood will remain dry even during the rainy season so deck coating will prevent splinters and cracks. Coatings protect you and your family from trips and falls, especially on decks around the pool. "
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      {/* </motion.div> */}
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Residential-Painting-28.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="PROTECT FROM UV RAYS"
        heading="Transform a Room"
        content="You can add texture to stairs so you and your loved ones can remain safe. A deck coating will not only give your deck a lovely makeover, but it will also protect if from UV rays, developing mold, and other damages caused by exterior elements. If you have a high traffic area, deck coating would add resilience for any heavy foot traffic."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/gallery/Interior-Exterior-Painting-34.jpg"
        imageAlt="Smooth &amp; Clean"
        overlayText="NON-SLIP COATINGS"
        heading="Transform a Room"
        content="No matter what your deck is made out of, from wood to concrete, there are non-slip coatings you can select from as well as an array of colors. You would be surprised about the great appeal a coating can give to your deck as well as value. There are many choices you have for textures and colors."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/gallery/Interior-Exterior-Painting-30.jpg"
        imageAlt="We Make It Easy"
        overlayText="ELEGANCE & DESIGN"
        heading="Transform a Room"
        content="You should consider the colors of your home when choosing the color of your deck coating since you probably do not want your colors to clash and the texture will depend on elegance and design of your deck."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <div className="spacer"></div>
      <SwiperCarouselNewService />
      <div className="spacer"></div>
      <CompletedProjects />
      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
