import Image from "next/image";
import Link from "next/link";
import {
  ArkansasPhone,
  ColoradoPhone,
  OklahomaPhone,
} from "../../components/globals.js";
import ContactForm from "../contactForm";
import ContentBlock from "../content-block";

export default function CTA() {
  return (
    <>
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
