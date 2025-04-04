"use client";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import {
  ArkansasPhone,
  ColoradoPhone,
  OklahomaPhone,
} from "../../components/globals.js";
import ContentBlock from "../content-block";
import ContactForm from "../forms/ContactForm";
import Testimonials from "./Testimonials";

export default function CTA() {
  // const pathname = usePathname(); // Get the current route

  // Define dynamic links based on the page URL
  // const getContactLink = () => {
  //   if (pathname.includes("oklahoma-location")) return `tel:1${OklahomaPhone}`;
  //   if (pathname.includes("arkansas-location")) return `tel:1${ArkansasPhone}`;
  //   if (pathname.includes("colorado-location")) return `tel:1${ColoradoPhone}`;
  //   return "/contact"; // Default for all other pages
  // };

  return (
    <>
      <Testimonials />
      <div className="spacer"></div>
      <ContentBlock
        sectionClassName="bg-[var(--accent-primary)] text-white"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-bold italic">FREE ESTIMATE!</h2>
        <Link href="/get-estimate" className="btn-main white mt-[20px]">
          Get Free Estimate
        </Link>
      </ContentBlock>
      <div className="spacer"></div>

      <ContentBlock
        sectionClassName="relative py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative bg-[rgba(0,0,0,0.5)] pt-10 px-5"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-2025-04.jpg"}
              alt="Contact Paint Innovators"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            {/* <div className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"></div> */}
          </>
        }
      >
        <h2 className="text-4xl font-aspira-thin uppercase text-center text-white">
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
        <Link
          href={`tel:1${ArkansasPhone}`}
          className="btn-main mt-[20px] mx-2"
        >
          Oklahoma
        </Link>
        <Link
          href={`tel:1${OklahomaPhone}`}
          className="btn-main mt-[20px] mx-2"
        >
          Arkansas
        </Link>
        <Link
          href={`tel:1${ColoradoPhone}`}
          className="btn-main mt-[20px] mx-2"
        >
          Colorado
        </Link>
      </ContentBlock>
    </>
  );
}
