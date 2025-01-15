"use client";
import { useEffect, useRef } from "react"; // Import the necessary hooks
import "../styles/nav-mobile.scss";
import ButtonSquare from "./buttons/btn-square";
import MobileMenuToggle from "./mobileMenuToggle";
import NavItems from "./nav-items";

export default function Navigation() {
  const menuHeightRef = useRef<HTMLUListElement | null>(null);
  const navMenuRef = useRef<HTMLDivElement | null>(null);
  const navMenuToggleRef = useRef<HTMLButtonElement | null>(null);
  const navMenuOverlayRef = useRef<HTMLDivElement | null>(null);
  const navMenuCloseRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const blankSpaceRef = useRef<HTMLDivElement | null>(null);
  const logoMainRef = useRef<HTMLImageElement | null>(null);
  const logoSecondaryRef = useRef<HTMLImageElement | null>(null);
  const searchIconRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const blankSpace = blankSpaceRef.current;

    const parallaxEffect = () => {
      if (header && blankSpace) {
        if (window.scrollY < 199) {
          blankSpace.style.height = "0px";
          header.classList.add("relative");
          header.classList.add("inactive");
          header.classList.remove("fixed");
          header.classList.remove("active");
        } else if (window.scrollY > 200) {
          blankSpace.style.height = `${header.offsetHeight}px`;
          header.classList.add("fixed");
          header.classList.add("active");
          header.classList.remove("relative");
          header.classList.remove("inactive");
        }
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  console.log("hello there again");

  return (
    <>
      <div ref={blankSpaceRef} className="blank-space">
        {/* Blank space content */}
      </div>
      <header
        ref={headerRef}
        className="bg-white relative w-full shadow-md"
        style={{ top: 0, zIndex: 1 }}
      >
        <nav className="relative">
          <div className="hidden lg:block max-w-screen-lg mx-auto">
            <NavItems />
          </div>
          <MobileMenuToggle />
          <ButtonSquare
            className="absolute hidden lg:block" // Adding additional class
            style={{ top: "50%", right: 0, transform: "translate(0, -50%)" }} // Adding inline style
            id="" // Adding an ID
            href="/free-estimate" // Dynamic href
          >
            Free Estimate!
          </ButtonSquare>
        </nav>
      </header>
    </>
  );
}
