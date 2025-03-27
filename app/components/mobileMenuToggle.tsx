import Link from "next/link";
import { useState } from "react";
import ButtonSquare from "./buttons/btn-square";
import { Company } from "./globals";
import Logo from "./logo";
import SocialIcons from "./reusable/socialIcons";

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
              <SocialIcons />
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
