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
              <Link href="/" title={`Homepage link for ${Company}`}>
                {/** Replace `logoSVG()` with your logo component or JSX */}
                <Logo />
              </Link>
            </div>

            {/* Navigation Menu */}
            <ul className="menu list-unstyled mb-0">
              <li>
                <Link href="/team">Our Team</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/work">Our Work</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
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
// function setupModals(arg0: string) {
//   throw new Error("Function not implemented.");
// }
