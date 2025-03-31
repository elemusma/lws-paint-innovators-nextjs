import ContentBlock from "@/app/components/content-block";
import { Company, Website } from "@/app/components/globals";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import ValueColumn from "@/app/components/reusable/ValueColumn";
import SwiperCarouselNewService from "@/app/components/swiperCarouselNewService";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title:
    "Professional Painter and Media Blasting in Colorado - Get Free Estimate - Paint Innovators",
  description:
    "Discover expert painting and media blasting services in Colorado. Offering wet and dry abrasive technologies for surface stripping, restoration, and more. Get your free estimate today.",
  openGraph: {
    title:
      "Professional Painter and Media Blasting in Colorado - Get Free Estimate - Paint Innovators",
    description:
      "Discover expert painting and media blasting services in Colorado. Offering wet and dry abrasive technologies for surface stripping, restoration, and more. Get your free estimate today.",
    url: `${Website}/locations/colorado`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/photos/Colorado.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Professional Painter and Media Blasting in Colorado - Get Free Estimate - Paint Innovators",
      },
    ],
  },
};
export default function ColoradoLocation() {
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
              src={"/photos/Colorado.jpg"}
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
          <h1 className="md:text-6xl text-5xl uppercase font-proxima-bold text-shadow">
            Professional Painter and Media Blasting in Colorado
          </h1>
          {/* <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2> */}
          <p className="text-shadow">Introducing our brand new service.</p>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Ensuring-Quality.jpg"
        imageAlt="Wallpaper"
        overlayText="Wet Blasting"
        borderSubtitle={true}
        overlayTextSubtitle="Denver, CO"
        contentBorderOff={true}
        heading="Transform a Room"
        content="Our wet and dry abrasive technologies lend themselves to a wide variety of uses and applications. Wet blasting is a natural choice for cleaning grease, rust, factory coatings, and contaminants from the old motorcycle, engine, or machine parts. The wet abrasive process is quicker leaving a softer satin-like finish on any aluminum, chrome, or steel surface."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="BETTER FOR METALS"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="Good for Restoration"
        content="The traditional dry blasting method causes frictional heat to the blasted surface which causes warping on aluminum or steel making our wet blasting a better choice on softer metals and making it a good choice for antique restoration, wood restoration, cleaning up fire damage, and removing graffiti."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />
      <ContentBlock
        sectionClassName="bg-white text-black pt-7"
        containerClassName="max-w-screen-lg mx-auto pt-8"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-11/12 w-full text-center px-4"
      >
        <h2 className="uppercase font-aspira-bold text-accent text-5xl">
          Our Colorado Location
        </h2>
        <p className="text-gray-700 text-2xl pt-8 mb-20 font-aspira-bold">
          {Company} is honored to be in Colorado offering our new service. We
          want to be the best at surface stripping, painting, and coating. We
          also pride ourselves in delivering on our promises, being reliable,
          and responsible, and getting the job done right the first time.
        </p>
        <div className="divider"></div>
        <div className="mb-20"></div>
      </ContentBlock>
      <SwiperCarouselNewService />
      <ContentBlock
        sectionClassName="mb-20"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="mt-10 font-aspira-bold text-accent text-2xl">
          Cities Served by our Colorado location:
        </h2>
        <p className="text-gray-700 pt-8 mb-20 font-aspira-bold">
          Arvada • Aurora • Boulder • Broomfield • Castle Rock • Centennial •
          Commerce City • Englewood • Golden • Highlands Ranch • Lakewood •
          Littleton • Longmont • Louisville • Parker • Thornton • Westminster •
          Wheat Ridge
        </p>
      </ContentBlock>

      <ContentBlock
        sectionClassName="bg-gray-dark pt-[100px] pb-[65px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full flex flex-wrap justify-center"
      >
        <div className="text-center lg:w-3/4 w-full pb-10 px-4">
          <h3 className="font-pontiac-black uppercase text-accent-secondary">
            Fun Facts
          </h3>
          <h2 className="text-3xl font-pontiac-black text-white">
            Did You Know?
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <ValueColumn
            number={1}
            heading="Mile High City"
            text='Denver, the capital of Colorado, is exactly one mile (5,280 feet) above sea level. This elevation gives it the nickname "The Mile High City" and even influences how baking and cooking are done at higher altitudes.'
            delay={0.1}
          />

          <ValueColumn
            className="order-2 md:order-3"
            number={2}
            heading="Home of the Rockies"
            text='Colorado boasts the highest average elevation of any U.S. state and is home to 58 mountain peaks over 14,000 feet, commonly called "Fourteeners." Outdoor enthusiasts flock to Colorado for hiking, skiing, and breathtaking mountain views.'
            delay={0.2}
          />
          <ValueColumn
            className="order-3 md:order-5"
            number={3}
            heading="Historic Gold Rush Origins"
            text="Colorado's history is deeply tied to the Gold Rush of 1858. The discovery of gold in the region brought thousands of prospectors, shaping cities like Denver and Boulder into thriving communities. Today, you can still pan for gold in some areas."
            delay={0.3}
          />

          <ValueColumn
            className="order-4 md:order-2"
            number={4}
            heading="A National Park Wonderland"
            text="Colorado is home to four national parks 1.)Rocky Mountain, 2.) Great Sand Dunes, 3.) Mesa Verde, and 4.) Black Canyon of the Gunnison. These parks showcase the state's diverse landscapes, from towering peaks to ancient cliff dwellings and vast sand dunes."
            delay={0.4}
          />
        </div>
      </ContentBlock>
      <div className="spacer"></div>
      <CTA />
      <div className="spacer"></div>
    </>
  );
}
