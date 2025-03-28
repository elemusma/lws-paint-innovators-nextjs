import Link from "next/link";
import SocialIcons from "./socialIcons";

export default function Sidebar() {
  return (
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
  );
}
