import Link from "next/link";
import { useState } from "react";
import ButtonSquare from "./buttons/btn-square";
import { Company } from "./globals";
import Logo from "./logo";
import AboutLinks from "./reusable/nav/aboutLinks";
import CareersLinks from "./reusable/nav/careersLinks";
import IndustriesLinks from "./reusable/nav/industriesLinks";
import LocationsLinks from "./reusable/nav/locationsLinks";
import ProjectsLinks from "./reusable/nav/projectsLinks";
import ServicesLinks from "./reusable/nav/servicesLinks";
import SocialIcons from "./reusable/socialIcons";

const MobileMenuToggle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        id="mobileMenuToggle"
        className="openModalBtn nav-toggle"
        title={`mobile menu nav toggle for ${Company}`}
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
      >
        <div style={{ padding: "10px 0px" }}>
          <div className="line-1 bg-[var(--neutral-dark)]"></div>
          <div className="line-2 bg-[var(--neutral-dark)]"></div>
          <div className="line-3 bg-[var(--neutral-dark)]"></div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="mobileMenu"
          className={`modal mobile-menu ${isModalOpen ? "active" : ""}`}
          style={{ display: "block" }}
        >
          {/* Modal Content */}
          <div
            className="bg-white modal-content-menu modal-content"
            style={{
              background: "",
              paddingTop: "50px",
            }}
          >
            {/* Close Button */}
            <span className="close" id="navMenuClose" onClick={handleClose}>
              &times;
            </span>

            {/* Logo Section */}
            <div style={{ width: "100%", maxWidth: "205px" }} id="logoMain">
              <Link
                href="/"
                title={`Homepage link for ${Company}`}
                onClick={handleClose}
              >
                {/** Replace `logoSVG()` with your logo component or JSX */}
                <Logo />
              </Link>
            </div>
            <div className="h-[25px]"></div>
            <ButtonSquare
              className="" // Adding additional class
              style={{ top: "50%", right: 0, transform: "translate(0, -50%)" }} // Adding inline style
              id="" // Adding an ID
              href="/contact" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare>
            <div className="h-[25px]"></div>
            <div className="w-full lg:w-1/3 text-right flex justify-start">
              <SocialIcons />
            </div>
            {/* Navigation Menu */}
            <p className="text-xl font-proxima-bold mb-0">Services</p>
            <ul className="list-none text-sm mt-0">
              <ServicesLinks onClick={handleClose} />
            </ul>
            <p className="text-xl font-proxima-bold mb-0">Industries</p>
            <ul className="list-none text-sm mt-0">
              <IndustriesLinks onClick={handleClose} />
            </ul>
            <p className="text-xl font-proxima-bold mb-0">Locations</p>
            <ul className="list-none text-sm mt-0">
              <LocationsLinks onClick={handleClose} />
            </ul>
            <p className="text-xl font-proxima-bold mb-0">About</p>
            <ul className="list-none text-sm mt-0">
              <AboutLinks onClick={handleClose} />
            </ul>

            <Link
              href="/news"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              News / Blog
            </Link>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link
                  href="/news"
                  className="block px-4 py-2"
                  onClick={handleClose}
                >
                  News / Blog
                </Link>
              </li>
            </ul>

            <p className="text-xl font-proxima-bold mb-0">Projects</p>
            <ul className="list-none text-sm mt-0">
              <ProjectsLinks onClick={handleClose} />
            </ul>

            <p className="text-xl font-proxima-bold mb-0">Careers</p>
            <ul className="list-none text-sm mt-0">
              <CareersLinks onClick={handleClose} />
            </ul>

            <p className="text-xl font-proxima-bold mb-0">Helpful Links</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-2"
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="block px-4 py-2"
                  onClick={handleClose}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/about/reviews"
                  className="block px-4 py-2"
                  onClick={handleClose}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/get-estimate"
                  className="block px-4 py-2"
                  onClick={handleClose}
                >
                  Get Free Estimate
                </Link>
              </li>
            </ul>

            {/* Spacer */}
            <div style={{ height: "25px" }}></div>

            {/* CTA Button */}
            <ButtonSquare
              className="" // Adding additional class
              style={{}} // Adding inline style
              id="" // Adding an ID
              href="/contact" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare>

            <div style={{ height: "25px" }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
