import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/contactForm";
import SwiperCarousel from "./components/swiperCarousel";
import SwiperCarouselNewService from "./components/swiperCarouselNewService";
import SwiperCarouselProjects, {
  Slide,
} from "./components/swiperCarouselProjects";
import Tabs, { Tab } from "./components/tabs";

export default function Home() {
  const tabsData: Tab[] = [
    {
      title: "Residential",
      content: (
        <div>
          <p>
            Residential Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Commercial",
      content: (
        <div>
          <p>
            Commercial Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      ),
      // No custom classes/styles; will use defaults.
      customTabButtonClassName: "lg:w-1/4 w-1/2", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
    {
      title: "Government",
      content: (
        <div>
          <p>
            Government Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      ),
      customTabButtonClassName: "lg:w-1/4 w-full", // Custom class for first tab button
      customTabButtonStyle: { fontSize: "1.2rem" }, // Custom style for first tab button
    },
  ];

  const slidesData: Slide[] = [
    {
      imageSrc: "/photos/Project-Completed-Residential-01.jpg",
      imageAlt: "Image 1 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Residential-02.jpg",
      imageAlt: "Image 2 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Residential-03.jpg",
      imageAlt: "Image 3 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Residential-04.jpg",
      imageAlt: "Image 1 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Residential-01.jpg",
      imageAlt: "Image 2 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Residential-02.jpg",
      imageAlt: "Image 3 Description",
    },
    // Add more images as needed
  ]; // Then use your component:
  const slidesDataCommercial: Slide[] = [
    {
      imageSrc: "/photos/Project-Completed-Commercial-01.jpg",
      imageAlt: "Image 1 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Commercial-02.jpg",
      imageAlt: "Image 2 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Commercial-03.jpg",
      imageAlt: "Image 3 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Commercial-04.jpg",
      imageAlt: "Image 1 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Commercial-01.jpg",
      imageAlt: "Image 2 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Commercial-02.jpg",
      imageAlt: "Image 3 Description",
    },
    // Add more images as needed
  ]; // Then use your component:
  const slidesDataIndustrial: Slide[] = [
    {
      imageSrc: "/photos/Project-Completed-Industrial-01.jpg",
      imageAlt: "Image 1 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Industrial-02.jpg",
      imageAlt: "Image 2 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Industrial-03.jpg",
      imageAlt: "Image 3 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Industrial-04.jpg",
      imageAlt: "Image 1 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Industrial-01.jpg",
      imageAlt: "Image 2 Description",
    },
    {
      imageSrc: "/photos/Project-Completed-Industrial-02.jpg",
      imageAlt: "Image 3 Description",
    },
    // Add more images as needed
  ]; // Then use your component:

  // <Tabs
  //   tabs={tabsData}
  //   containerClassName="my-custom-container max-w-screen-lg mx-auto"
  //   headerClassName="flex justify-center mb-4 headerClassName"
  //   tabButtonClassName="px-4 py-2 border mr-2 w-1/4"
  //   activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
  //   contentClassName="p-4"
  // />;

  return (
    <>
      <div className="hero">
        <SwiperCarousel />
      </div>
      <ContentBlock
        sectionClassName="bg-accent text-white"
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-3xl font-proxima-bold">
          SERVING ARKANSAS, OKLAHOMA &amp; COLORADO
        </h2>
      </ContentBlock>
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto py-3 px-4"
        rowClassName=""
        columnClassName="flex flex-col md:flex-row items-center relative"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/assets/Home/Our-Team-Bg.jpg"}
              alt="Paint Innovators Industrial"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "contain", objectPosition: "right" }}
              width={100}
              height={100}
            />
          </>
        }
      >
        {/* <div className="flex flex-col lg:flex-row items-center relative"> */}
        <div className="w-full md:w-1/2 lg:pr-10 pb-10 sm:pb-0">
          <div className="divider"></div>
          <h2 className="text-5xl font-aspira-light my-4">OUR TEAM</h2>
          <h3 className="text-1xl font-poppins-black my-4">
            BUILT ON VALUES &amp; TRUST
          </h3>
          <p>
            Founded in 2014 by Rodney Barnes, Paint Innovators was born out of
            the idea that quality should be at the forefront of every project
            regardless of being residential or commercial. For six years, we
            have been committed to delivering excellent customer service that is
            unmatched. Each day we are faced with difficult decisions in the
            course of our work, however we are assiduous when it comes to our
            values. Integrity is our highest priority.
          </p>{" "}
          <Link href="/contact" className="btn-main mt-[20px]">
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:text-right">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPaintInnovators%2Fvideos%2F979154837397440%2F&show_text=false&width=267&t=0"
            width="50%"
            height="476"
            style={{
              border: "none",
              overflow: "hidden",
              display: "inline-block",
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPaintInnovators%2Fvideos%2F1098726621971511%2F&show_text=false&width=267&t=0"
            width="50%"
            height="476"
            style={{
              border: "none",
              overflow: "hidden",
              display: "inline-block",
            }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* </div> */}
      </ContentBlock>
      {/* <div className="spacer"></div> */}
      <ContentBlock
        sectionClassName=""
        containerClassName="max-w-screen-lg mx-auto py-3"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-5xl font-aspira-thin">INDUSTRIES SERVED</h2>
      </ContentBlock>
      <Tabs
        tabs={tabsData}
        containerClassName="my-custom-container max-w-screen-lg mx-auto"
        headerClassName="flex flex-wrap justify-center mb-4 px-4 headerClassName"
        tabButtonClassName="px-4 py-2 border mr-2"
        activeTabButtonClassName="bg-blue-600 text-white activeTabButtonClassName"
        contentClassName="p-4"
      />
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
        {/* <Link href="/contact" className="btn-main white mt-[20px]">
          Learn More
        </Link> */}
        <div className="relative swiper-carousel-container">
          <SwiperCarouselProjects
            slides={slidesData}
            sliderId="completed-projects-residential"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            RESIDENTIAL
          </h2>
        </div>
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={slidesDataCommercial}
            sliderId="completed-projects-commercial"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            COMMERCIAL
          </h2>
        </div>
        <div className="relative pt-[30px] swiper-carousel-container">
          <SwiperCarouselProjects
            slides={slidesDataIndustrial}
            sliderId="completed-projects-industrial"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-shadow font-proxima-bold md:text-5xl text-3xl tracking-[0.2em] pointer-events-none">
            INDUSTRIAL
          </h2>
        </div>
      </ContentBlock>
      <div className="spacer"></div>

      <ContentBlock
        sectionClassName=""
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-aspira-thin uppercase">Testimonials</h2>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-[#555555] border-t-[5px] border-b-[5px] border-[#c2c2c2]"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-aspira-thin uppercase">
          Testimonials go here
        </h2>
      </ContentBlock>
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="bg-accent text-white"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-bold italic">FREE ESTIMATE!</h2>
        <Link href="/contact" className="btn-main white mt-[20px]">
          Learn More
        </Link>
      </ContentBlock>
      <div className="spacer"></div>

      <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center relative bg-[rgba(0,0,0,0.5)] pt-10 px-5"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/photos/Contact.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <h2 className="text-4xl font-aspira-thin uppercase text-white">
          Have a Question?
        </h2>
        <ContactForm />
      </ContentBlock>
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-bold uppercase">Call Us Today</h2>
        <Link href="/contact" className="btn-main mt-[20px]">
          Learn More
        </Link>
      </ContentBlock>
      <div className="spacer"></div>
    </>
  );
}
