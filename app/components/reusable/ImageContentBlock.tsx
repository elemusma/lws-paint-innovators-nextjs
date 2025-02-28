"use client";
import Image from "next/image";

/**
 * Props for the ImageContentBlock component
 */
interface ImageContentBlockProps {
  /** The URL of the image (e.g., "/photos/wallpaper.jpg") */
  imageSrc: string;
  /** The alt text for the image */
  imageAlt?: string;
  /** Text that appears as an overlay on the image */
  overlayText: string;
  contentCol?: React.ReactNode;
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
  imageSrc,
  imageAlt = "",
  overlayText,
  contentCol,
  heading,
  content,
  buttonLabel,
  buttonLink,
}: ImageContentBlockProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch my-8">
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
        <div className="absolute inset-0 flex items-end p-4 bg-black/40 text-white">
          <h2 className="text-lg font-bold drop-shadow">{overlayText}</h2>
        </div>
      </div>

      {/* Right Column: Heading, Content, and Button */}
      <div className="md:w-1/2 w-full bg-white p-6 flex flex-col justify-center">
        {contentCol}
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p className="mb-4">{content}</p>
        <a
          href={buttonLink}
          className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
