import Image from "next/image";
import "../styles/footer.scss";
import "../styles/social-icons.scss";
import {
  ArkansasAddress,
  ArkansasPhone,
  ColoradoAddress,
  ColoradoPhone,
  Company,
  Email,
  OklahomaAddress,
  OklahomaPhone,
  Phone,
} from "./globals.js";
import NavItems from "./nav-items";

export default function Footer() {
  return (
    <>
      <footer>
        <div
          className="w-full relative font-aspira-black italic"
          style={{ marginBottom: "-50px" }}
        >
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3">
              <div
                className="location h-full py-20 relative lg:mr-2 overflow-hidden px-10 flex justify-center items-center"
                style={{}}
              >
                <Image
                  src="/photos/Arkansas.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt="Arkansas Professional Painters. Get Free Estimate"
                  fill
                />
                {/* <img
                  src="photos/Arkansas.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt=""
                /> */}
                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50"></div>
                <div
                  className="relative text-center text-white text-shadow"
                  style={{}}
                >
                  <h2 className="text-3xl uppercase">Arkansas</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: ArkansasAddress }}
                    className="text-sm"
                  ></p>
                  {/* dangerouslySetInnerHTML={{ __html: ArkansasAddress }} */}
                  {/* <p className="text:sm">{ArkansasAddress}</p> */}
                  <a href={`tel:+${ArkansasPhone}`} className="text-3xl">
                    {ArkansasPhone}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 text-right">
              <div
                className="location h-full py-20 relative lg:mr-2 overflow-hidden px-10 flex justify-center items-center"
                style={{}}
              >
                <Image
                  src="/photos/Oklahoma.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt="Oklahoma Professional Painters. Get Free Estimate"
                  fill
                />
                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50"></div>
                <div
                  className="relative text-center text-white text-shadow"
                  style={{}}
                >
                  <h2 className="text-3xl uppercase">Oklahoma</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: OklahomaAddress }}
                    className="text:sm"
                  ></p>
                  <a href={`tel:+${OklahomaPhone}`} className="text-3xl">
                    {OklahomaPhone}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 text-right">
              <div
                className="location h-full py-20 relative lg:mr-2 overflow-hidden px-10"
                style={{}}
              >
                <Image
                  src="/photos/Colorado.jpg"
                  className="w-full absolute h-full"
                  style={{ objectFit: "cover", top: 0, left: 0 }}
                  alt="Colorado Professional Painters. Get Free Estimate"
                  fill
                />

                <div className="absolute w-full h-full bg-black top-0 left-0 opacity-50"></div>
                <div
                  className="relative text-center text-white text-shadow"
                  style={{}}
                >
                  <h2 className="uppercase text-3xl">Colorado</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: ColoradoAddress }}
                    className="text:sm"
                  ></p>
                  <a href={`tel:+${ColoradoPhone}`} className="text-3xl">
                    {ColoradoPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navigation */}
        <div className="max-w-screen-lg mx-auto relative">
          <NavItems logoContainerClassName="lg:w-1/3" />
        </div>
        {/* icons */}
        <div className="max-w-screen-lg mx-auto pt-10 pb-10">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/3 text-right flex lg:justify-start justify-center lg:pb-0 pb-10">
              <a href="#" className="block">
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
              <a href="#">
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
            <div className="w-full lg:w-1/3 text-center">
              <a href={`tel:+${Phone}`}>
                {/* <img
                  src="/assets/Headphones-Black.png"
                  style={{ width: "65px" }}
                  className="m-auto"
                  alt=""
                /> */}
                <Image
                  src="/assets/Headphones-Black.png"
                  className="m-auto"
                  width={65}
                  height={65}
                  alt="Customer Support"
                />
                <strong>
                  <em>{Phone}</em>
                </strong>
              </a>
            </div>
            <div className="w-full lg:w-1/3 lg:text-right text-center text-sm">
              <p>
                &copy;{new Date().getFullYear()} {Company}
                <br></br>
                <a href={`mailto:${Email}`}>
                  <strong>
                    <em>{Email}</em>
                  </strong>
                </a>
                <br></br>
                <a href="#">Privacy Policy</a> / <a href="#">Disclaimer</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="text-center bg-neutral-green px-10"
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
    </>
  );
}
