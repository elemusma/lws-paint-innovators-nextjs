import ContentBlock from "../content-block";
import GoogleReviews from "./GoogleReviews";

export default function Testimonials() {
  return (
    <>
      <ContentBlock
        sectionClassName=""
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <h2 className="text-4xl font-aspira-thin uppercase">Testimonials</h2>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-[#555555] border-t-[5px] border-b-[5px] border-[#c2c2c2]"
        containerClassName="max-w-screen-lg mx-auto py-8"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full"
      >
        <GoogleReviews
          placeId="ChIJKwNdghpuyYcRa1If_50aUb4"
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        />
        {/* <div className="text-center pt-20">
          <a
            href="https://www.google.com/search?q=PAINT+innovators+arkansas&oq=paint+inno&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgYIAhBFGDkyBggDEEUYQDIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNzUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x87c96e1a825d032b:0xbe511a9dff1f526b,3,,,,"
            target="_blank"
            className="btn-main"
          >
            Leave a Google Review
          </a>
        </div> */}
        {/* <GoogleBusinessReviews
          accountId="YOUR_ACCOUNT_ID"
          locationId="YOUR_LOCATION_ID"
          accessToken="YOUR_OAUTH_ACCESS_TOKEN"
        /> */}
      </ContentBlock>
    </>
  );
}
