import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import { Company } from "../components/globals";
import ImageContentBlock from "../components/reusable/ImageContentBlock";
import ServingTagline from "../components/reusable/serving-tagline";

export default function Services() {
  const services = [
    {
      title: "Industrial Painting",
      description:
        "Professional industrial coating solutions for manufacturing facilities and equipment",
      icon: "🏭",
    },
    {
      title: "Commercial Painting",
      description:
        "Expert painting services for offices, retail spaces, and commercial buildings",
      icon: "🏢",
    },
    {
      title: "Specialty Coatings",
      description:
        "Advanced coating applications for specific industrial requirements",
      icon: "🎨",
    },
  ];

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
            Professional Painter Services
          </h1>
          <h2 className="font-aspira-bold text-2xl">
            Industrial <span className="text-accent">&bull;</span> Commercial{" "}
            <span className="text-accent">&bull;</span> Government
          </h2>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />

      <ImageContentBlock
        sectionClassName=""
        imageSrc="/team/Ensuring-Quality.jpg"
        imageAlt="Wallpaper"
        overlayText="Residential Painting"
        borderSubtitle={true}
        overlayTextSubtitle="Craftmanship and Inspection of Every Job"
        contentBorderOff={true}
        heading="Transform a Room"
        content="New wall covering can transform a room, going from boring to beautiful. But before you can determine the best approach to removing wallpaper, you need to know the type of wallcovering and the type of wall surface under the wallpaper."
        buttonLabel="Read Residential Painting"
        buttonLink="/services/residential-painting"
      />
      <ImageContentBlock
        sectionClassName="even"
        imageSrc="/team/Our-Successful-Team.jpg"
        imageAlt="The History of Wall Paper"
        overlayText="Commercial Painting"
        borderSubtitle={true}
        heading="Transform a Room"
        contentBorderOff={true}
        overlayTextSubtitle="We Enjoy Where We Work"
        content="Wallpaper use originated in the 16th century and it was used to decorate the inside of cupboards and small spaces in the grand houses of the aristocracy. So wallpaper was associated with wealth. There were printed in monochrome on small sheets. Through out the years the wallpaper industry advanced with variety of colors and designs, however late in the 1900 the wallpaper market declined, and the paint industry became popular."
        buttonLabel="Read Commercial Painting"
        buttonLink="/services/commercial-painting"
      />

      <div className="services-container max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          {Company} Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 rounded-lg shadow-lg bg-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
