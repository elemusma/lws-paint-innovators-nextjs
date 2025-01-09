import "../styles/nav.scss";
import Logo from "./logo";

export default function NavItems() {
  return (
    <>
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
        <div className="w-full lg:w-1/6">
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
    </>
  );
}
