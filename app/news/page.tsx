import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import { Website } from "../components/globals";
import SocialIcons from "../components/reusable/socialIcons";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Latest Updates, Events & Announcements - Paint Innovators",
  description:
    "Stay up to date with the latest news from Paint Innovators! Read about upcoming events, special announcements, and celebrations, including holiday messages and social gatherings. Would you like any tweaks to emphasize something specific?",
  openGraph: {
    title: "Latest Updates, Events & Announcements - Paint Innovators",
    description:
      "Stay up to date with the latest news from Paint Innovators! Read about upcoming events, special announcements, and celebrations, including holiday messages and social gatherings. Would you like any tweaks to emphasize something specific?",
    url: `${Website}/news`,
    type: "article",
    images: [
      {
        url: `${Website}/news/Patio-Socials-March-01.jpg`,
        width: 1200,
        height: 630,
        alt: "Paint Innovators News",
      },
    ],
  },
};

export default function NewsPage() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <div className="relative">
          <h1 className="text-4xl uppercase font-proxima-bold">
            Paint Innovators News
          </h1>
        </div>
      </ContentBlock>
      {/* <ServingTagline /> */}
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="mx-auto px-10"
        rowClassName=""
        columnClassName="flex flex-wrap"
      >
        <div className="lg:w-3/4 w-full lg:pr-10 mb-10">
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/news/patio-socials-march" className="flex flex-wrap">
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Patio-Socials-March-01.jpg"
                  alt="Wallpaper"
                  className="h-[200px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  March 21, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Patio Socials March
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/news/acquired-blastcraft"
              className="flex flex-wrap items-stretch"
            >
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Blastcraft-Rodney-Barnes-Tadeo.jpg"
                  alt="Wallpaper"
                  className="h-[225px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  August 07, 2024
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Paint Innovators Acquired Blastcraft
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/news/happy-new-year-2023" className="flex flex-wrap">
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Happy-New-Year-2023.jpg"
                  alt="Wallpaper"
                  className="h-[200px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  December 31, 2022
                </p>
                <h2 className="text-2xl font-proxima-bold uppercase group-hover:text-white">
                  Happy New Year! (Bye 2022)
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/news/merry-christmas-2022" className="flex flex-wrap">
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Merry-Christmas-2022.jpg"
                  alt="Wallpaper"
                  className="h-[200px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  December 24, 2022
                </p>
                <h2 className="text-2xl font-proxima-bold uppercase group-hover:text-white">
                  Merry Christmas
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/news/happy-thanksgiving-2022"
              className="flex flex-wrap"
            >
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Happy-Thanksgiving-2022.jpg"
                  alt="Wallpaper"
                  className="h-[200px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  November 24, 2022
                </p>
                <h2 className="text-2xl font-proxima-bold uppercase group-hover:text-white">
                  Happy Thanksgiving
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/news/thank-you-veterans-2022"
              className="flex flex-wrap"
            >
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Thank-You-Veterans.jpg"
                  alt="Wallpaper"
                  className="h-[200px] w-full object-cover object-right"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  November 11, 2022
                </p>
                <h2 className="text-2xl font-proxima-bold uppercase group-hover:text-white">
                  Thank You Veterans
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group">
            <Link href="/news/another-tailgate" className="flex flex-wrap">
              <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Tailgate-Time-01.jpg"
                  alt="Wallpaper"
                  className="h-[200px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="md:w-3/4 w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  October 01, 2022
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  IT&apos;S TIME FOR ANOTHER TAILGATE!
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
        </div>
        <div className="lg:w-1/4 w-full">
          <div className="bg-[#f7f7f7] p-4 mb-4">
            <p className="text-xl text-gray-700 m-0">Media Contact</p>
            <hr />
            <p className="mb-0">
              Please send an email to{" "}
              <Link
                href="mailto:marketing@paintinnovators.com"
                className="text-accent hover:text-accent-dark"
              >
                marketing@paintinnovators.com
              </Link>{" "}
              for any media inquiries.
            </p>
          </div>
          <div className="bg-[#f7f7f7] p-4 mb-4">
            <p className="text-xl text-gray-700 mb-0">Follow Us</p>
            <hr />
            <div className="flex flex-wrap pt-4">
              <SocialIcons />
            </div>
          </div>
          <div className="bg-[#f7f7f7] p-4 mb-4">
            <p className="text-xl text-gray-700 mb-0">Resources</p>
            <hr />
            <p className="mb-0">
              <Link href="/about/brandresources">Brand Resources</Link>
            </p>
            <p className="m-0">
              <Link href="/about/website-feedback">Website Feedback</Link>
            </p>
            <p className="m-0">
              <Link href="/about/service-feedback">Service Feedback</Link>
            </p>
          </div>
        </div>
      </ContentBlock>
    </>
  );
}
