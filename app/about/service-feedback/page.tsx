import ContentBlock from "@/app/components/content-block";
import ContactFormServiceFeedback from "@/app/components/forms/ContactFormServiceFeedback";
import ServingTagline from "@/app/components/reusable/serving-tagline";
import Image from "next/image";
import Link from "next/link";

export default function ServiceFeedback() {
  return (
    <>
      <ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/website/Website-Feedback-01.jpg"}
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
            Service Feedback
          </h1>
          <p className="text-shadow">
            Use the form below to send us your comments or suggestions regarding
            the work we completed for you or the process leading up to the
            project. We read all feedback carefully, but please note that we
            cannot respond to the comments you submit.
          </p>
          <Link href="/contact" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
      <ServingTagline />
      {/* <div className="spacer"></div> */}

      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full relative px-5"
      >
        <div className="text-center md:w-3/4 w-full mx-auto pb-[50px]">
          {/* <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Fill Out Form Below
          </h2> */}

          {/* <p className="my-2 text-sm">
            Use the form below to send us your comments or suggestions regarding
            the work we completed for you or the process leading up to the
            project. We read all feedback carefully, but please note that we
            cannot respond to the comments you submit.
          </p> */}
        </div>
        <ContactFormServiceFeedback />
      </ContentBlock>
      <div className="spacer"></div>
    </>
  );
}
