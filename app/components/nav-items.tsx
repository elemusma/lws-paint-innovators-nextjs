import "../styles/nav.scss";
import Logo from "./logo";

export default function NavItems({ logoContainerClassName = "" }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="lg:w-1/3 w-7/12 text-right lg:order-1 order-2">
          <ul className="flex lg:justify-end justify-center">
            <li>
              <a href="/our-team">Our Team</a>
            </li>
            <li>
              <a href="/our-team">Services </a>
            </li>
          </ul>
          {/* <div className="flex lg:justify-end justify-center">
            <div className="lg:w-1/4 w-5/12 text-center">
              <a href="/our-team">Our Team</a>
            </div>
            <div
              className="w-1/12 text-center"
              style={{
                backgroundColor: "var(--accent-primary)",
                width: "2px",
                height: "25px",
              }}
            ></div>
            <div className="lg:w-1/4 w-5/12 text-center">
              <a href="/our-team"> Services </a>
            </div>
          </div> */}
        </div>
        <div
          className={`w-full lg:order-2 order-1 ${
            logoContainerClassName || "lg:w-1/6"
          }`}
        >
          <Logo />
        </div>
        <div className="w-full lg:w-1/3 w-7/12 lg:order-3 order-3">
          {/* <div className="flex lg:justify-start justify-center">
            <div className="lg:w-1/4 w-5/12 text-center">
              <a href="/our-team">Our Work</a>
            </div>
            <div
              className="w-1/12 text-center"
              style={{
                backgroundColor: "var(--accent-primary)",
                width: "2px",
                height: "25px",
              }}
            ></div>
            <div className="lg:w-1/4 w-5/12 text-center">
              <a href="/our-team"> Contact Us </a>
            </div>
          </div> */}
          <ul className="flex lg:justify-start justify-center">
            <li>
              <a href="/our-team">Our Work</a>
            </li>
            <li>
              <a href="/our-team">Contact Us </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
