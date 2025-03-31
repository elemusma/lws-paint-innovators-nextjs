import ContentBlock from "@/app/components/content-block";
import { Company, Website } from "@/app/components/globals";
import CTA from "@/app/components/reusable/cta";
import ImageContentBlock from "@/app/components/reusable/ImageContentBlock";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import ValueColumn from "@/app/components/reusable/ValueColumn";
import ArkansasLocationMap from "@/app/map/ArkansasLocation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title:
    "Professional Painters in Arkansas - Locations, Services & Free Estimate - Paint Innovators",
  description:
    "Explore our Arkansas location in Springdale offering residential and commercial painting services. Get a free estimate today for custom, interior, exterior painting & more.",
  openGraph: {
    title:
      "Professional Painters in Arkansas - Locations, Services & Free Estimate - Paint Innovators",
    description:
      "Explore our Arkansas location in Springdale offering residential and commercial painting services. Get a free estimate today for custom, interior, exterior painting & more.",
    url: `${Website}/locations/arkansas`, // Replace with actual URL
    type: "website",
    images: [
      {
        url: `${Website}/photos/Arkansas.jpg`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt: "Professional Painters in Arkansas - Locations, Services & Free Estimate - Paint Innovators",
      },
    ],
  },
};
export default function ArkansasLocation() {
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
              src={"/photos/Arkansas.jpg"}
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
          <h1 className="md:text-6xl text-4xl uppercase font-proxima-bold text-shadow">
            Professional Painter in Arkansas
          </h1>
          {/* <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2> */}
          <p className="text-shadow">
            View our interactive map below to see all our areas of service in
            Arkansas.
          </p>
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
        overlayText="Humble Beginnings"
        borderSubtitle={true}
        overlayTextSubtitle="Springdale, AR"
        contentBorderOff={true}
        heading="Transform a Room"
        content="Paint Innovators is located in Springdale, AR, which is a part of Northwest Arkansas. Our office is located at the corner of Har-ber Avenue and S 48th Street in Springdale, AR.  Our office is located in Washington county.  Paint innovators was started in Springdale in 2014 at 133 South 40th Street, Springdale, AR and then moved to Har-ber in 2020.  To locals in Northwest Arkansas, we are located in the Har-ber side of Springdale - which originated from the presence of Har-ber High School in our area."
        buttonLabel="Get Free Estimate"
        buttonLink="/get-estimate"
      />

      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Painting & Contracting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="Commercial & Residential"
        content="At our Northwest Arkansas location, we have a team of experienced painters and technicians. Paint Innovators offers painting and contractor services to residential and commercial clients including custom painting, interior painting, exterior painting, drywall repair, cabinet & door staining or painting, concrete staining and epoxy floors, and deck coatings."
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
          Our Arkansas Location
        </h2>
        <p className="text-gray-700 text-2xl pt-8 mb-20 font-aspira-bold">
          {Company} is honored to be a part of the community of Springdale. Our
          team of top-rated painters and technicians have families that
          contribute to make Springdale an even better place to work and live!
          Over the years, we have been involved with Washington Regional and
          other community causes that support Springdale and Northwest Arkansas.
        </p>
        <div className="divider"></div>
        <div className="mb-20"></div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="mb-20"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <ArkansasLocationMap />
        <h2 className="mt-10 font-aspira-bold text-accent text-2xl">
          Cities Served by our Arkansas location:
        </h2>
        <p className="text-gray-700 pt-8 mb-20 font-aspira-bold">
          Fayetteville • Tontitown • Siloam Springs • Rogers • Bentonville •
          Prairie Grove • Farmington • Elkins • Bella Vista • Centerton • Lowell
          • West Fork • Winslow • Lincoln • Greenland • Johnson • Cave Springs •
          Goshen • Huntsville • Hindsville • Gentry • Decatur • Eureka Springs •
          Berryville • Flippin • Mountain Home • Fort Smith • Russellville • Van
          Buren • Greenwood • Clarksville • Central Arkansas
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
            heading="Friendly Community"
            text="According to Springdalear.gov, the city of Springdale is a diverse and friendly community and is the 4th largest city in the state of Arkansas.  In 2017, Springdale was the best city in the country for new graduates and was the 6th fastest growing city in the country (with less than 100,000 residents)."
            delay={0.1}
          />

          <ValueColumn
            className="order-2 md:order-3"
            number={2}
            heading="Community Roots"
            text="According to Arkansas.com, Springdale has about 75,000 people and was started in the 1850s as a small community named Shiloh."
            delay={0.2}
          />
          <ValueColumn
            className="order-3 md:order-5"
            number={3}
            heading="Historic Value"
            text="According to Wikipedia, Springdale is located on the Springfield Plateau deep in the Ozark mountains and is an important industrial city in the region."
            delay={0.3}
          />

          <ValueColumn
            className="order-4 md:order-2"
            number={4}
            heading="Heart of the Ozarks"
            text="Springdale is home to many large companies including Tyson, PAM Transport, George's Inc, Harps, and Northwest Health. Springdale is located in Washington and Benton counties and includes the following zip codes: 72762, 72764, 72765, and 72766."
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
