import { useState } from "react";
import { Company } from "./globals";

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
      <a
        id="mobileMenuToggle"
        className="openModalBtn nav-toggle"
        title={`mobile menu nav toggle for ${Company}`}
        onClick={handleToggle}
      >
        <div style={{ padding: "10px 0px" }}>
          <div className="line-1 bg-accent"></div>
          <div className="line-2 bg-accent"></div>
          <div className="line-3 bg-accent"></div>
        </div>
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="mobileMenu"
          className={`modal mobile-menu ${isModalOpen ? "active" : ""}`}
        >
          {/* Modal Content */}
          <div
            className="modal-content-menu modal-content"
            style={{
              background: "var(--accent-secondary)",
              paddingTop: "50px",
            }}
          >
            {/* Close Button */}
            <span className="close" id="navMenuClose" onClick={handleClose}>
              &times;
            </span>

            {/* Logo Section */}
            <div style={{ width: "100%", maxWidth: "205px" }} id="logoMain">
              <a href="/" title={`Homepage link for ${Company}`}>
                {/** Replace `logoSVG()` with your logo component or JSX */}
                <img
                  src="/path-to-your-logo.svg"
                  alt={`${Company} Logo`}
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </div>

            {/* Navigation Menu */}
            <ul className="menu list-unstyled mb-0">
              <li>
                <a href="/link1">Menu Item 1</a>
              </li>
              <li>
                <a href="/link2">Menu Item 2</a>
              </li>
              <li>
                <a href="/link3">Menu Item 3</a>
              </li>
            </ul>

            {/* Spacer */}
            <div style={{ height: "25px" }}></div>

            {/* CTA Button */}
            <a
              href="/speak-with-an-expert"
              style={{
                marginLeft: "0",
                textDecoration: "none",
                padding: "10px",
                background: "var(--accent-primary)",
                color: "#fff",
                borderRadius: "5px",
              }}
              title={`Phone number link for ${Company}`}
            >
              Speak with an Expert
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
function setupModals(arg0: string) {
  throw new Error("Function not implemented.");
}
