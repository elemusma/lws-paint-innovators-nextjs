"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import "../../styles/ImageContentBlock.scss";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
/**
 * Props for the ImageContentBlock component
 */
interface ImageContentBlockProps {
  sectionClassName?: string;
  /** The URL of the image (e.g., "/photos/wallpaper.jpg") */
  imageSrc: string;
  /** The alt text for the image */
  borderSubtitle?: boolean;
  overlayTextSubtitle?: string;
  imageAlt?: string;
  /** Text that appears as an overlay on the image */
  overlayText: string;
  contentCol?: React.ReactNode;
  contentBorderOff?: boolean;
  /** Heading text to display in the right column */
  heading: string;
  /** Main paragraph/content text in the right column */
  content: string;
  /** The text for the "Learn More" or CTA button */
  buttonLabel: string;
  /** The link/URL for the CTA button */
  buttonLink: string;
}

/**
 * A reusable two-column layout:
 *  - Left column: Image with overlay text
 *  - Right column: Heading, content, and a button
 */
export default function ImageContentBlock({
  sectionClassName,
  imageSrc,
  imageAlt = "",
  overlayText,
  contentCol,
  heading,
  borderSubtitle,
  overlayTextSubtitle,
  contentBorderOff,
  content,
  buttonLabel,
  buttonLink,
}: ImageContentBlockProps) {
  return (
    <>
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="image-content-block mb-2">
          <div className={`flex flex-wrap ${sectionClassName || "odd"}`}>
            {/* Left Column: Image with overlay text */}
            <div className="relative md:w-1/2 w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                // If you prefer to manually size, remove fill and use width/height
              />
              {/* Overlay Text */}
              <div className="h-full flex items-center justify-center">
                <div className="bg-white/80 w-full relative my-20 py-5">
                  <div
                    className={`w-7/12 mx-auto overlay-image-text md:text-right text-center ${
                      borderSubtitle
                        ? "border-subtitle border-r-4 pr-4 border-[var(--accent-primary)]"
                        : ""
                    }`}
                  >
                    <h2 className={`text-4xl font-aspira-light uppercase`}>
                      {overlayText}
                    </h2>
                    {borderSubtitle && overlayTextSubtitle && (
                      <span className="font-aspira-bold italic">
                        {overlayTextSubtitle}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Content, and Button */}
            <div className="image-content-block-col md:w-1/2 w-full p-6 flex flex-col justify-center bg-[var(--gray)] lg:px-[100px] md:px-[50px] sm:px-[25px] py-[150px]">
              {/* {contentCol} */}
              <div
                className={`${
                  contentBorderOff
                    ? "border-off"
                    : "border-on border-l-4 border-[var(--accent-primary)] pl-4"
                }`}
              >
                <p className="">{content}</p>
              </div>
              <div
                className={`pt-8 ${
                  contentBorderOff ? "border-off" : "border-off pl-4"
                }`}
              >
                <Link href={buttonLink} className="btn-main">
                  {buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
