import Link from "next/link";
import { useState } from "react";
import ButtonSquare from "./buttons/btn-square";
import { Company } from "./globals";
import Logo from "./logo";

const MobileMenuToggle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  //   const handleToggle = () => {
  //     modalPopup();
  //     // setupModals("mobileMenu");
  //   };

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
          <div className="line-1 bg-accent"></div>
          <div className="line-2 bg-accent"></div>
          <div className="line-3 bg-accent"></div>
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
              <a
                href="https://www.facebook.com/PaintInnovators/"
                target="_blank"
                className="block"
                onClick={handleClose}
              >
                <div style={{}} className="social-icons">
                  <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 257.81 500"
                    fill="white"
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1"
                        style={{ strokeWidth: 0 }}
                        d="M74.9,500v-223.63H0v-88.87h74.9v-70.02C74.9,41.41,121.39,0,189.26,0c32.52,0,60.45,2.44,68.55,3.52v79.49h-47.07c-36.91,0-44.04,17.58-44.04,43.26v61.23h83.3l-11.43,88.87h-71.87v223.63"
                      />
                    </g>
                  </svg>
                </div>{" "}
              </a>
              {/* end of social icon */}
              <a
                href="https://www.instagram.com/paintinnovators/"
                target="_blank"
                onClick={handleClose}
              >
                <div style={{}} className="social-icons">
                  <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500.11 500"
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1"
                        d="M250.11,121.81c-70.96,0-128.19,57.24-128.19,128.19s57.24,128.19,128.19,128.19,128.19-57.24,128.19-128.19-57.24-128.19-128.19-128.19ZM250.11,333.34c-45.86,0-83.34-37.38-83.34-83.34s37.38-83.34,83.34-83.34,83.34,37.38,83.34,83.34-37.49,83.34-83.34,83.34h0ZM413.45,116.56c0,16.62-13.39,29.9-29.9,29.9s-29.9-13.39-29.9-29.9,13.39-29.9,29.9-29.9,29.9,13.39,29.9,29.9ZM498.35,146.91c-1.9-40.05-11.05-75.53-40.39-104.76C428.73,12.91,393.26,3.77,353.2,1.76c-41.28-2.34-165.01-2.34-206.29,0-39.94,1.9-75.42,11.05-104.76,40.28C12.8,71.27,3.77,106.74,1.76,146.8c-2.34,41.28-2.34,165.01,0,206.29,1.9,40.05,11.05,75.53,40.39,104.76,29.34,29.23,64.71,38.38,104.76,40.39,41.28,2.34,165.01,2.34,206.29,0,40.05-1.9,75.53-11.05,104.76-40.39,29.23-29.23,38.38-64.71,40.39-104.76,2.34-41.28,2.34-164.9,0-206.18h0ZM445.02,397.38c-8.7,21.87-25.55,38.71-47.53,47.53-32.91,13.05-111.01,10.04-147.38,10.04s-114.58,2.9-147.38-10.04c-21.87-8.7-38.71-25.55-47.53-47.53-13.05-32.91-10.04-111.01-10.04-147.38s-2.9-114.58,10.04-147.38c8.7-21.87,25.55-38.71,47.53-47.53,32.91-13.05,111.01-10.04,147.38-10.04s114.58-2.9,147.38,10.04c21.87,8.7,38.71,25.55,47.53,47.53,13.05,32.91,10.04,111.01,10.04,147.38s3.01,114.58-10.04,147.38Z"
                      />
                    </g>
                  </svg>
                </div>{" "}
              </a>
              {/* end of social icon */}
            </div>
            {/* Navigation Menu */}
            <p className="text-xl font-proxima-bold mb-0">Services</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link
                  href="/services/residential-painting"
                  onClick={handleClose}
                >
                  Residential Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial-painting"
                  onClick={handleClose}
                >
                  Commercial Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/color-consultation-custom-painting"
                  onClick={handleClose}
                >
                  Color Consultation &amp; Custom Painting
                </Link>
              </li>
              <li>
                <Link href="/services/exterior-painting" onClick={handleClose}>
                  Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/interior-painting" onClick={handleClose}>
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/new-construction-painting"
                  onClick={handleClose}
                >
                  New Construction Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/popcorn-ceiling-removal"
                  onClick={handleClose}
                >
                  Popcorn Ceiling Removal
                </Link>
              </li>
              <li>
                <Link href="/services/wallpaper-removal" onClick={handleClose}>
                  Wallpaper Removal
                </Link>
              </li>
              <li>
                <Link href="/services/drywall-repair" onClick={handleClose}>
                  Drywall Repair
                </Link>
              </li>
              <li>
                <Link href="/services/deck-coating" onClick={handleClose}>
                  Deck Coating
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-coating" onClick={handleClose}>
                  Industrial Coating
                </Link>
              </li>
              <li>
                <Link href="/services/epoxy-floors" onClick={handleClose}>
                  Epoxy Floors
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" onClick={handleClose}>
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/covid-19-sanitation"
                  onClick={handleClose}
                >
                  COVID-19 Sanitation
                </Link>
              </li>
            </ul>
            <p className="text-xl font-proxima-bold mb-0">About</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link href="/about" onClick={handleClose}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/team" onClick={handleClose}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/brandresources" onClick={handleClose}>
                  Brand Resources
                </Link>
              </li>
              <li>
                <Link href="/about/website-feedback" onClick={handleClose}>
                  Website Feedback
                </Link>
              </li>
              <li>
                <Link href="/about/service-feedback" onClick={handleClose}>
                  Service Feedback
                </Link>
              </li>
            </ul>
            <p className="text-xl font-proxima-bold mb-0">Locations</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link href="/locations" onClick={handleClose}>
                  All Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/arkansas" onClick={handleClose}>
                  Arkansas Location
                </Link>
              </li>
              <li>
                <Link href="/locations/oklahoma" onClick={handleClose}>
                  Oklahoma Location
                </Link>
              </li>
              <li>
                <Link href="/locations/colorado" onClick={handleClose}>
                  Colorado Location
                </Link>
              </li>
            </ul>
            <p className="text-xl font-proxima-bold mb-0">Our Work</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link href="/projects" onClick={handleClose}>
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/residential-painting"
                  onClick={handleClose}
                >
                  Residential Painting Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/commercial-painting"
                  onClick={handleClose}
                >
                  Commercial Painting Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/interior-exterior-painting"
                  onClick={handleClose}
                >
                  Interior Painting and Exterior Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/other-contractor-services"
                  onClick={handleClose}
                >
                  Other Contractor Services
                </Link>
              </li>
            </ul>
            <p className="text-xl font-proxima-bold mb-0">Careers</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link href="/careers" onClick={handleClose}>
                  All Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/painter-drywall-finisher"
                  onClick={handleClose}
                >
                  Painter / Drywall Finisher
                </Link>
              </li>
              <li>
                <Link href="/careers/pintor-masero" onClick={handleClose}>
                  El Pintor / Masero
                </Link>
              </li>
              <li>
                <Link href="/careers/office-associate" onClick={handleClose}>
                  Office Associate
                </Link>
              </li>
              <li>
                <Link href="/careers/project-estimator" onClick={handleClose}>
                  Project Estimator
                </Link>
              </li>
              <li>
                <Link href="/careers/project-manager" onClick={handleClose}>
                  Project Manager
                </Link>
              </li>
            </ul>
            <p className="text-xl font-proxima-bold mb-0">Helpful Links</p>
            <ul className="list-none text-sm mt-0">
              <li>
                <Link href="/contact" onClick={handleClose}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" onClick={handleClose}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about/reviews" onClick={handleClose}>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/get-estimate" onClick={handleClose}>
                  Get Free Estimate
                </Link>
              </li>
            </ul>

            {/* Spacer */}
            <div style={{ height: "25px" }}></div>

            {/* CTA Button */}
            <ButtonSquare
              className="" // Adding additional class
              style={{ top: "50%", right: 0, transform: "translate(0, -50%)" }} // Adding inline style
              id="" // Adding an ID
              href="/contact" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
