import Logo from "./logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/3 text-right">
              <ul className="flex justify-end">
                <li>
                  <a href="/our-team">Our Team</a>
                </li>
                <li>
                  <a href="/our-team"> Services </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <Logo />
            </div>
            <div className="w-full lg:w-1/3">
              <ul className="flex justify-start">
                <li>
                  <a href="/our-team">Our Work</a>
                </li>
                <li>
                  <a href="/our-team">Contact Us </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/3 text-right">
              <p>social icons</p>
            </div>
            <div className="w-full lg:w-1/3 text-right">
              <p>social icons</p>
            </div>
            <div className="w-full lg:w-1/3 text-right">
              <p>social icons</p>
            </div>
          </div>
        </div>
        <div
          className="text-center bg-neutral-green"
          style={{ paddingTop: "10px", paddingBottom: "10px", color: "gray" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <small>
              <a
                href="https://latinowebstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Full-Stack Web & Software Engineer & SEO done by Latino Web Studio in Denver, CO"
              >
                Full-Stack Web & Software Engineer and SEO in Denver, CO
              </a>{" "}
              done by Latino Web Studio.
            </small>
          </div>
        </div>
      </footer>
      <p>footer</p>
    </>
  );
}
